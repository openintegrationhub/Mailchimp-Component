/**
 * Auto-generated action file for "Mailchimp Marketing API" API.
 *
 * Generated at: 2021-05-27T09:22:31.303Z
 * Mass generator version: 1.0.0
 *
 * : Mailchimp-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postCampaigns'
 * Endpoint Path: '/campaigns'
 * Method: 'post'
 *
 */



 // how to pass the transformation function... no need
 // pass the meta data 
 // create a new Object 
 // emit the message with the new emit function 

 // securities and auth methods   
 // check how to make the new ferryman and its transform functions functional // no need

const Swagger = require('swagger-client');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports = {process: processAction};

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "type": "type",
    "list_id": "list_id",
    "saved_segment_id": "saved_segment_id",
    "prebuilt_segment_id": "prebuilt_segment_id",
    "match": "match",
    "conditions": "conditions",
    "segment_opts": "segment_opts",
    "recipients": "recipients",
    "subject_line": "subject_line",
    "preview_text": "preview_text",
    "title": "title",
    "from_name": "from_name",
    "reply_to": "reply_to",
    "use_conversation": "use_conversation",
    "to_name": "to_name",
    "folder_id": "folder_id",
    "authenticate": "authenticate",
    "auto_footer": "auto_footer",
    "inline_css": "inline_css",
    "auto_tweet": "auto_tweet",
    "auto_fb_post": "auto_fb_post",
    "fb_comments": "fb_comments",
    "template_id": "template_id",
    "settings": "settings",
    "winner_criteria": "winner_criteria",
    "wait_time": "wait_time",
    "test_size": "test_size",
    "subject_lines": "subject_lines",
    "send_times": "send_times",
    "from_names": "from_names",
    "reply_to_addresses": "reply_to_addresses",
    "variate_settings": "variate_settings",
    "opens": "opens",
    "html_clicks": "html_clicks",
    "text_clicks": "text_clicks",
    "goal_tracking": "goal_tracking",
    "ecomm360": "ecomm360",
    "google_analytics": "google_analytics",
    "clicktale": "clicktale",
    "campaign": "campaign",
    "notes": "notes",
    "salesforce": "salesforce",
    "capsule": "capsule",
    "tracking": "tracking",
    "feed_url": "feed_url",
    "frequency": "frequency",
    "hour": "hour",
    "sunday": "sunday",
    "monday": "monday",
    "tuesday": "tuesday",
    "wednesday": "wednesday",
    "thursday": "thursday",
    "friday": "friday",
    "saturday": "saturday",
    "daily_send": "daily_send",
    "weekly_send_day": "weekly_send_day",
    "monthly_send_date": "monthly_send_date",
    "schedule": "schedule",
    "constrain_rss_img": "constrain_rss_img",
    "rss_opts": "rss_opts",
    "image_url": "image_url",
    "description": "description",
    "social_card": "social_card",
    "content_type": "content_type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    console.log("msg:",msg);
    console.log("cfg:",cfg)

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

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
        operationId: 'postCampaigns',
        pathName: '/campaigns',
        method: 'post',
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