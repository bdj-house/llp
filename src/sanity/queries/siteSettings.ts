export const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  _id,
  siteName,
  email,
  phone,
  businessHours,
  address,
  social,
  seo{
    title,
    description,
    keywords,
    "openGraphImage": openGraphImage.asset->url,
  },
  googleMapUrl,
}`;
