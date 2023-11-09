import { getPosts } from '../services';
import { FeaturedPosts, MainPosts } from '../sections';
import { PostCard, PostWidget, Categories } from '../components';

export default function Home({ posts }) {
  return (
    <div className=" mx-auto  px-4 md:px-10 mb-8">
      <div className="md:mx-10 space-y-10">
        <MainPosts />
        <FeaturedPosts />
      </div>

      <header className="flex py-4 pb-8 md:ml-8  md:mt-4">
        <h1 className="font-myfont text-2xl font-bold">Güncel İçerikler</h1>
      </header>
      <div className="grid container mx-auto  grid-cols-1 lg:grid-cols-12 gap-1 md:gap-6 lg:gap-6">
        <div className="lg:col-span-8  md:pr-8 border-black col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky  mt-12 srelative top-8">
            <PostWidget />
            <Categories />
            {/* <ContactUs /> */}
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
