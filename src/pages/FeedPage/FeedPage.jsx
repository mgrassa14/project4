import React from 'react';

import PageHeader from '../../components/Header/Header';
import PostDisplay from '../../components/PostDisplay/PostDisplay';

import { Grid } from 'semantic-ui-react';
import { useState } from 'react';




export default function FeedPage({ posts }){  



    return (
        <Grid centered>
        <Grid.Row>
            <Grid.Column>
            <PageHeader />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 800 }}>
            <PostDisplay posts={posts}/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}