import React from "react";
import Layout from '@/components/Layout';
import Blog from '@/components/Blog';
import "./styles.css";
// import styles from "./index.module.css";

const BlogLayout = () => {
  return (
    <Layout>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <Blog/>
      </div>
    </Layout>
  );
}

export default BlogLayout
