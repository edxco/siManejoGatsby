import React, { ReactNode, useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

const MainContainer = styled.div(() => ({
  maxWidth: "300px",
  minWidth: "300px",
  margin: 0,
  padding: 0,
}));

const CustomAccordionMain = styled(MuiAccordion)(() => ({
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled(MuiAccordionSummary)(() => ({
  backgroundColor: "transparent",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
  marginLeft: "18px",
}));

interface ICustomAccordion {
  children: ReactNode;
  title: string;
}

const CustomAccordion = (props: ICustomAccordion) => {
  const [expanded, setExpanded] = useState<string | false>("other");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <MainContainer>
      <CustomAccordionMain
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
      >
        <CustomAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={
            <ArrowForwardIosSharpIcon
              sx={{
                fontSize: "0.9rem",
                color: "white",
                stroke: "white",
                strokeWidth: "2",
              }}
            />
          }
        >
          <Typography color="white" variant="h6" fontWeight={900}>
            {props.title}
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>{props.children}</CustomAccordionDetails>
      </CustomAccordionMain>
    </MainContainer>
  );
};

export default CustomAccordion;
