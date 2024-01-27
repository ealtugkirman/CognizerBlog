'use client';

import React from 'react';
import { useRouter } from 'next/router';

import {
  PostDetail,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components';
import { getPosts, getPostDetails } from '../../services';
import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-12 md:mt-40 lg:px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-2" />
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            {post.author && <Author author={post.author} />}
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-2" />
        </div>
      </div>
    </>
  );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  try {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
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
    console.error('Error fetching post details:', error.message);
    return {
      notFound: true,
    };
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  try {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return {
      paths: [],
      fallback: true,
    };
  }
}
