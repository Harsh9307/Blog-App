
const {Post} = require('../models')
class PostRepository{
    async createPost(postData){
        try{
            const post =await Post.create({
                title: postData.title,
                content: postData.content
            })
            return post;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}