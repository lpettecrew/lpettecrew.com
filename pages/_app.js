import { StrictMode } from "react";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <Layout>
        <Nav />
        <div className="wrapperOuter">
          <div className="wrapperInner">
            <Component {...pageProps} />
          </div>
        </div>
      </Layout>
    </StrictMode>
  );
}
