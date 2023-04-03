import { makeObservable, observable, action } from 'mobx';
import { connectClient, } from "@amityco/ts-sdk";
import { initAmity } from '../../App';
import AmityPostController from '../controller/amity/amity_post_controller';
class AmityStore {
    client = initAmity();
    authToken = "";

    constructor() {
        makeObservable(this, {
            client: observable,
            authToken:observable,
            
        })

    }

    login(username: string): void {
        const sessionHandler: Amity.SessionHandler = {
            sessionWillRenewAccessToken(renewal) {
                renewal.renew();
            },
        };

        const handleConnect = async (userId: string, displayName: string) => {
            
           const result= await connectClient({ userId, displayName }, sessionHandler);
           
            console.log("Is login: "+result);
        };
        

        handleConnect(username, username).then(()=>{
            const controller= new AmityPostController();
            controller.queryPost();
        });
        
    }
}

export default AmityStore;

