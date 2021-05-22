import * as React from "react";
import { AuthContext, withAuthorization } from "src/components/AuthContext";

const Account = () => (
  <AuthContext.Consumer>
    {(user: any) => (
      <div>
        <h1>Account: {user.email}</h1>
      </div>
    )}
  </AuthContext.Consumer>
);

export default withAuthorization(Account);
