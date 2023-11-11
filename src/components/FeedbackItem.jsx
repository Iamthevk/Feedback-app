import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";
const FeedbackItem = ({ item, handleDeleteItem }) => {
  const { id, text, rating } = item;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => handleDeleteItem(id)} className="close">
        <FaTimes color="red" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
