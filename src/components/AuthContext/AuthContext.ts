import * as React from "react";
import { IUser } from "./IAuthContext";

export const AuthContext = React.createContext<IUser | null>(null);
