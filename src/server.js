const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const schedule = [
  {
    id: 1,
    name: 'Train A',
    departureTime: '9:00 AM',
    arrivalTime: '11:00 AM',
  },
  {
    id: 2,
    name: 'Train B',
    departureTime: '11:30 AM',
    arrivalTime: '1:30 PM',
  },
  {
    id: 3,
    name: 'Train C',
    departureTime: '2:00 PM',
    arrivalTime: '4:00 PM',
  },
];

app.get('/schedule', (req, res) => {
  res.json(schedule);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
