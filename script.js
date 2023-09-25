function run(){
    let htmlcode=document.getElementById("htmlcode").value;
    let csscode=document.getElementById("csscode").value;
    let jscode=document.getElementById("jscode").value;
    let  output=document.getElementById("output");

       output.contextDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>"
       output.contentWindow.eval(jscode);
}