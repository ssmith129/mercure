import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const Providers = () => {
  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Years Combined Experience"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Satisfied Patients"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Care Support"
    }
  ];

  return (
    <section id="providers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
                Meet Our Experts
              </h2>
              <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
                Our practitioners bring together years of experience in sports medicine, functional health, and advanced aesthetics—working as one collective to deliver personalized care that makes a lasting impact.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="h-8 w-8 text-jade-green" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-jet-black font-inter">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-open-sans">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-jet-black font-inter">Our Specialties</h3>
              <ul className="space-y-2 text-gray-700 font-open-sans">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-jade-green rounded-full mr-3"></div>
                  Sports Medicine & Regenerative Orthopedics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-jade-green rounded-full mr-3"></div>
                  Functional & Integrative Medicine
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-jade-green rounded-full mr-3"></div>
                  Advanced Aesthetic Procedures
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-jade-green rounded-full mr-3"></div>
                  Chronic Pain Management
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-azure-mist to-honeydew rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-whisper-grey to-azure-mist rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="aspect-[3/4] bg-gradient-to-br from-honeydew to-whisper-grey rounded-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5452202/pexels-photo-5452202.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Medical professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providers;