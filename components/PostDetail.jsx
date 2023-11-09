import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3
            key={index}
            className="text-xl font-semibold mb-4"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>
                {item}
              </React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>
                {item}
              </React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4
            key={index}
            className="text-md font-semibold mb-4"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>
                {item}
              </React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white  font-myfont mt-20 md:mt-0 rounded-xl pb-6 mb-8">

        <div className="mx-4 mb-6">
          <div>
            {post.categories && (
            <div className="text-blue-500 text-xs text-shadow">
              {post.categories
                .map((category) => category.name)
                .join()}
            </div>
            )}
          </div>
          <h1 className="my-2 text-2xl md:text-4xl font-semibold">
            {post.title}
          </h1>
          <h6 className="my-2 text-sm md:text-md text-gray-700">
            {post.excerpt}
          </h6>
          <div className="flex flex-row my-3 pt-2 w-auto justify-between md:mx-2 items-center">
            <div className="flex flex-row items-centere">

              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle  hidden md:block rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-500 md:ml-2 text-sm md:text-md">
                {post.author.name}
              </p>
            </div>
            <div className="font-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hidden md:inline mr-2  text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle text-xs">
                {moment(post.createdAt).format('DD MMM, YYYY')}

              </span>
            </div>
          </div>

        </div>
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top h-full w-full object-cover  shadow-xl rounded-t-xl "
          />
        </div>
        <div className=" font-myfont text-md">
          <div className="flex items-center justify-evenly mb-8  " />

          {post.youtubelink && (
            <div className="mb-8">
              <iframe
                className="w-full"
                height="350"
                src={post.youtubelink}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={post.title}
              />
            </div>
          )}

          {post.content.raw.children.map(
            (typeObj, index) => {
              const children = typeObj.children.map(
                (item, itemindex) => getContentFragment(
                  itemindex,
                  item.text,
                  item,
                ),
              );
              return getContentFragment(
                index,
                children,
                typeObj,
                typeObj.type,
              );
            },
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
