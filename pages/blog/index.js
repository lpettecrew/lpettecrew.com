import React from "react";
import Article from "../../components/Article";
import Meta from "../../components/Meta";
import { server } from "../../config";
import styles from "../../styles/Blog.module.css";

export default function Blog({ articles }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
    >
      <Meta
        title="Blog | Leo Pettecrew"
        description="Read up on some topics I found interesting..."
      />
      <h1 className="text-6xl text-center">Blog</h1>
      <br />
      <div className="flex flex-wrap justify-center">
        <br />
        {articles.map((item, key) => (
          <Article key={key} article={item} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/blog/`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
