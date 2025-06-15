'use client'
import Image from 'next/image'

const partners = [
  { name: 'Unity', logo: '/assets/partners/unity.svg' },
  { name: 'Thirdweb', logo: '/assets/partners/3rdweb.svg' },
  { name: 'Tanssi', logo: '/assets/partners/tanssi.png' },
  { name: 'Dymension', logo: '/assets/partners/dymension.png' },
  { name: 'Open AI', logo: '/assets/partners/openAI.svg' },
  { name: 'Roblox', logo: '/assets/partners/roblox.svg' },
  { name: 'Nedy', logo: '/assets/partners/nedy.svg' },
  { name: 'itch.io', logo: '/assets/partners/itch.svg' },
  { name: 'n8n.io', logo: '/assets/partners/n8n.svg' },
  { name: 'DeepAI', logo: '/assets/partners/deepai.png' },
  { name: 'Avail', logo: '/assets/partners/avail.svg' },
  { name: 'Copilot', logo: '/assets/partners/copilot.svg' },
]

export default function PartnersSection() {
  return (
    <section className="mt-20 text-center px-4">
      <h2 className="text-3xl font-bold text-white mb-8">🤝 Trusted Partners</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="w-36 h-20 flex items-center justify-center bg-white/3 rounded-lg backdrop-blur"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
