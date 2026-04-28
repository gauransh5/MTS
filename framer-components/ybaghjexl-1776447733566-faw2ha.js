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
// http-url:https://framerusercontent.com/modules/bniZcNhtKAI6rA0fxW6J/THELkXLAWyb8Gu18q5jW/YBaghjExl.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ _jsx("svg", { ...props, ref, children: props.children });
});
var MotionSVG = motion.create(Base);
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(MotionSVG, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx("svg", { ...rest, ref, children });
});
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 0 12.5" fill="transparent" height="12.5px" id="InYKHyHwf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(12 5.75)" width="1px"/><path d="M 12.5 0 L 0 0" fill="transparent" height="1px" id="pfQxqOaIQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(5.75 12)" width="12.5px"/></svg>';
var getProps = ({ dots, height, id, stroke, width, width1, ...props }) => {
  return { ...props, BKVe8Pgvw: dots ?? props.BKVe8Pgvw ?? 1, fICyAUQY1: stroke ?? props.fICyAUQY1 ?? "rgb(0, 0, 0)", lKf_CQTz5: width1 ?? props.lKf_CQTz5 ?? 1.5 };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, fICyAUQY1, lKf_CQTz5, BKVe8Pgvw, ...restProps } = getProps(props);
  const href = useSVGTemplate("3450492020", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-yowRG", className), layoutId, ref, role: "presentation", style: { "--1335ju": lKf_CQTz5, "--18mrqx2": fICyAUQY1, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-yowRG { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-yowRG");
Icon.displayName = "Plus";
var YBaghjExl_default = Icon;
addPropertyControls(Icon, { fICyAUQY1: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Stroke", type: ControlType.Color }, lKf_CQTz5: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 4, min: 0, step: 0.5, title: "Width", type: ControlType.Number }, BKVe8Pgvw: { defaultValue: 1, displayStepper: true, hidden: true, max: 4, min: 1, title: "Dots", type: ControlType.Number } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Icon", "slots": [], "annotations": { "framerSupportedLayoutHeight": "any-prefer-fixed", "framerContractVersion": "1", "framerSupportedLayoutWidth": "any-prefer-fixed", "framerImmutableVariables": "true", "framerIntrinsicWidth": "24", "framerVector": '{"name":"Plus","color":{"type":"variable","value":"18mrqx2"},"set":{"localId":"vectorSet/SuYHhKUZG","id":"SuYHhKUZG","moduleId":"EqX8thWQjdZcOB1c6p5N"}}', "framerDisableUnlink": "true", "framerIntrinsicHeight": "24", "framerVariables": '{"fICyAUQY1":"stroke","lKf_CQTz5":"width1","BKVe8Pgvw":"dots"}' } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  YBaghjExl_default as default
};
