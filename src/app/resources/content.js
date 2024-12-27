import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sanjay ',
    lastName:  'J',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Pre Final year student',
    avatar:    '/images/pic.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Tamil', 'Telugu']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/sanjayjr8',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sanjayj08/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://www.linkedin.com/in/sanjayj08/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sanjayjayachandran08@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Sanjay J</>,
    subline: <>I'm Sanjay, a Pre Final Year student at <InlineCode>VIT University</InlineCode>,I craft intuitive user experiences,solutions to real world problems.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>As a driven computer science engineering student, I bring a unique blend of technical proficiency, problem-solving abilities, and diverse interests to the table. While continuously expanding my skills in areas like crafting industry-oriented applications, developing powerful web solutions, and staying at the forefront of industry trends, I apply my passion for geopolitics and current affairs to approach challenges creatively. With a strong foundation in leadership, I am eager to make a meaningful impact in the dynamic world of technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Microsoft Innovations Club Vitc',
                timeframe: '2023 - Present',
                role: 'Design Department Head',
                achievements: [
                    <>I started out as a member of the design team, and over time, I was given the opportunity to lead the department, which has been a rewarding experience
.</>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/3.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
           
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'VIT UNIVERSITY',
                description: <>Studied computer science engineering.</>,
            },
            
        ]
    },

    
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Languages',  
description: <>  
     <br /><br />  
    <div align="center">  
            <a href="https://en.cppreference.com/w/" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/C%2FC%2B%2B-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C/C++" />  
            </a>  
            <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />  
            </a>  
            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />  
            </a>  
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />  
            </a>  
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />  
            </a>  
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />  
            </a>  
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">  
                <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL" />  
            </a>  
        </div> <br /><br />  
        🍃 Proficient in object-oriented programming, with experience in developing scalable applications using SQL and NoSQL
    databases.<br /><br />  
    🍃Experienced in developing and deploying web applications with React and Node.js, ensuring responsive, user-friendly
    interfaces..<br /><br />  
    🍃 Familiar with AWS Cloud services and cloud architectures to optimize application scalability and performance.<br /><br />  
    🍃 Strong understanding of operating systems and computer architecture, enhancing expertise in system-level programming
    and deployment..  
</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            
            {  
                title: 'Technologies I Use',  
                description: (  
                    <div align="center">  
                        <h2 style={{ marginBottom: '20px' }}>🛠️ </h2>  
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>  
                            <a href="https://www.python.org" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />  
                            </a>  
                            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />  
                            </a>  
                            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />  
                            </a>  
                            <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />  
                            </a>  
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />  
                            </a>  
                            <a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow" />  
                            </a>  
                            <a href="https://gemini.google.com/intl/en_us/ai/" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI" />  
                            </a>  
                            <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />  
                            </a>  
                            <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />  
                            </a>  
                            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />  
                            </a>  
                            <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white" alt="Twilio" />  
                            </a>  
                            <a href="https://streamlit.io" target="_blank" rel="noopener noreferrer">  
                                <img src="https://img.shields.io/badge/Streamlit-%23FE4B4B.svg?style=for-the-badge&logo=streamlit&logoColor=white" alt="Streamlit" />  
                            </a>  
                        </div>  
                    </div>  
                ),  
                // Additional properties or methods can be added below as needed  
            },

            {  
                title: '📊 GitHub Stats',  
                description: (  
                    <div align="center">  
                        <br /><br />
                        <img src="https://github-readme-stats.vercel.app/api?username=sanjayjr8&theme=dark&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats" />  
                        <br />  
                        <br /><br />
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=sanjayjr8&theme=dark&hide_border=false" alt="GitHub Streak Stats" />  
                        <br />  

                        <br /><br />
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sanjayjr8&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="Top Languages" />  
                        <br />  

                        <br /><br />
                        <h3 style={{ margin: '20px 0' }}>🔝 Top Contributed Repo</h3>  
                        <img src="https://github-contributor-stats.vercel.app/api?username=sanjayjr8&limit=5&theme=dark&combine_all_yearly_contributions=true" alt="Top Contributed Repo" />  
                        <br />  
                        
                    </div>  
                ),  
                // Additional properties or methods can be added below as needed  
            },

            {  
                title: 'Leadership & Achievements:',  
                description: <>  
                    <br /><br />  
                    <h2>Design Department Head</h2>   
                    <span style={{ color: '#4CAF50' }}>Microsoft Innovations Club, VIT Chennai</span><br /><br />  
            
                    <h2>School Captain</h2>   
                    <span style={{ color: '#4CAF50' }}>M.CT.M School Alwarpet</span><br /><br />  
            
                    <h2>Top 100 Teams VIT Smart India Hackathon 2024</h2>   
                    <span style={{ color: '#4CAF50' }}>Qualified in the top 100 out of 500 teams, showcasing problem-solving.</span>  
                </>,  
                // optional: leave the array empty if you don't want to display images  
            },
            

            {
                title: 'Certifications:',
                description: <>
                <span style={{ color: '#4CAF50' }}>Cybersecurity, Packet Tracer (Cisco Courses), CouchDB (Distributed Database) ,(IBM courses) SQL- Querying Databases</span>
                
                </>,
                // optional: leave the array empty if you don't want to display images
                
            }
        ]
    }
}



const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };