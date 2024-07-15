document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('heroVideo');
    const volumeSlider = document.getElementById('volumeSlider');

    volumeSlider.addEventListener('input', (event) => {
        video.volume = event.target.value;
    });
});
