import { createQuery, runQuery, queryPosts, getPost, queryGlobalFeed, getFile, getUser, PostContentType, getActiveClient, createPost, createImage, createVideo } from '@amityco/ts-sdk';
import AmityFeedStore from '../../stores/feed/AmityFeedStore';
import { handleStringArrFromObject, uriToBlob } from '../../utils/utils';

export type PostHandleData = {
  id: string,
  createdAt: string,
  fileUrl: string,
  postedUserId: string,
  dataType: string,
  fileMetaData: Object

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

  getUserByID = async (userId: string): Promise<Amity.User> => {
    return (await getUser(userId)).data;
  }

  static getDataFromPost = async (postID: string): Promise<PostHandleData> => {
    let url = "";
    let dataType = "";
    let metaData = {};
    const p = await AmityPostController.getPostById(postID);
    //handle types of post here

    if (p.dataType === 'image') {
      const imageFile = (await getFile((p.data as Amity.ContentDataImage).fileId)).data;
      metaData = imageFile.attributes.metadata;
      url = imageFile.fileUrl;

    }
    else if (p.dataType === 'video') {

      const videoFile = await getFile((p.data as Amity.ContentDataVideo).videoFileId.original ?? "");
      metaData = videoFile.data.attributes.metadata;
      url = videoFile.data.fileUrl;
    }
    dataType = p.dataType;
    return {
      id: p.postId,
      createdAt: p.createdAt,
      fileUrl: url,
      postedUserId: p.postedUserId,
      dataType: p.dataType,
      fileMetaData: metaData,
    };
  }

  static createBlobFormData = async (filePaths: string[]) => {
    const formData = new FormData();
    if (filePaths.length == 0) {
      return undefined;
    }
    const paths=handleStringArrFromObject(filePaths);
    console.log(filePaths.length);
    // for(let i =0; i<filePaths.length;i++){
      
    // }
    formData.append("files",filePaths[0]);
    console.log("Form data:" + JSON.stringify(formData))

    return formData;
  }

  static uploadImagesToAmity = async (filePaths: string[]) => {

    const imageBlobs = await this.createBlobFormData(filePaths);
    if (imageBlobs == undefined) {
      return [];
    }
    console.info("Blobs" + JSON.stringify(imageBlobs));
    var respond = await createImage(imageBlobs,);
    return respond.data;
  }
  static uploadVideosToAmity = async (filePaths: string[]) => {
    const videoBlobs = await this.createBlobFormData(filePaths);
    if (videoBlobs == undefined) {
      return [];
    }
    var respond = await createVideo(videoBlobs);
    return respond.data;
  }
  static uploadFilesToAmity = async (filePaths: string[]) => {
    const fileBlobs = await this.createBlobFormData(filePaths);
    if (fileBlobs == undefined) {
      return [];
    }
    var respond = await createImage(fileBlobs);
    return respond.data;
  }

  static createPost = async (options: {
    textData: string,
    targetType: string,
    //path of files
    images?: string[],
    files?: string[],
    videos?: string[],
  }) => {



    const currentClient = getActiveClient();
    const images = handleStringArrFromObject((options['images'] ?? []) as string[]);
    console.info(images)



    const imageUploaded = await this.uploadImagesToAmity(options.images ?? []);
    const videoUploaded = await this.uploadVideosToAmity(options.videos ?? []);
    const fileUploaded = await this.uploadFilesToAmity(options.files ?? []);
    const newPost = {

      data: {
        text: options.textData
      },
      attachments: [
        ...imageUploaded.map((image) => { return { type: PostContentType.IMAGE, fileId: image.fileId } }),
        ...videoUploaded.map((video) => { return { type: PostContentType.VIDEO, fileId: video.fileId } }),
        ...fileUploaded.map((file) => { return { type: PostContentType.FILE, fileId: file.fileId } }),
      ],
      targetType: options.targetType,
      targetId: currentClient.userId ?? "",
    }
    try {
      // const respond = await createPost(newPost);
      // return respond.data;
    } catch (error) {
      console.error("Error create post")
    }

  }


}

export default AmityPostController