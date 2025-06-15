// src/components/NodeGalleryCard.jsx
'use client'
import React from 'react'

const NodeGalleryCard = ({ logoURL, name, serviceURL, stakeURL }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center space-y-6 transition-transform hover:-translate-y-2 hover:shadow-yellow-400/20 duration-300 animate__animated animate__fadeIn w-full max-w-sm">
      
      {/* Logo and Title */}
      <div className="flex flex-col items-center space-y-4">
        <div
          className="w-24 h-24 bg-center bg-no-repeat bg-contain rounded-xl"
          style={{ backgroundImage: `url("${logoURL}")` }}
        />
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <div className="w-16 h-1 rounded-full bg-yellow-400" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col w-full gap-3">
        <a
          href={serviceURL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 hover:bg-white/20 transition duration-300"
        >
          View Service
        </a>
        <a
          href={stakeURL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 hover:bg-white/20 transition duration-300"
        >
          Stake with Us
        </a>
      </div>
    </div>
  )
}

export default NodeGalleryCard
