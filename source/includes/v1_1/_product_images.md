#  Product images 

## List of product images

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/1/images?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "images": [ { "id": 1, "thumbnail": false, "primary": true, "position": 0, "src": "https://www.imagestorage.com/image1.jpg" }, { "id": 2, "thumbnail": true, "primary": false, "position": 1, "src": "https://www.imagestorage.com/image2.jpg" } ] } 
```

### HTTP Request

`GET /api/api/v1.1/products/:product_id/images`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 


## Show product image

```shell
 GET https://subdomain.mybrightsites.com/api/v1.1/products/579/product_images/1?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 1, "primary": true, "thumbnail": false, "position": 0, "src": "https://www.imagestorage.com/image3.jpg" } 
```

### HTTP Request

`GET /api/v1.1/products/:product_id/images/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Product Image ID |  Must be a number. 


## Create product image

```shell
 POST https://subdomain.mybrightsites.com/api/v1.1/products/1/images?token=GXzAxWkkyYLsESGQTU15 { "image": { "position": 0, "primary": true, "thumbnail": false, "image_data": "R0lGODlhbgCMAPf/APbr48VySrxTO7IgKt2qmKQdJeK8lsFjROG5p/nz7Zg3 MNmnd7Q1MLNVS9GId71hSJMZIuzTu4UtKbeEeakhKMl8U8WYjfr18YQaIbAf KKwhKdKzqpQtLebFortOOejKrOjZ1Mt7aMNpVbAqLLV7bsNqR+3WwMqEWenN sZYxL/Ddy/Pm2e7ZxLlUQrIjNPXp3bU5MbhENbEtLtqhj5ZQTfHh0bMxL7Ip NsNyUYkZIrZJPcqGdYIUHb5aPKkeJnoUHd2yiJkiLKYiKLRFOsyJXKVDO8up osFaS+TBnK4kKti5sNaYg/z49aqYl5kqLrljUtORfMOlo/36+H4ZH8yDYq0f KKFYTaU9MrY8MrZBNXwXHpgaIdGVYu/byLZNP9SaZLIyOuXCtHkpJst+Wpcm", "filename": "image3.jpg" } } 
```

> The above request returns JSON structured like this:

```json
 { "id": 2, "primary": true, "thumbnail": false, "position": 0, "src": "https://www.imagestorage.com/image3.jpg" } 
```

### HTTP Request

`POST /api/api/v1.1/product/:product_id/images`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
image  |  required  | Validations: |  Must be a Hash 
image[primary]  |  optional  | Primary Image switcher |  Must be one of: true, false, 1, 0 
image[thumbnail]  |  optional  | Thumbnail Image switcher |  Must be one of: true, false, 1, 0 
image[position]  |  optional  | Image list order |  Must be a number. 
image[image_data]  |  required  | Base64 Image representation |  Must be a String 
image[filename]  |  required  | Image file name |  Must be a String 


## Update product image

### HTTP Request

`PUT /api/api/v1.1/product/:product_id/images/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  optional  | Product Image ID |  Must be a number. 
image  |  required  | Validations: |  Must be a Hash 
image[primary]  |  optional  | Primary Image switcher |  Must be one of: true, false, 1, 0 
image[thumbnail]  |  optional  | Thumbnail Image switcher |  Must be one of: true, false, 1, 0 
image[position]  |  optional  | Image list order |  Must be a number. 
image[image_data]  |  optional  | Base64 Image representation |  Must be a String 
image[filename]  |  optional  | Image file name |  Must be a String 


## Delete product image

```shell
 DELETE https://subdomain.mybrightsites.com/api/v1.1/products/1/images/579?token=GXzAxWkkyYLsESGQTU15 
```

> The above request returns JSON structured like this:

```json
 { "id": 1, "primary": true, "thumbnail": false, "position": 0, "src": "https://www.imagestorage.com/image.jpg" } 
```

### HTTP Request

`DELETE /api/v1.1/products/:product_id/images/:id`

### Query Parameters

Parameter | Required | Description | Validations
--------- | -------- | ----------- | -----------
product_id  |  required  | Product ID |  Must be a number. 
id  |  required  | Product Image ID |  Must be a number. 


