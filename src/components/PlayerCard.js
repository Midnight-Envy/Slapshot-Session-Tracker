function PlayerCard({ player, sessions }) {
  const sessionCount = player.sessionIds ? player.sessionIds.length : 0;

  const playerGames = sessions.flatMap((session) => {
    if (!session.games) {
      return [];
    }

    return session.games.flatMap((game) => {
      return game.players.filter(
        (gamePlayer) => gamePlayer.username === player.name
      );
    });
  });

  const totals = playerGames.reduce(
    (totalStats, gamePlayer) => {
      const stats = gamePlayer.stats;

      return {
        gamesPlayed: totalStats.gamesPlayed + (stats.games_played || 0),
        goals: totalStats.goals + (stats.goals || 0),
        assists: totalStats.assists + (stats.assists || 0),
        shots: totalStats.shots + (stats.shots || 0),
        saves: totalStats.saves + (stats.saves || 0),
        blocks: totalStats.blocks + (stats.blocks || 0),
        passes: totalStats.passes + (stats.passes || 0),
        wins: totalStats.wins + (stats.wins || 0),
        losses: totalStats.losses + (stats.losses || 0),
      };
    },
    {
      gamesPlayed: 0,
      goals: 0,
      assists: 0,
      shots: 0,
      saves: 0,
      blocks: 0,
      passes: 0,
      wins: 0,
      losses: 0,
    }
  );

  const points = totals.goals + totals.assists;

  const winRate =
    totals.gamesPlayed > 0
      ? ((totals.wins / totals.gamesPlayed) * 100).toFixed(1)
      : 0;

  const goalsPerGame =
    totals.gamesPlayed > 0
      ? (totals.goals / totals.gamesPlayed).toFixed(2)
      : 0;

  const assistsPerGame =
    totals.gamesPlayed > 0
      ? (totals.assists / totals.gamesPlayed).toFixed(2)
      : 0;

  const pointsPerGame =
    totals.gamesPlayed > 0
      ? (points / totals.gamesPlayed).toFixed(2)
      : 0;

  let insight = "Developing contributor.";

  if (pointsPerGame >= 2) {
    insight = "Elite offensive producer.";
  } else if (goalsPerGame >= 1) {
    insight = "Consistent goal scorer.";
  } else if (assistsPerGame >= 1) {
    insight = "Playmaking specialist.";
  } else if (
    totals.gamesPlayed > 0 &&
    (totals.blocks + totals.saves) / totals.gamesPlayed >= 1
  ) {
    insight = "Strong defensive contributor.";
  } else if (winRate >= 70) {
    insight = "Reliable winning presence.";
  }

  return (
    <article>
      <h3>{player.name}</h3>

      <p>Tracked: {player.tracked ? "Yes" : "No"}</p>
      <p>Sessions Tracked: {sessionCount}</p>

      <h4>Scouting Summary</h4>

      <p>Games Played: {totals.gamesPlayed}</p>
      <p>Points: {points}</p>
      <p>Win Rate: {winRate}%</p>

      <h4>Per Game Metrics</h4>

      <p>Goals/Game: {goalsPerGame}</p>
      <p>Assists/Game: {assistsPerGame}</p>
      <p>Points/Game: {pointsPerGame}</p>

      <h4>Scout Insight</h4>
      <p>{insight}</p>

      <h4>Raw Stats</h4>

      <p>Goals: {totals.goals}</p>
      <p>Assists: {totals.assists}</p>
      <p>Shots: {totals.shots}</p>
      <p>Saves: {totals.saves}</p>
      <p>Blocks: {totals.blocks}</p>
      <p>Passes: {totals.passes}</p>
      <p>Wins: {totals.wins}</p>
      <p>Losses: {totals.losses}</p>
    </article>
  );
}

export default PlayerCard;