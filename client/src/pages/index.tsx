import styles from "@/styles/Home.module.css";
import {Posts} from "@/types";
import { Marked } from 'marked';
import Link from "next/link";

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

const Home = ({posts} : Posts) => {
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
      <Link href="/overview" className={styles.olderButton}>
        <p>Show older</p>
      </Link>
    </main>
  );
}
 
export default Home;
