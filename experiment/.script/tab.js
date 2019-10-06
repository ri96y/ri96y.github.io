var tabBTN=document.querySelectorAll(".tabContainer .btnContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode){
    tabBTN.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabBTN[panelIndex].style.backgroundColor=colorCode;
    tabBTN[panelIndex].style.color="black";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#ffe0fc');
