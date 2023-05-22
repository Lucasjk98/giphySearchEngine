const apiKey = "09KrvrAEvipcMl03BiINV468jgTCtNRi"; 

const form = document.querySelector("form");
const searchInput = document.querySelector("#search-input");
const limitSelect = document.querySelector("#limit-select");
const gifContainer = document.querySelector("#gif-container");

form.addEventListener("submit", e => {
      e.preventDefault();
      
      // Clear existing GIFs
      gifContainer.innerHTML = "";
      
      // Get search query and limit
      const query = searchInput.value;
      const limit = limitSelect.value;
      
      // Fetch GIFs from Giphy API
      fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(data => {
          // Create GIF elements and add to container
          data.data.forEach(gifData => {
            const gifElement = document.createElement("div");
            gifElement.classList.add("gif");
            gifElement.innerHTML = `<img src="${gifData.images.fixed_height.url}" alt="${gifData.title}">`;
            gifContainer.appendChild(gifElement);
          });
        })
        .catch(error => console.error(error));
    });