import * as React from "react";
import { Redirect } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { loginWithGoogle } from "src/firebase/auth";
import { AuthContext } from "src/components/AuthContext";
import { GoogleIcon } from "./GoogleIcon";
import { HomeContainer } from "./styled";

const Home = () => (
  <AuthContext.Consumer>
    {(user) =>
      user ? (
        <Redirect to="/dashboard" />
      ) : (
        <HomeContainer>
          <Typography variant="h2">Wallet</Typography>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            onClick={loginWithGoogle}
          >
            <GoogleIcon />
            &nbsp;&nbsp; Sign in
          </Button>
        </HomeContainer>
      )
    }
  </AuthContext.Consumer>
);

export default Home;
