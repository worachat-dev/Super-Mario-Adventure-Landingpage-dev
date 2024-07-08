// index.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('adVideo');
    const openModalButton = document.querySelector('.button-trailer');

    // Function to open the video modal
    function openVideoModal() {
        modal.style.display = "flex";
        video.play();
    }

    // Function to close the video modal
    function closeVideoModal() {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }

    // Function to navigate to the game page
    function navigateToGame() {
        window.location.href = "/Users/worachatwannawong/Downloads/javascript.2023/NK_Classic_Mario_TeacherVersion/index.html";
    }

    // Event listeners
    openModalButton.addEventListener('click', openVideoModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.className === 'close-btn') {
            closeVideoModal();
        }
    });

    // Attach navigateToGame to the Play button
    document.querySelector('.button-play').addEventListener('click', navigateToGame);
});

