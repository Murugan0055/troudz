import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import fs from 'fs'

export default defineConfig({
  server: {
    port: 443, // Set the port to 80
    host: '0.0.0.0', // Allow access from external IP addresses
    allowedHosts: true, // Allows any host
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/troudz.com/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/troudz.com/fullchain.pem')
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
