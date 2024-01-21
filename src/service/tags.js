import baseControl from './baseControl';

export default class TagsService extends baseControl {
  constructor(service) {
    super(service);
    this.schemaName = 'tags';
  }

  getTags(data) {
    return this.getObject(this.schemaName, '', data);
  }
}
