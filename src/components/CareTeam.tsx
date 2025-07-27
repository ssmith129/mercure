import React from 'react';
import { Award, GraduationCap, Heart } from 'lucide-react';

const CareTeam = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Wilkes University • Johns Hopkins • Duke Medical Systems"
    },
    {
      icon: Award,
      title: "Specializations",
      description: "Regenerative Medicine • Functional Medicine • Advanced Aesthetics"
    },
    {
      icon: Heart,
      title: "Philosophy",
      description: "Whole-body wellness addressing sleep, stress, nutrition, and mental clarity"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
            Meet Our Care Team
          </h2>
        </div>

        <div className="grid lg:grid-cols-10 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-jet-black font-inter mb-2">
                  Colton Reid, FNP-C
                </h3>
                <p className="text-jade-green font-inter font-semibold text-lg">
                  Board-Certified Family Nurse Practitioner
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                <p>
                  Colton Reid is a board-certified Family Nurse Practitioner with over 16 years of experience in regenerative medicine, functional medicine, and aesthetics. Trained at Wilkes University and seasoned across leading medical systems including Johns Hopkins and Duke, he brings a thoughtful, evidence-based approach to care.
                </p>
                
                <p>
                  His philosophy centers on whole-body wellness—addressing sleep, stress, nutrition, movement, and mental clarity alongside medical and aesthetic interventions. With advanced certifications in injectables, lasers, and hormone optimization, Colton designs treatment plans that support both long-term health and confidence.
                </p>
                
                <p>
                  Originally from South Texas, Colton's personal health journey fuels his passion for helping others feel their best from the inside out. Outside of the clinic, he's a dedicated cyclist and strength trainer who lives the wellness lifestyle he encourages in his patients.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {credentials.map((credential, index) => (
                <div key={index} className="space-y-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-jade-green/20 transition-colors duration-300">
                    <credential.icon className="h-8 w-8 text-jade-green group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-jet-black font-inter text-base text-center group-hover:text-jade-green transition-colors duration-300">{credential.title}</h4>
                    <p className="text-sm text-gray-600 font-open-sans leading-relaxed text-center">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-[300px] bg-gradient-to-br from-azure-mist to-honeydew rounded-2xl overflow-hidden shadow-lg self-start hover:scale-105 hover:shadow-xl transition-all duration-500">
              <img
                src="/images/Facetune_16-07-2025-14-50-37 copy.png"
                alt="Colton Reid, FNP-C"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTeam;