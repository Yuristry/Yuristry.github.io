var posts=["2024/07/21/hello-world/","2024/07/24/jps/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };