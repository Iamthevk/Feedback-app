import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }
  return (
    <>
      <div>
        <Header />
        <FeedbackList feedback={feedback} handleDeleteItem={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
