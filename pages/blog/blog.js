import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

//import "./styles.css";
import Blog from '@/components/Blog';

//import styles from "blog.module.css";
import Layout from '@/components/Layout';

const Blog = () => {
  return (
    <div className='root'>
    <Layout>
    ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="w-screen h-screen p-8 flex items-start justify-center">
        <Blog />
      </div>  
    </NextUIProvider>
  </React.StrictMode>
);
    </Layout>
    </div>
  );
};

export default Blog;
