import {
  Container
} from "/build/_shared/chunk-BWD2J6OT.js";
import {
  require_db
} from "/build/_shared/chunk-MW4YJJQO.js";
import {
  NavLink
} from "/build/_shared/chunk-FJ5FYGKV.js";
import {
  H1
} from "/build/_shared/chunk-BSVE76VU.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-5IHDCHXO.js";
import "/build/_shared/chunk-S557J23I.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useRouteError
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

// app/routes/dashboard.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1710254090215.1072";
}
var meta = ({
  matches
}) => {
  const root = matches.find((match) => match.id === "root");
  const userName = root?.data?.user?.name || null;
  const title = userName ? `${userName}'s Dashboard | Financial Planner` : "Dashboard | Financial Planner";
  return [{
    title
  }, {
    name: "robots",
    content: "noindex"
  }];
};
function Layout({
  firstExpense,
  firstInvoice,
  children
}) {
  _s();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "p-4 mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "w-full flex flex-row gap-5 font-bold text-lg lg:text-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Financial Planner" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 88,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Log out" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 92,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-10 w-full flex flex-row gap-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: firstInvoice ? `/dashboard/income/${firstInvoice.id}` : "/dashboard/income", styleAsActive: location.pathname.startsWith("/dashboard/income"), prefetch: "intent", children: "Income" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "mr-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: firstExpense ? `/dashboard/expenses/${firstExpense.id}` : "/dashboard/expenses", styleAsActive: location.pathname.startsWith("/dashboard/expenses"), prefetch: "intent", children: "Expenses" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "p-4 w-full flex justify-center items-center", children }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(Layout, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = Layout;
function Component() {
  _s2();
  const {
    firstExpense,
    firstInvoice
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { firstExpense, firstInvoice, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 125,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_s2(Component, "46wOaqIreZSJLlmapR7NjlerQtI=", false, function() {
  return [useLoaderData];
});
_c2 = Component;
function ErrorBoundary() {
  _s3();
  const error = useRouteError();
  const errorMessage = error instanceof Error && error.message;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { firstExpense: null, firstInvoice: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "p-5 lg:p-20 flex flex-col gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(H1, { children: "Unexpected Error" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists." }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Error message: ",
      error.message
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 140,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 137,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 136,
    columnNumber: 10
  }, this);
}
_s3(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c3 = ErrorBoundary;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Layout");
$RefreshReg$(_c2, "Component");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Component as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard-EQK6IRZJ.js.map
