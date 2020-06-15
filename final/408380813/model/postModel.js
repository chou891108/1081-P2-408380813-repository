const db = require("../utils/database");

const Post = class Post
 {  constructor(id, category, price) { 
        this.id = id;
        this.category = category;
        this.price = price;
                      }
                      static fetchAll() 
                      {    return db.execute("SELECT * FROM post");
                      };
                      static getCount() { 
                             return db.execute("SELECT count(*) as count FROM post");
                              }
                            };