const { StatusCodes } = require('http-status-codes');
const {PostService} = require('../services');
const {PostRepository} = require('../repositories')

const postService = new PostService(new PostRepository());
function pingPostController(req, res) {
    return res.json({message: 'Post controller is up'});
}

async function likePost(req,res,next){
    try{
        
    }
    catch(err){

    }
}

async function createPost(req,res,next){
    try{
        const newPost = await postService.createPost(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Post created successfully',
            error:{},
            data: newPost
        })
    }
    catch(err){
        console.log(err);
    }
}

module.exports ={
    createPost,
    likePost
};