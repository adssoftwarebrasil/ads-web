cat > app.config.ts << 'EOF'
import { defineConfig } from '@tanstack/react-start/config'

export default defineConfig({
  server: {
    preset: 'cloudflare-pages',
  },
})
EOF