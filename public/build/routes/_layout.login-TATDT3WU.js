import {
  InlineError
} from "/build/_shared/chunk-EMZVHNTL.js";
import {
  Card
} from "/build/_shared/chunk-BWD2J6OT.js";
import {
  H1
} from "/build/_shared/chunk-BSVE76VU.js";
import {
  Button
} from "/build/_shared/chunk-3CVMMVAL.js";
import {
  Form,
  Input
} from "/build/_shared/chunk-GBAETJLL.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-5IHDCHXO.js";
import "/build/_shared/chunk-S557J23I.js";
import {
  useActionData,
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

// app/routes/_layout.login.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.login.tsx"
  );
  import.meta.hot.lastModified = "1710254060693.9402";
}
var meta = () => {
  return [{
    title: "Log In | Financial Planner"
  }, {
    name: "description",
    content: "Log into your account to track your expenses and income."
  }];
};
function Component() {
  _s();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle" && navigation.formAction === "/login";
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", action: "/login", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(H1, { children: "Log In" }, void 0, false, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Email:", name: "email", type: "email", required: true }, void 0, false, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Password:", name: "password", type: "password", required: true }, void 0, false, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: isSubmitting, type: "submit", isPrimary: true, children: isSubmitting ? "Logging you in..." : "Log in!" }, void 0, false, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { "aria-live": "assertive", children: actionData?.error && actionData.error }, void 0, false, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.login.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_layout.login.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(Component, "1AETIiPCWpdcL3+sPGUbmCFrInE=", false, function() {
  return [useNavigation, useActionData];
});
_c = Component;
var _c;
$RefreshReg$(_c, "Component");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Component as default,
  meta
};
//# sourceMappingURL=/build/routes/_layout.login-TATDT3WU.js.map
