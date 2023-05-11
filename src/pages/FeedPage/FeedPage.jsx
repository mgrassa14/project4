import React from 'react';

import PageHeader from '../../components/Header/Header';
import PostDisplay from '../../components/PostDisplay/PostDisplay';
import Loading from '../../components/Loader/Loader';

import { Grid } from 'semantic-ui-react';
import { useState, useEffect  } from 'react';




export default function FeedPage({ posts, loading, error, loggedUser, handleLogout, addLike, removeLike }){  

    if (error) {
        return (
            <>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout}/>
            </>
        );
    }
    return (
        <Grid centered>
        <Grid.Row>
            <Grid.Column>
            <PageHeader loggedUser={loggedUser} handleLogout={handleLogout}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 800 }}>
            <PostDisplay 
            posts={posts} 
            numPhotosCol={3} 
            isProfile={false} 
            loading={loading}
            addLike={addLike}
			removeLike={removeLike}
			loggedUser={loggedUser}
            />
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}