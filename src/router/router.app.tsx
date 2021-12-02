// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

import MobileRouter from "@/modules/Mobile/Views";
import MainRouter from "@/modules/Main/Views";

const RouterApp = (): JSX.Element => (
  <Router history={createHashHistory()}>
    <AsyncRoute
      path="/"
      getComponent={(): AsyncImport =>
        import("@/modules/Scenarios/Views").then((mod) => mod.default)
      }
    />

    <MobileRouter path="/mobile/:rest*" />
    <MainRouter path="/main/:rest*" />
  </Router>
);

export default RouterApp;
