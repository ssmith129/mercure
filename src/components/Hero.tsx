import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-jet-black min-h-[720px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-whisper-grey font-inter leading-tight">
                Aesthetic <br />
                <span className="text-jade-green">Confidence</span> <br />
                Through Science
              </h1>
              <p className="text-xl text-azure-mist font-open-sans leading-relaxed">
                Empowering individuals to achieve aesthetic confidence through innovative, personalized, and science-backed health solutions. True beauty radiates from within and is nurtured by optimal health.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-jade-green text-white px-8 py-4 rounded-lg font-inter font-semibold text-base uppercase tracking-wide hover:bg-jade-green/90 transition-all duration-200 flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-azure-mist text-azure-mist px-8 py-4 rounded-lg font-inter font-semibold text-base uppercase tracking-wide hover:bg-azure-mist hover:text-jet-black transition-all duration-200">
                Explore Solutions
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-12 shadow-2xl max-w-md mx-auto">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="h-12 w-12 text-jade-green" />
                  <Sparkles className="h-16 w-16 text-deep-teal" />
                </div>
                <h3 className="text-deep-teal font-open-sans font-semibold text-xl">Beauty From Within</h3>
                <p className="text-gray-600 font-open-sans text-base">Science-Backed Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;