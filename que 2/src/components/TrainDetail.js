import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainDetails } from '../utils/api';

function TrainDetail({ token }) {
  const { trainNumber } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      const details = await getTrainDetails(token, trainNumber);
      setTrainDetails(details);
    };
    fetchTrainDetails();
  }, [token, trainNumber]);

  if (!trainDetails) {
    return <div>Loading train details...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {trainDetails.trainName}</p>
      <p>Train Number: {trainDetails.trainNumber}</p>
      <p>Departure Time: {trainDetails.departureTime.Hours}:{trainDetails.departureTime.Minutes}</p>
      <p>Seats Available (Sleeper): {trainDetails.seatsAvailable.sleeper}</p>
      <p>Seats Available (AC): {trainDetails.seatsAvailable.AC}</p>
      <p>Price (Sleeper): {trainDetails.price.sleeper}</p>
      <p>Price (AC): {trainDetails.price.AC}</p>
      <p>Delayed By: {trainDetails.delayedBy} minutes</p>
    </div>
  );
}

export default TrainDetail;