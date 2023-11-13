import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  // console.log(feedback);
  return (
    <FeedbackProvider>
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
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <AboutIcon />
          </div>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
