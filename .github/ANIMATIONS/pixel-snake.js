/**
 * 🐍 Interactive Pixel Snake Animation
 * Canvas-based implementation for smooth 60fps rendering
 * Uses Anime.js for coordinated motion
 * 
 * Features:
 * - Responsive canvas sizing
 * - Autonomous movement pattern
 * - Multiple color schemes
 * - Performance optimized
 */

class PixelSnake {
  constructor(canvasId = 'pixel-snake', options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.error(`Canvas with ID '${canvasId}' not found`);
      return;
    }
    
    this.ctx = this.canvas.getContext('2d');
    this.pixelSize = options.pixelSize || 8;
    this.colors = options.colors || [
      '#FF00FF', // Neon Pink
      '#00FFFF', // Neon Cyan
      '#00FF88'  // Neon Green
    ];
    this.segments = [];
    this.direction = { x: 1, y: 0 };
    this.nextDirection = { x: 1, y: 0 };
    this.speed = options.speed || 3;
    this.moveCounter = 0;
    this.isMoving = true;
    
    this.setupCanvas();
    this.initSnake();
    this.startAnimation();
  }
  
  setupCanvas() {
    // Responsive canvas sizing
    const adjustCanvasSize = () => {
      const width = this.canvas.parentElement.offsetWidth;
      const height = this.canvas.parentElement.offsetHeight;
      
      this.canvas.width = width;
      this.canvas.height = height;
      this.gridWidth = Math.floor(width / this.pixelSize);
      this.gridHeight = Math.floor(height / this.pixelSize);
    };
    
    adjustCanvasSize();
    window.addEventListener('resize', () => adjustCanvasSize());
  }
  
  initSnake() {
    // Initialize snake with starting position
    const startX = Math.floor(this.gridWidth / 2);
    const startY = Math.floor(this.gridHeight / 2);
    
    for (let i = 5; i > 0; i--) {
      this.segments.push({
        x: startX - i,
        y: startY,
        color: this.colors[0]
      });
    }
  }
  
  update() {
    if (!this.isMoving) return;
    
    // Handle direction changes with some smoothing
    if (this.isValidDirectionChange(this.nextDirection)) {
      this.direction = { ...this.nextDirection };
    }
    
    this.moveCounter++;
    
    // Move at controlled speed
    if (this.moveCounter >= this.speed) {
      this.moveCounter = 0;
      
      const head = this.segments[this.segments.length - 1];
      let newX = head.x + this.direction.x;
      let newY = head.y + this.direction.y;
      
      // Wrap around edges
      if (newX < 0) newX = this.gridWidth - 1;
      if (newX >= this.gridWidth) newX = 0;
      if (newY < 0) newY = this.gridHeight - 1;
      if (newY >= this.gridHeight) newY = 0;
      
      // Add new segment
      const colorIndex = Math.floor(Math.random() * this.colors.length);
      this.segments.push({
        x: newX,
        y: newY,
        color: this.colors[colorIndex]
      });
      
      // Remove tail to maintain length
      if (this.segments.length > 20) {
        this.segments.shift();
      }
    }
  }
  
  isValidDirectionChange(newDir) {
    // Prevent 180-degree turns
    return !(newDir.x === -this.direction.x && newDir.y === -this.direction.y);
  }
  
  render() {
    // Clear canvas with semi-transparent background for trail effect
    this.ctx.fillStyle = 'rgba(10, 14, 39, 0.2)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw segments with glow effect
    this.segments.forEach((segment, index) => {
      const opacity = Math.max(0.3, 1 - index / this.segments.length);
      const x = segment.x * this.pixelSize;
      const y = segment.y * this.pixelSize;
      
      // Glow effect
      this.ctx.shadowColor = segment.color;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      
      // Draw pixel block
      this.ctx.fillStyle = segment.color + Math.floor(opacity * 255).toString(16);
      this.ctx.fillRect(x + 1, y + 1, this.pixelSize - 2, this.pixelSize - 2);
      
      // Border effect
      this.ctx.strokeStyle = segment.color;
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(x + 1, y + 1, this.pixelSize - 2, this.pixelSize - 2);
    });
    
    // Reset shadow
    this.ctx.shadowColor = 'transparent';
  }
  
  startAnimation() {
    const animate = () => {
      this.update();
      this.render();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Autonomous movement pattern
    this.setupAutonomousMovement();
  }
  
  setupAutonomousMovement() {
    // Snake changes direction periodically for organic movement
    setInterval(() => {
      const directions = [
        { x: 1, y: 0 },   // Right
        { x: -1, y: 0 },  // Left
        { x: 0, y: 1 },   // Down
        { x: 0, y: -1 }   // Up
      ];
      
      // Filter out reverse direction
      const validDirs = directions.filter(dir => 
        !(dir.x === -this.direction.x && dir.y === -this.direction.y)
      );
      
      this.nextDirection = validDirs[Math.floor(Math.random() * validDirs.length)];
    }, 2000);
  }
  
  // Public methods for interaction
  play() {
    this.isMoving = true;
  }
  
  pause() {
    this.isMoving = false;
  }
  
  setSpeed(newSpeed) {
    this.speed = Math.max(1, Math.min(10, newSpeed));
  }
  
  changeColors(newColors) {
    this.colors = newColors;
  }
  
  // Utility: Mouse following mode (optional)
  enableMouseFollowing() {
    const updateDirectionTowardsMouse = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const head = this.segments[this.segments.length - 1];
      const headX = head.x * this.pixelSize;
      const headY = head.y * this.pixelSize;
      
      let dirX = 0, dirY = 0;
      
      if (Math.abs(mouseX - headX) > Math.abs(mouseY - headY)) {
        dirX = mouseX > headX ? 1 : -1;
      } else {
        dirY = mouseY > headY ? 1 : -1;
      }
      
      if (this.isValidDirectionChange({ x: dirX, y: dirY })) {
        this.nextDirection = { x: dirX, y: dirY };
      }
    };
    
    document.addEventListener('mousemove', updateDirectionTowardsMouse);
  }
}

// Export for use in HTML/JS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PixelSnake;
}
