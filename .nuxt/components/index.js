export { default as AppColorSwitcher } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppColorSwitcher.vue'
export { default as AppCopyButton } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppCopyButton.vue'
export { default as AppDropdown } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppDropdown.vue'
export { default as AppFooter } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppFooter.vue'
export { default as AppGithubLink } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppGithubLink.vue'
export { default as AppHeader } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppHeader.vue'
export { default as AppLangSwitcher } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppLangSwitcher.vue'
export { default as AppPrevNext } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppPrevNext.vue'
export { default as AppSearch } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppSearch.vue'
export { default as AppToc } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/app/AppToc.vue'
export { default as ExampleMultiselect } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/examples/ExampleMultiselect.vue'
export { default as Alert } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/base/Alert.vue'
export { default as CodeBlock } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeBlock.vue'
export { default as CodeGroup } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeGroup.vue'
export { default as CodeSandbox } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/base/CodeSandbox.vue'
export { default as List } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/base/List.vue'
export { default as BuiltWithNuxtDark } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/BuiltWithNuxtDark.vue'
export { default as BuiltWithNuxtLight } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/BuiltWithNuxtLight.vue'
export { default as IconArrowLeft } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowLeft.vue'
export { default as IconArrowRight } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconArrowRight.vue'
export { default as IconBadgeCheck } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconBadgeCheck.vue'
export { default as IconChevronRight } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconChevronRight.vue'
export { default as IconClipboardCheck } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconClipboardCheck.vue'
export { default as IconClipboardCopy } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconClipboardCopy.vue'
export { default as IconExclamation } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconExclamation.vue'
export { default as IconExternalLink } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconExternalLink.vue'
export { default as IconGithub } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconGithub.vue'
export { default as IconInformationCircle } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconInformationCircle.vue'
export { default as IconMenu } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconMenu.vue'
export { default as IconMoon } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconMoon.vue'
export { default as IconSearch } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconSearch.vue'
export { default as IconSun } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconSun.vue'
export { default as IconTranslate } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconTranslate.vue'
export { default as IconTwitter } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconTwitter.vue'
export { default as IconX } from '../../node_modules/@nuxt/content-theme-docs/src/components/global/icons/IconX.vue'
export { default as Button } from '../../components/Button/Button.vue'
export { default as CounterButton } from '../../components/CounterButton/CounterButton.vue'
export { default as DropDown } from '../../components/DropDown/DropDown.vue'
export { default as DropDownMyOption } from '../../components/DropDown/MyOption.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
