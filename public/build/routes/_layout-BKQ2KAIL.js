import {
  NavLink
} from "/build/_shared/chunk-FJ5FYGKV.js";
import "/build/_shared/chunk-S557J23I.js";
import {
  Outlet,
  useRouteLoaderData
} from "/build/_shared/chunk-M65O7C4K.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JCCYN7HA.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/modules/session/session.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/modules/session/session.ts"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function useUser() {
  const data = useRouteLoaderData("root");
  if (!data || !data.user)
    return null;
  const deserializedUser = {
    ...data.user,
    createdAt: new Date(data.user.createdAt),
    updatedAt: new Date(data.user.updatedAt)
  };
  return deserializedUser;
}

// app/routes/_layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Component() {
  _s();
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-4 lg:mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "w-full flex flex-row gap-5 text-lg lg:text-2xl font-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", prefetch: "intent", children: "Home" }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/dashboard", prefetch: "intent", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/login", prefetch: "intent", children: "Log in" }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 48,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/signup", prefetch: "intent", children: "Sign up" }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 53,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 46,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "p-4 w-full flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(Component, "BPnln+wUpxLjLAxQmw7xYz9C+QI=", false, function() {
  return [useUser];
});
_c = Component;
var _c;
$RefreshReg$(_c, "Component");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Component as default
};
//# sourceMappingURL=/build/routes/_layout-BKQ2KAIL.js.map
