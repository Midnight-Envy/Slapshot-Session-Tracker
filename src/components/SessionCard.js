import { useState } from "react";

function SessionCard({ session }) {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  function handlePlayerToggle(playerName) {
    if (selectedPlayers.includes(playerName)) {
      setSelectedPlayers(selectedPlayers.filter((name) => name !== playerName));
    } else {
      setSelectedPlayers([...selectedPlayers, playerName]);
    }
  }

  function handleSavePlayers() {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((existingPlayers) => {
        selectedPlayers.forEach((playerName) => {
          const existingPlayer = existingPlayers.find(
            (player) => player.name === playerName
          );

          if (existingPlayer) {
            const currentSessionIds = existingPlayer.sessionIds || [];

            const alreadyHasSession = currentSessionIds.includes(session.id);

            if (!alreadyHasSession) {
              fetch(`http://localhost:3001/players/${existingPlayer.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  sessionIds: [...currentSessionIds, session.id],
                }),
              });
            }
          } else {
            fetch("http://localhost:3001/players", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: playerName,
                tracked: true,
                sessionIds: [session.id],
              }),
            });
          }
        });
      });
  }

  return (
    <article>
      <h3>{session.name}</h3>

      <p>Date: {session.date}</p>
      <p>Games: {session.gameCount}</p>
      <p>Players Found: {session.playersFound.length}</p>

      <h4>Select Tracked Players</h4>

      {session.playersFound.map((playerName) => (
        <div key={playerName}>
          <label>
            <input
              type="checkbox"
              checked={selectedPlayers.includes(playerName)}
              onChange={() => handlePlayerToggle(playerName)}
            />
            {playerName}
          </label>
        </div>
      ))}

      <button onClick={handleSavePlayers}>Save Tracked Players</button>
    </article>
  );
}

export default SessionCard;