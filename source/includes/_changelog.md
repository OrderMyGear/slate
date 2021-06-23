# Changelog

## 2.1.0

> Changes 2.1.0:

> /api/v2.1.0/users/:id

```json
{
  "user": {
    "username": "johndoe",
    "first_name": "John",
    "last_name": "Doe",
    "active": true,
    "email": "johndoe@email.com",
+   "timezone": "America/Denver",
    "phone": "+1234567890",
    "company": "BSI",
    "title": "Support Leader",
    "groups": [
      "Public"
    ],
    "balance": 12.5,
    "password": "12345678",
    "enable_sms_notifications": true,
    "cuf_1": "helloworld",
    "dont_send_confirmation_email": true
  }
}
```


1. Added `timezone` to `users` json

Affected APIs:

* /api/v2.1.0/users/:id


## 2.0.0

> Changes 2.0.0:

> /api/v2.0.0/inventories (new)

```json
+ {
+   "inventories": [
+     {
+       "product_id": 44371,
+       "product_name": "District Made - Ladies Dip Dye Rounded Deep V-Neck Tee",
+       "internal_id": "",
+       "sku": "DM4310",
+       "final_sku": "DM4310-XXS-Blk",
+       "id": 2871,
+       "inventory": 999,
+       "trigger": 6,
+       "track": true,
+       "allow_negative": true,
+       "sub_option_ids": [
+         734290,
+         734297
+       ],
+       "sub_sku": "XXS-Blk"
+     }
+   ]
+ }
```

> /api/v2.0.0/products

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
-     "last_edited_date": "2016-03-29T22:53:03-06:00",
+     "created_at": "2016-03-29T22:53:03-06:00",
+     "updated_at": "2016-03-29T22:53:03-06:00"
    }
  ],
  "meta": {
    "total": 1,
    "offset": 0,
    "limit": 0
  }
}
```

> /api/v2.0.0/products/:id

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
+ "options": [
+   {
+     "id": 301559,
+     "name": "size",
+     "friendly_name": "Size",
+     "option_type": "size",
+     "price_modifier_type": "$",
+     "show_in_inventory": true,
+     "show_as_thumbs": false,
+     "include_in_images": false,
+     "required": true,
+     "multiple_quantity": true,
+     "position": 2
+   }
+ ],
+ "sub_options": [
+   {
+     "id": 1393159,
+     "name": "Green",
+     "sub_sku": "CLRGRN",
+     "price_modifier": "0.0",
+     "image_src": null,
+     "position": 0,
+     "product_option_id": 301559
+   }
+ ],
+ "inventories": [
+   {
+     "id": 774,
+     "inventory": 23,
+     "trigger": 6,
+     "track": false,
+     "allow_negative": false,
+     "sub_sku": "GRN",
+     "sub_option_ids": [
+       1393159
+     ]
+   }
+ ],
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "created_at": "2016-03-29T22:53:03-06:00",
  "updated_at": "2016-03-29T22:53:03-06:00",
  "tax_code": "12345"
}
```

> GET /api/v2.0.0/orders

```json
{
  "orders": [
    {
      "order_id": 1,
      "shipping_method": "Best Way",
      "tracking": "12234tracking2123",
-     "date": "2015-08-28T08:34:37-06:00",
+     "updated_at": "2015-08-28T08:34:37-06:00",
+     "created_at": "2015-08-27T08:30:10-06:00",
      "status": "new",
      "customer": "test@johndoe.com"
    }
  ],
  "meta": {
    "total": 1,
    "offset": 0,
    "limit": 0
  }
}
```

> /api/v2.0.0/orders/:id

```json
{
  "order_id": 249,
  "custom_data_collections": [],
  "customer_email": "helloworld1231@email.com",
  "customer_id": 1624,
  "username": "helloworld1231",
  "item_total": "10.0",
  "grand_total": "43.32",
  "required_adjustments": [
    {
      "amount": "30.0",
      "modifier_type": "$",
      "note": "shipment"
    },
    {
      "amount": "3.32",
      "modifier_type": "$",
      "note": "sales tax"
    }
  ],
  "balance_adjustments": [],
  "payment": {
    "id": 6164,
    "authorization": null,
    "created_at": "2019-03-25T19:59:21.000-06:00",
    "amount": "43.32",
    "state": "completed",
    "details": {
      "method": "Custom payment",
      "custom method name": "No Pay1",
      "details": "",
      "amount": "$43.32"
    }
  },
  "status": "moas_pending",
- "date": "2019-03-25T19:59:28.000-06:00",
+ "created_at": "2019-03-25T19:59:28.000-06:00",
+ "updated_at": "2019-03-25T20:30:28.000-06:00",
  "site_id": 178,
  "site_name": "Testing & Site1",
  "site_url": "http://bestsiteever.lvh.me:3000",
  "organization_name": "Jurassic Deployment",
  "organization_id": 49,
  "custom_store_id": "test custom store id",
  "shipping_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "helloworld1231@email.com",
    "phone": "12345678"
  },
  "shipping_address": {
    "company": "",
    "first_address": "1437 Larimer Street1",
    "second_address": "32",
    "city": "Denver1",
    "state": "Colorado",
    "country": "United States",
    "zip": "80202"
  },
  "billing_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "helloworld1231@email.com",
    "phone": "12345678"
  },
  "billing_address": {
    "company": "",
    "first_address": "1437 Larimer Street1",
    "second_address": "32",
    "city": "Denver1",
    "state": "Colorado",
    "country": "United States",
    "zip": "80202"
  },
  "shipment": {
    "tracking_number": "12341234",
    "created_at": "2019-03-25T19:59:04.000-06:00",
    "ship_date": "2019-09-19",
    "in_hands_date": null,
    "shipping_method": "FedEx 2 Day Freight",
    "cost": "30.0"
  },
  "payments": [
    {
      "id": 6164,
      "authorization": null,
      "created_at": "2019-03-25T19:59:21.000-06:00",
      "amount": "43.32",
      "state": "completed",
      "details": {
        "method": "Custom payment",
        "custom method name": "No Pay1",
        "details": "",
        "amount": "$43.32"
      }
    }
  ],
  "line_items": [
    {
      "id": 10176,
      "name": "logo1",
      "final_sku": "l1",
      "quantity": 1,
      "product_price": "10.0",
      "options_price": "0.0",
      "total_price": "10.0",
      "tax_price": null,
      "unit_price": "10.0",
      "pdf_status": "not_available",
      "pdf_file_url": null,
      "product_id": 44429,
      "final_internal_id": null,
      "tax_code": "",
      "product_options": [
        {
          "option_name": "Size",
          "sub_option_name": "Small",
          "option_type": "size",
          "option_id": 85557,
          "sub_option_id": 734144
        }
      ],
      "logos": [
        {
          "name": "test1",
          "charge": null,
          "image_url": "/uploads/website/line_item_logo/image/03-25-2019/838/t-shirt.png",
          "supplier_id": null,
          "location": null,
          "decoration": null
        }
      ],
      "product_personalizations": [],
      "decoration_method": null,
      "gift_certificate": null,
      "vendors": [
        {
          "id": 1342,
          "name": "Leeds",
          "address1": null,
          "address2": null,
          "city": null,
          "state": null,
          "zip_code": null,
          "phone": null,
          "email": null,
          "account_number": null,
          "asi_number": null
        }
      ]
    }
  ],
  "coupons_adjustments": [],
  "custom_adjustments": [],
  "notes": [],
  "shipments": [
    {
      "id": 14,
      "tracking_number": "12341",
      "ship_date": null,
      "note": "",
      "shipping_method": "FedEx 2 Day Freight",
      "line_items": [
        {
          "id": 10176,
          "quantity": 1
        }
      ]
    },
    {
      "id": 32,
      "tracking_number": null,
      "ship_date": null,
      "note": null,
      "shipping_method": "FedEx 2 Day Freight",
      "line_items": [
        {
          "id": 10176,
          "quantity": 1
        }
      ]
    }
  ]
}
```

> POST /api/v2.0.0/users

```json
{
  "user": {
    "username": "johndoe",
    "first_name": "John",
    "last_name": "Doe",
    "active": true,
    "email": "johndoe@email.com",
    "phone": "+1234567890",
    "company": "BSI",
    "title": "Support Leader",
    "groups": [
      "Public"
    ],
    "balance": 12.5,
    "password": "12345678",
    "enable_sms_notifications": true,
    "cuf_1": "helloworld",
+   "dont_send_confirmation_email": true
  }
}
```

### All endpoints

Starting with v2.0.0 we're using UTC as the default time zone.

### /api/v2.0.0/inventories

1. Added [Inventories](#inventories)
1. `per_page` query parameter is limited to a maximum of 500 records per page for [Inventories](#inventories)

### /api/v2.0.0/products

1. Added `created_at` to [List products](#list-products) json
1. Field `last_edited_date` renamed to `updated_at` in [List products](#list-products) json for a better consistency
1. Added `updated_at` and `created_at` filters to query parameters for [List products](#list-products)

### /api/v2.0.0/products/:id

1. Added `options`, `sub_options`, `inventories`, `created_at` to [Show product](#show-product) json
1. Field `last_edited_date` renamed to `updated_at` in [Show product](#show-product) json for a better consistency

### /api/v2.0.0/orders

1. Added `updated_at` to [List orders](#list-orders) json
1. Field `date` renamed to `created_at` in [List orders](#list-orders) json for a better consistency
1. Added `updated_at` and `created_at` filters to query parameters for [List orders](#list-orders)

### /api/v2.0.0/orders/:id

1. Added `updated_at` to [Show order](#show-order) json
1. Field `date` renamed to `created_at` in [Show order](#show-order) json for a better consistency

### /api/v2.0.0/users

1. Added `dont_send_confirmation_email` option support to [Create user](#create-user) API.
   This field is only valid if no password is
   sent. If a password is sent it will be ignored. If there's no password and the field is set to true, the initial
   confirmation email is not sent.

---

## 1.1.7

> Changes 1.1.7:

> /api/v1.1.7/products/:id

```json
{
  "name": "Chocolate",
  "sku": "choc-1",
+ "sku_separator": "-",
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
  "enable_quantity_discount": false,
  "related_products_type": "auto",
  "enable_related_products": false,
  "enable_product_personalization": false,
  "enable_inventory": false,
  "enable_logo_locations": false,
  "enable_decoration_methods": false,
  "primary_category_id": 36,
  "last_edited_date": "2016-03-29T22:53:03-06:00",
  "tax_code": "12345"
}
```

1. Added `sku_separator` to `product` json

Affected APIs:

* /api/v1.1.7/products/:id


## 1.1.6

> Changes 1.1.6:

> /api/v1.1.6/orders/:id

```json
{
  "order_id": 249,
  "custom_data_collections": [],
  "customer_email": "helloworld1231@email.com",
  "customer_id": 1624,
  "username": "helloworld1231",
  "item_total": "10.0",
  "grand_total": "43.32",
  "required_adjustments": [
    {
      "amount": "30.0",
      "modifier_type": "$",
      "note": "shipment"
    },
    {
      "amount": "3.32",
      "modifier_type": "$",
      "note": "sales tax"
    }
  ],
  "balance_adjustments": [],
  "payment": {
    "id": 6164,
    "authorization": null,
    "created_at": "2019-03-25T19:59:21.000-06:00",
    "amount": "43.32",
    "state": "completed",
    "details": {
      "method": "Custom payment",
      "custom method name": "No Pay1",
      "details": "",
      "amount": "$43.32"
    }
  },
  "status": "moas_pending",
  "date": "2019-03-25T19:59:28.000-06:00",
  "site_id": 178,
  "site_name": "Testing & Site1",
  "site_url": "http://bestsiteever.lvh.me:3000",
  "organization_name": "Jurassic Deployment",
  "organization_id": 49,
  "custom_store_id": "test custom store id",
  "shipping_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "helloworld1231@email.com",
    "phone": "12345678"
  },
  "shipping_address": {
    "company": "",
    "first_address": "1437 Larimer Street1",
    "second_address": "32",
    "city": "Denver1",
    "state": "Colorado",
    "country": "United States",
    "zip": "80202"
  },
  "billing_contact": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "helloworld1231@email.com",
    "phone": "12345678"
  },
  "billing_address": {
    "company": "",
    "first_address": "1437 Larimer Street1",
    "second_address": "32",
    "city": "Denver1",
    "state": "Colorado",
    "country": "United States",
    "zip": "80202"
  },
  "shipment": {
    "tracking_number": "12341234",
    "created_at": "2019-03-25T19:59:04.000-06:00",
    "ship_date": "2019-09-19",
    "in_hands_date": null,
    "shipping_method": "FedEx 2 Day Freight",
    "cost": "30.0"
  },
  "payments": [
    {
      "id": 6164,
      "authorization": null,
      "created_at": "2019-03-25T19:59:21.000-06:00",
      "amount": "43.32",
      "state": "completed",
      "details": {
        "method": "Custom payment",
        "custom method name": "No Pay1",
        "details": "",
        "amount": "$43.32"
      }
    }
  ],
  "line_items": [
    {
      "id": 10176,
      "name": "logo1",
      "final_sku": "l1",
      "quantity": 1,
      "product_price": "10.0",
      "options_price": "0.0",
      "total_price": "10.0",
      "tax_price": null,
      "unit_price": "10.0",
      "pdf_status": "not_available",
      "pdf_file_url": null,
      "product_id": 44429,
      "final_internal_id": null,
      "tax_code": "",
      "product_options": [
        {
          "option_name": "Size",
          "sub_option_name": "Small",
          "option_type": "size",
          "option_id": 85557,
          "sub_option_id": 734144
        }
      ],
      "logos": [
        {
          "name": "test1",
          "charge": null,
          "image_url": "/uploads/website/line_item_logo/image/03-25-2019/838/t-shirt.png",
          "supplier_id": null,
          "location": null,
          "decoration": null
        }
      ],
      "product_personalizations": [],
      "split_items": [],
      "decoration_method": null,
      "gift_certificate": null,
      "vendors": [
        {
          "id": 1342,
          "name": "Leeds",
          "address1": null,
          "address2": null,
          "city": null,
          "state": null,
          "zip_code": null,
          "phone": null,
          "email": null,
          "account_number": null,
          "asi_number": null
        }
      ]
    }
  ],
  "coupons_adjustments": [],
  "custom_adjustments": [],
  "notes": [],
+ "shipments": [
+   {
+     "id": 14,
+     "tracking_number": "12341",
+     "ship_date": null,
+     "note": "",
+     "shipping_method": "FedEx 2 Day Freight",
+     "line_items": [
+       {
+         "id": 10176,
+         "quantity": 1
+       }
+     ]
+   },
+   {
+     "id": 32,
+     "tracking_number": null,
+     "ship_date": null,
+     "note": null,
+     "shipping_method": "FedEx 2 Day Freight",
+     "line_items": [
+       {
+         "id": 10176,
+         "quantity": 1
+       }
+     ]
+   }
+ ]
}
```

> /api/v1.1.6/orders/:order_id/shipments (new)

```json
+ {
+   "shipments": [
+     {
+       "id": 14,
+       "tracking_number": "1234123412",
+       "ship_date": "2019-10-20",
+       "note": "Lorem ipsum",
+       "shipping_method": "FedEx 2 Day Freight",
+       "line_items": [
+         {
+           "id": 1234,
+           "quantity": 1
+         }
+       ]
+     }
+   ]
+ }
```

> /api/v1.1.6/orders/:order_id/shipping_methods (new)

```json
+ {
+   "shipping_methods": [
+     "Ground",
+     "FedEx 1 Day Freight",
+     "FedEx 2 Day",
+     "FedEx 2 Day Freight",
+     "FedEx 3 Day Freight",
+     "International Economy Freight",
+     "International First",
+     "International Ground",
+     "International Priority",
+     "International Priority Freight",
+     "UPS Ground",
+     "UPS Next Day Air",
+     "UPS Next Day Air Early A.M.",
+     "UPS Second Day Air",
+     "No Shipping Method"
+   ]
+ }
```


1. Added `shipments` to `order` json
2. Added [order shipments](#order-shipments)
3. Added [shipping methods](#shipping-methods)

Affected APIs:

* /api/v1.1.6/orders/:order_id
* /api/v1.1.6/orders/:order_id/shipments (new)
* /api/v1.1.6/shipping_methods (new)


## 1.1.5

> Changes 1.1.5:

> /api/v1.1.5/orders/:id

```json
{
  "order_id": 1,
  "date": "2015-08-25T05:06:36-06:00",
  "status": "new",
  "site_id": 178,
  "site_name": "my website",
  "site_url": "http://mywebsite.bsites-staging.com",
+ "custom_store_id": "mycustomstore",
  "organization_name": "Super organization",
  "organization_id": 49,
  "custom_data_collections": [],
  "customer_email": "test@johndoe.com",
  "customer_id": null,
  "username": "Guest",
  "item_total": "4703.0",
  "grand_total": "3069.15",
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
  "payments": [],
  "shipment": {
    "tracking_number": "12234tracking2123",
    "cost": "0.0",
    "created_at": "2015-08-25T05:06:23-06:00",
    "shipping_method": "Best Way",
    "ship_date": "2016-08-25",
    "in_hands_date": "2018-06-15"
  },
  "line_items": [],
  "coupons_adjustments": [],
  "balance_adjustments": [],
  "custom_adjustments": [],
  "required_adjustments": [],
  "notes": []
}
```

1. Orders are sorted by `order_id` in descending order
2. Added `custom_store_id` to `order` json

Affected APIs:

* /api/v1.1.5/orders
* /api/v1.1.5/orders/:order_id

## 1.1.4

> Changes 1.1.4:

> /api/v1.1.4/products/:id

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

> /api/v1.1.4/vendors/:id

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

> /api/v1.1.4/orders/:order_id


```json
{
  "order_id": 1,
  "date": "2015-08-25T05:06:36-06:00",
  "status": "new",
+ "site_id": 178,
+ "site_name": "my website",
+ "site_url": "http://mywebsite.bsites-staging.com",
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
          "image_url": "https://assets.bsites-staging.com/uploads/website/line_item_logo/image/05-01-2018/762/fedex.png",
+         "supplier_id": "VENDOR123"
         }
      ],
+     "vendors": [
+       {
+         "id": 579,
+         "name": "The Willy Wonka Company",
+         "address1": "2010 Oompa-Loompa drive",
+         "address2": "",
+         "city": "Sweetstown",
+         "state": "Texas",
+         "zip_code": "99099",
+         "phone": "123123123123",
+         "email": "test@test.com",
+         "account_number": "account123123",
+         "asi_number": "asi123456"
+       }
+     ],
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

> /api/v1.1.3/users/:user_id

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

> "decoration" is a part of /api/v1.1.2/orders/:order_id

```json

{
  "decoration": {
    "custom_text": "",
    "font": "Playfair Display",
    "size": null,
    "color": null,
    "colors": [],
+   "font_style": "bold",
+   "font_decoration": "Underline",
+   "font_modifier": "Lowercase"
  }
}
```

> /api/v1.1.2/orders/:order_id/line_items/:line_item_id

```json
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
+ "gift_certificate": {
+   "first_name": "",
+   "last_name": "",
+   "email": "",
+   "message": "",
+   "expires_at": null,
+   "code": "7D70CBCB88B",
+   "amount": "10.0"
+ }
}
```

1. Added `font_style`, `font_decoration`, `font_modifier` to `decoration` json
2. Added `gift_certificate` to `line_item` json

Affected APIs:

* /api/v1.1.2/orders/:order_id
* /api/v1.1.2/orders/:order_id/line_items
* /api/v1.1.2/orders/:order_id/line_items/:line_item_id
