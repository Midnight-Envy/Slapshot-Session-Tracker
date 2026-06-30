import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((response) => response.json())
      .then((playerData) => setPlayers(playerData));
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
          />
        ))}
      </div>
    </section>
  );
}

export default PlayerList;