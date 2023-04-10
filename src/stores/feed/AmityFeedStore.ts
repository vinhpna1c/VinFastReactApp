import { } from '@amityco/ts-sdk';
import { makeObservable, observable } from 'mobx';
class AmityFeedStore {
    posts: Amity.Post[] = [];
    constructor() {
        makeObservable(this, {
            posts: observable
        })
    }
}

export default AmityFeedStore;