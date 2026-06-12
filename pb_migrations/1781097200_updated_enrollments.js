/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1009377862")

  // remove field
  collection.fields.removeById("text3415494426")

  // remove field
  collection.fields.removeById("text1495058834")

  // add field
  collection.fields.addAt(3, new Field({
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

  // add field
  collection.fields.addAt(4, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_1009377862")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3415494426",
    "max": 0,
    "min": 0,
    "name": "student_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1495058834",
    "max": 0,
    "min": 0,
    "name": "course_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation3415494426")

  // remove field
  collection.fields.removeById("relation1495058834")

  return app.save(collection)
})
