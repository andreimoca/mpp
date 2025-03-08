const API_URL = 'http://localhost:5000/api';

export async function fetcher<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}/${endpoint}`);

  if (!res.ok) {
    throw new Error('Network error occurred');
  }

  return res.json();
}
