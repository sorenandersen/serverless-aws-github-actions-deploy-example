const { invokeFunction } = require('../util')
console.log = jest.fn()

describe(`Invoking endpoint GET /`, () => {
  it(`Should return a message`, async () => {
    const response = await invokeFunction('index', {})
    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('message')
  })
})
