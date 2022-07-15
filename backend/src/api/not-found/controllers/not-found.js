"use strict";

/**
 *  not-found controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::not-found.not-found",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::not-found.not-found",
        {
          ...query,
          populate: {
            seo: true,
            image: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
            link: true,
          },
        }
      );

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
