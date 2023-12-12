import { SaleCardItemProps } from "../SaleCardItem/SaleCardItem.types";

export interface SaleCardProps {
  marginTop: number;
  type: "block" | "carousel" | "draggable";
  height: number;
  items: Array<SaleCardItemProps>;
}
