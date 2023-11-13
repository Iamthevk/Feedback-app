import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  function deleteFeedback(id) {
    setFeedback(feedback.filter((item) => item.id !== id));
  }
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
  console.log(feedback);
  return (
    <>
      <Router>
        <div style={{ position: "relative" }}>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm handleAddFb={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList
                      feedback={feedback}
                      handleDeleteItem={deleteFeedback}
                    />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AboutIcon />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
