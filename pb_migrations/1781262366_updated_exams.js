/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2725752259")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text4286306088",
    "max": 0,
    "min": 0,
    "name": "exam_room",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "help": "",
    "hidden": false,
    "id": "number446071043",
    "max": null,
    "min": null,
    "name": "total_students",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "convertURLs": false,
    "help": "",
    "hidden": false,
    "id": "editor2575139115",
    "maxSize": 0,
    "name": "instructions",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2725752259")

  // remove field
  collection.fields.removeById("text4286306088")

  // remove field
  collection.fields.removeById("number446071043")

  // remove field
  collection.fields.removeById("editor2575139115")

  return app.save(collection)
})
