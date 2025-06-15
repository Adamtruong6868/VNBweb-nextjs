'use client'

import React from 'react'

interface Section {
  title: string
  text: string
}

interface GalleryCardProps {
  title: string
  sections: Section[]
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, sections }) => {
  return (
    <div className="group p-4 sm:p-6 rounded-2xl border border-gray-700 transition duration-300 hover:shadow-lg bg-white/10 backdrop-blur-lg">
      <h2 className="text-2xl font-bold text-yellow-200 mb-4 group-hover:text-yellow-400 transition-colors">
        {title}
      </h2>
      <ul className="space-y-4">
        {sections.map((section, index) => (
          <li
            key={index}
            className="transition duration-300 p-3 rounded-lg group-hover:bg-white/5 hover:bg-white/10"
          >
            <p className="text-lg font-semibold text-white group-hover:text-cyan-200">
              {section.title}
            </p>
            <p className="text-sm text-gray-300">{section.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GalleryCard
