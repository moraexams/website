import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B1JCyYgC.mjs';
import { manifest } from './manifest_EvWZpI3R.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/maintenance.astro.mjs');
const _page3 = () => import('./pages/og/_---route_.astro.mjs');
const _page4 = () => import('./pages/_lang_/checkstudent.astro.mjs');
const _page5 = () => import('./pages/_lang_/exampapers.astro.mjs');
const _page6 = () => import('./pages/_lang_/index-number.astro.mjs');
const _page7 = () => import('./pages/_lang_/instructions.astro.mjs');
const _page8 = () => import('./pages/_lang_/leadership-timeline.astro.mjs');
const _page9 = () => import('./pages/_lang_/past-papers.astro.mjs');
const _page10 = () => import('./pages/_lang_/practicepapers.astro.mjs');
const _page11 = () => import('./pages/_lang_/register.astro.mjs');
const _page12 = () => import('./pages/_lang_/results.astro.mjs');
const _page13 = () => import('./pages/_lang_/schemes.astro.mjs');
const _page14 = () => import('./pages/_lang_/submitted_details.astro.mjs');
const _page15 = () => import('./pages/_lang_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/maintenance.astro", _page2],
    ["src/pages/og/[...route].ts", _page3],
    ["src/pages/[lang]/checkstudent.astro", _page4],
    ["src/pages/[lang]/exampapers.astro", _page5],
    ["src/pages/[lang]/index-number.astro", _page6],
    ["src/pages/[lang]/instructions.astro", _page7],
    ["src/pages/[lang]/leadership-timeline.astro", _page8],
    ["src/pages/[lang]/past-papers.astro", _page9],
    ["src/pages/[lang]/practicepapers.astro", _page10],
    ["src/pages/[lang]/register.astro", _page11],
    ["src/pages/[lang]/results.astro", _page12],
    ["src/pages/[lang]/schemes.astro", _page13],
    ["src/pages/[lang]/submitted_details.astro", _page14],
    ["src/pages/[lang]/index.astro", _page15]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "888c78e7-83e6-4b46-a263-e4b7cfb5fa3e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
