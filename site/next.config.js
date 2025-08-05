/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Al repository',
    description: 'The official store for Al's customized workspaces.',
    icon: 'https://algaema.github.io/img/logo.svg',
    listUrl: 'https://algaema.github.io/kasm-registry/',
    contactUrl: 'https://github.com/algaema/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
