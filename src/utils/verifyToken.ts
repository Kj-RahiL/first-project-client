import { jwtDecode, JwtPayload } from "jwt-decode";

const token = "eyJhsw5c";
const decoded = jwtDecode<JwtPayload>(token);