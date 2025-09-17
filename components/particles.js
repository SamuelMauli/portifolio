// ===== ADVANCED PARTICLE SYSTEM =====

class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.connections = [];
        this.mouse = { x: 0, y: 0 };
        this.isActive = false;
        this.animationId = null;
        
        // Configuration
        this.config = {
            particleCount: 100,
            maxDistance: 150,
            particleSize: 2,
            particleSpeed: 0.5,
            connectionOpacity: 0.3,
            mouseRadius: 200,
            colors: {
                particles: ['#00D4FF', '#FF0080', '#7B68EE', '#00FF88'],
                connections: '#00D4FF'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createParticles();
        this.bindEvents();
        this.activate();
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
        `;
        
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.resize();
    }
    
    createParticles() {
        this.particles = [];
        
        for (let i = 0; i < this.config.particleCount; i++) {
            this.particles.push(new Particle(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                this.config
            ));
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', this.resize.bind(this));
        this.container.addEventListener('mousemove', this.updateMouse.bind(this));
        this.container.addEventListener('mouseleave', this.resetMouse.bind(this));
    }
    
    resize() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        // Recreate particles with new dimensions
        this.createParticles();
    }
    
    updateMouse(e) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }
    
    resetMouse() {
        this.mouse.x = -1000;
        this.mouse.y = -1000;
    }
    
    activate() {
        this.isActive = true;
        this.animate();
    }
    
    deactivate() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    animate() {
        if (!this.isActive) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update particles
        this.particles.forEach(particle => {
            particle.update(this.canvas.width, this.canvas.height, this.mouse);
        });
        
        // Draw connections
        this.drawConnections();
        
        // Draw particles
        this.particles.forEach(particle => {
            particle.draw(this.ctx);
        });
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
    }
    
    drawConnections() {
        this.connections = [];
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const distance = this.getDistance(this.particles[i], this.particles[j]);
                
                if (distance < this.config.maxDistance) {
                    this.connections.push({
                        p1: this.particles[i],
                        p2: this.particles[j],
                        distance: distance
                    });
                }
            }
        }
        
        this.connections.forEach(connection => {
            const opacity = (1 - connection.distance / this.config.maxDistance) * this.config.connectionOpacity;
            
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(connection.p1.x, connection.p1.y);
            this.ctx.lineTo(connection.p2.x, connection.p2.y);
            this.ctx.stroke();
        });
    }
    
    getDistance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }
}

class Particle {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = (Math.random() - 0.5) * config.particleSpeed;
        this.vy = (Math.random() - 0.5) * config.particleSpeed;
        this.size = Math.random() * config.particleSize + 1;
        this.color = config.colors.particles[Math.floor(Math.random() * config.colors.particles.length)];
        this.opacity = Math.random() * 0.5 + 0.5;
        this.config = config;
        
        // Pulsing effect
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }
    
    update(canvasWidth, canvasHeight, mouse) {
        // Mouse interaction
        const mouseDistance = Math.sqrt(
            Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)
        );
        
        if (mouseDistance < this.config.mouseRadius) {
            const force = (this.config.mouseRadius - mouseDistance) / this.config.mouseRadius;
            const angle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
            
            this.vx += Math.cos(angle) * force * 0.1;
            this.vy += Math.sin(angle) * force * 0.1;
        }
        
        // Return to original position
        this.vx += (this.originalX - this.x) * 0.001;
        this.vy += (this.originalY - this.y) * 0.001;
        
        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;
        
        // Boundary check
        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
        
        // Keep within bounds
        this.x = Math.max(0, Math.min(canvasWidth, this.x));
        this.y = Math.max(0, Math.min(canvasHeight, this.y));
        
        // Update pulse
        this.pulsePhase += this.pulseSpeed;
    }
    
    draw(ctx) {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const currentSize = this.size * pulse;
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        
        // Main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }
}

// ===== ENHANCED PARTICLE EFFECTS =====
class EnhancedParticleSystem extends ParticleSystem {
    constructor(container) {
        super(container);
        this.waveParticles = [];
        this.explosionParticles = [];
        this.setupEnhancedEffects();
    }
    
    setupEnhancedEffects() {
        // Create wave particles
        this.createWaveParticles();
        
        // Setup click explosions
        this.container.addEventListener('click', this.createExplosion.bind(this));
        
        // Setup keyboard interactions
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
    }
    
    createWaveParticles() {
        for (let i = 0; i < 20; i++) {
            this.waveParticles.push(new WaveParticle(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                this.config
            ));
        }
    }
    
    createExplosion(e) {
        const rect = this.container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        for (let i = 0; i < 15; i++) {
            this.explosionParticles.push(new ExplosionParticle(x, y, this.config));
        }
    }
    
    handleKeyPress(e) {
        if (e.code === 'Space') {
            this.triggerWaveEffect();
        }
    }
    
    triggerWaveEffect() {
        this.particles.forEach((particle, index) => {
            setTimeout(() => {
                particle.vx += (Math.random() - 0.5) * 5;
                particle.vy += (Math.random() - 0.5) * 5;
            }, index * 10);
        });
    }
    
    animate() {
        if (!this.isActive) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw wave particles
        this.waveParticles.forEach(particle => {
            particle.update(this.canvas.width, this.canvas.height);
            particle.draw(this.ctx);
        });
        
        // Update and draw explosion particles
        this.explosionParticles = this.explosionParticles.filter(particle => {
            particle.update();
            particle.draw(this.ctx);
            return particle.life > 0;
        });
        
        // Call parent animate method
        super.animate();
    }
}

class WaveParticle {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.amplitude = Math.random() * 50 + 20;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.2;
        this.size = Math.random() * 3 + 1;
        this.color = config.colors.particles[Math.floor(Math.random() * config.colors.particles.length)];
        this.opacity = Math.random() * 0.3 + 0.2;
    }
    
    update(canvasWidth, canvasHeight) {
        this.phase += this.frequency;
        this.y += Math.sin(this.phase) * this.amplitude * 0.01;
        this.x += this.speed;
        
        if (this.x > canvasWidth + 50) {
            this.x = -50;
            this.y = Math.random() * canvasHeight;
        }
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

class ExplosionParticle {
    constructor(x, y, config) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
        this.size = Math.random() * 4 + 2;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.color = config.colors.particles[Math.floor(Math.random() * config.colors.particles.length)];
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.life -= this.decay;
        this.size *= 0.99;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

// ===== CONSTELLATION EFFECT =====
class ConstellationEffect {
    constructor(container) {
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.constellations = [];
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.createStars();
        this.createConstellations();
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
    
    createStars() {
        const starCount = 50;
        
        for (let i = 0; i < starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    }
    
    createConstellations() {
        // Create constellation patterns
        const patterns = [
            // Triangle
            [
                { x: 0.2, y: 0.3 },
                { x: 0.4, y: 0.2 },
                { x: 0.3, y: 0.5 }
            ],
            // Diamond
            [
                { x: 0.7, y: 0.2 },
                { x: 0.8, y: 0.4 },
                { x: 0.7, y: 0.6 },
                { x: 0.6, y: 0.4 }
            ]
        ];
        
        patterns.forEach(pattern => {
            const constellation = pattern.map(point => ({
                x: point.x * this.canvas.width,
                y: point.y * this.canvas.height,
                size: 3,
                opacity: 0.6
            }));
            
            this.constellations.push(constellation);
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw stars
        this.stars.forEach(star => {
            star.twinklePhase += star.twinkleSpeed;
            const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
            
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.globalAlpha = star.opacity * twinkle;
            this.ctx.fill();
        });
        
        // Draw constellations
        this.constellations.forEach(constellation => {
            // Draw connections
            this.ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            
            constellation.forEach((star, index) => {
                if (index === 0) {
                    this.ctx.moveTo(star.x, star.y);
                } else {
                    this.ctx.lineTo(star.x, star.y);
                }
            });
            
            this.ctx.closePath();
            this.ctx.stroke();
            
            // Draw stars
            constellation.forEach(star => {
                this.ctx.beginPath();
                this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                this.ctx.fillStyle = '#00D4FF';
                this.ctx.globalAlpha = star.opacity;
                this.ctx.fill();
            });
        });
        
        this.ctx.globalAlpha = 1;
        requestAnimationFrame(this.animate.bind(this));
    }
}

// ===== INITIALIZE PARTICLE SYSTEMS =====
document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');
    
    if (particlesContainer) {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            window.particleSystem = new EnhancedParticleSystem(particlesContainer);
            
            // Add constellation effect to hero section
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                window.constellationEffect = new ConstellationEffect(heroSection);
            }
        }
    }
});

// Export classes for use in other modules
window.ParticleSystem = ParticleSystem;
window.EnhancedParticleSystem = EnhancedParticleSystem;
window.ConstellationEffect = ConstellationEffect;

