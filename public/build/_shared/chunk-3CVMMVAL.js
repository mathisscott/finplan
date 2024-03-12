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

// app/components/buttons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/buttons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/buttons.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function ActionBar({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col md:flex-row gap-3 px-3 items-center justify-center", children }, void 0, false, {
    fileName: "app/components/buttons.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = ActionBar;
function Button({
  isPrimary = false,
  className,
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled, className: clsx("w-full md:w-min whitespace-nowrap", isPrimary ? "bg-primary dark:bg-darkPrimary" : "bg-secondary dark:bg-darkSecondary", disabled && "opacity-50", isPrimary && !disabled && "hover:bg-primaryAccent dark:hover:bg-darkPrimaryAccent", "text-xl font-bold py-2 px-4 rounded", !isPrimary && !disabled && "hover:bg-secondaryAccent dark:hover:bg-darkSecondaryAccent", className), ...props, children }, void 0, false, {
    fileName: "app/components/buttons.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c2 = Button;
var _c;
var _c2;
$RefreshReg$(_c, "ActionBar");
$RefreshReg$(_c2, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ActionBar,
  Button
};
//# sourceMappingURL=/build/_shared/chunk-3CVMMVAL.js.map
