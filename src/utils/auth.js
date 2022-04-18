import { Local } from "./storage";

const TokenKey = 'Admin-Token';

export function getToken() {
  return Local.get(TokenKey);
}

export function setToken(token) {
  return Local.set(TokenKey, token);
}

export function removeToken() {
  return Local.remove(TokenKey);
}
