import React, { useState } from 'react';
import { scenarios } from './data/scenarios';
import { objections } from './data/objections';

export default function App() {
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[index % scenarios.length];
  const objection = objections[index % objections.length];

  return (
    <div>
      <h1>Sales Roleplay Game</h1>
      <div className="card">
        <p><strong>Customer Background:</strong> {scenario.background}</p>
        <p><strong>Need:</strong> {scenario.need}</p>
        <p><strong>Objection:</strong> {objection.text}</p>
        {showResult && (
          <div>
            <p><strong>Suggested Framework:</strong> {objection.framework}</p>
            <p><strong>Objection Level:</strong> {objection.level}</p>
            {scenario.products.map(p => (
              <p key={p.name}>
                <strong>{p.name}:</strong> {p.benefit}
              </p>
            ))}
          </div>
        )}
        <button onClick={() => setShowResult(true)}>End Turn</button>
        <button onClick={() => {
          setShowResult(false);
          setIndex(i => i + 1);
        }}>Next</button>
      </div>
    </div>
  );
}
