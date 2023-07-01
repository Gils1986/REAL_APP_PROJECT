import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardService from "../services/cardService";
import { toast } from "react-toastify";

const CardsDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardService.deleteCard(id);
      toast("The card was deleted");
      navigate("/my-cards");
    };
    deleteCard();
  }, [id, navigate]);

  return null;
};

export default CardsDelete;
