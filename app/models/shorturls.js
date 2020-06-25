import Model, { attr } from '@ember-data/model';

//fixed issue
//https://discuss.emberjs.com/t/how-to-serialize/16163/2
export default class ShorturlsModel extends Model {
    @attr longUrl;
    @attr shortUrl;
}
