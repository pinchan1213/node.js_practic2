/**
 * Board.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // 送信したメッセージ （必須）
    message: { type: 'string', required: true },
    //ユーザー　（必須）
    user: { type: 'string', required:true },
    //必要なら記入する　（必須ではない）
    email: { type: 'string' },
  },

};

