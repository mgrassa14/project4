const Post = require('../models/post');

module.exports = {
    create,
    index
}

const S3 = require('aws-sdk/clients/s3');
// initialize the constructor function
const s3 = new S3();

// we'll use the module uuid to generate random names for our aws file
const { v4: uuidv4 } = require('uuid')

// our s3 aws bucket from our .env file!
const BUCKET_NAME = process.env.BUCKET

function create(req, res){
    console.log(req.body, req.file, req.user)
    const filePath = `project4/posts/${uuidv4()}-${req.file.originalname}`;
    const params = {Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer}; //req.file.buffer is the actual image

    s3.upload(params, async function(err, data){
        if(err){
          console.log('===========================================')
          console.log(err, ' err from aws, either your bucket name is wrong or your keys arent correct');
          console.log('===========================================')
          res.status(400).json({error: 'Error from aws, check your terminal!'})
        }

        try {
            // use our Model to create a document in the posts collection in MongoDB
            const post = await Post.create({
				title: req.body.title,
                description: req.body.description,
				user: req.user, // req.user is defined in config/auth if we the client sends over the jwt token
				photoUrl: data.Location // data.Location comes from the callback in the s3 upload
			})
            // console.log(user, 'req.body.user')
			await post.populate('user'); // populating on a mongoose document! this gives us the user object
			// this response will show up in the feedPage in the --> const responseData = await postsApi.create(post);
			res.status(201).json({data: post}) 
      
          } catch(err){
            res.status(400).json({error: err})
          }
    }) // end of s3.upload
}

async function index(req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information 
        // when you fetch teh posts
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){

    }
} 