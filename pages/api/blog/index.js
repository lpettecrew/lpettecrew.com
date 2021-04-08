import { articles } from "../../../lib/blog_data";

const handler = (req, res) => {
  res.status(200).json(articles);
};

export default handler;
