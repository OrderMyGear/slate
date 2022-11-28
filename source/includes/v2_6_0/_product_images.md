#  Product images

## List of product images

List all product images for the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/1/images?token=GXzAxWkkyYLsESGQTU15"
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

`GET /api/api/v2.6.0/products/:product_id/images`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


## Show product image

Show a specific product image based on the product image ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/579/product_images/1?token=GXzAxWkkyYLsESGQTU15"
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

`GET /api/v2.6.0/products/:product_id/images/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Product Image ID</div><div>Must be a number</div>


## Create product image

Create a product image under a specific item for the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/1/images?token=GXzAxWkkyYLsESGQTU15" \
  -X POST \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "image": {
    "position": 0,
    "primary": true,
    "thumbnail": false,
    "image_data": "R0lGODlhbgCMAPf/APbr48VySrxTO7IgKt2qmKQdJeK8lsFjROG5p",
    "filename": "myimage.jpg",
  }
}
EOF
```

OR

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/1/images/2?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "image": {
    "position": 0,
    "primary": true,
    "thumbnail": false,
    "image_url": "https://www.remoteimagestorage.com/someimage.jpg",
  }
}
EOF

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

`POST /api/api/v2.6.0/product/:product_id/images`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>image </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>image[primary] </strong></div><div>optional</div> | <div>Primary Image switcher</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>image[thumbnail] </strong></div><div>optional</div> | <div>Thumbnail Image switcher</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>image[position] </strong></div><div>optional</div> | <div>Image list order</div><div>Must be a number</div>
<div><strong>image[image_data] </strong></div><div>conditionally required</div> | <div>Base64 Image representation</div><div>Must be a String, required when image_url wasn't provided</div>
<div><strong>image[filename] </strong></div><div>conditionally required</div> | <div>Image file name</div><div>Must be a String, required when image_url wasn't provided</div>
<div><strong>image[image_url] </strong></div><div>conditionally required</div> | <div>Remote Image URL</div><div>Must be a String containing valid image url. Required when image_data + filename were not provided</div>


## Update product image

Update a specific product image based on the product ID you supply.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/1/images/2?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "image": {
    "position": 0,
    "primary": true,
    "thumbnail": false,
    "image_data": "R0lGODlhbgCMAPf/APbr48VySrxTO7IgKt2qmKQdJeK8lsFjROG5p",
    "filename": "new_image.jpg",
  }
}
EOF
```

OR

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/1/images/2?token=GXzAxWkkyYLsESGQTU15" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "image": {
    "position": 0,
    "primary": true,
    "thumbnail": false,
    "image_url": "https://www.remoteimagestorage.com/new_image.jpg",
  }
}
EOF


> The above request returns JSON structured like this:

```json
{
    "id": 2,
    "primary": true,
    "thumbnail": false,
    "position": 0,
    "src": "https://www.imagestorage.com/new_image.jpg"
}
```

### HTTP Request

`PUT /api/api/v2.6.0/product/:product_id/images/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Product Image ID</div><div>Must be a number</div>


### JSON Payload Parameters

Parameter | Description
--------- | -----------
<div><strong>image </strong></div><div>required</div> | <div>Must be a Hash</div>
<div><strong>image[primary] </strong></div><div>optional</div> | <div>Primary Image switcher</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>image[thumbnail] </strong></div><div>optional</div> | <div>Thumbnail Image switcher</div><div>Must be one of: true, false, 1, 0</div>
<div><strong>image[position] </strong></div><div>optional</div> | <div>Image list order</div><div>Must be a number</div>
<div><strong>image[image_data] </strong></div><div>conditionally required</div> | <div>Base64 Image representation</div><div>Must be a String, required when image_url wasn't provided</div>
<div><strong>image[filename] </strong></div><div>conditionally required</div> | <div>Image file name</div><div>Must be a String, required when image_url wasn't provided</div>
<div><strong>image[image_url] </strong></div><div>conditionally required</div> | <div>Remote Image URL</div><div>Must be a String containing valid image url. Required when image_data + filename were not provided</div>


## Delete product image

Delete a specific product image based on the product image ID you provide.

```shell
curl "https://subdomain.mybrightsites.com/api/v2.6.0/products/1/images/579?token=GXzAxWkkyYLsESGQTU15" \
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

`DELETE /api/v2.6.0/products/:product_id/images/:id`

### Query Parameters

Parameter | Description
--------- | -----------
<div><strong>product_id </strong></div><div>required</div> | <div>Product ID</div><div>Must be a number</div>
<div><strong>id </strong></div><div>required</div> | <div>Product Image ID</div><div>Must be a number</div>
