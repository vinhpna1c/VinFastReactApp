import { createQuery, runQuery, queryPosts, getPost, queryGlobalFeed, getFile, getUser } from '@amityco/ts-sdk';
import AmityFeedStore from '../../stores/feed/AmityFeedStore';

export type PostHandleData = {
  id: string,
  createdAt: string,
  fileUrl: string,
  postedUserId: string,
  dataType: string,
  fileMetaData:Object

};

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

  static getPostById = async (postID: string): Promise<Amity.Post<any>> => {

    return (await getPost(postID)).data;
  }

  getPosts(): void {

  }

  getUserByID=async(userId:string):Promise<Amity.User>=>{
  return (await getUser(userId)).data;
  }

  static getDataFromPost = async (postID: string): Promise<PostHandleData> => {
    let url = "";
    let dataType = "";
    let metaData={};
    const p = await AmityPostController.getPostById(postID);
    //handle types of post here

    if (p.dataType === 'image') {
      const imageFile=(await getFile((p.data as Amity.ContentDataImage).fileId)).data;
      metaData= imageFile.attributes.metadata;
      url =imageFile .fileUrl;

    }
    else if (p.dataType === 'video') {

      const videoFile = await getFile((p.data as Amity.ContentDataVideo).videoFileId.original ?? "");
      metaData= videoFile.data.attributes.metadata;
      url = videoFile.data.fileUrl;
    }
    dataType = p.dataType;
    return {
      id: p.postId,
      createdAt: p.createdAt,
      fileUrl: url,
      postedUserId: p.postedUserId,
      dataType: p.dataType,
      fileMetaData:metaData,
    };
  }


}

export default AmityPostController