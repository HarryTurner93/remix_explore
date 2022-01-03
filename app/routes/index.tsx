import { Link, useLoaderData, Outlet } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = () => {
  return getPosts();
};

export default function Index() {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>My Remix Posts App</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
