const Mongo = require("mongodb-curd");
const batabaseName = "lemon";
const collcationName = "user";
//导出查询所有用户的业务逻辑
module.exports = function(req, res, next) {
    Mongo.find(batabaseName, collcationName, {}, function(result) {
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
}