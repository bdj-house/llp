import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/sanity/lib/client';
import { siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings } from '@/sanity/types/schema';

export const useGetSettings = () => {
  return useQuery<SiteSettings>({
    queryKey: ['siteSettings'],
    queryFn: () => sanityClient.fetch(siteSettingsQuery),
    staleTime: 60 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
