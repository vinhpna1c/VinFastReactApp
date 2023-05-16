import { createQuery, runQuery,  PostContentType, PostRepository, UserRepository, FileRepository, Client } from '@amityco/ts-sdk';
import AmityFeedStore from '../../stores/feed/AmityFeedStore';
import { getUrlFromFileId, handleStringArrFromObject, uriToBlob } from '../../utils/utils';

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
    // const query = createQuery(queryPosts, {
    //   targetType: 'community',
    //   targetId: '6421189a26c865bf2b479299',
    //   feedType: 'published',
    // });

    // runQuery(query, ({ data: posts, ...options }) => console.log(posts, options));
  }

  queryGlobalFeed(postList: Amity.Post[]) {



  }

  static getPostById = async (postID: string): Promise<Amity.Post<any>> => {
     const posts=await  PostRepository.getPostByIds([postID]);
    return posts.data[0];
  }

  getPosts(): void {

  }

 static getUserByID = async (userId: string): Promise<Amity.User> => {
    return ((await  UserRepository.getUserByIds([userId]))?.data[0]);
  }

  static getDataFromPost = async (postID: string): Promise<PostHandleData> => {
    let url = "";
    let dataType = "";
    let metaData = {};
    const p = await AmityPostController.getPostById(postID);
    //handle types of post here

    if (p.dataType === 'image') {
      const imageFile = (await FileRepository.getFile((p.data as Amity.ContentDataImage).fileId)).data;
      metaData = imageFile.attributes.metadata;
      url = imageFile.fileUrl;

    }
    else if (p.dataType === 'video') {

      const videoFile = await FileRepository. getFile((p.data as Amity.ContentDataVideo).videoFileId.original ?? "");
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
    console.log("File path: "+filePaths[0])
    const blobUrl= await uriToBlob(filePaths[0]);
    console.log("Blob url: "+JSON.stringify(blobUrl))
    formData.append("files",blobUrl);
    console.log("Form data:" + JSON.stringify(formData))

    return formData;
  }



  static uploadImagesToAmity = async (filePaths: string[]) => {

    const imageBlobs = await this.createBlobFormData(filePaths);
    console.info("Create Image Blob ")
    if (imageBlobs == undefined) {
      return [];
    }
    
    console.info("Image Blobs: " + JSON.stringify(imageBlobs));
    const query= createQuery(FileRepository.createImage,imageBlobs);
    runQuery(query,(respond)=>{
     console.log("Image get: "+JSON.stringify(respond))
    })
    // var respond = await FileRepository. createImage(imageBlobs,);
    return {};
  }
  static uploadVideosToAmity = async (filePaths: string[]) => {
    const videoBlobs = await this.createBlobFormData(filePaths);
    if (videoBlobs == undefined) {
      return [];
    }
    var respond = await FileRepository. createVideo(videoBlobs);
    return respond.data;
  }
  static uploadFilesToAmity = async (filePaths: string[]) => {
    const fileBlobs = await this.createBlobFormData(filePaths);
    if (fileBlobs == undefined) {
      return [];
    }

    
   const query= createQuery(FileRepository.createImage,fileBlobs);
   runQuery(query,(respond)=>{
    console.log("Image get: "+respond.data)
   })
    var respond = await FileRepository.createImage(fileBlobs);
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



    const currentClient = Client.getActiveClient();
    const images = handleStringArrFromObject((options['images'] ?? []) as string[]);
    console.info("Images: "+images)



    const imageUploaded = await this.uploadImagesToAmity(options.images ?? []);
    const videoUploaded = await this.uploadVideosToAmity(options.videos ?? []);
    const fileUploaded = await this.uploadFilesToAmity(options.files ?? []);
    const newPost = {

      data: {
        text: options.textData
      },
      attachments: [
        // ...imageUploaded.map((image) => { return { type: PostContentType.IMAGE, fileId: image.fileId } }),
        // ...videoUploaded.map((video) => { return { type: PostContentType.VIDEO, fileId: video.fileId } }),
        // ...fileUploaded.map((file) => { return { type: PostContentType.FILE, fileId: file.fileId } }),
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