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
        description: <>As a driven computer science engineering student, I bring a unique blend of technical proficiency, problem solving abilities, and diverse interests to the table. While continuously expanding my skills in areas like coding, UI/UX design, and web development, I stay at the forefront of industry trends and apply my passion for geopolitics and current affairs to approach challenges creatively. With a strong foundation in leadership, I am willing to make a meaningful impact in the dynamic world of technology..</>
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
    💻 C/C++, ☕Java, 🐍Python, 🌐HTML, 🎨CSS, ⚙️JavaScript, 📊SQL.<br /><br />  
    ∗ Experienced in object-oriented programming and developing scalable applications using SQL and NoSQL databases.<br /><br />  
    ∗ Completed hands-on projects that effectively implement UI/UX principles with modern web development frameworks, emphasizing user-centric design.<br /><br />  
    ∗ Familiar with AWS Cloud services, leveraging cloud architectures to enhance application scalability and performance.<br /><br />  
    ∗ Solid understanding of operating systems and computer organization, supporting my expertise in system-level programming and application deployment.  
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
                title: 'Technologies:',
                description: <>Git, Visual Studio Code, Docker, AWS (In Progress).</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },

            {
                title: 'Certifications:',
                description: <>Cybersecurity, Packet Tracer, CouchDB ,IBM SQL</>,
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