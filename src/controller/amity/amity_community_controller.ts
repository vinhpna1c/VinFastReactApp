
import { createQuery, runQuery, joinCommunity, leaveCommunity } from '@amityco/ts-sdk';
class AmityCommunityController{
    constructor(){}
     joinCommunity(communityID:string):boolean{
        const query = createQuery(joinCommunity, communityID);
         let result :boolean=false;
        runQuery(query, ({ data: isJoined })=>{
            if (typeof isJoined !=='undefined'){
                result=isJoined;
            }
        });
        return result
    }
    leftCommunity(communityID:string):boolean{
        const query = createQuery(leaveCommunity, communityID);
         let result :boolean=false;
        runQuery(query, ({ data: isJoined })=>{
            if (typeof isJoined !=='undefined'){
                result=isJoined;
            }
        });
        return result
    }

}