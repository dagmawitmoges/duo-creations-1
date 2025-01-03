"use client"
// import logo from './assets/images/image.png'
import christmas_logo from './assets/images/image-removebg-preview (38).png'

import bg from './assets/images/1.png'
// import ReactPlayer from 'react-player';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import {
    Button,
    Input,
    Textarea,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Card,
    CardContent,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Tabs,
    TabsList,
    TabsTrigger,
    CardHeader,
    CardDescription,
    CardTitle,
} from './uicomponent'
import AutoScrollClients from './autoscroll'
import AboutSection from './about'
import { services, clients, portfolioItems, testimonials, blogPosts } from './data'
import ServicesSection from './service'

export default function IndexPage() {
    const snowflakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100 + "%",
        animationDelay: Math.random() * 5 + "s",
        fontSize: Math.random() * 10 + 10 + "px", // Random sizes for variety
    }));

    const [activeSection, setActiveSection] = useState('home')
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeItem, setActiveItem] = useState(portfolioItems[0])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 50)

            const sections = ['home', 'clients', 'about', 'services', 'portfolio', 'testimonials', 'blog', 'contact']
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element && scrollPosition >= element.offsetTop - 100) {
                    setActiveSection(section)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
             {snowflakes.map(({ id, left, animationDelay, fontSize }) => (
                <span
                    key={id}
                    className="snowflake"
                    style={{
                        left,
                        animationDelay,
                        fontSize,
                    }}
                >
                    ❄
                </span>
            ))}
            <header
    className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out transform ${
        isScrolled ? 'bg-white shadow-md scale-100' : 'bg-transparent scale-95'
    }`}
>
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
            href="/"
            className={`transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
            }`}
        >
            <Image
                src={christmas_logo}
                alt="Duo Creations Logo"
                width={250}
                height={150}
                className="w-auto h-20 transition-transform duration-500 ease-in-out hover:scale-105"
            />
        </Link>
        <nav className="hidden md:flex space-x-4">
            {['home', 'clients', 'about', 'services', 'portfolio', 'testimonials', 'blog', 'contact'].map(
                (section) => (
                    <Button
                        key={section}
                        variant={
                            isScrolled
                                ? activeSection === section
                                    ? 'default'
                                    : 'ghost'
                                : 'link'
                        }
                        className={`transition-transform duration-300 ${
                            isScrolled ? '' : 'text-white'
                        } hover:scale-110`}
                        onClick={() => scrollToSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                )
            )}
        </nav>
    </div>
</header>

            <main className="flex-grow">
                <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                    <Image
                        src={bg}
                        alt="YouTube Video"
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="relative z-10 text-center text-white">
    <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        Crafting Unforgettable Events
    </motion.h1>
    <motion.p
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
    >
        Elevating Brands Digitally
    </motion.p>
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
    >
        <Button
            size="lg"
            onClick={() => scrollToSection('services')}
        >
            Discover Our Services
        </Button>
    </motion.div>
</div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
                        onClick={() => scrollToSection('clients')}
                    >
                        <ChevronDown className="h-8 w-8" />
                        <span className="sr-only">Scroll down</span>
                    </Button>
                </section>
                <section id="clients" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Clients</h2>
                        <AutoScrollClients clients={clients} />
                    </div>
                </section>
                <AboutSection  />
                <ServicesSection/>
                <section id="portfolio" className="py-16 bg-gradient-to-b from-gray-100 to-white">
                    <div className="container mx-auto px-4">
                        <motion.h2 
                            className="text-4xl font-bold mb-12 text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Portfolio
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Tabs value={activeItem.id.toString()} onValueChange={(value) => setActiveItem(portfolioItems.find(item => item.id.toString() === value) || portfolioItems[0])}>
                                    <TabsList className="grid grid-cols-3 gap-4 mb-8">
                                        {portfolioItems.map((item) => (
                                            <TabsTrigger 
                                                key={item.id} 
                                                value={item.id.toString()}
                                                className="p-2 text-sm font-medium"
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={100}
                                                    height={100}
                                                    className="w-full h-auto rounded-lg"
                                                />
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </Tabs>
                            </div>
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{activeItem.title}</CardTitle>
                                        <CardDescription>{activeItem.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-disc list-inside space-y-2">
                                            {activeItem.details.map((detail, index) => (
                                                <motion.li 
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                >
                                                    {detail}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="py-16 ">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
                        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index}>
                                        <Card>
                                            <CardContent className="p-6 text-center">
                                                <p className="italic mb-4">&quot;{testimonial.text}&quot;</p>
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
                <section id="blog" className="py-17 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Blog & Insights</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                        <Button variant="outline">Read More</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <form className="space-y-4">
                                    <Input placeholder="Your Name" />
                                    <Input type="email" placeholder="Your Email" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Service of Interest" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {services.map((service) => (
                                                <SelectItem key={service.name} value={service.name.toLowerCase().replace(' ', '-')}>
                                                    {service.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Textarea placeholder="Your Message" />
                                    <Button type="submit">Send Message</Button>
                                </form>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5384714803604!2d38.74639661478447!3d9.006448393533945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1645451234567!5m2!1sen!2sus"
                                        width="600"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        className="w-full h-full rounded-lg"
                                    ></iframe>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-6 w-6 mr-2" />
                                    <p>123 Event Street, Addis Ababa, Ethiopia</p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-6 w-6 mr-2" />
                                    <p>+251 123 456 789</p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-6 w-6 mr-2" />
                                    <p>info@duocreations.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>&copy; 2024 Duo Creations. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-red-300"><Facebook /></Link>
                            <Link href="#" className="hover:text-green-300"><Instagram /></Link>
                            <Link href="#" className="hover:text-red-300"><Twitter /></Link>
                            <Link href="#" className="hover:text-green-300"><Linkedin /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}