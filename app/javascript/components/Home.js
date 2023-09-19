import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Greeting App!</h1>
      <p>Click the button below to get a random greeting.</p>
      <Link to="/greeting">
        <button className="random-button">Random Greeting</button>
      </Link>
    </div>
  );
}
