// the PostCard will redered in the PostDisplay Component
import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";


export default function PostCard({post, isProfile}) { 

  return (
    <Card key={post._id} raised>
      {/* <Card.Content textAlign="left">
        <Card.Header>
          
        </Card.Header>
      </Card.Content> */}
      <Image src={`${post?.photoUrl}`} wrapped ui={false} />
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Image
              size="large"
              avatar
              src={
                post.user.photoUrl
                  ? post.user.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
            />
            {post.user.username}
          </Card.Header>
        </Card.Content>
      )}
      <Card.Content extra textAlign={"center"}>
        <Icon name={"heart"} size="large" color={"grey"} />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
)}
