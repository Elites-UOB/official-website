import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "main"
declare module "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}