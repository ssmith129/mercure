import React from 'react';
import { Sparkles, Users, Zap, Heart, Scale, Clock } from 'lucide-react';

const CoreIssues = () => {
  const issues = [
    {
      id: 'skin',
      icon: Sparkles,
      title: "Skin Health",
      description: "Rejuvenation, clarity, and anti-aging solutions.",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'hair',
      icon: Users,
      title: "Hair Restoration",
      description: "Solutions for thinning hair and promoting healthy growth.",
      image: "https://images.pexels.com/photos/3985167/pexels-photo-3985167.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'body',
      icon: Zap,
      title: "Body Composition & Muscle Optimization",
      description: "Strategies for sculpting the body and enhancing physical strength.",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'vitality',
      icon: Heart,
      title: "Sexual Health & Vitality",
      description: "Improving desire, performance, and overall well-being.",
      image: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'weight',
      icon: Scale,
      title: "Weight Management",
      description: "Sustainable approaches to healthy weight loss and maintenance.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 'antiaging',
      icon: Clock,
      title: "Anti-aging & Longevity",
      description: "Comprehensive programs to slow the aging process and enhance vitality.",
      image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-whisper-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
            Core Issues We Address
          </h2>
          <p className="text-xl text-gray-700 font-open-sans max-w-3xl mx-auto">
            Comprehensive solutions targeting the key areas that impact your confidence, health, and overall well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              id={issue.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-jade-green/10 rounded-lg flex items-center justify-center">
                    <issue.icon className="h-5 w-5 text-jade-green" />
                  </div>
                  <h3 className="text-xl font-bold text-jet-black font-inter">{issue.title}</h3>
                </div>
                <p className="text-gray-600 font-open-sans leading-relaxed">{issue.description}</p>
                <button className="inline-flex items-center text-jade-green font-inter font-semibold text-sm uppercase tracking-wide hover:text-deep-teal transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreIssues;