import styles from "./Message.module.css";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface Props {
  type: string;
  content: {
    text: string;
    time: Date;
  };
}

const Message: React.FC<Props> = (props) => {
  const messageStyling = `${styles["container"]} ${
    props.type === "sender" ? styles["sender"] : styles["receiver"]
  }`;

  const timeStyling = `${styles["time"]} ${
    props.type === "sender" ? styles["sent-time"] : styles["received-time"]
  }`;

  const time = props.content.time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateString = props.content.time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });

  const formattedDate = `${time}, ${dateString}`;

  return (
    <>
      <Card className={messageStyling}>
        <Typography variant="body2" gutterBottom>
          {props.content.text}
        </Typography>
      </Card>
      <Typography variant="body2" gutterBottom className={timeStyling}>
        {formattedDate}
      </Typography>
    </>
  );
};

export default Message;
