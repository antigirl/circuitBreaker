# circuitBreaker
server side utility that adds as a service breaker for external tags

- run npm start and open index.html
- the script is set to respond after 5 seconds, its a blocking script in the HEAD, 
- change the timeout parameter in the request for quicker response times
- you can execute the code in a VM, probably need separate app instance/thread for each script - [link](http://stackoverflow.com/questions/11652530/node-js-vm-how-to-cancel-script-runinnewcontext)
