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
    // dataの値を準備
    if (!req.session.data) {
      // セッションの情報を保存する
      req.session.data = [];
    }
    // if (req.param('id')) {
    //   message = 'あなたのIDは、' + req.param('id') + 'です。';
    // } else {
    //   message = '名前を入力：';
    // }
    // if (req.query.name) {
    //   message += '(あなたの名前は、' + req.query.name + 'ですね？)';
    // }
    // if (req.method == 'POST') {
    //   message = 'こんにちは、' + req.body.msg + 'さん';
    // }
    return res.view({
      title: 'Sample',
      message: 'メッセージを送信してください。',
      data:req.session.data,
      // msg:msg,
    });
  },

  //フォームの送信後の処理
  index_posted: async function (req, res) {
    // セッションにデータを保存
    msg = req.body.msg;
    // message = 'こんにちは' + msg + 'さん';
    // unshiftで一番前にデータを並べて表示する
    req.session.data.unshift(msg);
    //  /sampleにリダイレクト
    return res.redirect('/sample');
    // return res.view({
    //   title: 'Sample',
    //   msg: msg,
    //   message: message
    // });
  },

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