let currentIndex = 0;

function DisplayPhotos(photoPath) {
    clearPhotoContainer();
    fetchPhotoData(photoPath)
    .then(data => {
        displayPhotos(data.photos);
        attachModalBehavior();
    })
    .catch(error => console.error('Error loading JSON:', error));
}

function clearPhotoContainer() {
    const container = document.getElementById('photos-container');
    container.innerHTML = '';
}

function fetchPhotoData(photoPath) {
    return fetch(`JSON/${photoPath}.json`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}

function displayPhotos(photos) {
    const container = document.getElementById('photos-container');
    photos.forEach((photo, index) => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add('photo');
        photoDiv.innerHTML = `
            <img src="${photo.icon}" alt="${photo.name}">
        `;
        container.appendChild(photoDiv);
    });
}

function attachModalBehavior() {
    const images = document.querySelectorAll('.photo img');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById('caption');

    images.forEach((image, index) => {
        image.onclick = function() {
            openModal(image, index);
        };
    });

    document.querySelector('.prev').onclick = function() {
        navigateModal(-1);
    };

    document.querySelector(".next").onclick = function() {
        navigateModal(1);
    };

    const span = document.querySelector('.close');
    span.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();            
        }
    };
}

function openModal(img, index) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');

    document.body.style.overflow = "hidden";
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    currentIndex = index;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateModal(direction) {
    const images = document.querySelectorAll('.photo img');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    openModal(images[currentIndex], currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    DisplayPhotos('family');
});
