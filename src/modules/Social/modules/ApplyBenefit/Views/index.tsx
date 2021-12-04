// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

const SocialRouter = (): JSX.Element => (
  <Router history={createHashHistory()}>
    <AsyncRoute
      path="/social/private/start"
      getComponent={(): AsyncImport =>
        import("./modules/FirstStep/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/private/end"
      getComponent={(): AsyncImport =>
        import("./modules/SecondsStep/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/private/thanks"
      getComponent={(): AsyncImport =>
        import("./modules/ThanksPage/Views").then((mod) => mod.default)
      }
    />
  </Router>
);

export default SocialRouter;
