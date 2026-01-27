// src/pages/blog/index.js
import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import Layout from '@theme/Layout';

export default function CustomBlogPage(props) {
  return (
    <Layout
      title="Что нового в iBOX"
      description="Читайте о релизах, обновлениях и улучшениях в системе iBOX"
    >
      <BlogListPage {...props} />
    </Layout>
  );
}
