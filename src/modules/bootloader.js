// bootloader for JS files
var bootloader = function() {
    var modules = document.querySelectorAll('[data-state=pending]');
    modules.forEach(function(i, e){
        //console.log(i.getAttribute('data-module'));
        var module = i.getAttribute('data-module');

        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = './js/'+module+'.js';
        po.id = 'module-'+module;
        if (!document.getElementById('module-'+module)) {
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        }
        i.setAttribute("data-state", "loaded");
    });
}

//execute the bootloader
bootloader();



// select the target node
var target = document.querySelector('body');
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.type);
        if(mutation.type == "childList"){
            //add the JS and set the state to loaded
            bootloader();
        }
    });
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true }
 
// pass in the target node, as well as the observer options
observer.observe(target, config);