"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,c){c.r(t);var r=c(439),n=c(791),a=c(689),i=c(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,n.useState)([]),c=(0,r.Z)(t,2),o=c[0],s=c[1];return(0,n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=174c7d864c0b478cf762db237aebb993&language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer 174c7d864c0b478cf762db237aebb993"}}).then((function(e){return e.json()})).then((function(e){var t=e.cast;return s(t)})).catch((function(e){return console.error(e)}))}),[e]),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:o.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name}),(0,i.jsxs)("p",{children:["Name: ",e.name]}),(0,i.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}}}]);
//# sourceMappingURL=247.1f907a4c.chunk.js.map