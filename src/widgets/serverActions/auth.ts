'use server';

import { redirect } from 'next/navigation';

import { auth, signIn, signOut, update } from '@/lib/auth';

export const signInWithCredentials = async (
  initialState: { message: string },
  formData: FormData,
) => {
  try {
    await signIn('credentials', {
      displayName: formData.get('displayName'),
      email: formData.get('email'),
      password: formData.get('password'),
      // redirectTo: '/'  <= 이 속성은 try 문 안에서 동작하지 않습니다! Beta?
    });
    // 로그인에 성공하면, 리다이렉션을 에러 캐치로 처리하므로 이 위치에 실행할 코드를 추가하지 마세요! Beta?
  } catch (error) {
    // @ts-ignore-next-line
    return { message: error.cause.err.message };
  }
  redirect('/'); // 또는 return { message: '메시지!' }
};

export const signInWithGoogle = async () => {
  await signIn('google', {
    /* 옵션 */
  });
  // ...
};

export const signInWithGitHub = async () => {
  await signIn('github', {
    /* 옵션 */
  });
  // ...
};

export const signOutWithForm = async (formData: FormData) => {
  await signOut();
};

export { auth as getSession, update as updateSession };
