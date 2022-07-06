# Origin Addresses

## List origin addresses

List all origin addresses in the store. Keep in mind, the response will return up to 500 records on a single page and you will need
to use "per_page" and "page" URL parameters to see all the records.

```shell
curl "https://subdomain.bsites-staging.com/api/v2.4.0/origin_addresses?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "origin_addresses": [
    {
      "id": 1,
      "nickname": "Custom Origin Address",
      "first_address": "Some Address 1",
      "second_address": "Some Address 2",
      "city": "Denver",
      "country": "United States",
      "state": "Colorado",
      "zip": "80202"
    }
  ],
  "meta": {
    "total": 1,
    "offset": 0,
    "limit": 0
  }
}
```

### HTTP Request

`GET /api/v2.4.0/origin_addresses`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>page </strong></div><div>optional</div> | <div>Pagination page number</div><div>Must be a number</div>
<div><strong>per_page </strong></div><div>optional</div> | <div>Pagination per page number</div><div>Must be a number</div>
