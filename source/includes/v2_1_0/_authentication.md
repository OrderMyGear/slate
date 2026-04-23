# Authentication

> To authorize, you can use either of these methods:

```shell
# Preferred: pass your token via the X-API-TOKEN header
GET https://subdomain.mybrightsites.com/api/v2.1.0/orders
  -H "X-API-TOKEN: your_api_token"

# Also supported (deprecation planned): pass your token as a query parameter
GET https://subdomain.mybrightsites.com/api/v2.1.0/orders?token=your_api_token
```

> Make sure to replace `subdomain` with your real subdomain and `your_api_token` with your API token.

Bright Sites uses tokens to allow access to the API. You can manage your API tokens in the website admin area (`/admin/api_keys`).

The Bright Sites API currently accepts the API token in two ways:

- **Preferred — HTTP header:** `X-API-TOKEN: your_api_token`
- **Query parameter (legacy):** `?token=your_api_token`

<aside class="warning">
The <code>?token=your_api_token</code> query-string authentication is still supported but will be deprecated in a future release. Please migrate to the <code>X-API-TOKEN</code> HTTP header.
</aside>

<aside class="notice">
You must replace <code>your_api_token</code> with your API token.
</aside>
