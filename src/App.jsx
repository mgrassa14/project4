import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { useState, useEffect } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HomePage from "./pages/HomePage/HomePage";

import userService from "./utils/userService";
import AddPostPage from "./pages/AddPostPage/AddPostPage";

import * as postsApi from "./utils/postApi"
import * as likesApi from "./utils/likesApi"
// ==================================================
// Any Component rendered by a Route component will go in the pages folder
// the pages component will use the components in the "componets folder"
// ==================================================

function App() {

  // when the app loads up grab the token from storage if there is one
  const [user, setUser] = useState(userService.getUser())

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // call this function after we make a http request to signup or login a user, to update the token! and our state
  // userService.signup(formData)
  // userService.login(state)
  function handleSignUpOrLogin(){
    // userService.getUser, grabs the token from localstorage, 
    // decodes it to an object, that we can we store in our state!
    setUser(userService.getUser())
  }

  function handleLogout() {

    console.log('being called')
    userService.logout();
    setUser(null);
  }

  // (C)RUD
  async function handleAddPost(post) {
    try {
      setLoading(true);
      const responseData = await postsApi.create(post); // this is calling our create function in the postsApi utils folder
      console.log(responseData, " response from the server");
      setPosts([responseData.data, ...posts]); // spread operator to keep all the posts that are already in state!
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err, " error in addPost");
      setError("Error creating a post, please try again");
    }
  }

  // C(R)UD
  async function getPosts() {
    try {
      const response = await postsApi.getAll();
      console.log(response, " data");
      setPosts(response.posts);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error in getPosts");
      setLoading(false);
    }
  }
  // (C)RUD
  async function addLike(postId){
    // postId will be passed in when we click on a heart in Card component!
    try {
      const data = await likesApi.create(postId);
      // after we create a like
      // lets fetch all the posts again, to get the updated posts with the like 
      // embedded, and getPosts, will update the posts state so our ui will rerender
      // and we will see the heart change to red
      getPosts()
  
  
    } catch(err){
      console.log(err, ' error in addLike')
    }
    }
    // CRU(D)
    // pass this down to Card component because that is where the like button is!
    // we call this function when the heart is clicked
    async function removeLike(likeId){
    try {
      // likeId will be passed in when we click on heart that is red in the 
      // Card component
      const data = await likesApi.removeLike(likeId);
      // then we will call getPosts to refresh the data, and have an updated post without the like
      getPosts()
  
    } catch(err){
        console.log(err, ' err in remove Like')
    }
    }

  useEffect(() => {
    //Getting posts, C(R)UD
    getPosts();
  }, []); // This is useEffect runs once when the Feed component
  // loads

  if (user) {
    // are we logged in?
    return (
      <Routes>
        <Route path="/" element={<FeedPage handleLogout={handleLogout} posts={posts} loading={loading} error={error} loggedUser={user} addLike={addLike} removeLike={removeLike}/>} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
        <Route path="/:username" element={<ProfilePage loggedUser={user} handleLogout={handleLogout}/>} />
        <Route path="/addPost" element={<AddPostPage handleAddPost={handleAddPost} handleLogout={handleLogout}/>} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
