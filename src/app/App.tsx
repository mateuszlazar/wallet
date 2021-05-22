import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "src/components/Layout";
import { firebase } from "../firebase";
import { withAuthentication } from "../components/AuthContext/withAuthentication";
import { ROUTES } from "./routes";
import { GlobalStyle } from "./GlobalStyle";

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <Layout>
          <GlobalStyle />
          <Switch>
            {ROUTES.map(({ path, Component }) => (
              <Route exact={true} path={path} component={Component} />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
