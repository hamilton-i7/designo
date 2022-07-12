"use strict";

/**
 *  contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::contact.contact", {
      ...query,
      populate: {
        seo: true,
        hero: {
          populate: {
            cta: true,
            form: true,
            pattern: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
          },
        },
        locations: {
          populate: {
            cta: true,
            image: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
            pattern: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
          },
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
