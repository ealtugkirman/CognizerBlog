import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import MainPostCard from '../components/MainPostCard';
import { getMainPosts } from '../services';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1290 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1290, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const MainPosts = () => {
  const [mainPosts, setMainPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getMainPosts().then((result) => {
      setMainPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="">
      <div className="">
        {dataLoaded && (
          <Carousel
            responsive={responsive}
          >
            {mainPosts.map((post, index) => (
              <MainPostCard key={index} post={post} />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default MainPosts;
