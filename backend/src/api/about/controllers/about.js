"use strict";

/**
 *  about controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::about.about", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::about.about", {
      ...query,
      populate: {
        seo: true,
        hero: {
          populate: {
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
        cta: {
          populate: {
            link: true,
            pattern: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
          },
        },
        traits: {
          populate: {
            image: {
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
