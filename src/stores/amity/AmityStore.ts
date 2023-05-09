import { makeObservable, observable, action } from 'mobx';
import { Client, FileRepository, UserRepository } from "@amityco/ts-sdk";
import { initAmity } from '../../../App';
import AmityPostController from '../../controller/amity/amity_post_controller';
class AmityStore {
    client = initAmity();
    authToken = "";
    testData = "";
    currentuserID = '';
    currentUser: Amity.User = {
        _id: '',
        userId: '',
        flagCount: 0,
        hashFlag: {
            bits: 0,
            hashes: 0,
            hash: ''
        },
        roles:[],
        permissions:[],
        createdAt:'',
        path:''

    };


    constructor() {
        makeObservable(this, {
            currentuserID: observable,
            client: observable,
            authToken: observable,
            testData: observable,
            setTestData: action,
            currentUser: observable,

        })

    }

    setTestData(newData: string) {
        this.testData = newData;
    }

    login(username: string): void {
        const sessionHandler: Amity.SessionHandler = {
            sessionWillRenewAccessToken: (renewal) => {
                console.log("renew");
                renewal.renew();

            },
        };

        const handleConnect = async (userId: string, displayName: string) => {

            const result = await Client.login({ userId, displayName }, sessionHandler);

            console.log("Is login: " + result);
            if (result) {
                console.info("LOG IN SUCCESSFULLY WITH ACCOUNT " + username)
                this.currentuserID = username;
                
                // this.currentUser = UserRepository.getUser()
                console.info('Current user data: ' + JSON.stringify(this.currentUser))
            }


        };


        handleConnect(username, username).then(() => {
            const controller = new AmityPostController();
            // controller.queryPost();
            // AmityPostController.getPostById("642bc44c689988235717eb7e").then(post=>console.log(post));
           FileRepository. getFile("642bc4466f323b01dd6d7765").then((value) => console.log(value.data.fileUrl))

        });

    }
}

export default AmityStore;

function connectClient(arg0: { userId: string; displayName: string; }, sessionHandler: Amity.SessionHandler) {
    throw new Error('Function not implemented.');
}

