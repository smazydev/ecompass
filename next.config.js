/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
      },
      rewrites: [{
        source: '/studio/:path*',
        destination: '/',
      }]
    
}

module.exports = nextConfig
