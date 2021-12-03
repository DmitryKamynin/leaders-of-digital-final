// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

const SocialRouter = (): JSX.Element => (
  <Router>
    <AsyncRoute
      path="/social"
      getComponent={(): AsyncImport =>
        import("./modules/Landing/Views").then((mod) => mod.default)
      }
    />
  </Router>
);

export default SocialRouter;
