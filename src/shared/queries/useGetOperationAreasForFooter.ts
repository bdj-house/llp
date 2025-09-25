import { sanityClient } from '@/sanity/lib/client';
import { operationAreasForFooterQuery } from '@/sanity/queries';
import { OperationArea } from '@/sanity/types/schema';
import { useQuery } from '@tanstack/react-query';

export const useGetOperationAreasForFooter = () => {
  return useQuery<OperationArea[]>({
    queryKey: ['operationAreas'],
    queryFn: () => sanityClient.fetch(operationAreasForFooterQuery),
    staleTime: 60 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
