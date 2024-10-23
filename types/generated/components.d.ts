import type { Schema, Attribute } from '@strapi/strapi';

export interface OrdereditemOrderedItem extends Schema.Component {
  collectionName: 'components_ordereditem_ordered_items';
  info: {
    displayName: 'Ordered-item';
    icon: '';
  };
  attributes: {
    product: Attribute.Relation<
      'ordereditem.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
    price: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordereditem.ordered-item': OrdereditemOrderedItem;
    }
  }
}
