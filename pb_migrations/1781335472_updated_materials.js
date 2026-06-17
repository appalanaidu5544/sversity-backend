/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // remove field
  collection.fields.removeById("relation3415494426")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4282183725")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3827815851",
    "help": "",
    "hidden": false,
    "id": "relation3415494426",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "student_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
