/**
 * Auto-generated action file for "Mailchimp Marketing API" API.
 *
 * Generated at: 2021-03-12T16:21:15.232Z
 * Mass generator version: 1.0.0
 *
 * : mailchimp
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postListsIdMembers'
 * Endpoint Path: '/lists/{list_id}/members'
 * Method: 'post'
 *
 */


// how to pass the transformation function... no need
// pass the meta data
// create a new Object
// emit the message with the new emit function

// securities and auth methods
// check how to make the new ferryman and its transform functions functional // no need
const crypto = require('crypto');
const Swagger = require('swagger-client');
const uuid = require('uuid');
const { transform } = require('@openintegrationhub/ferryman');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');
const { oihToMember } = require('../transformations/oihToMember');

// this wrapers offers a simplified emit(data) function
module.exports = { process: processAction };

// parameter names for this call
const PARAMETERS = [
  'list_id',
  'skip_merge_validation',
];

// mappings from connector field names to API field names
const FIELD_MAP = {
  list_id: 'list_id',
  skip_merge_validation: 'skip_merge_validation',
  email_address: 'email_address',
  email_type: 'email_type',
  status: 'status',
  merge_fields: 'merge_fields',
  interests: 'interests',
  language: 'language',
  vip: 'vip',
  latitude: 'latitude',
  longitude: 'longitude',
  location: 'location',
  marketing_permissions: 'marketing_permissions',
  ip_signup: 'ip_signup',
  timestamp_signup: 'timestamp_signup',
  ip_opt: 'ip_opt',
  timestamp_opt: 'timestamp_opt',
  tags: 'tags',
  requestBody: 'requestBody',
};


async function processAction(msg, cfg) {
  const isVerbose = process.env.debug || cfg.verbose;

  const transformed = transform(msg, cfg, oihToMember);

  if (isVerbose) {
    console.log('transformed:', JSON.stringify(transformed));
    console.log(`---MSG: ${JSON.stringify(msg)}`);
    console.log(`---CFG: ${JSON.stringify(cfg)}`);
    console.log(`---ENV: ${JSON.stringify(process.env)}`);
  }

  const contentType = 'application/json';

  const body = transformed.data;
  mapFieldNames(body);

  if (isVerbose) {
    console.log('Body for request:');
    console.log(JSON.stringify(body));
  }

  const parameters = {};
  for (const param of PARAMETERS) {
    parameters[param] = body[param];
  }

  const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
    ? msg.metadata.oihUid
    : null;
  const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
    ? msg.metadata.recordUid
    : undefined;

  const newElement = {};
  const oihMeta = {
    oihUid,
    recordUid,
  };

  // credentials for this operation
  let securities = {};

  if (cfg.accessToken) {
    securities = { BearerAuth: cfg.accessToken };
  } else {
    securities.basicAuth = { username: cfg.auth_username, password: cfg.auth_password };
  }

  if (cfg.otherServer) {
    if (!spec.servers) {
      spec.servers = [];
    }
    spec.servers.push({ url: cfg.otherServer });
  }

  if (recordUid) {
    console.log('Updating entry', recordUid);
  } else {
    console.log('Creating new entry');
  }

  if (!recordUid && (!body.email_address || body.email_address === '')) {
    console.log('No email address aborting');
    return;
  }

  let callParams;

  if (cfg.deletes && msg.data && msg.data.deleteRequested) {
    callParams = {
      spec,
      operationId: 'deleteListsIdMembersId',
      pathName: '/lists/{list_id}/members/{subscriber_hash}/actions/delete-permanent',
      method: 'delete',
      parameters,
      requestContentType: contentType,
      requestBody: body,
      securities: { authorized: securities },
      server: spec.servers[cfg.server] || cfg.otherServer,
    };
  } else {
    callParams = {
      spec,
      operationId: 'putListsIdMembersId',
      pathName: '/lists/{list_id}/members/{subscriber_hash}',
      method: 'put',
      parameters,
      requestContentType: contentType,
      requestBody: body,
      securities: { authorized: securities },
      server: spec.servers[cfg.server] || cfg.otherServer,
    };
  }

  const email = (recordUid) ? recordUid.toLowerCase() : body.email_address.toLowerCase();
  const subscriberHash = crypto.createHash('md5').update(email).digest('hex');
  console.log('subscriber_hash:', subscriberHash);
  callParams.parameters.subscriber_hash = subscriberHash;


  // Get all lists
  const listsCallParams = {
    spec,
    operationId: 'getLists',
    pathName: '/lists',
    method: 'get',
    parameters: {},
    requestContentType: contentType,
    securities: { authorized: securities },
    server: spec.servers[cfg.server] || cfg.otherServer,
  };

  const response = await Swagger.execute(listsCallParams);

  console.log('All lists:', response.body);

  if (!('lists' in response.body)) {
    console.log('No lists found aborting...');
    return;
  }

  let index;
  const listNameLower = (cfg.listName) ? cfg.listName.trim().toLowerCase() : false;
  for (index in response.body.lists) {
    // web_id name
    if (cfg.listId && cfg.listId === `${response.body.lists[index].web_id}`) {
      callParams.parameters.list_id = response.body.lists[index].id;
    } else if (listNameLower && listNameLower === response.body.lists[index].name.trim().toLowerCase()) {
      callParams.parameters.list_id = response.body.lists[index].id;
    }
  }

  if (!('list_id' in callParams.parameters)) {
    console.log('No list id or name found. Aborting');
    console.log(cfg.listId, cfg.listName);
    return;
  }

  if (isVerbose) {
    const out = Object.assign({}, callParams);
    out.spec = '[omitted]';
    console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
  }

  let data;
  try {
    // Call operation via Swagger client
    data = await Swagger.execute(callParams);
  } catch (e) {
    console.log(e);
  }

  console.log('swagger data:', data);
  newElement.metadata = oihMeta;

  if (cfg.deletes && msg.data && msg.data.deleteRequested) {
    newElement.data = {
      signature: '',
      timestamp: Date.now(),
    };

    if (data.status === 200) {
      newElement.data.delete = 'confirmed';
    } else if (data.status === 401 || data.status === 403) {
      newElement.data.delete = 'denied';
      newElement.data.comment = data.text;
    } else {
      newElement.data.delete = 'failed';
      newElement.data.comment = data.text;
    }
  } else {
    newElement.metadata.recordUid = data.id || oihMeta.metadata.recordUid;
  }
  this.emit('data', newElement);
}

function mapFieldNames(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(mapFieldNames);
  } else if (typeof obj === 'object' && obj) {
    Object.keys(obj).forEach((key) => {
      mapFieldNames(obj[key]);

      const goodKey = FIELD_MAP[key];
      if (goodKey && goodKey !== key) {
        obj[goodKey] = obj[key];
        delete obj[key];
      }
    });
  }
}
