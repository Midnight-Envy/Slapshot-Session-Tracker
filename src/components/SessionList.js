import { useEffect, useState } from "react";
import SessionCard from "./SessionCard";
import { API_URL } from "../api";

function SessionList() {
  const [sessions, setSessions] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/sessions`)
      .then((resp) => resp.json())
      .then((sessionsData) => setSessions(sessionsData));

    fetch(`${API_URL}/players`)
      .then((resp) => resp.json())
      .then((playersData) => setPlayers(playersData));
  }, []);

  function handleDeleteSession(sessionId) {
    fetch(`${API_URL}/sessions/${sessionId}`, {
      method: "DELETE",
    }).then(() => {
      setSessions((currentSessions) =>
        currentSessions.filter((session) => session.id !== sessionId)
      );
    });
  }

  return (
    <div>
      <h2>Saved Sessions</h2>

      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          session={session}
          players={players}
          setPlayers={setPlayers}
          onDeleteSession={handleDeleteSession}
        />
      ))}
    </div>
  );
}

export default SessionList;