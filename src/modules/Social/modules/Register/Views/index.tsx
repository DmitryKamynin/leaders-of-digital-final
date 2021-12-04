// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { createHashHistory } from "history";

const SocialRouter = (): JSX.Element => (
  <Router history={createHashHistory()}>
    <AsyncRoute
      path="/social"
      getComponent={(): AsyncImport =>
        import("./modules/Landing/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/information"
      getComponent={(): AsyncImport =>
        import("./modules/Information/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/personal"
      getComponent={(): AsyncImport =>
        import("./modules/PersonalData/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/gosuslugi"
      getComponent={(): AsyncImport =>
        import("./modules/Gosuslugi/Views").then((mod) => mod.default)
      }
    />
    <AsyncRoute
      path="/social/thanks"
      getComponent={(): AsyncImport =>
        import("./modules/ThanksPage/Views").then((mod) => mod.default)
      }
    />
  </Router>
);

export default SocialRouter;
