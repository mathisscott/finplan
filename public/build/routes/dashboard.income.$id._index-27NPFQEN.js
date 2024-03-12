import {
  require_db
} from "/build/_shared/chunk-MW4YJJQO.js";
import {
  FloatingActionLink
} from "/build/_shared/chunk-FJ5FYGKV.js";
import {
  H2
} from "/build/_shared/chunk-BSVE76VU.js";
import {
  require_invoices
} from "/build/_shared/chunk-KL7WQXVG.js";
import {
  require_attachments
} from "/build/_shared/chunk-JF2AVI4A.js";
import {
  Button
} from "/build/_shared/chunk-3CVMMVAL.js";
import {
  Attachment,
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
  isRouteErrorResponse,
  useActionData,
  useLoaderData,
  useNavigation,
  useParams,
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

// app/routes/dashboard.income.$id._index.tsx
var import_node = __toESM(require_node(), 1);
var import_attachments = __toESM(require_attachments(), 1);
var import_db = __toESM(require_db(), 1);
var import_invoices = __toESM(require_invoices(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.income.$id._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.income.$id._index.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Component() {
  _s();
  const invoice = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle" && navigation.formAction === `/dashboard/income/${invoice.id}?index`;
  const actionData = useActionData();
  const attachment = navigation.formData?.get("attachment");
  const isUploadingAttachment = attachment instanceof File && attachment.name !== "";
  const isRemovingAttachment = navigation.formData?.get("intent") === "remove-attachment";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", action: `/dashboard/income/${invoice.id}?index`, encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Title:", type: "text", name: "title", defaultValue: invoice.title, required: true }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { label: "Description:", name: "description", defaultValue: invoice.description || "" }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "Amount (in USD):", type: "number", defaultValue: invoice.amount, name: "amount", required: true }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      (isUploadingAttachment || invoice.attachment) && !isRemovingAttachment ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Attachment, { label: "Current Attachment", attachmentUrl: `/dashboard/income/${invoice.id}/attachments/${invoice.attachment}`, disabled: isUploadingAttachment }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 137,
        columnNumber: 83
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { label: "New Attachment", type: "file", name: "attachment", disabled: isSubmitting }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 137,
        columnNumber: 244
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "intent", value: "update", isPrimary: true, children: "Save" }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { "aria-live": "polite", className: "text-green-600", children: actionData?.success && "Changes saved!" }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, invoice.id, true, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FloatingActionLink, { to: "/dashboard/income/", children: "Add invoice" }, void 0, false, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.income.$id._index.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(Component, "A121YAJxsiisshp40xc1lQ63LPc=", false, function() {
  return [useLoaderData, useNavigation, useActionData];
});
_c = Component;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  const {
    id
  } = useParams();
  let heading = "Something went wrong";
  let message = `Apologies, something went wrong on our end, please try again.`;
  if (isRouteErrorResponse(error) && error.status === 404) {
    heading = "Invoice not found";
    message = `Apologies, the invoice with the id ${id} cannot be found.`;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full m-auto lg:max-w-3xl flex flex-col items-center justify-center gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(H2, { children: heading }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: message }, void 0, false, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FloatingActionLink, { to: "/dashboard/income/", children: "Add invoice" }, void 0, false, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.income.$id._index.tsx",
    lineNumber: 164,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "IbF31mZw5Epu+ZGGuXMdxZE9OB0=", false, function() {
  return [useRouteError, useParams];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "Component");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  Component as default
};
//# sourceMappingURL=/build/routes/dashboard.income.$id._index-27NPFQEN.js.map
