import './Education.css'

const Education = () => {
    const timeline = [
        {
            type: 'education',
            date: '2023 - 2026',
            title: 'Bachelor of Computer Applications (BCA)',
            place: 'Degree College of Physical Education, HVPM, Amravati',
            description: 'Specializing in Web Development, Data Science, and Database Management. Actively participating in hackathons and building real-world projects.',
            icon: '🎓'
        },
        {
            type: 'work',
            date: 'Mar 2025 - Apr 2025',
            title: 'Web Development Intern',
            place: '3SV Software Pvt. Ltd., Amravati',
            description: 'Built a staff verification module using HTML, CSS, and JavaScript. Learned frontend-backend integration and improved debugging skills during real-world project execution.',
            icon: '💼'
        },
        {
            type: 'work',
            date: 'Dec 2024 - Mar 2025',
            title: 'Java Development Intern',
            place: 'JK Innovative Private Limited, Amravati',
            description: 'Worked on Java development and was part of the project development team. Built Fast-tag Registration & Generator Portal for vehicles.',
            icon: '💼'
        },
        {
            type: 'hackathon',
            date: 'Feb 2025',
            title: 'INNOVO SSGMCE\'25 Hackathon',
            place: 'SSGMCE, Shegaon',
            description: 'Built "Engineering Opportunities Prediction" - a full-stack project using HTML, CSS, JavaScript, Node.js, PHP, and MySQL. Strengthened real-time deployment and collaboration skills.',
            icon: '🏆'
        },
        {
            type: 'hackathon',
            date: 'Mar 2024',
            title: 'Hackfusion 2.0 Hackathon',
            place: 'SGGS College, Nanded',
            description: '24-hour innovation hackathon focused on solving real-world challenges through technology. Improved rapid prototyping, ideation, and teamwork skills.',
            icon: '🏆'
        },
        {
            type: 'education',
            date: '2022 - 2023',
            title: 'Higher Secondary Certificate (HSC)',
            place: 'Bhartiya Mahavidyalaya, Amravati',
            description: 'Completed 12th grade with focus on Science stream.',
            icon: '📚'
        },
        {
            type: 'education',
            date: '2020 - 2021',
            title: 'Secondary School Certificate (SSC)',
            place: 'Shivaji Higher Secondary School, Morshi',
            description: 'Completed 10th grade education.',
            icon: '📚'
        }
    ]

    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Background</span>
                    <h2 className="section-title">Education & Experience</h2>
                </div>

                <div className="timeline">
                    {timeline.map((item, index) => (
                        <div className={`timeline-item ${item.type}`} key={index}>
                            <div className="timeline-icon">
                                <span>{item.icon}</span>
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{item.date}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-place">{item.place}</p>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
