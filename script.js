// Add your javascript here
$(function(){
  $(".title").animate({
"margin-left": "20px",
   
  }, "slow");


});
$.getJSON('./data/projectData.json',function(data){
    $.each(data,function(key,pval){
        //alert(pval.name);
        $('.main').append("<div class='box-wrapper' ontouchstart='this.classList.toggle('hover');'><div class='flipper'>"
          +"<div class='box' style=\'background-image:url("+pval.bg+") \'>"
         +"<div class='box-footer'>"+pval.name+"</div>"
         +"<div class='status'>"+pval.status+"</div>"
          +"</div>"
         +"<div class='synopsis'><span class='shortdesc'>"+pval.synopsis+"</span><br/><span  class='view pull-right'><a href='"+pval.url+"' target='_blank'>View Details</a></span><span class='clear'></span></div>"
        +"</div></div>"
        )
       
    });
});
$(document).ready(function(){

for(var i=0;i<=$('.status').length;i++){
if($('.status').eq(i).text()=='Live'){
  $('.status').eq(i).css({'background-color':'#fff','border-bottom':'2px solid deepskyblue'});
}
if($('.status').eq(i).text()=='Dev'){
  $('.status').eq(i).css({'border-bottom':'2px solid deepskyblue'});
}
if($('.status').eq(i).text()=='Test'){
  $('.status').eq(i).css({'border-bottom':'2px solid deepskyblue'});
}
if($('.status').eq(i).text()=='Prod'){
  $('.status').eq(i).css({'border-bottom':'2px solid deepskyblue'});
}
}
$('.hamb').click(function(){
  $('.respNav').toggle();
});
$('nav a').click(function(){
  $('.page').removeClass('activePage');
  $('nav a').removeClass('active');
  var pageId= $(this).attr("rel");
  $("#"+pageId).addClass('activePage');
  $(this).addClass('active');
});

});


 var fileNames = new Array();
    $.ajax({
      url: "./images/",
      success: function(data){
       
         $(data).find("td > a").each(function(){
            if(openFile($(this).attr("href"))){
                fileNames.push($(this).attr("href"));
                
            }  
                
         });
         var files = fileNames.length;
         for (var i=0;i<files;i++){
           $('.carousel-inner').append(
            "<div class='item'>" +
            "<img src='"+ fileNames[i] +"'/>"+
            "</div>"
           )
           $('.carousel-indicators').append(
             "<li data-target='#myCarousel' data-slide-to='"+i+"'>"+
             "</li>"
           )
         }
         $('.carousel-inner .item').eq(0).addClass('active');
         $('.carousel-indicators li').eq(0).addClass('active') 
      }
    }); 
    console.log(fileNames);
    function openFile(file) {
        var extension = file.substr( (file.lastIndexOf('.') +1) );
        switch(extension) {
            case 'jpg':
            case 'png':
            case 'gif':   // the alert ended with pdf instead of gif.
            case 'zip':
            case 'rar':
            case 'pdf':
            case 'php':
            case 'doc':
            case 'docx':
            case 'xls':
            case 'xlsx':
                return true;
                     default:
                return false;
        }
    }

