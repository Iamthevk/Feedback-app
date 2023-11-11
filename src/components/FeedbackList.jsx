import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback, handleDeleteItem }) => {
  return (
    <div className="feedback-list">
      {feedback.length === 0 ? (
        <p style={{ fontSize: "30px" }}>No Feedback Yet</p>
      ) : (
        feedback?.map((item) => {
          return (
            <FeedbackItem
              key={item.id}
              item={item}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })
      )}
    </div>
  );
};

export default FeedbackList;
