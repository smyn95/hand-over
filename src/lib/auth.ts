import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [
    Credentials({
      authorize: async credentials => {
        const { displayName, email, password } = credentials;
        const user = { id: '', name: '', email: '', image: '' };

        // 사용자 이름이 있는 경우, 회원가입!
        try {
          if (displayName) {
            // <회원가입 로직 ...>
            return {
              ...user,
              accessToken: '<ACCESS_TOKEN>',
            };
          }

          // <로그인 로직 ...>
          return {
            ...user,
            accessToken: '<ACCESS_TOKEN>',
          };
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },

  pages: {
    signIn: '/signin',
  },

  callbacks: {
    signIn: async () => {
      return true;
    },

    jwt: async ({ token, user, trigger, session }) => {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      if (trigger === 'update' && session) {
        Object.assign(token, session.user);
        token.picture = session.user.image; // 사진을 변경했을 때 반영!
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },

    // `url`은 다음과 같을 수 있습니다.
    // '/abc'
    // '/abc?callbackUrl=/xyz'
    // 'https://dev/abc?callbackUrl=/xyz'
    // 'https://dev/abc?callbackUrl=https://dev/xyz'
    // ...

    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      if (url) {
        const { search, origin } = new URL(url);
        const callbackUrl = new URLSearchParams(search).get('callbackUrl');
        if (callbackUrl)
          return callbackUrl.startsWith('/')
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl;
        if (origin === baseUrl) return url;
      }
      return baseUrl;
    },
  },
});
