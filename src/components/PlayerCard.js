import InsightCard from "./InsightCard";
import PlayerRadarChart from "./PlayerRadarChart";

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

      <div className="stat-grid">
        <p><span>{metrics.points}</span> Points</p>
        <p><span>{totals.gamesPlayed}</span> Games</p>
        <p><span>{totals.goals}</span> Goals</p>
        <p><span>{totals.assists}</span> Assists</p>
        <p><span>{totals.shots}</span> Shots</p>
        <p><span>{totals.saves}</span> Saves</p>
        <p><span>{totals.blocks}</span> Blocks</p>
        <p><span>{totals.passes}</span> Passes</p>
        <p><span>{totals.wins}</span> Wins</p>
        <p><span>{totals.losses}</span> Losses</p>
        <p><span>{metrics.winRate}%</span> Win Rate</p>
        <p><span>{metrics.pointsPerGame}</span> Pts/Game</p>
        <p><span>{metrics.goalsPerGame}</span> Goals/Game</p>
        <p><span>{metrics.assistsPerGame}</span> Assists/Game</p>
      </div>

      <PlayerRadarChart totals={totals} metrics={metrics} />

      <InsightCard
        totals={totals}
        pointsPerGame={metrics.pointsPerGame}
        goalsPerGame={metrics.goalsPerGame}
        assistsPerGame={metrics.assistsPerGame}
        winRate={metrics.winRate}
      />

      <button className="delete-button" onClick={() => onDeletePlayer(player.id)}>
        Delete Player
      </button>
    </div>
  );
}

export default PlayerCard;