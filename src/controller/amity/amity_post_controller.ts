import {createQuery,runQuery,queryPosts,getPost,queryGlobalFeed} from '@amityco/ts-sdk';
import AmityFeedStore from '../../store/feed/AmityFeedStore';

class AmityPostController{
    constructor(){}
      queryPost=():void=> {
        const query = createQuery(queryPosts, {
          targetType: 'community',
          targetId: '6421189a26c865bf2b479299',
          feedType: 'published',
        });
        
        runQuery(query, ({ data: posts, ...options }) => console.log(posts, options));
    }

   async queryGlobalFeed(){
      const query = createQuery(queryGlobalFeed);
      var postss:(Amity.Post[])=[];
      console.log("Post is empty");
    runQuery(query, ({ data: posts, ...options }) => {
      console.log(posts, options);
      if(typeof posts !=='undefined')
      {
        const store=new AmityFeedStore();
        store.posts=posts;
        
      }
    });
  

    }
    

    getPosts():void{
        
    }
}

export default AmityPostController