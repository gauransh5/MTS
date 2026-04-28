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
// http-url:https://framerusercontent.com/modules/vq793dzftjpFBOYftPIg/fV14IADXfCLhuO0ZeiTl/GkYCdDzws.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType5, cx, getFonts, getLoadingLazyAtYPosition, getPropertyControls, Image, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/7qT0r3So12155VV5Jq5x/Video.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType as ControlType4, useIsInCurrentNavigationTarget as useIsInCurrentNavigationTarget2, RenderTarget as RenderTarget3 } from "./_framer-runtime.js";
import { isMotionValue as isMotionValue2, useInView } from "framer-motion";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "./_framer-runtime.js";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black"
    ],
    hidden: ({ font }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "./_framer-runtime.js";
import { useEffect } from "react";
function useOnEnter(onEnter, enabled) {
  return useOnSpecificTargetChange(true, onEnter, enabled);
}
function useOnExit(onExit, enabled) {
  return useOnSpecificTargetChange(false, onExit, enabled);
}
function useOnSpecificTargetChange(goal, callback, enabled = true) {
  const isInTarget = useIsInCurrentNavigationTarget();
  useEffect(() => {
    if (enabled && isInTarget === goal)
      callback();
  }, [
    isInTarget
  ]);
}

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";
var isBrowserSafari = () => {
  if (typeof navigator !== `undefined`) {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari = (userAgent.indexOf("safari") > -1 || userAgent.indexOf("framermobile") > -1 || userAgent.indexOf("framerx") > -1) && userAgent.indexOf("chrome") < 0;
    return isSafari;
  } else
    return false;
};
var useIsBrowserSafari = () => useMemo(
  () => isBrowserSafari(),
  []
);

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "./_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "./_framer-runtime.js";
function useRenderTarget() {
  const currentRenderTarget = useMemo2(
    () => RenderTarget2.current(),
    []
  );
  return currentRenderTarget;
}
function useIsOnCanvas() {
  const onCanvas = useMemo2(
    () => RenderTarget2.current() === RenderTarget2.canvas,
    []
  );
  return onCanvas;
}

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "./_framer-runtime.js";
function useRadius(props) {
  const { borderRadius, isMixedBorderRadius, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = props;
  const radiusValue = useMemo3(
    () => isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`,
    [
      borderRadius,
      isMixedBorderRadius,
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius
    ]
  );
  return radiusValue;
}
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: [
      "Radius",
      "Radius per corner"
    ],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius"
    ],
    valueLabels: [
      "TL",
      "TR",
      "BR",
      "BL"
    ],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: [
      "Padding",
      "Padding per side"
    ],
    valueKeys: [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ],
    valueLabels: [
      "T",
      "R",
      "B",
      "L"
    ],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/7qT0r3So12155VV5Jq5x/Video.js
import { memo, useCallback as useCallback2, useEffect as useEffect7, useMemo as useMemo4, useRef as useRef3, useState as useState3 } from "react";
var ObjectFitType;
(function(ObjectFitType2) {
  ObjectFitType2["Fill"] = "fill";
  ObjectFitType2["Contain"] = "contain";
  ObjectFitType2["Cover"] = "cover";
  ObjectFitType2["None"] = "none";
  ObjectFitType2["ScaleDown"] = "scale-down";
})(ObjectFitType || (ObjectFitType = {}));
var SrcType;
(function(SrcType2) {
  SrcType2["Video"] = "Upload";
  SrcType2["Url"] = "URL";
})(SrcType || (SrcType = {}));
var defaultVideo = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";
function getProps(props) {
  const { width, height, topLeft, topRight, bottomRight, bottomLeft, id, children, ...rest } = props;
  return rest;
}
function Video(props) {
  const newProps = getProps(props);
  return /* @__PURE__ */ _jsx(VideoMemo, { ...newProps });
}
function usePlaybackControls(videoRef) {
  const isInCurrentNavigationTarget = useIsInCurrentNavigationTarget2();
  const requestingPlay = useRef3(false);
  const isPlayingRef = useRef3(false);
  const setProgress = useCallback2((rawProgress) => {
    if (!videoRef.current)
      return;
    const newProgress = (rawProgress === 1 ? 0.999 : rawProgress) * videoRef.current.duration;
    const isAlreadySet = Math.abs(videoRef.current.currentTime - newProgress) < 0.1;
    if (videoRef.current.duration > 0 && !isAlreadySet) {
      videoRef.current.currentTime = newProgress;
    }
  }, []);
  const play = useCallback2(() => {
    const video = videoRef.current;
    if (!video)
      return;
    video.preload = "auto";
    const isPlaying = video.currentTime > 0 && video.onplaying && !video.paused && !video.ended && video.readyState >= video.HAVE_CURRENT_DATA;
    if (!isPlaying && video && !requestingPlay.current && isInCurrentNavigationTarget) {
      requestingPlay.current = true;
      isPlayingRef.current = true;
      video.play().catch((e) => {
      }).finally(() => requestingPlay.current = false);
    }
  }, []);
  const pause = useCallback2(() => {
    if (!videoRef.current || requestingPlay.current)
      return;
    videoRef.current.pause();
    isPlayingRef.current = false;
  }, []);
  return { play, pause, setProgress, isPlaying: isPlayingRef };
}
function useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls }) {
  const [initialPlayingProp] = useState3(() => playingProp);
  const [hasPlayingPropChanged, setHasPlayingPropChanged] = useState3(false);
  if (playingProp !== initialPlayingProp && !hasPlayingPropChanged) {
    setHasPlayingPropChanged(true);
  }
  const behavesAsGif = (
    // passing `playing === true` on mount indicates that the video should
    // autoplay, like a GIF
    initialPlayingProp && muted && loop && playsinline && !controls && // Some users of the <Video> component use it by wrapping it with
    // another smart component and adding their own controls on top. (The
    // controls use transitions to control the video: e.g., when clicking
    // the play button, the smart component will transition to a state with
    // <Video playing={true} />.) In this case, we don't want the video to
    // behave as a gif, as it will be weird if the video suddenly started
    // acting as such (and auto-pausing when leaving the viewport) as soon
    // as the site visitor mutes it and clicks “Play”.
    !hasPlayingPropChanged
  );
  let autoplay;
  if (behavesAsGif)
    autoplay = "on-viewport";
  else if (initialPlayingProp)
    autoplay = "on-mount";
  else
    autoplay = "no-autoplay";
  return autoplay;
}
var VideoMemo = /* @__PURE__ */ memo(function VideoInner(props) {
  const {
    // default props
    srcType = "URL",
    srcUrl,
    srcFile = "",
    posterEnabled = false,
    controls = false,
    playing = true,
    loop = true,
    muted = true,
    playsinline = true,
    restartOnEnter = false,
    objectFit = "cover",
    backgroundColor = "rgba(0,0,0,0)",
    radius = 0,
    volume = 25,
    startTime: startTimeProp = 0,
    poster,
    playing: playingProp,
    progress,
    onSeeked,
    onPause,
    onPlay,
    onEnd,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp
  } = props;
  const videoRef = useRef3();
  const isSafari = useIsBrowserSafari();
  const wasPausedOnLeave = useRef3(null);
  const wasEndedOnLeave = useRef3(null);
  const isOnCanvas = useIsOnCanvas();
  const renderTarget = useRenderTarget();
  const isStaticRenderer = isOnCanvas || renderTarget === RenderTarget3.export;
  const borderRadius = useRadius(props);
  const autoplayBehavior = isStaticRenderer ? "no-autoplay" : useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls });
  const isInViewport = isStaticRenderer ? true : useInView(videoRef);
  const isCloseToViewport = isStaticRenderer ? false : useInView(videoRef, { margin: "10%", once: true });
  const startTime = startTimeProp === 100 ? 99.9 : startTimeProp;
  const { play, pause, setProgress, isPlaying } = usePlaybackControls(videoRef);
  useEffect7(() => {
    if (isStaticRenderer)
      return;
    if (autoplayBehavior === "on-viewport")
      return;
    if (playingProp)
      play();
    else
      pause();
  }, [autoplayBehavior, playingProp]);
  useEffect7(() => {
    if (isStaticRenderer)
      return;
    if (isInViewport && playingProp && autoplayBehavior !== "no-autoplay")
      play();
    if (autoplayBehavior !== "on-viewport")
      return;
    pause();
  }, [autoplayBehavior, isInViewport, playingProp]);
  useEffect7(() => {
    if (!isOnCanvas || poster || posterEnabled || startTime || !videoRef.current)
      return;
    videoRef.current.currentTime = 0.01;
  }, [posterEnabled, poster, startTime]);
  const isMountedAndReadyForProgressChanges = useRef3(false);
  useEffect7(() => {
    if (!isMountedAndReadyForProgressChanges.current) {
      isMountedAndReadyForProgressChanges.current = true;
      return;
    }
    const rawProgressValue = isMotionValue2(progress) ? progress.get() : (progress ?? 0) * 0.01;
    setProgress(
      // When the progress value exists (e.g. <Video startTime={10}
      // progress={50} />), we respect the `progress` value over
      // `startTime`, even if `startTime` changes. That’s because
      // `startTime` == start == changing it shouldn’t affect the current
      // progress
      (rawProgressValue ?? 0) || // Then why fall back to `startTime` when `progress` doesn’t exist,
      // you might ask? Now, that’s for
      // - canvas UX: we want the video progress to change when the user
      //   is scrobbling the “Start Time” in component settings.
      // - backwards compatibility: maybe some users *are* scrobbling
      //   using `startTime` instead of `progress`? We don’t know, and it
      //   always supported it, so let’s not break it
      (startTime ?? 0) / 100
    );
  }, [startTime, srcFile, srcUrl, progress]);
  useEffect7(() => {
    if (!isMotionValue2(progress))
      return;
    return progress.on("change", (value) => setProgress(value));
  }, [progress]);
  useOnEnter(() => {
    if (wasPausedOnLeave.current === null)
      return;
    if (videoRef.current) {
      if (!wasEndedOnLeave && loop || !wasPausedOnLeave.current)
        play();
    }
  });
  useOnExit(() => {
    if (videoRef.current) {
      wasEndedOnLeave.current = videoRef.current.ended;
      wasPausedOnLeave.current = videoRef.current.paused;
      pause();
    }
  });
  const src = useMemo4(() => {
    let fragment = "";
    if (srcType === "URL")
      return srcUrl + fragment;
    if (srcType === "Upload")
      return srcFile + fragment;
  }, [srcType, srcFile, srcUrl, startTime]);
  useEffect7(() => {
    if (isSafari && videoRef.current && autoplayBehavior === "on-mount") {
      setTimeout(() => play(), 50);
    }
  }, []);
  useEffect7(() => {
    if (videoRef.current && !muted)
      videoRef.current.volume = (volume ?? 0) / 100;
  }, [volume]);
  const handleReady = () => {
    const video = videoRef.current;
    if (!video)
      return;
    if (video.currentTime < 0.3 && startTime > 0)
      setProgress((startTime ?? 0) * 0.01);
    if (
      // when the component updates (e.g. only srcFile/url changes), and the video was already playing, keep playing
      isPlaying.current || autoplayBehavior === "on-mount" || playingProp && autoplayBehavior === "on-viewport" && isInViewport
    )
      play();
  };
  return /* @__PURE__ */ _jsx("video", { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, src, loop, ref: videoRef, onSeeked: (e) => onSeeked?.(e), onPause: (e) => onPause?.(e), onPlay: (e) => onPlay?.(e), onEnded: (e) => onEnd?.(e), autoPlay: isPlaying.current || autoplayBehavior === "on-mount" || playingProp && autoplayBehavior === "on-viewport" && isInViewport, preload: isPlaying.current ? "auto" : isStaticRenderer && !poster ? "metadata" : autoplayBehavior !== "on-mount" && !isCloseToViewport ? "none" : (
    // `autoplay` overrides this too
    "metadata"
  ), poster: posterEnabled && !srcFile && srcUrl === defaultVideo ? "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg" : posterEnabled && poster ? poster : void 0, onLoadedData: handleReady, controls, muted: isStaticRenderer ? true : muted, playsInline: playsinline, style: { cursor: !!onClick ? "pointer" : "auto", width: "100%", height: "100%", borderRadius, display: "block", objectFit, backgroundColor, objectPosition: "50% 50%" } });
});
Video.displayName = "Video";
function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function titleCase(value) {
  const groups = value.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
  return groups.map(capitalizeFirstLetter).join(" ");
}
var objectFitOptions = ["cover", "fill", "contain", "scale-down", "none"];
addPropertyControls(Video, {
  srcType: { type: ControlType4.Enum, displaySegmentedControl: true, title: "Source", options: ["URL", "Upload"] },
  srcUrl: { type: ControlType4.String, title: "URL", defaultValue: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", hidden(props) {
    return props.srcType === "Upload";
  } },
  srcFile: { type: ControlType4.File, title: "File", allowedFileTypes: ["mp4", "webm"], hidden(props) {
    return props.srcType === "URL";
  } },
  playing: { type: ControlType4.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No" },
  ...borderRadiusControl,
  posterEnabled: { type: ControlType4.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No" },
  poster: { type: ControlType4.Image, title: "Image", hidden: ({ posterEnabled }) => !posterEnabled, description: "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/)." },
  backgroundColor: { type: ControlType4.Color, title: "Background", defaultValue: "rgba(0,0,0,0)" },
  startTime: { title: "Start Time", type: ControlType4.Number, min: 0, max: 100, step: 0.1, unit: "%" },
  loop: { type: ControlType4.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No" },
  objectFit: { type: ControlType4.Enum, title: "Fit", options: objectFitOptions, optionTitles: objectFitOptions.map(titleCase) },
  // restartOnEnter: {
  //     type: ControlType.Boolean,
  //     title: "On ReEnter",
  //     enabledTitle: "Restart",
  //     disabledTitle: "Resume",
  // },
  controls: { type: ControlType4.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false },
  muted: { type: ControlType4.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No" },
  volume: { type: ControlType4.Number, max: 100, min: 0, unit: "%", hidden: ({ muted }) => muted, defaultValue: 25 },
  onEnd: { type: ControlType4.EventHandler },
  onSeeked: { type: ControlType4.EventHandler },
  onPause: { type: ControlType4.EventHandler },
  onPlay: { type: ControlType4.EventHandler },
  ...defaultEvents
});

// http-url:https://framerusercontent.com/modules/vq793dzftjpFBOYftPIg/fV14IADXfCLhuO0ZeiTl/GkYCdDzws.js
var VideoFonts = getFonts(Video);
var SmartComponentScopedContainerWithFX = withFX(SmartComponentScopedContainer);
var ImageWithFX = withFX(Image);
var VideoControls = getPropertyControls(Video);
var cycleOrder = ["AcjnIQykq", "TtR9lqvHt"];
var serializationHash = "framer-adP6y";
var variantClassNames = { AcjnIQykq: "framer-v-1nvdk5y", TtR9lqvHt: "framer-v-x8ywog" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React3.Fragment);
var humanReadableVariantMap = { "Picture-Format": "AcjnIQykq", "Video-Format": "TtR9lqvHt" };
var getProps2 = ({ height, id, image, video, width, ...props }) => {
  return { ...props, krAyYIhFx: image ?? props.krAyYIhFx, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "AcjnIQykq", W4gQZoznw: video ?? props.W4gQZoznw };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, W4gQZoznw, krAyYIhFx, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "AcjnIQykq", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "TtR9lqvHt")
      return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "TtR9lqvHt")
      return false;
    return true;
  };
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.section, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1nvdk5y", className, classNames), "data-framer-name": "Picture-Format", layoutDependency, layoutId: "AcjnIQykq", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ TtR9lqvHt: { "data-framer-name": "Video-Format" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainerWithFX, { __framer__spring: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stiffness: 350, type: "spring" }, __framer__styleTransformEffectEnabled: true, __framer__transformTargets: [{ target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.4, skewX: 0, skewY: 0, x: 0, y: 0 } }, { target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 } }], __framer__transformTrigger: "onInView", __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-rik85p-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "tfCXlBmey-container", nodeId: "tfCXlBmey", rendersWithMotion: true, scopeId: "GkYCdDzws", children: /* @__PURE__ */ _jsx2(Video, { backgroundColor: "var(--token-6526e09c-20fa-4272-b299-46ca661edbe5, rgb(0, 0, 0))", borderRadius: 0, bottomLeftRadius: 0, bottomRightRadius: 0, controls: false, height: "100%", id: "tfCXlBmey", isMixedBorderRadius: false, layoutId: "tfCXlBmey", loop: true, muted: true, objectFit: "cover", playing: true, posterEnabled: true, srcFile: W4gQZoznw, srcType: "Upload", srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", startTime: 0, style: { height: "100%", width: "100%" }, topLeftRadius: 0, topRightRadius: 0, volume: 25, width: "100%" }) }) }), isDisplayed1() && /* @__PURE__ */ _jsx2(ImageWithFX, { __framer__spring: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stiffness: 350, type: "spring" }, __framer__styleTransformEffectEnabled: true, __framer__transformTargets: [{ target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.4, skewX: 0, skewY: 0, x: 0, y: 0 } }, { target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 } }], __framer__transformTrigger: "onInView", __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 800) - 0 - (Math.max(0, ((componentViewport?.height || 800) - 0 - 0) / 1) * 1 + 0)) / 2 + 0 + 0)), pixelHeight: 2e3, pixelWidth: 3200, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(krAyYIhFx) }, className: "framer-oc7hnd", "data-framer-name": "Image", layoutDependency, layoutId: "jogX1uegW" })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-adP6y.framer-65hugk, .framer-adP6y .framer-65hugk { display: block; }", ".framer-adP6y.framer-1nvdk5y { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 800px; justify-content: center; min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: hidden; padding: 0px; position: relative; width: 1200px; }", ".framer-adP6y .framer-rik85p-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }", ".framer-adP6y .framer-oc7hnd { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }", ".framer-adP6y.framer-v-x8ywog.framer-1nvdk5y { min-height: unset; }"];
var FramerGkYCdDzws = withCSS(Component, css, "framer-adP6y");
var GkYCdDzws_default = FramerGkYCdDzws;
FramerGkYCdDzws.displayName = "Hero Banner";
FramerGkYCdDzws.defaultProps = { height: 800, width: 1200 };
addPropertyControls2(FramerGkYCdDzws, { variant: { options: ["AcjnIQykq", "TtR9lqvHt"], optionTitles: ["Picture-Format", "Video-Format"], title: "Variant", type: ControlType5.Enum }, W4gQZoznw: VideoControls?.["srcFile"] && { ...VideoControls["srcFile"], __defaultAssetReference: "", description: "Best to upload MP4", hidden: void 0, title: "Video" }, krAyYIhFx: { title: "Image", type: ControlType5.ResponsiveImage } });
addFonts(FramerGkYCdDzws, [{ explicitInter: true, fonts: [] }, ...VideoFonts], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerGkYCdDzws", "slots": [], "annotations": { "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"],"constraints":[null,null,"100vh",null]},"TtR9lqvHt":{"layout":["fixed","fixed"]}}}', "framerColorSyntax": "true", "framerImmutableVariables": "true", "framerDisplayContentsDiv": "false", "framerVariables": '{"W4gQZoznw":"video","krAyYIhFx":"image"}', "framerComponentViewportWidth": "true", "framerIntrinsicHeight": "800", "framerContractVersion": "1", "framerAutoSizeImages": "true", "framerIntrinsicWidth": "1200" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  GkYCdDzws_default as default
};
