import React, { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react';

import PageHeader from '../../components/Header/Header';

export default function AddPostPage({handleAddPost}){

    const [state, setState] = useState({
        title: "",
        description: ""
      })
    const [selectFile, setSelectFile] = useState('')

    function handleChange(e){
        setState({
        ...state,
        [e.target.name]: e.target.value
  });
    }

    function handleFileInput(e){
        setSelectFile(e.target.files[0])
    }

    function handleSubmit(e){
        e.preventDefault();
        // make our state into formData
        const formData = new FormData();
        // image
        formData.append('image', selectFile);
        // title and description
        // this loops through all of the state and appends them into formData
        for (let fieldName in state){
            formData.append(fieldName, state[fieldName])
        }
        handleAddPost(formData);
        // make api call!

    }
    return (
        <>
        <PageHeader />
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    label='Title'
                    placeholder='Title'
                    name='title'
                    required
                    value={state.title}
                    onChange={handleChange}
                />
                <Form.TextArea 
                    label='Description'
                    name='description'
                    placeholder='Tell us about your post...' 
                    value={state.description}
                    onChange={handleChange}
                />
                <Form.Input
                    label='Image'
                    type='file'
                    name='image'
                    placeholder='Upload Image'
                    onChange={handleFileInput}
                />
                <Button type="submit" className="btn">
                    App Post
                </Button>
            </Form>
        </Segment>
        </>
        
    )
}