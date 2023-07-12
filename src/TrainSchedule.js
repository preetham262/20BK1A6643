import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await axios.get('http://localhost:8000/schedule');
      setSchedule(response.data);
    } catch (error) {
      console.error('Error fetching train schedule:', error);
    }
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <ul>
        {schedule.map((train) => (
          <li key={train.id}>
            <p>Train Name: {train.name}</p>
            <p>Departure Time: {train.departureTime}</p>
            <p>Arrival Time: {train.arrivalTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainSchedule;
