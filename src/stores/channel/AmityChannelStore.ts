import { makeObservable, observable } from "mobx";

class AmityChannelStore {
    channels: Amity.Channel[] = [];
    constructor() {
        makeObservable(this, {
            channels: observable
        })
    }
}


export default AmityChannelStore;