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
      setTimeout(() => {
        this.getAnswers(text);
      }, 1000);
    }
  },
  getAnswers(text: string): void {
    const message: MessageType = {
      from: "VTB",
      message: "",
    };
    switch (text) {
      case "Как получать льготы на карту":
        message.linkText = "ссылке.";
        message.link = "/social/";
        message.message =
          'Подробную информацию о том, как стать участником сервиса "Социальное казначейство" и получать льготы без сбора бумаг и посещения государственных учреждений можно по ссылке.';
        break;
      case "Привет":
        message.message =
          "Здравствуйте, прямо сейчас мы ищем свободного оператора!";
        break;
      case "Пока":
        message.message = "До свидания!";
        break;
      default:
        message.message = "Извините я вас не понимаю. Переключаю на оператора!";
        break;
    }
    self.messages.push(message);
  },
  getMessage: (): void => {
    const message: MessageType = {
      from: "VTB",
      message:
        'Уважаемая Ирина Федоровна, по данным сервиса "Социальное Казначейство" Вам полагается новая льгота, которую вы можете оформить в приложении или на сайте банка "ВТБ" в личном кабинете без посещения государственных учреждений. Для получения более подробной информации перейдите по ',
      link: "/social/private/start",
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
