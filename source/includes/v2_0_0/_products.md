# Products

## List products

List all products in the store.
Keep in mind, the response will return up to 500 records on a single page and you will need to use "per_page" and "page" URL parameters to see all the records.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/products?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "products": [
    {
      "id": 579,
      "name": "Chocalate",
      "sku": "choc-1",
      "internal_id": "431234",
      "categories": [
        {
          "id": 123,
          "name": "Chocolates"
        }
      ],
      "vendors": [
        {
          "id": 234,
          "name": "The Willy Wonka Company"
        }
      ],
      "active": true,
      "created_at": "2016-03-29T22:53:03-06:00",
      "updated_at": "2016-03-29T22:53:03-06:00"
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

`GET /api/v2.0.0/products`

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>categories </strong></div><div>optional</div> | <div>Filter by categories</div><div>Must be one of: Array, String</div>
<div><strong>sku </strong></div><div>optional</div> | <div>Filter by sku</div><div>Must be a String</div>
<div><strong>internal_id </strong></div><div>optional</div> | <div>Filter by Internal ID</div><div>Must be a String</div>
<div><strong>name </strong></div><div>optional</div> | <div>Filter by name</div><div>Must be a String</div>
<div><strong>vendors </strong></div><div>optional</div> | <div>Filter by vendors</div><div>Must be one of: Array, String</div>
<div><strong>created_at_from </strong></div><div>optional</div> | <div>Filter by date created from</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then UTC will be used by default.</div>
<div><strong>created_at_to </strong></div><div>optional</div> | <div>Filter by date created to</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then UTC will be used by default.</div>
<div><strong>updated_at_from </strong></div><div>optional</div> | <div>Filter by date updated from</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then UTC will be used by default.</div>
<div><strong>updated_at_to </strong></div><div>optional</div> | <div>Filter by date updated to</div><div>Valid format is <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a>, e.g. “YYYY-MM-DDThh:mm:ss”. You can provide a time-zone when using this parameter. If no time-zone is provided, then UTC will be used by default.</div>
<div><strong>page </strong></div><div>optional</div> | <div>Pagination page number</div><div>Must be a number</div>
<div><strong>per_page </strong></div><div>optional</div> | <div>Pagination per page number</div><div>Must be a number</div>

## Show product

Show a specific product configuration based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/products/579?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "name": "Chocolate",
  "sku": "choc-1",
  "sku_separator": "-",
  "internal_id": "431234",
  "base_price": "10",
  "retail_price": "10",
  "cost": "10",
  "setup_charge": "10",
  "minimum_order_quantity": 10,
  "maximum_order_quantity": 20,
  "weight": "10",
  "width": "10",
  "height": "10",
  "length": "10",
  "shipping_modifier": "10",
  "meta_title": "choco",
  "meta_description": "tasty choco",
  "meta_keywords": "tasty chocolate wonka",
  "custom_url": "chocolate",
  "description": "Very Tasty Dark Chocolate",
  "active": true,
  "featured": false,
  "tax_exempt": false,
  "shipping_exempt": false,
  "categories": [
    {
      "id": 123,
      "name": "Chocolates"
    }
  ],
  "vendors": [
    {
      "id": 234,
      "name": "The Willy Wonka Company"
    }
  ],
  "options": [
    {
      "id": 301559,
      "name": "size",
      "friendly_name": "Size",
      "option_type": "size",
      "price_modifier_type": "$",
      "show_in_inventory": true,
      "show_as_thumbs": false,
      "include_in_images": false,
      "required": true,
      "multiple_quantity": true,
      "position": 2
    }
  ],
  "sub_options": [
    {
      "id": 1393159,
      "name": "Green",
      "sub_sku": "GRN",
      "price_modifier": "0.0",
      "image_src": null,
      "position": 0,
      "product_option_id": 301559
    }
  ],
  "inventories": [
    {
      "id": 774,
      "inventory": 23,
      "trigger": 6,
      "track": false,
      "allow_negative": false,
      "sub_sku": "GRN",
      "sub_option_ids": [
        1393159
      ]
    }
  ],
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "tax_code": "12345",
  "created_at": "2016-03-29T22:53:03-06:00",
  "updated_at": "2016-03-29T22:53:03-06:00"
}
```

### HTTP Request

`GET /api/v2.0.0/products/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>

## Create product

Create a brand new product for your store.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/products?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "product": {
    "name": "Chocolate",
    "sku": "choc-1",
    "sku_separator": "-",
    "internal_id": "431234",
    "base_price": 10,
    "retail_price": 10,
    "cost": 10,
    "setup_charge": 10,
    "minimum_order_quantity": 10,
    "maximum_order_quantity": 20,
    "tax_code": "12345",
    "weight": 10,
    "width": 10,
    "height": 10,
    "length": 10,
    "shipping_modifier": 10,
    "meta_title": "choco",
    "meta_description": "tasty choco",
    "meta_keywords": "tasty chocolate wonka",
    "custom_url": "chocolate",
    "description": "Very Tasty Dark Chocolate",
    "active": true,
    "featured": false,
    "tax_exempt": false,
    "shipping_exempt": false,
    "vendor_ids": [ 234 ],
    "category_ids": [ 123 ],
    "enable_quantity_discount": false,
    "related_products_type": "auto",
    "enable_related_products": false,
    "enable_product_personalization": false,
    "enable_inventory": false,
    "enable_logo_locations": false,
    "enable_decoration_methods": false,
    "primary_category_id": 36
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "name": "Chocolate",
  "sku": "choc-1",
  "sku_separator": "-",
  "internal_id": "431234",
  "base_price": "10",
  "retail_price": "10",
  "cost": "10",
  "setup_charge": "10",
  "minimum_order_quantity": 10,
  "maximum_order_quantity": 20,
  "weight": "10",
  "width": "10",
  "height": "10",
  "length": "10",
  "shipping_modifier": "10",
  "meta_title": "choco",
  "meta_description": "tasty choco",
  "meta_keywords": "tasty chocolate wonka",
  "custom_url": "chocolate",
  "description": "Very Tasty Dark Chocolate",
  "active": true,
  "featured": false,
  "tax_exempt": false,
  "shipping_exempt": false,
  "categories": [
    {
      "id": 123,
      "name": "Chocolates"
    }
  ],
  "vendors": [
    {
      "id": 234,
      "name": "The Willy Wonka Company"
    }
  ],
  "options": [],
  "sub_options": [],
  "inventories": [],
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "tax_code": "12345",
  "created_at": "2016-03-29T22:53:03-06:00",
  "updated_at": "2016-03-29T22:53:03-06:00"
}
```

### HTTP Request

`POST /api/v2.0.0/products`

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>product </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>product[name] </strong></div><div>required</div> | <div>Product name</div><div>Must be a String</div>
<div><strong>product[sku] </strong></div><div>required</div> | <div>Unique sku</div><div>Must be a String</div>
<div><strong>product[sku_separator] </strong></div><div>optional</div> | <div>SKU separator</div><div>Must be a String (default to "-")</div>
<div><strong>product[internal_id] </strong></div><div>optional , nil allowed</div> | <div>Internal ID</div><div>Must be a String</div>
<div><strong>product[base_price] </strong></div><div>required</div> | <div>Base price ($)</div><div>Must be a float</div>
<div><strong>product[retail_price] </strong></div><div>optional , nil allowed</div> | <div>Retail price ($)</div><div>Must be a float</div>
<div><strong>product[cost] </strong></div><div>optional , nil allowed</div> | <div>Cost ($)</div><div>Must be a float</div>
<div><strong>product[setup_charge] </strong></div><div>optional , nil allowed</div> | <div>Setup charge ($)</div><div>Must be a float</div>
<div><strong>product[minimum_order_quantity] </strong></div><div>optional , nil allowed</div> | <div>Minimum Order Quantity</div><div>Must be a number</div>
<div><strong>product[maximum_order_quantity] </strong></div><div>optional , nil allowed</div> | <div>Maximum Order Quantity</div><div>Must be a number</div>
<div><strong>product[tax_code] </strong></div><div>optional , nil allowed</div> | <div>Product tax code</div><div>Must be a String</div>
<div><strong>product[primary_category_id] </strong></div><div>optional , nil allowed</div> | <div>ID of primary category</div><div>Must be a number</div>
<div><strong>product[weight] </strong></div><div>optional , nil allowed</div> | <div>Weight (lbs)</div><div>Must be a float</div>
<div><strong>product[width] </strong></div><div>optional , nil allowed</div> | <div>Width (in)</div><div>Must be a float</div>
<div><strong>product[height] </strong></div><div>optional , nil allowed</div> | <div>Height (in)</div><div>Must be a float</div>
<div><strong>product[length] </strong></div><div>optional , nil allowed</div> | <div>Length (in)</div><div>Must be a float</div>
<div><strong>product[shipping_modifier] </strong></div><div>optional , nil allowed</div> | <div>Shipping modifier ($)</div><div>Must be a float</div>
<div><strong>product[meta_title] </strong></div><div>optional , nil allowed</div> | <div>Custom title for search engine optimization (SEO)</div><div>Must be a String</div>
<div><strong>product[meta_description] </strong></div><div>optional , nil allowed</div> | <div>Description for SEO</div><div>Must be a String</div>
<div><strong>product[meta_keywords] </strong></div><div>optional , nil allowed</div> | <div>Keywords for SEO</div><div>Must be a String</div>
<div><strong>product[custom_url] </strong></div><div>optional , nil allowed</div> | <div>Custom URL</div><div>Must be a String</div>
<div><strong>product[description] </strong></div><div>optional , nil allowed</div> | <div>Product description</div><div>Must be a String</div>
<div><strong>product[category_ids] </strong></div><div>optional , nil allowed</div> | <div>Category IDs</div><div>Must be an Array of Integer</div>
<div><strong>product[vendor_ids] </strong></div><div>optional , nil allowed</div> | <div>Vendor IDs</div><div>Must be an Array of Integer</div>
<div><strong>product[active] </strong></div><div>optional , nil allowed</div> | <div>Active product</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[featured] </strong></div><div>optional , nil allowed</div> | <div>Featured product</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[tax_exempt] </strong></div><div>optional , nil allowed</div> | <div>Tax exempt</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[shipping_exempt] </strong></div><div>optional , nil allowed</div> | <div>Shipping exempt</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_quantity_discount] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable quantity discounts</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[related_products_type] </strong></div><div>optional , nil allowed</div> | <div>Related products type</div><div>Must be one of: auto, custom</div>
<div><strong>product[enable_related_products] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable related products</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_product_personalization] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable product personalization</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_inventory] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable inventory</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_product_options] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable product Options</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_logo_locations] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable product logo locations</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_decoration_methods] </strong></div><div>optional , nil allowed</div> | <div>Enabled/Disable product decoration methods</div><div>Must be one of: true, false, 1, 0</div>

## Update product

Update a specific product based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/products/579?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "product": {
    "name": "Dark Chocolate"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "name": "Dark Chocolate",
  "sku": "choc-1",
  "sku_separator": "-",
  "internal_id": "431234",
  "base_price": "10",
  "retail_price": "10",
  "cost": "10",
  "setup_charge": "10",
  "minimum_order_quantity": 10,
  "maximum_order_quantity": 20,
  "weight": "10",
  "width": "10",
  "height": "10",
  "length": "10",
  "shipping_modifier": "10",
  "meta_title": "choco",
  "meta_description": "tasty choco",
  "meta_keywords": "tasty chocolate wonka",
  "custom_url": "chocolate",
  "description": "Very Tasty Dark Chocolate",
  "active": true,
  "featured": false,
  "tax_exempt": false,
  "shipping_exempt": false,
  "categories": [
    {
      "id": 123,
      "name": "Chocolates"
    }
  ],
  "vendors": [
    {
      "id": 234,
      "name": "The Willy Wonka Company"
    }
  ],
  "options": [
    {
      "id": 301559,
      "name": "size",
      "friendly_name": "Size",
      "option_type": "size",
      "price_modifier_type": "$",
      "show_in_inventory": true,
      "show_as_thumbs": false,
      "include_in_images": false,
      "required": true,
      "multiple_quantity": true,
      "position": 2
    }
  ],
  "sub_options": [
    {
      "id": 1393159,
      "name": "Green",
      "sub_sku": "GRN",
      "price_modifier": "0.0",
      "image_src": null,
      "position": 0,
      "product_option_id": 301559
    }
  ],
  "inventories": [
    {
      "id": 774,
      "inventory": 23,
      "trigger": 6,
      "track": false,
      "allow_negative": false,
      "sub_sku": "GRN",
      "sub_option_ids": [
        1393159
      ]
    }
  ],
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "tax_code": "12345",
  "created_at": "2016-03-29T22:53:03-06:00",
  "updated_at": "2016-03-29T22:53:03-06:00"
}
```

### HTTP Request

`PUT /api/v2.0.0/products/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>

### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>product </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>product[name] </strong></div><div>optional</div> | <div>Product name</div><div>Must be a String</div>
<div><strong>product[sku] </strong></div><div>optional</div> | <div>Unique sku</div><div>Must be a String</div>
<div><strong>product[sku_separator] </strong></div><div>optional</div> | <div>SKU separator</div><div>Must be a String</div>
<div><strong>product[internal_id] </strong></div><div>optional , nil allowed</div> | <div>Internal ID</div><div>Must be a String</div>
<div><strong>product[base_price] </strong></div><div>optional</div> | <div>Base price ($)</div><div>Must be a float</div>
<div><strong>product[retail_price] </strong></div><div>optional , nil allowed</div> | <div>Retail price ($)</div><div>Must be a float</div>
<div><strong>product[cost] </strong></div><div>optional , nil allowed</div> | <div>Cost ($)</div><div>Must be a float</div>
<div><strong>product[setup_charge] </strong></div><div>optional , nil allowed</div> | <div>Setup charge ($)</div><div>Must be a float</div>
<div><strong>product[minimum_order_quantity] </strong></div><div>optional , nil allowed</div> | <div>Minimum Order Quantity</div><div>Must be a number</div>
<div><strong>product[maximum_order_quantity] </strong></div><div>optional , nil allowed</div> | <div>Maximum Order Quantity</div><div>Must be a number</div>
<div><strong>product[tax_code] </strong></div><div>optional , nil allowed</div> | <div>Product tax code</div><div>Must be a String</div>
<div><strong>product[primary_category_id] </strong></div><div>optional , nil allowed</div> | <div>ID of primary category</div><div>Must be a number</div>
<div><strong>product[weight] </strong></div><div>optional , nil allowed</div> | <div>Weight (lbs)</div><div>Must be a float</div>
<div><strong>product[width] </strong></div><div>optional , nil allowed</div> | <div>Width (in)</div><div>Must be a float</div>
<div><strong>product[height] </strong></div><div>optional , nil allowed</div> | <div>Height (in)</div><div>Must be a float</div>
<div><strong>product[length] </strong></div><div>optional , nil allowed</div> | <div>Length (in)</div><div>Must be a float</div>
<div><strong>product[shipping_modifier] </strong></div><div>optional , nil allowed</div> | <div>Shipping modifier ($)</div><div>Must be a float</div>
<div><strong>product[meta_title] </strong></div><div>optional , nil allowed</div> | <div>Custom title for search engine optimization (SEO)</div><div>Must be a String</div>
<div><strong>product[meta_description] </strong></div><div>optional , nil allowed</div> | <div>Description for SEO</div><div>Must be a String</div>
<div><strong>product[meta_keywords] </strong></div><div>optional , nil allowed</div> | <div>Keywords for SEO</div><div>Must be a String</div>
<div><strong>product[custom_url] </strong></div><div>optional , nil allowed</div> | <div>Custom URL</div><div>Must be a String</div>
<div><strong>product[description] </strong></div><div>optional , nil allowed</div> | <div>Product description</div><div>Must be a String</div>
<div><strong>product[category_ids] </strong></div><div>optional , nil allowed</div> | <div>Category IDs</div><div>Must be an Array of Integer</div>
<div><strong>product[vendor_ids] </strong></div><div>optional , nil allowed</div> | <div>Vendor IDs</div><div>Must be an Array of Integer</div>
<div><strong>product[active] </strong></div><div>optional , nil allowed</div> | <div>Active product</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[featured] </strong></div><div>optional , nil allowed</div> | <div>Featured product</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[tax_exempt] </strong></div><div>optional , nil allowed</div> | <div>Tax exempt</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[shipping_exempt] </strong></div><div>optional , nil allowed</div> | <div>Shipping exempt</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_quantity_discount] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable quantity discounts</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[related_products_type] </strong></div><div>optional , nil allowed</div> | <div>Related products type</div><div>Must be one of: auto, custom</div>
<div><strong>product[enable_related_products] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable related products</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_product_personalization] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable product personalization</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_inventory] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable inventory</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_product_options] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable product Options</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_logo_locations] </strong></div><div>optional , nil allowed</div> | <div>Enable/Disable product logo locations</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>product[enable_decoration_methods] </strong></div><div>optional , nil allowed</div> | <div>Enabled/Disable product decoration methods</div><div>Must be one of: true, false, 1, 0</div>

## Delete product

Delete a specific product from the store based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.0.0/products/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "name": "Dark Chocolate",
  "sku": "choc-1",
  "sku_separator": "-",
  "internal_id": "431234",
  "base_price": "10",
  "retail_price": "10",
  "cost": "10",
  "setup_charge": "10",
  "minimum_order_quantity": 10,
  "maximum_order_quantity": 20,
  "weight": "10",
  "width": "10",
  "height": "10",
  "length": "10",
  "shipping_modifier": "10",
  "meta_title": "choco",
  "meta_description": "tasty choco",
  "meta_keywords": "tasty chocolate wonka",
  "custom_url": "chocolate",
  "description": "Very Tasty Dark Chocolate",
  "active": true,
  "featured": false,
  "tax_exempt": false,
  "shipping_exempt": false,
  "categories": [
    {
      "id": 123,
      "name": "Chocolates"
    }
  ],
  "vendors": [
    {
      "id": 234,
      "name": "The Willy Wonka Company"
    }
  ],
  "options": [
    {
      "id": 301559,
      "name": "size",
      "friendly_name": "Size",
      "option_type": "size",
      "price_modifier_type": "$",
      "show_in_inventory": true,
      "show_as_thumbs": false,
      "include_in_images": false,
      "required": true,
      "multiple_quantity": true,
      "position": 2
    }
  ],
  "sub_options": [
    {
      "id": 1393159,
      "name": "Green",
      "sub_sku": "GRN",
      "price_modifier": "0.0",
      "image_src": null,
      "position": 0,
      "product_option_id": 301559
    }
  ],
  "inventories": [
    {
      "id": 774,
      "inventory": 23,
      "trigger": 6,
      "track": false,
      "allow_negative": false,
      "sub_sku": "GRN",
      "sub_option_ids": [
        1393159
      ]
    }
  ],
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "tax_code": "12345",
  "created_at": "2016-03-29T22:53:03-06:00",
  "updated_at": "2016-03-29T22:53:03-06:00"
}
```

### HTTP Request

`DELETE /api/v2.0.0/products/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
