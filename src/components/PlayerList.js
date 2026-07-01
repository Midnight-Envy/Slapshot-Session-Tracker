import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((playerData) => setPlayers(playerData));

    fetch("http://localhost:3001/sessions")
      .then((response) => response.json())
      .then((sessionData) => setSessions(sessionData));
  }, []);

  if (players.length === 0) {
    return (
      <section>
        <h2>Tracked Players</h2>
        <p>No tracked players saved yet.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Tracked Players</h2>

      <div>
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            sessions={sessions}
          />
        ))}
      </div>
    </section>
  );
}

export default PlayerList;