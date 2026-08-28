import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js blockiert im Dev-Modus Cross-Origin-Anfragen auf Dev-Assets.
  // Ohne diese Liste laedt das JS-Bundle nicht, wenn man den Dev-Server
  // vom Handy ueber die LAN-IP des PCs aufruft – die Seite bleibt dann
  // ohne Hydration (kein Menue, keine Scroll-Animationen).
  allowedDevOrigins: ["192.168.0.53", "172.22.96.1"],
};

export default nextConfig;
