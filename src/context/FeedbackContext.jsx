import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
