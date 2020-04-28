interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'tokenExampleApril2020',
        user: {
          name: 'Rafael',
          email: 'rafael@email.com',
        },
      });
    }, 2000);
  });
}
