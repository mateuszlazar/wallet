import * as React from "react";
import { withRouter } from "react-router-dom";
import { firebase } from "src/firebase";
import { AuthContext } from "./AuthContext";

interface IProps {
  history?: any;
  location?: any;
}

export const withAuthorization = (Component: any) => {
  class WithAuthorization extends React.Component<IProps, {}> {
    public componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        console.log(authUser);
        if (!authUser) {
          this.props.history.push("/");
        }
      });
    }

    public render() {
      return (
        <AuthContext.Consumer>
          {(authUser: any) => (authUser ? <Component /> : null)}
        </AuthContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization as any);
};
