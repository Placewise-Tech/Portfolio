import { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
    const skillsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const cards = skillsRef.current?.querySelectorAll('.skill-card')
        cards?.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: '💻',
            skills: [
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'JavaScript', level: 85 },
                { name: 'React.js', level: 80 },
                { name: 'Bootstrap', level: 85 },
            ]
        },
        {
            title: 'Backend Development',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'PHP', level: 70 },
                { name: 'Java', level: 75 },
                { name: 'REST APIs', level: 80 },
            ]
        },
        {
            title: 'Data Analysis',
            icon: '📊',
            skills: [
                { name: 'Python', level: 80 },
                { name: 'Pandas', level: 78 },
                { name: 'NumPy', level: 75 },
                { name: 'Tableau', level: 85 },
                { name: 'Power BI', level: 75 },
            ]
        },
        {
            title: 'Database & Tools',
            icon: '🗄️',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'MS Excel', level: 90 },
                { name: 'Git/GitHub', level: 85 },
                { name: 'SQL', level: 88 },
            ]
        }
    ]

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">My Skills</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                </div>

                <div className="skills-content" ref={skillsRef}>
                    {skillCategories.map((category, catIndex) => (
                        <div className="skills-category" key={catIndex}>
                            <h3 className="category-title">
                                <span className="category-icon">{category.icon}</span>
                                {category.title}
                            </h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        className="skill-card"
                                        key={skillIndex}
                                        style={{ '--skill-level': `${skill.level}%`, animationDelay: `${skillIndex * 0.1}s` }}
                                    >
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar">
                                            <div className="skill-progress"></div>
                                        </div>
                                        <span className="skill-percent">{skill.level}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
