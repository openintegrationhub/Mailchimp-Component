/**
 * Auto-generated trigger file for "Mailchimp Marketing API" API.
 *
 * Generated at: 2021-05-27T09:22:31.796Z
 * Mass generator version: 1.0.0
 *
 * : Mailchimp-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getListsIdMembers'
 * Endpoint Path: '/lists/{list_id}/members'
 * Method: 'get'
 *
 */

 const Swagger = require('swagger-client');
 const spec = require('../spec.json');
 
 // this wrapers offers a simplified emitData(data) function
 module.exports = {process: processTrigger};
 
 // parameter names for this call
 const PARAMETERS = [
    "fields",
    "exclude_fields",
    "count",
    "offset",
    "list_id",
    "email_type",
    "status",
    "since_timestamp_opt",
    "before_timestamp_opt",
    "since_last_changed",
    "before_last_changed",
    "unique_email_id",
    "vip_only",
    "interest_category_id",
    "interest_ids",
    "interest_match",
    "sort_field",
    "sort_dir",
    "since_last_campaign",
    "unsubscribed_since"
];
 
 // mappings from connector field names to API field names
 const FIELD_MAP = {
    "fields": "fields",
    "exclude_fields": "exclude_fields",
    "count": "count",
    "offset": "offset",
    "list_id": "list_id",
    "email_type": "email_type",
    "status": "status",
    "since_timestamp_opt": "since_timestamp_opt",
    "before_timestamp_opt": "before_timestamp_opt",
    "since_last_changed": "since_last_changed",
    "before_last_changed": "before_last_changed",
    "unique_email_id": "unique_email_id",
    "vip_only": "vip_only",
    "interest_category_id": "interest_category_id",
    "interest_ids": "interest_ids",
    "interest_match": "interest_match",
    "sort_field": "sort_field",
    "sort_dir": "sort_dir",
    "since_last_campaign": "since_last_campaign",
    "unsubscribed_since": "unsubscribed_since"
};
 
 function processTrigger(msg, cfg) {
     var isVerbose = process.env.debug || cfg.verbose;
 
     console.log("msg:",msg);
     console.log("cfg:",cfg)
 
     if (isVerbose) {
         console.log(`---MSG: ${JSON.stringify(msg)}`);
         console.log(`---CFG: ${JSON.stringify(cfg)}`);
         console.log(`---ENV: ${JSON.stringify(process.env)}`);
     }
 
     const contentType = undefined;
 
     const body = msg.data;
     mapFieldNames(body);
 
     let parameters = {};
     for(let param of PARAMETERS) {
         parameters[param] = body[param];
     }
 
     const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
     ? msg.metadata.oihUid
     : 'oihUid not set yet';
   const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
     ? msg.metadata.recordUid
     : undefined;
   const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
     ? msg.metadata.applicationUid
     : undefined;
 
     const newElement = {};
     const oihMeta = {
       applicationUid,
       oihUid,
       recordUid,
     };
     
     // credentials for this operation
     let securities = {};
    securities['basicAuth'] = {username: cfg.auth_username, password: cfg.auth_password};;
 
     if(cfg.otherServer){
         if(!spec.servers){
             spec.servers = [];
         }
         spec.servers.push({"url":cfg.otherServer})
     }
     
     
     let callParams = {
         spec: spec,
         operationId: 'getListsIdMembers',
         pathName: '/lists/{list_id}/members',
         method: 'get',
         parameters: parameters,
         requestContentType: contentType,
         requestBody: body,
         securities: {authorized: securities},
         server: spec.servers[cfg.server] || cfg.otherServer,
     };
         if(callParams.method === 'get'){
             delete callParams.requestBody;
         }
     
 
     if (isVerbose) {
         let out = Object.assign({}, callParams);
         out.spec = '[omitted]';
         console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
     }
 
     // Call operation via Swagger client
     return Swagger.execute(callParams).then(data => {
         // emit a single message with data
         // console.log("swagger data:",data);
         delete data.uid;
         newElement.metadata = oihMeta;
         newElement.data = data.data
         this.emit("data",newElement);
 
         // if the response contains an array of entities, you can emit them one by one:
 
         // data.obj.someItems.forEach((item) => {
         //     this.emitData(item);
         // }
     });
 }
 
 function mapFieldNames(obj) {
     if(Array.isArray(obj)) {
         obj.forEach(mapFieldNames);
     }
     else if(typeof obj === 'object' && obj) {
         Object.keys(obj).forEach(key => {
             mapFieldNames(obj[key]);
 
             let goodKey = FIELD_MAP[key];
             if(goodKey && goodKey !== key) {
                 obj[goodKey] = obj[key];
                 delete obj[key];
             }
         });
     }
 }