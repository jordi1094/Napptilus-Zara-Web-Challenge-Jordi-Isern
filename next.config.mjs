/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
      remotePatterns: [{
        protocol:"http",
        hostname:'prueba-tecnica-api-tienda-moviles.onrender.com'
      },
      {
        protocol:"https",
        hostname:'prueba-tecnica-api-tienda-moviles.onrender.com'
      }],
    },
  };
  
  export default nextConfig;
  