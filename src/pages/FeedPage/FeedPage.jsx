import React from 'react';

import PageHeader from '../../components/Header/Header';
import PostDisplay from '../../components/PostDisplay/PostDisplay';
import Loading from '../../components/Loader/Loader';

import { Grid } from 'semantic-ui-react';
import { useState, useEffect  } from 'react';




export default function FeedPage({ posts, loading, error }){  

    if (error) {
        return (
            <>
            <PageHeader />
            </>
        );
    }
    return (
        <Grid centered>
        <Grid.Row>
            <Grid.Column>
            <PageHeader />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 800 }}>
            <PostDisplay posts={posts} numPhotosCol={3} isProfile={false} loading={loading}/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}