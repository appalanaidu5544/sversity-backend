/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2725752259")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2261065641",
    "help": "",
    "hidden": false,
    "id": "relation1745660776",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "faculty_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2725752259")

  // remove field
  collection.fields.removeById("relation1745660776")

  return app.save(collection)
})
