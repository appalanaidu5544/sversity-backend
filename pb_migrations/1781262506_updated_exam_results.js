/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3315464570")

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "number2466988094",
    "max": null,
    "min": null,
    "name": "percentage",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2261065641",
    "help": "",
    "hidden": false,
    "id": "relation3725765462",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "created_by",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "bool1748787223",
    "name": "published",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3315464570")

  // remove field
  collection.fields.removeById("number2466988094")

  // remove field
  collection.fields.removeById("relation3725765462")

  // remove field
  collection.fields.removeById("bool1748787223")

  return app.save(collection)
})
