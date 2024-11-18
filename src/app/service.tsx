import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from "./uicomponent"
import { Button } from "./uicomponent"
import { ChevronRight, X, Check } from "lucide-react"
import { services } from './data'

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="h-full perspective"
    >
      <AnimatePresence>
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group h-full">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-lg text-white/90 mb-4 line-clamp-3">{service.description}</p>
                  <Button variant="outline" className="self-start group" onClick={handleFlip}>
                    <span className="mr-2">Discover More</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
              <div className="relative w-full h-80 sm:h-96 p-6 flex flex-col">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground"
                  onClick={handleFlip}
                >
                  <X className="h-6 w-6" />
                </Button>
                <h3 className="text-3xl font-bold mb-4">{service.name}</h3>
                <div className="text-lg mb-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                  <p className="mb-4">{service.fullDescription}</p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="secondary" className="self-start mt-auto group" onClick={handleFlip}>
                  <span className="mr-2">Back to Service</span>
                  <ChevronRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
export default function ServicesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const validServices = Array.isArray(services) ? services : []

  if (validServices.length === 0) {
    return (
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</h2>
          <p className="text-xl text-muted-foreground">No services available at the moment. Please check back later.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-2 lg:px-16"> {/* Added padding for larger screens */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, y: -20 }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional services designed to elevate your brand and create unforgettable experiences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {validServices.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}