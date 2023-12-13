import { SaleCardItem } from "../SaleCardItem/SaleCardItem";
import "./SaleCard.css";
import { SaleCardProps } from "./SaleCard.types";

export const SaleCard = (props: SaleCardProps) => {
  const { type } = props;
  if (type === "block") return <BlockSaleCard {...props} />;
  if (type === "carousel") return <CarouselSaleCard {...props} />;
  if (type === "draggable") return <DraggableSaleCard {...props} />;
  return null;
};

const BlockSaleCard = ({ items, marginTop, ...props }: SaleCardProps) => {
  const { height } = props;

  return (
    <div
      className="salecard"
      style={{
        height,
        marginTop,
      }}
    >
      {items.map((item) => (
        <SaleCardItem key={item.id} {...item} {...props} />
      ))}
    </div>
  );
};

const CarouselSaleCard = ({ items, marginTop, ...props }: SaleCardProps) => {
  const { height } = props;

  return (
    <div
      className="salecard carousel"
      style={{
        height,
        marginTop,
      }}
    >
      {items.map((item) => (
        <SaleCardItem key={item.id} {...item} {...props} />
      ))}
    </div>
  );
};

const DraggableSaleCard = ({ items, marginTop, ...props }: SaleCardProps) => {
  const { height } = props;

  return (
    <div
      className="salecard draggable"
      style={{
        height,
        marginTop,
      }}
    >
      {items.map((item) => (
        <SaleCardItem key={item.id} {...item} {...props} />
      ))}
    </div>
  );
};
