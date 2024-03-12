import {
  clsx_m_default
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

// app/components/texts.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/texts.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/texts.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Paragraph({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className, ...props, children }, void 0, false, {
    fileName: "app/components/texts.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Paragraph;
function InlineError({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: clsx_m_default("text-red-600 font-bold", className), ...props, children }, void 0, false, {
    fileName: "app/components/texts.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = InlineError;
var _c;
var _c2;
$RefreshReg$(_c, "Paragraph");
$RefreshReg$(_c2, "InlineError");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Paragraph,
  InlineError
};
//# sourceMappingURL=/build/_shared/chunk-EMZVHNTL.js.map
