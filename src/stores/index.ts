import { makeObservable, observable } from "mobx";
import AmityStore from "./amity/AmityStore";
import AmityFeedStore from "./feed/AmityFeedStore";
import AmityChannelStore from "./channel/AmityChannelStore";


class RootStore {
  amityFeedStore: AmityFeedStore;
  amityStore: AmityStore;
  amityChannelStore:AmityChannelStore;
  constructor() {
    this.amityFeedStore = new AmityFeedStore();
    this.amityStore = new AmityStore();
    this.amityChannelStore=new AmityChannelStore();
    makeObservable(this, {
      amityFeedStore: observable,
      amityStore: observable,
      amityChannelStore:observable
    })
  }

}

export default RootStore;