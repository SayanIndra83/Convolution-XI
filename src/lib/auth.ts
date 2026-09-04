import { NextAuthOptions, DefaultSession } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import dbConnect from "./db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isVerified: boolean;
      role: string;
    } & DefaultSession["user"];
  }
  interface User {
    isVerified: boolean;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    isVerified: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    credentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect();

        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image || null,
          isVerified: user.isVerified,
          role: user.role,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "github") {
        await dbConnect();
        
        let existingUser = await User.findOne({ email: user.email });
        
        if (!existingUser) {
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            image: user?.image,
            password: null, 
            isVerified: true,
          });
        }
        
        user.id = existingUser._id.toString();
        user.isVerified = existingUser.isVerified;
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.isVerified = user.isVerified;
        token.role = user.role;
      }

      if (!user) {
        await dbConnect();
        const dbUser = await User.findById(token.id);
        if (dbUser) {
          token.isVerified = dbUser.isVerified;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image as string | null;
        session.user.isVerified = token.isVerified; // Pass to client
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, 
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};