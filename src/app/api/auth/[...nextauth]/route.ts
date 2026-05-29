import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        // Backend'e kullanıcıyı kaydet/güncelle
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
          email: user.email,
          name: user.name,
          image: user.image,
          googleId: account?.providerAccountId,
        })
        return true
      } catch (error) {
        console.error('Auth error:', error)
        return true // Hata olsa da girişe izin ver
      }
    },
    async session({ session, token }) {
      if (session.user) {
        // Backend'den kullanıcı bilgilerini çek
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/me?email=${session.user.email}`
          )
          session.user.id = res.data.id
          session.user.role = res.data.role
          session.user.membershipType = res.data.membershipType
        } catch {}
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id
      return token
    },
  },
  pages: {
    signIn: '/giris',
    error: '/giris',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
