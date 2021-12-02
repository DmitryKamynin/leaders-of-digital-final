import RootStoreModel, { RootStoreModelType, MessageType } from "../Model";
import { applySnapshot, flow } from "mobx-state-tree";

const defaultState: RootStoreModelType = {
  messages: [
    {
      from: "VTB",
      message: "Здравствуйте, чем я могу вам помочь?",
    },
  ],
  chatOpen: false,
  hasMessage: false,
};

const Store = RootStoreModel.actions((self) => ({
  sendMessage(text: string): void {
    if (text.length) {
      const message: MessageType = {
        from: "ME",
        message: text,
      };
      self.messages.push(message);
    }
  },
  getMessage: (): void => {
    const message: MessageType = {
      from: "VTB",
      message:
        "Уважаемая Ирина Федоровна,\n" +
        'Вам полагается новая льгота по государственной программе "Социальной Цифровизации", которую вы можете оформить в приложении или на сайте банка "ВТБ" в личном кабинете без посещения государсвтенных учреждений.\n' +
        "Для получения более подробной информации перейдите по ",
      link: "/",
      linkText: "ссылкe.",
    };
    self.hasMessage = true;
    self.messages.push(message);
  },
  handleChat(): void {
    self.hasMessage = false;
    self.chatOpen = !self.chatOpen;
  },
  resetDefault(): void {
    applySnapshot(self, defaultState);
  },
})).create(defaultState);

export default Store;
