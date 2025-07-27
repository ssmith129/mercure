import React from 'react';
import { MapPin, Video, Users, Clock } from 'lucide-react';

const Approach = () => {
  const features = [
    {
      icon: Users,
      title: "Personalized Care Plans",
      description: "Every treatment is tailored to your unique health profile and aesthetic goals."
    },
    {
      icon: MapPin,
      title: "In-Person Excellence",
      description: "State-of-the-art facility with advanced treatments like PRP, IV therapy, and lab services."
    },
    {
      icon: Video,
      title: "Virtual Convenience",
      description: "Access consultations, lab reviews, and ongoing support from anywhere."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose the care format that fits your lifestyle and schedule."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-honeydew">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
                Our Approach: <br />
                <span className="text-jade-green">Personalized Care</span>
              </h2>
              <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
                We offer a blend of in-person and virtual services to provide convenient and accessible care tailored to your unique needs. Our comprehensive approach ensures you receive the right treatment at the right time, in the format that works best for you.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-jade-green/10 rounded-lg flex items-center justify-center group-hover:bg-jade-green/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-jade-green group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-jet-black font-inter mb-2 group-hover:text-jade-green transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 font-open-sans">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-azure-mist to-whisper-grey rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="In-person consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-jade-green/10 to-deep-teal/10 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <div className="text-center space-y-2">
                    <MapPin className="h-8 w-8 text-jade-green mx-auto animate-pulse" />
                    <p className="text-deep-teal font-open-sans font-semibold text-sm">In-Person Care</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-deep-teal/10 to-jade-green/10 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <div className="text-center space-y-2">
                    <Video className="h-8 w-8 text-deep-teal mx-auto animate-pulse" />
                    <p className="text-jade-green font-open-sans font-semibold text-sm">Virtual Support</p>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-whisper-grey to-azure-mist rounded-xl overflow-hidden hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Virtual consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;