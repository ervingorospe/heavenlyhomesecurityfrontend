const url = process.env.STRAPIBASEURL

export const strapiQuery = async (query) => {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `${query}`
    })
  }

  const res = await fetch(`${url}/graphql`, fetchParams);
  const { data } = await res.json()

  return data
}