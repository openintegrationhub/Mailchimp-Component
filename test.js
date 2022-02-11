/**
 * Auto-generated action file for "Mailchimp Marketing API" API.
 *
 * Generated at: 2022-02-08T14:50:52.889Z
 * Mass generator version: 1.0.0
 *
 * : mailchimp-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'archiveAutomations'
 * Endpoint Path: '/automations/{workflow_id}/actions/archive'
 * Method: 'post'
 *
 */

// how to pass the transformation function... no need
// pass the meta data
// create a new Object
// emit the message with the new emit function

// securities and auth methods
// check how to make the new ferryman and its transform functions functional // no need

const Swagger = require("swagger-client");
const spec = require("./lib/spec.json");
const { mapFieldNames } = require("./lib/utils/helpers");
const componentJson = require("./component.json")
// parameter names for this call
const PARAMETERS = [
    "workflow_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "workflow_id": "workflow_id"
};


// we can run a loop on top of the function

// for every loop we should pass the security,the operationId and the parameters if needed
// that can be achieved easier when the component are more lean and do accept the operationId as an argument

// so we can check the spec and pick up actions/ triggers that we deem necessary and pass through the necessary configuration
// after that we can proceed with pushing the code and open PRs
// if the fuunctionality is Ok there is no reason not to produce the image instantly as well

function processTrigger(msg, cfg , operationId = "getRoot") {
    const trigger = componentJson.triggers[operationId];
    const { pathName, method } = trigger.callParams

    const specPath = spec.paths[pathName]
    const specPathParameters = specPath[method].parameters.map(({name}) =>  { return name });
    console.log(specPathParameters)

    //   var isVerbose = process.env.debug || cfg.verbose;

//   console.log("msg:", msg);
//   console.log("cfg:", cfg);

//   if (isVerbose) {
//     console.log(`---MSG: ${JSON.stringify(msg)}`);
//     console.log(`---CFG: ${JSON.stringify(cfg)}`);
//     console.log(`---ENV: ${JSON.stringify(process.env)}`);
//   }

//   const contentType = undefined;

//   const body = msg.data;
//   mapFieldNames(body);

//   let parameters = {};
//   for (let param of PARAMETERS) {
//     parameters[param] = body[param];
//   }

//   const oihUid =
//     msg.metadata !== undefined && msg.metadata.oihUid !== undefined
//       ? msg.metadata.oihUid
//       : "oihUid not set yet";
//   const recordUid =
//     msg.metadata !== undefined && msg.metadata.recordUid !== undefined
//       ? msg.metadata.recordUid
//       : undefined;
//   const applicationUid =
//     msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
//       ? msg.metadata.applicationUid
//       : undefined;

//   const newElement = {};
//   const oihMeta = {
//     applicationUid,
//     oihUid,
//     recordUid,
//   };

//   // credentials for this operation
//   let securities = {};
//     securities['basicAuth'] = {username: cfg.username, password: cfg.passphrase};;

//   if (cfg.otherServer) {
//     if (!spec.servers) {
//       spec.servers = [];
//     }
//     spec.servers.push({ "url": cfg.otherServer });
//   }

//   let callParams = {
//     spec: spec,
//     operationId: 'archiveAutomations',
//     pathName: '/automations/{workflow_id}/actions/archive',
//     method: 'post',
//     parameters: parameters,
//     requestContentType: contentType,
//     requestBody: body,
//     securities: { authorized: securities },
//     server: spec.servers[cfg.server] || cfg.otherServer,
//   };
//   if (callParams.method === "get") {
//     delete callParams.requestBody;
//   }

//   if (isVerbose) {
//     let out = Object.assign({}, callParams);
//     out.spec = "[omitted]";
//     console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
//   }

//   // Call operation via Swagger client
//   return Swagger.execute(callParams).then((data) => {
//     // emit a single message with data
//     // console.log("swagger data:",data);
//     delete data.uid;
//     newElement.metadata = oihMeta;
//     newElement.data = data.data;
//     this.emit("data", newElement);

//     // if the response contains an array of entities, you can emit them one by one:

//     // data.obj.someItems.forEach((item) => {
//     //     this.emitData(item);
//     // }
//   });
}
processTrigger({},{})
// this wrapers offers a simplified emitData(data) function
// module.exports = { process: processAction };
