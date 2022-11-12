import { GetStaticProps } from 'next';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
 return (
    <>
      <Header />
      <main className={styles.container}>
          <div className={styles.postsContainer}>
            {postsPagination.results.length > 0 ? postsPagination.results.map((post) => {
            return (
              <a key={post.uid!}>
                  <strong className={commonStyles['mini-title']}>
                    {post.data.title}
                  </strong>
                  <p className={commonStyles.text}>
                    {post.data.subtitle}
                  </p>
                  <div className={styles.infoContainer}>
                    <div>
                      <FiCalendar className={commonStyles.info} />
                      <span className={commonStyles.info}>{format(
                        new Date(post.first_publication_date),
                        'DD MMM YYYY',
                        {
                          locale: ptBR,
                        }
                      )}</span>
                    </div>
                    <div>
                      <FiUser className={commonStyles.info} />
                      <span className={commonStyles.info}>{post.data.author}</span>
                    </div>
                  </div>
              </a>
            )
          }) : null}
            {postsPagination.next_page ?
              <button className={styles.loadButton}>Carregar mais posts</button> 
            : null}
          </div>
      </main>
  </>
 )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('posts');

  return {
    props: {
      postsPagination: postsResponse
    }
  }
};
