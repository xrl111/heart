document.addEventListener('DOMContentLoaded', () => {
  // Create floating hearts background
  createFloatingHearts();

  // Add sparkle effect on hover for title
  const title = document.querySelector('.title');
  title.addEventListener('mouseover', createSparkles);

  // Add mystical effects for tarot symbols
  const tarotSymbols = document.querySelectorAll('.tarot-symbols span');
  tarotSymbols.forEach((symbol) => {
    symbol.addEventListener('mouseover', createMysticalEffect);
  });

  // Add hover effect for cat silhouette
  const cat = document.querySelector('.cat-silhouette');
  cat.addEventListener('mouseover', () => {
    cat.style.transform = 'scale(1.2)';
    cat.style.transition = 'transform 0.3s ease';
  });
  cat.addEventListener('mouseout', () => {
    cat.style.transform = 'scale(1)';
  });
});

function createFloatingHearts() {
  const container = document.querySelector('.container');
  const symbols = ['✨', '🌙', '⭐', '♑', '🔮'];
  const numberOfSymbols = 15;

  for (let i = 0; i < numberOfSymbols; i++) {
    const symbol = document.createElement('div');
    symbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.className = 'floating-symbol';
    symbol.style.left = `${Math.random() * 100}%`;
    symbol.style.animationDuration = `${Math.random() * 3 + 2}s`;
    symbol.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(symbol);

    // Add CSS for the floating symbols
    const style = document.createElement('style');
    style.textContent = `
            .floating-symbol {
                position: absolute;
                font-size: 1.5rem;
                pointer-events: none;
                animation: float linear infinite;
                opacity: 0.6;
                filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
            }
            
            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }
}

function createMysticalEffect(event) {
  const symbol = event.target;
  const rect = symbol.getBoundingClientRect();
  const numberOfParticles = 10;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'mystical-particle';

    const angle = (i / numberOfParticles) * 360;
    const radius = 30;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    particle.style.left = `${rect.left + rect.width / 2 + x}px`;
    particle.style.top = `${rect.top + rect.height / 2 + y}px`;

    document.body.appendChild(particle);

    // Add CSS for mystical particles
    const style = document.createElement('style');
    style.textContent = `
        .mystical-particle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #fff, transparent);
            pointer-events: none;
            animation: mystical 1s linear forwards;
        }
        
        @keyframes mystical {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Remove particle after animation
    setTimeout(() => particle.remove(), 1000);
  }
}

function createSparkles(event) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';

  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';

  event.target.appendChild(sparkle);

  const style = document.createElement('style');
  style.textContent = `
        .sparkle {
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--moss-green) 10%, transparent 70%);
            pointer-events: none;
            animation: sparkle 0.8s linear forwards;
        }
        
        @keyframes sparkle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(1) rotate(180deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  setTimeout(() => sparkle.remove(), 1000);
}
