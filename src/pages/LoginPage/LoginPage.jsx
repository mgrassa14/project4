import React, { useState } from "react";
import './LoginPage.css';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props){

  const [error, setError] = useState("");

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this is from the throw block in the userService.login first then function
      setError(err.message);
    }
  }

  return (
    // <div style={{width: '100vw',height: '100vh'}}>
    <Grid id="loginPage"
      textAlign="center"
      style={{ height: "100vh", margin: 0}}
      verticalAlign="middle"
      centered
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Image as={Link} to='/' src="https://i.imgur.com/0lljNYN.png" width="45" height="45" margin="0"/>TechGram
        </Header>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Button
              color="blue"
              fluid
              size="large"
              type="submit"
              className="btn"
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up!</Link>
        </Message>
        {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
    // </div>
  );
} 

