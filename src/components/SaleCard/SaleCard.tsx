import "./SaleCard.css";
import { SaleCardProps } from "./SaleCard.types";

export const SaleCard = ({ type = "block", ...props }: SaleCardProps) => {
  const { items, marginTop, height } = props;
  if (type === "block")
    return (
      <div style={{ height, marginTop, backgroundColor: "green" }}>Block</div>
    );
  if (type === "carousel") return <div>Carousal</div>;
  if (type === "draggable") return <div>Draggable</div>;
  return <div>No Content</div>;
};
