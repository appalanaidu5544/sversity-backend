/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1009377862")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" ",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1009377862")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" ||\nstudent_id = @request.auth.id",
    "viewRule": "@request.auth.id != \"\" ||\nstudent_id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
