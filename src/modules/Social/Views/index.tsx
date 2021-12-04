// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

const SocialRouter = (): JSX.Element => (
  <Router>
    <AsyncRoute
      path="/social/private/:rest*"
      getComponent={(): AsyncImport =>
        import("../modules/ApplyBenefit/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/:rest*"
      getComponent={(): AsyncImport =>
        import("../modules/Register/Views").then((mod) => mod.default)
      }
    />
  </Router>
);

export default SocialRouter;
