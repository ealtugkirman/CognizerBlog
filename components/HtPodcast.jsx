import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getCategoryPost } from '../services';

const HtPodcast = () => {
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    const categorySlug = 'podcast'; // İstediğiniz sabit slug değerini buraya yazın

    getCategoryPost(categorySlug).then((result) => {
      setCategoryPosts(result);
    });
  }, []);

  return (
    <div className="bg-white font-myfont shadow-lg border rounded-2xl py-2 pb-4 mb-8">
      <div className="flex-row flex items-center border-b  justify-between">
        <h1 className="text-2xl font-bold my-4 ml-4">
          HT Podcast
        </h1>
        <div className="text-xs mr-4 text-red-400">
          <Link href="/category/podcast">
            Tüm podcastleri görüntüle
          </Link>
        </div>
      </div>
      {categoryPosts.map((post, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 justify-center w-full px-4 my-4"
        >
          <div className="w-2/3 cursor-pointer">
            <h5 className="text-sm text-gray-900 font-semibold">

              <Link href={`/post/${post.node.slug}`}>
                <span>{post.node.title}</span>
              </Link>
            </h5>
            <p className="text-xs text-gray-500">
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
          </div>
          <div className="w-2/5 ">
            <img
              className="rounded-2xl"
              src={post.node.featuredImage.url}
              alt={post.node.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HtPodcast;
