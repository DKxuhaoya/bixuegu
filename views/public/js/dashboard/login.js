define(["jquery","cookie","form"],function($){
//获取之前用户登录的时候,用户返回来的头像信息
var userInfoStr = $.cookie("userInfo");
if(userInfoStr){
var userInfo = JSON.parse(userInfoStr);
//有的话就设置,没有的话就设置一个默认头像
$(".avatar img").attr("src",userInfo.tc_avatar)    
};



	//可以给表单注册表单提交事件
$("form").submit(function(){
    $("form").ajaxSubmit({
        //$("form")会自动帮我们获取表单里的数据
    // url:"/api/login",   写在action里
    // type:"post",  写在method里
   success:function(data){
    if(data.code ==200){
        // alert("登录成功")
        // cookie不能直接存储对像,会把它变成字符串存进去,要加上JSON.stringify(data)
        $.cookie("userInfo",JSON.stringify(data.result),{path:"/"});
        location.href="/";
    }else{
        alert(data.msg);
    }
   }
});
    return false;
});

})

