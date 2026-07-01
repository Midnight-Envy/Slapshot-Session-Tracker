export function getPlayerGames(player, sessions) {
  return sessions.flatMap((session) => {
    if (!session.games) {
      return [];
    }

    return session.games.flatMap((game) => {
      return game.players.filter(
        (gamePlayer) => gamePlayer.username === player.name
      );
    });
  });
}

export function getPlayerTotals(playerGames) {
  return playerGames.reduce(
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
}

export function getPlayerMetrics(totals) {
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

  return {
    points,
    winRate,
    goalsPerGame,
    assistsPerGame,
    pointsPerGame,
  };
}