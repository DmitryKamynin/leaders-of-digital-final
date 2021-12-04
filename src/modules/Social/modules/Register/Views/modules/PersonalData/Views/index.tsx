import Styled from "./styled";
import Header from "@/UI/Header";
import Button from "@/UI/Button";
import { route } from "preact-router";
import Checkbox from "@/UI/Checkbox";
import { useState } from "preact/compat";
import Modal from "./widgets/Modal";

const Information = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState<Array<boolean | "await">>([
    false,
    false,
    false,
  ]);

  const setCheckbox = (index: number): void => {
    const newState = [...checkboxes];
    if (!newState[index]) {
      if (!modal) {
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 3000);
      }

      newState[index] = "await";
    } else if (newState[index] === "await") newState[index] = true;
    setCheckboxes(newState);
  };

  return (
    <>
      <Header />
      {modal && <Modal />}

      <Styled>
        <div className="title">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</div>
        <div>
          Данные, которыми вы делитесь с банком, являются персональными и
          защищены законом РФ. Эти данные предназначены только для оказания Вам
          государственной услуги, они никогда не будут переданы 3 лицам.
        </div>
        <div className="document">
          <div className="checkbox">
            <Checkbox
              onClick={(): void => {
                if (!checkboxes[0]) setCheckbox(0);
              }}
              state={checkboxes[0]}
            />{" "}
            Я даю согласие на &quot;Условие номер 1, при клике по которому
            открывается документ&quot;
          </div>
          {checkboxes[0] === "await" && (
            <>
              <input
                placeholder="КОД ИЗ СМС"
                onInput={(e): void => {
                  if (
                    e.target instanceof HTMLInputElement &&
                    e.target.value.length === 4
                  ) {
                    setCheckbox(0);
                  }
                }}
              />{" "}
              <span>ВЫСЛАТЬ СМС ЕЩЁ РАЗ</span>
            </>
          )}
        </div>
        <div className="document">
          <div className="checkbox">
            <Checkbox
              onClick={(): void => {
                if (!checkboxes[1]) setCheckbox(1);
              }}
              state={checkboxes[1]}
            />{" "}
            Я даю согласие на &quot;Условие номер 2, при клике по которому
            открывается документ&quot;
          </div>
          {checkboxes[1] === "await" && (
            <>
              <input
                placeholder="КОД ИЗ СМС"
                onInput={(e): void => {
                  if (
                    e.target instanceof HTMLInputElement &&
                    e.target.value.length === 4
                  ) {
                    setCheckbox(1);
                  }
                }}
              />{" "}
              <span>ВЫСЛАТЬ СМС ЕЩЁ РАЗ</span>
            </>
          )}
        </div>
        <div className="document margin">
          <div className="checkbox">
            <Checkbox
              onClick={(): void => {
                if (!checkboxes[2]) setCheckbox(2);
              }}
              state={checkboxes[2]}
            />{" "}
            Я даю согласие на &quot;Условие номер 3, при клике по которому
            открывается документ&quot;
          </div>
          {checkboxes[2] === "await" && (
            <>
              <input
                placeholder="КОД ИЗ СМС"
                onInput={(e): void => {
                  if (
                    e.target instanceof HTMLInputElement &&
                    e.target.value.length === 4
                  ) {
                    setCheckbox(2);
                  }
                }}
              />{" "}
              <span>ВЫСЛАТЬ СМС ЕЩЁ РАЗ</span>
            </>
          )}
        </div>
        <Button
          disabled={checkboxes.includes(false) || checkboxes.includes("await")}
          callback={(): void => {
            route("/social/gosuslugi", true);
          }}
          variant="blue"
        >
          Далее
        </Button>
      </Styled>
    </>
  );
};

export default Information;
