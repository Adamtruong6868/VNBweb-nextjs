// src/components/GameGalleryCard.tsx
'use client'

import { memo } from 'react'

type GameGalleryCardProps = {
  logoURL: string
  name: string
  category: string
  description: string
  thumbnailURL?: string
}

const GameGalleryCard = ({
  logoURL,
  name,
  category,
  description,
  thumbnailURL,
}: GameGalleryCardProps) => {
  return (
    <div className="shadow-xl bg-[#090b2e]/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-5xl transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 animate__animated animate__fadeIn">
      {/* Left Section */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4">
          <div
            className="w-20 h-20 sm:w-28 sm:h-28 bg-center bg-no-repeat bg-cover shrink-0 rounded-xl"
            style={{ backgroundImage: `url("${logoURL}")` }}
          ></div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white">{name}</h3>
            <div className="w-28 h-1 rounded-full bg-yellow-400" />
            <div className="text-sm font-medium text-yellow-200">{category}</div>
          </div>
        </div>

        <div className="text-sm sm:text-base text-white leading-relaxed">{description}</div>
      </div>

      {/* Right Thumbnail */}
      {thumbnailURL && (
        <div
          className="h-60 sm:h-[12rem] w-full sm:w-[40%] bg-center bg-no-repeat bg-cover rounded-xl"
          style={{ backgroundImage: `url("${thumbnailURL}")` }}
        ></div>
      )}
    </div>
  )
}

export default memo(GameGalleryCard)
