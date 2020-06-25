import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    //change to current host for api
    host = "http://localhost:5000";
    namespace = "api";
}
