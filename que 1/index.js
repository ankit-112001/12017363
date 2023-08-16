const express = require('express');
const axios = require('axios');
const urlConfig = require('./config/urls'); 

const app = express();
const PORT = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URLs' });
  }

  const uniqueNumbers = new Set();

  try {
    const requests = urls.map(async url => {
      try {
        const response = await axios.get(url, { timeout: 500 });
        const data = response.data;
        const numbers = data.numbers || [];
        numbers.forEach(number => uniqueNumbers.add(number));
      } catch (error) {
      }
    });

    await Promise.all(requests);

    const sortedNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
    res.json({ numbers: sortedNumbers });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});