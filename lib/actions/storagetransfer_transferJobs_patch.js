/**
 * Auto-generated action file for "Storage Transfer" API.
 *
 * Generated at: 2019-05-23T09:13:43.333Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-storagetransfer-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'storagetransfer.transferJobs.patch'
 * Endpoint Path: '/v1/{jobName}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "jobName",
    "access_token",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "jobName": "jobName",
    "access_token": "access_token",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "projectId": "projectId",
    "creationTime": "creationTime",
    "deletionTime": "deletionTime",
    "description": "description",
    "lastModificationTime": "lastModificationTime",
    "name": "name",
    "day": "day",
    "month": "month",
    "year": "year",
    "scheduleEndDate": "scheduleEndDate",
    "scheduleStartDate": "scheduleStartDate",
    "hours": "hours",
    "minutes": "minutes",
    "nanos": "nanos",
    "seconds": "seconds",
    "startTimeOfDay": "startTimeOfDay",
    "schedule": "schedule",
    "status": "status",
    "accessKeyId": "accessKeyId",
    "secretAccessKey": "secretAccessKey",
    "awsAccessKey": "awsAccessKey",
    "bucketName": "bucketName",
    "awsS3DataSource": "awsS3DataSource",
    "gcsDataSink": "gcsDataSink",
    "gcsDataSource": "gcsDataSource",
    "listUrl": "listUrl",
    "httpDataSource": "httpDataSource",
    "excludePrefixes": "excludePrefixes",
    "includePrefixes": "includePrefixes",
    "maxTimeElapsedSinceLastModification": "maxTimeElapsedSinceLastModification",
    "minTimeElapsedSinceLastModification": "minTimeElapsedSinceLastModification",
    "objectConditions": "objectConditions",
    "deleteObjectsFromSourceAfterTransfer": "deleteObjectsFromSourceAfterTransfer",
    "deleteObjectsUniqueInSink": "deleteObjectsUniqueInSink",
    "overwriteObjectsAlreadyExistingInSink": "overwriteObjectsAlreadyExistingInSink",
    "transferOptions": "transferOptions",
    "transferSpec": "transferSpec",
    "transferJob": "transferJob",
    "updateTransferJobFieldMask": "updateTransferJobFieldMask",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'storagetransfer.transferJobs.patch',
        pathName: '/v1/{jobName}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

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