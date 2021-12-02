import { types, SnapshotIn } from "mobx-state-tree";

const Message = types.model({
  from: types.union(types.literal("VTB"), types.literal("ME")),
  message: types.string,
  link: types.maybe(types.string),
  linkText: types.maybe(types.string),
});

const RootStoreModel = types.model({
  messages: types.array(Message),
  chatOpen: types.boolean,
  hasMessage: types.boolean,
});

export type RootStoreModelType = SnapshotIn<typeof RootStoreModel>;
export type MessageType = SnapshotIn<typeof Message>;

export default RootStoreModel;
