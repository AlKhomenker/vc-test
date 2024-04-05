import { Typography } from "@mui/material";
import { WrappedBox } from "./styledComponents";
import { I_Card } from "../../interfaces/card";

export const Card = ({ title }: I_Card) => {
  return (
    <WrappedBox>
      <Typography>{title}</Typography>
    </WrappedBox>
  );
};
