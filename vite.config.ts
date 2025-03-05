import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    // port: 80, // Set the port to 80
    // host: '0.0.0.0', // Allow access from external IP addresses
    // allowedHosts: true  // Allows any host
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
