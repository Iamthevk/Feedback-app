import Button from "../shared/Button";
import Card from "../shared/Card";
import { useState } from "react";
const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleUserInput = (e) => setText(e.target.value);
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us</h2>
        <div>
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleUserInput}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
