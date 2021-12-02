// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

import FirstScenarioRouter from "@/modules/Mobile/Views";
import Main from "@/modules/Main/Views";

const RouterApp = (): JSX.Element => (
  <Router history={createHashHistory()}>
    <AsyncRoute
      path="/"
      getComponent={(): AsyncImport =>
        import("@/modules/Scenarios/Views").then((mod) => mod.default)
      }
    />

    <FirstScenarioRouter path="/mobile/:rest*" />
    <Main path="/main/:rest*" />
  </Router>
);

export default RouterApp;
