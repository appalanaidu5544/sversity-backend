/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // remove field
  collection.fields.removeById("text2015352099")

  // remove field
  collection.fields.removeById("text2465036164")

  // remove field
  collection.fields.removeById("number2807245967")

  // remove field
  collection.fields.removeById("number1433541926")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2015352099",
    "max": 0,
    "min": 0,
    "name": "enrollment_number",
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
    "id": "text2465036164",
    "max": 0,
    "min": 0,
    "name": "program",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "number2807245967",
    "max": null,
    "min": null,
    "name": "gpa",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "help": "",
    "hidden": false,
    "id": "number1433541926",
    "max": null,
    "min": null,
    "name": "attendance_percentage",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
