import React from "react";

const apps = [
  {
    name: "Coin",
    url: "https://coin.zerodha.com/",
    desc: "Mutual Funds investment platform",
  },
  {
    name: "Varsity",
    url: "https://zerodha.com/varsity/",
    desc: "Free stock market education",
  },
  {
    name: "Streak",
    url: "https://www.streak.tech/",
    desc: "Algo trading without coding",
  },
  {
    name: "Smallcase",
    url: "https://www.smallcase.com/",
    desc: "Thematic investment portfolios",
  },
  {
    name: "Sensibull",
    url: "https://sensibull.com/",
    desc: "Options trading simplified",
  },
];

const Apps = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Apps & Integrations</h2>
      <div style={styles.grid}>
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <h3>{app.name}</h3>
            <p>{app.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "20px",
    background: "#f9f9f9",
  },
  heading: {
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },
  card: {
    flex: "1 1 220px",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    textDecoration: "none",
    color: "#333",
    transition: "box-shadow 0.3s ease",
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
};

export default Apps;
