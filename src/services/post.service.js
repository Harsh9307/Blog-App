const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class PostService {

    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async createPost(postData){
        const post = await this.postRepository.createPost(postData);

        return post;
    }

    
}

module.exports = PostService;