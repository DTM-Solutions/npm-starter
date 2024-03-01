// import Flagsmith from "flagsmith-nodejs";

// // const Flagsmith = require('flagsmith-nodejs');

// const flagsmith = new Flagsmith({
//  environmentKey: process.env.FLAGSMITH_KEY as string,
//  requestTimeoutSeconds: 60
// });

// export default flagsmith

import Flagsmith from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_KEY as string,
  requestTimeoutSeconds: 60,
});

export default flagsmith;
