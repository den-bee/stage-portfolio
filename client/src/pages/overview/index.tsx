import styles from "@/pages/overview/Overview.module.css";
import {Posts} from "@/types";
import { Marked } from 'marked';

export const getStaticProps = async () => {
  const response = await fetch("http://host.docker.internal:1338/api/posts", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
  });
  const data = await response.json();

  return {
    props: {
      posts: data
    }
  }
}

const Overview = ({posts} : Posts) => {
  const marked = new Marked();

  return (
    <main className={styles.content}>
      <ul className={styles.postList}>
        {posts.data.map((post) => {
          return (
            <div key={post.id}>
              <li className={styles.title}>{post.attributes.title}</li>
              <li dangerouslySetInnerHTML={{ __html: marked.parse(post.attributes.content) }} />
            </div>
          )
        })}
      </ul>
    </main>
  );
}

export default Overview;
