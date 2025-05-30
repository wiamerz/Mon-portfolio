// module.exports = {
//   apps: [
//     {
//       name: "backend",
//       script: "index.js", // ou app.js selon ton fichier principal
//       instances: 1,
//       autorestart: true,
//       watch: false,
//       env: {
//         NODE_ENV: "production",
//       },
//     },
//   ],
// };

module.exports = {
  apps: [
    {
      name: "contact-backend",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 5000
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm Z",
      merge_logs: true,
      // Restart strategies
      min_uptime: "10s",
      max_restarts: 5,
      // Advanced PM2 features
      kill_timeout: 1600,
      listen_timeout: 3000,
      // Memory and CPU monitoring
      monitoring: false,
      // Instance management
      increment_var: "PORT",
      // Source map support
      source_map_support: true,
      // Advanced logging
      log_type: "json"
    }
  ],
  
  // Deployment configuration (optional)
  deploy: {
    production: {
      user: "nodejs",
      host: "your-server.com",
      ref: "origin/main",
      repo: "git@github.com:yourusername/your-repo.git",
      path: "/var/www/contact-backend",
      "pre-deploy-local": "",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": ""
    }
  }
};
