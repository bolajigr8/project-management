// for ec when we want to set up pm2
module.exports = {
  apps: [
    {
      name: 'project-management',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
