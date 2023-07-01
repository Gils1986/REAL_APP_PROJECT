import { useEffect, useState } from "react";
import cardService from "../services/cardService";
import { useAuth } from "../context/auth.context";

export const useMyCards = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const { data } = await cardService.getAllCards();
        setCards(data);
      } catch ({ response }) {
        return cards;
      }
    };
    getCards();
    if (user?.biz) {
      getCards();
    }
  }, []);

  return cards;
};

export default useMyCards;
