import { observer } from "mobx-react-lite";
import { h } from "preact";
import { Link } from "preact-router/match";
import Styled from "./styled";
import RootStore from "@/app/ViewModel";

const Home = observer(
  (): JSX.Element => (
    <Styled>
      <div className="container">
        <p className="title">Сценарии</p>
        <div className="scenariosContainer">
          <Link
            href="/mobile"
            onClick={RootStore.setAuth}
            className="scenarioCard"
          >
            Из приложения
          </Link>
          <Link href="/main" className="scenarioCard">
            Для новых клиентов
          </Link>
        </div>
      </div>
    </Styled>
  )
);

export default Home;
