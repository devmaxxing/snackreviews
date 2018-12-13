'use strict';

/**
 * Productline.js controller
 *
 * @description: A set of functions called "actions" for managing `Productline`.
 */

module.exports = {

  /**
   * Retrieve productline records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productline.search(ctx.query);
    } else {
      return strapi.services.productline.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productline record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.productline.fetch(ctx.params);
  },

  /**
   * Count productline records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productline.count(ctx.query);
  },

  /**
   * Create a/an productline record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productline.add(ctx.request.body);
  },

  /**
   * Update a/an productline record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productline.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productline record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productline.remove(ctx.params);
  }
};
