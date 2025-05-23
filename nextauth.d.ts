// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";


interface IUser extends DefaultUser {
  /**
   * User roles
   */
  roles?: string[];
  /**
   * Add a space that you use
   */
}

declare module "next-auth" {
  interface User extends IUser {}

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}