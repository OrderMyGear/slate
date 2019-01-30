#  Categories

## List all product categories in the store.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.1/categories?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "categories": [
    {
      "id": 579,
      "name": "Dark Chocolates",
      "price_modifier": "10.0",
      "active": true,
      "parent": {
        "id": 578,
        "name": "Chocolates"
      }
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

`GET /api/v1.1.1/categories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>page </strong></div><div> optional </div> | <div>Pagination page number</div><div> Must be a number. </div>
<div><strong>per_page </strong></div><div> optional </div> | <div>Pagination per page number</div><div> Must be a number. </div>


## Show the category information based on the category ID (not name) you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.1/categories/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "Dark Chocolates",
  "position": 2,
  "parent": {
    "id": 578,
    "name": "Chocolates"
  },
  "products_order": "name_asc",
  "price_modifier": "10.0",
  "active": true
}
```

### HTTP Request

`GET /api/v1.1.1/categories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Category ID</div><div> Must be a number. </div>


## Create a category in the store.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.1/categories?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "category": {
    "name": "Dark Chocolates",
    "position": 2,
    "parent_id": 578,
    "products_order": "name_asc",
    "price_modifier": 10,
    "active": true
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "Dark Chocolates",
  "position": 2,
  "parent": {
    "id": 578,
    "name": "Chocolates"
  },
  "products_order": "name_asc",
  "price_modifier": "10.0",
  "active": true
}
```

### HTTP Request

`POST /api/v1.1.1/categories`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>category </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>category[name] </strong></div><div> required </div> | <div>Unique name</div><div> Must be a String </div>
<div><strong>category[position] </strong></div><div> optional , nil allowed </div> | <div>Category position in list</div><div> Must be a number. </div>
<div><strong>category[parent_id] </strong></div><div> optional , nil allowed </div> | <div>Category ID to be used as parent category</div><div> Must be a number. </div>
<div><strong>category[products_order] </strong></div><div> optional , nil allowed </div> | <div>Products ordering in this category</div><div> Must be one of: website_products_order, name_asc, name_desc, price_asc, price_desc, rating_asc, rating_desc, most_reviews, custom. </div>
<div><strong>category[price_modifier] </strong></div><div> optional , nil allowed </div> | <div>Price Modifier</div><div> Must be a float. </div>
<div><strong>category[active] </strong></div><div> optional , nil allowed </div> | <div>Enable / Disable category</div><div> Must be one of: true, false, 1, 0 </div>


## Update category

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.1/categories/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "category": {
    "name": "White Chocolates",
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "White Chocolates",
  "position": 2,
  "parent": {
    "id": 578,
    "name": "Chocolates"
  },
  "products_order": "name_asc",
  "price_modifier": "10.0",
  "active": true
}
```

### HTTP Request

`PUT /api/v1.1.1/categories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>category </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>category[name] </strong></div><div> optional </div> | <div>Unique name</div><div> Must be a String </div>
<div><strong>category[position] </strong></div><div> optional , nil allowed </div> | <div>Category position in list</div><div> Must be a number. </div>
<div><strong>category[parent_id] </strong></div><div> optional , nil allowed </div> | <div>Category ID to be used as parent category</div><div> Must be a number. </div>
<div><strong>category[products_order] </strong></div><div> optional , nil allowed </div> | <div>Products ordering in this category</div><div> Must be one of: website_products_order, name_asc, name_desc, price_asc, price_desc, rating_asc, rating_desc, most_reviews, custom. </div>
<div><strong>category[price_modifier] </strong></div><div> optional , nil allowed </div> | <div>Price Modifier</div><div> Must be a float. </div>
<div><strong>category[active] </strong></div><div> optional , nil allowed </div> | <div>Enable / Disable category</div><div> Must be one of: true, false, 1, 0 </div>


## Delete a category based on the category ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.1/categories/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 579,
  "name": "White Chocolates",
  "position": 2,
  "parent": {
    "id": 578,
    "name": "Chocolates"
  },
  "products_order": "name_asc",
  "price_modifier": "10.0",
  "active": true
}
```

### HTTP Request

`DELETE /api/v1.1.1/categories/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div> required </div> | <div>Category ID</div><div> Must be a number. </div>


