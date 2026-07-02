import { useState } from "react";
import PlayerSelector from "./PlayerSelector";
import { API_URL } from "../api";

function SessionCard({ session, players, setPlayers, onDeleteSession }) {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [message, setMessage] = useState("");

  function handlePlayerToggle(playerName) {
    if (selectedPlayers.includes(playerName)) {
      setSelectedPlayers((currentSelectedPlayers) =>
        currentSelectedPlayers.filter((name) => name !== playerName)
      );
    } else {
      setSelectedPlayers((currentSelectedPlayers) => [
        ...currentSelectedPlayers,
        playerName,
      ]);
    }
  }

  function handleSavePlayers() {
    selectedPlayers.forEach((playerName) => {
      const existingPlayer = players.find((player) => player.name === playerName);

      if (existingPlayer) {
        if (!existingPlayer.sessionIds.includes(session.id)) {
          const updatedPlayer = {
            ...existingPlayer,
            sessionIds: [...existingPlayer.sessionIds, session.id],
          };

          fetch(`${API_URL}/players/${existingPlayer.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPlayer),
          })
            .then((resp) => resp.json())
            .then((updatedPlayerFromServer) => {
              setPlayers((currentPlayers) =>
                currentPlayers.map((player) =>
                  player.id === updatedPlayerFromServer.id
                    ? updatedPlayerFromServer
                    : player
                )
              );
            });
        }
      } else {
        const newPlayer = {
          name: playerName,
          tracked: true,
          sessionIds: [session.id],
        };

        fetch(`${API_URL}/players`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPlayer),
        })
          .then((resp) => resp.json())
          .then((newPlayerFromServer) => {
            setPlayers((currentPlayers) => [...currentPlayers, newPlayerFromServer]);
          });
      }
    });

    setMessage("Tracked players saved.");
  }

  return (
    <article className="session-card tile-card">
      <div className="card-topline">
        <h3>{session.name}</h3>
        <span>{session.gameCount} games</span>
      </div>

      <p className="muted-text">Date: {session.date}</p>
      <h4>Select Players</h4>

      <div className="selector-list">
        {session.playersFound.map((playerName) => (
          <PlayerSelector
            key={playerName}
            playerName={playerName}
            selectedPlayers={selectedPlayers}
            onPlayerToggle={handlePlayerToggle}
          />
        ))}
      </div>

      <button onClick={handleSavePlayers}>Save Tracked Players</button>
      {message && <p className="success-message">{message}</p>}
      <button className="danger-button" onClick={() => onDeleteSession(session.id)}>
        Delete Session
      </button>
    </article>
  );
}

export default SessionCard;