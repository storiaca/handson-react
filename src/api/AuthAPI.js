export default {
  loginMocked: ({ username }) => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
      response: {
        data: {
          username,
          sessionToken: 'pf2oi86edebfc8zffedfi5xb9m2e028baneb4uldb6e2af0ye8acbe8ag68f60z28ffeag0t0'
        }
      },
    }), 1)
  ),
};