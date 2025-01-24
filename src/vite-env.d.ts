/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROFILE_GITHUB: string
  readonly VITE_PROFILE_LINKEDIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
