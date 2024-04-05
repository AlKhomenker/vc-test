import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const WrappedBox = styled("div")({
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#2196f3",
});

export const CustomLink = styled(NavLink)({
  marginLeft: "20px",
  color: "white",
  textDecoration: "none",
  opacity: 1,
  "&:hover": {
    textDecoration: "underline",
  },
  "&:active": {
    textDecoration: "underline",
  },
});
