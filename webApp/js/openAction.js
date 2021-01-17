window.onload = function(){
    var arrowE1 = document.querySelector("#head .headMain > .arrow");
    var liNodes = document.querySelectorAll("#head .headMain > .nav > .list >li");
    var firstLiNode  = liNodes[0];
    var firstUpNode = firstLiNode.querySelector(".up");
    var upNodes = document.querySelectorAll("#head .headMain > .nav > .list >li .up");
    firstUpNode.style.width = "100%";
    arrowE1.style.left = firstLiNode.offsetParent.offsetLeft+firstLiNode.offsetLeft + firstLiNode.offsetWidth/2 - arrowE1.offsetWidth/2+"px";
    for (var i = 0; i<liNodes.length;i++){
        liNodes[i].INDEX = i;
        console.log(upNodes);
        liNodes[i].onclick = function(){
            for(var i=0;i<upNodes.length;i++){
                upNodes[i].style.width = "";
            }
            upNodes[this.INDEX].style.width = "100%";
            arrowE1.style.left = liNodes[0].offsetParent.offsetLeft+liNodes[this.INDEX].offsetLeft + liNodes[this.INDEX].offsetWidth/2 - arrowE1.offsetWidth/2+"px";
        }
    }
}