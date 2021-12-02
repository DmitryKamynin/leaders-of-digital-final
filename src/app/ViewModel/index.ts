import RootStoreModel from "@/app/Model";
import { applySnapshot } from "mobx-state-tree";

const defaultState = {
  isAuth: false,
};

const RootStore = RootStoreModel.actions((self) => ({
  setAuth(): void {
    self.isAuth = true;
  },
  resetDefault(): void {
    applySnapshot(self, defaultState);
  },
})).create(defaultState);

export default RootStore;
