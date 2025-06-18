'use client'

import React from 'react'

const milestones = [
  {
    year: '2018',
    title: 'Game Devs',
    description: 'Talent Freelancers in Roblox/Unity Game Development.',
    bg: '/assets/timeline/gamepad.png'
  },
  {
    year: '2020',
    title: 'Researching',
    description: 'Entered blockchain as researchers and early investors.',
    bg: '/assets/timeline/blockchain.png'
  },
  {
    year: '2021',
    title: 'Validators Era',
    description: 'Formed VNBnode and become trusted validators for blockchain projects.',
    bg: '/assets/timeline/validator.png'
  },
  {
    year: '2023',
    title: 'GameFi Devs',
    description: 'Built Unity-based games with blockchain/NFT features.',
    bg: '/assets/timeline/gamefi.png'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'AI integrated solutions to serve customer requirements.',
    bg: '/assets/timeline/ai.png'
  },
  {
    year: '2025',
    title: 'Full Solutions',
    description: 'Merged with Nedy to provide full Web3 launch support.',
    bg: '/assets/timeline/rocket.png'
  }
]

export default function MilestoneTimeline() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
        🧗 Our Journey
      </h2>

      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible max-w-7xl mx-auto">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="w-[160px] h-[280px] rounded-xl shadow-md overflow-hidden relative group transition-transform duration-300 hover:scale-105 flex-shrink-0"
          >
            {/* Full-height image */}
            <img
              src={item.bg}
              alt={item.title}
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain z-0"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-between h-full text-center px-2 py-3">
              
              {/* Centered title + description */}
              <div className="flex-1 flex flex-col justify-center items-center">
                <div>
		  <h4 className="text-sm font-bold text-gray-100 group-hover:text-cyan-400 drop-shadow-md transition-colors duration-300">
		    {item.title}
		  </h4>
		  <p className="text-[11px] text-cyan-300 group-hover:text-[#f8ffbc] mt-1 leading-tight drop-shadow-sm transition-colors duration-300">
		    {item.description}
		  </p>
		</div>

              </div>

              {/* Year pinned slightly above bottom, centered */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <h4 className="text-xs font-medium text-[#D3D3D3] group-hover:text-white drop-shadow">
                  {item.year}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
