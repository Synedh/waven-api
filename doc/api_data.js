define({ "api": [
  {
    "type": "get",
    "url": "/buffs/:id",
    "title": "Request Buff of given id.",
    "name": "GetBuff",
    "group": "Buff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Buff unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Buff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Buff.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Element.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Burn\",\n  \"iconUrl\": \"https://i.kym-cdn.com/entries/icons/original/000/000/043/disaster-girl.jpg\"\n  \"description\": \"I like to see the world burning\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenBuffController.js",
    "groupTitle": "Buff",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BuffNotFound",
            "description": "<p>Cannot find Buff with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Buff with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/classes/:id",
    "title": "Request Class of given id.",
    "name": "GetClass",
    "group": "Class",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Class unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "portaitUrl",
            "description": "<p>Url of portait corresponding to the Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Url of image corresponding to the Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of the Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "Weapon[]",
            "optional": false,
            "field": "weapons",
            "description": "<p>[Empty - Do not use] List of weapons of the Classe.</p>"
          },
          {
            "group": "Success 200",
            "type": "WeaponTypes[]",
            "optional": false,
            "field": "weaponTypes",
            "description": "<p>List of differents types of weapons the Class.</p>"
          },
          {
            "group": "Success 200",
            "type": "Spell[]",
            "optional": false,
            "field": "spells",
            "description": "<p>List of spells of the Class.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"portaitUrl\": \"\"\n  \"imageUrl\": \"\"\n  \"tags\": []\n  \"description\": \"\"\n  \"weapons\": []\n  \"weaponTypes\": []\n  \"spells\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenRaceController.js",
    "groupTitle": "Class",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClassNotFound",
            "description": "<p>Cannot find Class with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Class with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/elements/:id",
    "title": "Request Element of given id.",
    "name": "GetElement",
    "group": "Element",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Element unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Element.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Element.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Air\",\n  \"iconUrl\": \"https://random.url\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenElementController.js",
    "groupTitle": "Element",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ElementNotFound",
            "description": "<p>Cannot find Element with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Element with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/fellows/:id",
    "title": "Request Fellow of given id.",
    "name": "GetFellow",
    "group": "Fellow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Fellow unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "portailUrl",
            "description": "<p>Url of portrait corresponding to the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "Spell[]",
            "optional": false,
            "field": "spells",
            "description": "<p>Spells the Fellow gives to the player.</p>"
          },
          {
            "group": "Success 200",
            "type": "Passive[]",
            "optional": false,
            "field": "passives",
            "description": "<p>Passives of the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "Transfert",
            "optional": false,
            "field": "transfert",
            "description": "<p>Transfer bonus of the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": false,
            "field": "resources",
            "description": "<p>Resources needed to invoque the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "life",
            "description": "<p>Life of the Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "damage",
            "description": "<p>Damages dealt by Fellow.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "movement",
            "description": "<p>Movement points of the Fellow.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"iconUrl\": \"\"\n  \"description\": \"\"\n  \"spells\": []\n  \"passives\": []\n  \"transfert\": null\n  \"resources\": []\n  \"life\": 0\n  \"damage\": 0\n  \"movement\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenFellowController.js",
    "groupTitle": "Fellow",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FellowNotFound",
            "description": "<p>Cannot find Fellow with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Fellow with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/news/:id",
    "title": "Request News of given id.",
    "name": "GetNews",
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>News unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the News.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Url of icon corresponding to the News.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category of the News.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags of the News.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>Author of the News.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Publication date of the News.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the News.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"imageUrl\": \"\"\n  \"category\": \"\"\n  \"tags\": []\n  \"author\": \"\"\n  \"Date\": 0000\n  \"content\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenNewsController.js",
    "groupTitle": "News",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NewsNotFound",
            "description": "<p>Cannot find News with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find News with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/passives/:id",
    "title": "Request Passive of given id.",
    "name": "GetPassive",
    "group": "Passive",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Passive unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Passive.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Passive.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Passive.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"iconUrl\": \"\"\n  \"description\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenPassiveController.js",
    "groupTitle": "Passive",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PassiveNotFound",
            "description": "<p>Cannot find Passive with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Passive with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/resources/:id",
    "title": "Request Resource of given id.",
    "name": "GetResource",
    "group": "Resource",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Resource unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Element",
            "optional": false,
            "field": "element",
            "description": "<p>Element of the Resource.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of Elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"element\": null,\n  \"quantity\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenResourceController.js",
    "groupTitle": "Resource",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>Cannot find Resource with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Resource with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/spells/:id",
    "title": "Request Spell of given id.",
    "name": "GetSpell",
    "group": "Spell",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Spell unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Spell.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Spell.</p>"
          },
          {
            "group": "Success 200",
            "type": "Element",
            "optional": false,
            "field": "element",
            "description": "<p>[Empty - Do not use] Element of the Spell.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Spell.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>AP cost to cast the Spell.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "stockpile",
            "description": "<p>AP points given to the stockpile by the Spell.</p>"
          },
          {
            "group": "Success 200",
            "type": "Resource[]",
            "optional": false,
            "field": "resources",
            "description": "<p>Resources given by the Spell.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"iconUrl\": \"\"\n  \"element\": null\n  \"description\": \"\"\n  \"cost\": 0\n  \"stockpile\": 0\n  \"resources\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenSpellController.js",
    "groupTitle": "Spell",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SpellNotFound",
            "description": "<p>Cannot find Spell with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Spell with id :id.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/transfers/:id",
    "title": "Request Transfer of given id.",
    "name": "GetTransfer",
    "group": "Transfer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Transfer unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Transfer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Transfer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Transfer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"iconUrl\": \"\"\n  \"description\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenTransferController.js",
    "groupTitle": "Transfer",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TransferNotFound",
            "description": "<p>Cannot find Transfer with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Transfer with id :id\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/weapons/:id",
    "title": "Request Weapon of given id.",
    "name": "GetWeapon",
    "group": "Weapon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Weapon unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Weapon.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Weapon.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Url of image corresponding to the Weapon.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Weapon.</p>"
          },
          {
            "group": "Success 200",
            "type": "WeaponType",
            "optional": false,
            "field": "weaponType",
            "description": "<p>Weapon type of the Weapon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"iconUrl\": \"\"\n  \"imageUrl\": \"\"\n  \"description\": \"\"\n  \"weaponType\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenWeaponController.js",
    "groupTitle": "Weapon",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WeaponNotFound",
            "description": "<p>Cannot find Weapon with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find Weapon with id :id\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/buffs/:id",
    "title": "Request WeaponType of given id.",
    "name": "GetWeaponType",
    "group": "WeaponType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>WeaponType unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iconUrl",
            "description": "<p>Url of icon corresponding to the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>Url of icon corresponding to the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Passive[]",
            "optional": false,
            "field": "passives",
            "description": "<p>Passives of the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Spells[]",
            "optional": false,
            "field": "spells",
            "description": "<p>Special spells of the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "life",
            "description": "<p>Default life of the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "damage",
            "description": "<p>Default damage of the Weapon type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "movement",
            "description": "<p>default movement points of the Weapon type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"\",\n  \"iconUrl\": \"\"\n  \"imageUrl\": \"\"\n  \"description\": \"\"\n  \"passives\": \"\"\n  \"spells\": \"\"\n  \"life\": \"\"\n  \"damage\": \"\"\n  \"movement\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/wavenWeaponTypeController.js",
    "groupTitle": "WeaponType",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WeaponTypeNotFound",
            "description": "<p>Cannot find WeaponType with given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannot find WeaponType with id :id\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });