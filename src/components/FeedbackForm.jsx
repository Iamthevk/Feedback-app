import Button from "../shared/Button";
import Card from "../shared/Card";
import { useState } from "react";
import SelectRating from "./SelectRating";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleUserInput = (e) => {
    e.preventDefault();
    if (text === "") {
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 chracters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  console.log(rating);
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        <SelectRating select={(rating) => setRating(rating)} />
        <div>
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleUserInput}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
