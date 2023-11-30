/* eslint-disable no-console */
// Import necessary modules
import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Loader, PostWidget, Categories } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mt-32 px-4 md:px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          { posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          )) }
        </div>

        <div className="col-span-1 lg:col-span-4">
          <div className="flex flex-col lg:sticky top-10">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;

export async function getStaticProps({ params }) {
  try {
    const posts = await getCategoryPost(params.slug);
    return {
      props: { posts },
    };
  } catch (error) {
    // Handle rate-limiting error
    if (error.response?.status === 429) {
      // Implement retry logic or notify the user about the rate-limiting issue
      console.error('Rate limit exceeded. Please try again later.');
      return {
        notFound: true,
      };
    }

    // Handle other errors
    console.error('Error fetching data:', error.message);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const categories = await getCategories();
    return {
      paths: categories.map(({ slug }) => ({ params: { slug } })),
      fallback: 'blocking',
    };
  } catch (error) {
    console.log('Error fetching categories:', error.message);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}
