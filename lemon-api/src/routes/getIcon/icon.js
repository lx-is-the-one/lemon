const Mongo = require("mongodb-curd");
const batabaseName = "lemon";
const collcationName = "icon";
//导出业务逻辑   查找所有图标   添加收支   根据用户id和收支类型查找收支内容
module.exports = {
    geticon: function(req, res, next) { //查找所有图片
        Mongo.find(batabaseName, "icon", {}, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "success",
                    data: result
                })
            }
        })
    },
    add: function(req, res, next) { //添加收支，添加图标，来源，收支类型，用户id
        const { icon, title, type, common } = req.body;
        if (!icon || !title || !type || !common) {
            res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.insert(batabaseName, "classify", req.body, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "添加成功"
                })
            }
        })
    },
    find: function(req, res, next) { // 根据收支类型，用户id查找收支内容
        const { type, common } = req.body;
        if (!type || !common) {
            res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.find(batabaseName, "classify", {
            "common": { $in: ["*", common] },
            "type": type
        }, function(result) {
            if (!result) {
                res.send({
                    code: 0,
                    mes: "error"
                })
            } else {
                res.send({
                    code: 1,
                    mes: "成功",
                    data: result
                })
            }
        })
    }
}