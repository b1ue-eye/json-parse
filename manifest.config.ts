import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
   "name": "JSON/Object Converter",
  "version": "1.0.1",
  "description": "Quickly convert between JSON strings and JavaScript objects with a sleek, developer-friendly interface.",
  action: {
    default_popup: 'index.html',
    default_icon: {
      '128': "icon128.svg",
    }
  },
  icons: {
    '128': "icon128.svg",
    '48': "icon48.svg",
    '16': "icon16.svg"
  }
})