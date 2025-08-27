import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Dzikwa Centre', '3147 Rujeko St', 'Dzivarasekwa 1, Harare'],
      color: 'bg-primary-custom text-white'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['Tel: +263 242 217460','Tel: +263 242 216183','WhatsApp: +263 772 403485 or +358 40 5922543','WhatsApp: +263 772 516598 or +263 777 31 6765'],
      color: 'bg-primary-custom text-white'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['dzikwatrust@africaonline.co.zw', 'accounts@dzikwatrust.org', 'education@dzikwatrust.org', 'ict@dzikwatrust.org'],
      color: 'bg-primary-custom text-white'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
      color: 'bg-primary-custom text-white'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-custom mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-light-custom rounded-xl p-6 text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                  <IconComponent className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-bold text-dark-custom mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;