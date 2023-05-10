import React from 'react';

import PageHeader from '../../components/Header/Header';
import PostDisplay from '../../components/PostDisplay/PostDisplay';

import { Grid } from 'semantic-ui-react';
import { useState } from 'react';

// this will import all the funcitonm from postApi, and attach to an object call postApi
import * as postApi from '../../utils/postApi'

export default function FeedPage(props){  
    return (
        <Grid centered>
        <Grid.Row>
            <Grid.Column>
            <PageHeader />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
            <PostDisplay />
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}