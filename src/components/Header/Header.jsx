import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Segment, Image, Icon} from 'semantic-ui-react';

export default function PageHeader({ loggedUser, handleLogout }){
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
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to={`/${loggedUser?.username}`} >
                        <Image
                            size='mini'
                            src={
                            loggedUser?.photoUrl
                                ? loggedUser?.photoUrl
                                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                            }
                            avatar
                        ></Image>
                    </Menu.Item>
                    <Menu.Item as={Link} to='/login' onClick={handleLogout}>
                        Logout
                    </Menu.Item>    
                </Menu.Menu>
                
            </Menu>
        </>
    )
}