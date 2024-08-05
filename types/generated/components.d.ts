import type { Schema, Attribute } from '@strapi/strapi';

export interface StepsSteps extends Schema.Component {
  collectionName: 'components_steps_steps';
  info: {
    displayName: 'steps';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    latitude: Attribute.Float;
    longitude: Attribute.Float;
    arrival: Attribute.Date;
    depart: Attribute.Date;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'steps.steps': StepsSteps;
    }
  }
}
