export const aboutQuery = `*[_id == "aboutPage"][0]{
  _id,
  title,
  subtitle,
  description,
  associates[]->{
    _id,
    name,
    role,
    description,
    graduation,
    history,
    email,
    linkedin,
    whatsapp,
    order,
    active,
    "imageCover": imageCover.asset->url,
    "imageProfile": imageProfile.asset->url,
  }
}`;
