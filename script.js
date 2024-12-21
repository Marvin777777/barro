if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(() => {
        console.log('Service Worker Registered');
      });
    });
  }
  
  const button = document.getElementById('generate-cat');
  const img = document.getElementById('cat-photo');
  
  // API URL
  const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
  
  // Fetch a random cat image
  button.addEventListener('click', async () => {
    try {
      const response = await fetch(catApiUrl);
      const data = await response.json();
      img.src = data[0].url;
      img.alt = 'Random cat image';  // Set an alt attribute for the image.
    } catch (error) {
      console.error('Error fetching the cat image:', error);
      img.src = '';  // Clear the image source on error.
      img.alt = 'Failed to load cat image.';  // Set alt text if fetching fails.
    }
  });
  
