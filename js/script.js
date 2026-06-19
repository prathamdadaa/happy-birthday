// ---- Confetti celebration ----
const confettiBtn = document.getElementById('confetti-btn');

function fireConfetti() {
  const colors = ['#d9b35b', '#f4debb', '#8a6f3a', '#ffffff'];

  confetti({
    particleCount: 120,
    spread: 70,
    startVelocity: 45,
    origin: { y: 0.6 },
    colors
  });

  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors
    });
  }, 250);
}

confettiBtn.addEventListener('click', fireConfetti);

// Auto-fire once on load for a little welcome surprise
window.addEventListener('load', () => {
  setTimeout(fireConfetti, 600);
});

// ---- Background music toggle ----
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const musicLabel = document.getElementById('music-label');
const audio = document.getElementById('bg-audio');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play().catch(() => {
      // Placeholder audio file may be missing — fail silently.
      console.warn('Add your audio file at audio/birthday-tune.mp3 to enable music.');
    });
    musicIcon.textContent = '🔊';
    musicLabel.textContent = 'Pause music';
    musicBtn.setAttribute('aria-pressed', 'true');
  } else {
    audio.pause();
    musicIcon.textContent = '🔈';
    musicLabel.textContent = 'Play music';
    musicBtn.setAttribute('aria-pressed', 'false');
  }
  isPlaying = !isPlaying;
});
