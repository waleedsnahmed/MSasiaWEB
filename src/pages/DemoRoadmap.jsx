import React, { useState } from 'react';
import { ClipboardCheck, Truck, MapPin, Cog, Recycle, Award } from 'lucide-react';

const phases = [
  {
    number: 1,
    title: 'Assessment & Planning',
    description: 'A dedicated account manager conducts a detailed assessment (on-site or virtual) to securely catalog your IT equipment, lab devices, and industrial scrap. We then create a fully customized recycling plan aligned with your operational schedule and sustainability goals.',
    icon: ClipboardCheck,
    color: 'from-blue-400 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
  },
  {
    number: 2,
    title: 'Secure On-Site Collection',
    description: 'Our certified collection crews arrive at your scheduled time to securely log each electronic asset into our advanced digital tracking system. For data-bearing devices, we perform specialized on-site data wiping or apply tamper-proof seals for complete chain-of-custody security.',
    icon: Award,
    color: 'from-emerald-400 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
  },
  {
    number: 3,
    title: 'GPS-Tracked Transportation',
    description: 'All collected electronic assets are transported in our GPS-tracked, fully insured, and secured vehicles directly to our authorized processing facilities. We maintain complete legal and operational liability and provide real-time shipment tracking throughout transit.',
    icon: MapPin,
    color: 'from-amber-400 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-50 to-orange-50'
  },
  {
    number: 4,
    title: 'Systematic Processing',
    description: 'Material is accurately weighed and audited, and all data storage devices undergo irreversible physical destruction via specialized industrial shredding. Skilled technicians efficiently disassemble items, segregating components into forty distinct pure recovery streams.',
    icon: Cog,
    color: 'from-rose-400 to-pink-500',
    gradient: 'bg-gradient-to-br from-rose-50 to-pink-50'
  },
  {
    number: 5,
    title: 'Material Recovery',
    description: 'Recovered electronic components undergo advanced mechanical processing to achieve diverse high-purity material grades for industrial reuse. These materials directly power the circular economy, becoming essential raw inputs for new products at authorized smelters.',
    icon: Recycle,
    color: 'from-green-400 to-lime-500',
    gradient: 'bg-gradient-to-br from-green-50 to-lime-50'
  },
  {
    number: 6,
    title: 'Certification & Reporting',
    description: 'You receive a comprehensive, legally recognized Certificate of Recycling and Data Destruction detailing the precise processing outcome for every asset. This documentation demonstrates EPR compliance and provides verifiable evidence for your corporate ESG reporting.',
    icon: Truck,
    color: 'from-sky-400 to-blue-500',
    gradient: 'bg-gradient-to-br from-sky-50 to-blue-50'
  }
];

export default function DemoRoadmap() {
  const [activePhase, setActivePhase] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            E-Waste Recycling Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the complete lifecycle of responsible electronic waste management
          </p>
        </div>

        <div className="relative">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            const isActive = activePhase === phase.number;

            return (
              <div key={phase.number} className="relative mb-12">
                <div
                  className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onMouseEnter={() => setActivePhase(phase.number)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <div
                      className={`
                        ${phase.gradient} p-8 rounded-2xl shadow-lg
                        transform transition-all duration-500 ease-out
                        ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
                        border-2 border-white
                      `}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                          Phase {phase.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div
                      className={`
                        w-20 h-20 rounded-full bg-gradient-to-br ${phase.color}
                        flex items-center justify-center shadow-xl
                        transform transition-all duration-500
                        ${isActive ? 'scale-125 rotate-12' : 'hover:scale-110'}
                        relative z-10
                      `}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>

                    {index < phases.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gray-300 to-gray-200 hidden md:block" />
                    )}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>

                {index < phases.length - 1 && (
                  <div className="md:hidden w-1 h-16 bg-gradient-to-b from-gray-300 to-gray-200 mx-auto mt-4" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Join us in building a sustainable future through responsible e-waste recycling
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
