/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/hello': { action: 'view-hello' },
  //?を付けるとIDが無くてもエラーが出なくなる（省略可）
  'GET /sample/:id?': { controller: 'SampleController', action: 'index' },
  'POST /sample': { controller: 'SampleController', action: 'index_posted' },
  'GET /board': { controller: 'BoardController', action: 'index' },
  'POST /board': { controller: 'BoardController', action: 'index_posted' },
  'GET /board/edit/:id': { controller: 'BoardController', action: 'edit' },
  'POST /board/edit/:id':{ controller:'BoardController', action:'edit_posted' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
