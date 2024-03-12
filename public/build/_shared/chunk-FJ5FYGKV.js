import {
  clsx
} from "/build/_shared/chunk-S557J23I.js";
import {
  Link,
  NavLink,
  useFetcher
} from "/build/_shared/chunk-M65O7C4K.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JCCYN7HA.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/links.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/links.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/links.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Link2({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: clsx("font-bold underline decoration-4 underline-offset-2 decoration-primary dark:decoration-darkPrimary hover:decoration-primaryAccent hover:dark:decoration-darkPrimaryAccent", className), ...props, children }, void 0, false, {
    fileName: "app/components/links.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Link2;
function NavLink2({
  className,
  children,
  styleAsActive = false,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
    isActive
  }) => clsx("font-bold p-2 text-lg lg:text-2xl", styleAsActive || isActive ? "bg-primary dark:bg-darkPrimary" : "border border-secondary dark:border-darkSecondary hover:bg-primaryAccent dark:hover:bg-darkPrimaryAccent", className), ...props, children }, void 0, false, {
    fileName: "app/components/links.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c2 = NavLink2;
function ButtonLink({
  isPrimary,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: clsx("block w-full md:w-min whitespace-nowrap text-center", isPrimary ? "bg-primary dark:bg-darkPrimary hover:bg-primaryAccent dark:hover:bg-darkPrimaryAccent" : "bg-secondary dark:bg-darkSecondary hover:bg-secondaryAccent dark:hover:bg-darkSecondaryAccent", "text-xl font-bold py-2 px-4 rounded", className), ...props, children }, void 0, false, {
    fileName: "app/components/links.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_c3 = ButtonLink;
function FloatingActionLink({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonLink, { ...props, className: clsx("fixed bottom-0 right-0 md:bottom-5 md:right-5 md:rounded-full", className), isPrimary: true, children }, void 0, false, {
    fileName: "app/components/links.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_c4 = FloatingActionLink;
function ListLinkItem({
  isActive,
  className = "",
  to,
  deleteProps,
  children,
  ...props
}) {
  _s();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state !== "idle";
  const hasFailed = fetcher.data?.success === false;
  if (isSubmitting) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: clsx("w-full flex flex-row items-center border", isActive ? "bg-secondary dark:bg-darkSecondary border-secondary dark:border-darkSecondary" : "hover:bg-backgroundPrimary dark:hover:bg-darkBackgroundPrimary border-background dark:border-darkBackground hover:border-secondary dark:hover:border-darkSecondary", {
    "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 focus:text-red-700 dark:focus:text-red-500": hasFailed
  }, className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to, className: "block w-full p-4", children }, void 0, false, {
      fileName: "app/components/links.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    deleteProps && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { className: "p-8 ml-auto", method: "POST", action: deleteProps.action, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", "aria-label": deleteProps.ariaLabel, name: "intent", value: "delete", disabled: isSubmitting, className: isSubmitting ? "animate-spin duration-1000" : "hover:text-primary focus:text-primary dark:hover:text-darkPrimary dark:focus:text-darkPrimary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 ", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }, void 0, false, {
      fileName: "app/components/links.tsx",
      lineNumber: 92,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/links.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/links.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/links.tsx",
      lineNumber: 89,
      columnNumber: 23
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/links.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_s(ListLinkItem, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c5 = ListLinkItem;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Link");
$RefreshReg$(_c2, "NavLink");
$RefreshReg$(_c3, "ButtonLink");
$RefreshReg$(_c4, "FloatingActionLink");
$RefreshReg$(_c5, "ListLinkItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Link2 as Link,
  NavLink2 as NavLink,
  ButtonLink,
  FloatingActionLink,
  ListLinkItem
};
//# sourceMappingURL=/build/_shared/chunk-FJ5FYGKV.js.map
