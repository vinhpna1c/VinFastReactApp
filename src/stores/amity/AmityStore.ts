import { makeObservable, observable, action } from 'mobx';
import { connectClient, getFile, } from "@amityco/ts-sdk";
import { initAmity } from '../../../App';
import AmityPostController from '../../controller/amity/amity_post_controller';
class AmityStore {
    client = initAmity();
    authToken = "";
    testData="";
    currentUser='';

    constructor() {
        makeObservable(this, {
            client: observable,
            authToken:observable,
            testData:observable,
            setTestData:action,
            
        })

    }

    setTestData(newData:string){
        this.testData=newData;
    }

    login(username: string): void {
        const sessionHandler: Amity.SessionHandler = {
            sessionWillRenewAccessToken:(renewal)=> {
                console.log("renew");
                renewal.renew();
                
            },
        };

        const handleConnect = async (userId: string, displayName: string) => {
            
           const result= await connectClient({ userId, displayName }, sessionHandler);
           
            console.log("Is login: "+result);
            if(result)
            {
                this.currentUser=username;
            }
        
        };
        

        handleConnect(username, username).then(()=>{
            const controller= new AmityPostController();
            // controller.queryPost();
            // AmityPostController.getPostById("642bc44c689988235717eb7e").then(post=>console.log(post));
            getFile("642bc4466f323b01dd6d7765").then((value)=>console.log(value.data.fileUrl))
            
        });
        
    }
}

export default AmityStore;

