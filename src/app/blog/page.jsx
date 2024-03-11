import React from "react";
import Layout from '@/components/Layout';
import BlogUSA from '@/components/BlogUSA/indexusa';
import BlogDE from '@/components/BlogDE/indexde';
import "./styles.css";
// import styles from "./index.module.css";

const BlogLayout = () => {
  return (
    <Layout>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <BlogUSA/>
        <BlogDE/>
      </div>
    </Layout>
  );
}

export default BlogLayout
