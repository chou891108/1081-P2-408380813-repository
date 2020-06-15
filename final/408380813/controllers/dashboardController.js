const Post = require("../models/postModel");
exports.getPosts = async (req, res, next) => {  

    let posts;
      let postCount;
        let categoryCount;
          let userCount;

            try {
            const getPosts = await Post.fetchAll().then(([rows]) =>
                 {      posts = rows;
                    });
                     const getPostCount = await Post.getCount().then(([rows]) =>
                      {      postCount = rows[0].count;

    });  
} catch (err) {    console.log(err);
      }  res.render("dashboard",
      {
          data: posts,
            postCount: postCount,
                title: "Blogen"
      });
    };