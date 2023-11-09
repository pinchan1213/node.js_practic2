import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
    //asyncをつけて非同期メソッドとして定義する
    public async index(ctx:HttpContextContract){
        const data = {
            title:'Sample',
            message:'これは、SampleControllerのindexアクションです。',
        }
        return ctx.view.render('samples/index',data);
    }
}
