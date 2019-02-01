#  Related products 

## Show you all related products for a specific item based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/product/:product_id/related_products?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "enabled": true,
  "type": "custom",
  "related_products": [
    {
      "id": 1,
      "name": "product",
      "sku": "SKU"
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

`GET /api/api/v1.1/products/:product_id/related_products`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>page </strong></div><div> optional </div> | <div>Pagination page number</div><div> Must be a number. </div>
<div><strong>per_page </strong></div><div> optional </div> | <div>Pagination per page number</div><div> Must be a number. </div>


## Add a custom related product to a specific item based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/product/1/related_products/579?token=GXzAxWkkyYLsESGQTU15" \
  -X POST
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "product1",
  "sku": "sku1"
}
```

### HTTP Request

`POST /api/api/v1.1/product/:product_id/related_products/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Related product ID</div><div> Must be a number. </div>


## Remove a custom related product from a specific item based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/product/1/related_products/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "product1",
  "sku": "sku1"
}
```

### HTTP Request

`DELETE /api/api/v1.1/product/:product_id/related_products/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Related product ID</div><div> Must be a number. </div>


