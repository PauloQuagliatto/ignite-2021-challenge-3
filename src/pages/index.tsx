import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import { Header } from '../components/Header';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
<<<<<<< HEAD
  console.log(postsPagination)
  return (
    <div>

    </div>
  )
=======
 return(
  <div>
      <Header />

  </div>
 )
>>>>>>> b60efaf (changes to .env scss and pages)
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient({});
<<<<<<< HEAD
  const postsResponse = await prismic.getByType('posts');
=======
  const postsResponse = await prismic.getByType({});
>>>>>>> b60efaf (changes to .env scss and pages)

  return {
    props: {
      postsPagination: postsResponse
    }
  }
};
