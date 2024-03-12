import {
  ButtonLink
} from "/build/_shared/chunk-FJ5FYGKV.js";
import {
  H1
} from "/build/_shared/chunk-BSVE76VU.js";
import {
  clsx
} from "/build/_shared/chunk-S557J23I.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigation,
  useRouteError
} from "/build/_shared/chunk-M65O7C4K.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JCCYN7HA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:./modules/session/session.server
var require_session = __commonJS({
  "empty-module:./modules/session/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/progress.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/progress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/progress.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function PageTransitionProgressBar() {
  _s();
  const ref = (0, import_react2.useRef)(null);
  const [hasAnimationCompleted, setHasAnimationCompleted] = (0, import_react2.useState)(true);
  const navigation = useNavigation();
  const isTransitioning = navigation.state !== "idle";
  (0, import_react2.useEffect)(() => {
    if (!isTransitioning) {
      return;
    }
    async function awaitAnimationCompletion() {
      if (!ref.current)
        return;
      const runningAnimations = ref.current.getAnimations();
      const animationPromises = runningAnimations.map((animation) => animation.finished);
      await Promise.allSettled(animationPromises);
      setHasAnimationCompleted(true);
    }
    setHasAnimationCompleted(false);
    awaitAnimationCompletion();
  }, [isTransitioning]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "progressbar", "aria-hidden": !isTransitioning, "aria-valuetext": isTransitioning ? "Loading" : void 0, className: "fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: clsx("h-full bg-gradient-to-r from-primary to-primaryAccent dark:from-darkPrimary dark:to-darkPrimaryAccent transition-all duration-500 ease-in-out", navigation.state === "idle" && hasAnimationCompleted && "w-0 opacity-0 transition-none", navigation.state === "submitting" && "w-4/12", navigation.state === "loading" && "w-10/12", navigation.state === "idle" && !hasAnimationCompleted && "w-full") }, void 0, false, {
    fileName: "app/components/progress.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/progress.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(PageTransitionProgressBar, "mNID4jmWTcZNoLXwTHlpwVOHuFE=", false, function() {
  return [useNavigation];
});
_c = PageTransitionProgressBar;
var _c;
$RefreshReg$(_c, "PageTransitionProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_session = __toESM(require_session(), 1);

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XQIGTAR3.css";

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var meta = () => {
  return [{
    title: "Financial Planner"
  }, {
    name: "description",
    content: "Be in control of your finances with the Financial Planner - the buzzworthy expense and income tracker with a modern interface. Keep your finances organized!"
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
}];
function Document({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "bg-background dark:bg-darkBackground text-lg text-text dark:text-darkText", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PageTransitionProgressBar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c2 = Document;
function Component() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_c22 = Component;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  let heading = "Unexpected Error";
  let message = "We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists.";
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 401:
        heading = "401 Unauthorized";
        message = "Oops! Looks like you tried to visit a page that you do not have access to.";
        break;
      case 404:
        heading = "404 Not Found";
        message = "Oops! Looks like you tried to visit a page that does not exist.";
        break;
    }
  }
  const errorMessage = error instanceof Error ? error.message : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "m-5 lg:m-20 flex flex-col gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(H1, { children: heading }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: message }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "Error message: ",
      errorMessage
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 105,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ButtonLink, { to: "/", isPrimary: true, children: "Back to homepage" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c3 = ErrorBoundary;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "Document");
$RefreshReg$(_c22, "Component");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Component as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-L75QVQLF.js.map
