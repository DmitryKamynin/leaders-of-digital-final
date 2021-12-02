import RouterApp from "@/router/router.app";
import { h } from "preact";
import StyledProvider from "@/UI/Global";
import { observer } from "mobx-react-lite";

const App = observer((): JSX.Element => {
  return (
    <>
      <StyledProvider />
      <RouterApp />
    </>
  );
});

export default App;
