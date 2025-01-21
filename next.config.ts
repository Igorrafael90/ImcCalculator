import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Rota local
        destination: 'https://caloriasporalimentoapi.herokuapp.com/api/:path*', // URL da API remota
      },
    ];
  },
};

export default nextConfig;
