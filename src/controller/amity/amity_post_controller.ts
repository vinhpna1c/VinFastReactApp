import { createQuery, runQuery, queryPosts, getPost, queryGlobalFeed } from '@amityco/ts-sdk';
import AmityFeedStore from '../../store/feed/AmityFeedStore';

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


  getPosts(): void {

  }
}

export default AmityPostController