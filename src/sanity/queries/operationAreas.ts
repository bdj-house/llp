export const allOperationAreasQuery = `*[_type == "operationArea"] | order(order asc) {
  _id,
  title,
  category,
  description,
  image,
  content,
  highlight,
  order
}`;

export const highlightedOperationAreasQuery = `*[_type == "operationArea" && highlight == true] | order(order asc) {
  _id,
  title,
  category,
  description,
  image,
  content,
  highlight,
  order
}`;

export const operationAreaByIdQuery = `*[_type == "operationArea" && _id == $id][0] {
  _id,
  title,
  category,
  description,
  image,
  content,
  highlight,
  order
}`;

export const operationAreasForFooterQuery = `*[_type == "operationArea"] | order(order asc) {
  _id,
  title,
  category
}`;
