/**
 * Auto-generated trigger file for "Mailchimp Marketing API" API.
 * Generated at: 2022-02-21T10:55:43.880Z
 * Mass generator version: 1.0.0
 *
 * : mailchimp-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 */

 const Swagger = require("swagger-client");
 const spec = require("./lib/spec.json");
 const {
   isSecondDateAfter,
   mapFieldNames,
   getMetadata,
 } = require("./lib/utils/helpers");
 const componentJson = require("./component.json");
 
 function processTrigger(msg, cfg, snapshot, incomingMessageHeaders, data) {
   var isVerbose = process.env.debug || cfg.verbose;
   snapshot.lastUpdated = snapshot.lastUpdated || new Date(0).getTime();
 
   console.log("data function:", data["function"]);
   console.log("msg:", msg);
   console.log("cfg:", cfg);
  //  const { snapshotKey, arraySplittingKey, syncParam } = cfg.nodeSettings;
   const trigger = componentJson.triggers["getCampaigns"];
   const { pathName, method, requestContentType } = trigger.callParams;
 
   const specPath = spec.paths[pathName];
   const specPathParameters = specPath[method].parameters.map(({ name }) => {
     return name;
   });
 
   if (isVerbose) {
     console.log(`---MSG: ${JSON.stringify(msg)}`);
     console.log(`---CFG: ${JSON.stringify(cfg)}`);
     console.log(`---ENV: ${JSON.stringify(process.env)}`);
   }
 
   const body = msg;
   mapFieldNames(body);
 
   let parameters = {};
   for (let param of specPathParameters) {
     parameters[param] = body[param];
   }
  //  if (syncParam) {
  //    parameters[syncParam] = snapshot.lastUpdated;
  //  }
 
   let securities = {};
    securities['basicAuth'] = {username: "anystring", password: "aa0c86caab2f2a7b8f0009c21334131a-us20"};
 
   if (cfg.otherServer) {
     if (!spec.servers) {
       spec.servers = [];
     }
     spec.servers.push({ url: "https://us20.api.mailchimp.com/3.0" });
   }
 
   let callParams = {
     spec: spec,
     operationId: data["function"],
     pathName: pathName,
     method: method,
     parameters: parameters,
     requestContentType: requestContentType,
     requestBody: body,
     securities: { authorized: securities },
     server: spec.servers[cfg.server] || cfg.otherServer,
   };
   if (callParams.method === "get") {
     delete callParams.requestBody;
   }
 
   if (isVerbose) {
     let out = Object.assign({}, callParams);
     out.spec = "[omitted]";
     console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
   }
   const newElement = {};
 
   // Call operation via Swagger client
   return Swagger.execute(callParams).then((data) => {
    console.log("Status Code: ",data.status);
    console.log("Status Text: ",data.statusText);
   });
 }
 processTrigger({},{},{},{},{})

//  const ids = [];
//  for (let i = 0; i < ids.length; i++ ) {
//     const msg = {};
//     const cfg = {};
//     const data = {
//         "function": ids[i] 
//     };
    
//     processTrigger(msg,cfg,{},{},data)
// }