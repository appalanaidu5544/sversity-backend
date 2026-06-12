/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_955655590",
    "help": "",
    "hidden": false,
    "id": "relation1495058834",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "course_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // remove field
  collection.fields.removeById("relation1495058834")

  return app.save(collection)
})
