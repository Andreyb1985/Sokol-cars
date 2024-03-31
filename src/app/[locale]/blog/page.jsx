import React from "react";
import Layout from '@/components/Layout';
import BlogUSA from '@/components/BlogUSA/indexusa';
import BlogDE from '@/components/BlogDE/indexde';
import "./styles.css";
import { useTranslations } from 'next-intl';
// import styles from "./index.module.css";

const BlogLayout = () => {
  const t = useTranslations('Blog');
  return (
    <Layout>
      <div>
        <div className="container">
        <div class="create-line"></div>
          <div class="text">{t('title-usa')}</div>
          <div class="akardeon">
            <BlogUSA/>
          </div>
          <div class="create-line"></div>
          <div class="text">{t('title-de')}</div>
          <div class="akardeon">
            <BlogDE/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogLayout
