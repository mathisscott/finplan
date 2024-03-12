import {
  clsx
} from "/build/_shared/chunk-S557J23I.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JCCYN7HA.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/headings.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/headings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/headings.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function H1({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: clsx("text-5xl md:text-7xl font-bold", className), ...props, children: props.children }, void 0, false, {
    fileName: "app/components/headings.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = H1;
function H2({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: clsx("text-4xl md:text-6xl font-bold", className), ...props, children: props.children }, void 0, false, {
    fileName: "app/components/headings.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c2 = H2;
function H3({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: clsx("text-3xl md:text-5xl font-bold", className), ...props, children: props.children }, void 0, false, {
    fileName: "app/components/headings.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c3 = H3;
function H4({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: clsx("text-2xl md:text-4xl font-bold", className), ...props, children: props.children }, void 0, false, {
    fileName: "app/components/headings.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_c4 = H4;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "H1");
$RefreshReg$(_c2, "H2");
$RefreshReg$(_c3, "H3");
$RefreshReg$(_c4, "H4");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  H1,
  H2,
  H3,
  H4
};
//# sourceMappingURL=/build/_shared/chunk-BSVE76VU.js.map
