import { types } from "mobx-state-tree";

const RootStoreModel = types.model({
  isAuth: types.boolean,
});

export default RootStoreModel;
