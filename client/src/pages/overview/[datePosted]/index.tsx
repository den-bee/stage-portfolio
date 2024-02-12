import { Post, Posts } from "@/types";

export const getStaticPaths = async () => {
    const response = await fetch("http://host.docker.internal:1338/api/posts", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
  });

  const data = await response.json();

  const paths = data.posts.data.map((post : Post) => ({
    params: { datePosted: post.attributes.datePosted.substring(5,6)}
  }));

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async ({params} : {params: {datePosted: string}}) => {
    const response = await fetch("http://host.docker.internal:1338/api/posts" + params.datePosted);
    const post = await response.json();

    return {
      props: {
        post: post
      }
    }
}

const PostsByYear = ({posts} : Posts) => {
    return (
        <div>
          <ul>
          {posts.data.map((post) => {
          return (
            <li key={post.id}>{post.attributes.title}</li>
          )
        })}
          </ul>
        </div>
    )
}

export default PostsByYear;