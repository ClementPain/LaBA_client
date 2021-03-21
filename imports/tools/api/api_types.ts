export interface UserResJSON {
  created_at: string,
  email: string,
  id: BigInteger,
  password_digest: string,
  updated_at: string
}

export interface RegistrationJSON {
  status: 'created',
  logged_in: boolean,
  user: UserResJSON
}

export interface UserInfosAuth {
  user: {
    'email': string,
    'password': string
  }
}

export interface LoggedInJSON {
  data: {
    logged_in: boolean,
    user: UserResJSON
  }
}

export interface LogoutJSON {
  data: {
    logout: boolean,
    status: number
  }
}

export type APICallwithoutJSON = (
  endpoint: string,
  withCredentials: boolean,
  onSuccess?: (res: any) => void,
  onError?: (error: ErrorEvent) => void
) => void

export type APICallwithJSON = (
  endpoint: string,
  withCredentials: boolean,
  json: any,
  onSuccess?: (res: any) => void,
  onError?: (error: ErrorEvent) => void
) => void

export type AuthCall = (
  endpoint: string,
  json: UserInfosAuth,
  onSuccess: (res: RegistrationJSON) => void,
  onError?: (error: any) => void
) => void