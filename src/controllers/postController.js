import Post from '../models/Post';

const postController = {
    index: (req, res) => {

        try {

            Post.findAll(
                {
                    limit: 10,
                    order: 
                [
                    ['createdAt', 'DESC']
                ],
                raw: true 
                }).then(posts => {
                
                posts.forEach(post => {
                    console.log(post)
                    delete post.content
                })
                let response = {
                    meta: {
                        status: 200,
                        total: posts.length,
                        url: "/"
                    },
                    data: posts
                }
                return res.status(200).json(response)
        }) 
        } catch (error) {
            console.log(error)
        }
    },
    save: async (req, res) => {
        try {

            // To implement multer //

           /*  let filename = null;
            if (req.file) {
                filename = req.file.filename
            } */
            
            let newPost = {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
                category: req.body.category
            } 
            
            await Post.create(newPost);

            res.send("Post creado satisfactoriamente.")
        } catch (error) {
            console.log(error)
        }
    },
    find: async (req, res) => {
        
        try {

            const onePost = await Post.findOne({
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json(onePost);

        } catch (error) {
            console.log(error)
        }
    },
    edit: async (req, res) => {
        
        try {
            
            let post = {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
                category: req.body.category
            } 
            
            await Post.update(post, {
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json("Post editado satisfactoriamente.");

        } catch (error) {
            console.log(error)
        }
    },
    destroy: async (req, res) => {

        try {
            
            await Post.destroy({
                where: {
                    id: req.params.id
            }
            });
            res.status(200).json("Post eliminado satisfactoriamente.");

        } catch (error) {
            console.log(error)
        }
    },
}

export default postController;