import Route from '@ember/routing/route';

export default class ShorturlsRoute extends Route {
    model(params) {
        return this.store.findRecord('shorturls', params.id);
    }
}
