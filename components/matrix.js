// ===== MATRIX RAIN EFFECT =====

class MatrixRain {
    constructor(container) {
        this.container = container;
        this.canvas = null;
        this.ctx = null;
        this.drops = [];
        this.isActive = false;
        this.animationId = null;
        
        // Configuration
        this.config = {
            fontSize: 14,
            columns: 0,
            dropSpeed: 1,
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?',
            colors: {
                primary: '#00FF41',
                secondary: '#008F11',
                fade: '#003B00'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.calculateColumns();
        this.createDrops();
        this.bindEvents();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.8;
        `;
        
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.resize();
    }
    
    calculateColumns() {
        this.config.columns = Math.floor(this.canvas.width / this.config.fontSize);
    }
    
    createDrops() {
        this.drops = [];
        
        for (let i = 0; i < this.config.columns; i++) {
            this.drops.push(new MatrixDrop(i, this.config));
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', this.resize.bind(this));
    }
    
    resize() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        
        this.calculateColumns();
        this.createDrops();
    }
    
    start() {
        this.isActive = true;
        this.animate();
    }
    
    stop() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    animate() {
        if (!this.isActive) return;
        
        // Create fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw drops
        this.drops.forEach(drop => {
            drop.update(this.canvas.height);
            drop.draw(this.ctx, this.config.fontSize);
        });
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }
}

class MatrixDrop {
    constructor(column, config) {
        this.column = column;
        this.config = config;
        this.reset();
    }
    
    reset() {
        this.y = Math.random() * -100;
        this.speed = Math.random() * 3 + 1;
        this.characters = [];
        this.length = Math.random() * 20 + 10;
        
        // Generate random characters for this drop
        for (let i = 0; i < this.length; i++) {
            this.characters.push(
                this.config.characters[Math.floor(Math.random() * this.config.characters.length)]
            );
        }
    }
    
    update(canvasHeight) {
        this.y += this.speed;
        
        // Reset when drop goes off screen
        if (this.y > canvasHeight + this.length * this.config.fontSize) {
            this.reset();
        }
        
        // Occasionally change characters
        if (Math.random() < 0.1) {
            const index = Math.floor(Math.random() * this.characters.length);
            this.characters[index] = this.config.characters[
                Math.floor(Math.random() * this.config.characters.length)
            ];
        }
    }
    
    draw(ctx, fontSize) {
        const x = this.column * fontSize;
        
        this.characters.forEach((char, index) => {
            const y = this.y + index * fontSize;
            
            // Calculate opacity based on position in drop
            const opacity = 1 - (index / this.characters.length);
            
            // Draw character with glow effect
            ctx.shadowColor = this.config.colors.primary;
            ctx.shadowBlur = 5;
            ctx.fillStyle = this.config.colors.primary;
            ctx.globalAlpha = opacity;
            ctx.font = `${fontSize}px monospace`;
            ctx.fillText(char, x, y);
            
            // Draw brighter head character
            if (index === 0) {
                ctx.shadowBlur = 10;
                ctx.fillStyle = '#FFFFFF';
                ctx.globalAlpha = 1;
                ctx.fillText(char, x, y);
            }
        });
        
        // Reset shadow and opacity
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }
}

// ===== ENHANCED MATRIX EFFECTS =====
class EnhancedMatrixRain extends MatrixRain {
    constructor(container) {
        super(container);
        this.glitchDrops = [];
        this.setupEnhancedEffects();
    }
    
    setupEnhancedEffects() {
        // Create glitch drops
        this.createGlitchDrops();
        
        // Setup interactive effects
        this.container.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.container.addEventListener('click', this.createRipple.bind(this));
    }
    
    createGlitchDrops() {
        for (let i = 0; i < 5; i++) {
            this.glitchDrops.push(new GlitchDrop(
                Math.floor(Math.random() * this.config.columns),
                this.config
            ));
        }
    }
    
    handleMouseMove(e) {
        const rect = this.container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Affect nearby drops
        this.drops.forEach(drop => {
            const dropX = drop.column * this.config.fontSize;
            const distance = Math.abs(mouseX - dropX);
            
            if (distance < 100) {
                drop.speed = Math.max(0.5, drop.speed - 0.5);
            }
        });
    }
    
    createRipple(e) {
        const rect = this.container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Create ripple effect
        const ripple = new MatrixRipple(clickX, clickY, this.config);
        this.ripples = this.ripples || [];
        this.ripples.push(ripple);
    }
    
    animate() {
        if (!this.isActive) return;
        
        // Create fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw normal drops
        this.drops.forEach(drop => {
            drop.update(this.canvas.height);
            drop.draw(this.ctx, this.config.fontSize);
        });
        
        // Update and draw glitch drops
        this.glitchDrops.forEach(drop => {
            drop.update(this.canvas.height);
            drop.draw(this.ctx, this.config.fontSize);
        });
        
        // Update and draw ripples
        if (this.ripples) {
            this.ripples = this.ripples.filter(ripple => {
                ripple.update();
                ripple.draw(this.ctx);
                return ripple.life > 0;
            });
        }
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }
}

class GlitchDrop extends MatrixDrop {
    constructor(column, config) {
        super(column, config);
        this.glitchIntensity = Math.random() * 0.5 + 0.5;
        this.glitchFrequency = Math.random() * 0.1 + 0.05;
    }
    
    update(canvasHeight) {
        super.update(canvasHeight);
        
        // Add glitch behavior
        if (Math.random() < this.glitchFrequency) {
            this.speed += (Math.random() - 0.5) * 2;
            this.speed = Math.max(0.5, Math.min(5, this.speed));
            
            // Randomly change multiple characters
            for (let i = 0; i < 3; i++) {
                const index = Math.floor(Math.random() * this.characters.length);
                this.characters[index] = this.config.characters[
                    Math.floor(Math.random() * this.config.characters.length)
                ];
            }
        }
    }
    
    draw(ctx, fontSize) {
        const x = this.column * fontSize;
        
        this.characters.forEach((char, index) => {
            const y = this.y + index * fontSize;
            
            // Add glitch offset
            const glitchX = x + (Math.random() - 0.5) * this.glitchIntensity * 10;
            const glitchY = y + (Math.random() - 0.5) * this.glitchIntensity * 5;
            
            // Calculate opacity
            const opacity = 1 - (index / this.characters.length);
            
            // Draw with glitch colors
            const colors = ['#FF0080', '#00D4FF', '#00FF88'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            ctx.shadowColor = color;
            ctx.shadowBlur = 8;
            ctx.fillStyle = color;
            ctx.globalAlpha = opacity * this.glitchIntensity;
            ctx.font = `${fontSize}px monospace`;
            ctx.fillText(char, glitchX, glitchY);
        });
        
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }
}

class MatrixRipple {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 150;
        this.life = 1;
        this.config = config;
    }
    
    update() {
        this.radius += 3;
        this.life = 1 - (this.radius / this.maxRadius);
        
        if (this.radius > this.maxRadius) {
            this.life = 0;
        }
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 65, ${this.life * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner ripple
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.life * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

// ===== MATRIX CODE RAIN =====
class MatrixCodeRain {
    constructor(container) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.codeLines = [];
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.createCodeLines();
        this.animate();
    }
    
    setupCanvas() {
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.1;
        `;
        
        this.container.appendChild(this.canvas);
        this.resize();
        
        window.addEventListener('resize', this.resize.bind(this));
    }
    
    resize() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }
    
    createCodeLines() {
        const codeSnippets = [
            'function createPortfolio() {',
            '  const skills = ["React", "Python", "AI"];',
            '  return skills.map(skill => ({',
            '    name: skill,',
            '    level: "Expert"',
            '  }));',
            '}',
            '',
            'class Developer {',
            '  constructor(name) {',
            '    this.name = name;',
            '    this.passion = "Technology";',
            '  }',
            '}',
            '',
            'const samuel = new Developer("Samuel Mauli");'
        ];
        
        codeSnippets.forEach((line, index) => {
            this.codeLines.push({
                text: line,
                x: 50,
                y: 50 + index * 25,
                opacity: 0.3,
                speed: Math.random() * 0.5 + 0.2
            });
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.codeLines.forEach(line => {
            line.y += line.speed;
            
            if (line.y > this.canvas.height + 50) {
                line.y = -50;
            }
            
            this.ctx.font = '14px "JetBrains Mono", monospace';
            this.ctx.fillStyle = `rgba(0, 212, 255, ${line.opacity})`;
            this.ctx.fillText(line.text, line.x, line.y);
        });
        
        requestAnimationFrame(this.animate.bind(this));
    }
}

// ===== INITIALIZE MATRIX EFFECTS =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize matrix rain for contact section
    const matrixContainer = document.querySelector('.matrix-rain');
    if (matrixContainer) {
        window.matrixRain = new EnhancedMatrixRain(matrixContainer);
    }
    
    // Initialize matrix code rain for loading screen
    const loadingMatrix = document.querySelector('.matrix-bg');
    if (loadingMatrix) {
        window.loadingMatrixRain = new MatrixCodeRain(loadingMatrix);
    }
    
    // Auto-start matrix rain when contact section is visible
    const contactSection = document.getElementById('contact');
    if (contactSection && window.matrixRain) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.matrixRain.start();
                } else {
                    window.matrixRain.stop();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(contactSection);
    }
});

// Export classes for use in other modules
window.MatrixRain = MatrixRain;
window.EnhancedMatrixRain = EnhancedMatrixRain;
window.MatrixCodeRain = MatrixCodeRain;

