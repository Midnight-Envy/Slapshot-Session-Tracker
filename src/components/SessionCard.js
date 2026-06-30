function SessionCard({ session }) {
  return (
    <article>
      <h3>{session.name}</h3>
      <p>Date: {session.date}</p>
      <p>Games: {session.gameCount}</p>
      <p>Players Found: {session.playersFound.length}</p>
    </article>
  );
}

export default SessionCard;