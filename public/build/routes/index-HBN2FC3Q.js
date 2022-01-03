import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Q6CNLXTJ.js";

// browser-route-module:/home/harry/repos/remix_explore/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
function Index() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-HBN2FC3Q.js.map
