import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "src/components/Layout";
import { firebase } from "../firebase";
import { withAuthentication } from "../components/AuthContext/withAuthentication";
import { HomePage, AccountPage, DashboardPage } from "src/pages";
import "./index.css";
import "antd/dist/antd.css";

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
          <Switch>
            <Route path={"/"} component={HomePage} exact />
            <Route path={"/dashboard"} component={DashboardPage} exact />
            <Route path={"/account"} component={AccountPage} exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
