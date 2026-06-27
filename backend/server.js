require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Groq = require('groq-sdk');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const groq = new Groq({
  apiKey: GROQ_API_KEY,
});

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'user', content: message },
      ],
      model: 'llama-3.3-70b-versatile',
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = chatCompletion.choices[0]?.message?.content?.trim() || '';
    res.json({ reply });
  } catch (error) {
    console.error('Groq API Error:', error.message);
    res.status(500).json({ error: 'Error connecting to Groq API' });
  }
});

app.listen(5000, () => {
  console.log('✅ Groq chatbot server running at http://localhost:5000');
});

