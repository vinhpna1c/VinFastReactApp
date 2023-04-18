import { } from '@amityco/ts-sdk';
import { makeObservable, observable } from 'mobx';


type Reel = {
    id: string,
    createdAt: string,
    uri: string,
    postedUserId: string,
    dataType: string,
    displayName:string,
    avatarUrl:string,
    metaData:Object

}
class AmityFeedStore {
    posts: Amity.Post[] = [];

    reels: Reel[]=[];

    constructor() {
        makeObservable(this, {
            posts: observable
        })
    }

    addReel=(newReel:Reel)=>{
        if(this.reels.findIndex((r)=>r.id==newReel.id)<0)
        {
            console.log(newReel.metaData)
            this.reels.push(newReel);
            
        }
    }
}

export default AmityFeedStore;