export default {
  development: {
    type: 'development',
    port: 3000,
    mongodb: 'mongodb+srv://test:test@romainl.zl80a.mongodb.net/albums?retryWrites=true&w=majority'
  },
  production: {
    type: 'production',
    port: 3000,
    mongodb: 'mongodb+srv://test:test@romainl.zl80a.mongodb.net/albums?retryWrites=true&w=majority'
  }
};
