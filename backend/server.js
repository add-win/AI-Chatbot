require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const COHERE_API_KEY = process.env.COHERE_API_KEY;

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        model: 'command', // ✅ Correct for /generate
        prompt: message,
        max_tokens: 300,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data.generations[0].text.trim();
    res.json({ reply });
  } catch (error) {
    console.error('Cohere API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error connecting to Cohere API' });
  }
});

app.listen(5000, () => {
  console.log('✅ Cohere chatbot server running at http://localhost:5000');
});
