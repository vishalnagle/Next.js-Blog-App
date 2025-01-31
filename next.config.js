const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "vishal",
        mongodb_password: "Vishal@000",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "vishal",
      mongodb_password: "Vishal@000",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

// The above env credentials for mongodb connections are dummy data just to show how to use env variable in next js before deployment.
