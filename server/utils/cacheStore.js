const redis = require('redis')
const cacheStore = redis.createClient()
const promisify = require('util').promisify

cacheStore.on('connect', () => {
  console.log(`connected to redis`);
})

cacheStore.on('error', (err) => {
  console.error('Error' + err)
})

module.exports = {
  get: promisify(cacheStore.get).bind(cacheStore),
  setex: promisify(cacheStore.setex).bind(cacheStore),
}
