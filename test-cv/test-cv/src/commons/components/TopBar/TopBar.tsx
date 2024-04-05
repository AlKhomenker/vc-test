import { Typography } from "@mui/material";
import { CustomLink, WrappedBox } from "./styledComponents";
import { TopBarPaths } from "./utils";

export const TopBar = () => {
  return (
    <WrappedBox>
      <Typography variant="h6">CV-test</Typography>
      <div>
        {TopBarPaths.map((item) => (
          <CustomLink key={item.path} to={item.path}>
            {item.title}
          </CustomLink>
        ))}
      </div>
    </WrappedBox>
  );
};
