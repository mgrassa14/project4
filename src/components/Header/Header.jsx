import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Segment} from 'semantic-ui-react';

export default function PageHeader(){
    return (
        <>
            {/* <Header as='h2' >
              This is the HEADER!
            </Header>
            <Link id='addpost' to="/addPost">Create Post</Link > */}
            <Menu inverted size='huge'>
                <Menu.Item as={Link} to='/'>
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to='/addPost'>
                    Create Post
                </Menu.Item>
            </Menu>
        </>
    )
}