import httpService from "./httpService";

export function createCard(card) {
  return httpService.post("/cards", card);
}

export function getAllCards() {
  return httpService.get("/cards");
}

export function getCard(id) {
  return httpService.get(`/cards/${id}`);
}

export function updateCard(id, cardsUpdate) {
  return httpService.put(`/cards/${id}`, cardsUpdate);
}

export function deleteCard(id) {
  return httpService.delete(`/cards/${id}`);
}

const cardService = {
  createCard,
  getAllCards,
  getCard,
  updateCard,
  deleteCard,
};

export default cardService;
