
import vue from "rollup-plugin-vue";
export default {
    input: `src/index.js`,
    output: {
        format: 'es',
        dir: `dist`,
        namespaceToStringTag: true,
        // mock vite ssr inlineDynamicImports
        inlineDynamicImports: true,
    },
    plugins: [
        vue({
        }),
    ],
}
