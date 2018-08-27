#  Product sub options 

## List of sub options for option

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/22287/options/47204/sub_options?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "sub_options": [ { "id": 556155, "name": "Small", "sub_sku": "", "price_modifier": "0.0", "position": 1 } ] } 
```

### HTTP Request

`GET /api/v1/products/:product_id/options/:option_id/sub_options`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_id  |  required  | Option ID |  Must be a number. 


## Show sub option

```shell
 GET https://subdomain.mybrightsites.com/api/v1/products/22287/options/47204/sub_options/1234?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 556155, "name": "Small", "sub_sku": "", "image_src": "http://www.imageprovider.com/image.jpg" "price_modifier": "0.0", "position": 2 } 
```

### HTTP Request

`GET /api/v1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_id  |  required  | Option ID |  Must be a number. 
id  |  required  | Sub option ID |  Must be a number. 


## Create sub option

```shell
 POST https://subdomain.mybrightsites.com/api/v1/products/22287/options/47204/sub_options?token=GXzAxWkkyYLsESGQTU15 { "sub_option": { "name": "X-Small", "sub_sku": "SKU123", "price_modifier": 2, "image_data": "R0lGODlhbgCMAPf/APbr48VySrxTO7IgKt2qmKQdJeK8lsFjROG5p", "filename": "myimage.jpg", "position": 3 } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 559579, "name": "X-Small", "sub_sku": "SKU123", "image_src": "http://www.imageprovider.com/image.jpg" "price_modifier": "2.0", "position": 3 } 
```

### HTTP Request

`POST /api/v1/products/:product_id/options/:option_id/sub_options`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_id  |  required  | Option ID |  Must be a number. 
sub_option  |  required  | Validations: |  Must be a Hash 
sub_option[name]  |  required  | Name of sub option |  Must be a String 
sub_option[sub_sku]  |  optional , nil allowed  | SKU |  Must be a String 
sub_option[price_modifier]  |  optional , nil allowed  | Price Modifier |  Must be a float. 
sub_option[position]  |  optional , nil allowed  | Position of order |  Must be a number. 
sub_option[image_data]  |  optional , nil allowed  | Base64 Image representation |  Must be a String 
sub_option[filename]  |  optional , nil allowed  | Image file name |  Must be a String 


## Update sub option

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/22287/options/47204/sub_options/1234?token=GXzAxWkkyYLsESGQTU15 { "sub_option": { "name": "Large" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 559579, "name": "Large", "sub_sku": "SKU123", "image_src": "http://www.imageprovider.com/image.jpg" "price_modifier": "2.0", "position": 3 } 
```

### HTTP Request

`PATCH /api/v1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_id  |  required  | Option ID |  Must be a number. 
sub_option  |  required  | Validations: |  Must be a Hash 
sub_option[name]  |  optional  | Name of sub option |  Must be a String 
sub_option[sub_sku]  |  optional , nil allowed  | SKU |  Must be a String 
sub_option[price_modifier]  |  optional , nil allowed  | Price Modifier |  Must be a float. 
sub_option[position]  |  optional , nil allowed  | Position of order |  Must be a number. 
sub_option[image_data]  |  optional , nil allowed  | Base64 Image representation |  Must be a String 
sub_option[filename]  |  optional , nil allowed  | Image file name |  Must be a String 


## Update sub option

```shell
 PUT https://subdomain.mybrightsites.com/api/v1/products/22287/options/47204/sub_options/1234?token=GXzAxWkkyYLsESGQTU15 { "sub_option": { "name": "Large" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 559579, "name": "Large", "sub_sku": "SKU123", "image_src": "http://www.imageprovider.com/image.jpg" "price_modifier": "2.0", "position": 3 } 
```

### HTTP Request

`PUT /api/v1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_id  |  required  | Option ID |  Must be a number. 
sub_option  |  required  | Validations: |  Must be a Hash 
sub_option[name]  |  optional  | Name of sub option |  Must be a String 
sub_option[sub_sku]  |  optional , nil allowed  | SKU |  Must be a String 
sub_option[price_modifier]  |  optional , nil allowed  | Price Modifier |  Must be a float. 
sub_option[position]  |  optional , nil allowed  | Position of order |  Must be a number. 
sub_option[image_data]  |  optional , nil allowed  | Base64 Image representation |  Must be a String 
sub_option[filename]  |  optional , nil allowed  | Image file name |  Must be a String 


## Delete sub option

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1/products/22287/options/47204/sub_options/559579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 559579, "name": "Large", "sub_sku": "SKU123", "image_src": "http://www.imageprovider.com/image.jpg" "price_modifier": "2.0" "position": 3 } 
```

### HTTP Request

`DELETE /api/v1/products/:product_id/options/:option_id/sub_options/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
option_id  |  required  | Option ID |  Must be a number. 
id  |  required  | Sub Option ID |  Must be a number. 


