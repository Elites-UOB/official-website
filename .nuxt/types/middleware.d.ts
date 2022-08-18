import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
<<<<<<< HEAD
declare module "E:/github/CSIT-Elites-Dev-Res2/node_modules/nuxt/dist/pages/runtime/composables" {
=======
declare module "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> main
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}