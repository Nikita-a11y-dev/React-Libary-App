import { ListItem, ListItemText, Typography, Divider } from "@mui/material";
import { LuDot } from "react-icons/lu";

const CustomizedListItem = ({ text }) => (
  <>
    <ListItem>
      <LuDot style={{ width: "32px", height: "32px", margin: "5px" }} />
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ fontSize: "20px" }}>
            {text}
          </Typography>
        }
      />
    </ListItem>
  </>
);

export default CustomizedListItem;
