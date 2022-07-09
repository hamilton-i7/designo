"use strict";

/**
 *  web-design controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::web-design.web-design",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::web-design.web-design",
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
                cta: true,
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
