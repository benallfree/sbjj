/// <reference path="../types.d.ts" />

routerAdd(
  'GET',
  '/api/cornmunities/:id',
  (c) => {
    const id = c.pathParam('id')
    const dao = $app.dao()
    const record = dao.findRecordById('cornmunities', id)
    const data = JSON.parse(record.get('state'))
    console.log(data)

    return c.json(200, data)
  },
  $apis.requireRecordAuth(),
)
