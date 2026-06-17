/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1933831191")

  // add field
  collection.fields.addAt(18, new Field({
    "help": "",
    "hidden": false,
    "id": "date3469239857",
    "max": "",
    "min": "",
    "name": "applied_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1933831191")

  // remove field
  collection.fields.removeById("date3469239857")

  return app.save(collection)
})
