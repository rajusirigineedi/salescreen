import "./SaleCardItem.css";
import { SaleCardItemProps } from "./SaleCardItem.types";

export const SaleCardItem = (props: SaleCardItemProps) => {
  const { imageUrl, actualUrl } = props;

  return (
    <a href={actualUrl ?? ""}>
      <img alt="some" src={imageUrl} />
    </a>
  );
};
