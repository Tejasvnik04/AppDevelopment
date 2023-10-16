import React, { useState } from 'react';
import './unknown.css';

function Unknown() {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerateText = async () => {
    try {
        const response = await fetch('http://localhost/8083/generate-text', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        setGeneratedText(data);
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className="unknown">
      <h1>Mandrake Mystic ChatBot</h1>
      <textarea
        placeholder="Enter a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerateText}>Generate Text</button>
      <div className="generated-text">
        {generatedText && (
          <div>
            <h2>Generated Text:</h2>
            <p>{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Unknown;
