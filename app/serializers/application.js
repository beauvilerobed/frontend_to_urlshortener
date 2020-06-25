//https://discuss.emberjs.com/t/how-to-serialize/16163
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload.data;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
