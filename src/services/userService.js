import Cookies from 'universal-cookie';

export async function getUserBySessionToken() {
  const cookies = new Cookies();
  const sessionToken = cookies.get('sessionToken');
  if (!sessionToken) {
    return null;
  }
  const response = await fetch(
    `http://localhost:7021/api/user/getBySession/${sessionToken}`,
  );
  if (!response.ok) {
    throw new Error('Failed to get user by sessionToken');
  }
  return await response.json();
}
