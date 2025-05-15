'use server';
import { redirect } from 'next/navigation';

import { getSession, updateSession } from '@/widgets/serverActions/auth';

export async function updateUser(formData: FormData) {
  const session = await getSession();
  const res = await fetch(`${process.env.API_URL}/auth/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      apikey: process.env.API_KEY as string,
      username: 'user',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({
      displayName: formData.get('displayName'),
    }),
  });
  const updatedUser = await res.json();
  await updateSession({
    user: {
      name: updatedUser.displayName,
    },
  });
  redirect('/myaccount'); // 화면 출력 갱신
}
