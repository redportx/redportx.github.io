document.addEventListener('DOMContentLoaded', () => {
    fetch('/JSON/photos.json') // Ensure the correct path
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('photos-container');
            data.photos.forEach(photo => {
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo');
                photoDiv.innerHTML = `
                    <img src="${photo.icon}" alt="${photo.name}">
                `;
                container.appendChild(photoDiv);
            });

            // Add click event to images to open the modal
            const images = document.querySelectorAll('.photo img');
            const modal = document.getElementById('myModal');
            const modalImg = document.getElementById('img01');
            const captionText = document.getElementById('caption');
            images.forEach(img => {
                img.onclick = function() {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
            });

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName('close')[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal content, close it
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});
