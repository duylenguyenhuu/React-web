import { FC } from "react";

import "./styles.scss";

interface ICardItemProps {
  onClick: () => void;
}
export const CardItem: FC<ICardItemProps> = ({ onClick }) => {
  return (
    <div className="card-item">
      <p>Item</p>
      <button onClick={onClick}>Add to Cart</button>
    </div>
  );
};
