const getPathValue = require('lodash/get')

const invokeFunction = async (functionName, event) => {
  const handler = require(`../functions/${functionName}`).handler
  const response = await handler(event, {})
  const contentType = getPathValue(
    response,
    'headers.content-type',
    'application/json',
  )
  if (getPathValue(response, 'body') && contentType === 'application/json') {
    response.body = JSON.parse(response.body)
  }
  return response
}

module.exports = {
  invokeFunction,
}
