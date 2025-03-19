//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImage(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(img);
                img.onerror = () => reject(`Failed to load image: ${url}`);
            });
        }

        function downloadImages() {
            const loadingDiv = document.getElementById("loading");
            const errorDiv = document.getElementById("error");
    

            // Show loading spinner
            loadingDiv.style.display = "block";
            errorDiv.innerHTML = "";
            output.innerHTML = "";

            const imagePromises = images.map(url => downloadImage(url));

            Promise.all(imagePromises)
                .then(image => {
                    // Hide loading spinner
                    loadingDiv.style.display = "none";

                    // Display images
                    images.forEach(img => output.appendChild(img));
                })
                .catch(error => {
                    // Hide loading spinner
                    loadingDiv.style.display = "none";

                    // Display error message
                    errorDiv.innerHTML = error;
                });
        }

    
