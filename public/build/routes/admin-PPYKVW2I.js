import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-2THHQEKS.js";

// browser-route-module:/home/harry/repos/remix_explore/app/routes/admin.tsx?browser
init_react();

// app/routes/admin.tsx
init_react();

// app/styles/admin.css
var admin_default = "/build/_assets/admin-FKEXSDC3.css";

// app/routes/admin.tsx
var links = () => {
  return [{ rel: "stylesheet", href: admin_default }];
};
function Admin() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "admin"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/posts/${post.slug}`
  }, post.title))))), /* @__PURE__ */ React.createElement("main", null, "..."));
}
export {
  Admin as default,
  links
};
//# sourceMappingURL=/build/routes/admin-PPYKVW2I.js.map
