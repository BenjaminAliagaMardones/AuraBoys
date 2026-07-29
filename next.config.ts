import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Las fotos de los jugadores viven en public/players/ y llegan desde
    // celulares: tamanos, proporciones y pesos muy dispares. Next las
    // reencodea y sirve el tamano justo para cada breakpoint.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
