import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

<<<<<<< HEAD
export default function Post({ post }: PostProps) {
  console.log(post)
  return (
    <div>
=======
export default function Post({ post } :PostProps) {
  return(
    <div>
      <Header />
>>>>>>> b60efaf (changes to .env scss and pages)
    </div>
  )
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient({});
<<<<<<< HEAD
  const posts = await prismic.getByType('posts');

  return {
    posts,
    fallback: true
=======
  const posts = await prismic.getByType({});

  return {
    paths: posts
>>>>>>> b60efaf (changes to .env scss and pages)
  }
};

export const getStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});
<<<<<<< HEAD
  const response = await prismic.getByUID('posts', params.slug);
=======
  const response = await prismic.getByUID(params.slug, {});
>>>>>>> b60efaf (changes to .env scss and pages)

  return {
    props: {
      post: response
    }
  }
};
