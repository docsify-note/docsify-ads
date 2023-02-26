export function install (hook, vm) {
    hook.doneEach(function () {
        if(!window.$docsify.ads){
            console.warn("[docsify-ads] ads not config")
            return ;
        }
        var ads = window.$docsify.ads;
        var theOne = ads[0];
        if(ads.length > 1){
            var randIndex =  Math.floor(Math.random() * ads.length);
            console.log("[docsify-ads] ads random index="+randIndex)
            theOne = ads[randIndex]
        }
        const sidebarEl = document.querySelector(".sidebar-nav");
        var divEl = document.createElement("div");
        divEl.innerHTML = `<a target='_blank' href='${theOne.href}'><img src='${theOne.img}'/></a>`;
        sidebarEl.insertBefore(divEl,sidebarEl.firstChild);
        console.info("docsify-ads render success!")
    })
}

// function injectStyle() {
//     const styleEl = document.createElement("style");
//     styleEl.textContent = `
      
//     `;
//     document.head.insertBefore(styleEl, document.querySelector("head style, head link[rel*='stylesheet']"));
// }