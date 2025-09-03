import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  hasNextPage: boolean;
  isLoading: boolean;
  fetchNextPage: () => void;
}

export const useLazyLoadArticles = ({
  hasNextPage,
  isLoading,
  fetchNextPage,
}: Props) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: false });

  const hasFetched = useRef(false);

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      if (!hasFetched.current) {
        hasFetched.current = true;
        fetchNextPage();
        const timeoutId = setTimeout(() => {
          hasFetched.current = false;
        }, 500);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [inView, hasNextPage, isLoading, fetchNextPage]);

  return { ref };
};
