import React from 'react';
import PostCard from "../PostCard/PostCard";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import Loader from "../Loader/Loader";

export default function PostDisplay({posts, numPhotosCol, isProfile, loading, addLike, removeLike, loggedUser, deletePost}) {
  if (loading) {
    return (
      <>
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
        <Card.Group itemsPerRow={numPhotosCol} stackable>
          {posts?.map((post) => {
            return (
              <PostCard post={post} key={post._id} isProfile={isProfile} addLike={addLike} removeLike={removeLike} loggedUser={loggedUser} deletePost={deletePost}/>
            );
          })}
        </Card.Group>
      </>
    );
  }
  return (
      <Card.Group itemsPerRow={numPhotosCol} stackable>
        {posts?.map((post) => {
          return <PostCard post={post} key={post._id} isProfile={isProfile} addLike={addLike} removeLike={removeLike} loggedUser={loggedUser} deletePost={deletePost}/>;
      })}
    </Card.Group>
  );
}