interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  password: string;
}

interface IResetPassword {
  email: string;
}

interface IVerifyEmail {
  token: string;
}

interface IUpdatePassword {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

type UserRole = "student" | "tutor";
interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  name: string | null;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  roles: UserRole[];
  current_role: UserRole | null;
}

interface IAuthUser {
  token: string | null;
  user: IUser | null;
  sessionId?: string | null;
  sessionExpireAt?: number | null;
}
