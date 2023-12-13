import { SaleCardProps } from "../SaleCard/SaleCard.types";
import "./SaleCardItem.css";
import { SaleCardItemProps } from "./SaleCardItem.types";

export const SaleCardItem = (
  props: SaleCardItemProps & { type: SaleCardProps["type"] } & {
    height?: number;
  }
) => {
  const { imageUrl, actualUrl, type, height } = props;

  return (
    <div
      className={`salecarditem-container ${type}`}
      style={{ height }}
      onClick={() => console.log(actualUrl)}
    >
      <img className="salecarditem-image" alt="some" src={imageUrl} />
    </div>
  );
};
