import { observer } from "mobx-react-lite";

import { route } from "preact-router";

import Styled from "./styled";
import Store from "../../../ViewModel";

import ArrowIcon from "./Assets/arrowIcon.png";
import VtbChatIcon from "./Assets/vtbChatIcon.png";
import SearchIcon from "./Assets/searchIcon.png";
import PhotoIcon from "./Assets/photoIcon.png";
import { useEffect, useRef, useState } from "preact/compat";

const Chat = observer((): JSX.Element => {
  const [message, setMessage] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [Store.messages.length]);

  return (
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

      <div className="chatContainer" ref={ref}>
        <div className="name">Помощник ВТБ</div>
        <div className="messagesContainer">
          {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
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
                      <button
                        type="button"
                        onClick={(): void => {
                          Store.resetDefault();
                          route(link, true);
                        }}
                      >
                        {linkText}
                      </button>
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
              Store.sendMessage("Как получать льготы на карту");
            }}
            className="variant"
          >
            Как получать льготы на карту
          </button>
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
        </div>

        <form
          onSubmit={(e): void => {
            e.preventDefault();
            if (message) {
              Store.sendMessage(message);
            }
          }}
        >
          <input
            type="text"
            value={message}
            onInput={(e): void => {
              if (e.target instanceof HTMLInputElement) {
                setMessage(e.target.value);
              }
            }}
          />
        </form>

        <div className="icon">
          <img src={PhotoIcon} alt="" />
        </div>
      </div>
    </Styled>
  );
});

export default Chat;
