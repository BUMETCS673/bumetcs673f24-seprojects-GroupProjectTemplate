(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69e81941"],{"02e0":function(e,t,i){},2630:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("app-head"),t("app-body",[t("div",{staticClass:"release-idle-container"},[t("div",{staticClass:"release-idle-container-title"},[e._v("Post Idle/Announcement")]),t("div",{staticClass:"release-idle-container-form"},[t("el-input",{attrs:{placeholder:"Please enter idle/announcement title",maxlength:"30","show-word-limit":""},model:{value:e.idleItemInfo.idleName,callback:function(t){e.$set(e.idleItemInfo,"idleName",t)},expression:"idleItemInfo.idleName"}}),t("el-input",{staticClass:"release-idle-details-text",attrs:{type:"textarea",autosize:"",placeholder:"Please enter a detailed description of the idle/announcement...",maxlength:"1000","show-word-limit":""},model:{value:e.idleItemInfo.idleDetails,callback:function(t){e.$set(e.idleItemInfo,"idleDetails",t)},expression:"idleItemInfo.idleDetails"}}),t("div",{staticClass:"release-idle-place"},[t("div",{staticClass:"release-tip"},[e._v("Your Location")]),t("el-cascader",{staticStyle:{width:"90%"},attrs:{options:e.options,separator:" "},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("div",[t("div",{staticClass:"release-tip"},[e._v("Idle Category")]),t("el-select",{attrs:{placeholder:"Please Select Item Category"},model:{value:e.idleItemInfo.idleLabel,callback:function(t){e.$set(e.idleItemInfo,"idleLabel",t)},expression:"idleItemInfo.idleLabel"}},e._l(e.options2,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:5!==e.idleItemInfo.idleLabel,expression:"idleItemInfo.idleLabel !== 5"}],staticStyle:{width:"300px"}},[t("el-input-number",{attrs:{precision:2,step:10,max:1e7},model:{value:e.idleItemInfo.idlePrice,callback:function(t){e.$set(e.idleItemInfo,"idlePrice",t)},expression:"idleItemInfo.idlePrice"}},[t("div",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("Price")])])],1)]),t("div",{staticClass:"release-idle-container-picture"},[t("div",{staticClass:"release-idle-container-picture-title"},[e._v("Upload Item Photos")]),t("el-upload",{attrs:{action:"http://localhost:8080/file/","on-preview":e.fileHandlePreview,"on-remove":e.fileHandleRemove,"on-success":e.fileHandleSuccess,"show-file-list":e.showFileList,limit:10,"on-exceed":e.handleExceed,accept:"image/*",drag:"",multiple:""}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v("Drag images here, or"),t("em",[e._v("click to upload")])])]),t("div",{staticClass:"picture-list"},e._l(e.imgList,(function(i,a){return t("el-image",{staticStyle:{width:"600px","margin-bottom":"2px"},attrs:{fit:"contain",src:i,"preview-src-list":e.imgList}})})),1),t("el-dialog",{attrs:{visible:e.imgDialogVisible},on:{"update:visible":function(t){e.imgDialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),t("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"30px","margin-bottom":"30px"}},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.releaseButton}},[e._v("Confirmation of release")])],1)],1)]),t("app-foot")],1)],1)},s=[],l=(i("a481"),i("6e70")),n=i("4fc4"),o=i("85a9"),r={name:"release",components:{AppHead:l["a"],AppBody:n["a"],AppFoot:o["a"]},data:function(){return{imgDialogVisible:!1,dialogImageUrl:"",showFileList:!0,options:options,selectedOptions:[],options2:[{value:1,label:"Digital Technology"},{value:2,label:"Daily Supplies"},{value:3,label:"Sports Related"},{value:4,label:"Books and Notes"},{value:5,label:"Announcement Display"}],imgList:[],idleItemInfo:{idleName:"",idleDetails:"",pictureList:"",idlePrice:0,idlePlace:"",idleLabel:""}}},methods:{handleChange:function(e){console.log(e),this.idleItemInfo.idlePlace=e[1]},fileHandleRemove:function(e,t){console.log(e,t);for(var i=0;i<this.imgList.length;i++)this.imgList[i]===e.response.data&&this.imgList.splice(i,1)},fileHandlePreview:function(e){console.log(e),this.dialogImageUrl=e.response.data,this.imgDialogVisible=!0},fileHandleSuccess:function(e,t,i){console.log("file:",e,t,i),this.imgList.push(e.data)},releaseButton:function(){var e=this;this.idleItemInfo.pictureList=JSON.stringify(this.imgList),console.log(this.idleItemInfo),this.idleItemInfo.idleName&&this.idleItemInfo.idleDetails&&this.idleItemInfo.idlePlace&&this.idleItemInfo.idleLabel&&(this.idleItemInfo.idlePrice||5===this.idleItemInfo.idleLabel)?this.$api.addIdleItem(this.idleItemInfo).then((function(t){1===t.status_code?(e.$message({message:"Post successful！",type:"success"}),console.log(t.data),e.$router.replace({path:"/details",query:{id:t.data.id}})):e.$message.error("Post failed!"+t.msg)})).catch((function(t){e.$message.error("Please fill in complete information")})):this.$message.error("Please fill in complete information！")},handleExceed:function(e,t){this.$message.warning("Limit 10 pictures, selected ".concat(e.length," pictures this time, total ").concat(e.length+t.length," pictures selected"))},isNotice:function(){}}},c=r,d=(i("de21"),i("2877")),u=Object(d["a"])(c,a,s,!1,null,"75ea0082",null);t["default"]=u.exports},"3feb":function(e,t,i){"use strict";i("9b16")},"4fc4":function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[t("div",{staticClass:"main-content"},[e._t("default")],2)])},s=[],l={name:"PageBody"},n=l,o=(i("c95a"),i("2877")),r=Object(o["a"])(n,a,s,!1,null,"7617c039",null);t["a"]=r.exports},"6e70":function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"header-container"},[t("div",{staticClass:"app-name"},[t("router-link",{attrs:{to:"/"}},[e._v("Campus Exchange")])],1),t("div",{staticClass:"search-container"},[t("el-input",{attrs:{placeholder:"Search item..."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchIdle.apply(null,arguments)}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchIdle},slot:"append"})],1)],1),t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.toRelease}},[e._v("Create new listing")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-chat-dot-round"},on:{click:e.toMessage}},[e._v("Message")]),e.isLogin?t("el-dropdown",{attrs:{trigger:"click"}},[t("div",{staticStyle:{cursor:"pointer",display:"flex","align-items":"center"}},[t("div",{staticStyle:{"font-size":"16px",color:"#409EFF","padding-right":"5px"}},[e._v(e._s(e.nicknameValue?e.nicknameValue:e.nickname))]),t("el-avatar",{attrs:{src:e.avatarValue?e.avatarValue:e.avatar}})],1),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[t("div",{on:{click:e.toMe}},[e._v("Profile")])]),t("el-dropdown-item",{staticStyle:{color:"red"},attrs:{divided:""}},[t("div",{on:{click:e.loginOut}},[e._v("Logout")])])],1)],1):t("router-link",{staticClass:"user-name-text",attrs:{to:"/login"}},[e._v("Login")])],1)])},s=[],l=(i("a481"),{name:"Header",props:["searchInput","nicknameValue","avatarValue"],data:function(){return{searchValue:this.searchInput,nickname:"Login",avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",isLogin:!1}},created:function(){var e=this;this.$globalData.userInfo.nickname?(this.nickname=this.$globalData.userInfo.nickname,this.avatar=this.$globalData.userInfo.avatar,this.isLogin=!0):this.$api.getUserInfo().then((function(t){console.log("Header getUserInfo:",t),1===t.status_code&&(e.nickname=t.data.nickname,e.avatar=t.data.avatar,t.data.signInTime=t.data.signInTime.substring(0,10),e.$globalData.userInfo=t.data,e.isLogin=!0)}))},methods:{searchIdle:function(){"/search"!==this.$route.path?this.$router.push({path:"/search",query:{searchValue:this.searchValue}}):(this.$router.replace({path:"/search",query:{searchValue:this.searchValue}}),this.$router.go(0))},toMe:function(){"/me"!==this.$route.path&&this.$router.push({path:"/me"})},toMessage:function(){"/message"!==this.$route.path&&this.$router.push({path:"/message"})},toRelease:function(){"/release"!==this.$route.path&&this.$router.push({path:"/release"})},loginOut:function(){var e=this;this.$api.logout().then((function(t){1===t.status_code?(e.$globalData.userInfo={},console.log("login out"),"/index"===e.$route.path?e.$router.go(0):e.$router.push({path:"/index"})):e.$message.error("Network or system error, fail to logout.")}))}}}),n=l,o=(i("3feb"),i("2877")),r=Object(o["a"])(n,a,s,!1,null,"3e476e82",null);t["a"]=r.exports},"823f":function(e,t,i){"use strict";i("02e0")},"85a9":function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"foot-container"},[t("div",{staticClass:"author"},[e._v("Campus Exchange Copyright © "+e._s(e.currentYear)+" @BU CS673")])])},s=[],l={name:"Foot"},n=l,o=(i("823f"),i("2877")),r=Object(o["a"])(n,a,s,!1,null,"71fbc79b",null);t["a"]=r.exports},"9b16":function(e,t,i){},c716:function(e,t,i){},c95a:function(e,t,i){"use strict";i("ff1e")},de21:function(e,t,i){"use strict";i("c716")},ff1e:function(e,t,i){}}]);