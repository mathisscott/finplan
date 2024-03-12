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

// app/components/containers.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/containers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/containers.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Container({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: clsx("w-full bg-backgroundPrimary dark:bg-darkBackgroundPrimary shadow dark:shadow-black overflow-hidden sm:rounded-lg", className), ...props, children }, void 0, false, {
    fileName: "app/components/containers.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Container;
function Card({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: clsx("lg:max-w-xl p-10 m-auto flex flex-col items-center justify-center gap-5", className), ...props, children }, void 0, false, {
    fileName: "app/components/containers.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = Card;
var _c;
var _c2;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Container,
  Card
};
//# sourceMappingURL=/build/_shared/chunk-BWD2J6OT.js.map
