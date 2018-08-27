#  Products 

## List products

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "products": [ { "id": 579, "name": "Chocalate", "sku": "choc-1", "internal_id": "431234", "categories": [ { "id": 123, "name": "Chocolates" } ], "vendors": [ { "id": 234, "name": "The Willy Wonka Company" } ], "active": true, "last_edited_date": "2016-03-29T22:53:03-06:00" } ], "meta": { "total": 1, "offset": 0, "limit": 0 } } 
```

### HTTP Request

`GET /api/v1.1/products`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
categories  |  optional  | Filter by categories |  Must be one of: Array, String. 
sku  |  optional  | Filter by sku |  Must be a String 
internal_id  |  optional  | Filter by Internal ID |  Must be a String 
name  |  optional  | Filter by name |  Must be a String 
vendors  |  optional  | Filter by vendors |  Must be one of: Array, String. 
page  |  optional  | Pagination page number |  Must be a number. 
per_page  |  optional  | Pagination per page number |  Must be a number. 


## Show product

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "name": "Chocolate", "sku": "choc-1", "internal_id": "431234", "base_price": "10", "retail_price": "10", "cost": "10", "setup_charge": "10", "minimum_order_quantity": 10, "maximum_order_quantity": 20, "custom_tic": "12345", "weight": "10", "width": "10", "height": "10", "length": "10", "shipping_modifier": "10", "meta_title": "choco", "meta_description": "tasty choco", "meta_keywords": "tasty chocolate wonka", "custom_url": "chocolate", "description": "Very Tasty Dark Chocolate", "active": true, "featured": false, "tax_exempt": false, "shipping_exempt": false, "categories": [ { "id": 123, "name": "Chocolates" } ], "vendors": [ { "id": 234, "name": "The Willy Wonka Company" } ], "enable_quantity_discount": false, "related_products_type": "auto", "enable_related_products": false, "enable_product_personalization": false, "enable_inventory": false, "enable_logo_locations": false, "enable_decoration_methods": false, "primary_category_id": 36, "last_edited_date": "2016-03-29T22:53:03-06:00" } 
```

### HTTP Request

`GET /api/v1.1/products/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | User ID |  Must be a number. 


## Create product

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/products?token=GXzAxWkkyYLsESGQTU15 { "product": { "name": "Chocolate", "sku": "choc-1", "internal_id": "431234", "base_price": 10, "retail_price": 10, "cost": 10, "setup_charge": 10, "minimum_order_quantity": 10, "maximum_order_quantity": 20, "custom_tic": "12345", "weight": 10, "width": 10, "height": 10, "length": 10, "shipping_modifier": 10, "meta_title": "choco", "meta_description": "tasty choco", "meta_keywords": "tasty chocolate wonka", "custom_url": "chocolate", "description": "Very Tasty Dark Chocolate", "active": true, "featured": false, "tax_exempt": false, "shipping_exempt": false, "vendor_ids": [ 234 ], "category_ids": [ 123 ], "enable_quantity_discount": false, "related_products_type": "auto", "enable_related_products": false, "enable_product_personalization": false, "enable_inventory": false, "enable_logo_locations": false, "enable_decoration_methods": false, "primary_category_id": 36 } } 
```

> The above request returns JSON structured like this:

```json
 { "name": "Chocolate", "sku": "choc-1", "internal_id": "431234", "base_price": "10", "retail_price": "10", "cost": "10", "setup_charge": "10", "minimum_order_quantity": 10, "maximum_order_quantity": 20, "custom_tic": "12345", "weight": "10", "width": "10", "height": "10", "length": "10", "shipping_modifier": "10", "meta_title": "choco", "meta_description": "tasty choco", "meta_keywords": "tasty chocolate wonka", "custom_url": "chocolate", "description": "Very Tasty Dark Chocolate", "active": true, "featured": false, "tax_exempt": false, "shipping_exempt": false, "categories": [ { "id": 123, "name": "Chocolates" } ], "vendors": [ { "id": 234, "name": "The Willy Wonka Company" } ], "enable_quantity_discount": false, "related_products_type": "auto", "enable_related_products": false, "enable_product_personalization": false, "enable_inventory": false, "enable_logo_locations": false, "enable_decoration_methods": false, "primary_category_id": 36, "last_edited_date": "2016-03-29" } 
```

### HTTP Request

`POST /api/v1.1/products`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product  |  required  | Validations: |  Must be a Hash 
product[name]  |  required  | Product name |  Must be a String 
product[sku]  |  required  | Unique sku |  Must be a String 
product[internal_id]  |  optional , nil allowed  | Internal ID |  Must be a String 
product[base_price]  |  required  | Base price ($) |  Must be a float. 
product[retail_price]  |  optional , nil allowed  | Retail price ($) |  Must be a float. 
product[cost]  |  optional , nil allowed  | Cost ($) |  Must be a float. 
product[setup_charge]  |  optional , nil allowed  | Setup charge ($) |  Must be a float. 
product[minimum_order_quantity]  |  optional , nil allowed  | Minimum Order Quantity |  Must be a number. 
product[maximum_order_quantity]  |  optional , nil allowed  | Maximum Order Quantity |  Must be a number. 
product[custom_tic]  |  optional , nil allowed  | Product tax code |  Must be a String 
product[primary_category_id]  |  optional , nil allowed  | ID of primary category |  Must be a number. 
product[weight]  |  optional , nil allowed  | Weight (lbs) |  Must be a float. 
product[width]  |  optional , nil allowed  | Width (in) |  Must be a float. 
product[height]  |  optional , nil allowed  | Height (in) |  Must be a float. 
product[length]  |  optional , nil allowed  | Length (in) |  Must be a float. 
product[shipping_modifier]  |  optional , nil allowed  | Shipping modifier ($) |  Must be a float. 
product[meta_title]  |  optional , nil allowed  | Custom title for search engine optimization (SEO) |  Must be a String 
product[meta_description]  |  optional , nil allowed  | Description for SEO |  Must be a String 
product[meta_keywords]  |  optional , nil allowed  | Keywords for SEO |  Must be a String 
product[custom_url]  |  optional , nil allowed  | Custom URL |  Must be a String 
product[description]  |  optional , nil allowed  | Product description |  Must be a String 
product[category_ids]  |  optional , nil allowed  | Category IDs |  Must be an Array of Integer 
product[vendor_ids]  |  optional , nil allowed  | Vendor IDs |  Must be an Array of Integer 
product[active]  |  optional , nil allowed  | Active product |  Must be one of: true, false, 1, 0 
product[featured]  |  optional , nil allowed  | Featured product |  Must be one of: true, false, 1, 0 
product[tax_exempt]  |  optional , nil allowed  | Tax exempt |  Must be one of: true, false, 1, 0 
product[shipping_exempt]  |  optional , nil allowed  | Shipping exempt |  Must be one of: true, false, 1, 0 
product[enable_quantity_discount]  |  optional , nil allowed  | Enable/Disable quantity discounts |  Must be one of: true, false, 1, 0 
product[related_products_type]  |  optional , nil allowed  | Related products type |  Must be one of: auto, custom. 
product[enable_related_products]  |  optional , nil allowed  | Enable/Disable related products |  Must be one of: true, false, 1, 0 
product[enable_product_personalization]  |  optional , nil allowed  | Enable/Disable product personalization |  Must be one of: true, false, 1, 0 
product[enable_inventory]  |  optional , nil allowed  | Enable/Disable inventory |  Must be one of: true, false, 1, 0 
product[enable_product_options]  |  optional , nil allowed  | Enable/Disable product Options |  Must be one of: true, false, 1, 0 
product[enable_logo_locations]  |  optional , nil allowed  | Enable/Disable product logo locations |  Must be one of: true, false, 1, 0 
product[enable_decoration_methods]  |  optional , nil allowed  | Enabled/Disable product decoration methods |  Must be one of: true, false, 1, 0 


## Update product

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/579?token=GXzAxWkkyYLsESGQTU15 { "product": { "name": "Dark Chocolate" } } 
```

> The above request returns JSON structured like this:

```json
 { "name": "Dark Chocolate", "sku": "choc-1", "internal_id": "431234", "base_price": "10", "retail_price": "10", "cost": "10", "setup_charge": "10", "minimum_order_quantity": 10, "maximum_order_quantity": 20, "custom_tic": "12345", "weight": "10", "width": "10", "height": "10", "length": "10", "shipping_modifier": "10", "meta_title": "choco", "meta_description": "tasty choco", "meta_keywords": "tasty chocolate wonka", "custom_url": "chocolate", "description": "Very Tasty Dark Chocolate", "active": true, "featured": false, "tax_exempt": false, "shipping_exempt": false, "categories": [ { "id": 123, "name": "Chocolates" } ], "vendors": [ { "id": 234, "name": "The Willy Wonka Company" } ], "enable_quantity_discount": false, "related_products_type": "auto", "enable_related_products": false, "enable_product_personalization": false, "enable_inventory": false, "enable_logo_locations": false, "enable_decoration_methods": false, "primary_category_id": 36, "last_edited_date": "2016-03-29" } 
```

### HTTP Request

`PATCH /api/v1.1/products/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | User ID |  Must be a number. 
product  |  required  | Validations: |  Must be a Hash 
product[name]  |  optional  | Product name |  Must be a String 
product[sku]  |  optional  | Unique sku |  Must be a String 
product[internal_id]  |  optional , nil allowed  | Internal ID |  Must be a String 
product[base_price]  |  optional  | Base price ($) |  Must be a float. 
product[retail_price]  |  optional , nil allowed  | Retail price ($) |  Must be a float. 
product[cost]  |  optional , nil allowed  | Cost ($) |  Must be a float. 
product[setup_charge]  |  optional , nil allowed  | Setup charge ($) |  Must be a float. 
product[minimum_order_quantity]  |  optional , nil allowed  | Minimum Order Quantity |  Must be a number. 
product[maximum_order_quantity]  |  optional , nil allowed  | Maximum Order Quantity |  Must be a number. 
product[custom_tic]  |  optional , nil allowed  | Product tax code |  Must be a String 
product[primary_category_id]  |  optional , nil allowed  | ID of primary category |  Must be a number. 
product[weight]  |  optional , nil allowed  | Weight (lbs) |  Must be a float. 
product[width]  |  optional , nil allowed  | Width (in) |  Must be a float. 
product[height]  |  optional , nil allowed  | Height (in) |  Must be a float. 
product[length]  |  optional , nil allowed  | Length (in) |  Must be a float. 
product[shipping_modifier]  |  optional , nil allowed  | Shipping modifier ($) |  Must be a float. 
product[meta_title]  |  optional , nil allowed  | Custom title for search engine optimization (SEO) |  Must be a String 
product[meta_description]  |  optional , nil allowed  | Description for SEO |  Must be a String 
product[meta_keywords]  |  optional , nil allowed  | Keywords for SEO |  Must be a String 
product[custom_url]  |  optional , nil allowed  | Custom URL |  Must be a String 
product[description]  |  optional , nil allowed  | Product description |  Must be a String 
product[category_ids]  |  optional , nil allowed  | Category IDs |  Must be an Array of Integer 
product[vendor_ids]  |  optional , nil allowed  | Vendor IDs |  Must be an Array of Integer 
product[active]  |  optional , nil allowed  | Active product |  Must be one of: true, false, 1, 0 
product[featured]  |  optional , nil allowed  | Featured product |  Must be one of: true, false, 1, 0 
product[tax_exempt]  |  optional , nil allowed  | Tax exempt |  Must be one of: true, false, 1, 0 
product[shipping_exempt]  |  optional , nil allowed  | Shipping exempt |  Must be one of: true, false, 1, 0 
product[enable_quantity_discount]  |  optional , nil allowed  | Enable/Disable quantity discounts |  Must be one of: true, false, 1, 0 
product[related_products_type]  |  optional , nil allowed  | Related products type |  Must be one of: auto, custom. 
product[enable_related_products]  |  optional , nil allowed  | Enable/Disable related products |  Must be one of: true, false, 1, 0 
product[enable_product_personalization]  |  optional , nil allowed  | Enable/Disable product personalization |  Must be one of: true, false, 1, 0 
product[enable_inventory]  |  optional , nil allowed  | Enable/Disable inventory |  Must be one of: true, false, 1, 0 
product[enable_product_options]  |  optional , nil allowed  | Enable/Disable product Options |  Must be one of: true, false, 1, 0 
product[enable_logo_locations]  |  optional , nil allowed  | Enable/Disable product logo locations |  Must be one of: true, false, 1, 0 
product[enable_decoration_methods]  |  optional , nil allowed  | Enabled/Disable product decoration methods |  Must be one of: true, false, 1, 0 


## Update product

```shell
 PUT https://subdomain.mybrightsites.com/api/v1.1/products/579?token=GXzAxWkkyYLsESGQTU15 { "product": { "name": "Dark Chocolate" } } 
```

> The above request returns JSON structured like this:

```json
 { "name": "Dark Chocolate", "sku": "choc-1", "internal_id": "431234", "base_price": "10", "retail_price": "10", "cost": "10", "setup_charge": "10", "minimum_order_quantity": 10, "maximum_order_quantity": 20, "custom_tic": "12345", "weight": "10", "width": "10", "height": "10", "length": "10", "shipping_modifier": "10", "meta_title": "choco", "meta_description": "tasty choco", "meta_keywords": "tasty chocolate wonka", "custom_url": "chocolate", "description": "Very Tasty Dark Chocolate", "active": true, "featured": false, "tax_exempt": false, "shipping_exempt": false, "categories": [ { "id": 123, "name": "Chocolates" } ], "vendors": [ { "id": 234, "name": "The Willy Wonka Company" } ], "enable_quantity_discount": false, "related_products_type": "auto", "enable_related_products": false, "enable_product_personalization": false, "enable_inventory": false, "enable_logo_locations": false, "enable_decoration_methods": false, "primary_category_id": 36, "last_edited_date": "2016-03-29" } 
```

### HTTP Request

`PUT /api/v1.1/products/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | User ID |  Must be a number. 
product  |  required  | Validations: |  Must be a Hash 
product[name]  |  optional  | Product name |  Must be a String 
product[sku]  |  optional  | Unique sku |  Must be a String 
product[internal_id]  |  optional , nil allowed  | Internal ID |  Must be a String 
product[base_price]  |  optional  | Base price ($) |  Must be a float. 
product[retail_price]  |  optional , nil allowed  | Retail price ($) |  Must be a float. 
product[cost]  |  optional , nil allowed  | Cost ($) |  Must be a float. 
product[setup_charge]  |  optional , nil allowed  | Setup charge ($) |  Must be a float. 
product[minimum_order_quantity]  |  optional , nil allowed  | Minimum Order Quantity |  Must be a number. 
product[maximum_order_quantity]  |  optional , nil allowed  | Maximum Order Quantity |  Must be a number. 
product[custom_tic]  |  optional , nil allowed  | Product tax code |  Must be a String 
product[primary_category_id]  |  optional , nil allowed  | ID of primary category |  Must be a number. 
product[weight]  |  optional , nil allowed  | Weight (lbs) |  Must be a float. 
product[width]  |  optional , nil allowed  | Width (in) |  Must be a float. 
product[height]  |  optional , nil allowed  | Height (in) |  Must be a float. 
product[length]  |  optional , nil allowed  | Length (in) |  Must be a float. 
product[shipping_modifier]  |  optional , nil allowed  | Shipping modifier ($) |  Must be a float. 
product[meta_title]  |  optional , nil allowed  | Custom title for search engine optimization (SEO) |  Must be a String 
product[meta_description]  |  optional , nil allowed  | Description for SEO |  Must be a String 
product[meta_keywords]  |  optional , nil allowed  | Keywords for SEO |  Must be a String 
product[custom_url]  |  optional , nil allowed  | Custom URL |  Must be a String 
product[description]  |  optional , nil allowed  | Product description |  Must be a String 
product[category_ids]  |  optional , nil allowed  | Category IDs |  Must be an Array of Integer 
product[vendor_ids]  |  optional , nil allowed  | Vendor IDs |  Must be an Array of Integer 
product[active]  |  optional , nil allowed  | Active product |  Must be one of: true, false, 1, 0 
product[featured]  |  optional , nil allowed  | Featured product |  Must be one of: true, false, 1, 0 
product[tax_exempt]  |  optional , nil allowed  | Tax exempt |  Must be one of: true, false, 1, 0 
product[shipping_exempt]  |  optional , nil allowed  | Shipping exempt |  Must be one of: true, false, 1, 0 
product[enable_quantity_discount]  |  optional , nil allowed  | Enable/Disable quantity discounts |  Must be one of: true, false, 1, 0 
product[related_products_type]  |  optional , nil allowed  | Related products type |  Must be one of: auto, custom. 
product[enable_related_products]  |  optional , nil allowed  | Enable/Disable related products |  Must be one of: true, false, 1, 0 
product[enable_product_personalization]  |  optional , nil allowed  | Enable/Disable product personalization |  Must be one of: true, false, 1, 0 
product[enable_inventory]  |  optional , nil allowed  | Enable/Disable inventory |  Must be one of: true, false, 1, 0 
product[enable_product_options]  |  optional , nil allowed  | Enable/Disable product Options |  Must be one of: true, false, 1, 0 
product[enable_logo_locations]  |  optional , nil allowed  | Enable/Disable product logo locations |  Must be one of: true, false, 1, 0 
product[enable_decoration_methods]  |  optional , nil allowed  | Enabled/Disable product decoration methods |  Must be one of: true, false, 1, 0 


## Delete product

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/products/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "name": "Dark Chocolate", "sku": "choc-1", "internal_id": "431234", "base_price": "10", "retail_price": "10", "cost": "10", "setup_charge": "10", "minimum_order_quantity": 10, "maximum_order_quantity": 20, "custom_tic": "12345", "weight": "10", "width": "10", "height": "10", "length": "10", "shipping_modifier": "10", "meta_title": "choco", "meta_description": "tasty choco", "meta_keywords": "tasty chocolate wonka", "custom_url": "chocolate", "description": "Very Tasty Dark Chocolate", "active": true, "featured": false, "tax_exempt": false, "shipping_exempt": false, "categories": [ { "id": 123, "name": "Chocolates" } ], "vendors": [ { "id": 234, "name": "The Willy Wonka Company" } ], "enable_quantity_discount": false, "related_products_type": "auto", "enable_related_products": false, "enable_product_personalization": false, "enable_inventory": false, "enable_logo_locations": false, "enable_decoration_methods": false, "primary_category_id": 36, "last_edited_date": "2016-03-29" } 
```

### HTTP Request

`DELETE /api/v1.1/products/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
id  |  required  | User ID |  Must be a number. 


