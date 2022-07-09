"use strict";

/**
 *  location controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::location.location",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::location.location",
        {
          ...query,
          populate: {
            seo: true,
            locations: {
              populate: {
                address: true,
                contact: true,
              },
            },
            cta: {
              populate: {
                cta: true,
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
        }
      );

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
