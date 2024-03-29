import React from "react";
import Layout from '@/components/Layout';
import BlogUSA from '@/components/BlogUSA/indexusa';
import BlogDE from '@/components/BlogDE/indexde';
import "./styles.css";
// import styles from "./index.module.css";

const BlogLayout = () => {
  return (
    <Layout>
      <div>
        <div className="container">
        <div class="create-line"></div>
          <div class="text">Вопросы по США</div>
          <div class="akardeon">
            <BlogUSA/>
          </div>
          <div class="create-line"></div>
          <div class="text">Вопросы по Германии</div>
          <div class="akardeon">
            <BlogDE/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogLayout
