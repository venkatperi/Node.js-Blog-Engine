
module.exports ;


var old =    [
      {
        "uuid" : "2bc8e151-9a29-482b-9baa-eb36d11408fe",
        "name" : "users",
        "fields" : [
          {
            "uuid" : "31f35464-d428-4f16-85f9-b117941d7b95",
            "name" : "name",
            "type" : "varchar",
            "properties" : {
              "charset" : "UTF8",
              "collation" : "UCS_BINARY"
            },
            "validations" : [
              {
                "max_length" : 128
              },
              {
                "required" : false
              }
            ]
          },
          {
            "uuid" : "d9937a7d-23d7-48bc-a5b8-1a30713b982a",
            "name" : "_id",
            "type" : "integer",
            "validations" : [
              {
                "required" : true
              },
              {
                "width" : 11
              }
            ]
          }
        ],
        "collections" : [
          {
            "uuid" : "79468f4f-2c70-4411-ba00-c5f0935572b5",
            "name" : "account",
            "fields" : [
              {
                "uuid" : "63181cdb-86a7-40ce-abbb-df46ea10471c",
                "name" : "status",
                "type" : "varchar",
                "properties" : {
                  "charset" : "UTF8",
                  "collation" : "UCS_BINARY"
                },
                "validations" : [
                  {
                    "max_length" : 128
                  },
                  {
                    "required" : false
                  }
                ]
              },
              {
                "uuid" : "c27cb7ab-6aae-4c1c-a027-5b092b8b3c6f",
                "name" : "_users_id",
                "type" : "integer",
                "validations" : [
                  {
                    "required" : true
                  },
                  {
                    "width" : 11
                  }
                ]
              }
            ],
            "grouping_fields" : ["_users_id"]
          },
          {
            "uuid" : "278c7b4d-d3c0-4c3a-938c-9b281589df0e",
            "name" : "profiles",
            "fields" : [
              {
                "uuid" : "f1fd4841-a4ee-49ee-bbb4-1e743e764fb0",
                "name" : "id",
                "type" : "varchar",
                "properties" : {
                  "charset" : "UTF8",
                  "collation" : "UCS_BINARY"
                },
                "validations" : [
                  {
                    "max_length" : 128
                  },
                  {
                    "required" : false
                  }
                ]
              },
              {
                "uuid" : "85813074-aee3-4ed3-825d-bf96fabe3338",
                "name" : "provider",
                "type" : "varchar",
                "properties" : {
                  "charset" : "UTF8",
                  "collation" : "UCS_BINARY"
                },
                "validations" : [
                  {
                    "max_length" : 128
                  },
                  {
                    "required" : false
                  }
                ]
              },
              {
                "uuid" : "4237f083-da72-4d17-8896-022f26940370",
                "name" : "displayName",
                "type" : "varchar",
                "properties" : {
                  "charset" : "UTF8",
                  "collation" : "UCS_BINARY"
                },
                "validations" : [
                  {
                    "max_length" : 128
                  },
                  {
                    "required" : false
                  }
                ]
              },
              {
                "uuid" : "d8c58e5e-333a-42cc-8fa6-562f3f74eb01",
                "name" : "birthday",
                "type" : "datetime",
                "validations" : [
                  {
                    "required" : false
                  }
                ]
              },
              {
                "uuid" : "274a0e7d-34c0-4470-bb96-4c53c6bd4194",
                "name" : "gender",
                "type" : "varchar",
                "properties" : {
                  "charset" : "UTF8",
                  "collation" : "UCS_BINARY"
                },
                "validations" : [
                  {
                    "max_length" : 128
                  },
                  {
                    "required" : false
                  }
                ]
              },
              {
                "uuid" : "e92e6541-1c2d-4b86-ac8d-db40eb503470",
                "name" : "_id",
                "type" : "integer",
                "validations" : [
                  {
                    "required" : true
                  },
                  {
                    "width" : 11
                  }
                ]
              },
              {
                "uuid" : "9cf01977-fc75-44b7-a275-83c593139bec",
                "name" : "_users_id",
                "type" : "integer",
                "validations" : [
                  {
                    "required" : true
                  },
                  {
                    "width" : 11
                  }
                ]
              }
            ],
            "collections" : [
              {
                "uuid" : "b90b9e23-facf-4bc4-a0a5-d26a80c0aedc",
                "name" : "accounts",
                "fields" : [
                  {
                    "uuid" : "71730e7b-8423-4b0a-ab75-571c0855e908",
                    "name" : "domain",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "2d36b08b-2fec-455d-9a90-708b825e9338",
                    "name" : "userid",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "e63ffc83-f726-4806-8203-4a3f27d9ec42",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "a3203de5-82f4-43fd-96f6-681e851bd12d",
                "name" : "addresses",
                "fields" : [
                  {
                    "uuid" : "c40afb84-955e-42f6-a27b-2468cffef757",
                    "name" : "type",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "19d7967d-3870-415e-bcfb-480e4a213821",
                    "name" : "streetAddress",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "17a58a15-1764-4c7b-83f0-2262932e02b6",
                    "name" : "locality",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "9a8766c9-68fc-4d2f-aa35-07ef55f501a1",
                    "name" : "region",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "faabb3c4-dc52-48fa-ac4f-8d995dcae390",
                    "name" : "postalCode",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "5cde8164-4e52-41dd-9843-ab74692a779a",
                    "name" : "country",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "13a3549b-b31c-4bb0-a812-1c8be61e8ccd",
                    "name" : "formatted",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "ccdc63cc-1836-4580-9aac-020d65006437",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "945b87d1-70d4-47d3-9e4f-b90e16b826eb",
                "name" : "emails",
                "fields" : [
                  {
                    "uuid" : "7622dbf5-c476-4cc1-a303-2ded749a22e5",
                    "name" : "value",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "fe5622e8-f130-493d-96d6-b12f2b49f8fd",
                    "name" : "type",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "f8b9b181-5aef-4d39-b99e-168b5410f0d1",
                    "name" : "primary",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "57b5be66-5070-4469-9da8-538a51820f5d",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "200614b9-0491-4345-b89b-2874f8aca0a3",
                "name" : "ims",
                "fields" : [
                  {
                    "uuid" : "6a4f62de-e01a-4101-a527-19f7f2bf1287",
                    "name" : "value",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "3fb50158-c3be-4665-839d-246513d0c02a",
                    "name" : "type",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "24837146-8216-4ee5-9f2e-36e5a01f9822",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "91b02b9a-5733-4a84-b980-231aa02a96bf",
                "name" : "name",
                "fields" : [
                  {
                    "uuid" : "afe8c460-70c3-4f3f-81b9-e4d2b4b84a67",
                    "name" : "familyName",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "ebe7f945-c774-47d5-8537-f2fca62e3ac1",
                    "name" : "middleName",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "2860cd7b-6887-4f34-91ae-e5680fc4728b",
                    "name" : "givenName",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "7a7e167b-ea11-4d1a-bd44-ec69c0c729c7",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "70a32a1b-8f0e-483f-af9f-d34d2cc09dbd",
                "name" : "organizations",
                "fields" : [
                  {
                    "uuid" : "20b6f795-b0f0-4d17-9d8e-86d2e790462e",
                    "name" : "name",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "54de9ecd-bbe9-4c9d-88bd-889667824f6b",
                    "name" : "title",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "04000bb8-9dd4-4080-be5b-4c086a286608",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "55ca3e18-b584-4e82-843b-e8727004d602",
                "name" : "phoneNumbers",
                "fields" : [
                  {
                    "uuid" : "b6826f88-7be6-4b9c-bc15-8b513afcf194",
                    "name" : "value",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "7f312478-cca5-41ff-af32-e5c0136983e2",
                    "name" : "type",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "e39cd72e-1f33-41d9-a80b-0186091cf0e8",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "2b7d6d5a-32f6-4f15-9205-33797947dcb0",
                "name" : "photos",
                "fields" : [
                  {
                    "uuid" : "96397f43-6525-4cc0-87c0-e0f4af87ed30",
                    "name" : "value",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "5233ba0a-5ad2-4339-bb54-5699c5915931",
                    "name" : "type",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "0b9008b3-5ae4-432f-b4e7-4d32c6d6db7c",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "b31324a6-a44f-4b06-926f-57ae483deb57",
                "name" : "tags",
                "fields" : [
                  {
                    "uuid" : "094ace97-0f22-437b-86bf-252944017602",
                    "name" : "value",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "99d90150-8ea7-4ed3-9e0f-599d242f2b22",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              },
              {
                "uuid" : "6ab3a49e-fed1-498b-961a-2cf3e13775d5",
                "name" : "urls",
                "fields" : [
                  {
                    "uuid" : "7ffba3a4-4927-4d5d-9801-d6bdfc71d0f1",
                    "name" : "value",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "4b1b3952-d6f7-4277-9b5b-8bb21e514840",
                    "name" : "type",
                    "type" : "varchar",
                    "properties" : {
                      "charset" : "UTF8",
                      "collation" : "UCS_BINARY"
                    },
                    "validations" : [
                      {
                        "max_length" : 128
                      },
                      {
                        "required" : false
                      }
                    ]
                  },
                  {
                    "uuid" : "35cc22b8-0fae-4393-bf98-f5bb415722f5",
                    "name" : "_profile_id",
                    "type" : "integer",
                    "validations" : [
                      {
                        "required" : true
                      },
                      {
                        "width" : 11
                      }
                    ]
                  }
                ],
                "grouping_fields" : ["_profile_id"]
              }
            ],
            "identifying" : ["_id"],
            "grouping_fields" : ["_users_id"]
          }
        ],
        "identifying" : ["_id"]
      }
    ];
