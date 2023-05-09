const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

const S3 = require('aws-sdk/clients/s3');
// initialize the constructor function
const s3 = new S3();

// use uuid to generate random names for our aws file
const { v4: uuidv4 } = require('uuid');

// our s3 aws bucket from our .env file!
const BUCKET_NAME = process.env.BUCKET

async function signup(req, res) {
  console.log(req.body, '< req.body', req.file, '<req.file')

  // first check to make sure the user uploaded a file
  if(!req.file) return res.status(400).json({error: "Please Submit a Photo!"})

  // create path of where we want to store file in our s3 bucket
  const filePath = `project4/${uuidv4()}-${req.file.originalname}`;
  const params = {Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer};
  // req.file.buffer is the image uploaded from the client ^
  // use sd.upload to make a request to s3 bucket
  s3.upload(params, async function(err, data){
    if(err){
      console.log('===========================================')
      console.log(err, ' err from aws, either your bucket name is wrong or your keys arent correct');
      console.log('===========================================')
      res.status(400).json({error: 'Error from aws, check your terminal!'})
    }

    const user = new User({...req.body, photoUrl: data.Location}); 
    // data.Location is the is the url of our image on AWS
    try {
      await user.save();
      // user model .pre('save') will run which hashes our password
      // create our jwt token
      const token = createJWT(user);
      // the code that runs in responce to this on the client 
      // is in the utils/userService signup function, the last .then
      res.json({ token });
      // sends the token to the client (userService.signup function) which stores to the token in localstorage!
      // our user model toJSON removes the password
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }

  }) // end of s3.upload
}

async function login(req, res) {
 
  try {
    const user = await User.findOne({email: req.body.email});
   
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
