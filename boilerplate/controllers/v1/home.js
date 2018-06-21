exports.index = async (ctx) => {
    let docs = await ctx.service.home.index();

    ctx.body = ctx.helper.successReply(docs)
}