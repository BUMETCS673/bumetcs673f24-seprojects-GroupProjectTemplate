(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11b36058"],{"3e51":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",[t("app-head"),t("app-body",[t("div",{staticStyle:{"min-height":"85vh"}},[t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.labelName,callback:function(t){e.labelName=t},expression:"labelName"}},[t("el-tab-pane",{attrs:{label:"All",name:"0"}}),t("el-tab-pane",{attrs:{label:"Electronics",name:"1"}}),t("el-tab-pane",{attrs:{label:"Life Goods",name:"2"}}),t("el-tab-pane",{attrs:{label:"Sports",name:"3"}}),t("el-tab-pane",{attrs:{label:"Books and notes",name:"4"}}),t("el-tab-pane",{attrs:{label:"Billboard",name:"5"}})],1),t("div",{staticStyle:{margin:"0 20px"}},[t("el-row",{attrs:{gutter:30}},e._l(e.idleList,(function(a,i){return t("el-col",{attrs:{span:6}},[t("div",{staticClass:"idle-card",on:{click:function(t){return e.toDetails(a)}}},[t("el-image",{staticStyle:{width:"100%",height:"160px"},attrs:{src:a.imgUrl,fit:"contain"}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"},[e._v("No image")])])]),t("div",{staticClass:"idle-title"},[e._v("\n                                "+e._s(a.idleName)+"\n                            ")]),t("el-row",{staticStyle:{margin:"5px 10px"}},[t("el-col",{attrs:{span:12}},[t("div",{directives:[{name:"show",rawName:"v-show",value:0!==a.idlePrice,expression:"idle.idlePrice !== 0"}],staticClass:"idle-price"},[e._v("$"+e._s(a.idlePrice))]),t("div",{directives:[{name:"show",rawName:"v-show",value:0===a.idlePrice,expression:"idle.idlePrice === 0"}]},[e._v("  ")])]),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"idle-place"},[e._v(e._s(a.idlePlace))])])],1),t("div",{staticClass:"idle-time"},[e._v(e._s(a.timeStr))]),t("div",{staticClass:"user-info"},[t("el-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:a.user.avatar,fit:"contain"}},[t("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[t("i",{staticClass:"el-icon-picture-outline"},[e._v("No image")])])]),t("div",{staticClass:"user-nickname"},[e._v(e._s(a.user.nickname))])],1)],1)])})),1)],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-size":8,layout:"prev, pager, next",total:e.totalItem},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1),t("app-foot")],1)],1)},n=[],s=(a("a481"),a("6e70")),r=a("4fc4"),l=a("85a9"),o={name:"index",components:{AppHead:s["a"],AppBody:r["a"],AppFoot:l["a"]},data:function(){return{labelName:"0",idleList:[],currentPage:1,totalItem:1}},created:function(){this.findIdleTime(1)},watch:{$route:function(e,t){this.labelName=e.query.labelName;var a=parseInt(e.query.page)?parseInt(e.query.page):1;this.currentPage=parseInt(e.query.page)?parseInt(e.query.page):1,this.findIdleTime(a)}},methods:{findIdleTime:function(e){var t=this,a=this.$loading({lock:!0,text:"Loading data...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});this.labelName>0?this.$api.findIdleTimeByLabel({idleLabel:this.labelName,page:e,nums:8}).then((function(e){console.log(e);for(var a=e.data.list,i=0;i<a.length;i++){a[i].timeStr=a[i].releaseTime.substring(0,10)+" "+a[i].releaseTime.substring(11,19);var n=JSON.parse(a[i].pictureList);a[i].imgUrl=n.length>0?n[0]:""}t.idleList=a,t.totalItem=e.data.count,console.log(t.totalItem)})).catch((function(e){console.log(e)})).finally((function(){a.close()})):this.$api.findIdleTime({page:e,nums:8}).then((function(e){console.log(e);for(var a=e.data.list,i=0;i<a.length;i++){a[i].timeStr=a[i].releaseTime.substring(0,10)+" "+a[i].releaseTime.substring(11,19);var n=JSON.parse(a[i].pictureList);a[i].imgUrl=n.length>0?n[0]:""}t.idleList=a,t.totalItem=e.data.count,console.log(t.totalItem)})).catch((function(e){console.log(e)})).finally((function(){a.close()}))},handleClick:function(e,t){console.log(this.labelName),this.$router.replace({query:{page:1,labelName:this.labelName}})},handleCurrentChange:function(e){console.log("current page: ".concat(e)),this.$router.replace({query:{page:e,labelName:this.labelName}})},toDetails:function(e){this.$router.push({path:"/details",query:{id:e.id}})}}},c=o,u=(a("b7f6"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"17e2cdbe",null);t["default"]=d.exports},"3feb":function(e,t,a){"use strict";a("9b16")},"4fc4":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[t("div",{staticClass:"main-content"},[e._t("default")],2)])},n=[],s={name:"PageBody"},r=s,l=(a("c95a"),a("2877")),o=Object(l["a"])(r,i,n,!1,null,"7617c039",null);t["a"]=o.exports},"6e70":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"header-container"},[t("div",{staticClass:"app-name"},[t("router-link",{attrs:{to:"/"}},[e._v("Campus Exchange")])],1),t("div",{staticClass:"search-container"},[t("el-input",{attrs:{placeholder:"Search item..."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchIdle.apply(null,arguments)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchIdle},slot:"append"})],1)],1),t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.toRelease}},[e._v("Create new listing")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-chat-dot-round"},on:{click:e.toMessage}},[e._v("Message")]),e.isLogin?t("el-dropdown",{attrs:{trigger:"click"}},[t("div",{staticStyle:{cursor:"pointer",display:"flex","align-items":"center"}},[t("div",{staticStyle:{"font-size":"16px",color:"#409EFF","padding-right":"5px"}},[e._v(e._s(e.nicknameValue?e.nicknameValue:e.nickname))]),t("el-avatar",{attrs:{src:e.avatarValue?e.avatarValue:e.avatar}})],1),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[t("div",{on:{click:e.toMe}},[e._v("Profile")])]),t("el-dropdown-item",{staticStyle:{color:"red"},attrs:{divided:""}},[t("div",{on:{click:e.loginOut}},[e._v("Logout")])])],1)],1):t("router-link",{staticClass:"user-name-text",attrs:{to:"/login"}},[e._v("Login")])],1)])},n=[],s=(a("a481"),{name:"Header",props:["searchInput","nicknameValue","avatarValue"],data:function(){return{searchValue:this.searchInput,nickname:"Login",avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",isLogin:!1}},created:function(){var e=this;this.$globalData.userInfo.nickname?(this.nickname=this.$globalData.userInfo.nickname,this.avatar=this.$globalData.userInfo.avatar,this.isLogin=!0):this.$api.getUserInfo().then((function(t){console.log("Header getUserInfo:",t),1===t.status_code&&(e.nickname=t.data.nickname,e.avatar=t.data.avatar,t.data.signInTime=t.data.signInTime.substring(0,10),e.$globalData.userInfo=t.data,e.isLogin=!0)}))},methods:{searchIdle:function(){"/search"!==this.$route.path?this.$router.push({path:"/search",query:{searchValue:this.searchValue}}):(this.$router.replace({path:"/search",query:{searchValue:this.searchValue}}),this.$router.go(0))},toMe:function(){"/me"!==this.$route.path&&this.$router.push({path:"/me"})},toMessage:function(){"/message"!==this.$route.path&&this.$router.push({path:"/message"})},toRelease:function(){"/release"!==this.$route.path&&this.$router.push({path:"/release"})},loginOut:function(){var e=this;this.$api.logout().then((function(t){1===t.status_code?(e.$globalData.userInfo={},console.log("login out"),"/index"===e.$route.path?e.$router.go(0):e.$router.push({path:"/index"})):e.$message.error("Network or system error, fail to logout.")}))}}}),r=s,l=(a("3feb"),a("2877")),o=Object(l["a"])(r,i,n,!1,null,"3e476e82",null);t["a"]=o.exports},"71c17":function(e,t,a){},"85a9":function(e,t,a){"use strict";var i=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"foot-container"},[t("div",{staticClass:"author"},[e._v("Campus Exchange")])])}],s={name:"Foot"},r=s,l=(a("e97d"),a("2877")),o=Object(l["a"])(r,i,n,!1,null,"c9fd9caa",null);t["a"]=o.exports},"906c":function(e,t,a){},"9b16":function(e,t,a){},b7f6:function(e,t,a){"use strict";a("906c")},c95a:function(e,t,a){"use strict";a("ff1e")},e97d:function(e,t,a){"use strict";a("71c17")},ff1e:function(e,t,a){}}]);