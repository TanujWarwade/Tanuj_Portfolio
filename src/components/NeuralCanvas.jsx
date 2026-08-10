import React, { useEffect, useRef } from 'react';

const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: null, y: null, radius: 160 };

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseOut  = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout',  handleMouseOut);

    // Detect current theme
    const isLight = () => document.documentElement.classList.contains('light-mode');

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x  = Math.random() * width;
        this.y  = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 2.2 + 0.8;
        // Random color selection per particle
        const r = Math.random();
        if (r < 0.5)       this.hue = 'cyan';
        else if (r < 0.8)  this.hue = 'purple';
        else                this.hue = 'pink';
      }

      getColor() {
        if (isLight()) {
          // Light mode: more visible, slightly darker tones
          if (this.hue === 'cyan')   return 'rgba(6, 182, 212, 0.55)';
          if (this.hue === 'purple') return 'rgba(139, 92, 246, 0.45)';
          return 'rgba(236, 72, 153, 0.35)';
        } else {
          // Dark mode: vibrant neon glow
          if (this.hue === 'cyan')   return 'rgba(0, 242, 254, 0.65)';
          if (this.hue === 'purple') return 'rgba(157, 78, 221, 0.55)';
          return 'rgba(255, 0, 127, 0.45)';
        }
      }

      getLineColor(opacity) {
        if (isLight()) return `rgba(100, 116, 139, ${opacity * 0.6})`;
        return `rgba(0, 242, 254, ${opacity})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width)  this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= dx * force * 0.025;
            this.y -= dy * force * 0.025;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.getColor();
        ctx.shadowBlur = isLight() ? 4 : 10;
        ctx.shadowColor = this.getColor();
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const setupParticles = () => {
      particles = [];
      const qty = Math.min(Math.max(Math.floor((width * height) / 10000), 40), 130);
      for (let i = 0; i < qty; i++) particles.push(new Particle());
    };

    const drawConnections = () => {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = ((maxDist - dist) / maxDist) * (isLight() ? 0.12 : 0.18);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].getLineColor(opacity);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    setupParticles();
    animate();

    const handleResize = () => {
      cancelAnimationFrame(animationId);
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
      setupParticles();
      animate();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout',  handleMouseOut);
      window.removeEventListener('resize',    handleResize);
    };
  }, []);

  return (
    <canvas
      id="neural-canvas"
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
    />
  );
};

export default NeuralCanvas;
