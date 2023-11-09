import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white font-myfont shadow-lg border rounded-2xl py-2 pb-4 mb-8">
      <h1 className="text-2xl  font-bold ml-4 my-4 ">{slug ? ' Similiar ' : 'Last'}</h1>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full px-2 mb-4">
          <div className="flex-grow ml-2 mr-4">
            <p className="text-gray-500  text-xs">{moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <div className="text-sm text-gray-60 font-semibold">

              <Link href={`/post/${post.slug}`} key={index}>{post.title}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
