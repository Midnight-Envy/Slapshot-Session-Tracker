function InsightCard({
  totals,
  pointsPerGame,
  goalsPerGame,
  assistsPerGame,
  winRate,
}) {
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
    <div className="insight-card">
      <h4>Scout Insight</h4>
      <p>{insight}</p>
    </div>
  );
}

export default InsightCard;