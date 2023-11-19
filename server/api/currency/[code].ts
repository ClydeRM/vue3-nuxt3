export default defineEventHandler(
  async (event) => {
    const { currencyApiKey } = useRuntimeConfig();
    const code = getRouterParam(
      event,
      "code"
    );

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`;

    const { data } = await $fetch(uri);

    return data;
  }
);
