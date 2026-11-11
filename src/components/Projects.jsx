import { useState } from 'react'
import './Projects.css'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'PlaceWise',
            description: 'A collaborative web application providing centralized access to academic materials and group analysis tools. Role: Team Lead & Backend Architect. Designed database schema, query optimization, and server-side integration.',
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
            tech: ['React', 'Node.js', 'MySQL', 'Team Lead'],
            category: 'fullstack',
            status: 'Ongoing',
            links: { live: '#', github: 'https://github.com' }
        },
        {
            id: 2,
            title: 'ProjectConnect',
            description: 'Student collaboration platform designed to facilitate student-to-student collaboration, helping them build teams and complete projects together.',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            category: 'fullstack',
            status: 'In Progress',
            links: { live: 'https://projectconnect.tech', github: 'https://github.com' }
        },
        {
            id: 3,
            title: 'Business Performance Dashboard',
            description: 'Designed and published interactive dashboards using public sales data. Visualized key metrics like Sales, Profit, and Discount. Tracked profit trends over 5 years with filters and color encoding.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            tech: ['Tableau', 'Data Visualization', 'Analytics'],
            category: 'data',
            status: 'Completed',
            links: { live: 'https://public.tableau.com', github: null }
        },
        {
            id: 4,
            title: 'Credit Card Risk Analysis',
            description: 'Cleaned and processed 5,000+ records using Python. Built 5 interactive Tableau sheets to analyze customer segments by age and education. Identified high-risk segments representing 18% of portfolio.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
            tech: ['Python', 'Pandas', 'Tableau', 'Excel'],
            category: 'data',
            status: 'Completed',
            links: { live: 'https://public.tableau.com', github: null }
        },
        {
            id: 5,
            title: 'Fast-tag Registration Portal',
            description: 'Developed during internship at JK Innovative Pvt. Ltd. A Fast-tag Registration & Generator Portal for vehicles using Java.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
            tech: ['Java', 'Backend', 'Portal Development'],
            category: 'web',
            status: 'Completed',
            links: { live: null, github: null }
        },
        {
            id: 6,
            title: 'Staff Verification Module',
            description: 'Built during internship at 3SV Software Pvt. Ltd. A staff verification module with frontend-backend integration.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            status: 'Completed',
            links: { live: null, github: null }
        }
    ]

    const filters = [
        { name: 'All', value: 'all' },
        { name: 'Full Stack', value: 'fullstack' },
        { name: 'Data Analytics', value: 'data' },
        { name: 'Web Dev', value: 'web' },
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <div className="projects-filter">
                    {filters.map(filter => (
                        <button
                            key={filter.value}
                            className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-status">{project.status}</div>
                                <div className="project-overlay">
                                    {project.links.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
