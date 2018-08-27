#  Categories 

## List categories

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/categories?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "categories": [ { "id": 579, "name": "Dark Chocolates", "price_modifier": "10.0", "active": true, "parent": { "id": 578, "name": "Chocolates" } } ], "meta": { "total": 1, "offset": 0, "limit": 0 } } 
```

### HTTP Request

`GET /api/v1.1/categories`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
page  |  optional  | Pagination page number |  Must be a number. 
per_page  |  optional  | Pagination per page number |  Must be a number. 


## Show category

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/categories/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "Dark Chocolates", "position": 2, "parent": { "id": 578, "name": "Chocolates" }, "products_order": "name_asc", "price_modifier": "10.0", "active": true } 
```

### HTTP Request

`GET /api/v1.1/categories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Category ID |  Must be a number. 


## Create category

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/categories?token=GXzAxWkkyYLsESGQTU15 { "category": { "name": "Dark Chocolates", "position": 2, "parent_id": 578, "products_order": "name_asc", "price_modifier": 10, "active": true } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "Dark Chocolates", "position": 2, "parent": { "id": 578, "name": "Chocolates" }, "products_order": "name_asc", "price_modifier": "10.0", "active": true } 
```

### HTTP Request

`POST /api/v1.1/categories`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
category  |  required  | Validations: |  Must be a Hash 
category[name]  |  required  | Unique name |  Must be a String 
category[position]  |  optional , nil allowed  | Category position in list |  Must be a number. 
category[parent_id]  |  optional , nil allowed  | Category ID to be used as parent category |  Must be a number. 
category[products_order]  |  optional , nil allowed  | Products ordering in this category |  Must be one of: website_products_order, name_asc, name_desc, price_asc, price_desc, rating_asc, rating_desc, most_reviews, custom. 
category[price_modifier]  |  optional , nil allowed  | Price Modifier |  Must be a float. 
category[active]  |  optional , nil allowed  | Enable / Disable category |  Must be one of: true, false, 1, 0 


## Update category

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/categories/579?token=GXzAxWkkyYLsESGQTU15 { "category": { "name": "White Chocolates", } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "White Chocolates", "position": 2, "parent": { "id": 578, "name": "Chocolates" }, "products_order": "name_asc", "price_modifier": "10.0", "active": true } 
```

### HTTP Request

`PATCH /api/v1.1/categories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
category  |  required  | Validations: |  Must be a Hash 
category[name]  |  optional  | Unique name |  Must be a String 
category[position]  |  optional , nil allowed  | Category position in list |  Must be a number. 
category[parent_id]  |  optional , nil allowed  | Category ID to be used as parent category |  Must be a number. 
category[products_order]  |  optional , nil allowed  | Products ordering in this category |  Must be one of: website_products_order, name_asc, name_desc, price_asc, price_desc, rating_asc, rating_desc, most_reviews, custom. 
category[price_modifier]  |  optional , nil allowed  | Price Modifier |  Must be a float. 
category[active]  |  optional , nil allowed  | Enable / Disable category |  Must be one of: true, false, 1, 0 


## Update category

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/categories/579?token=GXzAxWkkyYLsESGQTU15 { "category": { "name": "White Chocolates", } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "White Chocolates", "position": 2, "parent": { "id": 578, "name": "Chocolates" }, "products_order": "name_asc", "price_modifier": "10.0", "active": true } 
```

### HTTP Request

`PUT /api/v1.1/categories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
category  |  required  | Validations: |  Must be a Hash 
category[name]  |  optional  | Unique name |  Must be a String 
category[position]  |  optional , nil allowed  | Category position in list |  Must be a number. 
category[parent_id]  |  optional , nil allowed  | Category ID to be used as parent category |  Must be a number. 
category[products_order]  |  optional , nil allowed  | Products ordering in this category |  Must be one of: website_products_order, name_asc, name_desc, price_asc, price_desc, rating_asc, rating_desc, most_reviews, custom. 
category[price_modifier]  |  optional , nil allowed  | Price Modifier |  Must be a float. 
category[active]  |  optional , nil allowed  | Enable / Disable category |  Must be one of: true, false, 1, 0 


## Delete category

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/categories/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 579, "name": "White Chocolates", "position": 2, "parent": { "id": 578, "name": "Chocolates" }, "products_order": "name_asc", "price_modifier": "10.0", "active": true } 
```

### HTTP Request

`DELETE /api/v1.1/categories/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | Category ID |  Must be a number. 


