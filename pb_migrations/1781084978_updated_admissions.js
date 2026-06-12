/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1933831191")

  // add field
  collection.fields.addAt(11, new Field({
    "help": "",
    "hidden": false,
    "id": "date1089581607",
    "max": "",
    "min": "",
    "name": "date_of_birth",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
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

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text223244161",
    "max": 0,
    "min": 0,
    "name": "address",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text432184710",
    "max": 0,
    "min": 0,
    "name": "father_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text606743153",
    "max": 0,
    "min": 0,
    "name": "mother_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "help": "",
    "hidden": false,
    "id": "number444106342",
    "max": null,
    "min": null,
    "name": "guardian_phone",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1156222427",
    "max": 0,
    "min": 0,
    "name": "remarks",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1933831191")

  // remove field
  collection.fields.removeById("date1089581607")

  // remove field
  collection.fields.removeById("select3343321666")

  // remove field
  collection.fields.removeById("text223244161")

  // remove field
  collection.fields.removeById("text432184710")

  // remove field
  collection.fields.removeById("text606743153")

  // remove field
  collection.fields.removeById("number444106342")

  // remove field
  collection.fields.removeById("text1156222427")

  return app.save(collection)
})
