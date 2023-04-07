import { createQuery, runQuery, queryPosts, getPost, queryGlobalFeed, getFile } from '@amityco/ts-sdk';
import AmityFeedStore from '../../store/feed/AmityFeedStore';

export type PostHandleData=[string,string];

enum FileTypes {
  VIDEO,
  IMAGE
}

class AmityPostController {
  constructor() { }
  queryPost = (): void => {
    const query = createQuery(queryPosts, {
      targetType: 'community',
      targetId: '6421189a26c865bf2b479299',
      feedType: 'published',
    });

    runQuery(query, ({ data: posts, ...options }) => console.log(posts, options));
  }
  
  queryGlobalFeed(postList: Amity.Post[]) {
  


  }

  static getPostById =async(postID:string):Promise<Amity.Post<any>>=>
  {
     
    return (await getPost(postID)).data;
  }

  getPosts(): void {

  }

static  getUrlFromPost=async(postID:string):Promise<PostHandleData>=>{
    let url="";
    let dataType="";
    const p = await AmityPostController.getPostById(postID);
    //handle types of post here

    if (p.dataType === 'image') {
       url = (await getFile((p.data as Amity.ContentDataImage).fileId)).data.fileUrl;
        
    }
    else if (p.dataType === 'video') {

      const videoFile = await getFile((p.data as Amity.ContentDataVideo).videoFileId.original??"");
      url= videoFile.data.fileUrl;
    }
    dataType=p.dataType;
    return [url,dataType];
  }


}

export default AmityPostController