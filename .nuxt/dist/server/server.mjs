
// --------------------
// Request: C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ohmyfetch ($id_4T3an2dV6G)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/paths.mjs ($id_ECLU0V8IJC)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/css.mjs ($id_6krI7AxzTO)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/root-component.mjs ($id_0ABbzzsqvq)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/app-component.mjs ($id_kmmt0hSw2o)
// --------------------
const $id_iu8c7ixsfj = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ohmyfetch");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: vue
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// - /components/content/Card.vue ($id_Z5fWObNQpy)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_jz0JU2b2Nx)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_n6tau7C6iC)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_0tpMzQV1gH)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_9Mu8LP7ep6)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_VYv3n523Td)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_AeK0eboLLD)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_GUKbWKQI1n)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_rnjEMep8w1)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_hAQR8rAAhU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_tHmtpl4mEQ)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_nB337S5XXH)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_GCC9WtlMnV)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_f2J6Z5afm9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_yuyA6xblLg)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_JjA66cPcMr)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_b0sDCZ6FVl)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_9ytDUXt2pN)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_G3jsXbmN7X)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_LiSm9eStNP)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_CZB3j4BJnF)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_bUwjxzRKdU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_EPWu8kf096)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_vi2H3wXSC7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_tRqLCbxJGU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_B2CPV25mw9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_F7bxRxtL4y)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_FvWFAZGqVo)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_dyjIbQcUXz)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /pages/CardDetails.vue?macro=true ($id_vwNDM53siQ)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/CardDetails.vue ($id_r81jrzGIPE)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/layouts.mjs ($id_ImNbJ0HsgI)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /layouts/main.vue ($id_Iyy1A44MrL)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - @vue/runtime-dom ($id_xcKel6nH2q)
// --------------------
const $id_G33erDMZ5a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/runtime-dom");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@vue/runtime-dom");
__vite_ssr_exportAll__(__vite_ssr_import_1__);

function initDev() {
    {
        __vite_ssr_import_0__.initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((process.env.NODE_ENV !== 'production')) {
    initDev();
}
const compile = () => {
    if ((process.env.NODE_ENV !== 'production')) {
        __vite_ssr_import_0__.warn(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};


Object.defineProperty(__vite_ssr_exports__, "compile", { enumerable: true, configurable: true, get(){ return compile }});
;
}


// --------------------
// Request: @vue/runtime-dom
// Parents: 
// - vue ($id_VkOCJnUZrn)
// Dependencies: 

// --------------------
const $id_9sriful2d8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/runtime-dom")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/runtime-dom\".")
  })


// --------------------
// Request: ohmyfetch
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// Dependencies: 

// --------------------
const $id_kLE5W6MKaY = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohmyfetch")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohmyfetch\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/paths.mjs
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// --------------------
const $id_QZxhdoiEkr = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"meta":[],"link":[],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});
globalThis.__buildAssetsURL = buildAssetsURL
globalThis.__publicAssetsURL = publicAssetsURL;
}


// --------------------
// Request: ufo
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/paths.mjs ($id_ECLU0V8IJC)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_PbPgQeEqzK)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_KJr7LehhrL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ufo")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ufo\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_PbPgQeEqzK)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_0tpMzQV1gH)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_4gnQAK1OIE)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/unocss.mjs ($id_PfWW4GTdpQ)
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_pBMtBh4E5b)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_V1hUoqIiza)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_fgrt3UeQEL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - hookable ($id_Jqn8E4F5w7)
// - unctx ($id_95GsJqysu7)
// --------------------
const $id_lfCjBrgcte = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("hookable");

const __vite_ssr_import_2__ = await __vite_ssr_import__("unctx");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: hookable
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_p6x8naIYgL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("hookable")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"hookable\".")
  })


// --------------------
// Request: unctx
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_Zn9H5zfDIh = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unctx")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unctx\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_YvAaozTraC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createError }});
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.isNuxtError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.showError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.setResponseStatus }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_XTtQ30wmO3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$BblPDwLpsD');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: vue-router
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 

// --------------------
const $id_7dT9jx0uwT = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue-router")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue-router\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BHNdDlA1Pk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_6bgT8vIFHQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_oMJXouc9nw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_kP3GBeDzaR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_0OCs51rfoK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => __vite_ssr_import_1__.toRef(__vite_ssr_import_2__.useNuxtApp().payload, "error");
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return showError }});
const throwError = showError;
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
const isNuxtError = (err) => err && typeof err === "object" && "__nuxt_error" in err;
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return isNuxtError }});
const createError = (err) => {
  const _err = __vite_ssr_import_0__.createError(err);
  _err.__nuxt_error = true;
  return _err;
};
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return createError }});
;
}


// --------------------
// Request: h3
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_K2PnHEPz0m = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("h3")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"h3\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_zYOrYjkwm9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$2Qpjr020wX');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    autoKey
  , '$O2v9FOrXIM');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - cookie-es ($id_MKm94FqkqC)
// - h3 ($id_ltfhTi4n2w)
// - destr ($id_12yP1cX3Wj)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_XUZhFBVStH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("cookie-es");

const __vite_ssr_import_2__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_3__ = await __vite_ssr_import__("destr");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_6__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_7__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!__vite_ssr_import_4__.isEqual(cookie.value, cookies[name])) {
        writeServerCookie(__vite_ssr_import_5__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_5__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: cookie-es
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_t3HHRMhh7L = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("cookie-es")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"cookie-es\".")
  })


// --------------------
// Request: destr
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// Dependencies: 

// --------------------
const $id_ZK3lg3ye5b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("destr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"destr\".")
  })


// --------------------
// Request: ohash
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_4gnQAK1OIE)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_0tpMzQV1gH)
// Dependencies: 

// --------------------
const $id_ApQSwD9AXx = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohash")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohash\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BjnOCDcfIZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
function setResponseStatus(code, message) {
  const event = true && useRequestEvent();
  if (event) {
    event.res.statusCode = code;
    if (message) {
      event.res.statusMessage = message;
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return setResponseStatus }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_72OrpZA28S = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_2__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_3__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  if (__vite_ssr_import_0__.getCurrentInstance()) {
    return __vite_ssr_import_0__.inject("_route", __vite_ssr_import_3__.useNuxtApp()._route);
  }
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_3__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_2__.joinURL(__vite_ssr_import_3__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_1__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_HRAmKRepZ0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_VYv3n523Td)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_nB337S5XXH)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_GCC9WtlMnV)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_f2J6Z5afm9)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/Footer.vue ($id_89jzJWR97X)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_aAoWaPsGgE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(
            __vite_ssr_import_0__.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_DBzckdbLOm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - @vue/shared ($id_FcJYoqIAB0)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_TG3cDPMBp5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/shared");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: @vue/shared
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_NOAOzpHkPB = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/shared\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/css.mjs
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// Dependencies: 

// --------------------
const $id_13HUCS7aoX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/unocss.mjs ($id_PfWW4GTdpQ)
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_pBMtBh4E5b)
// --------------------
const $id_feH524qNhT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/unocss.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/plugin.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1SAEi7QN5N = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /components/content/Card.vue ($id_Z5fWObNQpy)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_n6tau7C6iC)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_0tpMzQV1gH)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_jz0JU2b2Nx)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_9Mu8LP7ep6)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_VYv3n523Td)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_AeK0eboLLD)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_GUKbWKQI1n)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_rnjEMep8w1)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_hAQR8rAAhU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_tHmtpl4mEQ)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_nB337S5XXH)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_GCC9WtlMnV)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_f2J6Z5afm9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_yuyA6xblLg)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_JjA66cPcMr)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_b0sDCZ6FVl)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_9ytDUXt2pN)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_G3jsXbmN7X)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_LiSm9eStNP)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_CZB3j4BJnF)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_bUwjxzRKdU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_EPWu8kf096)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_vi2H3wXSC7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_tRqLCbxJGU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_B2CPV25mw9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_F7bxRxtL4y)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_FvWFAZGqVo)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_dyjIbQcUXz)
// --------------------
const $id_7M9T3cCK34 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {
  Card: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/content/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)),
  ContentDoc: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs' /* webpackChunkName: "components/content-doc" */).then(c => c.default || c)),
  ContentList: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs' /* webpackChunkName: "components/content-list" */).then(c => c.default || c)),
  ContentNavigation: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs' /* webpackChunkName: "components/content-navigation" */).then(c => c.default || c)),
  ContentQuery: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs' /* webpackChunkName: "components/content-query" */).then(c => c.default || c)),
  ContentRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs' /* webpackChunkName: "components/content-renderer" */).then(c => c.default || c)),
  Markdown: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs' /* webpackChunkName: "components/markdown" */).then(c => c.default || c)),
  MarkdownRenderer: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs' /* webpackChunkName: "components/markdown-renderer" */).then(c => c.default || c)),
  ProseA: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue' /* webpackChunkName: "components/prose-a" */).then(c => c.default || c)),
  ProseBlockquote: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue' /* webpackChunkName: "components/prose-blockquote" */).then(c => c.default || c)),
  ProseCode: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue' /* webpackChunkName: "components/prose-code" */).then(c => c.default || c)),
  ProseCodeInline: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue' /* webpackChunkName: "components/prose-code-inline" */).then(c => c.default || c)),
  ProseEm: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue' /* webpackChunkName: "components/prose-em" */).then(c => c.default || c)),
  ProseH1: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue' /* webpackChunkName: "components/prose-h1" */).then(c => c.default || c)),
  ProseH2: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue' /* webpackChunkName: "components/prose-h2" */).then(c => c.default || c)),
  ProseH3: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue' /* webpackChunkName: "components/prose-h3" */).then(c => c.default || c)),
  ProseH4: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue' /* webpackChunkName: "components/prose-h4" */).then(c => c.default || c)),
  ProseH5: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue' /* webpackChunkName: "components/prose-h5" */).then(c => c.default || c)),
  ProseH6: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue' /* webpackChunkName: "components/prose-h6" */).then(c => c.default || c)),
  ProseHr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue' /* webpackChunkName: "components/prose-hr" */).then(c => c.default || c)),
  ProseImg: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue' /* webpackChunkName: "components/prose-img" */).then(c => c.default || c)),
  ProseLi: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue' /* webpackChunkName: "components/prose-li" */).then(c => c.default || c)),
  ProseOl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue' /* webpackChunkName: "components/prose-ol" */).then(c => c.default || c)),
  ProseP: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue' /* webpackChunkName: "components/prose-p" */).then(c => c.default || c)),
  ProseStrong: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue' /* webpackChunkName: "components/prose-strong" */).then(c => c.default || c)),
  ProseTable: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue' /* webpackChunkName: "components/prose-table" */).then(c => c.default || c)),
  ProseTbody: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue' /* webpackChunkName: "components/prose-tbody" */).then(c => c.default || c)),
  ProseTd: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue' /* webpackChunkName: "components/prose-td" */).then(c => c.default || c)),
  ProseTh: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue' /* webpackChunkName: "components/prose-th" */).then(c => c.default || c)),
  ProseThead: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue' /* webpackChunkName: "components/prose-thead" */).then(c => c.default || c)),
  ProseTr: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue' /* webpackChunkName: "components/prose-tr" */).then(c => c.default || c)),
  ProseUl: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue' /* webpackChunkName: "components/prose-ul" */).then(c => c.default || c))
}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /components/content/Card.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_kyyr9LhriN = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  __name: 'Card',
  setup(__props, { expose }) {
  expose();


const cards =[
    {
        id:1,
        title:'html',
    },
    {
        id:2,
        title:'css',
    },
    {
        id:2,
        title:'nuxt',
    },
    {
        id:2,
        title:'laravel',
    }
]


const __returned__ = { cards }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "grid md:grid-cols-2 gap-4 lg:grid-cols-4 grid-flow-row p-4 rounded h-full" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($setup.cards, (card) => {
    _push(`<div class="mx-9 cursor-pointer relative p-5 group bg-slate-200 border-t-[12px] rounded-lg transition-all duration-200 delay-100 ease-in-out hover:shadow-md hover:shadow-secondary-50"><div class="flex flex-col"><div><img src="https://img.freepik.com/premium-vector/programing-concept-program-code-white-isolated-background_197170-769.jpg?w=2000" alt="img" class="h-56 rounded-lg w-[100%]"></div><div class="text-3xl font-bold flex justify-center text-gray-600 group"><!-- <slot name="title"/> -->${__vite_ssr_import_1__.ssrInterpolate(card.title)}</div><!-- <div class="text-xl  tracking-tight text-gray-900">
                    <slot name="description" />
                </div> --></div></div>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/content/Card.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/components/content/Card.vue"]]);
}


// --------------------
// Request: vue/server-renderer
// Parents: 
// - /components/content/Card.vue ($id_Z5fWObNQpy)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_VYv3n523Td)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_AeK0eboLLD)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_GUKbWKQI1n)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_rnjEMep8w1)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_hAQR8rAAhU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_tHmtpl4mEQ)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_nB337S5XXH)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_GCC9WtlMnV)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_f2J6Z5afm9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_yuyA6xblLg)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_JjA66cPcMr)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_b0sDCZ6FVl)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_9ytDUXt2pN)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_G3jsXbmN7X)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_LiSm9eStNP)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_CZB3j4BJnF)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_bUwjxzRKdU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_EPWu8kf096)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_vi2H3wXSC7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_tRqLCbxJGU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_B2CPV25mw9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_F7bxRxtL4y)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_FvWFAZGqVo)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_dyjIbQcUXz)
// - /pages/CardDetails.vue?macro=true ($id_vwNDM53siQ)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/CardDetails.vue ($id_r81jrzGIPE)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /layouts/main.vue ($id_Iyy1A44MrL)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_aRHphPzMpI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue/server-renderer")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue/server-renderer\".")
  })


// --------------------
// Request: /@id/__x00__plugin-vue:export-helper
// Parents: 
// - /components/content/Card.vue ($id_Z5fWObNQpy)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue ($id_VYv3n523Td)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue ($id_AeK0eboLLD)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_GUKbWKQI1n)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue ($id_rnjEMep8w1)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue ($id_hAQR8rAAhU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue ($id_tHmtpl4mEQ)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue ($id_nB337S5XXH)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue ($id_GCC9WtlMnV)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue ($id_f2J6Z5afm9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue ($id_yuyA6xblLg)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue ($id_JjA66cPcMr)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue ($id_b0sDCZ6FVl)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue ($id_9ytDUXt2pN)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue ($id_G3jsXbmN7X)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue ($id_LiSm9eStNP)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue ($id_CZB3j4BJnF)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue ($id_bUwjxzRKdU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue ($id_EPWu8kf096)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue ($id_vi2H3wXSC7)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue ($id_tRqLCbxJGU)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue ($id_B2CPV25mw9)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue ($id_F7bxRxtL4y)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue ($id_FvWFAZGqVo)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue ($id_dyjIbQcUXz)
// - /pages/CardDetails.vue?macro=true ($id_vwNDM53siQ)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/CardDetails.vue ($id_r81jrzGIPE)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /layouts/main.vue ($id_Iyy1A44MrL)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_mHD6riC5ol = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_jz0JU2b2Nx)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// --------------------
const $id_nT6Inxvpqi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: false,
      default: () => __vite_ssr_import_0__.useRoute().path
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_2__.useSlots();
    const { tag, excerpt, path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path, find: "one" });
    const emptyNode = (slot, data) => __vite_ssr_import_2__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    const addHead = (doc) => {
      if (path !== __vite_ssr_import_0__.useRoute().path) {
        return;
      }
      const head = Object.assign({}, doc.head);
      head.title = head.title || doc.title;
      head.meta = head.meta || [];
      const description = head.description || doc.description;
      if (description && head.meta.filter((m) => m.name === "description").length === 0) {
        head.meta.push({
          name: "description",
          content: description
        });
      }
      if (head.image && head.meta.filter((m) => m.property === "og:image").length === 0) {
        head.meta.push({
          property: "og:image",
          content: head.image
        });
      }
      if (false) {
        __vite_ssr_import_2__.nextTick(() => __vite_ssr_import_1__.useHead(head));
      } else {
        __vite_ssr_import_1__.useHead(head);
      }
    };
    return __vite_ssr_import_2__.h(__vite_ssr_import_4__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => {
        addHead(data);
        return slots.default({ doc: data, refresh, isPartial, excerpt, ...this.$attrs });
      } : ({ data }) => {
        addHead(data);
        return __vite_ssr_import_2__.h(__vite_ssr_import_3__.default, { value: data, excerpt, tag, ...this.$attrs }, { empty: (bindings) => slots?.empty ? slots.empty(bindings) : emptyNode("default", data) });
      },
      empty: (bindings) => slots?.empty?.(bindings) || __vite_ssr_import_2__.h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>."),
      "not-found": (bindings) => slots?.["not-found"]?.(bindings) || __vite_ssr_import_2__.h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.")
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// --------------------
const $id_ANaNAYS9zv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    __vite_ssr_import_0__.watch(() => props.excerpt, (newExcerpt) => {
      if (newExcerpt && !props.value?.excerpt) {
        console.warn(`No excerpt found for document content/${props?.value?._path}.${props?.value?._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && value?._type === "markdown" && value?.body?.children?.length) {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots?.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs ($id_jz0JU2b2Nx)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - destr ($id_12yP1cX3Wj)
// - scule ($id_DhF8oeMoph)
// - property-information ($id_o6mmo5Ub7Q)
// - html-tags ($id_q7hevDM98C)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_PwPmFmFEXu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("destr");

const __vite_ssr_import_2__ = await __vite_ssr_import__("scule");

const __vite_ssr_import_3__ = await __vite_ssr_import__("property-information");

const __vite_ssr_import_4__ = await __vite_ssr_import__("html-tags");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = __vite_ssr_import_5__.useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = __vite_ssr_import_0__.toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...value?.tags || {}
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, __vite_ssr_import_0__.h, meta));
    return __vite_ssr_import_0__.h(component, {
      ...contentProps,
      ...meta.component?.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta) {
  const originalTag = node.tag;
  const renderTag = typeof node.props?.__ignoreMap === "undefined" && documentMeta.tags[node.tag] || node.tag;
  if (node.type === "text") {
    return h2(__vite_ssr_import_0__.Text, node.value);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  return h2(component, propsToData(node, documentMeta), renderSlots(node, h2, documentMeta));
}
function renderSlots(node, h2, documentMeta) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...node2.children.map((child) => renderNode(child, h2, documentMeta)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = node2.children.map((child) => renderNode(child, h2, documentMeta));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  return Object.fromEntries(Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]));
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = __vite_ssr_import_3__.find(__vite_ssr_import_3__.html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!__vite_ssr_import_4__.default.includes(component)) {
    const componentFn = __vite_ssr_import_0__.resolveComponent(__vite_ssr_import_2__.pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? __vite_ssr_import_1__.default(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
;
}


// --------------------
// Request: scule
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// Dependencies: 

// --------------------
const $id_nceR4N0Wse = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("scule")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"scule\".")
  })


// --------------------
// Request: property-information
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// Dependencies: 

// --------------------
const $id_wOcR8czerj = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("property-information")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"property-information\".")
  })


// --------------------
// Request: html-tags
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs ($id_THkzFqZCfT)
// Dependencies: 

// --------------------
const $id_SVkyhmLJbc = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("html-tags")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"html-tags\".")
  })


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs ($id_n6tau7C6iC)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// - ohash ($id_yEY2As6gE7)
// --------------------
const $id_YSQZ3uopzW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/query.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_4__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = __vite_ssr_import_4__.toRefs(props);
    const isPartial = __vite_ssr_import_0__.computed(() => path.value.includes("/_"));
    const { data, refresh } = await __vite_ssr_import_1__.useAsyncData(`content-query-${__vite_ssr_import_3__.hash(props)}`, () => {
      let queryBuilder;
      if (path.value) {
        queryBuilder = __vite_ssr_import_2__.queryContent(path.value);
      } else {
        queryBuilder = __vite_ssr_import_2__.queryContent();
      }
      if (only.value) {
        queryBuilder = queryBuilder.only(only.value);
      }
      if (without.value) {
        queryBuilder = queryBuilder.without(without.value);
      }
      if (where.value) {
        queryBuilder = queryBuilder.where(where.value);
      }
      if (sort.value) {
        queryBuilder = queryBuilder.sort(sort.value);
      }
      if (limit.value) {
        queryBuilder = queryBuilder.limit(limit.value);
      }
      if (skip.value) {
        queryBuilder = queryBuilder.skip(skip.value);
      }
      if (locale.value) {
        queryBuilder = queryBuilder.where({ _locale: locale.value });
      }
      if (find.value === "one") {
        return queryBuilder.findOne();
      }
      if (find.value === "surround") {
        if (!path.value) {
          console.warn("[Content] Surround queries requires `path` prop to be set.");
          console.warn("[Content] Query without `path` will return regular `find()` results.");
          return queryBuilder.find();
        }
        return queryBuilder.findSurround(path);
      }
      return queryBuilder.find();
    }, '$4SxX7Zuw4E');
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_4__.useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if (data._type && data._type === "markdown" && !data?.body?.children.length) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots?.["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots?.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => __vite_ssr_import_4__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/query.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_eWHV3HLSus)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_RUVFJvD9mG)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_PbPgQeEqzK)
// --------------------
const $id_UwQeZxtacZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/query.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const queryFetch = (params) => {
  const apiPath = __vite_ssr_import_5__.withContentBase(true ? "/query" : `/query/${__vite_ssr_import_1__.hash(params)}`);
  if (!true && true) {
    __vite_ssr_import_2__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_4__.jsonStringify(params),
      previewToken: __vite_ssr_import_2__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "queryFetch", { enumerable: true, configurable: true, get(){ return queryFetch }});
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    let path = __vite_ssr_import_0__.withLeadingSlash(__vite_ssr_import_0__.withoutTrailingSlash(__vite_ssr_import_0__.joinURL(query, ...pathParts)));
    path = path.replace(/[-[\]{}()*+.,^$\s]/g, "\\$&");
    return __vite_ssr_import_3__.createQuery(queryFetch).where({ _path: new RegExp(`^${path}`) });
  }
  return __vite_ssr_import_3__.createQuery(queryFetch, query);
}
Object.defineProperty(__vite_ssr_exports__, "queryContent", { enumerable: true, configurable: true, get(){ return queryContent }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/query.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs ($id_6UOs4IOTIJ)
// --------------------
const $id_QlwK2Pd5oQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs");

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, queryParams) => {
  const params = {
    ...queryParams
  };
  for (const key of arrayParams) {
    if (params[key]) {
      params[key] = __vite_ssr_import_0__.ensureArray(params[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      params[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => Object.freeze(params),
    only: $set("only", __vite_ssr_import_0__.ensureArray),
    without: $set("without", __vite_ssr_import_0__.ensureArray),
    where: $set("where", (q) => [...__vite_ssr_import_0__.ensureArray(params.where), q]),
    sort: $set("sort", (sort) => [...__vite_ssr_import_0__.ensureArray(params.sort), ...__vite_ssr_import_0__.ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    findOne: () => fetcher({ ...params, first: true }),
    find: () => fetcher(params),
    findSurround: (query2, options) => fetcher({ ...params, surround: { query: query2, ...options } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
Object.defineProperty(__vite_ssr_exports__, "createQuery", { enumerable: true, configurable: true, get(){ return createQuery }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/query/query.mjs ($id_eWHV3HLSus)
// Dependencies: 

// --------------------
const $id_ssGfaWHnpH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
Object.defineProperty(__vite_ssr_exports__, "get", { enumerable: true, configurable: true, get(){ return get }});
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const pick = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "pick", { enumerable: true, configurable: true, get(){ return pick }});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
Object.defineProperty(__vite_ssr_exports__, "omit", { enumerable: true, configurable: true, get(){ return omit }});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
Object.defineProperty(__vite_ssr_exports__, "apply", { enumerable: true, configurable: true, get(){ return apply }});
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
Object.defineProperty(__vite_ssr_exports__, "detectProperties", { enumerable: true, configurable: true, get(){ return detectProperties }});
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withoutKeys", { enumerable: true, configurable: true, get(){ return withoutKeys }});
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return withKeys }});
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
Object.defineProperty(__vite_ssr_exports__, "sortList", { enumerable: true, configurable: true, get(){ return sortList }});
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
Object.defineProperty(__vite_ssr_exports__, "assertArray", { enumerable: true, configurable: true, get(){ return assertArray }});
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
Object.defineProperty(__vite_ssr_exports__, "ensureArray", { enumerable: true, configurable: true, get(){ return ensureArray }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/utils/json.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_4gnQAK1OIE)
// Dependencies: 

// --------------------
const $id_MMdR8JHWfE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
Object.defineProperty(__vite_ssr_exports__, "jsonStringify", { enumerable: true, configurable: true, get(){ return jsonStringify }});
function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
Object.defineProperty(__vite_ssr_exports__, "jsonParse", { enumerable: true, configurable: true, get(){ return jsonParse }});
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/query.mjs ($id_R1NXY1pTE4)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_4gnQAK1OIE)
// - /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs ($id_9Mu8LP7ep6)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs ($id_6surxezBfr)
// --------------------
const $id_UTAnqhJATM = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs");

const withContentBase = (url) => __vite_ssr_import_0__.withBase(url, "/api/" + __vite_ssr_import_1__.useRuntimeConfig().public.content.base);
Object.defineProperty(__vite_ssr_exports__, "withContentBase", { enumerable: true, configurable: true, get(){ return withContentBase }});
const useUnwrap = () => ({
  unwrap: __vite_ssr_import_2__.unwrap,
  flatUnwrap: __vite_ssr_import_2__.flatUnwrap
});
Object.defineProperty(__vite_ssr_exports__, "useUnwrap", { enumerable: true, configurable: true, get(){ return useUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_PbPgQeEqzK)
// Dependencies: 

// --------------------
const $id_sk32bdNNel = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
Object.defineProperty(__vite_ssr_exports__, "TEXT_TAGS", { enumerable: true, configurable: true, get(){ return TEXT_TAGS }});
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
Object.defineProperty(__vite_ssr_exports__, "isTag", { enumerable: true, configurable: true, get(){ return isTag }});
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
Object.defineProperty(__vite_ssr_exports__, "isText", { enumerable: true, configurable: true, get(){ return isText }});
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
Object.defineProperty(__vite_ssr_exports__, "nodeChildren", { enumerable: true, configurable: true, get(){ return nodeChildren }});
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
Object.defineProperty(__vite_ssr_exports__, "nodeTextContent", { enumerable: true, configurable: true, get(){ return nodeTextContent }});
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
Object.defineProperty(__vite_ssr_exports__, "unwrap", { enumerable: true, configurable: true, get(){ return unwrap }});
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
Object.defineProperty(__vite_ssr_exports__, "flatUnwrap", { enumerable: true, configurable: true, get(){ return flatUnwrap }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs ($id_P4AaOKfhe8)
// --------------------
const $id_YPe0RrmvT7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = __vite_ssr_import_0__.useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => __vite_ssr_import_0__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default, contentQueryProps, {
      default: slots?.default ? ({ data, refresh, isPartial }) => slots?.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
      empty: (bindings) => slots?.empty ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
      "not-found": (bindings) => slots?.["not-found"] ? slots?.["not-found"]?.(bindings) : ({ data }) => emptyNode("not-found", data)
    });
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs ($id_4gnQAK1OIE)
// - vue ($id_VkOCJnUZrn)
// - ohash ($id_yEY2As6gE7)
// --------------------
const $id_icH2n3HfdA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("ohash");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineComponent({
  props: {
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = __vite_ssr_import_2__.toRefs(props);
    const { data, refresh } = await __vite_ssr_import_0__.useAsyncData(`content-navigation-${__vite_ssr_import_3__.hash(query.value)}`, () => __vite_ssr_import_1__.fetchContentNavigation(query.value), '$S4kfQoJwUW');
    return {
      data,
      refresh
    };
  },
  render(ctx) {
    const slots = __vite_ssr_import_2__.useSlots();
    const {
      query,
      data,
      refresh
    } = ctx;
    const emptyNode = (slot, data2) => __vite_ssr_import_2__.h("pre", null, JSON.stringify({ message: "You should use slots with <ContentNavigation>", slot, data: data2 }, null, 2));
    if (slots?.empty && (!data || !data?.length)) {
      return slots?.empty?.({ query, ...this.$attrs }) || emptyNode("empty", { query, data });
    }
    return slots?.default ? slots.default({ navigation: data, refresh, ...this.$attrs }) : emptyNode("default", data);
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs ($id_0tpMzQV1gH)
// Dependencies: 
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/utils/json.mjs ($id_RUVFJvD9mG)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_PbPgQeEqzK)
// --------------------
const $id_pBxlKSmEUV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/utils/json.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

const fetchContentNavigation = (queryBuilder) => {
  const params = queryBuilder?.params();
  const apiPath = __vite_ssr_import_3__.withContentBase(params ? `/navigation/${__vite_ssr_import_0__.hash(params)}` : "/navigation");
  if (!true && true) {
    __vite_ssr_import_1__.useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: __vite_ssr_import_2__.jsonStringify(params || {}),
      previewToken: __vite_ssr_import_1__.useCookie("previewToken").value
    }
  });
};
Object.defineProperty(__vite_ssr_exports__, "fetchContentNavigation", { enumerable: true, configurable: true, get(){ return fetchContentNavigation }});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/@nuxt/content/dist/runtime/composables/utils.mjs ($id_PbPgQeEqzK)
// --------------------
const $id_4xzeNQ7V9x = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "Markdown",
  functional: true,
  props: {
    use: {
      type: [String, Function],
      default: "default"
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = __vite_ssr_import_0__.getCurrentInstance();
    const { between } = __vite_ssr_import_0__.useSlots();
    const tags = __vite_ssr_import_0__.computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap, between, tags, parent }) {
    try {
      const slot = typeof use === "string" ? parent?.slots[use] || parent?.parent?.slots[use] : use;
      if (!slot) {
        return __vite_ssr_import_0__.h("div");
      }
      if (!unwrap) {
        return [slot()];
      }
      const { flatUnwrap } = __vite_ssr_import_1__.useUnwrap();
      const unwrapped = flatUnwrap(slot(), tags);
      if (between) {
        return unwrapped.flatMap((vnode, index) => index === 0 ? [vnode] : [between(), vnode]);
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return __vite_ssr_import_0__.h("div");
    }
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_bJGgp70oyJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseA",
  props: {
    href: {
      type: String,
      default: ""
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, __vite_ssr_import_2__.mergeProps({ href: $props.href }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_hzZGfuchXD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<blockquote${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</blockquote>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css ($id_1fRCHExbkC)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_3DkaTD1QZ7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");


const _sfc_main = __vite_ssr_import_0__.defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  }
});

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue ($id_GUKbWKQI1n)
// Dependencies: 

// --------------------
const $id_egeRZdg2Jz = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\npre code .line {\n  display: block;\n  min-height: 1rem;\n}\n";
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_pv1sj5FHB3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<code${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</code>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Z1o1fP6sOA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<em${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</em>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_pXmJvYwfdA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h1>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_MJ1RaHeA6t = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH2",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h2${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h2>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ot4mdUIoig = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH3",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h3${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h3>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_XYZhCTqXu1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "ProseH4",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<h4${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: $props.id }, _attrs))}>`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    href: `#${$props.id}`
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          __vite_ssr_import_2__.renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</h4>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_T58wg1w5Q5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h5${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h5>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_9EKUBJl8dt = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h6${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</h6>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_wP848x6tty = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<hr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_viw2MgNChh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "ProseImg",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    src: $props.src,
    alt: $props.alt,
    width: $props.width,
    height: $props.height
  }, _attrs))}>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue"]]);
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_TaTP0rM5SU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</li>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_eD2I0ZLHRn = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ol${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ol>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_HlH1eehhRS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<p${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</p>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ONhymfjMug = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<strong${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</strong>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_e8YKM3hjzJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<table${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</table>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_G5z6u1Xef9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tbody>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_E6nmfp7gDi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<td${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</td>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_cUXRrarorZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<th${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</th>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_CwxC0PLoyL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<thead${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</thead>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_uKba9IdvtR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<tr${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</tr>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs ($id_TPhTJ9Tswq)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_1mdcmlrJWy = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<ul${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</ul>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - vue ($id_VkOCJnUZrn)
// - defu ($id_q1WUEsFSUQ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_wRsEVKfW1P = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("defu");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta = __vite_ssr_import_0__.renderHeadToString(head);
      return {
        ...meta,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_19kbcSkZ7c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title ?? "");
  }
  return template(__vite_ssr_import_0__.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => ({
    element: createElement(tag.tag, tag.props, document),
    body: tag.props.body ?? false
  }));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(__vite_ssr_import_0__.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => __vite_ssr_import_0__.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(__vite_ssr_import_0__.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const head = injectHead();
  const headObj = __vite_ssr_import_0__.ref(obj);
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var addVNodeToHeadObj = (node, obj) => {
  const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
  if (typeof type !== "string" || !(type in obj))
    return;
  const props = __spreadProps(__spreadValues({}, node.props), {
    children: Array.isArray(node.children) ? node.children[0].children : node.children
  });
  if (Array.isArray(obj[type])) {
    ;
    obj[type].push(props);
  } else if (type === "title") {
    obj.title = props.children;
  } else {
    ;
    obj[type] = props;
  }
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children) {
        addVNodeToHeadObj(childNode, obj);
      }
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: defu
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_q6X4BWspBy = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("defu")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"defu\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/meta.config.mjs ($id_GGqw7xELYa)
// --------------------
const $id_H2XT9QW1LW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_PE2LM6mDyc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const NoScript = __vite_ssr_import_0__.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    const noscript = { ...props };
    const textContent = (slots.default?.() || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "NoScript", { enumerable: true, configurable: true, get(){ return NoScript }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_oMd9KJkENA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[],"link":[],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs ($id_bFAuAlcWkM)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/router.options.mjs ($id_6K60MGLnjS)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/middleware.mjs ($id_eTfvyfI318)
// --------------------
const $id_pvA4ZTFMpa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_3__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/router.options.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_4__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_4__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_6__.defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_5__.default);
  const baseURL = __vite_ssr_import_6__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_2__.createWebHistory(baseURL) : __vite_ssr_import_2__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_2__.createRouter({
    ...__vite_ssr_import_8__.default,
    history: routerHistory,
    routes: __vite_ssr_import_7__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_1__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = __vite_ssr_import_1__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = __vite_ssr_import_1__.computed(() => _route.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_1__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_6__.useError();
  try {
    if (true) {
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
    }
    ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.isReady())),await __temp,__restore());;
  } catch (error2) {
    __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_1__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_9__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_9__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_9__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_6__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_3__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [__vite_ssr_import_3__.createError({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_4__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
    }
  });
  return { provide: { router } };
},1);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_L9I1eoE7dW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps);
          return __vite_ssr_import_4__._wrapIf(
            __vite_ssr_import_0__.Transition,
            routeProps.route.meta.pageTransition ?? defaultPageTransition,
            __vite_ssr_import_2__.wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = __vite_ssr_import_0__.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = __vite_ssr_import_0__.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    __vite_ssr_import_0__.provide("_route", __vite_ssr_import_0__.reactive(route));
    return () => __vite_ssr_import_0__.h(props.routeProps.Component);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_ZR0LUqwyer = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_NgApSiB2xA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/CardDetails.vue?macro=true ($id_vwNDM53siQ)
// - /pages/[...slug].vue?macro=true ($id_6rgSTrbVi4)
// - /pages/CardDetails.vue ($id_r81jrzGIPE)
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// --------------------
const $id_gvZ4MLRexo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/CardDetails.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/[...slug].vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "CardDetails",
    path: "/CardDetails",
    file: "C:/Users/so/Desktop/CSIT-Elites-Res/pages/CardDetails.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/CardDetails.vue').then(m => m.default || m)
  },
  {
    name: "slug",
    path: "/:slug(.*)*",
    file: "C:/Users/so/Desktop/CSIT-Elites-Res/pages/[...slug].vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/[...slug].vue').then(m => m.default || m)
  }
];
}


// --------------------
// Request: /pages/CardDetails.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs ($id_bFAuAlcWkM)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_I3vcQ1f4s3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><div class="pb-16"><div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"><div class="mb-12 space-y-2 text-center"><h2 class="text-2xl text-cyan-900 font-bold md:text-4xl"> Blog Details </h2></div><div><div class="p-1 rounded-xl group sm:flex space-x-6 bg-gray-100 bg-opacity-50 shadow-md hover:rounded-2xl"><img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" class="h-56 h-full w-1/2 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"><div class="sm:w-7/12 pl-0 p-5"><div class="space-y-2"><div class="space-y-4"><h4 class="text-2xl font-semibold text-cyan-900"> Provident de illo eveniet commodi fuga fugiat laboriosam expedita. </h4><p class="text-gray-600"> Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... </p></div></div></div></div></div></div></div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/CardDetails.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/pages/CardDetails.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/[...slug].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs ($id_bFAuAlcWkM)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /components/content/Card.vue ($id_Z5fWObNQpy)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_e3W92RIygb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/content/Card.vue");

const _sfc_main = {}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = __vite_ssr_import_0__.default
  const _component_nuxt_link = __vite_ssr_import_1__.default
  const _component_Card = __vite_ssr_import_2__.default

  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ContentDoc, { class: "prose prose-gray max-w-none" }, {
    "not-found": __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1 class="text-2xl"${_scopeId}>Not Found</h1>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("h1", { class: "text-2xl" }, "Not Found")
        ]
      }
    }),
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="min-h-screen"${
          _scopeId
        }><main${
          _scopeId
        }><section class="lg:px-[15%] px-[5%] py-10"${
          _scopeId
        }><h1 class="lg:text-5xl text-2xl leading-normal font-semibold text-center"${
          _scopeId
        }> Check Out Our Latest Blog Posts </h1><h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"${
          _scopeId
        }> Learn, Share, Grow </h1></section></main>`)
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, { to: "/CardDetails" }, {
          default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Card, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_3__.createVNode(_component_Card)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("div", { class: "min-h-screen" }, [
            __vite_ssr_import_3__.createVNode("main", null, [
              __vite_ssr_import_3__.createVNode("section", { class: "lg:px-[15%] px-[5%] py-10" }, [
                __vite_ssr_import_3__.createVNode("h1", { class: "lg:text-5xl text-2xl leading-normal font-semibold text-center" }, " Check Out Our Latest Blog Posts "),
                __vite_ssr_import_3__.createVNode("h1", { class: "lg:text-6xl text-4xl text-center leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600" }, " Learn, Share, Grow ")
              ])
            ]),
            __vite_ssr_import_3__.createVNode(_component_nuxt_link, { to: "/CardDetails" }, {
              default: __vite_ssr_import_3__.withCtx(() => [
                __vite_ssr_import_3__.createVNode(_component_Card)
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</main>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[...slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/pages/[...slug].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/CardDetails.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs ($id_bFAuAlcWkM)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_gLFSZJufE0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><div class="pb-16"><div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"><div class="mb-12 space-y-2 text-center"><h2 class="text-2xl text-cyan-900 font-bold md:text-4xl"> Blog Details </h2></div><div><div class="p-1 rounded-xl group sm:flex space-x-6 bg-gray-100 bg-opacity-50 shadow-md hover:rounded-2xl"><img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" class="h-56 h-full w-1/2 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"><div class="sm:w-7/12 pl-0 p-5"><div class="space-y-2"><div class="space-y-4"><h4 class="text-2xl font-semibold text-cyan-900"> Provident de illo eveniet commodi fuga fugiat laboriosam expedita. </h4><p class="text-gray-600"> Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus... </p></div></div></div></div></div></div></div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/CardDetails.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/pages/CardDetails.vue"]]);
}


// --------------------
// Request: /pages/[...slug].vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs ($id_bFAuAlcWkM)
// Dependencies: 
// - /node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs ($id_Es5S87MAZt)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /components/content/Card.vue ($id_Z5fWObNQpy)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/[...slug].vue?vue&type=style&index=0&lang.css ($id_26hPAx4DHh)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_kfKLxctbf4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/content/Card.vue");

const _sfc_main = {}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = __vite_ssr_import_0__.default
  const _component_nuxt_link = __vite_ssr_import_1__.default
  const _component_Card = __vite_ssr_import_2__.default

  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_ContentDoc, { class: "prose prose-gray max-w-none" }, {
    "not-found": __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h1 class="text-2xl"${_scopeId}>Not Found</h1>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("h1", { class: "text-2xl" }, "Not Found")
        ]
      }
    }),
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="min-h-screen"${
          _scopeId
        }><main${
          _scopeId
        }><section class="lg:px-[15%] px-[5%] py-10"${
          _scopeId
        }><h1 class="lg:text-5xl text-2xl leading-normal font-semibold text-center"${
          _scopeId
        }> Check Out Our Latest Blog Posts </h1><h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"${
          _scopeId
        }> Learn, Share, Grow </h1></section></main>`)
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, { to: "/CardDetails" }, {
          default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Card, null, null, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_3__.createVNode(_component_Card)
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("div", { class: "min-h-screen" }, [
            __vite_ssr_import_3__.createVNode("main", null, [
              __vite_ssr_import_3__.createVNode("section", { class: "lg:px-[15%] px-[5%] py-10" }, [
                __vite_ssr_import_3__.createVNode("h1", { class: "lg:text-5xl text-2xl leading-normal font-semibold text-center" }, " Check Out Our Latest Blog Posts "),
                __vite_ssr_import_3__.createVNode("h1", { class: "lg:text-6xl text-4xl text-center leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600" }, " Learn, Share, Grow ")
              ])
            ]),
            __vite_ssr_import_3__.createVNode(_component_nuxt_link, { to: "/CardDetails" }, {
              default: __vite_ssr_import_3__.withCtx(() => [
                __vite_ssr_import_3__.createVNode(_component_Card)
              ]),
              _: 1 /* STABLE */
            })
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</main>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/[...slug].vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/[...slug].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/pages/[...slug].vue"]]);
}


// --------------------
// Request: /pages/[...slug].vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/[...slug].vue ($id_ArgNSXkUC7)
// Dependencies: 

// --------------------
const $id_E6VPMYwI82 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\nbody{\r\n  padding: 0;\r\n  margin: 0;\n}\r\n";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_lyitYY2eB2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_GW1EmtiGCo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/unocss.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /__uno.css ($id_cXTy3s1wTW)
// --------------------
const $id_0Pv5gMfGZP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/__uno.css");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {});
}


// --------------------
// Request: /__uno.css
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/unocss.mjs ($id_PfWW4GTdpQ)
// Dependencies: 

// --------------------
const $id_o5blNEixYO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*4c76d1*//* layer: preflights */*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::-webkit-backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: shortcuts */.container{max-width:100%;}@media (min-width: 640px){\n.container{max-width:640px;}\n}@media (min-width: 768px){\n.container{max-width:768px;}\n}@media (min-width: 1024px){\n.container{max-width:1024px;}\n}@media (min-width: 1280px){\n.container{max-width:1280px;}\n}@media (min-width: 1536px){\n.container{max-width:1536px;}\n}/* layer: default */.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}.pointer-events-none{pointer-events:none;}.absolute{position:absolute;}.fixed{position:fixed;}.relative{position:relative;}.inset-y-0{top:0rem;bottom:0rem;}.-bottom-1\\/2{bottom:-50%;}.left-0{left:0rem;}.right-0{right:0rem;}.z-10{z-index:10;}.z-20{z-index:20;}.grid{display:grid;}.grid-flow-row{grid-auto-flow:row;}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}.m-2{margin:0.5rem;}.m-9{margin:2.25rem;}.m-auto{margin:auto;}.mx-9{margin-left:2.25rem;margin-right:2.25rem;}.mx-auto{margin-left:auto;margin-right:auto;}.my-6{margin-top:1.5rem;margin-bottom:1.5rem;}.mb-12{margin-bottom:3rem;}.mb-16{margin-bottom:4rem;}.mb-4{margin-bottom:1rem;}.mb-6{margin-bottom:1.5rem;}.mb-8{margin-bottom:2rem;}.mr-1{margin-right:0.25rem;}.mr-2{margin-right:0.5rem;}.mr-3{margin-right:0.75rem;}.mr-4{margin-right:1rem;}.mt-1{margin-top:0.25rem;}.mt-3{margin-top:0.75rem;}.mt-4{margin-top:1rem;}.block{display:block;}.inline-block{display:inline-block;}.hidden{display:none;}.h-0\\.5{height:0.125rem;}.h-1\\/2{height:50%;}.h-20{height:5rem;}.h-4{height:1rem;}.h-44{height:11rem;}.h-5{height:1.25rem;}.h-56{height:14rem;}.h-6{height:1.5rem;}.h-8{height:2rem;}.h-9{height:2.25rem;}.h-96{height:24rem;}.h-auto{height:auto;}.h-full{height:100%;}.max-w-520px{max-width:520px;}.max-w-none{max-width:none;}.min-h-screen{min-height:100vh;}.w-\\[00\\%\\]{width:00%;}.w-\\[100\\%\\],\n.w-full{width:100%;}.w-\\[1000\\%\\]{width:1000%;}.w-\\[15\\%\\]{width:15%;}.w-\\[30\\%\\]{width:30%;}.w-\\[45\\%\\]{width:45%;}.w-\\[50\\%\\],\n.w-1\\/2{width:50%;}.w-\\[60\\%\\]{width:60%;}.w-\\[80\\%\\],\n.w-4\\/5{width:80%;}.w-\\[90\\%\\]{width:90%;}.w-\\[fit\\]{width:fit;}.w-2{width:0.5rem;}.w-2\\/3{width:66.6666666667%;}.w-4{width:1rem;}.w-48{width:12rem;}.w-5{width:1.25rem;}.w-6{width:1.5rem;}.w-77{width:19.25rem;}.w-88{width:22rem;}.w-96{width:24rem;}.w-fit{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.flex{display:flex;}.inline-flex{display:inline-flex;}.flex-1{flex:1 1 0%;}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.-translate-y-full{--un-translate-y:-100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.group:hover .group-hover\\:translate-y-full{--un-translate-y:100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.group:hover .group-hover\\:scale-100{--un-scale-x:1;--un-scale-y:1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.scale-0{--un-scale-x:0;--un-scale-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}.cursor-pointer{cursor:pointer;}.place-content-center{place-content:center;}.items-center{align-items:center;}.self-center{align-self:center;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.gap-2{grid-gap:0.5rem;gap:0.5rem;}.gap-4{grid-gap:1rem;gap:1rem;}.space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.5rem * var(--un-space-x-reverse));}.space-x-6>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(1.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(1.5rem * var(--un-space-x-reverse));}.space-x-7>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(1.75rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(1.75rem * var(--un-space-x-reverse));}.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}.space-y-4>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}.overflow-hidden{overflow:hidden;}.overflow-y-auto{overflow-y:auto;}.whitespace-nowrap{white-space:nowrap;}.border{border-width:1px;border-style:solid;}.border-gray-100{--un-border-opacity:1;border-color:rgba(243,244,246,var(--un-border-opacity));}.border-gray-200{--un-border-opacity:1;border-color:rgba(229,231,235,var(--un-border-opacity));}.border-gray-300{--un-border-opacity:1;border-color:rgba(209,213,219,var(--un-border-opacity));}.dark .dark\\:border-gray-700{--un-border-opacity:1;border-color:rgba(55,65,81,var(--un-border-opacity));}.focus\\:border-blue-500:focus{--un-border-opacity:1;border-color:rgba(59,130,246,var(--un-border-opacity));}.border-t-\\[12px\\]{border-top-color:12px;}.group:hover .group-hover\\:rounded-xl,\n.rounded-xl{border-radius:0.75rem;}.hover\\:rounded-2xl:hover{border-radius:1rem;}.rounded{border-radius:0.25rem;}.rounded-lg{border-radius:0.5rem;}.rounded-t-md{border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;}.bg-black\\/5{background-color:rgba(0,0,0,0.05);}.bg-blue-700{--un-bg-opacity:1;background-color:rgba(29,78,216,var(--un-bg-opacity));}.bg-gray-100,\n.hover\\:bg-gray-100:hover{--un-bg-opacity:1;background-color:rgba(243,244,246,var(--un-bg-opacity));}.bg-gray-50{--un-bg-opacity:1;background-color:rgba(249,250,251,var(--un-bg-opacity));}.bg-slate-200{--un-bg-opacity:1;background-color:rgba(226,232,240,var(--un-bg-opacity));}.bg-slate-300{--un-bg-opacity:1;background-color:rgba(203,213,225,var(--un-bg-opacity));}.bg-white{--un-bg-opacity:1;background-color:rgba(255,255,255,var(--un-bg-opacity));}.dark .dark\\:bg-black{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity));}.dark .dark\\:bg-gray-700,\n.dark .dark\\:hover\\:bg-gray-700:hover{--un-bg-opacity:1;background-color:rgba(55,65,81,var(--un-bg-opacity));}.dark .dark\\:bg-gray-800{--un-bg-opacity:1;background-color:rgba(31,41,55,var(--un-bg-opacity));}.dark .dark\\:bg-white\\/10{background-color:rgba(255,255,255,0.1);}.bg-opacity-50{--un-bg-opacity:0.5;}.from-purple-700{--un-gradient-from:rgba(126,34,206,var(--un-from-opacity, 1));--un-gradient-to:rgba(126,34,206,0);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}.to-pink-600{--un-gradient-to:rgba(219,39,119,var(--un-to-opacity, 1));}.bg-gradient-to-r{--un-gradient-shape:to right;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}.bg-clip-text{-webkit-background-clip:text;background-clip:text;}.object-cover{-o-object-fit:cover;object-fit:cover;}.object-top{-o-object-position:top;object-position:top;}.p-1{padding:0.25rem;}.p-2{padding:0.5rem;}.p-2\\.5{padding:0.625rem;}.p-4{padding:1rem;}.p-5{padding:1.25rem;}.p-8{padding:2rem;}.px-\\[5\\%\\]{padding-left:5%;padding-right:5%;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-10{padding-top:2.5rem;padding-bottom:2.5rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem;}.pb-16{padding-bottom:4rem;}.pl-0{padding-left:0rem;}.pl-10{padding-left:2.5rem;}.pl-3{padding-left:0.75rem;}.pr-4{padding-right:1rem;}.pt-0{padding-top:0rem;}.pt-10{padding-top:2.5rem;}.pt-14{padding-top:3.5rem;}.pt-20{padding-top:5rem;}.text-center{text-align:center;}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-5xl{font-size:3rem;line-height:1;}.text-6xl{font-size:3.75rem;line-height:1;}.text-8xl{font-size:6rem;line-height:1;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.font-bold{font-weight:700;}.font-light{font-weight:300;}.font-medium{font-weight:500;}.font-semibold{font-weight:600;}.leading-normal{line-height:1.5;}.leading-tight{line-height:1.25;}.tracking-tight{letter-spacing:-0.025em;}.dark .dark\\:text-gray-400{--un-text-opacity:1;color:rgba(156,163,175,var(--un-text-opacity));}.dark .dark\\:text-white,\n.text-white{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.text-black{--un-text-opacity:1;color:rgba(0,0,0,var(--un-text-opacity));}.text-cyan-900{--un-text-opacity:1;color:rgba(22,78,99,var(--un-text-opacity));}.text-gray-500{--un-text-opacity:1;color:rgba(107,114,128,var(--un-text-opacity));}.text-gray-600{--un-text-opacity:1;color:rgba(75,85,99,var(--un-text-opacity));}.text-gray-700{--un-text-opacity:1;color:rgba(55,65,81,var(--un-text-opacity));}.text-gray-900{--un-text-opacity:1;color:rgba(17,24,39,var(--un-text-opacity));}.text-transparent{color:transparent;}.hover\\:underline:hover,\n.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline;}.underline-offset-0{text-underline-offset:0px;}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale;}.hover\\:shadow-md:hover,\n.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.hover\\:shadow-xl:hover{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0,0,0,0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}.focus\\:ring-2:focus{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.focus\\:ring-4:focus{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}.dark .dark\\:focus\\:ring-gray-600:focus{--un-ring-opacity:1;--un-ring-color:rgba(75,85,99,var(--un-ring-opacity));}.focus\\:ring-blue-500:focus{--un-ring-opacity:1;--un-ring-color:rgba(59,130,246,var(--un-ring-opacity));}.focus\\:ring-gray-200:focus{--un-ring-opacity:1;--un-ring-color:rgba(229,231,235,var(--un-ring-opacity));}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-200{transition-duration:200ms;}.duration-500{transition-duration:500ms;}.delay-100{transition-delay:100ms;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}@media (min-width: 640px){\n.sm\\:mx-auto{margin-left:auto;margin-right:auto;}\n.sm\\:mb-0{margin-bottom:0rem;}\n.sm\\:h-12{height:3rem;}\n.sm\\:h-9{height:2.25rem;}\n.sm\\:w-7\\/12{width:58.3333333333%;}\n.sm\\:flex{display:flex;}\n.sm\\:items-center{align-items:center;}\n.sm\\:justify-between{justify-content:space-between;}\n.sm\\:px-0{padding-left:0rem;padding-right:0rem;}\n.sm\\:px-4{padding-left:1rem;padding-right:1rem;}\n.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}\n.sm\\:py-3{padding-top:0.75rem;padding-bottom:0.75rem;}\n.sm\\:text-center{text-align:center;}\n.sm\\:text-2xl{font-size:1.5rem;line-height:2rem;}\n.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}\n.sm\\:text-8xl{font-size:6rem;line-height:1;}\n.sm\\:text-sm{font-size:0.875rem;line-height:1.25rem;}\n.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem;}\n}@media (min-width: 768px){\n.md\\:order-1{order:1;}\n.md\\:order-2{order:2;}\n.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}\n.md\\:mr-6{margin-right:1.5rem;}\n.md\\:mt-0{margin-top:0rem;}\n.md\\:block{display:block;}\n.md\\:hidden{display:none;}\n.md\\:w-auto{width:auto;}\n.md\\:flex{display:flex;}\n.md\\:flex-row{flex-direction:row;}\n.md\\:space-x-8>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(2rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(2rem * var(--un-space-x-reverse));}\n.md\\:border-0{border-width:0px;border-style:solid;}\n.dark .md\\:dark\\:bg-gray-900{--un-bg-opacity:1;background-color:rgba(17,24,39,var(--un-bg-opacity));}\n.md\\:bg-transparent{background-color:transparent;}\n.md\\:bg-white{--un-bg-opacity:1;background-color:rgba(255,255,255,var(--un-bg-opacity));}\n.md\\:p-0{padding:0rem;}\n.md\\:px-12{padding-left:3rem;padding-right:3rem;}\n.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}\n.md\\:py-8{padding-top:2rem;padding-bottom:2rem;}\n.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}\n.md\\:text-sm{font-size:0.875rem;line-height:1.25rem;}\n.md\\:font-medium{font-weight:500;}\n.md\\:text-blue-700{--un-text-opacity:1;color:rgba(29,78,216,var(--un-text-opacity));}\n}@media (min-width: 1024px){\n.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}\n.lg\\:px-\\[15\\%\\]{padding-left:15%;padding-right:15%;}\n.lg\\:px-\\[5\\%\\]{padding-left:5%;padding-right:5%;}\n.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem;}\n.lg\\:px-3{padding-left:0.75rem;padding-right:0.75rem;}\n.lg\\:px-5{padding-left:1.25rem;padding-right:1.25rem;}\n.lg\\:px-7{padding-left:1.75rem;padding-right:1.75rem;}\n.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}\n.lg\\:text-5xl{font-size:3rem;line-height:1;}\n.lg\\:text-6xl{font-size:3.75rem;line-height:1;}\n}@media (min-width: 1280px){\n.xl\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}\n}@media (min-width: 1536px){\n.\\32 xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr));}\n}";
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs ($id_6SULwzY16K)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs ($id_V1hUoqIiza)
// --------------------
const $id_zT36nO9yVz = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {
  const publicConfig = __vite_ssr_import_0__.useRuntimeConfig().public;
  if (false && publicConfig.content.wsUrl) {
    __vite_ssr_dynamic_import__('/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs').then(({ useContentWebSocket }) => useContentWebSocket());
  }
});
;
}


// --------------------
// Request: /node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs
// Parents: 
// - /node_modules/@nuxt/content/dist/runtime/plugin.mjs ($id_pBMtBh4E5b)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_uKnmBzSyr1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const logger = {
  log: (...args) => console.log("[Content]", ...args),
  warn: (...args) => console.warn("[Content]", ...args)
};
let ws;
function useContentWebSocket() {
  if (!window.WebSocket) {
    logger.warn("Could not enable hot reload, your browser does not support WebSocket.");
    return;
  }
  const onMessage = (message) => {
    try {
      const data = JSON.parse(message.data);
      if (!data) {
        return;
      }
      __vite_ssr_import_0__.refreshNuxtData();
    } catch (err) {
    }
  };
  const onOpen = () => logger.log("WS connected!");
  const onError = (e) => {
    switch (e.code) {
      case "ECONNREFUSED":
        connect(true);
        break;
      default:
        logger.warn("WS Error:", e);
        break;
    }
  };
  const onClose = (e) => {
    if (e.code === 1e3 || e.code === 1005) {
      logger.log("WS closed!");
    } else {
      connect(true);
    }
  };
  const connect = (retry = false) => {
    if (retry) {
      logger.log("WS reconnecting..");
      setTimeout(connect, 1e3);
      return;
    }
    if (ws) {
      try {
        ws.close();
      } catch (err) {
      }
      ws = void 0;
    }
    const wsURL = `${__vite_ssr_import_1__.useRuntimeConfig().public.content.wsUrl}ws`;
    logger.log(`WS connect to ${wsURL}`);
    ws = new WebSocket(wsURL);
    ws.onopen = onOpen;
    ws.onmessage = onMessage;
    ws.onerror = onError;
    ws.onclose = onClose;
  };
  connect();
  return {
    connect
  };
}
Object.defineProperty(__vite_ssr_exports__, "useContentWebSocket", { enumerable: true, configurable: true, get(){ return useContentWebSocket }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/root-component.mjs
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_FfTuBe57oB = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/root-component.mjs ($id_0ABbzzsqvq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/error-component.mjs ($id_ykJVJitqSy)
// --------------------
const $id_4ZsVaBduZ9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const ErrorComponent = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/error-component.mjs'))

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// Inject default route (outside of pages) as active route
__vite_ssr_import_0__.provide('_route', __vite_ssr_import_1__.useRoute())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true || (__vite_ssr_import_1__.isNuxtError(err) && (err.fatal || err.unhandled))) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.showError, [err])
  }
})

const __returned__ = { ErrorComponent, nuxtApp, onResolve, results, error, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, provide: __vite_ssr_import_0__.provide, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, isNuxtError: __vite_ssr_import_1__.isNuxtError, showError: __vite_ssr_import_1__.showError, useError: __vite_ssr_import_1__.useError, useRoute: __vite_ssr_import_1__.useRoute, useNuxtApp: __vite_ssr_import_1__.useNuxtApp }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_2__.resolveComponent("App")

  __vite_ssr_import_3__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_fv6v6zcbNY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/error-component.mjs ($id_ykJVJitqSy)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// --------------------
const $id_Pk6jEidiBp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
        line.includes('internal') ||
        line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = Number(error.statusCode || 500)
const is404 = statusCode === 404

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

// TODO: Investigate side-effect issue with imports
const _Error404 = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue'))
const _Error = true
  ? __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue'))
  : __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue'))

const ErrorTemplate = is404 ? _Error404 : _Error

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_2__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_1__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css ($id_UH106zs9IT)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_dM8TRdSyyb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 404
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-bc8852ab><div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab></div><div class="max-w-520px text-center z-20" data-v-bc8852ab><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-bc8852ab>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-bc8852ab"],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_jIbUn0IkCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-bc8852ab]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-bc8852ab]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-bc8852ab]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-bc8852ab]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-bc8852ab]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-bc8852ab]:hover::before{background-position:-50% 0;opacity:1}.bg-white[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-bc8852ab]{cursor:pointer}.flex[data-v-bc8852ab]{display:flex}.grid[data-v-bc8852ab]{display:grid}.place-content-center[data-v-bc8852ab]{place-content:center}.items-center[data-v-bc8852ab]{align-items:center}.justify-center[data-v-bc8852ab]{justify-content:center}.font-sans[data-v-bc8852ab]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-bc8852ab]{font-weight:500}.font-light[data-v-bc8852ab]{font-weight:300}.text-8xl[data-v-bc8852ab]{font-size:6rem;line-height:1}.text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-bc8852ab]{line-height:1.25}.mb-8[data-v-bc8852ab]{margin-bottom:2rem}.mb-16[data-v-bc8852ab]{margin-bottom:4rem}.max-w-520px[data-v-bc8852ab]{max-width:520px}.min-h-screen[data-v-bc8852ab]{min-height:100vh}.overflow-hidden[data-v-bc8852ab]{overflow:hidden}.px-8[data-v-bc8852ab]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bc8852ab]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-bc8852ab]{padding-left:1rem;padding-right:1rem}.fixed[data-v-bc8852ab]{position:fixed}.left-0[data-v-bc8852ab]{left:0px}.right-0[data-v-bc8852ab]{right:0px}.text-center[data-v-bc8852ab]{text-align:center}.text-black[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-bc8852ab]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-bc8852ab]{width:100%}.z-10[data-v-bc8852ab]{z-index:10}.z-20[data-v-bc8852ab]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-bc8852ab]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-bc8852ab]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-bc8852ab]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-bc8852ab]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-bc8852ab]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css ($id_qcoFgmhGJ5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_5DSemgg5wF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-6b2d7187><div class="fixed left-0 right-0 spotlight" data-v-6b2d7187></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-6b2d7187><pre class="text-xl font-light leading-tight z-10 p-8" data-v-6b2d7187>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6b2d7187"],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_zU3KktJDTV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-6b2d7187]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}.bg-white[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-6b2d7187]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-6b2d7187]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-6b2d7187]{display:flex}.flex-col[data-v-6b2d7187]{flex-direction:column}.flex-1[data-v-6b2d7187]{flex:1 1 0%}.font-sans[data-v-6b2d7187]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-6b2d7187]{font-weight:500}.font-light[data-v-6b2d7187]{font-weight:300}.h-auto[data-v-6b2d7187]{height:auto}.text-xl[data-v-6b2d7187]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-6b2d7187]{font-size:3.75rem;line-height:1}.leading-tight[data-v-6b2d7187]{line-height:1.25}.mb-8[data-v-6b2d7187]{margin-bottom:2rem}.mb-6[data-v-6b2d7187]{margin-bottom:1.5rem}.min-h-screen[data-v-6b2d7187]{min-height:100vh}.overflow-y-auto[data-v-6b2d7187]{overflow-y:auto}.p-8[data-v-6b2d7187]{padding:2rem}.px-10[data-v-6b2d7187]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-6b2d7187]{padding-top:3.5rem}.fixed[data-v-6b2d7187]{position:fixed}.left-0[data-v-6b2d7187]{left:0px}.right-0[data-v-6b2d7187]{right:0px}.text-black[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-6b2d7187]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-6b2d7187]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-6b2d7187]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-6b2d7187]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-6b2d7187]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css ($id_anXr5LNAH3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_kkILmks1BE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-f37408fc><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-f37408fc></div><div class="max-w-520px text-center" data-v-f37408fc><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f37408fc"],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aNL2Q0cdkg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-f37408fc]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}.bg-white[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-f37408fc]{display:grid}.place-content-center[data-v-f37408fc]{place-content:center}.font-sans[data-v-f37408fc]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-f37408fc]{font-weight:500}.font-light[data-v-f37408fc]{font-weight:300}.h-1\\/2[data-v-f37408fc]{height:50%}.text-8xl[data-v-f37408fc]{font-size:6rem;line-height:1}.text-xl[data-v-f37408fc]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f37408fc]{line-height:1.25}.mb-8[data-v-f37408fc]{margin-bottom:2rem}.mb-16[data-v-f37408fc]{margin-bottom:4rem}.max-w-520px[data-v-f37408fc]{max-width:520px}.min-h-screen[data-v-f37408fc]{min-height:100vh}.overflow-hidden[data-v-f37408fc]{overflow:hidden}.px-8[data-v-f37408fc]{padding-left:2rem;padding-right:2rem}.fixed[data-v-f37408fc]{position:fixed}.left-0[data-v-f37408fc]{left:0px}.right-0[data-v-f37408fc]{right:0px}.-bottom-1\\/2[data-v-f37408fc]{bottom:-50%}.text-center[data-v-f37408fc]{text-align:center}.text-black[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f37408fc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-f37408fc]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-f37408fc]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f37408fc]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/app-component.mjs
// Parents: 
// - C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry ($id_KcSYkUOwMo)
// Dependencies: 
// - /app.vue ($id_K0boQqLzfo)
// --------------------
const $id_kkI5MEuP4R = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/app-component.mjs ($id_kmmt0hSw2o)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Wap3nJxvie = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, { name: "main" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/layouts.mjs ($id_ImNbJ0HsgI)
// --------------------
const $id_6blmtYI8bT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(
        __vite_ssr_import_0__.Transition,
        hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition),
        __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /layouts/main.vue ($id_Iyy1A44MrL)
// --------------------
const $id_gyPR8g6oLU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = {
  main: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/main.vue'))
};
}


// --------------------
// Request: /layouts/main.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/layouts.mjs ($id_ImNbJ0HsgI)
// Dependencies: 
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/Footer.vue ($id_89jzJWR97X)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_baFKcJ0aNj = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Header.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Footer.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __vite_ssr_import_0__.default
  const _component_Footer = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Header, null, null, _parent))
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Footer, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/main.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/layouts/main.vue"]]);
}


// --------------------
// Request: /components/Header.vue
// Parents: 
// - /layouts/main.vue ($id_Iyy1A44MrL)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /iconify/vue ($id_WBxWUEaGsg)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /assets/CoreTeamLogo.png ($id_ZUm1S39uqs)
// - /components/Header.vue?vue&type=style&index=0&scoped=a81738bd&lang.css ($id_B1pL7w8jIL)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_y9NhtuKV4y = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/iconify/vue");


const _sfc_main = {
  __name: 'Header',
  setup(__props, { expose }) {
  expose();

const links = [
    {
        name: "Blog",
        // icon: "carbon:blog",
        link: "/",
    },
    {
        name: "About",
        // icon: "ion:shirt-outline",
        link: "/about",
    },
];

const __returned__ = { links, Icon: __vite_ssr_import_1__.Icon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/CoreTeamLogo.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<header${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "flex items-center bg-gray-50 justify-between h-20 lg:px-10" }, _attrs))
  } data-v-a81738bd><a class="flex items-center" data-v-a81738bd><img${
    __vite_ssr_import_3__.ssrRenderAttr("src", __vite_ssr_import_4__.default)
  } class="mr-2 h-9 sm:h-12" alt="CSIT Logo" data-v-a81738bd><span class="font-bold text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600" data-v-a81738bd>CSIT</span></a><nav class="flex items-center space-x-7 text-gray-600" data-v-a81738bd><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.links, (n, i) => {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
      to: n.link,
      class: "inline-block text-2xl underline-offset-0 nav-link hover:text-primary group"
    }, {
      default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<div class="flex items-center space-x-2" data-v-a81738bd${_scopeId}>`)
          _push(__vite_ssr_import_3__.ssrRenderComponent($setup["Icon"], {
            icon: n.icon,
            class: "w-4 h-4"
          }, null, _parent, _scopeId))
          _push(`<span class="font-xl" data-v-a81738bd${
            _scopeId
          }>${
            __vite_ssr_import_3__.ssrInterpolate(n.name)
          }</span></div>`)
        } else {
          return [
            __vite_ssr_import_2__.createVNode("div", { class: "flex items-center space-x-2" }, [
              __vite_ssr_import_2__.createVNode($setup["Icon"], {
                icon: n.icon,
                class: "w-4 h-4"
              }, null, 8 /* PROPS */, ["icon"]),
              __vite_ssr_import_2__.createVNode("span", { class: "font-xl" }, __vite_ssr_import_2__.toDisplayString(n.name), 1 /* TEXT */)
            ])
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></nav></header>`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/Header.vue?vue&type=style&index=0&scoped=a81738bd&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Header.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-a81738bd"],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/components/Header.vue"]]);
}


// --------------------
// Request: /iconify/vue
// Parents: 
// - /components/Header.vue ($id_TihPwxfEDt)
// Dependencies: 

// --------------------
const $id_ZR1xnGh5pa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /assets/CoreTeamLogo.png
// Parents: 
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/Footer.vue ($id_89jzJWR97X)
// Dependencies: 

// --------------------
const $id_C8mrNashPK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/CoreTeamLogo.png";
}


// --------------------
// Request: /components/Header.vue?vue&type=style&index=0&scoped=a81738bd&lang.css
// Parents: 
// - /components/Header.vue ($id_TihPwxfEDt)
// Dependencies: 

// --------------------
const $id_6vW6w3CULL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.nav-link.router-link-active.router-link-exact-active[data-v-a81738bd] {\n@apply text-primary;\n}\r\n";
}


// --------------------
// Request: /components/Footer.vue
// Parents: 
// - /layouts/main.vue ($id_Iyy1A44MrL)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /assets/CoreTeamLogo.png ($id_ZUm1S39uqs)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_F5WzJ5awFG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/CoreTeamLogo.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<footer${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "p-4 bg-gray-100 rounded-lg shadow md:px-6 md:py-8" }, _attrs))
  }><div class="sm:flex sm:items-center sm:justify-between"><a class="flex items-center mb-4 sm:mb-0"><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_3__.default)
  } class="mr-3 h-8" alt="Flowbite Logo"><span class="self-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">CSIT Elite</span></a><ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0"><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "mr-4 hover:underline md:mr-6"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` About `)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" About ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/PrivacyPolicy",
    class: "mr-4 hover:underline md:mr-6"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Privacy Policy `)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" Privacy Policy ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/licensing",
    class: "mr-4 hover:underline md:mr-6"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Licensing `)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" Licensing ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "mr-4 hover:underline md:mr-6"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Contact `)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" Contact ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div><hr class="my-6 border-gray-200 sm:mx-auto"><span class="block text-sm text-gray-500 sm:text-center">© 2022 CSIT . All Rights Reserved. </span></footer>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/so/Desktop/CSIT-Elites-Res/components/Footer.vue"]]);
}


const __modules__ = {
  "C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry": $id_iu8c7ixsfj,
  vue: $id_G33erDMZ5a,
  "@vue/runtime-dom": $id_9sriful2d8,
  ohmyfetch: $id_kLE5W6MKaY,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/paths.mjs": $id_QZxhdoiEkr,
  ufo: $id_KJr7LehhrL,
  "/node_modules/nuxt/dist/app/index.mjs": $id_fgrt3UeQEL,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_lfCjBrgcte,
  hookable: $id_p6x8naIYgL,
  unctx: $id_Zn9H5zfDIh,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_YvAaozTraC,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_XTtQ30wmO3,
  "vue-router": $id_7dT9jx0uwT,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_BHNdDlA1Pk,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_6bgT8vIFHQ,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_oMJXouc9nw,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_kP3GBeDzaR,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_0OCs51rfoK,
  h3: $id_K2PnHEPz0m,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_zYOrYjkwm9,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_XUZhFBVStH,
  "cookie-es": $id_t3HHRMhh7L,
  destr: $id_ZK3lg3ye5b,
  ohash: $id_ApQSwD9AXx,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_BjnOCDcfIZ,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_72OrpZA28S,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_HRAmKRepZ0,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_aAoWaPsGgE,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_DBzckdbLOm,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_TG3cDPMBp5,
  "@vue/shared": $id_NOAOzpHkPB,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/css.mjs": $id_13HUCS7aoX,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/plugins/server.mjs": $id_feH524qNhT,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_1SAEi7QN5N,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/components.plugin.mjs": $id_7M9T3cCK34,
  "/components/content/Card.vue": $id_kyyr9LhriN,
  "vue/server-renderer": $id_aRHphPzMpI,
  "/@id/__x00__plugin-vue:export-helper": $id_mHD6riC5ol,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.mjs": $id_nT6Inxvpqi,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.mjs": $id_ANaNAYS9zv,
  "/node_modules/@nuxt/content/dist/runtime/components/MarkdownRenderer.mjs": $id_PwPmFmFEXu,
  scule: $id_nceR4N0Wse,
  "property-information": $id_wOcR8czerj,
  "html-tags": $id_SVkyhmLJbc,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.mjs": $id_YSQZ3uopzW,
  "/node_modules/@nuxt/content/dist/runtime/composables/query.mjs": $id_UwQeZxtacZ,
  "/node_modules/@nuxt/content/dist/runtime/query/query.mjs": $id_QlwK2Pd5oQ,
  "/node_modules/@nuxt/content/dist/runtime/query/match/utils.mjs": $id_ssGfaWHnpH,
  "/node_modules/@nuxt/content/dist/runtime/utils/json.mjs": $id_MMdR8JHWfE,
  "/node_modules/@nuxt/content/dist/runtime/composables/utils.mjs": $id_UTAnqhJATM,
  "/node_modules/@nuxt/content/dist/runtime/markdown-parser/utils/node.mjs": $id_sk32bdNNel,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentList.mjs": $id_YPe0RrmvT7,
  "/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.mjs": $id_icH2n3HfdA,
  "/node_modules/@nuxt/content/dist/runtime/composables/navigation.mjs": $id_pBxlKSmEUV,
  "/node_modules/@nuxt/content/dist/runtime/components/Markdown.mjs": $id_4xzeNQ7V9x,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseA.vue": $id_bJGgp70oyJ,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseBlockquote.vue": $id_hzZGfuchXD,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue": $id_3DkaTD1QZ7,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue?vue&type=style&index=0&lang.css": $id_egeRZdg2Jz,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue": $id_pv1sj5FHB3,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseEm.vue": $id_Z1o1fP6sOA,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue": $id_pXmJvYwfdA,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue": $id_MJ1RaHeA6t,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH3.vue": $id_ot4mdUIoig,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH4.vue": $id_XYZhCTqXu1,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH5.vue": $id_T58wg1w5Q5,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH6.vue": $id_9EKUBJl8dt,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseHr.vue": $id_wP848x6tty,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue": $id_viw2MgNChh,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseLi.vue": $id_TaTP0rM5SU,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseOl.vue": $id_eD2I0ZLHRn,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseP.vue": $id_HlH1eehhRS,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseStrong.vue": $id_ONhymfjMug,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTable.vue": $id_e8YKM3hjzJ,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTbody.vue": $id_G5z6u1Xef9,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTd.vue": $id_E6nmfp7gDi,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTh.vue": $id_cUXRrarorZ,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseThead.vue": $id_CwxC0PLoyL,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseTr.vue": $id_uKba9IdvtR,
  "/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseUl.vue": $id_1mdcmlrJWy,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_wRsEVKfW1P,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_19kbcSkZ7c,
  defu: $id_q6X4BWspBy,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_H2XT9QW1LW,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_PE2LM6mDyc,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/meta.config.mjs": $id_oMd9KJkENA,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_pvA4ZTFMpa,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_L9I1eoE7dW,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_ZR0LUqwyer,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_NgApSiB2xA,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/routes.mjs": $id_gvZ4MLRexo,
  "/pages/CardDetails.vue?macro=true": $id_I3vcQ1f4s3,
  "/pages/[...slug].vue?macro=true": $id_e3W92RIygb,
  "/pages/CardDetails.vue": $id_gLFSZJufE0,
  "/pages/[...slug].vue": $id_kfKLxctbf4,
  "/pages/[...slug].vue?vue&type=style&index=0&lang.css": $id_E6VPMYwI82,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/router.options.mjs": $id_lyitYY2eB2,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/middleware.mjs": $id_GW1EmtiGCo,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/unocss.mjs": $id_0Pv5gMfGZP,
  "/__uno.css": $id_o5blNEixYO,
  "/node_modules/@nuxt/content/dist/runtime/plugin.mjs": $id_zT36nO9yVz,
  "/node_modules/@nuxt/content/dist/runtime/composables/web-socket.mjs": $id_uKnmBzSyr1,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/root-component.mjs": $id_FfTuBe57oB,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_4ZsVaBduZ9,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/error-component.mjs": $id_fv6v6zcbNY,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_Pk6jEidiBp,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_dM8TRdSyyb,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css": $id_jIbUn0IkCP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_5DSemgg5wF,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css": $id_zU3KktJDTV,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_kkILmks1BE,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css": $id_aNL2Q0cdkg,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/app-component.mjs": $id_kkI5MEuP4R,
  "/app.vue": $id_Wap3nJxvie,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_6blmtYI8bT,
  "/@id/virtual:nuxt:C:/Users/so/Desktop/CSIT-Elites-Res/.nuxt/layouts.mjs": $id_gyPR8g6oLU,
  "/layouts/main.vue": $id_baFKcJ0aNj,
  "/components/Header.vue": $id_y9NhtuKV4y,
  "/iconify/vue": $id_ZR1xnGh5pa,
  "/assets/CoreTeamLogo.png": $id_C8mrNashPK,
  "/components/Header.vue?vue&type=style&index=0&scoped=a81738bd&lang.css": $id_6vW6w3CULL,
  "/components/Footer.vue": $id_F5WzJ5awFG
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/Users/so/Desktop/CSIT-Elites-Res/node_modules/nuxt/dist/app/entry")