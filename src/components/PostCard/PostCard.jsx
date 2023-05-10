// the PostCard will redered in the PostDisplay Component
import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";

// export default function PostCard({ post }) { 

//   return (
//     <div>I will render each post as a semantic ui card</div>
//   );
// }

export default function PostCard({post}) { 

  return (
    <Card key={post._id} raised href='/addPost'>
      {/* <Card.Content textAlign="left">
        <Card.Header>
          
        </Card.Header>
      </Card.Content> */}
      <Image src={`${post?.photoUrl}`} wrapped ui={false} />
      <Card.Content>
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
      </Card.Content>
      <Card.Content extra textAlign={"center"}>
        <Icon name={"heart"} size="large" color={"grey"} />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
)}
