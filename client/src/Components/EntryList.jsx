import React from 'react';
import './EntryList.css'; 

const EntryList = ({ entries }) => {
  return (
    <div className="entrylist">
      <h2 style={{ textAlign: 'center' }}>📝 Your Health Logs</h2>
      {[...entries].reverse().map((e, i) => (
        <div key={i} className="entry-card">
          <p><strong>📅 Date:</strong> {e.date}</p>
          <p><strong>🔥 Calories:</strong> {e.calories}</p>
          <p><strong>😴 Sleep:</strong> {e.sleep} hrs</p>
          <p><strong>🏋️ Workout:</strong> {e.workouts}</p>
          
        </div>
      ))}
    </div>
  );
};

export default EntryList;

