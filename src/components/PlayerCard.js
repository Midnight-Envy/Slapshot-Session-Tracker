import InsightCard from "./InsightCard";

import {
  getPlayerGames,
  getPlayerTotals,
  getPlayerMetrics,
} from "../utils/playerStats";

function PlayerCard({ player, sessions, onDeletePlayer }) {
  const playerGames = getPlayerGames(player, sessions);
  const totals = getPlayerTotals(playerGames);
  const metrics = getPlayerMetrics(totals);

  return (
    <div className="player-card">
      <h3>{player.name}</h3>

      <p>Games Played: {totals.gamesPlayed}</p>
      <p>Goals: {totals.goals}</p>
      <p>Assists: {totals.assists}</p>
      <p>Shots: {totals.shots}</p>
      <p>Saves: {totals.saves}</p>
      <p>Blocks: {totals.blocks}</p>
      <p>Passes: {totals.passes}</p>
      <p>Wins: {totals.wins}</p>
      <p>Losses: {totals.losses}</p>
      <p>Points: {metrics.points}</p>
      <p>Win Rate: {metrics.winRate}%</p>
      <p>Goals/Game: {metrics.goalsPerGame}</p>
      <p>Assists/Game: {metrics.assistsPerGame}</p>
      <p>Points/Game: {metrics.pointsPerGame}</p>

      <InsightCard
        totals={totals}
        pointsPerGame={metrics.pointsPerGame}
        goalsPerGame={metrics.goalsPerGame}
        assistsPerGame={metrics.assistsPerGame}
        winRate={metrics.winRate}
      />

      <button onClick={() => onDeletePlayer(player.id)}>Delete Player</button>
    </div>
  );
}

export default PlayerCard;