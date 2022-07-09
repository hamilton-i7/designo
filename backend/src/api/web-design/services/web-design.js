'use strict';

/**
 * web-design service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-design.web-design');
