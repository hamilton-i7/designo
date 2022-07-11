"use strict";

/**
 *  home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::home.home", {
      ...query,
      populate: {
        seo: true,
        hero: {
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
        traits: {
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
        projects: {
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
