import { Dispatch, SetStateAction } from "react";
import { SaleCardProps } from "../SaleCard/SaleCard.types";

export interface SaleScreenEditProps {
  cardsData: Array<SaleCardProps>;
  setCardsData: Dispatch<SetStateAction<Array<SaleCardProps>>>;
}
