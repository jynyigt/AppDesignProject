import baseControl from './baseControl';

export default class PromotionsService extends baseControl {
  constructor(service) {
    super(service);
    this.schemaName = 'promotions';
  }

  getPromotions(data) {
    return this.getObject(this.schemaName, 'list', data);
  }

  getPromotionById(data) {
    return this.getObject(this.schemaName, '', data);
  }
}
