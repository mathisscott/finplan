import {
  clsx
} from "/build/_shared/chunk-S557J23I.js";
import {
  Form,
  useSubmit
} from "/build/_shared/chunk-M65O7C4K.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JCCYN7HA.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/forms.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/forms.tsx"' + id);
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
    "app/components/forms.tsx"
  );
  import.meta.hot.lastModified = "1706322488000";
}
function Input({
  label,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "w-full lg:max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-textLight text-sm font-semibold", children: label }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: clsx("mt-1 w-full text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent", className), ...props }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/forms.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Input;
function Textarea({
  label,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "w-full lg:max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-textLight text-sm font-semibold", children: label }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: clsx("mt-1 w-full text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent", className), ...props }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/forms.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c2 = Textarea;
function useDebounce(delay, initialValue = "") {
  _s();
  const [value, setValue] = (0, import_react2.useState)(initialValue);
  const [debouncedValue, setDebouncedValue] = (0, import_react2.useState)(value);
  (0, import_react2.useEffect)(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return [debouncedValue, setValue];
}
_s(useDebounce, "ZiX+uXQ6Qh0840rbcoMNwVlV6Tc=");
function SearchInput({
  defaultValue,
  ...props
}) {
  _s2();
  const [debouncedValue, setValue] = useDebounce(500, defaultValue);
  const submit = useSubmit();
  const formRef = (0, import_react2.useRef)();
  const debouncedValueRef = (0, import_react2.useRef)(debouncedValue);
  (0, import_react2.useEffect)(() => {
    if (debouncedValueRef.current === debouncedValue) {
      return;
    }
    if (formRef.current) {
      debouncedValueRef.current = debouncedValue;
      submit(formRef.current);
    }
  }, [debouncedValue, formRef, submit]);
  return /* @__PURE__ */ (0, import_react3.createElement)(Input, { ...props, defaultValue, key: defaultValue, onChange: (e) => {
    formRef.current = e.target.form;
    setValue(e.target.value);
  } });
}
_s2(SearchInput, "e/RKtUfRtuQjAVQiMvzjCP0rb/s=", false, function() {
  return [useDebounce, useSubmit];
});
_c3 = SearchInput;
function Form2({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: clsx("w-full m-auto lg:max-w-3xl flex flex-col items-center justify-center gap-5", className), ...props, children }, void 0, false, {
    fileName: "app/components/forms.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_c4 = Form2;
function Attachment({
  label,
  attachmentUrl,
  disabled = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full lg:max-w-md flex gap-2 items-center justify-center mt-1 text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent", children: [
    disabled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: label }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 106,
      columnNumber: 19
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: attachmentUrl, className: "font-bold underline decoration-4 underline-offset-2 decoration-primary dark:decoration-darkPrimary hover:decoration-primaryAccent hover:dark:decoration-darkPrimaryAccent", children: label }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 106,
      columnNumber: 64
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "attachmentUrl", value: attachmentUrl }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": "Remove attachment", type: "submit", name: "intent", value: "remove-attachment", disabled, children: "X" }, void 0, false, {
      fileName: "app/components/forms.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/forms.tsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}
_c5 = Attachment;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Input");
$RefreshReg$(_c2, "Textarea");
$RefreshReg$(_c3, "SearchInput");
$RefreshReg$(_c4, "Form");
$RefreshReg$(_c5, "Attachment");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Input,
  Textarea,
  SearchInput,
  Form2 as Form,
  Attachment
};
//# sourceMappingURL=/build/_shared/chunk-GBAETJLL.js.map
