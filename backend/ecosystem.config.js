module.exports = {
  apps: [
    {
      name: "backend",
      script: "index.js", // ou app.js selon ton fichier principal
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
