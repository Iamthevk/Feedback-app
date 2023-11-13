import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackList = () => {
  const { deleteFeedback, feedback, editFeedback } =
    useContext(FeedbackContext);
  return (
    <div className="feedback-list">
      {feedback.length === 0 ? (
        <p style={{ fontSize: "30px" }}>No Feedback Yet</p>
      ) : (
        <AnimatePresence>
          {feedback?.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FeedbackItem item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FeedbackList;
