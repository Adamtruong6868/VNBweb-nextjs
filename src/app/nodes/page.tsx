import React from 'react'
import NodeGalleryCard from '../../components/NodeGalleryCard'

const mainnetProjects = [
  {
    name: 'Avail',
    logoURL: '/assets/nodes/avail.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/Avail/avail_mainnet.md',
    stakeURL: 'https://staking.avail.tools/',
  },
  {
    name: 'Dymension',
    logoURL: '/assets/nodes/dymension.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/DYM/dymension.md',
    stakeURL: '',
  },
  {
    name: 'Redbelly',
    logoURL: '/assets/nodes/redbelly.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/Redbelly/mainnet.md',
    stakeURL: '',
  },
  {
    name: 'CrossFi',
    logoURL: '/assets/nodes/crossfi.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/Crossfi/crossfi.md',
    stakeURL: '',
  },
  {
    name: 'VOI',
    logoURL: '/assets/nodes/voi.jpeg',
    serviceURL: 'https://github.com/vnbnode/voi-service',
    stakeURL: 'https://stake.vnbnode.xyz/voi',
  },
  {
    name: 'Selfchain',
    logoURL: '/assets/nodes/selfchain.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/Selfchain/Selfchain.md',
    stakeURL: 'https://staking.selfchain.xyz/',
  },
  {
    name: 'Tangle',
    logoURL: '/assets/nodes/tangle.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/Tangle/tangle.md',
    stakeURL: 'https://app.tangle.tools/nomination',
  },
  {
    name: 'Lava',
    logoURL: '/assets/nodes/lava.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/LAVA/RPC-provider.md',
    stakeURL: '',
  },
  {
    name: 'Pactus',
    logoURL: '/assets/nodes/pactus.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Mainnet/Pactus/pactus.systemd.md',
    stakeURL: '',
  },
]

const testnetProjects = [
  {
    name: '0G',
    logoURL: '/assets/nodes/0g.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Testnet/0G/0g-auto.md',
    stakeURL: '',
  },
  {
    name: 'Dill',
    logoURL: '/assets/nodes/dill.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Testnet/Dill/install.md',
    stakeURL: '',
  },
  {
    name: 'Initia',
    logoURL: '/assets/nodes/initia.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Testnet/Initia/install.md',
    stakeURL: '',
  },
  {
    name: 'Pell',
    logoURL: '/assets/nodes/Pell.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Testnet/Pell/Systemd.md',
    stakeURL: '',
  },
  {
    name: 'Hedge Block',
    logoURL: '/assets/nodes/hedge.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Testnet/Hedge%20Block/cosmovisor.md',
    stakeURL: '',
  },
  {
    name: 'AlignedLayer',
    logoURL: '/assets/nodes/alignedLayer.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/END/AlignedLayer/systemd.md',
    stakeURL: '',
  },
  {
    name: 'Artela',
    logoURL: '/assets/nodes/artela.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/END/Artela/artela.en.md',
    stakeURL: '',
  },
  {
    name: 'Tanssi',
    logoURL: '/assets/nodes/tanssi.png',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/Testnet/Tanssi/Operator.md',
    stakeURL: '',
  },
  {
    name: 'Nillion',
    logoURL: '/assets/nodes/nillion.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/END/Nillion/verifier.md',
    stakeURL: '',
  },
  {
    name: 'Union',
    logoURL: '/assets/nodes/union.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/END/Union/Union.docker.md',
    stakeURL: '',
  },
  {
    name: 'Soarchain',
    logoURL: '/assets/nodes/soarchain.svg',
    serviceURL: 'https://github.com/vnbnode/VNBnode-Guides/blob/main/END/Soarchain/cosmovisor.md',
    stakeURL: '',
  },
]

const Project = () => {
  return (
    <div className="pb-10 space-y-16 px-4">
      {/* Intro Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#f8ffbc' }}>
          🔧 VNB Nodes Management Service
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          VNB offers a robust, enterprise-grade Node Management Service tailored for blockchain networks, developers, and enterprises seeking secure, scalable, and fully automated validator or RPC node infrastructure.
        </p>
      </div>

      {/* Mainnet Projects */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Mainnet Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {mainnetProjects.map((item) => (
            <NodeGalleryCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* Testnet Projects */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Testnet Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {testnetProjects.map((item) => (
            <NodeGalleryCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
