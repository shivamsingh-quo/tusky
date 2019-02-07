!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(1),o=n(2),r=n(3);customElements.define("nav-bar",o.NavBar),customElements.define("task-item",r.TaskItem),customElements.define("task-card",i.TaskCard),document.getElementById("addTask").addEventListener("click",t=>{t.preventDefault();const e=document.createElement("task-card");document.getElementById("task-cards").appendChild(e)})},function(t,e,n){"use strict";var i=this&&this.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});const o=document.createElement("template");o.innerHTML='\n<style>\n.card {\n    display: inline-block;\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);\n    margin: 20px;\n    position: relative;\n    margin-bottom: 50px;\n    transition: all .2s ease-in-out;\n  }\n  .card-footer{\n      text-align:center;\n      margin:5px;\n  }\n  .card:hover {\n    /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n    margin-bottom: 54px;\n  }\n  .centered {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right:0;\n    bottom:0;\n    text-align:center;\n    height:200px;\n    flex-direction: column;\n    display: flex;\n    justify-content: center;\n  }\n\n  .image {\n    max-height: 200px;\n    max-width:300px;\n    opacity: .7;\n    overflow: hidden;\n    transition: all .2s ease-in-out;\n    color:white;\n    display:flex;\n  }\n  .image:hover,\n  .card:hover .image {\n    height: 200px;\n    opacity: 1;\n  }\n.text {\n  background: #FFF;\n  padding: 20px;\n  min-height: 200px;\n}\n\n.text p {\n  margin-bottom: 0px;\n}\n\n.button {\n    background-color: white;\n    color: black;\n    border: 2px solid #555555;\n    padding: 16px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    -webkit-transition-duration: 0.4s;\n    /* Safari */\n    transition-duration: 0.4s;\n    cursor: pointer;\n  }\n\n  .button:hover {\n    background-color: #555555;\n    color: white;\n  }\n\n.fab {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  margin-top: -50px;\n  right: 20px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, .3);\n  color: #fff;\n  font-size: 48px;\n  text-align: center;\n  background: #0066A2;\n  -webkit-transition: -webkit-transform .2s ease-in-out;\n  transition: transform .2s ease-in-out;\n}\n\n.fab:hover {\n  background: #549D3C;\n  cursor: pointer;\n  -ms-transform: rotate(90deg);\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n</style>\n\n<div class="card">\n\n<header>\n<div class="image">\n  <img src="https://cdn.dribbble.com/users/1046434/screenshots/2817598/attachments/577913/opensource-background1-big.jpg">\n  <div class="centered">\n  <h1 id="card-title"></h1>\n    <p id="card-count"></p>\n  </div>\n  </div>\n</header>\n\n<main>\n<div class="list">\n</div>\n</main>\n\n<div class="card-footer">\n<button id="addTask" class="button">Add Task</button>\n</div>\n</div>\n';e.TaskCard=class extends HTMLElement{constructor(){super(),this.taskList=[],this.count=1,console.log("task initializing"),this.root=this.attachShadow({mode:"open"}),this.root.appendChild(o.content.cloneNode(!0)),console.log(this.root),this.root.querySelector("#addTask").addEventListener("click",t=>this.createTask())}get title(){return this.getAttribute("title")}set title(t){this.setAttribute("title",t)}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,n){console.log(t,"changed"),this.render()}connectedCallback(){console.log("Custom task card element added to page."),this.addEventListener("drop",t=>this.handleDrop(t)),this.addEventListener("dragover",t=>this.allowDrop(t))}createTask(t){const e=document.createElement("task-item");t?(console.log(t),e.setAttribute("message",t.message),e.setAttribute("id",JSON.stringify(t.id)),e.setAttribute("priority",t.priority),e.setAttribute("draggable","true"),this.taskList.push({id:t.id,message:t.message,priority:t.priority,owner:{name:"Depp",id:1},assignedTo:{name:"Depp",id:1},comments:[],attachments:[]})):(console.log("editable"),e.setAttribute("editable","true")),this.root.querySelector(".list").appendChild(e),this.render()}handleDrop(t){t.preventDefault();const e=JSON.parse(t.dataTransfer.getData("text")),{sourceId:n}=e,o=i(e,["sourceId"]);console.log("id received in drop",n),console.log("task received in drop",o),this.taskList.push(o),this.createTask(o)}allowDrop(t){console.log("Dropping hover"),t.preventDefault()}render(){console.log("task list renderer called",this.root.querySelectorAll("task-card").length),this.root.querySelector("#card-title").textContent=this.title,this.root.querySelector("#card-count").textContent=`Task Count: ${this.root.querySelectorAll("task-item").length}`}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=document.createElement("template");i.innerHTML='\n  <style>\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    width: 100%;\n    overflow: auto;\n}\n  header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: transparent;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    z-index: 1;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);\n    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);\n}\n\nheader > .container {\n    margin: 0 auto;\n}\n  nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    overflow: auto;\n    padding:5px;\n    width:100%;\n}\nnav a,\nnav a:link {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    color: dimgray;\n    text-decoration: none;\n    padding: .8em;\n    margin: 0;\n    transition: background-color .2s ease-out;\n}\nnav a.active {\n    background-color: rgba(255, 180, 0, 0.6);\n    color: black;\n    border-radius: 3px;\n}\nnav a .ver {\n    font-size: .8em;\n    margin: 0 0 0 1em;\n}\nnav>*:last-child{\n    align-self:center\n}\n  </style>\n\n  <header>\n  <div class="container">\n      <nav>\n          <a  href="/?page=1" class="active">Home</a>\n            <a class="github" href="https://github.com/shivamsngh" target="_blank" rel="noopener">\n                <img width="32px" height="32px" src=\'data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41"><path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.12.83-.26.83-.57 0-.28 0-1.03-.02-2.03-3.33.72-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.1-.73.1-.73 1.2.1 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.3 3.5 1 .1-.77.4-1.3.75-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.63 1.66.23 2.88.1 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.35.8 1.1.8 2.2v3.3c0 .3.2.7.82.57C20.56 22.1 24 17.6 24 12.3c0-6.63-5.37-12-12-12"/></svg>\' alt="Github" />\n             </a>\n      </nav>\n  </div>\n</header>\n';e.NavBar=class extends HTMLElement{constructor(){super(),console.log("nav initializing"),this.root=this.attachShadow({mode:"open"}),this.root.appendChild(i.content.cloneNode(!0))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=document.createElement("template");i.innerHTML='\n<style>\n:host{\n  display:block;\n  border:1px solid black;\n  margin:5px;\n}\n.button {\n  background-color: white;\n  color: black;\n  border: 0px none #555555;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  /* margin: 4px 2px; */\n  -webkit-transition-duration: 0.4s;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  margin: 0px;\n  padding: 0px;\n}\n.button:hover {\n  //background-color: #555555;\n  color: red;\n}\n.chip {\n  display: inline-block;\n  background: #e0e0e0;\n  padding: 10px;\n  border-radius: 2px;\n  font-size: 13px;\n  }\n  .chip:hover {\n    background: #ccc;\n  }\n  .grid-container {\n    display: grid;\n    grid-row-gap: 10px;\n    grid-column-gap: 10px;\n    grid-template-columns: auto auto auto;\n  }\n\n  .header-grid {\n    display: grid;\n    grid-row-gap: 10px;\n    grid-column-gap: 10px;\n    grid-template-columns: auto auto;\n  }\n  header{\n    text-align:center;\n  }\n  header h3{\n    margin:0px;\n  }\n  .card{\n    padding:10px;\n  }\n</style>\n<div class="card">\n  <header class="header-grid">\n    <h3 class="chip grid-item">Priority</h3><a href="" style="margin-left:auto;" id="switchView">Fold</a>\n  </header>\n  <main>\n    <p>message</p>\n  </main>\n    <footer class="grid-container">\n    <div>\n    <button class="button grid-item" id="comments">&#x1f4ac;</button>\n    <span></span>\n    </div>\n    <div>\n    <button class="button grid-item" id="attachments">&#128206;</button>\n    <span></span>\n    </div>\n    <button id="deleteTask" class="button grid-item">&#x2715;</button>\n    </div>\n  </footer>\n</div>';const o=document.createElement("template");o.innerHTML='\n<style>\n:host{\n  display:block;\n  border:1px solid black;\n  margin:5px;\n}\n.button {\n  background-color: white;\n  color: black;\n  border: 2px solid lightgray;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  /* margin: 4px 2px; */\n  -webkit-transition-duration: 0.4s;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  margin: 0px;\n  padding: 5px;\n}\n.button:hover {\n  //background-color: #555555;\n  color: red;\n}\ntextarea, select {\n  border: 5px solid white;\n  -webkit-box-shadow:\n    inset 0 0 8px  rgba(0,0,0,0.1),\n          0 0 16px rgba(0,0,0,0.1);\n  -moz-box-shadow:\n    inset 0 0 8px  rgba(0,0,0,0.1),\n          0 0 16px rgba(0,0,0,0.1);\n  box-shadow:\n    inset 0 0 8px  rgba(0,0,0,0.1),\n          0 0 16px rgba(0,0,0,0.1);\n  padding: 15px;\n  background: rgba(255,255,255,0.5);\n  margin: 0 0 10px 0;\n}\n\ntextarea{\n  width:-webkit-fill-available;\n}\nselect{\n  padding:10px;\n}\n  .grid-container {\n    display: grid;\n    grid-row-gap: 10px;\n    grid-column-gap: 10px;\n    grid-template-columns: auto auto;\n  }\n\n  .full-width{\n    display:flex;\n    flex-direction:column;\n  }\n  .card{\n    padding:10px;\n  }\n</style>\n<div class="card">\n  <header class="grid-container">\n      <select id="ptyInput">\n        <option>High Priority</option>\n        <option>Medium Priority</option>\n        <option selected>Low Priority</option>\n      </select>\n      <a href="" style="margin-left:auto;" id="switchView">Fold</a>\n  </header>\n  <main>\n    <textarea id="msgInput" placeholder="Enter Task Details"></textarea>\n  </main>\n    <footer class="grid-container">\n    <div class="full-width">\n        <button id="submitTask" class="button grid-item">Add</button>\n    </div>\n    <div class="full-width">\n      <button id="cancel" class="button grid-item">Del</button>\n    </div>\n  </footer>\n</div>\n';e.TaskItem=class extends HTMLElement{static get observedAttributes(){return["priority","message","editable"]}get draggable(){return this.hasAttribute("draggable")}set draggable(t){t?this.setAttribute("draggable","true"):this.removeAttribute("draggable")}get editable(){return this.hasAttribute("editable")}set editable(t){t?this.setAttribute("editable"," "):this.removeAttribute("editable")}get priority(){return this.getAttribute("priority")}set priority(t){t?this.setAttribute("priority",t):this.removeAttribute("priority")}get message(){return this.getAttribute("message")}set message(t){t?this.setAttribute("message",t):this.removeAttribute("message")}constructor(){super(),console.log("constructor run"),this.task={id:new Date(2010,6,26).getTime()/1e3,priority:"",assignedTo:{name:"Depp",id:1},owner:{name:"Depp",id:1},message:"",comments:["abc","def","ghq"],attachments:["abc","def"]},this.root=this.attachShadow({mode:"open"}),this.root.appendChild(i.content.cloneNode(!0))}connectedCallback(){console.log("connected"),this.root.querySelector("#deleteTask")&&this.root.querySelector("#deleteTask").addEventListener("click",t=>this.deleteTask(t)),this.addEventListener("dragstart",t=>this.dragstartHandler(t)),this.addEventListener("dragend",t=>this.dragendHandler(t))}attributeChangedCallback(t,e,n){switch(t){case"message":this.task.message=n,this.render();break;case"priority":this.task.priority=n,this.render();break;case"editable":n&&this.switchItemView("edit")}}switchItemView(t){switch(t){case"edit":this.removeAllViewsFromRoot(),this.root.appendChild(o.content.cloneNode(!0)),this.root.querySelector("#msgInput").value=this.message,this.root.querySelector("#ptyInput").value=this.priority,this.removeAttribute("draggable"),this.draggable=!1,this.root.querySelector("#submitTask").addEventListener("click",t=>this.addTask()),this.root.querySelector("#switchView").addEventListener("click",t=>{t.preventDefault(),this.switchItemView("show")}),this.root.querySelector("#cancel").addEventListener("click",t=>this.remove());break;case"show":this.removeAllViewsFromRoot(),console.log("root",this.root.lastElementChild),this.root.appendChild(i.content.cloneNode(!0)),this.draggable=!0,this.root.querySelector("#switchView").addEventListener("click",t=>{t.preventDefault(),this.switchItemView("edit")})}}removeAllViewsFromRoot(){Array.from(this.root.children).forEach(t=>{this.root.removeChild(t)})}dragstartHandler(t){console.log("dragStart; task val",this.task);const e=this.offsetParent.parentNode.host.id;t.dataTransfer.setData("text/plain",JSON.stringify(Object.assign({sourceId:e},this.task)))}dragendHandler(t){console.log("dragend event",t),"none"!==t.dataTransfer.dropEffect&&this.remove()}render(){this.root.querySelector("#comments").nextSibling.textContent=this.task.comments.length.toString(),this.root.querySelector("#attachments").nextSibling.textContent=this.task.attachments.length.toString(),console.log("message",this.message),this.root.querySelector("p").textContent=this.message,this.root.querySelector("header h3").textContent=this.priority}deleteTask(t){this.remove()}addTask(){console.log(this.root.getElementById("#msgInput"));const t=this.root.querySelector("#msgInput").value,e=this.root.querySelector("#ptyInput").value;this.switchItemView("show"),console.log("msg pty",t,e),this.message=t,this.priority=e}}}]);