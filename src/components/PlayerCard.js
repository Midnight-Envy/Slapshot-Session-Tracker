function PlayerCard({ player }) {
  const sessionCount = player.sessionIds ? player.sessionIds.length : 0;

  return (
    <article>
      <h3>{player.name}</h3>
      <p>Tracked: {player.tracked ? "Yes" : "No"}</p>
      <p>Sessions Tracked: {sessionCount}</p>
    </article>
  );
}

export default PlayerCard;