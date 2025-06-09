document.getElementById('draw-button').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/play-round', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <p><strong>Player Card:</strong> ${data.playerCard.rank} of ${data.playerCard.suit}</p>
        <p><strong>AI Card:</strong> ${data.aiCard.rank} of ${data.aiCard.suit}</p>
        <p><strong>Result:</strong> ${data.result}</p>
      `;
    } catch (error) {
      console.error('Error drawing cards:', error);
    }
  });