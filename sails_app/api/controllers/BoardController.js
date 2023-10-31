/**
 * BoardController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //データ取得のメソッド
    // 変数 ＝await モデル名.find(条件)
    // 変数 ＝await モデル名.findOne(条件)  一つのデータを取り出すもの
  
    //boardのページを表示
    index: async function (req, res) {
        let data = await Board.find();
        return res.view({
            title: 'Sample',
            msg: 'Boardモデルを利用します。',
            data: data,
        });
    },
};

