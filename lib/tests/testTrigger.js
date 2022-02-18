/**
 * Auto-generated trigger file for "Mailchimp Marketing API" API.
 * Generated at: 2022-02-18T13:41:44.350Z
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
 const spec = require("../spec.json");
 const {
   isSecondDateAfter,
   mapFieldNames,
   getMetadata,
 } = require("../utils/helpers");
 const componentJson = require("../../component.json");
 
 function processTrigger(msg, cfg, snapshot, incomingMessageHeaders, data) {
   var isVerbose = process.env.debug || cfg.verbose;
   snapshot.lastUpdated = snapshot.lastUpdated || new Date(0).getTime();
 
   console.log("data function:", data["function"]);
   console.log("msg:", msg);
   console.log("cfg:", cfg);
   const { snapshotKey, arraySplittingKey, syncParam } = cfg.nodeSettings;
   const trigger = componentJson.triggers[data["function"]];
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
 
   const body = msg.data;
   mapFieldNames(body);
 
   let parameters = {};
   for (let param of specPathParameters) {
     parameters[param] = body[param];
   }
   if (syncParam) {
     parameters[syncParam] = snapshot.lastUpdated;
   }
 
   let securities = {};
    securities['basicAuth'] = {username: cfg.username, password: cfg.passphrase};
 
   if (cfg.otherServer) {
     if (!spec.servers) {
       spec.servers = [];
     }
     spec.servers.push({ url: cfg.otherServer });
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
     delete data.uid;
     newElement.metadata = getMetadata(msg.metadata);
     const response = JSON.parse(data.data);
 
     if (!arraySplittingKey) {
       newElement.data = response;
     } else {
       newElement.data = arraySplittingKey
         .split(".")
         .reduce((p, c) => (p && p[c]) || null, response);
     }
     if (Array.isArray(newElement.data)) {
       let lastElement = 0;
       for (let i = 0; i < newElement.data.length; i++) {
         const newObject = { ...newElement, data: newElement.data[i] };
         const currentObjectDate = newObject.data[snapshotKey]
           ? newObject.data[snapshotKey]
           : newObject.data['updated_at'];
         if (snapshot.lastUpdated === 0) {
           if (isSecondDateAfter(currentObjectDate, lastElement)) {
             lastElement = snapshotKey
               ? newElement.data[snapshotKey]
               : newElement.data['updated_at'];
           }
           console.log("Data to be emitted:", newObject);
         } else {
           if (isSecondDateAfter(currentObjectDate, snapshot.lastUpdated)) {
             if (isSecondDateAfter(currentObjectDate, lastElement)) {
               lastElement = currentObjectDate;
             }
             console.log("Data to be emitted:", newObject);
           }
         }
       }
       snapshot.lastUpdated =
         lastElement !== 0 ? lastElement : snapshot.lastUpdated;
       console.log("Snapshot to be emitted:", snapshot);
        } else {
       console.log("Data to be emitted:", newElement);
     }
   });
 }
 
 const ids = [];
 for (let i = 0; i < ids.length; i++ ) {
    const msg = {};
    const cfg = {};
    const data = {
        "function": ids[i] 
    };
    
    processTrigger(msg,cfg,{},{},data)
}