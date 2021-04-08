import { articles } from "../../../lib/blog_data";

const handler = ({ query: { id } }, res) => {
  if (articles[id - 1]) {
    res.status(200).json(articles[id - 1]);
  } else {
    res.status(404).json({ message: "This post does not exist yet." });
  }
};

export default handler;
