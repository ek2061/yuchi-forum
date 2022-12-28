import "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    uid: string;
    nickname: string;
    token: string;
  }
  interface Session extends DefaultSession {
    user: {
      uid: string;
      nickname: string;
      token: string;
    } & DefaultSession["user"];
  }
}
