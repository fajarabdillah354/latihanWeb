// prompt("masukan sesuatu");
// event saat link di klik
$('.page-scroll') .on('click', function(b) {
    
          

            
            // ambil isi href
            var tujuan = $(this).attr('href');
            // elemen ybs
            var elementujuan = $(tujuan);
       
            $('body') .animate ({
                  scrollTo: elementujuan.offset().top 
                  
            });
           
            b.preventdefault(b);
});
// paralex
$(window).scroll(function() {
      var wscroll = $(this).scrollTop();
       
      // jumbotron
      $('.jumbotron img').css({
           'transform' : 'translate(0px, '+wscroll/2  +'%)'        
 
      });
      $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+wscroll/3 +'%)'        
  
       });
       $('.jumbotron p').css({
            'transform' : 'translate(0px, '+wscroll/1.6 +'%)'        
  
       });

      // dadakan scrool
      
      
       
});
