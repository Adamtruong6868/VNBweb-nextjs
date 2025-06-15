// src/app/solutions/AiSolutions.tsx
'use client'

import React from 'react'
import AIGalleryCard from '../../components/AIGalleryCard'
// import { Box } from '@mui/material'
// import { keyframes } from '@emotion/react'

const aiGallery = [
  {
    logoURL: '/assets/ai/chatbot.jpg',
    name: 'Chatbot AI',
    category: 'Customer Support',
    description:
      '24/7 Automated Support and Smart Product Recommendations. Gather user needs and suggest the best-fitting services via natural language conversations.',
    thumbnailURL: '/assets/ai/chatbot.jpg',
  },
  {
    logoURL: '/assets/ai/business.webp',
    name: 'AI for Business',
    category: 'Automation',
    description:
      'Smart systems to analyze data, generate quotes, and automate internal operations.',
    thumbnailURL: '/assets/ai/business.webp',
  },
  {
    logoURL: '/assets/ai/gameai.png',
    name: 'Game AI',
    category: 'GameFi',
    description:
      'AI NPCs, dynamic quests, real-time game guidance, and personalized rewards for immersive gaming.',
    thumbnailURL: '/assets/ai/gameai.png',
  },
  {
    logoURL: '/assets/ai/web3.webp',
    name: 'AI x Web3',
    category: 'Blockchain',
    description:
      'Smart contract creation, NFT minting, appchain deployment, and AI-driven on-chain interaction.',
    thumbnailURL: '/assets/ai/web3.webp',
  },
]

const AiSolutions = () => {
  return (
    <div className="relative min-h-screen bg-black/20 text-white overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 pb-20 space-y-16 px-4 md:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold" style={{ color: '#f8ffbc' }}>
            Our AI Solutions
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering Support, Business, Gaming, and Web3—Smarter, Faster, Easier. At VNB, we build practical,
            deployable AI solutions that unlock real-time intelligence and automation across multiple industries.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
	    We also provide hands-on training and complete solution handover, ensuring our clients can operate and scale with confidence.
          </p>
        </div>

        {/* AI Cards */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl px-2 sm:px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiGallery.map((item) => (
                <AIGalleryCard
                  key={item.name}
                  logoURL={item.logoURL}
                  name={item.name}
                  category={item.category}
                  description={item.description}
                  thumbnailURL={item.thumbnailURL}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiSolutions
