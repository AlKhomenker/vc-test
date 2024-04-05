import { Outlet } from "react-router-dom";
import { ErrorTost } from "./commons/components/errorTost";

export const Root = () => {
  return (
    <div>
      <ErrorTost />
      <Outlet />
    </div>
  );
};
