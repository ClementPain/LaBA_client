export interface UserInfosJSON {
  created_at: string,
  email: string,
  id: BigInteger,
  password_digest: string,
  updated_at: string
}

export interface RegistrationJSON {
  status: "created" | "unprocessable_entity" | 401,
  logged_in: boolean,
  user: UserInfosJSON
}

export interface LoggedInJSON {
  data: {
    logged_in: boolean,
    user: UserInfosJSON
  }
}

export interface LogoutJSON {
  data: {
    logout: boolean,
    status: number
  }
}