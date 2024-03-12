import {
  require_expenses
} from "/build/_shared/chunk-C42PQQTS.js";
import {
  require_attachments
} from "/build/_shared/chunk-JF2AVI4A.js";
import {
  Button
} from "/build/_shared/chunk-3CVMMVAL.js";
import {
  Form,
  Input,
  Textarea
} from "/build/_shared/chunk-GBAETJLL.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-5IHDCHXO.js";
import "/build/_shared/chunk-S557J23I.js";
import {
  useNavigation
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

// app/routes/dashboard.expenses._index.tsx
var import_node = __toESM(require_node(), 1);
var import_attachments = __toESM(require_attachments(), 1);
var import_expenses = __toESM(require_expenses(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.expenses._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.expenses._index.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Component() {
  _s();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle" && navigation.formAction === "/dashboard/expenses/?index";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", action: "/dashboard/expenses/?index", encType: "multipart/form-data", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Title:", type: "text", name: "title", placeholder: "Dinner for Two", required: true }, void 0, false, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { label: "Description:", name: "description" }, void 0, false, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Amount (in USD):", type: "number", defaultValue: 0, name: "amount", required: true }, void 0, false, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Attachment", type: "file", name: "attachment" }, void 0, false, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, isPrimary: true, children: isSubmitting ? "Creating..." : "Create" }, void 0, false, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.expenses._index.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(Component, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c = Component;
var _c;
$RefreshReg$(_c, "Component");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Component as default
};
//# sourceMappingURL=/build/routes/dashboard.expenses._index-6FSE355V.js.map
