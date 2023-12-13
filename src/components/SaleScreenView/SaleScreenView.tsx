import React from "react";
import { SaleScreenViewProps } from "./SaleScreenView.types";
import "./SaleScreenView.css";
import { SaleCard } from "../SaleCard/SaleCard";

export const SaleScreenView = (props: SaleScreenViewProps) => {
  const { cardsData } = props;
  return (
    <div>
      {cardsData.map((card) => (
        <SaleCard {...card} />
      ))}
    </div>
  );
};
