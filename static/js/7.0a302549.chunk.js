(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{172:function(t,e,n){"use strict";n.r(e);n(1);var r=n(5),i=n(21),s=n(71),a=n.n(s),o=n(0),c=function(t){var e=t.data;return Object(o.jsx)("div",{className:"cell-container",children:Object(o.jsxs)("article",{className:"mini-post",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:e.link,children:e.title})}),Object(o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),Object(o.jsx)("a",{href:e.link,className:"image",children:Object(o.jsx)("img",{src:"".concat("/personal-site").concat(e.image),alt:e.title})}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Vooka",link:"https://vooka1.herokuapp.com/",subtitle:"2015 BVP Hackathon",image:"/images/projects/vooka.png",date:"2015-11-20",desc:"Built to help solve the realestate crisis. Has multuple features properties for rent or sale, also features social media for interation and free property posting and commenting"},{title:"MuchoJobs",link:"https://muchojobs.herokuapp.com/",subtitle:"Meant to address the Job Search challenge in Africa",image:"/images/projects/muchojobs.png",date:"2015-09-20",desc:"allows for perfect placement of Human Resource creates a large candidate pool, Allows potential employees to search for the right company withount too much hustle."},{title:"Proshop",Link:"https://trendyshop1.herokuapp.com/#/",subtitle:"An e-commerse application",image:"/images/projects/proshop.png",date:"2021-05-15",desc:"Allows for purchace item Paypal and credit card enabled  shopping cart also available."}];e.default=function(){return Object(o.jsx)(i.a,{title:"Projects",description:"Learn about Eric Muchogo's projects.",children:Object(o.jsxs)("article",{className:"post",id:"projects",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return Object(o.jsx)(c,{data:t},t.title)}))]})})}},71:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",h="quarter",l="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},j={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:c,d:o,D:d,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",v={};v[M]=m;var y=function(t){return t instanceof S},b=function(t,e,n){var r;if(!t)return M;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(M=r),r||!n&&M},O=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},D=j;D.l=b,D.i=y,D.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return O(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<O(t)},g.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!D.u(e)||e,h=D.p(t),f=function(t,e){var i=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},p=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,m=this.$M,g=this.$D,j="set"+(this.$u?"UTC":"");switch(h){case l:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case c:var M=this.$locale().weekStart||0,v=($<M?$+7:$)-M;return f(r?g-v:g+(6-v),m);case o:case d:return p(j+"Hours",0);case a:return p(j+"Minutes",1);case s:return p(j+"Seconds",2);case i:return p(j+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,c=D.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[d]=h+"Date",n[u]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var $=this.clone().set(d,1);$.$d[f](p),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[D.p(t)]()},g.add=function(r,h){var d,f=this;r=Number(r);var p=D.p(h),$=function(t){var e=O(f);return D.w(e.date(e.date()+Math.round(t*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===l)return this.set(l,this.$y+r);if(p===o)return $(1);if(p===c)return $(7);var m=(d={},d[s]=e,d[a]=n,d[i]=t,d)[p]||1,g=this.$d.getTime()+r*m;return D.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},l=function(t){return D.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:h(n.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,c,2),ddd:h(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:D.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||p[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,d,f){var p,$=D.p(d),m=O(r),g=(m.utcOffset()-this.utcOffset())*e,j=this-m,M=D.m(this,m);return M=(p={},p[l]=M/12,p[u]=M,p[h]=M/3,p[c]=(j-g)/6048e5,p[o]=(j-g)/864e5,p[a]=j/n,p[s]=j/e,p[i]=j/t,p)[$]||j,f?M:D.a(M)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return v[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),w=S.prototype;return O.prototype=w,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",l],["$D",d]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,S,O),t.$i=!0),O},O.locale=b,O.isDayjs=y,O.unix=function(t){return O(1e3*t)},O.en=v[M],O.Ls=v,O.p={},O}()}}]);
//# sourceMappingURL=7.0a302549.chunk.js.map