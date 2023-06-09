/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }, 
  images: {
    domains: ['images.ctfassets.net', 'videos.ctfassets.net', 'downloads.ctfassets.net'],
  }

}
