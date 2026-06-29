# Slapshot Session Tracker

A React application that transforms raw Slapshot Rebound match JSON files into player statistics, session summaries, and performance analytics.

## Description

Slapshot Session Tracker allows users to upload match data exported from Slapshot Rebound and organize that data into playable sessions. Users can select the players they want to track, view aggregate statistics, and discover trends across multiple gaming sessions.

The goal of the project is to convert raw match data into meaningful insights through an intuitive dashboard experience.

---

## Features

### Upload and Create Sessions

- Upload one or more match JSON files
- Parse files in React
- Create session records
- Persist sessions using json-server
- Automatically update application state after upload

### Manage Sessions and Track Players

- View previously uploaded sessions
- Review players discovered in each session
- Select players to track
- Persist tracked player selections

### Player Analytics Dashboard

View aggregate statistics for tracked players, including:

- Games Played
- Goals
- Assists
- Saves
- Wins
- Losses
- Goals Per Game
- Saves Per Game

Generate insights such as:

- Highest scoring session
- Most active player
- Best win rate
- Average goals per game
- Average saves per game
- Most played teammate
- Most played opponent

---

## Routes

| Route | Description |
|---------|-------------|
| `/` | Home dashboard |
| `/upload` | Upload new session files |
| `/sessions` | View and manage sessions |
| `/players` | View tracked player analytics |

---

## Planned Components

- App
- NavBar
- Home
- UploadForm
- SessionList
- SessionCard
- SessionDetails
- PlayerSelector
- PlayerList
- PlayerCard
- InsightCard

---

## Technologies Used

- React
- React Router
- JavaScript
- CSS
- json-server

---

## Backend Structure

### Sessions

```json
{
  "id": 1,
  "name": "Friday Night Session",
  "date": "2026-06-29",
  "gameCount": 10,
  "playersFound": [
    "Midnight Envy",
    "Player2"
  ]
}
```

### Players

```json
{
  "id": 1,
  "name": "Midnight Envy",
  "gamesPlayed": 42,
  "goals": 87,
  "assists": 31,
  "saves": 55,
  "wins": 24,
  "losses": 18
}
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd slapshot-session-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start json-server

```bash
npx json-server --watch db.json --port 3001
```

### 4. Start the React Application

```bash
npm start
```

### 5. Open the Application

Navigate to:

```txt
http://localhost:3000
```

---

## Technical Challenges

- Parsing uploaded JSON files
- Aggregating player statistics across multiple sessions
- Managing shared React state
- Generating player insights from session data

---

## Stretch Goals

- AI-generated coaching insights
- Historical progression graphs
- Session comparison tools
- Team chemistry tracking
- Exportable player reports
- Advanced player trend analysis
- Leaderboard
  
