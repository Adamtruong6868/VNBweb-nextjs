'use client'

import { useRef } from 'react'
import GameGalleryCard from '../../components/GameGalleryCard'
// import { Box } from '@mui/material'
// import { keyframes } from '@emotion/react'

const gameList = [
  {
    logoURL: '/assets/games/Alphalt.png',
    name: 'Alphalt Thunder',
    category: 'RACE',
    description:
      'Welcome to Alphalt Thunder, the ultimate multiplayer car racing experience that combines cutting-edge realism with the power of blockchain technology! Dive into the most thrilling car driving simulator where every race is packed with high-octane action and competitive excitement. Compete with rivals, challenge your friends, and place on-chain bets to elevate the fun.',
    thumbnailURL: '/assets/games/Alphalt1.jpg',
  },
  {
    logoURL: '/assets/games/lasthope1.png',
    name: 'The Last Hope',
    category: 'TOWER DEFENSE',
    description:
      'In a world consumed by a zombie apocalypse, a group of elite soldiers known as the "Defenders" seeks refuge in a fortified stronghold, their last hope against the relentless "Blood Tide."',
    thumbnailURL: '/assets/games/lasthope.jpg',
  },
  {
    logoURL: '/assets/games/myfish.png',
    name: 'My Fish 2',
    category: 'STRATEGY, SIMULATION',
    description:
      'My Fish 2 is an online simulation and action game where players from around the world can care for and compete with unique battle fish. Build your personalized aquarium, nurture, and train your fish to develop powerful abilities and stats.',
    thumbnailURL: '/assets/games/myfish2.webp',
  },
]

export default function Games() {
  const games = useRef<HTMLDivElement>(null)

  const handleScrollToGames = () => {
    games.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-black/10 text-white overflow-hidden">
      
      {/* Header Section */}
      <div className="text-center pt-16 px-4 md:px-8 relative z-10 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#f8ffbc]">
          Our GameFi Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          As a product studio, we develop our products from scratch to market launch.
          With our modular systems, we can build customized products as per requirements.
          Here are samples of our products.
        </p>
        <button
          onClick={handleScrollToGames}
          className="btn btn-primary mt-4 relative transition-transform duration-300 hover:-translate-y-1 group text-[#f8ffbc]"
        >
          Contact us to see more
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-5 h-5 text-yellow-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </div>

      {/* Game Gallery Section */}
      <div
        ref={games}
        className="flex flex-col items-center justify-center gap-10 relative z-10 px-4 pt-16 pb-24"
      >
        {gameList.map((game) => (
          <GameGalleryCard
            key={game.name}
            logoURL={game.logoURL}
            name={game.name}
            category={game.category}
            description={game.description}
            thumbnailURL={game.thumbnailURL}
           />
        ))}
      </div>
    </div>
  )
}
