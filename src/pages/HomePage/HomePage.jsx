import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Segment, Image, Icon} from 'semantic-ui-react';


export default function HomePage(){
	return (
        <>
        <Menu fixed='top' inverted size='huge'>
            <Menu.Item as={Link} to='/'>
                <Icon name='camera' />
                    TechGram
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as={Link} to='/login'>
                    Log in
                </Menu.Item>    
                <Menu.Item as={Link} to='/signup'>
                    Signup
                </Menu.Item>  
            </Menu.Menu>
        </Menu>
        <div className='homepage'>
            <br/>
            <br/>
            <div>this is the home page!</div>
            <div>testing the git repo!</div>
            <div>testing after deployment</div>
        </div>
        </>
	)
} 