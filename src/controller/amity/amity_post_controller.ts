import { createQuery, runQuery, queryPosts, getPost, queryGlobalFeed, getFile } from '@amityco/ts-sdk';
import AmityFeedStore from '../../store/feed/AmityFeedStore';

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


}

export default AmityPostController