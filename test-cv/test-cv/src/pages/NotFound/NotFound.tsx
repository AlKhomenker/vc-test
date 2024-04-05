import { Typography } from "@mui/material";
import { WrappedBox } from "./styledComponents";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../commons/components/Buttons/styledComponents";

export const NotFound = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <WrappedBox>
      <Typography variant="h4">404 Not Found </Typography>
      <Typography variant="h6">is incorrect url path</Typography>

      <CustomButton onClick={navigateBack}>Go Back</CustomButton>
    </WrappedBox>
  );
};
