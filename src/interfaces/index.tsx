export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface User {
  rol: string;
  name: string;
  email: string;
  uid: string;
}
