/**
 * 🎨 Cyberpunk/Neon Theme Configuration
 * Author: YouraNoAI
 * Created: April 9, 2026
 * 
 * Color Palette untuk Neon Aesthetic:
 * - Primary Neon Pink: #FF00FF
 * - Primary Neon Cyan: #00FFFF
 * - Neon Green: #00FF88
 * - Dark Space Black: #0a0e27
 * - Text White: #FFFFFF
 */

// Color Palette
const COLORS = {
  primary: {
    pink: '#FF00FF',
    cyan: '#00FFFF',
    green: '#00FF88',
    purple: '#9D4EDD'
  },
  background: {
    dark: '#0a0e27',
    darker: '#050812',
    accent: '#1a1f3a'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#E0E0E0',
    muted: '#A0A0A0'
  },
  glow: {
    strong: 'rgba(255, 0, 255, 0.8)',
    medium: 'rgba(0, 255, 136, 0.6)',
    soft: 'rgba(0, 255, 255, 0.4)'
  }
};

// Neon Box Shadow Generator
const createNeonGlow = (color = COLORS.primary.pink, intensity = 1) => {
  return `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`;
};

// Animation Keyframes (for Anime.js)
const ANIMATIONS = {
  pixelSnake: {
    duration: 2000,
    easing: 'easeInOutQuad',
    loop: true
  },
  glow: {
    duration: 1500,
    easing: 'easeInOutSine',
    loop: true
  },
  fadeIn: {
    duration: 800,
    easing: 'easeOutQuad',
    delay: 100
  },
  slideIn: {
    duration: 1000,
    easing: 'easeOutCubic',
    delay: 200
  }
};

// Export for use in animations
export { COLORS, createNeonGlow, ANIMATIONS };
