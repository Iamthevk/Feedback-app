import FeedbackData from "../data/FeedbackData";
import FeedbackItem from "./FeedbackItem";
const FeedbackList = () => {
  return (
    <div className="feedback-list">
      {FeedbackData.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default FeedbackList;
