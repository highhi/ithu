module.exports = {
  apps : [{
    name: 'ithu',
    script: 'index.js',
    instances: 4,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
