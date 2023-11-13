import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
const FeedbackItem = ({ item, handleDeleteItem, handleEditItem }) => {
  const { id, text, rating } = item;
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="red" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="gray" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
