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
        //Boardの全データを取得する find()、awaitを使って実行を待って処理を進める
        // モデルからデータを取得し、取り出されたデータは配列として返される
        let data = await Board.find();
        return res.view({
            title: 'Sample',
            msg: 'Boardモデルを使用します。',
            data: data,
        });
    },
};

