import { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  hasNextPage: boolean;
  isLoading: boolean;
  fetchNextPage: () => void;
}

export const useLazyLoadArticles = ({ hasNextPage, isLoading, fetchNextPage }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '100px',
  });

  const hasFetched = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const debouncedFetch = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (inView && hasNextPage && !isLoading && !hasFetched.current) {
        hasFetched.current = true;
        fetchNextPage();

        setTimeout(() => {
          hasFetched.current = false;
        }, 1000);
      }
    }, 300);
  }, [inView, hasNextPage, isLoading, fetchNextPage]);

  useEffect(() => {
    debouncedFetch();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedFetch]);

  return { ref };
};
