import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => {
  if (!post) {
    return null; // Return null or handle the case when post is missing.
  }

  return (
    <div className="bg-white border font-myfont rounded-2xl flex flex-col md:flex-row p-0 mb-6 md:mb-12">
      <div className="flex md:w-1/2 m-4">
        {post.featuredImage && (
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-cover z-20 rounded-2xl"
          />
        )}
      </div>

      <div className="flex flex-col space-y-2 my-2 ml-2 md:w-2/3">
        {post.categories && (
          <div className="text-blue-500 text-xs text-shadow">
            {post.categories.map((category) => category.name).join(', ')}
          </div>
        )}

        <h2 className="transition flex duration-700 text-left mr-2 cursor-pointer hover:text-pink-600 text-xl font-bold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h2>
        <span className="text-xs md:text-xs opacity-70">
          {moment(post.createdAt).format('DD MMM, YYYY')}
        </span>
        <p className="block text-left opacity-70 text-sm mr-4">
          {post.excerpt}
        </p>
        <div className="hidden md:flex justify-start mt-1 w-full lg:w-auto items-center">
          {post.author && post.author.photo && (
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full"
              src={post.author.photo.url}
            />
          )}
          <p className="text-gray-700 ml-2 font-medium text-xs lg:text-md">
            {post.author && post.author.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
