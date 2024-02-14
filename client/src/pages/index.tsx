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
  const index = posts.data.length-1;
  
  return (
    <main className={styles.content}>
      <div className={styles.post}>
        <h3 className={styles.title}>{posts.data[index].attributes.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: marked.parse(posts.data[index].attributes.content) }} />
      </div>
      <Link href="/overview" className={styles.olderButton}>
        <p>Show older</p>
      </Link>
    </main>
  );
}
 
export default Home;
