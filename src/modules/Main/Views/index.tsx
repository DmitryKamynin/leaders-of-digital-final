// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

const FirstScenarioRouter = (): JSX.Element => (
  <Router history={createHashHistory()}>
    <AsyncRoute
      path="/main"
      getComponent={(): AsyncImport =>
        import("../modules/Home/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/main/private"
      getComponent={(): AsyncImport =>
        import("../modules/PrivateOffice/Views").then((mod) => mod.default)
      }
    />
  </Router>
);

export default FirstScenarioRouter;
