/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1933831191")

  // update field
  collection.fields.addAt(12, new Field({
    "help": "",
    "hidden": false,
    "id": "select3343321666",
    "maxSelect": 0,
    "name": "gender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Male",
      "Female"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1933831191")

  // update field
  collection.fields.addAt(12, new Field({
    "help": "",
    "hidden": false,
    "id": "select3343321666",
    "maxSelect": 0,
    "name": "gender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "male",
      "female"
    ]
  }))

  return app.save(collection)
})
