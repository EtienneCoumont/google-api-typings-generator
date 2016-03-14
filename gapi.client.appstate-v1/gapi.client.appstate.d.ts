// Type definitions for Google Google App State API v1
// Project: https://developers.google.com/games/services/web/api/states
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.appstate {
    
    interface GetResponse {
        // The current app state version.
        currentStateVersion?: string,
        // The requested data.
        data?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string appstate#getResponse.
        kind?: string,
        // The key for the data.
        stateKey?: number,
    }
    
    interface ListResponse {
        // The app state data.
        items?: GetResponse[],        
        // Uniquely identifies the type of this resource. Value is always the fixed string appstate#listResponse.
        kind?: string,
        // The maximum number of keys allowed for this user.
        maximumKeyCount?: number,
    }
    
    interface UpdateRequest {
        // The new app state data that your application is trying to update with.
        data?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string appstate#updateRequest.
        kind?: string,
    }
    
    interface WriteResult {
        // The version of the data for this key on the server.
        currentStateVersion?: string,
        // Uniquely identifies the type of this resource. Value is always the fixed string appstate#writeResult.
        kind?: string,
        // The written key.
        stateKey?: number,
    }
    
    interface StatesResource {
        // Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a conflict error on version mismatch.
        clear (request: {        
            // The version of the data to be cleared. Version strings are returned by the server.
            currentDataVersion?: string,
            // The key for the data to be retrieved.
            stateKey: number,
        }) : gapi.client.Request<WriteResult>;        
        
        // Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result in data loss and data corruption.
        delete (request: {        
            // The key for the data to be retrieved.
            stateKey: number,
        }) : gapi.client.Request<void>;        
        
        // Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned.
        get (request: {        
            // The key for the data to be retrieved.
            stateKey: number,
        }) : gapi.client.Request<GetResponse>;        
        
        // Lists all the states keys, and optionally the state data.
        list (request: {        
            // Whether to include the full data in addition to the version number
            includeData?: boolean,
        }) : gapi.client.Request<ListResponse>;        
        
        // Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face of concurrent writes. Maximum per-key size is 128KB.
        update (request: {        
            // The version of the app state your application is attempting to update. If this does not match the current version, this method will return a conflict error. If there is no data stored on the server for this key, the update will succeed irrespective of the value of this parameter.
            currentStateVersion?: string,
            // The key for the data to be retrieved.
            stateKey: number,
        }) : gapi.client.Request<WriteResult>;        
        
    }
    
}

declare module gapi.client.appstate {
    var states: gapi.client.appstate.StatesResource; 
    
}