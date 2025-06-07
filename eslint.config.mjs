import antfu from "@antfu/eslint-config"
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
    antfu({
        vue: true,
        // Or customize the stylistic rules
        stylistic: {
            indent: 4, // 4, or 'tab'
            quotes: "double", // or 'double'
        },
    }),
)
