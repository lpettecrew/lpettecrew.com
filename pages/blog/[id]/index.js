import Link from "next/link";
import React from "react";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import styles from "../../../styles/Blog.module.css";

const Article = ({ article }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      className={styles.article}
    >
      <Meta title={article.title} description={article.excerpt} />
      <h1 className={styles.articleTitle}>{article.title}</h1>
      <br />
      <p className={styles.articleBody}>{article.body}</p>
      <br />
      <Link href="/blog">
        <a className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          &larr; Go Back
        </a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/blog/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/blog/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
