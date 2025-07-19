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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
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

            <div className="grid md:grid-cols-3 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto">
                    <credential.icon className="h-6 w-6 text-jade-green" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-jet-black font-inter text-sm">{credential.title}</h4>
                    <p className="text-xs text-gray-600 font-open-sans leading-tight">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-azure-mist to-honeydew rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/public/images/Facetune_16-07-2025-14-50-37.png"
                alt="Colton Reid, FNP-C"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-jade-green/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-deep-teal/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTeam;