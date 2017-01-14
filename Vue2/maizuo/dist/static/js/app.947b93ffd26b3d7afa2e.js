webpackJsonp([2,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(28),o=i(a);n(69);var s=n(143),r=i(s),c=n(71),u=i(c),l=n(70),d=i(l);o.default.directive("scroll",{bind:function(t,e){window.addEventListener("scroll",function(){var n=e.value;n(t)})}}),new o.default({router:d.default,store:u.default,el:"#app",components:{App:r.default},template:"<App/>"})},,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.COM_LOADING_STATUS="COM_LOADING_STATUS",e.COM_CONF="COM_CONF",e.CHANGE_LEFTNAV_STATUS="CHANGE_LEFTNAV_STATUS",e.HOME_GET_BANNER_LIST="HOME_GET_BANNER_LIST",e.HOME_GET_NOWPLAYING_LIST="HOME_GET_NOWPLAYING_LIST",e.HOME_GET_COMINGSOON_LIST="HOME_GET_COMINGSOON_LIST",e.DETAIL_GET_INFO="DETAIL_GET_INFO",e.CINEMA_GET_LIST="CINEMA_GET_LIST",e.FILM_GET_NOWPLAYING="FILM_GET_NOWPLAYING",e.FILM_NOWPLAYING_NUM="FILM_NOWPLAYING_NUM",e.FILM_GET_COMINGSOON="FILM_GET_COMINGSOON",e.FILM_COMINGSOON_NUM="FILM_COMINGSOON_NUM"},,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(91),o=i(a),s=n(51),r=i(s),c="http://m.maizuo.com/v4/api/";e.default={getBannerList:function(t){r.default.get(c+"billboard/home?t="+1*new Date+"&callback=?").then(function(e){e.status>=200&&e.status<300&&t(e.data)})},getNowPlaying:function(t){r.default.get(c+"film/now-playing?_t="+1*new Date+"&page=1&count=5").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return o.default.reject(t)})},getNowPlayList:function(t,e){r.default.get(c+"film/now-playing?page="+t+"&count=10").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return o.default.reject(t)})},getComingSoon:function(t){r.default.get(c+"film/coming-soon?__t="+1*new Date+"&page=1&count=3").then(function(e){e.status>=200&&e.status<300&&t(e.data)}).catch(function(t){return o.default.reject(t)})},getComingList:function(t,e){r.default.get(c+"film/coming-soon?page="+t+"&count=10").then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return o.default.reject(t)})},getFilmDetail:function(t,e){r.default.get(c+"film/"+t+"?__t="+1*new Date).then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return o.default.reject(t)})},getCinemaList:function(t,e){r.default.get(c+"film/"+t+"/cinema?__t="+1*new Date).then(function(t){t.status>=200&&t.status<300&&e(t.data)}).catch(function(t){return o.default.reject(t)})},getScheduleList:function(t,e,n){r.default.get(c+"schedule?__t="+1*new Date+"&film="+t+"&cinema="+e).then(function(t){t.status>=200&&t.status<300&&n(t.data)}).catch(function(t){return o.default.reject(t)})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(140),o=i(a);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){o.default.attach(document.body)},!1)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),o=i(a),s=n(163),r=i(s);o.default.use(r.default);var c=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:n(150)},{path:"/detail/:id",name:"detail",component:n(148)},{path:"/cinema/:id",name:"cinema",component:n(147)},{path:"/film/:type",name:"film",component:n(149)}],u=new r.default({routes:c,history:!0,linkActiveClass:"active"});e.default=u},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(28),o=i(a),s=n(12),r=i(s),c=n(73),u=i(c),l=n(76),d=i(l),f=n(74),_=i(f),p=n(72),m=i(p),v=n(75),g=i(v);o.default.use(r.default);var h=new r.default.Store({modules:{com:u.default,home:d.default,detail:_.default,cinema:m.default,film:g.default},strict:!1});e.default=h},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),s=a(o),r=n(87),c=a(r),u=n(88),l=a(u),d=n(13),f=a(d),_=n(8),p=i(_),m={list:[],district:[]},v={getCinemaList:function(t,e){var n=t.commit;n(p.COM_LOADING_STATUS,!0),f.default.getCinemaList(e,function(t){n(p.CINEMA_GET_LIST,t.data),n(p.COM_LOADING_STATUS,!1)})}},g={getCinemaList:function(t){return t.list},getDistrict:function(t){return t.district}},h=(0,s.default)({},p.CINEMA_GET_LIST,function(t,e){var n=function(t,e){var n={};return t.filter(function(t){return!n[t[e]]&&(n[t[e]]=1)})},i=[],a={},o=!0,s=!1,r=void 0;try{for(var u,d=(0,c.default)(e.cinemas);!(o=(u=d.next()).done);o=!0){var f=u.value;a={name:f.district.name,pinyin:f.district.pinyin},i.push(a)}}catch(t){s=!0,r=t}finally{try{!o&&d.return&&d.return()}finally{if(s)throw r}}i=n(i,"name"),i.sort(function(t,e){return t.pinyin.localeCompare(e.pinyin.charAt(0))}),console.log((0,l.default)(i)),t.district=i,t.list=e.cinemas});e.default={state:m,actions:v,getters:g,mutations:h}},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(9),r=a(s),c=n(89),u=a(c),l=n(8),d=i(l),f={title:"",loading:0,leftNavState:!1},_={comConf:function(t,e){var n=t.commit;n(d.COM_CONF,e)},changeLeftNavState:function(t,e){var n=t.commit;n(d.CHANGE_LEFTNAV_STATUS,e)}},p={comConf:function(t){return t},loading:function(t){return t.loading},title:function(t){return t.title},leftNavState:function(t){return t.leftNavState}},m=(o={},(0,r.default)(o,d.COM_CONF,function(t,e){t=(0,u.default)(t,e)}),(0,r.default)(o,d.COM_LOADING_STATUS,function(t,e){(0!==t.loading||e)&&(t.loading=e?++t.loading:--t.loading)}),(0,r.default)(o,d.CHANGE_LEFTNAV_STATUS,function(t,e){t.leftNavState=e}),o);e.default={state:f,actions:_,getters:p,mutations:m}},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),s=a(o),r=n(13),c=a(r),u=n(8),l=i(u),d={detail:null},f={getFilmDetail:function(t,e){var n=t.commit;n(l.COM_LOADING_STATUS,!0),c.default.getFilmDetail(e,function(t){n(l.COM_CONF,{title:t.data.film.name}),n(l.DETAIL_GET_INFO,t.data),n(l.COM_LOADING_STATUS,!1)})}},_={getFilmDetail:function(t){return t.detail}},p=(0,s.default)({},l.DETAIL_GET_INFO,function(t,e){t.detail=e.film});e.default={state:d,actions:f,getters:_,mutations:p}},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(9),r=a(s),c=n(13),u=a(c),l=n(8),d=i(l),f={nowPlayingList:[],comingSoonList:[],nowPage:0,comingPage:0,getNowMore:!0,getComingMore:!0},_={getNowPlayList:function(t){var e=t.commit;f.getNowMore&&(e(d.FILM_NOWPLAYING_NUM),e(d.COM_LOADING_STATUS,!0),u.default.getNowPlayList(f.nowPage,function(t){e(d.FILM_GET_NOWPLAYING,t.data),e(d.COM_LOADING_STATUS,!1)}))},getComingList:function(t){var e=t.commit;f.getComingMore&&(e(d.FILM_COMINGSOON_NUM),e(d.COM_LOADING_STATUS,!0),u.default.getComingList(f.comingPage,function(t){e(d.FILM_GET_COMINGSOON,t.data),e(d.COM_LOADING_STATUS,!1)}))}},p={getNowPlayList:function(t){return t.nowPlayingList},getComingList:function(t){return t.comingSoonList}},m=(o={},(0,r.default)(o,d.FILM_GET_NOWPLAYING,function(t,e){t.nowPlayingList=t.nowPlayingList.concat(e.films),t.getNowMore=e.page.current<e.page.total}),(0,r.default)(o,d.FILM_NOWPLAYING_NUM,function(t){t.nowPage+=1,t.getNowMore=!1}),(0,r.default)(o,d.FILM_GET_COMINGSOON,function(t,e){t.comingSoonList=t.comingSoonList.concat(e.films),t.getComingMore=e.page.current<e.page.total}),(0,r.default)(o,d.FILM_COMINGSOON_NUM,function(t){t.nowPage+=1,t.getComingMore=!1}),o);e.default={state:f,actions:_,getters:p,mutations:m}},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,s=n(9),r=a(s),c=n(13),u=a(c),l=n(8),d=i(l),f={banner:[],nowplay:[],coming:[]},_={getBannerList:function(t){var e=t.commit;e(d.COM_LOADING_STATUS,!0),u.default.getBannerList(function(t){e(d.HOME_GET_BANNER_LIST,t.data),e(d.COM_LOADING_STATUS,!1)})},getNowPlaying:function(t){var e=t.commit;e(d.COM_LOADING_STATUS,!0),u.default.getNowPlaying(function(t){e(d.HOME_GET_NOWPLAYING_LIST,t.data),e(d.COM_LOADING_STATUS,!1)})},getComingSoon:function(t){var e=t.commit;e(d.COM_LOADING_STATUS,!0),u.default.getComingSoon(function(t){e(d.HOME_GET_COMINGSOON_LIST,t.data),e(d.COM_LOADING_STATUS,!1)})}},p={getBannerList:function(t){return t.banner},getNowPlaying:function(t){return t.nowplay},getComingSoon:function(t){return t.coming}},m=(o={},(0,r.default)(o,d.HOME_GET_BANNER_LIST,function(t,e){t.banner=e.billboards}),(0,r.default)(o,d.HOME_GET_NOWPLAYING_LIST,function(t,e){t.nowplay=e.films}),(0,r.default)(o,d.HOME_GET_COMINGSOON_LIST,function(t,e){t.coming=e.films}),o);e.default={state:f,actions:_,getters:p,mutations:m}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&(this.$parent.swiper.destroyLoop(),this.$parent.swiper.createLoop()))}}}},function(t,e,n){(function(t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof t.window;i&&(window.Swiper=n(50),n(137)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&i&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}}).call(e,function(){return this}())},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(136);var a=n(144),o=i(a),s=n(145),r=i(s),c=n(146),u=i(c),l=n(12);e.default={name:"app",data:function(){return{transitionName:"slide-left",goTop:!1}},components:{comHeader:o.default,comLoading:r.default,comSidebar:u.default},created:function(){if(void 0===this.$route.name)return this.$router.push("home")},watch:{$route:function(t,e){console.log(t.path),console.log(e.path)}},computed:(0,l.mapGetters)({comConf:"comConf",loading:"loading"}),methods:{showTop:function(){document.body.scrollTop>200?this.goTop=!0:this.goTop=!1},gotop:function(){var t=10,e=setInterval(function(){document.body.scrollTop>0?(document.body.scrollTop=document.body.scrollTop-t>0?document.body.scrollTop-t:0,t+=20):clearInterval(e)},16)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(132),e.default={data:function(){return{}},props:{com:{type:Object}},methods:{showNav:function(){return this.$store.dispatch("changeLeftNavState",!0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(134),e.default={data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(135),e.default={data:function(){var t=[{name:"首页",path:"/home"},{name:"影片",path:"/film/now-playing"}];return{menuList:t}},computed:{show:function(){return this.$store.getters.leftNavState}},methods:{hideNav:function(){this.$store.dispatch("changeLeftNavState",!1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(129),e.default={data:function(){return{pinyin:""}},created:function(){if(0===this.list.length){var t=this.$route.params.id;this.$store.dispatch("getCinemaList",t)}},computed:{list:function(){return this.$store.getters.getCinemaList},district:function(){return this.pinyin=this.$store.getters.getDistrict[0].pinyin,this.$store.getters.getDistrict},_id:function(){return this.$route.params.id}},methods:{changeArea:function(t){return this.pinyin===t?(this.pinyin="",!0):(this.pinyin=t,!0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(130);var i=n(12);e.default={created:function(){var t=this.$route.params.id;this.$store.dispatch("getFilmDetail",t)},filters:{formatDate:function(t){var e=new Date(1*t),n=e.getFullYear(),i=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),a=e.getDate()>9?e.getDate():"0"+e.getDate();return n+"-"+i+"-"+a}},computed:(0,i.mapGetters)({detail:"getFilmDetail"})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(131);var i=n(12);e.default={methods:{changeTab:function(t){return this.type!==t&&(this.type=t,this.$router.replace({params:{type:t}}),void("now-playing"===this.type&&0===this.nowList.length?this.$store.dispatch("getNowPlayList"):"coming-soon"===this.type&&0===this.comingList.length&&this.$store.dispatch("getComingList")))},getMore:function(t){document.body.scrollTop+window.innerHeight>=t.clientHeight-100&&("now-playing"===this.$route.params.type?this.$store.dispatch("getNowPlayList"):"coming-soon"===this.$route.params.type&&this.$store.dispatch("getComingList"))}},data:function(){return{type:""}},created:function(){document.body.scrollTop=0,this.$store.commit("COM_CONF",{title:"卖座电影"}),this.type=this.$route.params.type,"now-playing"===this.type&&0===this.nowList.length?this.$store.dispatch("getNowPlayList"):"coming-soon"===this.type&&0===this.comingList.length&&this.$store.dispatch("getComingList")},computed:(0,i.mapGetters)({nowList:"getNowPlayList",comingList:"getComingList"}),filters:{formatDate:function(t){var e=new Date(1*t),n=e.getFullYear(),i=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),a=e.getDate()>9?e.getDate():"0"+e.getDate(),o=e.getDay(),s=["日","一","二","三","四","五","六"];return n+"年"+i+"月"+a+"日上映 星期"+s[o]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(133);var i=n(12),a=n(142);e.default={data:function(){return{swiperOption:{autoplay:1500,autoHeight:!0,pagination:".swiper-pagination",paginationClickable:!0}}},created:function(){this.$store.commit("COM_CONF",{title:"卖座电影"}),0===this.banner.length&&this.$store.dispatch("getBannerList"),0===this.nowplay.length&&this.$store.dispatch("getNowPlaying"),0===this.coming.length&&this.$store.dispatch("getComingSoon")},computed:(0,i.mapGetters)({banner:"getBannerList",nowplay:"getNowPlaying",coming:"getComingSoon"}),components:{swiper:a.swiper,swiperSlide:a.swiperSlide},filters:{formatDate:function(t){var e=new Date(1*t),n=e.getFullYear(),i=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),a=e.getDate()>9?e.getDate():"0"+e.getDate();return n+"年"+i+"月"+a+"日上映"}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){var i,a;i=n(79);var o=n(162);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(80);var o=n(159);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(81);var o=n(153);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(82);var o=n(156);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(83);var o=n(155);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(84);var o=n(160);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;n(138),i=n(85);var o=n(154);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;n(139),i=n(86);var o=n(157);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(77);var o=n(161);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,a;i=n(78);var o=n(158);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-rotate"},[n("div",{staticClass:"inner"},[n("div"),t._v(" "),n("div")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.getMore,expression:"getMore"}],attrs:{id:"film"}},[n("div",{staticClass:"tabs"},[n("div",{staticClass:"item",class:"now-playing"==t.type?"active":"",on:{click:function(e){t.changeTab("now-playing")}}},[t._v("\n      正在热映\n    ")]),t._v(" "),n("div",{staticClass:"item",class:"coming-soon"==t.type?"active":"",on:{click:function(e){t.changeTab("coming-soon")}}},[t._v("\n      即将上映\n    ")])]),t._v(" "),n("div",{staticClass:"tab-content"},["now-playing"===t.type?n("transition-group",{staticClass:"now-playing-list",attrs:{tag:"div",name:"list-complete"}},t._l(t.nowList,function(e){return n("router-link",{key:e,staticClass:"item list-complete-item",attrs:{to:{name:"detail",params:{id:e.id}}}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.poster.thumbnail}})]),t._v(" "),n("div",{staticClass:"info"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.intro))]),t._v(" "),n("p",[n("span",[t._v(t._s(e.cinemaCount))]),t._v("家影院上映 | "),n("span",[t._v(t._s(e.watchCount))]),t._v("人购票\n          ")])]),t._v(" "),n("div",{staticClass:"count"},[t._v(t._s(e.grade))])])})):t._e(),t._v(" "),"coming-soon"===t.type?n("transition-group",{staticClass:"coming-soon-list",attrs:{tag:"div",name:"list-complete"}},t._l(t.comingList,function(e){return n("router-link",{key:e,staticClass:"item list-complete-item",attrs:{to:{name:"detail",params:{id:e.id}}}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.poster.thumbnail}})]),t._v(" "),n("div",{staticClass:"info"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.intro))]),t._v(" "),n("p",[n("span",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(e.premiereAt)))])])])])})):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length>0?n("div",{attrs:{id:"cinema"}},t._l(t.district,function(e){return n("div",{staticClass:"item"},[n("div",{staticClass:"title",on:{click:function(n){t.changeArea(e.pinyin)}}},[t._v(t._s(e.name))]),t._v(" "),t.pinyin===e.pinyin?n("div",{staticClass:"list"},t._l(t.list,function(i){return i.district.pinyin===e.pinyin?n("div",{staticClass:"shop"},[n("a",{attrs:{href:"http://m.maizuo.com/v4/?co=maizuo#!/film/"+t._id+"/cinema"}},[n("div",{staticClass:"desc"},[n("div",{staticClass:"title"},[t._v("\n              "+t._s(i.name)+" "),n("span",[t._v("座")]),i.itemTypes.length>3?n("span",[t._v("通")]):t._e()]),t._v(" "),n("div",{staticClass:"tip"},t._l(i.labels,function(e){return"REFUNDABLE_SEAT_TICKET"!==e.type?n("span",{class:e.type.toLocaleLowerCase()},[t._v("\n                "+t._s(e.name)+"\n              ")]):t._e()})),t._v(" "),n("div",{staticClass:"area"},[t._v(t._s(i.address))]),t._v(" "),n("div",{staticClass:"extra"},[t._v("距离未知 | 剩余"+t._s(i.avaliableSchedule)+"场")])]),t._v(" "),n("div",{staticClass:"price"},[t._v("￥"+t._s(i.minimumPrice))])])]):t._e()})):t._e()])})):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sidebar-container",on:{click:t.hideNav}},[n("div",{staticClass:"sidebar-overlay"},[n("transition",{attrs:{name:"leftNav"}},[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("ul",t._l(t.menuList,function(e){return n("li",[n("router-link",{attrs:{to:e.path}},[n("span",[t._v(t._s(e.name))])])],1)}))])])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{staticClass:"banner"},[n("swiper",{staticClass:"banner-swiper",attrs:{options:t.swiperOption}},[t._l(t.banner,function(t){return n("swiper-slide",{staticClass:"slide"},[n("a",{attrs:{href:t.url,target:"_blank"}},[n("img",{attrs:{src:t.imageUrl}})])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1),t._v(" "),n("div",{staticClass:"now-playing"},[t._l(t.nowplay,function(e){return n("div",{staticClass:"item"},[n("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[n("img",{attrs:{src:e.cover.origin}}),t._v(" "),n("div",{staticClass:"desc"},[n("div",{staticClass:"info"},[n("h4",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.cinemaCount)+" 家影院上映 "+t._s(e.watchCount)+" 人购票")])]),t._v(" "),n("div",{staticClass:"count"},[t._v(t._s(e.grade))])])])],1)}),t._v(" "),n("router-link",{staticClass:"go-more",attrs:{to:{name:"film",params:{type:"now-playing"}}}},[t._v("\n      更多热映电影\n    ")])],2),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"coming-soon"},t._l(t.coming,function(e){return n("div",{staticClass:"item"},[n("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[n("img",{attrs:{src:e.cover.origin}}),t._v(" "),n("div",{staticClass:"desc"},[n("div",{staticClass:"info"},[n("h4",[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"time"},[t._v("\n            "+t._s(t._f("formatDate")(e.premiereAt))+"\n          ")])])])],1)}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coming-soon"},[n("div",[t._v("即将上映")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"title"},[n("a",{staticClass:"go-menu",on:{click:t.showNav}},[n("i",{staticClass:"fa fa-bars"})]),t._v(" "),n("p",[t._v(t._s(t.com.title))])]),t._v(" "),n("div",{staticClass:"nav-right"},[n("router-link",{staticClass:"go-home",attrs:{to:{name:"home"}}},[n("i",{staticClass:"fa fa-home"})])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.detail?n("div",{attrs:{id:"detail"}},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:t.detail.cover.origin}})]),t._v(" "),n("div",{staticClass:"desc"},[n("div",{staticClass:"title"},[t._v("影片简介")]),t._v(" "),n("div",{staticClass:"info"},[n("p",[t._v("导演："+t._s(t.detail.director))]),t._v(" "),n("p",[t._v("主演："),t._l(t.detail.actors,function(e){return n("span",[t._v(t._s(e.name))])})],2),t._v(" "),n("p",[t._v("地区语言：("+t._s(t.detail.language)+")")]),t._v(" "),n("p",[t._v("类型："+t._s(t.detail.category))]),t._v(" "),n("p",[t._v("上映时间："+t._s(t._f("formatDate")(t.detail.premiereAt)))]),t._v(" "),n("p",{staticClass:"synopsis"},[t._v(t._s(t.detail.synopsis)+">")])])]),t._v(" "),t.detail.isNowPlaying?n("router-link",{staticClass:"go-pay",attrs:{to:{name:"cinema",params:{id:t.detail.id}}}},[t._v("\n    立即购票\n  ")]):t._e()],1):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.showTop,expression:"showTop"}],staticClass:"wrap"},[n("com-header",{attrs:{com:t.comConf}}),t._v(" "),n("div",{staticClass:"container"},[n("transition",{attrs:{name:t.transitionName}},[n("router-view")],1)],1),t._v(" "),n("com-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),n("com-sidebar"),t._v(" "),n("div",{staticClass:"go-top",class:t.goTop?"active":"",on:{click:t.gotop}},[n("i",{staticClass:"fa fa-arrow-up"})])],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.947b93ffd26b3d7afa2e.js.map