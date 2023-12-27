a = [    
    "./img/flor1.jpg",
    "./img/flor3.jpg",
    "./img/flor2.jpg",
    "./img/flor4.jpg",
    "./img/flor5.jpg",
    "./img/flor6.jpg"
];

var x = 0;
        for (var i = 0; x < a.length; i++) {
        	var append = "<div class='row'>";
        	for (var j = 0; j < 6 && x < a.length; j++) {
        		append += 
        `<div class="contain col-sm-6 col-md-2">
        	<img class="img-responsive" src=` + a[x++] + `>
        </div>`;
        }
        	append += '</div>';
        	appender(append);
        }

// Aqui explicamos que hace esa funcion appender. Los id llevan # y las clses llevan .
function appender(x) {
    $('#gallery').html(function(i, original_html) {
        return (original_html + x);
    });
}

// For Image Modal- Atiende a un evento, asi que declaramos document
$(document).on('click', 'img', function() {
    imgAddr = $(this).attr('src');
    data = "<center><img src=" + imgAddr + " width='50%'>";
    $('#myModal').find('.modal-body').html(data);
    $('#myModal').modal();
});