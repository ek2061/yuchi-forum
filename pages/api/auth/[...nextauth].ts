import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { account, password } = credentials as {
          account: string;
          password: string;
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_YUCHI_API}/user/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ account, password }),
          }
        );
        if (response.status >= 400) return null;

        const { uid, nickname, token } = await response.json();

        return {
          id: uid,
          uid,
          nickname,
          token,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
