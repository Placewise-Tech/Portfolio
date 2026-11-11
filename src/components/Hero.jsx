import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const roles = ['Full Stack Developer', 'Data Analyst', 'BCA Student', 'Tech Enthusiast']

const Hero = () => {
    const [typedText, setTypedText] = useState('')
    const [roleIndex, setRoleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const heroRef = useRef(null)

    // Typing animation
    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.slice(0, typedText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(typedText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [typedText, isDeleting, roleIndex])

    // Mouse tracking for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect()
                setMousePosition({
                    x: (e.clientX - rect.left - rect.width / 2) / 50,
                    y: (e.clientY - rect.top - rect.height / 2) / 50
                })
            }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Generate random particles
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
    }))

    return (
        <section className="hero" id="home" ref={heroRef}>
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="gradient-orb orb-1" style={{
                    transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
                }}></div>
                <div className="gradient-orb orb-2" style={{
                    transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`
                }}></div>
                <div className="gradient-orb orb-3"></div>

                {/* Animated Particles */}
                <div className="particles">
                    {particles.map(p => (
                        <span
                            key={p.id}
                            className="particle"
                            style={{
                                '--size': `${p.size}px`,
                                '--x': `${p.x}%`,
                                '--y': `${p.y}%`,
                                '--duration': `${p.duration}s`,
                                '--delay': `${p.delay}s`
                            }}
                        ></span>
                    ))}
                </div>

                {/* Grid Pattern */}
                <div className="hero-grid"></div>

                {/* Moving Lines */}
                <div className="moving-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </div>

            <div className="hero-content container">
                <div className="hero-text">
                    <div className="hero-badge" style={{
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}>
                        <span className="badge-dot"></span>
                        <span>Open to New Opportunities</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="title-greeting">Hello, I'm</span>
                        <span className="title-name glitch-text" data-text="Parth Deshmukh">
                            Parth Deshmukh
                        </span>
                        <span className="title-role">
                            <span className="role-static">I'm a </span>
                            <span className="role-dynamic">{typedText}</span>
                            <span className="typing-cursor">|</span>
                        </span>
                    </h1>

                    <p className="hero-description">
                        Innovative BCA student specializing in full-stack development and data analytics.
                        Proven track record of delivering impactful solutions—automated workflows processing
                        10,000+ records with 40% efficiency gains. Expert in React, Python, Tableau, SQL,
                        and modern web technologies, transforming complex challenges into elegant solutions.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary magnetic-btn">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>Get In Touch</span>
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/parthdeshmukh" target="_blank" rel="noopener noreferrer" className="social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/parthdeshmukh" target="_blank" rel="noopener noreferrer" className="social-link">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="mailto:parthd4567@gmail.com" className="social-link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a href="tel:+917028030836" className="social-link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-visual" style={{
                    transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`
                }}>
                    <div className="profile-container">
                        <div className="profile-ring"></div>
                        <div className="profile-ring ring-2"></div>
                        <div className="profile-glow"></div>
                        <div className="profile-image">
                            <img src="/profile.jpg" alt="Parth Deshmukh" />
                        </div>
                        <div className="profile-badge">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                            </svg>
                        </div>
                    </div>

                    <div className="floating-cards">
                        <div className="float-card card-1" style={{
                            transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`
                        }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
                            </svg>
                            <span>React</span>
                        </div>
                        <div className="float-card card-2" style={{
                            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`
                        }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z" />
                            </svg>
                            <span>Python</span>
                        </div>
                        <div className="float-card card-3" style={{
                            transform: `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px)`
                        }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 5v10l8-5-8-5z" />
                            </svg>
                            <span>Tableau</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    )
}

export default Hero
