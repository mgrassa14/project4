import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Segment, Image, Icon, Grid} from 'semantic-ui-react';
import "./HomePage.css"

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
        <div>
            <br/>
            <br/>
            <h2>Welcome to TechGram!</h2>
            {/* <br/> */}
            <h4>TechGram is a visual discovery media platform design for inspiration and discovery in the feild of technology.</h4>
            {/* <h4>With many posts on TechGram, you will surely find something that will spark your inspiration.</h4> */}
            <br/>
            <Grid columns={3} padded='horizontally'>
            <Grid.Column height="500">
                <h4>Talk about your latest build!</h4>
                <br/>
                <Image className='homeImage' size='medium' centered src='https://images.unsplash.com/photo-1603025832572-c5ba1fb6be8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGMlMjBzZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
            </Grid.Column>
            <Grid.Column>
                <h4>Show the newest gadgets!</h4>
                <br/>
                <Image className='homeImage' size='medium' centered src='https://images.unsplash.com/photo-1547479117-da9abbff3fa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
            </Grid.Column>
            <Grid.Column>
                <h4>Find insporation!</h4>
                <br/>
                <Image className='homeImage' size='medium' centered src='https://images.unsplash.com/photo-1542767352-e98201e84ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvcmtpbmclMjBvbiUyMGNvbXB1dGVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60' />
            </Grid.Column>
            </Grid>
        </div>
        {/* <div className='homepage'>
            <br/>
            <br/>
            <div>this is the home page!</div>
            <div>testing the git repo!</div>
            <div>testing after deployment</div>
        </div> */}
        </>
	)
} 