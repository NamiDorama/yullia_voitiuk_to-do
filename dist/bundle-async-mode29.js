(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(858);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},857:function(e,t,n){},858:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.TaskList=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(857);var i=n(35);function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.TaskList=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.originTasks=[],o.icons=["delete","in-progress","completed"],o.state={todos:[]},o.filterTasks=function(e){var t=e.target;if(t.value.length>=2){var n=o.originTasks.filter(function(e){return e.title.includes(t.value)});o.setState({todos:n})}else""===t.value.trim()&&o.setState({todos:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o.originTasks))})},o.changeTaskStatus=function(e,t){var n=e.target;console.log(n.className),console.log(t)},a(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),r(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}).then(function(t){e.originTasks=t.slice(0,10),e.setState({todos:e.originTasks})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.todos,r=(t.redirect,this.icons);return o.createElement("div",{className:"task-list"},o.createElement("h2",null,"This is Task list"),o.createElement("input",{type:"text",placeholder:"Enter to filter",onChange:this.filterTasks}),n&&o.createElement("ol",null,n.map(function(t){return o.createElement("li",{key:t.id,className:t.completed?"completed":"not-completed"},o.createElement(i.Link,{to:"/tasks/"+t.id},t.title),r.map(function(n){return o.createElement("span",{key:n,className:n,title:n,onClick:function(n){return e.changeTaskStatus(n,t.id)}})}))})),o.createElement("button",null,"Add new task"))}}]),n}()}).call(this,n(2).Component,n(2))}}]);