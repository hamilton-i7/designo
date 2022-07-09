"use strict";

/**
 *  global controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany("api::global.global", {
      ...query,
      populate: {
        seo: {
          populate: {
            favicon: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
            shareImage: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
          },
        },
        menu: {
          populate: {
            logo: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
            links: true,
          },
        },
        footer: {
          populate: {
            logo: {
              populate: {
                mobile: true,
                tablet: true,
                desktop: true,
              },
            },
            links: true,
            socials: true,
            address: true,
            contact: true,
          },
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
