import { Outlet } from "react-router-dom";
import { TopBar } from "../../commons/components/TopBar/TopBar";
import { Page, WrappedBox } from "./styledComponents";

export const Root = () => {
  return (
    <WrappedBox>
      <TopBar />
      <Page>
        <Outlet />
      </Page>
    </WrappedBox>
  );
};
