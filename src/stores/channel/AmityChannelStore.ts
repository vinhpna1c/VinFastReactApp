import { makeObservable, observable } from "mobx";

class AmityChannelStore {
    channels: Amity.Channel[] = [];
    constructor() {
        makeObservable(this, {
            channels: observable
        })
    }

    // addReel=(newReel:Reel)=>{
    //     if(this.reels.findIndex((r)=>r.id==newReel.id)<0)
    //     {
    //         console.log(newReel.metaData)
    //         this.reels.push(newReel);
            
    //     }
    // }
}


export default AmityChannelStore;