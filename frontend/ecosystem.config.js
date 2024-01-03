// ecosystem.config.js
module.exports = {
  apps: [                                                   {
      name: 'workoutBuddy-app', // Customize the name                
      script: 'npm',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },                                                    },
  ],
};
