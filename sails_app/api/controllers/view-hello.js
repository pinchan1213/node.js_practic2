module.exports = {


  friendlyName: 'View hello',


  //説明文
  description: 'Display "Hello" page.',

  //ページを抜けるときの設定
  exits: {

    success: {
      viewTemplatePath: 'pages/hello'
    }

  },


  //実行する処理
  fn: async function () {

    // Respond with view.
    return {
      title: 'これは新しいアクション',
      message: 'これは、新たに作成したアクションです',
    };

  }


};
