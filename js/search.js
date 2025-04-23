function getlist(wd){
    var script=document.createElement('script');
    script.id='jsonp';
    script.src='https://www.baidu.com/sugrec?prod=pc&cb=getData&wd='+wd;
    document.body.appendChild(script);
  }
  
function getData(data){
      var script=document.querySelector('#jsonp');
      script.parentNode.removeChild(script);
      $('ol').html('');
      var da=data.g
   if(da){
    da.forEach(function(item,index){

       $('<li><a target="_blank" href ="https://www.baidu.com/s?wd='+item.q+'">'+item.q+'</a></li>').appendTo('ol');
       
      })
     }
  }

$('input:text').keyup(function(){
       var wd=$(this).val();
       if(wd==''){
           $('ol').css('display','none');
           $('ol').css('zIndex',-10);
        }else{
           $('ol').css('display','block');
        $('ol').css('zIndex',20);
        }
          getlist(wd);
    });
