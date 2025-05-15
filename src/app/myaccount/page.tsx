import { getSession } from '@/widgets/serverActions/auth';
import { updateUser } from '@/widgets/serverActions/user';

interface ResponseValue {
  totalBalance: number;
}

export default async function MyaccountPage() {
  const session = await getSession();
  const res = await fetch(`${process.env.API_URL}/banks/account`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      apikey: process.env.API_KEY as string,
      username: 'user',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const account = (await res.json()) as ResponseValue;

  return (
    <>
      <form action={updateUser}>
        <label>
          사용자 이름
          <input
            name="displayName"
            type="text"
            defaultValue={session?.user?.name || ''}
          />
        </label>
        <button type="submit">수정</button>
      </form>
    </>
  );
}
