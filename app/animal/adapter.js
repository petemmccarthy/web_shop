import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  // host: 'http://jsonplaceholder.typicode.com',
  // namespace: 'Users/Peter/apps/web_shop',
  pathForType() {
    return 'animals';
  }
});
