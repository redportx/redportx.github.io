let currentIndex=0;

document.addEventListener('DOMContentLoaded', () => {
    fetch('/JSON/honeymoon/cincinnati-zoo.json') // Ensure the correct path
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('photos-container');
            data.photos.forEach((photo,index) => {
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

            images.forEach((img, index) => {
                img.onclick = function() {
                    document.body.style.overflow = 'hidden';
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                    currentIndex=index;
                }
            });

            document.querySelector('.prev').onclick = function() {
                currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                modalImg.src = images[currentIndex].src;
                captionText.innerHTML = images[currentIndex].alt;

            };

            document.querySelector('.next').onclick = function() {
                currentIndex = currentIndex < images.length-1 ? currentIndex+1 : 0;
                modalImg.src = images[currentIndex].src;
                captionText.innerHTML = images[currentIndex].alt;


            };

            const span = document.getElementsByClassName('close')[0];
            span.onclick = function() {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            };

            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = 'auto';
                }
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});
