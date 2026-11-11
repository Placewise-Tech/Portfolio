import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const counters = entry.target.querySelectorAll('.stat-number')
                        counters.forEach((counter) => {
                            const target = parseInt(counter.dataset.count)
                            let current = 0
                            const increment = target / 50
                            const timer = setInterval(() => {
                                current += increment
                                if (current >= target) {
                                    counter.textContent = target + '+'
                                    clearInterval(timer)
                                } else {
                                    counter.textContent = Math.floor(current) + '+'
                                }
                            }, 30)
                        })
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (statsRef.current) {
            observer.observe(statsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">Crafting Digital Experiences</h2>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <div className="about-img-container">
                            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&h=600&fit=crop" alt="Working on code" />
                            <div className="about-img-overlay"></div>
                        </div>
                        <div className="experience-badge">
                            <span className="exp-number">2+</span>
                            <span className="exp-text">Years of<br />Learning</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3>Full Stack Developer & Data Analyst</h3>
                        <p>
                            Results-driven BCA student at HVPM's Degree College of Physical Education, Amravati,
                            with demonstrated expertise in full-stack web development and data analytics.
                            Proficient in modern technologies including React, Node.js, Python, Tableau, and SQL,
                            with a proven track record of delivering impactful solutions.
                        </p>
                        <p>
                            Specialized in building scalable web applications and extracting actionable insights from complex datasets.
                            Successfully automated data processing workflows, handling 10,000+ records and achieving a 40% reduction
                            in manual verification time. Passionate about leveraging technology to solve real-world challenges
                            and drive measurable business outcomes.
                        </p>

                        <div className="about-stats" ref={statsRef}>
                            <div className="stat-item">
                                <span className="stat-number" data-count="5">0+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number" data-count="10000">0+</span>
                                <span className="stat-label">Records Processed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number" data-count="3">0+</span>
                                <span className="stat-label">Certifications</span>
                            </div>
                        </div>

                        <div className="about-highlights">
                            <div className="highlight">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>Certified in Data Science with AI - Internshala</span>
                            </div>
                            <div className="highlight">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>SQL Certified - HackerRank</span>
                            </div>
                            <div className="highlight">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>Professional Data Analyst Certification</span>
                            </div>
                        </div>

                        <a href="/resume.pdf" download className="btn btn-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
