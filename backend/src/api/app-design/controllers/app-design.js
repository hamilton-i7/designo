"use strict";

/**
 *  app-design controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::app-design.app-design",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::app-design.app-design",
        {
          ...query,
          populate: {
            seo: true,
            hero: {
              populate: {
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
            designs: {
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
            cta: {
              populate: {
                pattern: {
                  populate: {
                    mobile: true,
                    tablet: true,
                    desktop: true,
                  },
                },
                link: true,
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
