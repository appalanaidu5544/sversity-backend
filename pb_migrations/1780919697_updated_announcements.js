/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3866499052")

  // remove field
  collection.fields.removeById("text2990389176")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3866499052")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2990389176",
    "max": 0,
    "min": 0,
    "name": "created",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
