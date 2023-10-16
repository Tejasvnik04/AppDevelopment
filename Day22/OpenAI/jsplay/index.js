const express = require('express');
const axios = require('axios');
const app = express();
const port = 8083;

app.use(express.json());

const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;
  
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt,
        max_tokens: 50,
      }, {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      });
  
      res.json(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while generating text.' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
