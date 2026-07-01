function PlayerSelector({ playerName, selectedPlayers, onPlayerToggle }) {
  return (
    <div className="player-selector">
      <label>
        <input
          type="checkbox"
          checked={selectedPlayers.includes(playerName)}
          onChange={() => onPlayerToggle(playerName)}
        />
        {playerName}
      </label>
    </div>
  );
}

export default PlayerSelector;