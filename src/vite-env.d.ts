/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAR_WAR_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
