import GalleryCard from '@/components/GalleryCard'
import PartnersSection from '@/components/PartnersSection'
import MilestoneTimeline from '@/components/MilestoneTimeline'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">
          🌐 Welcome to VNB Solutions
        </h1>
        <p className="text-lg text-gray-300">
          We empower the decentralized future by delivering end-to-end solutions that blend Web3, AI, Gaming, and Data Infrastructure.
        </p>
      </section>

      {/* Gallery Cards (1 column on all screen sizes) */}
      <section className="grid grid-cols-1 gap-8 px-4 sm:px-6 lg:px-8">
        <GalleryCard
          title="🔗 What Sets VNB Apart"
          sections={[
            {
              title: '📡 Blockchain Nodes Management & Data Handling',
              text: 'We offer high-availability node management services, validator operations, and real-time data processing for Web3 networks.',
            },
            {
              title: '🤖 AI Solutions for Business & Web3',
              text: 'AI-powered tools automate workflows, enhance customer support, and optimize internal processes and streamline operations for both traditional and Web3 businesses',
            },
            {
              title: '🎮 Next-Gen Gaming with Unity + AI',
              text: 'With over 8 years of Unity experience, we develop immersive blockchain-based games that integrate NFTs, on-chain economies, and AI to enhance player experiences.',
            },
            {
              title: '🧩 Web3 Development & Blockchain Infrastructure',
              text: 'Secure, scalable dApps, smart contracts, and full-stack Web3 ecosystems—from DeFi to NFTs.',
            },
          ]}
        />

        <GalleryCard
          title="🚀 Why Choose VNB?"
          sections={[
            {
              title: 'Scalability',
              text: 'Built to grow with your ecosystem.',
            },
            {
              title: 'Security',
              text: 'Remote signing, slashing protection, and real-time monitoring standards.',
            },
            {
              title: 'Proven Innovation',
              text: 'AI + Web3 + Gaming synergy with real deployments.',
            },
            {
              title: 'End-to-End Support',
              text: 'From concept to deployment to 24/7 operations.',
            },
          ]}
        />
      </section>

      {/* Timeline Section */}
      <MilestoneTimeline />

      {/* Partners Section */}
      <PartnersSection />
    </div>
  )
}
