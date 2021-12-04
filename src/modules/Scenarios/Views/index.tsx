import { observer } from "mobx-react-lite";
import { h } from "preact";
import Styled from "./styled";
import RootStore from "@/app/ViewModel";
import { route } from "preact-router";

const Home = observer(
  (): JSX.Element => (
    <Styled>
      <div className="container">
        <p className="title">Сценарии</p>
        <div className="scenariosContainer">
          <button
            type="button"
            onClick={(): void => {
              RootStore.setAuth();
              route("/mobile");
            }}
            className="scenarioCard"
          >
            Клиент ВТБ из приложения
          </button>
          <button
            type="button"
            className="scenarioCard"
            onClick={(): void => {
              route("/main");
            }}
          >
            Клиент ВТБ Desktop
          </button>
          <button
            type="button"
            className="scenarioCard"
            onClick={(): void => {
              route("/social");
            }}
          >
            Для новых клиентов
          </button>
        </div>
      </div>
    </Styled>
  )
);

export default Home;
