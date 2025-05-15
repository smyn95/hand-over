'use client';

import { useFormState } from 'react-dom';

import SubmitButton from '@/shared/ui/SubmitButton';
import { signInWithCredentials } from '@/widgets/serverActions/auth';

export default function SignUpPage() {
  const [state, action] = useFormState<any>(signInWithCredentials, {
    message: '',
  });

  return (
    <>
      <h1>회원가입</h1>
      <h2>{state.message}</h2>
      <form action={action} className="flex flex-col items-start gap-4">
        <label>
          사용자 이름
          <input name="displayName" type="text" />
        </label>
        <label>
          이메일(ID)
          <input name="email" type="email" />
        </label>
        <label>
          비밀번호
          <input name="password" type="password" />
        </label>
        <SubmitButton name="회원가입" />
      </form>
    </>
  );
}
