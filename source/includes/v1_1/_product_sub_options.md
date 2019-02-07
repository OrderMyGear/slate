#  Product sub options

## List of sub options for option

List all product sub options for a specific product option based on the option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204/sub_options?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "sub_options": [
    {
      "id": 556155,
      "name": "Small",
      "sub_sku": "",
      "price_modifier": "0.0",
      "position": 1
    }
  ]
}
```

### HTTP Request

`GET /api/v1.1/products/:product_id/options/:option_id/sub_options`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>


## Show sub option

Show you a specific product sub option for a specific sub option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204/sub_options/1234?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 556155,
  "name": "Small",
  "sub_sku": "",
  "image_src": "http://www.imageprovider.com/image.jpg",
  "price_modifier": "0.0",
  "position": 2
}
```

### HTTP Request

`GET /api/v1.1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Sub option ID</div><div> Must be a number. </div>


## Create sub option

Create a product sub option based on a specific product option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204/sub_options?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "sub_option": {
    "name": "X-Small",
    "sub_sku": "SKU123",
    "price_modifier": 2,
    "image_data": "R0lGODlhbgCMAPf/APbr48VySrxTO7IgKt2qmKQdJeK8lsFjROG5p",
    "filename": "myimage.jpg",
    "position": 3
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 559579,
  "name": "X-Small",
  "sub_sku": "SKU123",
  "image_src": "http://www.imageprovider.com/image.jpg",
  "price_modifier": "2.0",
  "position": 3
}
```

### HTTP Request

`POST /api/v1.1/products/:product_id/options/:option_id/sub_options`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>sub_option </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>sub_option[name] </strong></div><div> required </div> | <div>Name of sub option</div><div> Must be a String </div>
<div><strong>sub_option[sub_sku] </strong></div><div> optional , nil allowed </div> | <div>SKU</div><div> Must be a String </div>
<div><strong>sub_option[price_modifier] </strong></div><div> optional , nil allowed </div> | <div>Price Modifier</div><div> Must be a float. </div>
<div><strong>sub_option[position] </strong></div><div> optional , nil allowed </div> | <div>Position of order</div><div> Must be a number. </div>
<div><strong>sub_option[image_data] </strong></div><div> optional , nil allowed </div> | <div>Base64 Image representation</div><div> Must be a String </div>
<div><strong>sub_option[filename] </strong></div><div> optional , nil allowed </div> | <div>Image file name</div><div> Must be a String </div>


## Update sub option

Update a product sub option based on a specific sub option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204/sub_options/1234?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "sub_option": {
    "name": "Large"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
  "id": 559579,
  "name": "Large",
  "sub_sku": "SKU123",
  "image_src": "http://www.imageprovider.com/image.jpg",
  "price_modifier": "2.0",
  "position": 3
}
```

### HTTP Request

`PUT /api/v1.1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Sub Option ID</div><div> Must be a number. </div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>sub_option </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>sub_option[name] </strong></div><div> optional </div> | <div>Name of sub option</div><div> Must be a String </div>
<div><strong>sub_option[sub_sku] </strong></div><div> optional , nil allowed </div> | <div>SKU</div><div> Must be a String </div>
<div><strong>sub_option[price_modifier] </strong></div><div> optional , nil allowed </div> | <div>Price Modifier</div><div> Must be a float. </div>
<div><strong>sub_option[position] </strong></div><div> optional , nil allowed </div> | <div>Position of order</div><div> Must be a number. </div>
<div><strong>sub_option[image_data] </strong></div><div> optional , nil allowed </div> | <div>Base64 Image representation</div><div> Must be a String </div>
<div><strong>sub_option[filename] </strong></div><div> optional , nil allowed </div> | <div>Image file name</div><div> Must be a String </div>


## Delete sub option

Delete a product sub option based on a specific sub option ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1/products/22287/options/47204/sub_options/559579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
  "id": 559579,
  "name": "Large",
  "sub_sku": "SKU123",
  "image_src": "http://www.imageprovider.com/image.jpg",
  "price_modifier": "2.0",
  "position": 3
}
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>option_id </strong></div><div> required </div> | <div>Option ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Sub Option ID</div><div> Must be a number. </div>


