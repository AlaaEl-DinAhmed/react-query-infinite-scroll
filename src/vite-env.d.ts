/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RICK_MORTY_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
