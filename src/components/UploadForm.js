import { useState } from "react";
import { API_URL } from "../api";

function UploadForm() {
  const [sessionName, setSessionName] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState("");

  function handleFileChange(event) {
    const filesArray = Array.from(event.target.files);

    if (filesArray.length > 15) {
      setMessage("You can only upload up to 15 JSON files at once.");
      setSelectedFiles([]);
      return;
    }

    setSelectedFiles(filesArray);
    setMessage(`${filesArray.length} file(s) selected.`);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!sessionName) {
      setMessage("Please enter a session name.");
      return;
    }

    if (selectedFiles.length === 0) {
      setMessage("Please select at least one JSON file.");
      return;
    }

    const uploadedGames = await Promise.all(
      selectedFiles.map(async (file) => {
        const fileText = await file.text();
        return JSON.parse(fileText);
      })
    );

    const allPlayerNames = uploadedGames.flatMap((game) =>
      game.players.map((player) => player.username)
    );

    const uniquePlayerNames = [...new Set(allPlayerNames)];

    const newSession = {
      name: sessionName,
      date: new Date().toISOString().split("T")[0],
      gameCount: uploadedGames.length,
      playersFound: uniquePlayerNames,
      games: uploadedGames,
    };

    const response = await fetch(`${API_URL}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSession),
    });

    const savedSession = await response.json();

    setMessage(
      `Session created: ${savedSession.gameCount} games and ${savedSession.playersFound.length} players loaded.`
    );

    setSessionName("");
    setSelectedFiles([]);
  }

  return (
    <section>
      <h2>Upload Session</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="session-name">Session Name</label>

          <input
            id="session-name"
            type="text"
            value={sessionName}
            onChange={(event) => setSessionName(event.target.value)}
            placeholder="June 19 Ranked Grind"
          />
        </div>

        <div>
          <label htmlFor="session-files">
            Upload Match JSON Files
          </label>

          <input
            id="session-files"
            type="file"
            accept=".json"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">
          Create Session
        </button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
}

export default UploadForm;