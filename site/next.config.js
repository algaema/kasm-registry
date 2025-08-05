/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Al repository',
    description: 'The official store for Al's custom workspaces.',
    icon: 'https://algaema.github.io/img/logo.svg',
    listUrl: 'https://algaema.github.io/kasm-registry/',
    contactUrl: 'https://github.com/algaema/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
