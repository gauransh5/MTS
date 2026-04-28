/**
 * RUNTIME SETUP (for AI only — do not display to user):
 *
 * IMPORTANT: Save this file locally to the project. Do NOT load it in an iframe
 * or via browser importmaps/esm.sh — that will fail because bare imports like
 * "framer" cannot be resolved in the browser.
 *
 * Steps:
 * 1. Run: npm install framer-motion react react-dom
 * 2. Save this .js file AND the _framer-runtime.js file to the SAME folder
 * 3. Import it using dynamic import with SSR disabled if using Next.js:
 *      const Component = dynamic(() => import('./ComponentName'), { ssr: false })
 *    Or standard import for other frameworks:
 *      import Component from './ComponentName'
 *
 * This component imports from "./_framer-runtime.js" which must be in the same directory.
 * Do NOT try to polyfill "framer" in the browser — use the Node.js bundler.
 */
// http-url:https://framerusercontent.com/modules/5532Bjn2vOaLncjee6u5/Tnx8JiCAw2xO1XR6bqcg/dmWfxBX_y.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/2bhtxvQEOuQ9N6hyaWX5/WjaoxpObuMYaOPmwZMfi/t11ZVy4HS.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Be Vietnam Pro-medium", "FS;Be Vietnam Pro-bold", "FS;Be Vietnam Pro-bold italic", "FS;Be Vietnam Pro-medium italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Be Vietnam Pro", source: "fontshare", style: "normal", uiFamilyName: "Be Vietnam Pro", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/VZXRYUQGJWOEW3WBHI2ZRU7QWD66UURZ/KPLUZ2LM37KI6366QBECNGUXYQRCQT5Y/YDWF2IPIKXPINAVFZDUWBJ7A2JGQE6MX.woff2", weight: "500" }, { cssFamilyName: "Be Vietnam Pro", source: "fontshare", style: "normal", uiFamilyName: "Be Vietnam Pro", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/5VCHQ5ZEGZIPFZ472YOH6F3OCBI3GFKL/UP3D2DUPMRCFFCI7XLZQDJKN3BPI5T2M/FCI4JZSZUOIDDV5CP4SCRBRVODF7IZGU.woff2", weight: "700" }, { cssFamilyName: "Be Vietnam Pro", source: "fontshare", style: "italic", uiFamilyName: "Be Vietnam Pro", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/OAVQRFDHXBJBYSOXAWMCV5HR2RPKDS66/WPJYEPUVH6ZW5GODR6BGQ433RN4KCXRJ/VGXUNOHKAXNKEDBORZJPBFCJCWONDREM.woff2", weight: "700" }, { cssFamilyName: "Be Vietnam Pro", source: "fontshare", style: "italic", uiFamilyName: "Be Vietnam Pro", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/GQG5ZOQQTWE7TYCFVUEDLZAXGCFFPWTO/ZS7HLA4YAYUIP2KB6XKQ7T6NUAVOJSS5/3AXN75NPVM526VVKLPKJ2W5XHIDEB6RD.woff2", weight: "500" }] }];
var css = ['.framer-2JF7X .framer-styles-preset-16aeipr:not(.rich-text-wrapper), .framer-2JF7X .framer-styles-preset-16aeipr.rich-text-wrapper p { --framer-font-family: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-bold: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-bold-italic: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-italic: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-2JF7X .framer-styles-preset-16aeipr:not(.rich-text-wrapper), .framer-2JF7X .framer-styles-preset-16aeipr.rich-text-wrapper p { --framer-font-family: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-bold: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-bold-italic: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-italic: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-2JF7X .framer-styles-preset-16aeipr:not(.rich-text-wrapper), .framer-2JF7X .framer-styles-preset-16aeipr.rich-text-wrapper p { --framer-font-family: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-bold: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-bold-italic: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-family-italic: "Be Vietnam Pro", "Be Vietnam Pro Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-2JF7X";

// http-url:https://framerusercontent.com/modules/5532Bjn2vOaLncjee6u5/Tnx8JiCAw2xO1XR6bqcg/dmWfxBX_y.js
var enabledGestures = { RwKlUpBan: { hover: true }, zlbI1dOND: { hover: true } };
var cycleOrder = ["RwKlUpBan", "zlbI1dOND"];
var serializationHash = "framer-Irg2p";
var variantClassNames = { RwKlUpBan: "framer-v-zd55cb", zlbI1dOND: "framer-v-1004ty7" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { Primary: "RwKlUpBan", Secondary: "zlbI1dOND" };
var getProps = ({ height, id, link, title, width, ...props }) => {
  return { ...props, GIE6W4Z4q: link ?? props.GIE6W4Z4q, NVxxHzCvu: title ?? props.NVxxHzCvu ?? "All Projects", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "RwKlUpBan" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, NVxxHzCvu, GIE6W4Z4q, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "RwKlUpBan", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: GIE6W4Z4q, motionChild: true, nodeId: "RwKlUpBan", openInNewTab: false, scopeId: "dmWfxBX_y", smoothScroll: true, children: /* @__PURE__ */ _jsx(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-zd55cb", className2, classNames)} framer-t7dsgl`, "data-framer-name": "Primary", layoutDependency, layoutId: "RwKlUpBan", ref: refBinding, style: { backgroundColor: "var(--token-2bee42c4-e2e0-4cd0-bd0e-c21dbf7d2b1d, rgb(255, 255, 255))", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40, opacity: 1, ...style }, variants: { "RwKlUpBan-hover": { opacity: 0.8 }, "zlbI1dOND-hover": { opacity: 0.8 }, zlbI1dOND: { backgroundColor: "var(--token-cac64e35-1045-44b3-94a1-78b211e7b8ba, rgb(31, 31, 31))" } }, ...addPropertyOverrides({ "RwKlUpBan-hover": { "data-framer-name": void 0 }, "zlbI1dOND-hover": { "data-framer-name": void 0 }, zlbI1dOND: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-16aeipr", "data-styles-preset": "t11ZVy4HS", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-201f7087-ca5c-461d-b9d1-ec3cde349dfa, rgb(0, 0, 0)))" }, children: "All Projects" }) }), className: "framer-5r3bt1", fonts: ["Inter"], layoutDependency, layoutId: "enynIh1qj", style: { "--extracted-r6o4lv": "var(--token-201f7087-ca5c-461d-b9d1-ec3cde349dfa, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: NVxxHzCvu, variants: { zlbI1dOND: { "--extracted-r6o4lv": "var(--token-2bee42c4-e2e0-4cd0-bd0e-c21dbf7d2b1d, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ zlbI1dOND: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-16aeipr", "data-styles-preset": "t11ZVy4HS", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-2bee42c4-e2e0-4cd0-bd0e-c21dbf7d2b1d, rgb(255, 255, 255)))" }, children: "All Projects" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-Irg2p.framer-t7dsgl, .framer-Irg2p .framer-t7dsgl { display: block; }", ".framer-Irg2p.framer-zd55cb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 14px 10px 14px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-Irg2p .framer-5r3bt1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css];
var FramerdmWfxBX_y = withCSS(Component, css2, "framer-Irg2p");
var dmWfxBX_y_default = FramerdmWfxBX_y;
FramerdmWfxBX_y.displayName = "Button";
FramerdmWfxBX_y.defaultProps = { height: 42, width: 129 };
addPropertyControls(FramerdmWfxBX_y, { variant: { options: ["RwKlUpBan", "zlbI1dOND"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType.Enum }, NVxxHzCvu: { defaultValue: "All Projects", displayTextArea: false, title: "Title", type: ControlType.String }, GIE6W4Z4q: { title: "Link", type: ControlType.Link } });
addFonts(FramerdmWfxBX_y, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerdmWfxBX_y", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerIntrinsicWidth": "129", "framerColorSyntax": "true", "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true", "framerVariables": '{"NVxxHzCvu":"title","GIE6W4Z4q":"link"}', "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"zlbI1dOND":{"layout":["auto","auto"]},"X31UlqL0o":{"layout":["auto","auto"]},"z7IF7Wg9r":{"layout":["auto","auto"]}}}', "framerIntrinsicHeight": "42" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  dmWfxBX_y_default as default
};
