/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Al repository',
    description: 'The official store for Al's customized workspaces.',
    icon: 'https://almakasm.github.io/img/logo.svg',
    listUrl: 'https://almakasm.github.io/kasm-registry/',
    contactUrl: 'https://github.com/almakasm/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
