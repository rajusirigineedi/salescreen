import { SaleScreenEditProps } from "./SaleScreenEdit.types";
import "./SaleScreenEdit.css";
import { SaleScreenView } from "../SaleScreenView/SaleScreenView";

export default function SaleScreenEdit(props: SaleScreenEditProps) {
  const { cardsData, setCardsData } = props;

  const addNewCard = () => {
    setCardsData((prevData) => {
      return [
        ...prevData,
        {
          id: Date.now(),
          ...prevData[1],
        },
      ];
    });
  };

  return (
    <div className="salescreen-edit">
      <div className="preview-pane">
        <SaleScreenView cardsData={cardsData} />
      </div>
      <div className="editor-pane">
        <button onClick={addNewCard}>Add bar</button>
      </div>
    </div>
  );
}
