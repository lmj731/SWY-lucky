function randomnum (number) {
    if(number == "0"){
        var pers = nr();
        document.getElementById("random").innerHTML += `<div id="allres" style="background:url(./imags/p/${pers[1]}.png) no-repeat;"><img src="./imags/sh/${pers[1]}/${pers[0]}.png"></div>`;

        var hun = document.getElementById("hun").innerText;
        hun = parseInt(hun)+1
        document.getElementById("hun").innerText = hun;
    }else if(number == "1"){
        var per = new Array;
        for(var i = 0; i < 10; i+=1) {
            per[i] = nr();
            document.getElementById("random").innerHTML += `<div id="allres" style="background:url(./imags/p/${per[i][1]}.png) no-repeat;"><img src="./imags/sh/${per[i][1]}/${per[i][0]}.png"></div>`;
        }
        var hun = document.getElementById("hun").innerText;
        hun = parseInt(hun)+10
        document.getElementById("hun").innerText = hun;
    }
}

function nr () {
    var num = Math.floor(Math.random() * 100);//随机 0-99，41、45、12、2
    var p = "";
    var per ="";
    var n = ["粽子","汤圆","猫耳朵", "驴打滚","青团","双皮奶","春卷","饺子"];
    var r = ["腊八粥","羊肉泡馍","担仔面", "煲仔饭","片儿川","蚵仔煎","鱼香肉丝","太极芋泥","冰糖葫芦","蟹黄汤包"];
    var sr = ["龙须酥","葱烧海参","蜜汁叉烧", "灯影牛肉","剁椒鱼头","四喜丸子","锅包肉","东坡肉","符离集烧鸡","西湖醋鱼","虾饺","小鸡炖蘑菇","扬州炒饭","叫花鸡","带把肘子","麻婆豆腐","宫保鸡丁","松鼠鳜鱼","臭鳜鱼"];
    var ssr = ["莲花血鸭","川味火锅","开水白菜", "吉利虾","鼎湖上素","佛跳墙","诗礼银杏","八仙过海闹罗汉","烤乳猪","鸡茸金丝笋","一品锅","北京烤鸭","腊味合蒸","德州扒鸡"];
    
    if (num <41 ){ 
        p = "n";
        var lev0 = document.getElementById("lev0").innerText;
        lev0 = parseInt(lev0)+1
        document.getElementById("lev0").innerText = lev0;
        per = n[Math.floor((Math.random()*n.length))];
    }else if(num>40 && num <86){
        p = "r";
        var lev1 = document.getElementById("lev1").innerText;
        lev1 = parseInt(lev1)+1
        document.getElementById("lev1").innerText = lev1;
        per = r[Math.floor((Math.random()*r.length))];
    }else if(num>85 && num <98){
        p="sr";
        var lev2 = document.getElementById("lev2").innerText;
        lev2 = parseInt(lev2)+1
        document.getElementById("lev2").innerText = lev2;
        per = sr[Math.floor((Math.random()*sr.length))];
    }else{
        p="ssr";
        var lev3 = document.getElementById("lev3").innerText;
        lev3 = parseInt(lev3)+1
        document.getElementById("lev3").innerText = lev3;
        per = ssr[Math.floor((Math.random()*ssr.length))];
    }
    var pers = [per,p]
    return pers;
}
