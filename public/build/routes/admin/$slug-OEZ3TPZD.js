import {
  useLoaderData
} from "/build/_shared/chunk-73IWTPSM.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/harry/repos/remix_explore/app/routes/admin/$slug.tsx?browser
init_react();

// app/routes/admin/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Some Post: ", post.title), /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/admin/$slug-OEZ3TPZD.js.map
