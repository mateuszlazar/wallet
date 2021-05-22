import * as React from "react";
import { firebase } from "../../firebase";
import { AuthContext } from "./AuthContext";

interface IProps {
  authUser?: any;
}

interface IState {
  authUser?: any;
}

export const withAuthentication = (Component: any) => {
  class WithAuthentication extends React.Component<IProps, IState> {
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
      const { authUser } = this.state;
      console.log("at", authUser);
      return (
        <AuthContext.Provider value={authUser}>
          <Component />
        </AuthContext.Provider>
      );
    }
  }
  return WithAuthentication;
};
