const Mock=require("mockjs")

module.exports=Mock.mock({
    "list|10":[{
        "img":"@image(100x100,@color)",
        "title":"@ctitle(8-10)",
        "name":"@cname"
    }]
})