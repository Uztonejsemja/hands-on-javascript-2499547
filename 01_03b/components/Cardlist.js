import Card from "./Card.js";

const cardlistItem = (imgData) => {
  return `
  <li class="cardlist_item">
  ${Card(imgData)}
  </li>`
};

const Cardlist = (data) => {
  return `
  <section class="cardlist">
    <ul class="cardlist_list">
    ${data.map((imgData) => cardlistItem(imgData)).join("")}
    </ul>
  </section>`
};

export default Cardlist;
