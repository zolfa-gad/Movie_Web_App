"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[645],{3244:function(e,t,a){a(2791);var s=a(184);t.Z=function(e){var t=e.text,a=e.icon,i=e.color,n=e.width;return(0,s.jsxs)("div",{className:" d-flex justify-content-center align-items-center shadow  gap-2 p-2 px-1",style:{color:i,width:n},children:[(0,s.jsx)("span",{children:a}),(0,s.jsx)("span",{children:t})]})}},7748:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var s=a(9439),i=a(2791),n={movieDetail:"MovieDetailPage_movieDetail__FcAly",detail:"MovieDetailPage_detail__thziF"},c=a(3244),o=a(7022),r=a(2677),l=a.p+"static/media/istockphoto-1367855191-612x612.affd586e5bd42a2e76de.jpg",d=a(184),p=function(e){var t=e.cast;return(0,d.jsxs)("div",{className:" d-flex flex-column justify-content-center align-items-center gap-2",children:[(0,d.jsx)("img",{className:"rounded-circle border shadow ",src:"https://image.tmdb.org/t/p/original/".concat(t.profile_path),alt:"",sizes:"100%",width:"170px",height:"200px",onError:function(e){(e.target.src.includes("null")||e.target.src.includes("undefined"))&&(e.target.src=l)}}),(0,d.jsx)("span",{className:"satisfy-font fs-3 text-center",children:t.original_name})]})},g=a(3961),m=a(7689),u=a(9126),f=a(4651),h=a(9129),x=a(7692),v=a(3524),w=a(9705),j=a(8771),b=(a(6497),a(6593),a(4277),a(3328),function(){var e,t=(0,m.UO)(),a=t.id,l=t.type,b=(0,i.useContext)(g.R).getDataFromAPI,_=(0,i.useState)({}),y=(0,s.Z)(_,2),N=y[0],k=y[1],B=(0,i.useState)([]),z=(0,s.Z)(B,2),D=z[0],S=z[1],Z=[{icon:(0,d.jsx)(u.kRm,{size:25,className:"pb-1 "}),text:"".concat(N.rate),color:"#ffc107"},{icon:(0,d.jsx)(x.s3B,{size:27}),text:void 0!==N.duration?"".concat(N.duration,"m"):""},{icon:(0,d.jsx)(h.ImN,{size:27}),text:"".concat(N.language)},{icon:(0,d.jsx)(f.wT3,{size:27}),text:"".concat(N.popularity)},void 0!==N.episodesNumber?{icon:(0,d.jsx)(x.QwR,{size:25,className:"pb-1 "}),text:"".concat(N.episodesNumber),color:"#ffc107"}:"",void 0!==N.seasonsNumber?{icon:(0,d.jsx)(v.GBF,{size:25,className:"pb-1 "}),text:"".concat(N.seasonsNumber),color:"#ffc107"}:"",{icon:(0,d.jsx)(u.KvO,{size:27}),text:"".concat(new Date(N.date).toDateString())}];return(0,i.useEffect)((function(){console.log(a,"id"),console.log(l,"type"),b("https://api.themoviedb.org/3/".concat(l,"/").concat(a)).then((function(e){var t;t="movie"===l?{id:e.id,title:e.original_title,overview:e.overview,rate:e.vote_average,duration:e.runtime,date:e.release_date,popularity:e.popularity,language:e.original_language,categories:e.genres,poster:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),backdrop:"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path)}:{id:e.id,title:e.original_name,overview:e.overview,rate:e.vote_average,duration:e.episode_run_time[0],date:e.first_air_date,popularity:e.popularity,language:e.original_language,categories:e.genres,poster:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),backdrop:"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path),episodesNumber:e.number_of_episodes,seasonsNumber:e.number_of_seasons},k(t)})),b("https://api.themoviedb.org/3/".concat(l,"/").concat(a,"/credits")).then((function(e){return S(e.cast.slice(0,15))}))}),[a]),(0,d.jsx)("div",{className:"h-100",style:{backgroundImage:"url(".concat(N.poster,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:(0,d.jsxs)("div",{className:"".concat(n.movieDetail," h-100 w-100  p-2 text-light "),children:[(0,d.jsx)("div",{className:"w-100 ",style:{height:"70px"}}),(0,d.jsxs)(o.Z,{className:"".concat(n.container,"  h-100 py-2 p-lg-3 rounded-2 gap-3 d-flex flex-column justify-content-center align-items-center "),children:[(0,d.jsxs)("div",{className:"".concat(n.detail," h-100 py-2 rounded-2 gap-3 d-flex "),children:[(0,d.jsx)("figure",{className:" shadow rounded-3 m-0 col-lg-6",style:{height:"60%"},children:(0,d.jsx)("img",{className:" rounded-3 ",style:{height:"100%",width:"100%",opacity:"1"},src:N.poster,alt:""})}),(0,d.jsxs)(r.Z,{md:6,className:" d-flex flex-column justify-content-center align-items-start p-md-3",children:[(0,d.jsx)("h2",{className:" m-0 w-100 fs-1 fw-bolder croissant-font p-2 ",style:{color:"#ffc107"},children:N.title}),(0,d.jsxs)("section",{className:"px-2 pb-2",children:[(0,d.jsx)("div",{className:"d-flex flex-wrap align-items-sm-center justify-content-sm-start justify-content-center align-items-center   gap-3 fst-italic py-3  text-md-start list-unstyled",children:null===(e=N.categories)||void 0===e?void 0:e.map((function(e,t){var a=e.name;return(0,d.jsx)("li",{className:"p-1 px-2 rounded-2 fs-5",style:{border:"1px solid #ffc107"},children:a},"genre-".concat(t))}))}),(0,d.jsx)("p",{className:" text-md-start fs-5 fw-light ",children:N.overview}),(0,d.jsx)("div",{className:"d-flex flex-wrap justify-content-between align-items-center gap-lg-3 gap-md-1 gap-sm-0 pe-lg-5",children:Z.map((function(e,t){return(0,d.jsx)(c.Z,{icon:e.icon,text:e.text,color:e.color},"icon-text-".concat(t))}))})]})]})]}),(0,d.jsx)("div",{className:"w-100 ",children:(0,d.jsx)(w.tq,{className:"w-100 d-flex flex-column justify-content-start align-items-center gap-3 p-3 rounded-2 shadow bg-dark-opacity",modules:[j.W_,j.LW],freeMode:!1,spaceBetween:10,centerInsufficientSlides:!0,loop:!1,slidesOffsetAfter:0,centeredSlides:!0,breakpoints:{0:{width:200,spaceBetween:10},320:{width:200,spaceBetween:10},480:{width:200,spaceBetween:10},640:{width:200,spaceBetween:10},768:{width:200,spaceBetween:10},992:{width:200,spaceBetween:10},1200:{width:200,spaceBetween:10},1400:{width:200,spaceBetween:10}},scrollbar:{draggable:!0},children:null===D||void 0===D?void 0:D.map((function(e){return(0,d.jsx)(w.o5,{children:(0,d.jsx)(p,{cast:e})},e.cast_id)}))})})]})]})})})}}]);
//# sourceMappingURL=645.02140d1c.chunk.js.map