import { useEffect, useState } from "react";
import SessionCard from "./SessionCard";

function SessionList() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sessions")
      .then((response) => response.json())
      .then((sessionData) => setSessions(sessionData));
  }, []);

  return (
    <section>
      <h2>Saved Sessions</h2>

      {sessions.length === 0 ? (
        <p>No sessions uploaded yet.</p>
      ) : (
        <div>
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      )}
    </section>
  );
}

export default SessionList;