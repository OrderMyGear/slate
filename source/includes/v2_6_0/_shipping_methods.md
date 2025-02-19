# Shipping Methods

## List shipping methods

List all shipping methods in the store.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/shipping_methods?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "shipping_methods": [
    "Ground",
    "FedEx 1 Day Freight",
    "FedEx 2 Day",
    "FedEx 2 Day Freight",
    "FedEx 3 Day Freight",
    "International Economy Freight",
    "International First",
    "International Ground",
    "International Priority",
    "International Priority Freight",
    "UPS Ground",
    "UPS Next Day Air",
    "UPS Next Day Air Early A.M.",
    "UPS Second Day Air",
    "No Shipping Method"
  ]
}
```

### HTTP Request

`GET /api/v2.6.0/shipping_methods`
