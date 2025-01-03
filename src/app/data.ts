
import dagim from './assets/images/dagi.png'
import dagit from './assets/images/dagit.jpg'
import kikundi from './assets/images/kikundi.jpg'
import kali from './assets/images/kali.jpg'
import my from './assets/images/my.jpg'
import p1 from './assets/images/IMG_8883.jpg'
import p2 from './assets/images/cm.jpg'
import { StaticImageData } from 'next/image';



import { Briefcase, Users, Heart, Lightbulb, Award, Shield } from 'lucide-react'



  
  export type Value = {
    name: string
    icon: React.ElementType
    description: string
  }
  
  export type CoFounder = {
    name: string;
    title: string;
    description: string;
    role: string;
    image: string | StaticImageData;
  };
  
  export const coFounders: CoFounder[] = [
    {
      name: 'Dagmawit Teshale ',
      title: 'Co-Founder & Chief Creative Officer',
      description: 'Dagmawit Teshale  is  a software engineer and the Chief Creative Officer at Duo Creations. With a passion for design and detail, she leads the creative direction, transforming client visions into engaging solutions. Dagi combines analytical thinking with creativity, ensuring high-quality, impactful projects',
      role: 'Co-Founder & Chief Creative Officer',
      image: dagit,
    },
    {
      name: 'Dagmawit Moges',
      title: 'Co-Founder & Chief Engagement Officer',
      description: 'Dagmawit Mogesis a software engineer and the Chief Engagement Officer at Duo Creations. She excels in project management and client relations, leveraging her networking skills to foster strong partnerships. Dagis innovative mindset and strategic communication elevate the agencys impact in the creative services industry.',
      role: 'Co-Founder & Chief Engagement Officer',
      image: dagim,
    },
  ];
  export const values: Value[] = [
    { name: 'Professionalism', icon: Briefcase, description: 'We uphold the highest standards in all our endeavors.' },
    { name: 'Collaboration', icon: Users, description: 'We foster strong partnerships with our clients and team members.' },
    { name: 'Passion', icon: Heart, description: 'We are deeply committed to delivering exceptional results.' },
    { name: 'Innovation', icon: Lightbulb, description: 'We continuously seek creative solutions to meet evolving needs.' },
    { name: 'Excellence', icon: Award, description: 'We strive for outstanding quality in every project we undertake.' },
    { name: 'Integrity', icon: Shield, description: 'We conduct our business with unwavering honesty and transparency.' }
  ]
 
  
  export type Service = {
    name: string;
    description: string;
    fullDescription: string;
    image: string;
    keyPoints: string[];
  };
  
  export const services: Service[] = [
    {
      name: "Digital Marketing",
      description:
        "Amplify your online presence and drive tangible results through data-driven digital marketing strategies.",
      fullDescription:
        "In today's digital landscape, a robust online presence is essential for business success. Our digital marketing services are designed to elevate your brand's visibility, engage your target audience, and drive measurable results. From social media management and content creation to search engine optimization and paid advertising, our team of experts will craft a tailored digital strategy that aligns with your business goals.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      keyPoints: [
        "Comprehensive digital strategy development",
        "Engaging content creation and distribution",
        "Social media management and optimization",
        "Search engine optimization (SEO) and paid advertising",
      ],
    },
        {
      name: "Event Management",
      description:
        "Transform your events into unforgettable experiences that captivate your audience and achieve your goals.",
      fullDescription:
        "Whether you're hosting a corporate event, a product launch, or a private celebration, our event management services will take your vision to new heights. Our team of experienced event planners will handle every aspect of your event, from strategic planning and logistics to flawless execution and post-event analysis. We'll work closely with you to understand your objectives and create an event that leaves a lasting impression on your guests.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      keyPoints: [
        "Comprehensive event planning and coordination",
        "Innovative event design and decor",
        "Seamless vendor management and logistics",
        "Engaging event experiences and entertainment",
        "Professional video production for events",
      ],
    },
    {
      name: "Branding",
      description:
        "Crafting distinct brand identities that captivate your audience and position your business for success.",
      fullDescription:
        "Elevate your brand to new heights with our comprehensive branding services. We'll work closely with you to define your brand's strategy, personality, and visual identity, ensuring it resonates with your target market. From logo design to brand guidelines, our team of experts will transform your brand into a powerful asset that sets you apart in the industry.",
      image:
        "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1561070791-2526d30994b5%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dbranding%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8YnJhbmRpbmd8ZW58MHx8fHwxNzMwNzI3MTc5fDA%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60",
      keyPoints: [
        "Comprehensive brand strategy development",
        "Distinctive logo design and brand identity",
        "Brand guideline creation for consistent application",
        "Brand positioning and messaging strategy",
      ],
    },
    {
      name: "Creative Design",
      description:
        "Elevate your visual presence with captivating graphic design and web solutions that captivate your audience.",
      fullDescription:
        "Our creative design services go beyond the ordinary, crafting visually stunning assets that bring your brand to life. From eye-catching websites and responsive UI/UX design to impactful print and digital collateral, our team of designers blend creativity and technical expertise to deliver solutions that engage and inspire. We'll work closely with you to understand your brand's unique needs and translate them into cohesive, memorable designs.",
      image:
        "https://images.unsplash.com/opengraph/1x1.png?mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-w=64&mark-align=top%2Cleft&mark-pad=50&h=630&w=1200&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1453928582365-b6ad33cbcf64%3Fcrop%3Dfaces%252Cedges%26h%3D630%26w%3D1200%26blend%3D000000%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fw%253D750%2526h%253D84%2526txt%253Dcreative%252Bmeeting%2526txt-pad%253D80%2526txt-align%253Dmiddle%25252Cleft%2526txt-color%253D%252523000000%2526txt-size%253D40%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y3JlYXRpdmUlMjBtZWV0aW5nfGVufDB8fHx8MTczMDAwNzMwM3ww%26ixlib%3Drb-4.0.3&blend-w=1&auto=format&fit=crop&q=60",
      keyPoints: [
        "Responsive website design and development",
        "User-centric UI/UX design",
        "Impactful print and digital collateral",
        "Motion graphics and video production",
      ],
    },

    {
      name: "Branding Consultancy",
      description:
        "Unlock your brand's full potential with our strategic branding consultancy services.",
      fullDescription:
        "Building a strong, consistent brand is crucial for business success in today's competitive landscape. Our branding consultancy services provide the roadmap to elevate your brand and position it for long-term growth. From brand audits and identity refinement to positioning and messaging strategy, we'll work closely with you to uncover your brand's unique strengths and develop a comprehensive plan to amplify your presence in the market.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
      keyPoints: [
        "In-depth brand audit and assessment",
        "Brand identity development and refinement",
        "Unique brand positioning and messaging strategy",
        "Comprehensive brand guidelines and implementation support",
      ],
    },
  ];
  export const clients = [
    { name: 'TechCorp', logo: kikundi },
    { name: 'Global Innovations', logo:kali },
    { name: 'Startup Hub', logo: my },
    { name: 'EcoSolutions', logo: kikundi },
    { name: 'FashionForward', logo: kali },
    { name: 'HealthTech', logo: my },
  ]
  
  export const portfolioItems = [
    {
      id: 1,
      title: "TechCorp Annual Conference",
      image:p2,
      description: "A high-profile tech conference with over 1000 attendees.",
      details: [
        "Increased attendance by 25% compared to the previous year",
        "Implemented a custom event app for seamless scheduling and networking",
        "Coordinated 50+ speakers across multiple tracks",
        "Achieved a 98% satisfaction rate among participants"
      ]
    },
    {
      id: 2,
      title: "Art Exhibition",
      image: p1,
      description: "A creative  Art  event .",
      details: [
        "Designed an immersive experience showcasing Guzo Collection",
        "Managed an in-person event ",
        "Coordinated with influencers for maximum social media impact",
        "Resulted in a 200% increase in pre-orders"
      ]
    },
    {
      id: 3,
      title: "FashionForward Social Media Campaign",
      image: p2,
      description: "A multi-platform social media campaign for a fashion brand.",
      details: [
        "Developed a cohesive strategy across Instagram, TikTok, and Pinterest",
        "Created and scheduled over 100 pieces of original content",
        "Engaged with micro-influencers to amplify reach",
        "Achieved a 150% increase in engagement and 50% growth in followers"
      ]
    },
    {
      id: 4,
      title: "HealthTech Webinar Series",
      image: p2,
      description: "A series of educational webinars for healthcare professionals.",
      details: [
        "Organized 12 webinars featuring industry experts",
        "Managed registration, reminders, and follow-ups for over 5000 participants",
        "Provided live Q&A sessions and interactive polls",
        "Generated 500+ qualified leads for the client"
      ]
    },
    {
      id: 5,
      title: "Startup Hub Networking Event",
      image: p2,
      description: "A dynamic networking event connecting startups with investors.",
      details: [
        "Curated a list of 50 promising startups and 30 potential investors",
        "Organized speed networking sessions and pitch competitions",
        "Provided a digital platform for post-event connections",
        "Facilitated 10 successful funding deals"
      ]
    },
    {
      id: 6,
      title: "Global Innovations Brand Refresh",
      image: p2,
      description: "A comprehensive brand refresh for a multinational corporation.",
      details: [
        "Developed new brand guidelines and visual identity",
        "Created a suite of marketing materials including website, brochures, and presentations",
        "Trained internal teams on brand implementation",
        "Resulted in a 30% increase in brand recognition"
      ]
    }
  ]
  
  export const testimonials = [
    { name: "Sarah Johnson", company: "TechCorp", text: "Duo Creations transformed our annual conference into an unforgettable experience. Their attention to detail and innovative ideas exceeded our expectations." },
    { name: "Michael Chen", company: "Global Innovations", text: "The digital marketing strategy developed by Duo Creations significantly boosted our online presence. We saw a 200% increase in engagement within the first month." },
    { name: "Emily Rodriguez", company: "Startup Hub", text: "Working with Duo Creations for our product launch event was a game-changer. They brought our vision to life and helped us make a lasting impression in the market." }
  ]
  
  export const blogPosts = [
    { title: "10 Trends Shaping the Future of Event Planning", excerpt: "Explore the latest innovations in event technology and sustainability practices that are transforming the industry." },
    { title: "Mastering Social Media Marketing in 2024", excerpt: "Learn about the newest platforms, algorithms, and strategies to elevate your brand's social media presence." },
    { title: "The Art of Storytelling in Brand Marketing", excerpt: "Discover how to craft compelling narratives that resonate with your audience and drive engagement." }
  ]