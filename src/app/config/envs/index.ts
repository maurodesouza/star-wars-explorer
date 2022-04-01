const envs = {
  environment: process.env.NODE_ENV,

  urls: {
    api: {
      swapi: process.env.SWAPI_API_URL!,
    },
  },

  storage: {
    local: {
      key: process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!,
    },
  },
};

export { envs };
