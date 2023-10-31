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

    //POST送信のあとの処理
    index_posted: async function (req, res) {
        await Board.create(req.body);
        return res.redirect('/board');
    },

    //編集画面を表示
    edit: async function (req, res) {
        const id = parseInt(req.param('id'));
        let data = await Board.findOne({ id: id });
        return res.view({
            title: 'Sample',
            msg: 'Boardモデルを更新します。',
            data: data,
        });
    },

    //POST送信した後の更新の処理
    edit_posted: async function (req, res) {
        const id = parseInt(req.param('id'));
        await Board.updateOne({ id: id }).set(req.body);
        return redirect('/board');
    },
};

