import PromotionsService from './promotions';
import TagsService from './tags';

export default class Service {
  context = null;
  constructor(context) {
    this.context = context;
  }
  tags = new TagsService(this);
  promotions = new PromotionsService(this);
}
