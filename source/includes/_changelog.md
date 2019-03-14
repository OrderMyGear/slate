# Changelog

## 1.1.4

> Changes 1.1.4:

```json
{
  "name": "Dark Chocolate",
  "sku": "choc-1",
  "internal_id": "431234",
  "base_price": "10",
  "retail_price": "10",
  "cost": "10",
  "setup_charge": "10",
  "minimum_order_quantity": 10,
  "maximum_order_quantity": 20,
- "custom_tic": "12345",
+ "tax_code": "12345",
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
  "categories": [],
  "vendors": [],
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "last_edited_date": "2016-03-29",
}
```

```json
{
  "order_id": 1,
  "date": "2015-08-25T05:06:36-06:00",
  "status": "new",
+ "site_id": 178,
+ "site_name": "my website",
+ "site_url": "http://mywebsite.mybrightsites.com",
+ "organization_name": "Super organization",
+ "organization_id": 49,
  "custom_data_collections": [],
  "customer_email": "test@johndoe.com",
  "customer_id": null,
  "username": "Guest",
  "item_total": "4703.0",
  "grand_total": "3069.15",
  "line_items": [
    {
      "name": "Product 1",
      "final_sku": "sku",
      "final_internal_id": "431234",
+     "tax_code": "12345",
      "quantity": 18,
      "product_price": "150.0",
      "options_price": "5.0",
      "total_price": "2790.0",
      "tax_price": "7.75",
      "unit_price": "155.0",
      "product_id": 10,
      "product_options": [],
      "logos": [
        {
          "name": "fedex",
          "charge": "10.0",
          "image_url": "/uploads/website/line_item_logo/image/05-01-2018/762/fedex.png",
+         "supplier_id": "VENDOR123"
         }
      ],
      "product_personalizations": [],
      "split_items":[],
      "decoration_method": null,
      "gift_certificate": null,
    }
  ],
  "shipping_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "test@johndoe.com",
    "phone": "1234123456"
  },
  "shipping_address": {
    "first_address": "2658 East 26th Street",
    "company": "Testco LLC",
    "second_address": "John Doe",
    "city": "Brooklyn",
    "state": "New York",
    "country": "United States",
    "zip": "11235"
  },
  "billing_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "test@johndoe.com",
    "phone": "1234123456"
  },
  "billing_address": {
    "first_address": "2658 East 26th Street",
    "company": "Testco LLC",
    "second_address": "John Doe",
    "city": "Brooklyn",
    "state": "New York",
    "country": "United States",
    "zip": "11235"
  },
  "payment": {
    "id": 4305,
    "authorization": "A70A9B840C12",
    "created_at": "2016-06-23T10:19:22-06:00",
    "amount": "82.0",
    "state": "refunded",
    "details": {
      "method": "credit card",
      "card type": "Visa",
      "card": "**** **** **** 1111",
      "amount": "$82.00"
    }
  },
  "payments": [
    {
      "id": 4305,
      "authorization": "A10AA3EC513B",
      "created_at": "2016-06-23T10:19:22-06:00",
      "amount": "82.0",
      "state": "refunded",
      "details": {
        "method": "credit card",
        "card type": "Visa",
        "card": "**** **** **** 1111",
        "amount": "$82.00"
      }
    }
  ],
  "shipment": {
    "tracking_number": "12341234",
    "cost": "0.0",
    "created_at": "2015-08-25T05:06:23-06:00",
    "shipping_method": "Best Way",
    "ship_date": "2016-08-25",
    "in_hands_date": "2018-06-15"
  },
  "coupons_adjustments": [],
  "balance_adjustments": [],
  "custom_adjustments": [],
  "required_adjustments": [],
  "notes": []
}
```

```json
{
  "id": 579,
  "name": "The Willy Wonka Company",
  "products": [
    {
      "id": 100,
      "name": "Licorice",
      "sku": "lic-1"
    }
  ],
  "address1": "2010 Oompa-Loompa drive",
  "address2": "",
  "city": "Sweetstown",
  "state": "Texas",
  "zip_code": "99099",
  "phone": "123123123123",
  "email": "test@test.com",
  "account_number": "account123123",
  "asi_number": "asi123456",
  "active": true,
+ "global_vendor": false
}
```

1. Renamed `custom_tic` to `tax_code` for `products` json
2. Added `tax_code` to `line_items` json
3. Added `vendors` to `line_items` json
4. Added `supplier_id` to `logos` array in `line_items` json
5. Added `global_vendor` flag to `vendors` json
6. Added `site_id`, `site_name`, `site_url`, `organization_id` and `organization_name` to `order` json

Affected APIs:

* /api/v1.1.4/products/:id
* /api/v1.1.4/orders/:order_id
* /api/v1.1.4/orders/:order_id/line_items
* /api/v1.1.4/orders/:order_id/line_items/:line_item_id
* /api/v1.1.4/vendors/:id


## 1.1.3

> Changes 1.1.3:

```json
{
  "user": {
    "id": 1642,
    "username": "johndoe+admin",
    "first_name": "John",
    "last_name": "Doe",
    "active": true,
    "confirmed": false,
    "email": "johndoe+admin@email.com",
    "phone": "+12345678",
    "company": "",
    "title": "",
    "groups": [
      "Public"
    ],
    "balance": "0.0",
    "orders": [],
    "last_edited_date": "2018-12-21T07:03:02.000-07:00",
    "creation_date": "2018-11-13T10:58:23.000-07:00",
+   "enable_sms_notifications": true,
  }
}
```

1. Added `enable_sms_notifications` to `users` json


Affected APIs:

* /api/v1.1.3/users/:user_id

## 1.1.2

> Changes 1.1.2:

```json

{
  "decoration":{
    "custom_text":"",
    "font":"Playfair Display",
    "size":null,
    "color":null,
    "colors":[],
+   "font_style":"bold",
+   "font_decoration":"Underline",
+   "font_modifier":"Lowercase"
  }
}

{
  "line_items": [
    {
      "id": 5037732,
      "name": "Gift Certificate Product Example",
      "final_sku": "GC1",
      "quantity": 1,
      "product_price": "10.0",
      "options_price": "0.0",
      "total_price": "10.0",
      "tax_price": null,
      "unit_price": "10.0",
      "pdf_status": "not_available",
      "pdf_file_url": null,
      "product_id": 329181,
      "final_internal_id": null,
      "product_options": [],
      "logos": [],
      "product_personalizations": [],
      "split_items": [],
      "decoration_method": null,
+     "gift_certificate": {
+       "first_name": "",
+       "last_name": "",
+       "email": "",
+       "message": "",
+       "expires_at": null,
+       "code": "7D70CBCB88B",
+       "amount": "10.0"
+     }
+   }
  ]
}
```

1. Added `font_style`, `font_decoration`, `font_modifier` to `decoration` json
2. Added `gift_certificate` to `line_item` json

Affected APIs:

* /api/v1.1.2/orders/:order_id
* /api/v1.1.2/orders/:order_id/line_items
* /api/v1.1.2/orders/:order_id/line_items/:line_item_id
