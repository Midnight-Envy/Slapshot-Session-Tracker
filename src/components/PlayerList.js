import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { API_URL } from "../api";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/players`)
      .then((resp) => resp.json())
      .then((playersData) => setPlayers(playersData));

    fetch(`${API_URL}/sessions`)
      .then((resp) => resp.json())
      .then((sessionsData) => setSessions(sessionsData));
  }, []);

  function handleDeletePlayer(playerId) {
    fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    }).then(() => {
      setPlayers((currentPlayers) =>
        currentPlayers.filter((player) => player.id !== playerId)
      );
    });
  }

  return (
    <div>
      <h2>Tracked Players</h2>

      {players.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          sessions={sessions}
          onDeletePlayer={handleDeletePlayer}
        />
      ))}
    </div>
  );
}

export default PlayerList;