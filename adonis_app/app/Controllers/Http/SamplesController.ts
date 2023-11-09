import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
    //asyncをつけて非同期メソッドとして定義する
    public async index(ctx:HttpContextContract){
        //セッションからlistという値を取り出してそれをlistに指定してテンプレートに渡している。
        let list = ctx.session.get('list');
        //ctx.sessionからgetを呼び出し、listの値を取り出す
        if (list == undefined){
            //値が無ければ、空の入れるをlistに設定する
            list = [];
            ctx.session.put('list',list);
        }
        // //paramメソッドを使ってidとpassの値を取り出している
        // const msg = 'ID:' + ctx.request.param('id') + ',pass:'+ ctx.request.param('pass');
        const data = {
            title:'Sample',
            message:'メッセージを送信',
            list:list,
        }
        return ctx.view.render('samples/index',data);
    }

    public async index_posted(ctx:HttpContextContract){
        //フォーム送信された値をセッションのlistに追加
        const list = ctx.session.get('list') || [];
        //送信されたフォームからmsgという値も取り出す
        const msg = ctx.request.input('msg');
        //unshiftを使って先頭に値を追加していく
        list.unshift(ctx.request.input('msg'));
        //listを再びセッションのlistの設定して、データの更新を行う
        ctx.session.put('list',list);
        //送信されたフォームの値の取り出し
        const data = {
            title:'Sample',
            message:'「' + msg + '」を送信しました。',
            list:list,
        }
        return ctx.view.render('samples/index',data);
    }
}
