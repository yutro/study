import CacheBox from '../dev/cacheBox';


var cb = new CacheBox();


cb.load('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', true, {expireIn: 3600}).then((data) => {
    let style = document.createElement('style');
    let code = document.createTextNode(data);
    style.appendChild(code);
    document.body.appendChild(style);
});


cb.load('https://code.jquery.com/jquery-3.2.1.min.js?', true, {expireIn: 3600}).then((data) => {

    cb.exec(data).then(()=>{

        $('#app').html('<button class="btn btn-default">click me</button>');

    });

});