import { makeObservable, observable } from "mobx";
import AmityStore from "./amity/AmityStore";
import AmityFeedStore from "./feed/AmityFeedStore";


class RootStore {
  
  amityFeedStore:AmityFeedStore;
    amityStore:AmityStore;
  constructor()
  {
    this.amityFeedStore=new AmityFeedStore();
    this.amityStore=new AmityStore();
    makeObservable(this,{
        amityFeedStore:observable,
        amityStore:observable
    })
  }

}

export default RootStore;