// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";

const FirstScenarioRouter = (): JSX.Element => (
  <Router>
    <AsyncRoute
      path="/main"
      getComponent={(): AsyncImport =>
        import("../modules/Home/Views").then((mod) => mod.default)
      }
    />
  </Router>
);

export default FirstScenarioRouter;
