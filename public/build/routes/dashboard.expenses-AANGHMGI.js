import {
  require_db
} from "/build/_shared/chunk-MW4YJJQO.js";
import {
  ListLinkItem
} from "/build/_shared/chunk-FJ5FYGKV.js";
import {
  H1
} from "/build/_shared/chunk-BSVE76VU.js";
import {
  SearchInput
} from "/build/_shared/chunk-GBAETJLL.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-5IHDCHXO.js";
import {
  clsx
} from "/build/_shared/chunk-S557J23I.js";
import {
  Form,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
  useParams,
  useSearchParams
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

// app/routes/dashboard.expenses.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.expenses.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.expenses.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Component() {
  _s();
  const navigation = useNavigation();
  const expenses = useLoaderData();
  const {
    id
  } = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(H1, { children: "Your expenses" }, void 0, false, {
      fileName: "app/routes/dashboard.expenses.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 w-full flex flex-col-reverse lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "lg:p-8 w-full lg:max-w-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "sr-only", children: "All expenses" }, void 0, false, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "GET", action: location.pathname, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchInput, { name: "q", type: "search", label: "Search by title", defaultValue: searchQuery }, void 0, false, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListLinkItem, { to: `/dashboard/expenses/${expense.id}`, isActive: expense.id === id, deleteProps: {
          ariaLabel: `Delete expense ${expense.title}`,
          action: `/dashboard/expenses/${expense.id}?index`
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: new Date(expense.createdAt).toLocaleDateString("en-US") }, void 0, false, {
            fileName: "app/routes/dashboard.expenses.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.expenses.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold", children: expense.title }, void 0, false, {
            fileName: "app/routes/dashboard.expenses.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: Intl.NumberFormat("en-US", {
            style: "currency",
            currency: expense.currencyCode
          }).format(expense.amount) }, void 0, false, {
            fileName: "app/routes/dashboard.expenses.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.expenses.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, expense.id, true, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 68,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.expenses.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: clsx("lg:p-8 w-full", navigation.state === "loading" && "motion-safe:animate-pulse"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/dashboard.expenses.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.expenses.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.expenses.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.expenses.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(Component, "r4KyK6Szi7pCcxnz+duHuvYBXRo=", false, function() {
  return [useNavigation, useLoaderData, useParams, useLocation, useSearchParams];
});
_c = Component;
var _c;
$RefreshReg$(_c, "Component");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Component as default
};
//# sourceMappingURL=/build/routes/dashboard.expenses-AANGHMGI.js.map
