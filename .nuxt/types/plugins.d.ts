// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.9.0_magicast@0.3.5_pinia@2.3.0_typescript@5.7.2_vue@3.5.13_typescript@5.7.2___rollup@4.30.0/node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/browser-devtools-timing.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.9.0_magicast@0.3.5_pinia@2.3.0_typescript@5.7.2_vue@3.5.13_typescript@5.7.2___rollup@4.30.0/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@9.1.1_@vue+compiler-dom@3.5.13_eslint@9.18.0_jiti@2.4.2__magicast@0.3.5_rollup@4_5gf3nmu3jwaquxpfk4dnvvlyai/node_modules/@nuxtjs/i18n/dist/runtime/plugins/switch-locale-path-ssr.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@9.1.1_@vue+compiler-dom@3.5.13_eslint@9.18.0_jiti@2.4.2__magicast@0.3.5_rollup@4_5gf3nmu3jwaquxpfk4dnvvlyai/node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5_rollup@4.30.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5_rollup@4.30.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.7.0_rollup@4.30.0_vite@6.0.7_@types+node@22.10.5_jiti@2.4.2_terser@5.37.0_ya_ipnqj56j6mxb74sfqkxcvfcrn4/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.7.0_rollup@4.30.0_vite@6.0.7_@types+node@22.10.5_jiti@2.4.2_terser@5.37.0_ya_ipnqj56j6mxb74sfqkxcvfcrn4/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/dev-server-logs.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.1_@parcel+watcher@2.5.0_@types+node@22.10.5_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_uz7r2ot4qqhpcpquzo433mall4/node_modules/nuxt/dist/app/plugins/check-if-layout-used.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:browser-devtools-timing' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'i18n:plugin:switch-locale-path-ssr' | 'i18n:plugin' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
