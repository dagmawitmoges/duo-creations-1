import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { coFounders } from './data';

const CoFoundersSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Co-Founders
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coFounders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col justify-between" // Ensures equal height
            >
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex-grow">
                <div className="relative h-80">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-gray-600 italic mb-4">
                    {founder.title}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {founder.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={50}
                      height={50}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-gray-600">{founder.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoFoundersSection;