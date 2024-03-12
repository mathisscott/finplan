var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Component,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from "@remix-run/react";

// app/components/headings.tsx
import { clsx } from "clsx";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function H1({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV2("h1", { className: clsx("text-5xl md:text-7xl font-bold", className), ...props, children: props.children }, void 0, !1, {
    fileName: "app/components/headings.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function H2({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV2("h2", { className: clsx("text-4xl md:text-6xl font-bold", className), ...props, children: props.children }, void 0, !1, {
    fileName: "app/components/headings.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function H3({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV2("h3", { className: clsx("text-3xl md:text-5xl font-bold", className), ...props, children: props.children }, void 0, !1, {
    fileName: "app/components/headings.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function H4({ className, ...props }) {
  return /* @__PURE__ */ jsxDEV2("h4", { className: clsx("text-2xl md:text-4xl font-bold", className), ...props, children: props.children }, void 0, !1, {
    fileName: "app/components/headings.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/links.tsx
import { Link as RemixLink, NavLink as RemixNavLink, useFetcher } from "@remix-run/react";
import { clsx as clsx2 } from "clsx";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Link({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV3(
    RemixLink,
    {
      className: clsx2(
        "font-bold underline decoration-4 underline-offset-2 decoration-primary dark:decoration-darkPrimary hover:decoration-primaryAccent hover:dark:decoration-darkPrimaryAccent",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/links.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
function NavLink({ className, children, styleAsActive = !1, ...props }) {
  return /* @__PURE__ */ jsxDEV3(
    RemixNavLink,
    {
      className: ({ isActive }) => clsx2(
        "font-bold p-2 text-lg lg:text-2xl",
        styleAsActive || isActive ? "bg-primary dark:bg-darkPrimary" : "border border-secondary dark:border-darkSecondary hover:bg-primaryAccent dark:hover:bg-darkPrimaryAccent",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/links.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
function ButtonLink({ isPrimary, className = "", children, ...props }) {
  return /* @__PURE__ */ jsxDEV3(
    RemixLink,
    {
      className: clsx2(
        "block w-full md:w-min whitespace-nowrap text-center",
        isPrimary ? "bg-primary dark:bg-darkPrimary hover:bg-primaryAccent dark:hover:bg-darkPrimaryAccent" : "bg-secondary dark:bg-darkSecondary hover:bg-secondaryAccent dark:hover:bg-darkSecondaryAccent",
        "text-xl font-bold py-2 px-4 rounded",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/links.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}
function FloatingActionLink({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV3(
    ButtonLink,
    {
      ...props,
      className: clsx2("fixed bottom-0 right-0 md:bottom-5 md:right-5 md:rounded-full", className),
      isPrimary: !0,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/links.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
}
function ListLinkItem({ isActive, className = "", to, deleteProps, children, ...props }) {
  let fetcher = useFetcher(), isSubmitting = fetcher.state !== "idle", hasFailed = fetcher.data?.success === !1;
  return isSubmitting ? null : /* @__PURE__ */ jsxDEV3(
    "li",
    {
      className: clsx2(
        "w-full flex flex-row items-center border",
        isActive ? "bg-secondary dark:bg-darkSecondary border-secondary dark:border-darkSecondary" : "hover:bg-backgroundPrimary dark:hover:bg-darkBackgroundPrimary border-background dark:border-darkBackground hover:border-secondary dark:hover:border-darkSecondary",
        {
          "text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 focus:text-red-700 dark:focus:text-red-500": hasFailed
        },
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV3(RemixNavLink, { to, className: "block w-full p-4", children }, void 0, !1, {
          fileName: "app/components/links.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this),
        deleteProps && /* @__PURE__ */ jsxDEV3(fetcher.Form, { className: "p-8 ml-auto", method: "POST", action: deleteProps.action, children: /* @__PURE__ */ jsxDEV3(
          "button",
          {
            type: "submit",
            "aria-label": deleteProps.ariaLabel,
            name: "intent",
            value: "delete",
            disabled: isSubmitting,
            className: isSubmitting ? "animate-spin duration-1000" : "hover:text-primary focus:text-primary dark:hover:text-darkPrimary dark:focus:text-darkPrimary",
            children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-8 h-8 ", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/components/links.tsx",
                lineNumber: 130,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/links.tsx",
              lineNumber: 129,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/links.tsx",
            lineNumber: 117,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/links.tsx",
          lineNumber: 116,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/links.tsx",
      lineNumber: 98,
      columnNumber: 5
    },
    this
  );
}

// app/components/progress.tsx
import { useNavigation } from "@remix-run/react";
import { clsx as clsx3 } from "clsx";
import { useEffect, useRef, useState } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function PageTransitionProgressBar() {
  let ref = useRef(null), [hasAnimationCompleted, setHasAnimationCompleted] = useState(!0), navigation = useNavigation(), isTransitioning = navigation.state !== "idle";
  return useEffect(() => {
    if (!isTransitioning)
      return;
    async function awaitAnimationCompletion() {
      if (!ref.current)
        return;
      let animationPromises = ref.current.getAnimations().map((animation) => animation.finished);
      await Promise.allSettled(animationPromises), setHasAnimationCompleted(!0);
    }
    setHasAnimationCompleted(!1), awaitAnimationCompletion();
  }, [isTransitioning]), /* @__PURE__ */ jsxDEV4(
    "div",
    {
      role: "progressbar",
      "aria-hidden": !isTransitioning,
      "aria-valuetext": isTransitioning ? "Loading" : void 0,
      className: "fixed inset-x-0 top-0 left-0 z-50 h-1 animate-pulse",
      children: /* @__PURE__ */ jsxDEV4(
        "div",
        {
          ref,
          className: clsx3(
            "h-full bg-gradient-to-r from-primary to-primaryAccent dark:from-darkPrimary dark:to-darkPrimaryAccent transition-all duration-500 ease-in-out",
            navigation.state === "idle" && hasAnimationCompleted && "w-0 opacity-0 transition-none",
            navigation.state === "submitting" && "w-4/12",
            navigation.state === "loading" && "w-10/12",
            navigation.state === "idle" && !hasAnimationCompleted && "w-full"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/progress.tsx",
          lineNumber: 41,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/progress.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/modules/session/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";

// app/modules/db.server.ts
import { PrismaClient } from "@prisma/client";
var db;
global.__db || (global.__db = new PrismaClient()), db = global.__db;

// app/modules/session/session.server.ts
async function registerUser(userData) {
  let hashedPassword = await bcrypt.hash(userData.password, 10), sanitizedEmail = userData.email.trim().toLowerCase(), sanitizedName = userData.name.trim();
  if (await db.user.findUnique({
    where: { email: sanitizedEmail }
  }))
    throw new Error(`A user with the email ${userData.email} already exists.`);
  try {
    return db.user.create({
      data: { name: sanitizedName, email: sanitizedEmail, password: hashedPassword }
    });
  } catch (error) {
    throw console.error(error), new Error("Unable to create user.");
  }
}
async function loginUser({ email, password }) {
  let sanitizedEmail = email.trim().toLowerCase(), user = await db.user.findUnique({
    where: { email: sanitizedEmail }
  });
  if (!user)
    throw new Error(`No user found for email: ${email}.`);
  if (!await bcrypt.compare(password, user.password))
    throw new Error("Invalid password.");
  return user;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "bee-rich-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(user, headers3 = new Headers()) {
  let session = await getSession();
  return session.set("userId", user.id), headers3.set("Set-Cookie", await commitSession(session)), headers3;
}
function getUserSession(request) {
  return getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string")
    throw redirect("/login");
  return userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return db.user.findUnique({
      where: { id: userId },
      select: { id: !0, name: !0, email: !0, createdAt: !0, updatedAt: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-XQIGTAR3.css";

// app/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Financial Planner" },
  {
    name: "description",
    content: "Be in control of your finances with the Financial Planner - the buzzworthy expense and income tracker with a modern interface. Keep your finances organized!"
  }
], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
  }
];
async function loader({ request }) {
  return { user: await getUser(request) };
}
function Document({ children }) {
  return /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { className: "bg-background dark:bg-darkBackground text-lg text-text dark:text-darkText", children: [
      /* @__PURE__ */ jsxDEV5(PageTransitionProgressBar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
function Component() {
  return /* @__PURE__ */ jsxDEV5(Document, { children: /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError(), heading = "Unexpected Error", message = "We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists.";
  if (isRouteErrorResponse(error))
    switch (error.status) {
      case 401:
        heading = "401 Unauthorized", message = "Oops! Looks like you tried to visit a page that you do not have access to.";
        break;
      case 404:
        heading = "404 Not Found", message = "Oops! Looks like you tried to visit a page that does not exist.";
        break;
    }
  let errorMessage = error instanceof Error ? error.message : null;
  return /* @__PURE__ */ jsxDEV5(Document, { children: /* @__PURE__ */ jsxDEV5("section", { className: "m-5 lg:m-20 flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxDEV5(H1, { children: heading }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ jsxDEV5("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ jsxDEV5("p", { children: [
      "Error message: ",
      errorMessage
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(ButtonLink, { to: "/", isPrimary: !0, children: "Back to homepage" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.expenses.$id.attachments.$.tsx
var dashboard_expenses_id_attachments_exports = {};
__export(dashboard_expenses_id_attachments_exports, {
  loader: () => loader2
});
import { redirect as redirect2 } from "@remix-run/router";

// app/modules/attachments.server.ts
import {
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler
} from "@remix-run/node";
import fs from "fs";
import path from "path";
var standardFileUploadHandler = unstable_createFileUploadHandler({
  directory: "./attachments",
  avoidFileConflicts: !0
}), attachmentsUploadHandler = async (args) => {
  if (args.name !== "attachment" || !args.filename)
    return null;
  let file = await standardFileUploadHandler(args);
  return file ? typeof file == "string" ? file : file.name : null;
}, uploadHandler = unstable_composeUploadHandlers(
  attachmentsUploadHandler,
  unstable_createMemoryUploadHandler()
);
function deleteAttachment(fileName) {
  let localPath = path.join(process.cwd(), "attachments", fileName);
  try {
    fs.unlinkSync(localPath);
  } catch (error) {
    console.error(error);
  }
}
function buildFileResponse(fileName, headers3 = new Headers()) {
  let localPath = path.join(process.cwd(), "attachments", fileName);
  try {
    let file = fs.readFileSync(localPath);
    return headers3.append("Content-Type", "application/octet-stream"), headers3.append("Content-Disposition", `attachment; filename="${fileName}"`), new Response(file, { headers: headers3 });
  } catch (error) {
    return console.error(error), new Response("Not Found", { status: 404 });
  }
}

// app/routes/dashboard.expenses.$id.attachments.$.tsx
async function loader2({ request, params }) {
  let userId = await requireUserId(request), { id } = params, slug = params["*"];
  if (!id || !slug)
    throw Error("id and slug route parameters must be defined");
  let expense = await db.expense.findUnique({ where: { id_userId: { id, userId } } });
  if (!expense || !expense.attachment)
    throw new Response("Not found", { status: 404 });
  if (slug !== expense.attachment)
    return redirect2(`/dashboard/expenses/${id}/attachments/${expense.attachment}`);
  let headers3 = new Headers();
  return headers3.set("ETag", expense.attachment), request.headers.get("If-None-Match") === expense.attachment ? new Response(null, { status: 304, headers: headers3 }) : buildFileResponse(expense.attachment, headers3);
}

// app/routes/dashboard.income.$id.attachments.$.tsx
var dashboard_income_id_attachments_exports = {};
__export(dashboard_income_id_attachments_exports, {
  loader: () => loader3
});
import { redirect as redirect3 } from "@remix-run/router";
async function loader3({ request, params }) {
  let userId = await requireUserId(request), { id } = params, slug = params["*"];
  if (!id || !slug)
    throw Error("id and slug route parameters must be defined");
  let invoice = await db.invoice.findUnique({ where: { id_userId: { id, userId } } });
  if (!invoice || !invoice.attachment)
    throw new Response("Not found", { status: 404 });
  if (slug !== invoice.attachment)
    return redirect3(`/dashboard/income/${id}/attachments/${invoice.attachment}`);
  let headers3 = new Headers();
  return headers3.set("ETag", invoice.attachment), request.headers.get("If-None-Match") === invoice.attachment ? new Response(null, { status: 304, headers: headers3 }) : buildFileResponse(invoice.attachment, headers3);
}

// app/routes/dashboard.expenses.$id._index.tsx
var dashboard_expenses_id_index_exports = {};
__export(dashboard_expenses_id_index_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => Component2,
  loader: () => loader4
});
import { json, redirect as redirect4, unstable_parseMultipartFormData } from "@remix-run/node";
import {
  isRouteErrorResponse as isRouteErrorResponse2,
  useActionData,
  useLoaderData,
  useNavigation as useNavigation2,
  useParams,
  useRouteError as useRouteError2
} from "@remix-run/react";

// app/components/buttons.tsx
import { clsx as clsx4 } from "clsx";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function ActionBar({ children }) {
  return /* @__PURE__ */ jsxDEV6("div", { className: "w-full flex flex-col md:flex-row gap-3 px-3 items-center justify-center", children }, void 0, !1, {
    fileName: "app/components/buttons.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
function Button({ isPrimary = !1, className, disabled, children, ...props }) {
  return /* @__PURE__ */ jsxDEV6(
    "button",
    {
      disabled,
      className: clsx4(
        "w-full md:w-min whitespace-nowrap",
        isPrimary ? "bg-primary dark:bg-darkPrimary" : "bg-secondary dark:bg-darkSecondary",
        disabled && "opacity-50",
        isPrimary && !disabled && "hover:bg-primaryAccent dark:hover:bg-darkPrimaryAccent",
        "text-xl font-bold py-2 px-4 rounded",
        !isPrimary && !disabled && "hover:bg-secondaryAccent dark:hover:bg-darkSecondaryAccent",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/buttons.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

// app/components/forms.tsx
import { Form as RemixForm, useSubmit } from "@remix-run/react";
import { clsx as clsx5 } from "clsx";
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
import { createElement } from "react";
function Input({ label, className, ...props }) {
  return /* @__PURE__ */ jsxDEV7("label", { className: "w-full lg:max-w-md", children: [
    /* @__PURE__ */ jsxDEV7("span", { className: "text-textLight text-sm font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/forms.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(
      "input",
      {
        className: clsx5(
          "mt-1 w-full text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent",
          className
        ),
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/forms.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function Textarea({ label, className, ...props }) {
  return /* @__PURE__ */ jsxDEV7("label", { className: "w-full lg:max-w-md", children: [
    /* @__PURE__ */ jsxDEV7("span", { className: "text-textLight text-sm font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/forms.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(
      "textarea",
      {
        className: clsx5(
          "mt-1 w-full text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent",
          className
        ),
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/forms.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
function useDebounce(delay, initialValue = "") {
  let [value, setValue] = useState2(initialValue), [debouncedValue, setDebouncedValue] = useState2(value);
  return useEffect2(() => {
    let timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]), [debouncedValue, setValue];
}
function SearchInput({ defaultValue, ...props }) {
  let [debouncedValue, setValue] = useDebounce(500, defaultValue), submit = useSubmit(), formRef = useRef2(), debouncedValueRef = useRef2(debouncedValue);
  return useEffect2(() => {
    debouncedValueRef.current !== debouncedValue && formRef.current && (debouncedValueRef.current = debouncedValue, submit(formRef.current));
  }, [debouncedValue, formRef, submit]), /* @__PURE__ */ createElement(
    Input,
    {
      ...props,
      defaultValue,
      key: defaultValue,
      onChange: (e) => {
        formRef.current = e.target.form, setValue(e.target.value);
      }
    }
  );
}
function Form({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV7(
    RemixForm,
    {
      className: clsx5("w-full m-auto lg:max-w-3xl flex flex-col items-center justify-center gap-5", className),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/forms.tsx",
      lineNumber: 99,
      columnNumber: 5
    },
    this
  );
}
function Attachment({ label, attachmentUrl, disabled = !1 }) {
  return /* @__PURE__ */ jsxDEV7("div", { className: "w-full lg:max-w-md flex gap-2 items-center justify-center mt-1 text-text dark:text-darkText text-lg font-semibold bg-background dark:bg-darkBackground py-4 px-2 rounded-lg border border-secondaryAccent dark:border-darkSecondaryAccent", children: [
    disabled ? /* @__PURE__ */ jsxDEV7("span", { className: "font-bold", children: label }, void 0, !1, {
      fileName: "app/components/forms.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV7(
      "a",
      {
        href: attachmentUrl,
        className: "font-bold underline decoration-4 underline-offset-2 decoration-primary dark:decoration-darkPrimary hover:decoration-primaryAccent hover:dark:decoration-darkPrimaryAccent",
        children: label
      },
      void 0,
      !1,
      {
        fileName: "app/components/forms.tsx",
        lineNumber: 120,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7("input", { type: "hidden", name: "attachmentUrl", value: attachmentUrl }, void 0, !1, {
      fileName: "app/components/forms.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("button", { "aria-label": "Remove attachment", type: "submit", name: "intent", value: "remove-attachment", disabled, children: "X" }, void 0, !1, {
      fileName: "app/components/forms.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/forms.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}

// app/modules/expenses.server.ts
import zod from "zod";
function createExpense({ title, description, amount, attachment, userId }) {
  return db.expense.create({
    data: {
      title,
      description,
      amount,
      currencyCode: "USD",
      attachment,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
async function deleteExpense(id, userId) {
  let expense = await db.expense.delete({ where: { id_userId: { id, userId } } });
  expense.attachment && deleteAttachment(expense.attachment);
}
function updateExpense({ id, title, description, amount, attachment, userId }) {
  return db.expense.update({
    where: { id_userId: { id, userId } },
    data: { title, description, amount, attachment }
  });
}
function removeAttachmentFromExpense(id, userId, fileName) {
  return deleteAttachment(fileName), db.expense.update({
    where: { id_userId: { id, userId } },
    data: { attachment: null }
  });
}
var expenseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  amount: zod.string()
});
function parseExpense(formData) {
  let data = Object.fromEntries(formData), { title, description, amount } = expenseSchema.parse(data), amountNumber = Number.parseFloat(amount);
  if (Number.isNaN(amountNumber))
    throw Error("Invalid amount");
  let attachment = formData.get("attachment");
  return (!attachment || typeof attachment != "string") && (attachment = void 0), { title, description, amount: amountNumber, attachment };
}

// app/routes/dashboard.expenses.$id._index.tsx
import { Fragment, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
async function handleDelete(request, id, userId) {
  let redirectPath = request.headers.get("referer") || "/dashboard/expenses";
  try {
    await deleteExpense(id, userId);
  } catch {
    return json({ success: !1 });
  }
  return redirectPath.includes(id) ? redirect4("/dashboard/expenses") : redirect4(redirectPath);
}
async function handleUpdate(formData, id, userId) {
  let expenseData = parseExpense(formData);
  return await updateExpense({ id, userId, ...expenseData }), json({ success: !0 });
}
async function handleRemoveAttachment(formData, id, userId) {
  let attachmentUrl = formData.get("attachmentUrl");
  if (!attachmentUrl || typeof attachmentUrl != "string")
    throw Error("something went wrong");
  let fileName = attachmentUrl.split("/").pop();
  if (!fileName)
    throw Error("something went wrong");
  return await removeAttachmentFromExpense(id, userId, fileName), json({ success: !0 });
}
async function action({ params, request }) {
  let userId = await requireUserId(request), { id } = params;
  if (!id)
    throw Error("id route parameter must be defined");
  let formData;
  request.headers.get("content-type")?.toLowerCase().includes("multipart/form-data") ? formData = await unstable_parseMultipartFormData(request, uploadHandler) : formData = await request.formData();
  let intent = formData.get("intent");
  if (intent === "delete")
    return handleDelete(request, id, userId);
  if (intent === "update")
    return handleUpdate(formData, id, userId);
  if (intent === "remove-attachment")
    return handleRemoveAttachment(formData, id, userId);
  throw new Response("Bad request", { status: 400 });
}
async function loader4({ request, params }) {
  let userId = await requireUserId(request), { id } = params;
  if (!id)
    throw Error("id route parameter must be defined");
  let expense = await db.expense.findUnique({ where: { id_userId: { id, userId } } });
  if (!expense)
    throw new Response("Not found", { status: 404 });
  return json(expense);
}
function Component2() {
  let expense = useLoaderData(), navigation = useNavigation2(), isSubmitting = navigation.state !== "idle" && navigation.formAction === `/dashboard/expenses/${expense.id}?index`, actionData = useActionData(), attachment = navigation.formData?.get("attachment"), isUploadingAttachment = attachment instanceof File && attachment.name !== "", isRemovingAttachment = navigation.formData?.get("intent") === "remove-attachment";
  return /* @__PURE__ */ jsxDEV8(Fragment, { children: [
    /* @__PURE__ */ jsxDEV8(
      Form,
      {
        method: "POST",
        action: `/dashboard/expenses/${expense.id}?index`,
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsxDEV8(Input, { label: "Title:", type: "text", name: "title", defaultValue: expense.title, required: !0 }, void 0, !1, {
            fileName: "app/routes/dashboard.expenses.$id._index.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV8(Textarea, { label: "Description:", name: "description", defaultValue: expense.description || "" }, void 0, !1, {
            fileName: "app/routes/dashboard.expenses.$id._index.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV8(Input, { label: "Amount (in USD):", type: "number", defaultValue: expense.amount, name: "amount", required: !0 }, void 0, !1, {
            fileName: "app/routes/dashboard.expenses.$id._index.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          (isUploadingAttachment || expense.attachment) && !isRemovingAttachment ? /* @__PURE__ */ jsxDEV8(
            Attachment,
            {
              label: "Current Attachment",
              attachmentUrl: `/dashboard/expenses/${expense.id}/attachments/${expense.attachment}`,
              disabled: isUploadingAttachment
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.expenses.$id._index.tsx",
              lineNumber: 110,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ jsxDEV8(Input, { label: "New Attachment", type: "file", name: "attachment", disabled: isSubmitting }, void 0, !1, {
            fileName: "app/routes/dashboard.expenses.$id._index.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV8(Button, { type: "submit", name: "intent", value: "update", isPrimary: !0, children: "Save" }, void 0, !1, {
            fileName: "app/routes/dashboard.expenses.$id._index.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { "aria-live": "polite", className: "text-green-600", children: actionData?.success && "Changes saved!" }, void 0, !1, {
            fileName: "app/routes/dashboard.expenses.$id._index.tsx",
            lineNumber: 121,
            columnNumber: 9
          }, this)
        ]
      },
      expense.id,
      !0,
      {
        fileName: "app/routes/dashboard.expenses.$id._index.tsx",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV8(FloatingActionLink, { to: "/dashboard/expenses/", children: "Add expense" }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses.$id._index.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.expenses.$id._index.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2() {
  let error = useRouteError2(), { id } = useParams(), heading = "Something went wrong", message = "Apologies, something went wrong on our end, please try again.";
  return isRouteErrorResponse2(error) && error.status === 404 && (heading = "Expense not found", message = `Apologies, the expense with the id ${id} cannot be found.`), /* @__PURE__ */ jsxDEV8(Fragment, { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "w-full m-auto lg:max-w-3xl flex flex-col items-center justify-center gap-5", children: [
      /* @__PURE__ */ jsxDEV8(H2, { children: heading }, void 0, !1, {
        fileName: "app/routes/dashboard.expenses.$id._index.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { children: message }, void 0, !1, {
        fileName: "app/routes/dashboard.expenses.$id._index.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.expenses.$id._index.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(FloatingActionLink, { to: "/dashboard/expenses/", children: "Add expense" }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses.$id._index.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.expenses.$id._index.tsx",
    lineNumber: 140,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.income.$id._index.tsx
var dashboard_income_id_index_exports = {};
__export(dashboard_income_id_index_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => Component3,
  loader: () => loader5
});
import { json as json2, redirect as redirect5, unstable_parseMultipartFormData as unstable_parseMultipartFormData2 } from "@remix-run/node";
import {
  isRouteErrorResponse as isRouteErrorResponse3,
  useActionData as useActionData2,
  useLoaderData as useLoaderData2,
  useNavigation as useNavigation3,
  useParams as useParams2,
  useRouteError as useRouteError3
} from "@remix-run/react";

// app/modules/invoices.server.ts
import zod2 from "zod";
function createInvoice({ title, description, amount, attachment, userId }) {
  return db.invoice.create({
    data: {
      title,
      description,
      amount,
      currencyCode: "USD",
      attachment,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
async function deleteInvoice(id, userId) {
  let invoice = await db.invoice.delete({ where: { id_userId: { id, userId } } });
  invoice.attachment && deleteAttachment(invoice.attachment);
}
function updateInvoice({ id, title, description, amount, attachment, userId }) {
  return db.invoice.update({
    where: { id_userId: { id, userId } },
    data: { title, description, amount, attachment }
  });
}
function removeAttachmentFromInvoice(id, userId, fileName) {
  return deleteAttachment(fileName), db.invoice.update({
    where: { id_userId: { id, userId } },
    data: { attachment: null }
  });
}
var invoiceSchema = zod2.object({
  title: zod2.string(),
  description: zod2.string(),
  amount: zod2.string()
});
function parseInvoice(formData) {
  let data = Object.fromEntries(formData), { title, description, amount } = invoiceSchema.parse(data), amountNumber = Number.parseFloat(amount);
  if (Number.isNaN(amountNumber))
    throw Error("Invalid amount");
  let attachment = formData.get("attachment");
  return (!attachment || typeof attachment != "string") && (attachment = void 0), { title, description, amount: amountNumber, attachment };
}

// app/routes/dashboard.income.$id._index.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
async function handleDelete2(request, id, userId) {
  let redirectPath = request.headers.get("referer") || "/dashboard/income";
  try {
    await deleteInvoice(id, userId);
  } catch {
    return json2({ success: !1 });
  }
  return redirectPath.includes(id) ? redirect5("/dashboard/income") : redirect5(redirectPath);
}
async function handleUpdate2(formData, id, userId) {
  let invoiceData = parseInvoice(formData);
  return await updateInvoice({ id, userId, ...invoiceData }), json2({ success: !0 });
}
async function handleRemoveAttachment2(formData, id, userId) {
  let attachmentUrl = formData.get("attachmentUrl");
  if (!attachmentUrl || typeof attachmentUrl != "string")
    throw Error("something went wrong");
  let fileName = attachmentUrl.split("/").pop();
  if (!fileName)
    throw Error("something went wrong");
  return await removeAttachmentFromInvoice(id, userId, fileName), json2({ success: !0 });
}
async function action2({ params, request }) {
  let userId = await requireUserId(request), { id } = params;
  if (!id)
    throw Error("id route parameter must be defined");
  let formData;
  request.headers.get("content-type")?.toLowerCase().includes("multipart/form-data") ? formData = await unstable_parseMultipartFormData2(request, uploadHandler) : formData = await request.formData();
  let intent = formData.get("intent");
  if (intent === "delete")
    return handleDelete2(request, id, userId);
  if (intent === "update")
    return handleUpdate2(formData, id, userId);
  if (intent === "remove-attachment")
    return handleRemoveAttachment2(formData, id, userId);
  throw new Response("Bad request", { status: 400 });
}
async function loader5({ request, params }) {
  let userId = await requireUserId(request), { id } = params;
  if (!id)
    throw Error("id route parameter must be defined");
  let invoice = await db.invoice.findUnique({ where: { id_userId: { id, userId } } });
  if (!invoice)
    throw new Response("Not found", { status: 404 });
  return json2(invoice);
}
function Component3() {
  let invoice = useLoaderData2(), navigation = useNavigation3(), isSubmitting = navigation.state !== "idle" && navigation.formAction === `/dashboard/income/${invoice.id}?index`, actionData = useActionData2(), attachment = navigation.formData?.get("attachment"), isUploadingAttachment = attachment instanceof File && attachment.name !== "", isRemovingAttachment = navigation.formData?.get("intent") === "remove-attachment";
  return /* @__PURE__ */ jsxDEV9(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV9(
      Form,
      {
        method: "POST",
        action: `/dashboard/income/${invoice.id}?index`,
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ jsxDEV9(Input, { label: "Title:", type: "text", name: "title", defaultValue: invoice.title, required: !0 }, void 0, !1, {
            fileName: "app/routes/dashboard.income.$id._index.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV9(Textarea, { label: "Description:", name: "description", defaultValue: invoice.description || "" }, void 0, !1, {
            fileName: "app/routes/dashboard.income.$id._index.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV9(Input, { label: "Amount (in USD):", type: "number", defaultValue: invoice.amount, name: "amount", required: !0 }, void 0, !1, {
            fileName: "app/routes/dashboard.income.$id._index.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          (isUploadingAttachment || invoice.attachment) && !isRemovingAttachment ? /* @__PURE__ */ jsxDEV9(
            Attachment,
            {
              label: "Current Attachment",
              attachmentUrl: `/dashboard/income/${invoice.id}/attachments/${invoice.attachment}`,
              disabled: isUploadingAttachment
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.income.$id._index.tsx",
              lineNumber: 109,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ jsxDEV9(Input, { label: "New Attachment", type: "file", name: "attachment", disabled: isSubmitting }, void 0, !1, {
            fileName: "app/routes/dashboard.income.$id._index.tsx",
            lineNumber: 115,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV9(Button, { type: "submit", name: "intent", value: "update", isPrimary: !0, children: "Save" }, void 0, !1, {
            fileName: "app/routes/dashboard.income.$id._index.tsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV9("p", { "aria-live": "polite", className: "text-green-600", children: actionData?.success && "Changes saved!" }, void 0, !1, {
            fileName: "app/routes/dashboard.income.$id._index.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ]
      },
      invoice.id,
      !0,
      {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 99,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9(FloatingActionLink, { to: "/dashboard/income/", children: "Add invoice" }, void 0, !1, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.income.$id._index.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3() {
  let error = useRouteError3(), { id } = useParams2(), heading = "Something went wrong", message = "Apologies, something went wrong on our end, please try again.";
  return isRouteErrorResponse3(error) && error.status === 404 && (heading = "Invoice not found", message = `Apologies, the invoice with the id ${id} cannot be found.`), /* @__PURE__ */ jsxDEV9(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "w-full m-auto lg:max-w-3xl flex flex-col items-center justify-center gap-5", children: [
      /* @__PURE__ */ jsxDEV9(H2, { children: heading }, void 0, !1, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { children: message }, void 0, !1, {
        fileName: "app/routes/dashboard.income.$id._index.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(FloatingActionLink, { to: "/dashboard/income/", children: "Add invoice" }, void 0, !1, {
      fileName: "app/routes/dashboard.income.$id._index.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.income.$id._index.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.expenses._index.tsx
var dashboard_expenses_index_exports = {};
__export(dashboard_expenses_index_exports, {
  action: () => action3,
  default: () => Component4
});
import { redirect as redirect6, unstable_parseMultipartFormData as unstable_parseMultipartFormData3 } from "@remix-run/node";
import { useNavigation as useNavigation4 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
async function action3({ request }) {
  let userId = await requireUserId(request), formData = await unstable_parseMultipartFormData3(request, uploadHandler), expenseData = parseExpense(formData), expense = await createExpense({ userId, ...expenseData });
  return redirect6(`/dashboard/expenses/${expense.id}`);
}
function Component4() {
  let navigation = useNavigation4(), isSubmitting = navigation.state !== "idle" && navigation.formAction === "/dashboard/expenses/?index";
  return /* @__PURE__ */ jsxDEV10(Form, { method: "POST", action: "/dashboard/expenses/?index", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV10(Input, { label: "Title:", type: "text", name: "title", placeholder: "Dinner for Two", required: !0 }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Textarea, { label: "Description:", name: "description" }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Input, { label: "Amount (in USD):", type: "number", defaultValue: 0, name: "amount", required: !0 }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Input, { label: "Attachment", type: "file", name: "attachment" }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(Button, { type: "submit", disabled: isSubmitting, isPrimary: !0, children: isSubmitting ? "Creating..." : "Create" }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses._index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.expenses._index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.income._index.tsx
var dashboard_income_index_exports = {};
__export(dashboard_income_index_exports, {
  action: () => action4,
  default: () => Component5
});
import { redirect as redirect7, unstable_parseMultipartFormData as unstable_parseMultipartFormData4 } from "@remix-run/node";
import { useNavigation as useNavigation5 } from "@remix-run/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
async function action4({ request }) {
  let userId = await requireUserId(request), formData = await unstable_parseMultipartFormData4(request, uploadHandler), invoiceData = parseInvoice(formData), invoice = await createInvoice({ userId, ...invoiceData });
  return redirect7(`/dashboard/income/${invoice.id}`);
}
function Component5() {
  let navigation = useNavigation5(), isSubmitting = navigation.state !== "idle" && navigation.formAction === "/dashboard/income/?index";
  return /* @__PURE__ */ jsxDEV11(Form, { method: "POST", action: "/dashboard/income/?index", encType: "multipart/form-data", children: [
    /* @__PURE__ */ jsxDEV11(Input, { label: "Title:", type: "text", name: "title", placeholder: "Salary December 2022", required: !0 }, void 0, !1, {
      fileName: "app/routes/dashboard.income._index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Textarea, { label: "Description:", name: "description" }, void 0, !1, {
      fileName: "app/routes/dashboard.income._index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Input, { label: "Amount (in USD):", type: "number", defaultValue: 0, name: "amount", required: !0 }, void 0, !1, {
      fileName: "app/routes/dashboard.income._index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Input, { label: "Attachment", type: "file", name: "attachment" }, void 0, !1, {
      fileName: "app/routes/dashboard.income._index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Button, { type: "submit", disabled: isSubmitting, isPrimary: !0, children: isSubmitting ? "Creating..." : "Create" }, void 0, !1, {
      fileName: "app/routes/dashboard.income._index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.income._index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.expenses.tsx
var dashboard_expenses_exports = {};
__export(dashboard_expenses_exports, {
  default: () => Component6,
  loader: () => loader6
});
import { json as json3 } from "@remix-run/node";
import { Form as Form2, Outlet as Outlet2, useLoaderData as useLoaderData3, useLocation, useNavigation as useNavigation6, useParams as useParams3, useSearchParams } from "@remix-run/react";
import { clsx as clsx6 } from "clsx";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
async function loader6({ request }) {
  let userId = await requireUserId(request), searchString = new URL(request.url).searchParams.get("q"), expenses = await db.expense.findMany({
    orderBy: {
      createdAt: "desc"
    },
    where: {
      userId,
      title: {
        contains: searchString || ""
      }
    }
  });
  return json3(expenses);
}
function Component6() {
  let navigation = useNavigation6(), expenses = useLoaderData3(), { id } = useParams3(), location = useLocation(), [searchParams] = useSearchParams(), searchQuery = searchParams.get("q") || "";
  return /* @__PURE__ */ jsxDEV12("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxDEV12(H1, { children: "Your expenses" }, void 0, !1, {
      fileName: "app/routes/dashboard.expenses.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "mt-10 w-full flex flex-col-reverse lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV12("section", { className: "lg:p-8 w-full lg:max-w-2xl", children: [
        /* @__PURE__ */ jsxDEV12("h2", { className: "sr-only", children: "All expenses" }, void 0, !1, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12(Form2, { method: "GET", action: location.pathname, children: /* @__PURE__ */ jsxDEV12(SearchInput, { name: "q", type: "search", label: "Search by title", defaultValue: searchQuery }, void 0, !1, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("ul", { className: "flex flex-col", children: expenses.map((expense) => /* @__PURE__ */ jsxDEV12(
          ListLinkItem,
          {
            to: `/dashboard/expenses/${expense.id}`,
            isActive: expense.id === id,
            deleteProps: {
              ariaLabel: `Delete expense ${expense.title}`,
              action: `/dashboard/expenses/${expense.id}?index`
            },
            children: [
              /* @__PURE__ */ jsxDEV12("p", { children: /* @__PURE__ */ jsxDEV12("i", { children: new Date(expense.createdAt).toLocaleDateString("en-US") }, void 0, !1, {
                fileName: "app/routes/dashboard.expenses.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.expenses.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("p", { className: "text-xl font-semibold", children: expense.title }, void 0, !1, {
                fileName: "app/routes/dashboard.expenses.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV12("p", { children: /* @__PURE__ */ jsxDEV12("b", { children: Intl.NumberFormat("en-US", { style: "currency", currency: expense.currencyCode }).format(
                expense.amount
              ) }, void 0, !1, {
                fileName: "app/routes/dashboard.expenses.tsx",
                lineNumber: 62,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.expenses.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ]
          },
          expense.id,
          !0,
          {
            fileName: "app/routes/dashboard.expenses.tsx",
            lineNumber: 48,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/dashboard.expenses.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.expenses.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("section", { className: clsx6("lg:p-8 w-full", navigation.state === "loading" && "motion-safe:animate-pulse"), children: /* @__PURE__ */ jsxDEV12(Outlet2, {}, void 0, !1, {
        fileName: "app/routes/dashboard.expenses.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.expenses.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.expenses.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.expenses.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
var dashboard_index_exports = {};
__export(dashboard_index_exports, {
  loader: () => loader7
});
import { redirect as redirect8 } from "@remix-run/node";
function loader7() {
  return redirect8("/dashboard/expenses");
}

// app/routes/dashboard.income.tsx
var dashboard_income_exports = {};
__export(dashboard_income_exports, {
  default: () => Component7,
  loader: () => loader8
});
import { json as json4 } from "@remix-run/node";
import { Form as Form3, Outlet as Outlet3, useLoaderData as useLoaderData4, useLocation as useLocation2, useNavigation as useNavigation7, useParams as useParams4, useSearchParams as useSearchParams2 } from "@remix-run/react";
import { clsx as clsx7 } from "clsx";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
async function loader8({ request }) {
  let userId = await requireUserId(request), searchString = new URL(request.url).searchParams.get("q"), invoices = await db.invoice.findMany({
    orderBy: {
      createdAt: "desc"
    },
    where: {
      userId,
      title: {
        contains: searchString || ""
      }
    }
  });
  return json4(invoices);
}
function Component7() {
  let navigation = useNavigation7(), invoices = useLoaderData4(), { id } = useParams4(), location = useLocation2(), [searchParams] = useSearchParams2(), searchQuery = searchParams.get("q") || "";
  return /* @__PURE__ */ jsxDEV13("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxDEV13(H1, { children: "Your income" }, void 0, !1, {
      fileName: "app/routes/dashboard.income.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "mt-10 w-full flex flex-col-reverse lg:flex-row", children: [
      /* @__PURE__ */ jsxDEV13("section", { className: "lg:p-8 w-full lg:max-w-2xl", children: [
        /* @__PURE__ */ jsxDEV13("h2", { className: "sr-only", children: "All your income" }, void 0, !1, {
          fileName: "app/routes/dashboard.income.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Form3, { method: "GET", action: location.pathname, children: /* @__PURE__ */ jsxDEV13(SearchInput, { name: "q", type: "search", label: "Search by title", defaultValue: searchQuery }, void 0, !1, {
          fileName: "app/routes/dashboard.income.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.income.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("ul", { className: "flex flex-col", children: invoices.map((invoice) => /* @__PURE__ */ jsxDEV13(
          ListLinkItem,
          {
            to: `/dashboard/income/${invoice.id}`,
            isActive: invoice.id === id,
            deleteProps: {
              ariaLabel: `Delete invoice ${invoice.title}`,
              action: `/dashboard/income/${invoice.id}?index`
            },
            children: [
              /* @__PURE__ */ jsxDEV13("p", { children: /* @__PURE__ */ jsxDEV13("i", { children: new Date(invoice.createdAt).toLocaleDateString("en-US") }, void 0, !1, {
                fileName: "app/routes/dashboard.income.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.income.tsx",
                lineNumber: 57,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("p", { className: "text-xl font-semibold", children: invoice.title }, void 0, !1, {
                fileName: "app/routes/dashboard.income.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV13("p", { children: /* @__PURE__ */ jsxDEV13("b", { children: Intl.NumberFormat("en-US", { style: "currency", currency: invoice.currencyCode }).format(
                invoice.amount
              ) }, void 0, !1, {
                fileName: "app/routes/dashboard.income.tsx",
                lineNumber: 62,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.income.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ]
          },
          invoice.id,
          !0,
          {
            fileName: "app/routes/dashboard.income.tsx",
            lineNumber: 48,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/dashboard.income.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.income.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("section", { className: clsx7("lg:p-8 w-full", navigation.state === "loading" && "motion-safe:animate-pulse"), children: /* @__PURE__ */ jsxDEV13(Outlet3, {}, void 0, !1, {
        fileName: "app/routes/dashboard.income.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.income.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.income.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.income.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/_layout._index.tsx
var layout_index_exports = {};
__export(layout_index_exports, {
  default: () => Component8
});
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Component8() {
  return /* @__PURE__ */ jsxDEV14(H1, { children: "Welcome to the Financial Planner!" }, void 0, !1, {
    fileName: "app/routes/_layout._index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/_layout.logout.tsx
var layout_logout_exports = {};
__export(layout_logout_exports, {
  action: () => action5,
  loader: () => loader9
});
import { redirect as redirect9 } from "@remix-run/node";
function action5({ request }) {
  return logout(request);
}
function loader9() {
  return redirect9("/login");
}

// app/routes/_layout.signup.tsx
var layout_signup_exports = {};
__export(layout_signup_exports, {
  action: () => action6,
  default: () => Component9,
  loader: () => loader10,
  meta: () => meta2
});
import { json as json5, redirect as redirect10 } from "@remix-run/node";
import { useActionData as useActionData3, useNavigation as useNavigation8 } from "@remix-run/react";

// app/components/containers.tsx
import { clsx as clsx8 } from "clsx";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Container({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV15(
    "div",
    {
      className: clsx8(
        "w-full bg-backgroundPrimary dark:bg-darkBackgroundPrimary shadow dark:shadow-black overflow-hidden sm:rounded-lg",
        className
      ),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/containers.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
function Card({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV15(
    Container,
    {
      className: clsx8("lg:max-w-xl p-10 m-auto flex flex-col items-center justify-center gap-5", className),
      ...props,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/containers.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

// app/components/texts.tsx
import clsx9 from "clsx";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function Paragraph({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV16("p", { className, ...props, children }, void 0, !1, {
    fileName: "app/components/texts.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function InlineError({ className, children, ...props }) {
  return /* @__PURE__ */ jsxDEV16("p", { className: clsx9("text-red-600 font-bold", className), ...props, children }, void 0, !1, {
    fileName: "app/components/texts.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.signup.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Sign Up | Financial Planner" },
  { name: "description", content: "Sign up for an account to track your expenses and income." }
];
async function action6({ request }) {
  let formData = await request.formData(), { name, email, password } = Object.fromEntries(formData);
  if (!name || !email || !password)
    return json5({ error: "Please fill out all fields." });
  if (typeof name != "string" || typeof email != "string" || typeof password != "string")
    throw new Error("Invalid form data.");
  try {
    let user = await registerUser({ name, email, password });
    return redirect10("/dashboard", {
      headers: await createUserSession(user)
    });
  } catch (error) {
    return json5({ error: error?.message || "Something went wrong." });
  }
}
async function loader10({ request }) {
  return await getUserId(request) ? redirect10("/dashboard") : {};
}
function Component9() {
  let navigation = useNavigation8(), isSubmitting = navigation.state !== "idle" && navigation.formAction === "/signup", actionData = useActionData3();
  return /* @__PURE__ */ jsxDEV17(Card, { children: /* @__PURE__ */ jsxDEV17(Form, { method: "POST", action: "/signup", children: [
    /* @__PURE__ */ jsxDEV17(H1, { children: "Sign Up" }, void 0, !1, {
      fileName: "app/routes/_layout.signup.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17(Input, { label: "Name:", name: "name", required: !0 }, void 0, !1, {
      fileName: "app/routes/_layout.signup.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17(Input, { label: "Email:", name: "email", type: "email", required: !0 }, void 0, !1, {
      fileName: "app/routes/_layout.signup.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17(Input, { label: "Password:", name: "password", type: "password", required: !0 }, void 0, !1, {
      fileName: "app/routes/_layout.signup.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17(Button, { disabled: isSubmitting, type: "submit", isPrimary: !0, children: isSubmitting ? "Signing you up..." : "Sign up!" }, void 0, !1, {
      fileName: "app/routes/_layout.signup.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV17(InlineError, { "aria-live": "assertive", children: actionData?.error && actionData.error }, void 0, !1, {
      fileName: "app/routes/_layout.signup.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.signup.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_layout.signup.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.login.tsx
var layout_login_exports = {};
__export(layout_login_exports, {
  action: () => action7,
  default: () => Component10,
  loader: () => loader11,
  meta: () => meta3
});
import { json as json6, redirect as redirect11 } from "@remix-run/node";
import { useActionData as useActionData4, useNavigation as useNavigation9 } from "@remix-run/react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Log In | Financial Planner" },
  { name: "description", content: "Log into your account to track your expenses and income." }
];
async function action7({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (!email || !password)
    return json6({ error: "Please fill out all fields." });
  if (typeof email != "string" || typeof password != "string")
    throw new Error("Invalid form data.");
  try {
    let user = await loginUser({ email, password });
    return redirect11("/dashboard", {
      headers: await createUserSession(user)
    });
  } catch (error) {
    return json6({ error: error?.message || "Something went wrong." });
  }
}
async function loader11({ request }) {
  return await getUserId(request) ? redirect11("/dashboard") : {};
}
function Component10() {
  let navigation = useNavigation9(), isSubmitting = navigation.state !== "idle" && navigation.formAction === "/login", actionData = useActionData4();
  return /* @__PURE__ */ jsxDEV18(Card, { children: /* @__PURE__ */ jsxDEV18(Form, { method: "POST", action: "/login", children: [
    /* @__PURE__ */ jsxDEV18(H1, { children: "Log In" }, void 0, !1, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Input, { label: "Email:", name: "email", type: "email", required: !0 }, void 0, !1, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Input, { label: "Password:", name: "password", type: "password", required: !0 }, void 0, !1, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(Button, { disabled: isSubmitting, type: "submit", isPrimary: !0, children: isSubmitting ? "Logging you in..." : "Log in!" }, void 0, !1, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18(InlineError, { "aria-live": "assertive", children: actionData?.error && actionData.error }, void 0, !1, {
      fileName: "app/routes/_layout.login.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.login.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_layout.login.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Component11,
  headers: () => headers,
  loader: () => loader12,
  meta: () => meta4
});
import { json as json7 } from "@remix-run/node";
import { Form as Form4, Link as RemixLink2, Outlet as Outlet4, useLoaderData as useLoaderData5, useLocation as useLocation3, useRouteError as useRouteError4 } from "@remix-run/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var headers = () => ({
  "Cache-Control": "no-cache, private"
}), meta4 = ({ matches }) => {
  let userName = matches.find((match) => match.id === "root")?.data?.user?.name || null;
  return [{ title: userName ? `${userName}'s Dashboard | Financial Planner` : "Dashboard | Financial Planner" }, { name: "robots", content: "noindex" }];
};
async function loader12({ request }) {
  let userId = await requireUserId(request), expenseQuery = db.expense.findFirst({
    orderBy: { createdAt: "desc" },
    where: { userId }
  }), invoiceQuery = db.invoice.findFirst({
    orderBy: { createdAt: "desc" },
    where: { userId }
  }), [firstExpense, firstInvoice] = await Promise.all([expenseQuery, invoiceQuery]);
  return json7({ firstExpense, firstInvoice });
}
function Layout({ firstExpense, firstInvoice, children }) {
  let location = useLocation3();
  return /* @__PURE__ */ jsxDEV19(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV19("header", { children: /* @__PURE__ */ jsxDEV19(Container, { className: "p-4 mb-10", children: /* @__PURE__ */ jsxDEV19("nav", { children: [
      /* @__PURE__ */ jsxDEV19("ul", { className: "w-full flex flex-row gap-5 font-bold text-lg lg:text-2xl", children: [
        /* @__PURE__ */ jsxDEV19("li", { children: /* @__PURE__ */ jsxDEV19(RemixLink2, { to: "/", children: "Financial Planner" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV19("li", { className: "ml-auto", children: /* @__PURE__ */ jsxDEV19(Form4, { method: "POST", action: "/logout", children: /* @__PURE__ */ jsxDEV19("button", { type: "submit", children: "Log out" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("ul", { className: "mt-10 w-full flex flex-row gap-5", children: [
        /* @__PURE__ */ jsxDEV19("li", { className: "ml-auto", children: /* @__PURE__ */ jsxDEV19(
          NavLink,
          {
            to: firstInvoice ? `/dashboard/income/${firstInvoice.id}` : "/dashboard/income",
            styleAsActive: location.pathname.startsWith("/dashboard/income"),
            prefetch: "intent",
            children: "Income"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 66,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV19("li", { className: "mr-auto", children: /* @__PURE__ */ jsxDEV19(
          NavLink,
          {
            to: firstExpense ? `/dashboard/expenses/${firstExpense.id}` : "/dashboard/expenses",
            styleAsActive: location.pathname.startsWith("/dashboard/expenses"),
            prefetch: "intent",
            children: "Expenses"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 75,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19("main", { className: "p-4 w-full flex justify-center items-center", children }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function Component11() {
  let { firstExpense, firstInvoice } = useLoaderData5();
  return /* @__PURE__ */ jsxDEV19(Layout, { firstExpense, firstInvoice, children: /* @__PURE__ */ jsxDEV19(Outlet4, {}, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function ErrorBoundary4() {
  let error = useRouteError4(), errorMessage = error instanceof Error && error.message;
  return /* @__PURE__ */ jsxDEV19(Layout, { firstExpense: null, firstInvoice: null, children: /* @__PURE__ */ jsxDEV19(Container, { className: "p-5 lg:p-20 flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxDEV19(H1, { children: "Unexpected Error" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19("p", { children: "We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists." }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    errorMessage && /* @__PURE__ */ jsxDEV19("div", { className: "border-4 border-red-500 p-10", children: /* @__PURE__ */ jsxDEV19("p", { children: [
      "Error message: ",
      error.message
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 111,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => Component12,
  headers: () => headers2
});
import { Outlet as Outlet5 } from "@remix-run/react";

// app/modules/session/session.ts
import { useRouteLoaderData } from "@remix-run/react";
function useUser() {
  let data = useRouteLoaderData("root");
  return !data || !data.user ? null : {
    ...data.user,
    createdAt: new Date(data.user.createdAt),
    updatedAt: new Date(data.user.updatedAt)
  };
}

// app/routes/_layout.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var headers2 = () => ({
  "Cache-Control": "public, max-age=3600"
});
function Component12() {
  let user = useUser();
  return /* @__PURE__ */ jsxDEV20(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV20("header", { className: "mb-4 lg:mb-10", children: /* @__PURE__ */ jsxDEV20("nav", { className: "p-4", children: /* @__PURE__ */ jsxDEV20("ul", { className: "w-full flex flex-row gap-5 text-lg lg:text-2xl font-bold", children: [
      /* @__PURE__ */ jsxDEV20("li", { children: /* @__PURE__ */ jsxDEV20(NavLink, { to: "/", prefetch: "intent", children: "Home" }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      user ? /* @__PURE__ */ jsxDEV20("li", { className: "ml-auto", children: /* @__PURE__ */ jsxDEV20(NavLink, { to: "/dashboard", prefetch: "intent", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 27,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV20(Fragment4, { children: [
        /* @__PURE__ */ jsxDEV20("li", { className: "ml-auto", children: /* @__PURE__ */ jsxDEV20(NavLink, { to: "/login", prefetch: "intent", children: "Log in" }, void 0, !1, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 34,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV20("li", { children: /* @__PURE__ */ jsxDEV20(NavLink, { to: "/signup", prefetch: "intent", children: "Sign up" }, void 0, !1, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 39,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_layout.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("main", { className: "p-4 w-full flex justify-center items-center", children: /* @__PURE__ */ jsxDEV20(Outlet5, {}, void 0, !1, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/demo.tsx
var demo_exports = {};
__export(demo_exports, {
  default: () => Component13
});
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function Component13() {
  return /* @__PURE__ */ jsxDEV21("div", { className: "w-full flex flex-col gap-10 items-center justify-center mb-20", children: [
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full flex flex-col gap-3 items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV21(H1, { children: "Heading 1" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21(H2, { children: "Heading 2" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21(H3, { children: "Heading 3" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21(H4, { children: "Heading 4" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full flex flex-col gap-3 items-center justify-center", children: /* @__PURE__ */ jsxDEV21(ActionBar, { children: [
      /* @__PURE__ */ jsxDEV21(Button, { children: "Click me!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Button, { isPrimary: !0, children: "No, click me!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full flex flex-col gap-3 items-center justify-center", children: /* @__PURE__ */ jsxDEV21(Paragraph, { children: [
      "Please find more useful information ",
      /* @__PURE__ */ jsxDEV21(Link, { to: "/", children: "here" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 25,
        columnNumber: 47
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full flex flex-col gap-3 items-center justify-center", children: /* @__PURE__ */ jsxDEV21(ActionBar, { children: [
      /* @__PURE__ */ jsxDEV21(ButtonLink, { to: "/", children: "To Homepage!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(ButtonLink, { to: "/", isPrimary: !0, children: "To Homepage (important)!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full", children: /* @__PURE__ */ jsxDEV21(Form, { children: [
      /* @__PURE__ */ jsxDEV21(H3, { children: "Form" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Input, { label: "Email:", type: "text", name: "email", placeholder: "bee.rich@email.com" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Input, { label: "Name:", type: "text", name: "name", placeholder: "Mr. Bee Rich" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Textarea, { label: "Note:", name: "note" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Input, { label: "Password:", type: "password", name: "password" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Button, { type: "submit", isPrimary: !0, children: "Submit!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full", children: /* @__PURE__ */ jsxDEV21(Card, { children: [
      /* @__PURE__ */ jsxDEV21(H3, { children: "Card" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Paragraph, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec consectetur tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Sed euismod, nisl nec consectetur tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl." }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full", children: /* @__PURE__ */ jsxDEV21(Card, { children: /* @__PURE__ */ jsxDEV21(Form, { children: [
      /* @__PURE__ */ jsxDEV21(H3, { children: "Card with Form" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV21(Input, { label: "Email:", type: "text", name: "email", placeholder: "bee.rich@email.com" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV21(Input, { label: "Password:", type: "password", name: "password" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV21(Button, { type: "submit", isPrimary: !0, children: "Submit!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { className: "w-full", children: /* @__PURE__ */ jsxDEV21(Form, { children: [
      /* @__PURE__ */ jsxDEV21(H3, { children: "Form with Error" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Input, { label: "Email:", type: "text", name: "email", placeholder: "bee.rich@email.com" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(InlineError, { children: "Wupsi, Email already taken. Could that be you?" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV21(Button, { type: "submit", isPrimary: !0, children: "Submit!" }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(FloatingActionLink, { to: "/demo", children: "Primary action" }, void 0, !1, {
      fileName: "app/routes/demo.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-Q6HVNVCJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-M65O7C4K.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-JCCYN7HA.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L75QVQLF.js", imports: ["/build/_shared/chunk-FJ5FYGKV.js", "/build/_shared/chunk-BSVE76VU.js", "/build/_shared/chunk-S557J23I.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-BKQ2KAIL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout._index": { id: "routes/_layout._index", parentId: "routes/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_layout._index-RLHOEBBK.js", imports: ["/build/_shared/chunk-BSVE76VU.js", "/build/_shared/chunk-S557J23I.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.login": { id: "routes/_layout.login", parentId: "routes/_layout", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.login-TATDT3WU.js", imports: ["/build/_shared/chunk-EMZVHNTL.js", "/build/_shared/chunk-BWD2J6OT.js", "/build/_shared/chunk-BSVE76VU.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-GBAETJLL.js", "/build/_shared/chunk-5IHDCHXO.js", "/build/_shared/chunk-S557J23I.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_layout.logout": { id: "routes/_layout.logout", parentId: "routes/_layout", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.logout-FRT7BHGK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_layout.signup": { id: "routes/_layout.signup", parentId: "routes/_layout", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.signup-KIFP6FWF.js", imports: ["/build/_shared/chunk-EMZVHNTL.js", "/build/_shared/chunk-BWD2J6OT.js", "/build/_shared/chunk-BSVE76VU.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-GBAETJLL.js", "/build/_shared/chunk-5IHDCHXO.js", "/build/_shared/chunk-S557J23I.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-EQK6IRZJ.js", imports: ["/build/_shared/chunk-BWD2J6OT.js", "/build/_shared/chunk-MW4YJJQO.js", "/build/_shared/chunk-5IHDCHXO.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/dashboard._index": { id: "routes/dashboard._index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard._index-ZBAF5PVF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard.expenses": { id: "routes/dashboard.expenses", parentId: "routes/dashboard", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.expenses-AANGHMGI.js", imports: ["/build/_shared/chunk-FJ5FYGKV.js", "/build/_shared/chunk-BSVE76VU.js", "/build/_shared/chunk-GBAETJLL.js", "/build/_shared/chunk-S557J23I.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard.expenses.$id._index": { id: "routes/dashboard.expenses.$id._index", parentId: "routes/dashboard.expenses", path: ":id", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard.expenses.$id._index-BV5SCDBY.js", imports: ["/build/_shared/chunk-MW4YJJQO.js", "/build/_shared/chunk-C42PQQTS.js", "/build/_shared/chunk-JF2AVI4A.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-5IHDCHXO.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !0 }, "routes/dashboard.expenses.$id.attachments.$": { id: "routes/dashboard.expenses.$id.attachments.$", parentId: "routes/dashboard.expenses", path: ":id/attachments/*", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.expenses.$id.attachments.$-6T5UGG4G.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard.expenses._index": { id: "routes/dashboard.expenses._index", parentId: "routes/dashboard.expenses", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard.expenses._index-6FSE355V.js", imports: ["/build/_shared/chunk-C42PQQTS.js", "/build/_shared/chunk-JF2AVI4A.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-5IHDCHXO.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard.income": { id: "routes/dashboard.income", parentId: "routes/dashboard", path: "income", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.income-I6XSSPMC.js", imports: ["/build/_shared/chunk-FJ5FYGKV.js", "/build/_shared/chunk-BSVE76VU.js", "/build/_shared/chunk-GBAETJLL.js", "/build/_shared/chunk-S557J23I.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard.income.$id._index": { id: "routes/dashboard.income.$id._index", parentId: "routes/dashboard.income", path: ":id", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard.income.$id._index-27NPFQEN.js", imports: ["/build/_shared/chunk-MW4YJJQO.js", "/build/_shared/chunk-KL7WQXVG.js", "/build/_shared/chunk-JF2AVI4A.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-5IHDCHXO.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !0 }, "routes/dashboard.income.$id.attachments.$": { id: "routes/dashboard.income.$id.attachments.$", parentId: "routes/dashboard.income", path: ":id/attachments/*", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.income.$id.attachments.$-JM4SJETA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard.income._index": { id: "routes/dashboard.income._index", parentId: "routes/dashboard.income", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard.income._index-MMD6XNZG.js", imports: ["/build/_shared/chunk-KL7WQXVG.js", "/build/_shared/chunk-JF2AVI4A.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-5IHDCHXO.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-NIA33TR7.js", imports: ["/build/_shared/chunk-EMZVHNTL.js", "/build/_shared/chunk-BWD2J6OT.js", "/build/_shared/chunk-3CVMMVAL.js", "/build/_shared/chunk-GBAETJLL.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "a0195c5c", hmr: { runtime: "/build/_shared/chunk-JCCYN7HA.js", timestamp: 1710254120268 }, url: "/build/manifest-A0195C5C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard.expenses.$id.attachments.$": {
    id: "routes/dashboard.expenses.$id.attachments.$",
    parentId: "routes/dashboard.expenses",
    path: ":id/attachments/*",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_expenses_id_attachments_exports
  },
  "routes/dashboard.income.$id.attachments.$": {
    id: "routes/dashboard.income.$id.attachments.$",
    parentId: "routes/dashboard.income",
    path: ":id/attachments/*",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_income_id_attachments_exports
  },
  "routes/dashboard.expenses.$id._index": {
    id: "routes/dashboard.expenses.$id._index",
    parentId: "routes/dashboard.expenses",
    path: ":id",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_expenses_id_index_exports
  },
  "routes/dashboard.income.$id._index": {
    id: "routes/dashboard.income.$id._index",
    parentId: "routes/dashboard.income",
    path: ":id",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_income_id_index_exports
  },
  "routes/dashboard.expenses._index": {
    id: "routes/dashboard.expenses._index",
    parentId: "routes/dashboard.expenses",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_expenses_index_exports
  },
  "routes/dashboard.income._index": {
    id: "routes/dashboard.income._index",
    parentId: "routes/dashboard.income",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_income_index_exports
  },
  "routes/dashboard.expenses": {
    id: "routes/dashboard.expenses",
    parentId: "routes/dashboard",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_expenses_exports
  },
  "routes/dashboard._index": {
    id: "routes/dashboard._index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_index_exports
  },
  "routes/dashboard.income": {
    id: "routes/dashboard.income",
    parentId: "routes/dashboard",
    path: "income",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_income_exports
  },
  "routes/_layout._index": {
    id: "routes/_layout._index",
    parentId: "routes/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: layout_index_exports
  },
  "routes/_layout.logout": {
    id: "routes/_layout.logout",
    parentId: "routes/_layout",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: layout_logout_exports
  },
  "routes/_layout.signup": {
    id: "routes/_layout.signup",
    parentId: "routes/_layout",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: layout_signup_exports
  },
  "routes/_layout.login": {
    id: "routes/_layout.login",
    parentId: "routes/_layout",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: layout_login_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/demo": {
    id: "routes/demo",
    parentId: "root",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: demo_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
