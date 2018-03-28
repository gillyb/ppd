# Poorman's Paywall Destroyer  

I always use an ad-blocker, but some sites know how to get around that, and still show you a 'paywall'.  
This is a simple snippet you can use as a bookmarklet, that will destroy those paywalls, or sites that stop you from using an ad-blocker.  
  
  
To use this just create a bookmark, and in the url insert this :  
```
javascript:(function(){for(var t=document.querySelectorAll("div, span"),e=0,o=t.length;e<o;e++){var i=window.getComputedStyle(t[e]);"fixed"===i.position&&parseInt(i.width)>200&&parseInt(i.height)>200&&t[e].setAttribute("style","display: none!important")}var n=document.getElementsByTagName("body")[0];n.setAttribute("style",n.getAttribute("style")+"; overflow: auto!important")})();
```
  
  
For the unminified version, look at the file `ppd.js` in this repo.  

## FAQ

**Which sites does this work on ?**  
I purposely don't want to maintain a list here, not to raise any awareness :)  

**How does this work ?**  
It looks for `div` or `span` elements that have `position: fixed` and take up more than 200x200 pixels (so it won't remove fixed headers or footers) and hides them.  
After that, it adds `overflow: auto` to the `body` element, so scrolling will be enabled.  
  
**It doesn't work on _____ site ?**  
Great! Open an issue, and I'll try to fix it.    

**I have a great idea on how to improve this!**  
Great! Submit a pull request, and i'll be happy to merge it
