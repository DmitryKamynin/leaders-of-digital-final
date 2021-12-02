import { observer } from "mobx-react-lite";

import { Link } from "preact-router/match";

import Styled from "./styled";
import Store from "../../../ViewModel";

import ArrowIcon from "./Assets/arrowIcon.png";
import VtbChatIcon from "./Assets/vtbChatIcon.png";
import SearchIcon from "./Assets/searchIcon.png";
import PhotoIcon from "./Assets/photoIcon.png";

const Chat = observer(
  (): JSX.Element => (
    <Styled chatOpen={Store.chatOpen}>
      <div className="chatControl">
        <button type="button" onClick={Store.handleChat} className="icon">
          <img src={ArrowIcon} alt="" />
        </button>
        <div className="icon">
          <img src={VtbChatIcon} alt="" />
        </div>
        <div className="name">Помощник ВТБ</div>
        <div className="icon">
          <img src={SearchIcon} alt="" />
        </div>
      </div>

      <div className="chatContainer">
        <div className="name">Помощник ВТБ</div>
        <div className="messagesContainer">
          {Store.messages.map(({ from, message, link, linkText }) => (
            <>
              {from === "VTB" ? (
                <div className="vtbMessage">
                  <div className="icon">
                    <img src={VtbChatIcon} alt="" />
                  </div>
                  <div className="message">
                    {message}
                    {link && linkText && (
                      <Link onClick={Store.resetDefault} href={link}>
                        {linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className="myMessage">
                  <div className="message">{message}</div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      <div className="controller">
        <div className="variantsContainer">
          <button
            type="button"
            onClick={(): void => {
              Store.sendMessage("Привет");
            }}
            className="variant"
          >
            Привет
          </button>
          <button
            type="button"
            onClick={(): void => {
              Store.sendMessage("Пока");
            }}
            className="variant"
          >
            Пока
          </button>
          <button
            type="button"
            onClick={(): void => {
              Store.sendMessage("Оформить кредит");
            }}
            className="variant"
          >
            Оформить кредит
          </button>
        </div>

        <input type="text" />

        <div className="icon">
          <img src={PhotoIcon} alt="" />
        </div>
      </div>
    </Styled>
  )
);

export default Chat;
