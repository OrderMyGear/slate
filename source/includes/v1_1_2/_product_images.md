#  Product images

## List of product images

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/1/images?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "images": [
    {
      "id": 1,
      "thumbnail": false,
      "primary": true,
      "position": 0,
      "src": "https://www.imagestorage.com/image1.jpg"
    },
    {
      "id": 2,
      "thumbnail": true,
      "primary": false,
      "position": 1,
      "src": "https://www.imagestorage.com/image2.jpg"
    }
  ]
}
```

### HTTP Request

`GET /api/api/v1.1.2/products/:product_id/images`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>


## Show product image

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/579/product_images/1?token=GXzAxWkkyYLsESGQTU15"
```

> The above request returns JSON structured like this:

```json
{
  "id": 1,
  "primary": true,
  "thumbnail": false,
  "position": 0,
  "src": "https://www.imagestorage.com/image3.jpg"
}
```

### HTTP Request

`GET /api/v1.1.2/products/:product_id/images/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Product Image ID</div><div> Must be a number. </div>


## Create product image

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/1/images?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "image": {
    "position": 0,
    "primary": true,
    "thumbnail": false,
    "image_data": "R0lGODlhbgCMAPf/APbr48VySrxTO7IgKt2qmKQdJeK8lsFjROG5p/nz7Zg3

                   MNmnd7Q1MLNVS9GId71hSJMZIuzTu4UtKbeEeakhKMl8U8WYjfr18YQaIbAf

                   KKwhKdKzqpQtLebFortOOejKrOjZ1Mt7aMNpVbAqLLV7bsNqR+3WwMqEWenN

                   sZYxL/Ddy/Pm2e7ZxLlUQrIjNPXp3bU5MbhENbEtLtqhj5ZQTfHh0bMxL7Ip

                   NsNyUYkZIrZJPcqGdYIUHb5aPKkeJnoUHd2yiJkiLKYiKLRFOsyJXKVDO8up

                   osFaS+TBnK4kKti5sNaYg/z49aqYl5kqLrljUtORfMOlo/36+H4ZH8yDYq0f

                   KKFYTaU9MrY8MrZBNXwXHpgaIdGVYu/byLZNP9SaZLIyOuXCtHkpJst+Wpcm",
    "filename": "image3.jpg"
  }
}
EOF
```

> The above request returns JSON structured like this:

```json
{
    "id": 2,
    "primary": true,
    "thumbnail": false,
    "position": 0,
    "src": "https://www.imagestorage.com/image3.jpg"
}
```

### HTTP Request

`POST /api/api/v1.1.2/product/:product_id/images`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>image </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>image[primary] </strong></div><div> optional </div> | <div>Primary Image switcher</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>image[thumbnail] </strong></div><div> optional </div> | <div>Thumbnail Image switcher</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>image[position] </strong></div><div> optional </div> | <div>Image list order</div><div> Must be a number. </div>
<div><strong>image[image_data] </strong></div><div> required </div> | <div>Base64 Image representation</div><div> Must be a String </div>
<div><strong>image[filename] </strong></div><div> required </div> | <div>Image file name</div><div> Must be a String </div>


## Update product image

### HTTP Request

`PUT /api/api/v1.1.2/product/:product_id/images/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> optional </div> | <div>Product Image ID</div><div> Must be a number. </div>
<div><strong>image </strong></div><div> required </div> | <div> Must be a Hash </div>
<div><strong>image[primary] </strong></div><div> optional </div> | <div>Primary Image switcher</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>image[thumbnail] </strong></div><div> optional </div> | <div>Thumbnail Image switcher</div><div> Must be one of: true, false, 1, 0 </div>
<div><strong>image[position] </strong></div><div> optional </div> | <div>Image list order</div><div> Must be a number. </div>
<div><strong>image[image_data] </strong></div><div> optional </div> | <div>Base64 Image representation</div><div> Must be a String </div>
<div><strong>image[filename] </strong></div><div> optional </div> | <div>Image file name</div><div> Must be a String </div>


## Delete product image

```shell
curl "https://subdomain.mybrightsites.com/api/v1.1.2/products/1/images/579?token=GXzAxWkkyYLsESGQTU15" \
  -X DELETE
```

> The above request returns JSON structured like this:

```json
{
    "id": 1,
    "primary": true,
    "thumbnail": false,
    "position": 0,
    "src": "https://www.imagestorage.com/image.jpg"
}
```

### HTTP Request

`DELETE /api/v1.1.2/products/:product_id/images/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div> required </div> | <div>Product ID</div><div> Must be a number. </div>
<div><strong>id </strong></div><div> required </div> | <div>Product Image ID</div><div> Must be a number. </div>


