/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/// <reference types="astro/astro-jsx" />

// Env variables intelliSense
interface ImportMetaEnv {
    readonly ASTRO_HEROTU_API_KEY: string
}

interface ImportMet {
    readonly env: ImportMetaEnv
}
