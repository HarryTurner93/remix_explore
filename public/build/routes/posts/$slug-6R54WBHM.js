import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Q6CNLXTJ.js";

// browser-route-module:/home/harry/repos/remix_explore/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
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
//# sourceMappingURL=/build/routes/posts/$slug-6R54WBHM.js.map
