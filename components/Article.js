import Link from "next/link";
import React from "react";
import styles from "../styles/Article.module.css";

const Article = ({ article }) => {
  return (
    <Link href="/blog/[id]" as={`/blog/${article.id}`}>
      <a className={styles.article}>
        <h3 className={styles.articleTitle}>{article.title}</h3>
        <br />
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default Article;
