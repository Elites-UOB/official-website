import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "main"
<<<<<<< HEAD
declare module "E:/github/CSIT-Elites-Dev-Res2/node_modules/nuxt/dist/pages/runtime/composables" {
=======
declare module "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/pages/runtime/composables" {
>>>>>>> main
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}