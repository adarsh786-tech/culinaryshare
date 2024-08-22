import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_AUTH_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_AUTH_SECRET as string,
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "NextAuth.js <no-reply@example.com>",
    // }),
  ],
});

export { handler as GET, handler as POST };
