import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-honeydew min-h-[720px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-[2.5rem] font-bold text-jet-black font-inter leading-[3.125rem]">
                Aesthetic <br />
                <span className="text-jade-green">Confidence</span> <br />
                Through Science
              </h1>
            <h1 className="flex w-[35.375rem] flex-col justify-center self-stretch text-[2.5rem] font-bold text-jet-black font-inter leading-[3.125rem]">
              Aesthetic <br />
              <span className="text-jade-green">Confidence</span> <br />
              Through Science
            </h1>
              <p className="text-[20px] text-deep-teal font-open-sans font-normal leading-[32.5px] text-left">
                Empowering individuals to achieve aesthetic confidence through innovative, personalized, and science-backed health solutions. True beauty radiates from within and is nurtured by optimal health.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-jade-green text-white px-8 py-4 rounded-lg font-inter font-semibold text-base uppercase tracking-wide hover:bg-jade-green/90 transition-all duration-200 flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-deep-teal text-deep-teal px-8 py-4 rounded-lg font-inter font-semibold text-base uppercase tracking-wide hover:bg-deep-teal hover:text-white transition-all duration-200">
                Explore Solutions
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-azure-mist to-whisper-grey rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="h-12 w-12 text-jade-green" />
                  <Sparkles className="h-16 w-16 text-deep-teal" />
                </div>
                <p className="text-deep-teal font-open-sans font-semibold text-lg">Beauty From Within</p>
                <p className="text-gray-600 font-open-sans text-sm">Science-Backed Solutions</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-jade-green/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-deep-teal/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;