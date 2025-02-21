import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { LuDot } from "react-icons/lu";
import { List, Divider, Link, Box } from "@mui/material";
import CustomizedListItem from "./CustomizedListItem";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        defaultExpanded
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span" variant="h4">
            Main Features:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <CustomizedListItem text={"Easy book search by author or title"} />
            <Divider />
            <CustomizedListItem
              text={"The ability to add books to favorites"}
            />
            <Divider />
            <CustomizedListItem
              text={
                "Support for dark and light themes for comfortable reading."
              }
            />
            <Divider />
            <CustomizedListItem
              text={"The ability to add books randomly or from the server"}
            />
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span" variant="h4">
            Technologies:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomizedListItem text={"React + JavaScript"} />
          <CustomizedListItem text={"Redux Toolkit"} />
          <CustomizedListItem text={"Axios"} />
          <CustomizedListItem text={"React router dom"} />
          <CustomizedListItem
            text={"Material UI + React toastify + React-icons"}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span" variant="h4">
            About the Author:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LuDot style={{ width: "32px", height: "32px", margin: "5px" }} />
            <Link
              href="https://github.com/Nikita-a11y-dev"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "primary.main",
              }}
            >
              GitHub
            </Link>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
