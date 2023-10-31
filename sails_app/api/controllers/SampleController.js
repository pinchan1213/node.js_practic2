/**
 * SampleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
   * `SampleController.index()`
   */
  //送信ボタンを押した後の処理
  index: async function (req, res) {
    // let msg = req.body.msg;
    message = '名前を入力';
    // if (req.param('id')) {
    //   message = 'あなたのIDは、' + req.param('id') + 'です。';
    // } else {
    //   message = '名前を入力：';
    // }
    if (req.method == 'POST') {
      message = 'こんにちは、' + req.body.msg + 'さん';
    }
    return res.view({
      title: 'Sample',
      message: message,
      // msg:msg,
    });
  },

  // index_posted: async function (req, res) {
  //   let msg = req.body.msg;
  //   let message = 'こんにちは' + msg + 'さん';
  //   return res.view({
  //     title: 'Sample',
  //     msg: msg,
  //     message: message
  //   });
  // },

  /**
   * `SampleController.add()`
   */
  add: async function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },

  /**
   * `SampleController.edit()`
   */
  edit: async function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },

  /**
   * `SampleController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }

}