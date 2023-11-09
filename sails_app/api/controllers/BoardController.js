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
        // 指定したIDのデータを取得
        const id = parseInt(req.param('id'));
        // 定数idをBoardモデルから取得してくる
        let data = await Board.findOne({ id: id });
        return res.view({
            title: 'Sample',
            msg: 'Boardモデルを更新します。',
            data: data,
        });
    },

    //POST送信した後の更新の処理
    edit_posted: async function (req, res) {
        //送信されたパラメーターからIDの値を取り出す
        const id = parseInt(req.param('id'));
        //updateOneでデータの更新を行う
        await Board.updateOne({ id: id }).set(req.body);
        return res.redirect('/board');
    },

    //削除ページの表示
    delete: async function (req, res) {
        const id = parseInt(req.param('id'));
        let data = await Board.findOne({ id: id });
        return res.view({
            title: 'Sample',
            msg: 'Boardモデルを削除します。',
            data: data,
        });
    },

    //削除の処理
    delete_posted: async function (req, res) {
        const id = parseInt(req.param('id'));
        //一つのデータのみ削除する
        await Board.destroyOne({ id: id });
        return res.redirect('/board');
    },

    //検索ページの表示
    find:async function(req,res){
        let data = await Board.find({
            sort:['user ASC','createdAt DESC'],
        });
        return res.view({
            title:'Sample',
            msg:'Boardモデルを検索します',
            find:'',
            data:data,
        });
    },

    //検索機能実装
    find_posted:async function(req,res){
        let data = await Board.find({
            where:{
                message:{contains:req.body.find},
            },
            sort:'user ASC'
        });
            // //どちらか含んでいる物を検索する
            // or:[
            //     //テキストを含むものを検索する
            //     {message:{contains:req.body.find}},
            //     //ユーザーを検索
            //     {user : {contains:req.body.find}},
            // ]
        return res.view('board/find',{
            title:'Sample',
            msg:'Boardモデルの検索「' + req.body.find + '」',
            find:req.body.find,
            data:data,
        });
    },
};

