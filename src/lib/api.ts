export const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const apiFetch = async (path: string, options?: RequestInit) => {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json" },
    ...(options?.headers || {}),
  });

  return res;
};
