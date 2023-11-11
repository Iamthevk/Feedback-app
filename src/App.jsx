import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDeleteItem={deleteFeedback} />
        </div>
      </div>
    </>
  );
}

export default App;
