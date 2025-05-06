const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ldcars.blr1.cdn.digitaloceanspaces.com',
        
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        
      }
    ],
  },
};
export default nextConfig;
