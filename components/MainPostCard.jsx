import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const MainPostCard = ({ post }) => (
  <div className="flex group md:flex-row flex-col mt-28 underline-text font-myfont md:h-80">
    <div
      className="rounded-lg bg-center z-10 bg-no-repeat bg-cover shadow-xl hover:shadow-2xl hover:mb-4 md:grid md:w-5/12 h-40 md:h-80 hover-scale"
      style={{
        backgroundImage: `url('${post.featuredImage.url}')`,
      }}
      alt={post.title}
    />
    <div className="flex md:w-7/12 flex-col rounded-lg  md:px-8 py-4  ">
      {post.categories && (
        <div className="text-blue-500  text-xs md:text-sm   text-left mb-2  md:mb-4 text-shadow">
          {post.categories.map((category) => category.name).join()}
        </div>
      )}
      <h1 className="text-black text-left mb-2 hover:underline md:mb-4 text-shadow font-semibold text-xl  md:text-2xl">
        {post.title}
      </h1>
      <p className="text-black text-left mb-2 md:mb-4 text-shadow  text-xs">
        {moment(post.createdAt).format('DD MMM, YYYY')}
      </p>
      <p className=" text-gray-700  text-left mb-4 text-shadow text-sm md:text-md">
        {post.excerpt}
      </p>

      <div className="flex items-center bottom-5 w-full ">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className=" drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-xs md:text-md text-black text-shadow ml-2 font-medium">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="" />
    </Link>
  </div>
);

export default MainPostCard;
