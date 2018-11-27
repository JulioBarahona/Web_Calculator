/*
  Julio Barahona M
  141206
  Sistemas y tecnologias web
  Seccion 10
  Lab 8
*/

//checks that the number only contains numbers
export default function Number (item) {
  return !!item.match(/[0-9]+/);
}
