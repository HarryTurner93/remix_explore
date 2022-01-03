import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-73IWTPSM.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/harry/repos/remix_explore/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();

// app/styles/admin.css
var admin_default = "/build/_assets/admin-MN44LWAP.css";

// app/routes/admin.tsx
var links = () => {
  return [{ rel: "stylesheet", href: admin_default }];
};
function Admin() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "new"
  }, "Create a New Post")), /* @__PURE__ */ React.createElement("br", null), posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/admin/${post.slug}`
  }, post.title))))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-5YFHATKY.js.map
