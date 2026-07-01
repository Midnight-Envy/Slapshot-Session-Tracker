import oddshotLogo from "../assets/logo_oddshot.png";

function Home() {
  return (
    <section className="home-page">
      <div className="home-card">
        <h2>Slapshot Session Tracker</h2>

        <p className="home-intro">
          Upload Slapshot Rebound match JSON files, create sessions,
          track players, and review scouting analytics across
          multiple games.
        </p>

        <div className="home-feature-grid">
          <div>Upload Match Data</div>
          <div>Create Sessions</div>
          <div>Track Players</div>
          <div>Analyze Performance</div>
        </div>
      </div>

      <div className="oddshot-disclaimer">
        <img
          src={oddshotLogo}
          alt="Oddshot Games"
          className="oddshot-disclaimer-logo"
        />

        <p>
          This site is not endorsed by or affiliated with Oddshot Games.
          All game content and materials are the property of Oddshot Games.
          Slapshot Rebound is a registered trademark of Oddshot Games.
          All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Home;