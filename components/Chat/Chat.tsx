import { useState } from "react";

import styles from "./Chat.module.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Message from "./Message";

interface Message {
  text: string;
  time: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue !== "") {
      const currentTime = new Date();

      setMessages((prevMessages: Message[]) => [
        ...prevMessages,
        { text: inputValue, time: currentTime },
      ]);

      setInputValue("");
    }
  };

  return (
    <Box className={styles.container}>
      <Card variant="outlined" className={styles["card"]}>
        <>
          <Typography variant="h6" gutterBottom>
            Question & Answers
          </Typography>
          {messages.map((message: Message, index: number) => (
            <Message
              key={index}
              type={index % 2 ? "receiver" : "sender"}
              content={message}
            />
          ))}
          <form onSubmit={handleFormSubmit}>
            <TextField
              InputProps={{ sx: { height: 50 } }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Ask a question"
              className={styles["input"]}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button
              variant="contained"
              className={styles["button"]}
              type="submit"
            >
              Ask question
            </Button>
          </form>
        </>
      </Card>
    </Box>
  );
};

export default Chat;
