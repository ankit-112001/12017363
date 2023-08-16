import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getAllTrains } from '../utils/api';

function TrainList({ token }) {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const trainData = await getAllTrains(token);
      setTrains(trainData);
    };
    fetchTrains();
  }, [token]);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            <Link to={`/train/${train.trainNumber}`}>{train.trainName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainList;