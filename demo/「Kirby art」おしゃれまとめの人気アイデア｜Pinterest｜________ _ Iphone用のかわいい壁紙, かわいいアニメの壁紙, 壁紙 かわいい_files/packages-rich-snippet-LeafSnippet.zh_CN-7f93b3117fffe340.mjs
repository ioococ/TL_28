(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[36e3],{108134:e=>{var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LeafSnippet_pin",selections:[{args:null,kind:"FragmentSpread",name:"useRichSnippetPin_pin"}],type:"Pin",abstractKey:null,hash:"f5e7ad2abe4b6d77e0fc29bab4595111"};e.exports=t},323155:(e,t,i)=>{i.d(t,{M:()=>s});const n=/^(?:adminapp|images|js|css|favicon\.png|client|reporter|webapp)/,a=/(\.mp4|\.mov|\.m3u8)$/,o={mediaUrls:{http:"http://i.pinimg.com/",https:"https://i.pinimg.com/"},assetUrls:{http:"http://s.pinimg.com/",https:"https://s.pinimg.com/"},videoUrls:{http:"http://v1.pinimg.com/",https:"https://v1.pinimg.com/"}};let r;class l{getAssetHost(e){return o.assetUrls[e]}getMediaHost(e){return o.mediaUrls[e]}}function s(e){const t="https";if(!e)return e;if(e.startsWith("http"))return e;if(e.startsWith("//"))return`${t}:${e}`;e.startsWith("/")&&(e=e.substring(1));const i=(r||(r=new l),r);if(-1!==e.substring(0,11).search(n))return i.getAssetHost(t)+e;if(-1!==e.search(a))throw new Error("Video Host not implemented in CdnUtils.js");return i.getMediaHost(t)+e}},162367:(e,t,i)=>{i.d(t,{U3:()=>y,f5:()=>f,lP:()=>b,ol:()=>k});var n=i(323155),a=(i(630089),i(465991)),o=(i(806685),i(739425)),r=i(3060);let l,s=e=>e;const d=(0,n.M)("/images/default_open_graph_1200.png"),c=200,p=200,u="noindex,noimageindex",_=r.Vi;function g(e,t){return["alternate",`https://www.pinterest.com/oembed.json?url=${e}&ref=oembed-discovery`,{title:t.bt("立即在 Pinterest 上探寻灵感！", "Find inspiration on Pinterest today!", " - ", undefined, true),type:"application/json+oembed"}]}function m(e){if(!e)return"";try{return new Date(e).toISOString()}catch(t){return""}}function v({relativePath:e,origin:t=r.C0}){return`${t}${e}`}const h=["link","tracked_link","seo_title","seo_description","seo_url","seo_noindex_reason","created_at","repin_count","pin_join","images","category","board","pinner"],f=e=>!h.find((t=>!Object.prototype.hasOwnProperty.call(e,t)));function b({data:e,origin:t,i18n:i}){var n,o,r;const{id:l,board:s,created_at:h,link:f,pinner:b,pin_join:y,repin_count:k,seo_description:P,seo_title:T,seo_noindex_reason:w,tracked_link:S,seo_url:D,images:x}=e,j=null==b?void 0:b.username,O=!w&&y?y.seo_canonical_domain:_,A=!w&&y?y.seo_canonical_url:(0,a.bN)({pinId:l,seoUrl:D}),I=v({origin:O?`https://${O}`:t,relativePath:A}),V=[g(I,i)],N=null!=x&&null!==(n=x["736x"])&&void 0!==n&&n.url?x["736x"].url:d,z={"og:image":N,"og:image:height":(null!=x&&null!==(o=x["736x"])&&void 0!==o&&o.height?x["736x"].height:p).toString(),"og:image:width":(null!=x&&null!==(r=x["736x"])&&void 0!==r&&r.width?x["736x"].width:c).toString(),"og:type":"pinterestapp:pin","og:updated_time":m(h),"og:url":I,"twitter:image:src":N,"pinterestapp:repins":k?k.toString():"0"};return T&&(z.title=T,z["twitter:title"]=T,z["og:title"]=T),P&&(z.description=P,z["og:description"]=P,z["twitter:description"]=P),(S||f)&&(z["og:see_also"]=S||f,z["pinterestapp:source"]=S||f),z.robots=w?u:"max-image-preview:large",null!=s&&s.url&&(z["pinterestapp:pinboard"]=v({relativePath:s.url,origin:t})),j&&(z["pinterestapp:pinner"]=v({relativePath:`/${j}/`,origin:t})),{links:V,canonical_domain:O,canonical_url:A,full_canonical_url:I,no_index_reason:w,metatags:z}}function y({data:e,origin:t,i18n:i}){const{board_order_modified_at:n,category:a,cover_images:o,name:r,owner:l,pin_count:s,seo_canonical_domain:c,seo_description:p,seo_noindex_reason:_,seo_title:h,url:f}=e,b=(null==l?void 0:l.username)||"",y=o&&o["200x150"]&&o["200x150"].url||d,k=f&&v({origin:c?`https://${c}`:t,relativePath:f}),P=k?[g(k,i)]:[],T={"og:image":y,"og:type":"pinterestapp:pinboard","og:updated_time":m(n),"pinterestapp:pinner":v({relativePath:`/${b}/`,origin:t}),"pinterestapp:pins":(s||0).toString(),"twitter:image:src":y};return h&&(T.title=h,T["og:title"]=h),p&&(T.description=p,T["og:description"]=p,T["twitter:description"]=p),a&&(T["pinterestapp:category"]=a),r&&(T["twitter:title"]=r),k&&(T["og:url"]=k),_&&(T.robots=u),{links:P,no_index_reason:_,metatags:T,full_canonical_url:k,...c?{canonical_domain:c}:null}}function k({data:e,origin:t,i18n:i}){const{about:n,board_count:a,follower_count:r,following_count:d,image_xlarge_url:c,pin_count:p,seo_canonical_domain:_,seo_description:m,seo_noindex_reason:h,seo_title:f,username:b}=e,y=v({origin:_?`https://${_}`:t,relativePath:(0,o.tV)(l||(l=s`/${0}/`),b)}),k=[g(y,i)],P={"og:type":"profile","og:url":y,"pinterestapp:about":n||"","pinterestapp:boards":(a||0).toString(),"pinterestapp:followers":(r||0).toString(),"pinterestapp:following":(d||0).toString(),"pinterestapp:pins":(p||0).toString()};return c&&(P["og:image"]=c,P["twitter:image:src"]=c),m&&(P.description=m,P["og:description"]=m,P["twitter:description"]=m),f&&(P.title=f,P["og:title"]=f,P["twitter:title"]=f),h&&(P.robots=u),{links:k,no_index_reason:h,metatags:P,full_canonical_url:y,..._?{canonical_domain:_}:null}}},84812:(e,t,i)=>{function n(e,t,i){return!(!(e&&e.trim().length>0&&t)||i)}i.d(t,{r:()=>n})},682959:(e,t,i)=>{i.r(t),i.d(t,{default:()=>R});var n=i(667294),a=i(167912),o=i(616550),r=i(536042),l=i(898252),s=i(84812),d=i(282802),c=i(314457),p=i(355091),u=i(465991),_=i(711777);const g=e=>{var t;return(null==e||null===(t=e.orig)||void 0===t?void 0:t.url)||""},m=(e,t)=>{const i=t||e;if(i){const e=new Date(Date.parse(i));if(e)return e.toISOString()}},v=(e,t)=>e&&t?{sharedContent:{"@type":"WebPage",headline:t,url:e}}:void 0,h=({origin:e},t,i,{pinnerFullName:n,pinnerUsername:a},o)=>{var r,l,s,d,c,h;const{url:f,article:b,title:y}=i.rich_metadata||{},{full_canonical_url:k}=null!=t?t:{},P=k||f,T=(0,u.Ly)({pinTitle:i.title,gridTitle:i.grid_title,richSummaryDisplayName:null!==(r=null===(l=i.rich_summary)||void 0===l?void 0:l.display_name)&&void 0!==r?r:"",richMetadataTitle:null!=y?y:"",storyPinDataId:i.story_pin_data_id,storyPinDataMetadataPinTitle:null===(s=i.story_pin_data)||void 0===s||null===(d=s.metadata)||void 0===d?void 0:d.pin_title,pinJoinVisualAnnotation:null===(c=i.pin_join)||void 0===c?void 0:c.visual_annotation,pinJoinAnnotationsWithLinks:null===(h=i.pin_join)||void 0===h?void 0:h.annotations_with_links})||"",w=(0,p.QO)(e,{userName:a,fullName:n}),S=((e,t)=>e?(0,_.o)(e).trim():(t||"").trim())(i.description,i.title)||"",D=i.seo_title||"",{fallbackTitle:x,fallbackDescription:j}=(0,p.fP)("default",T,o),{title:O,description:A}=(0,p.dn)(t,T,S,x,j,D);return{"@type":"SocialMediaPosting",author:w,headline:O,articleBody:A,image:g(i.images),datePublished:m(i.created_at,null==b?void 0:b.date_published),...v(P,O)}};var f=i(150676);const b=e=>{if(!e)return;const t=e=>{const t=e||{},i=t.h||0,n=t.m||0;let a="PT",o=!1;return i>0&&(a+=i.toString()+"H",o=!0),n>0&&(a+=n.toString()+"M",o=!0),o?a:""},i={};return e.total&&(i.totalTime=t(e.total)),e.cook&&(i.cookTime=t(e.cook)),e.prep&&(i.prepTime=t(e.prep)),i},y=e=>{if(!e.categorized_ingredients)return;const t=[];return e.categorized_ingredients.forEach((e=>{(e.ingredients||[]).forEach((e=>{const i=[];e.amt&&i.push(e.amt),e.name&&(i.push(e.name),t.push(i.join(" ")))}))})),t.length>1?{recipeIngredient:t}:void 0},k=({origin:e,pathname:t},i,n,{pinnerFullName:a,pinnerUsername:o},r)=>{const{rich_metadata:l}=n;if(!l)return null;const{recipe:s}=l;if(!s)return null;const d=s.name||"",c=l.description||"",u=s.servings_summary&&(s.servings_summary.serves||s.servings_summary.summary),_=(0,p.QO)(e,{userName:o,fullName:a}),m=n.seo_title||"",v=n&&n.videos||{},{video_list:h={}}=v||{},{V_720P:k,V_HLSV4:P}=h,T=(0,p.V3)(k)||(0,p.V3)(P),w={video:void 0};if(T){const a=(0,f.us)(T.duration||0),o=(0,f.yc)(a);w.video=(0,f.dH)({origin:e,pathname:t},i,n,T,"",r,o)}const{fallbackTitle:S,fallbackDescription:D}=(0,p.fP)("recipe",d,r),{title:x,description:j}=(0,p.dn)(i,d,c,S,D,m),O=(0,p.cO)(s.aggregate_rating),A=O?{aggregateRating:O}:Object.freeze({}),I={...u?{recipeYield:u}:Object.freeze({}),...j?{description:j}:Object.freeze({}),...b(s.cook_times),...y(s),...A,...w};return{"@type":"Recipe",name:x,description:j,author:_,video:T,image:g(n.images),...I}};var P=i(352579);const T=e=>(0,P.Vx)(e).map((e=>{var t;return(null!==(t=e.blocks)&&void 0!==t?t:[]).filter((e=>e&&!!e.text&&[0,9,1,6].includes(e.block_type))).map((e=>({"@type":"HowToSupply",name:e.text||""})))})).flat(),w=({origin:e,pathname:t},i,n,a,o)=>{var r,l;a.pages=(0,P.uI)(a.pages||[]);const s=(0,u.RC)({storyPinDataMetadataPinTitle:null===(r=n.story_pin_data)||void 0===r||null===(l=r.metadata)||void 0===l?void 0:l.pin_title,pinTitle:n.title})||"",d=n.seo_title||"",c=(0,P.tY)(a),_={supply:T(a)},{howToSteps:g,containsNestedVideo:m}=(0,P.nc)({origin:e,pathname:t},i,n,a,o),v=(0,P.Sl)(a),h=(0,P.ky)(v),b={video:void 0};if(!m&&h){const a=(0,f.us)(h.duration||0),r=(0,f.yc)(a);b.video=(0,f.dH)({origin:e,pathname:t},i,n,h,"",o,r)}const{fallbackTitle:y,fallbackDescription:k}=(0,p.fP)("howto",s,o),{title:w}=(0,p.dn)(i,s,"",y,k,d);return{"@type":"HowTo",name:w,image:c,..._,step:g,...b}},S=({origin:e,pathname:t},i,n,a,o)=>{var r,l,s,d,c,_,g,m;a.pages=(0,P.uI)(a.pages||[]);const v=(0,P.tY)(a),h=(0,u.RC)({storyPinDataMetadataPinTitle:null===(r=n.story_pin_data)||void 0===r||null===(l=r.metadata)||void 0===l?void 0:l.pin_title,pinTitle:n.title})||"",b=n.seo_title||"",{description:y}=(0,u.eK)({pinJoinVisualAnnotation:null===(s=n.pin_join)||void 0===s?void 0:s.visual_annotation,pinJoinAnnotationsWithLinks:null===(d=n.pin_join)||void 0===d?void 0:d.annotations_with_links,richMetadataDescription:null===(c=n.rich_metadata)||void 0===c?void 0:c.description,richSummaryDisplayName:null===(_=n.rich_summary)||void 0===_?void 0:_.display_name,closeupUnifiedDescription:n.closeup_unified_description}),k=(0,p.QO)(e,{userName:null===(g=n.native_creator)||void 0===g?void 0:g.username,fullName:null===(m=n.native_creator)||void 0===m?void 0:m.full_name}),T=(e=>{var t,i,n;return((null===(t=e.metadata)||void 0===t||null===(i=t.basics)||void 0===i||null===(n=i.list_blocks)||void 0===n?void 0:n.filter((e=>(0,P.cY)(e,P.n_)||(0,P.Xi)(e))))||[]).map((e=>{const t=e.blocks||[];return t.length>0?t.map((e=>(e.text||"").trim())):[(e.heading||"").trim()]})).flat()})(a),{howToSteps:w,containsNestedVideo:S}=(0,P.nc)({origin:e,pathname:t},i,n,a,o),{cookTime:D,prepTime:x,totalTime:j,recipeYield:O}=(0,P.gz)(a),A={cookTime:D,prepTime:x,totalTime:j,recipeYield:O},I=(V=n.created_at)?new Date(Date.parse(V)).toISOString():"";var V;const N=(0,P.Sl)(a),z=(0,P.ky)(N),M={video:void 0};if(!S&&z){const a=(0,f.us)(z.duration||0),r=(0,f.yc)(a);M.video=(0,f.dH)({origin:e,pathname:t},i,n,z,"",o,r)}const $={};w.length>0&&T.length>0&&($.recipeInstructions=w,$.recipeIngredient=T);const{fallbackTitle:H,fallbackDescription:R}=(0,p.fP)("recipe",h,o),{title:U,description:L}=(0,p.dn)(i,h,y,H,R,b);return{"@type":"Recipe",image:v,name:U,author:k,description:L,datePublished:I,...A,...$,...M}};var D=i(662955),x=i(458672),j=i(785893);const O=function(e){const{videoJsonData:t}=e;return t?(0,j.jsx)(x.Z,{type:"application/ld+json",testId:"video-snippet",value:t}):null};var A,I=i(162367),V=i(98736),N=i(525104);const z=void 0!==A?A:A=i(108134);function M({pin:e}){var t,i,a,u,_,g,m,v,b,y,T,D;const A=(0,r.ZP)(),{origin:N,isBot:z}=(0,d.B)(),{pathname:M}=(0,o.useLocation)();if(!e||!e.pinner||!A)return null;const $=e.story_pin_data,H=(0,l.iR)(e.videos),R=(0,l.cL)({embedSrc:null===(t=e.embed)||void 0===t?void 0:t.src,embedSubtype:null===(i=e.embed)||void 0===i?void 0:i.subtype,embedType:null===(a=e.embed)||void 0===a?void 0:a.type}),U={pinnerFullName:null===(u=e.pinner)||void 0===u?void 0:u.full_name,pinnerUsername:null===(_=e.pinner)||void 0===_?void 0:_.username},L=(0,p.v_)(e.grid_title,e.rich_metadata);let E,C="standard_pin";const F=(0,s.r)(null===(g=e.rich_metadata)||void 0===g||null===(m=g.recipe)||void 0===m?void 0:m.name,!(null===(v=e.rich_metadata)||void 0===v||null===(b=v.recipe)||void 0===b||!b.categorized_ingredients),null===(y=e.rich_metadata)||void 0===y||null===(T=y.recipe)||void 0===T?void 0:T.from_aggregated_data);let Y;(0,I.f5)(e)&&(Y=(0,I.lP)({data:e,origin:N,i18n:A})),F?(E=k({origin:N,pathname:M},Y,e,U,A),C="recipe_pin"):$&&(0,P.H2)(e.title,$)?(E=S({origin:N,pathname:M},Y,e,$,A),C="recipe_idea_pin"):$&&(0,P.TL)(e,$)?(E=w({origin:N,pathname:M},Y,e,$,A),C="how_to_idea_pin"):$?(E=h({origin:N},Y,e,U,A),C="idea_pin"):L?(E=(0,c.VH)(Y,e,A),C="product_pin"):E=h({origin:N},Y,e,U,A);const{full_canonical_url:J}=null!==(D=Y)&&void 0!==D?D:{},Z=J||`${N}${M}`,B={...E,"@context":"http://schema.org/",mainEntityOfPage:{"@type":"WebPage","@id":Z}},W=(0,P.Sl)($),Q=H||R,q=!Q&&!!W.length,K=Q||q;if((0,V.My)("closeup_main_pin.leaf_snippet",{isBot:z,jsonType:C,containsVideo:K}),!K)return(0,j.jsx)(n.Fragment,{children:(0,j.jsx)(x.Z,{type:"application/ld+json",testId:"leaf-snippet",value:B})});const{videoJsonData:X}=(0,f.Ee)({origin:N,pathname:M},Y,e,Q,W,A);return(0,j.jsxs)(n.Fragment,{children:[(0,j.jsx)(x.Z,{type:"application/ld+json",testId:"leaf-snippet",value:B}),K&&(0,j.jsx)(O,{videoJsonData:X})]})}const $=({graphqlRef:e})=>{const t=(0,a.useFragment)(z,e),i=(0,D.Z)(t);return(0,j.jsx)(M,{pin:i})},H=({pinId:e})=>{const t=(0,N.S6)()(e);return t?(0,j.jsx)(M,{pin:t}):null};function R({graphqlRef:e,pinId:t}){return e?(0,j.jsx)($,{graphqlRef:e}):(0,j.jsx)(H,{pinId:t})}},314457:(e,t,i)=>{i.d(t,{VH:()=>o});var n=i(355091);const a=e=>{const t=e.replace(/[a-zA-Z]\./g,"").replace(/\./g,",").replace(/,([^,]*)$/g,".$1").replace(/[^0-9.]/g,"");return parseFloat(t)},o=(e,t,i)=>{var o;const r=t.rich_metadata&&t.rich_metadata.products&&t.rich_metadata.products[0],l=r&&r.name||t.grid_title||"",s=t.seo_title||"",d={"@type":"Brand",name:t.rich_metadata&&t.rich_metadata.site_name||t.link_domain&&t.link_domain.official_user&&t.link_domain.official_user.full_name||""},c=t.rich_metadata&&t.rich_metadata.description||t.description||t.description_html||t.rich_metadata&&t.rich_metadata.title||t.title||"",p=(u=t.images)?Object.keys(u).map((e=>{var t;return null===(t=u[e])||void 0===t?void 0:t.url})).filter(Boolean):[];var u;const _=(e=>{const t=e.rich_metadata&&e.rich_metadata.products&&e.rich_metadata.products[0],i=null==t?void 0:t.offer_summary;if(!i)return;let n;return!0===i.in_stock?n="https://schema.org/InStock":!1===i.in_stock&&(n="https://schema.org/OutOfStock"),i.min_price?{"@type":"AggregateOffer",lowPrice:a(i.min_price),highPrice:i&&i.max_price?a(i.max_price):void 0,priceCurrency:e.price_currency||"",...n?{availability:n}:Object.freeze({})}:i.price?{"@type":"Offer",price:a(i.price),priceCurrency:e.price_currency||"",url:e.rich_metadata&&e.rich_metadata.url||e.link||e.domain||"",...n?{availability:n}:Object.freeze({})}:void 0})(t),g=(0,n.cO)(null===(o=t.rich_metadata)||void 0===o?void 0:o.aggregate_rating),{fallbackTitle:m,fallbackDescription:v}=(0,n.fP)("product",l,i),{title:h,description:f}=(0,n.dn)(e,l,c,m,v,s);return{"@type":"Product",name:h,aggregateRating:g,brand:d,description:f,image:p,offers:_}}},352579:(e,t,i)=>{i.d(t,{H2:()=>f,Sl:()=>D,TL:()=>k,Vx:()=>w,Xi:()=>g,cY:()=>_,gz:()=>S,ky:()=>x,n_:()=>s,nc:()=>y,tY:()=>T,uI:()=>v});var n=i(465991),a=i(150676),o=i(98736),r=i(634923);const l=[0,1,9],s=[...l,5],d=[...l,6],c=({isEligible:e,hasTitle:t,hasMetadata:i,hasIngredients:n,hasInstructions:a,hasNativeCreator:r,validPages:l,validVideos:s})=>{(0,o.My)("closeup_main_pin.leaf_snippet.is_story_recipe",{isEligible:e,validPages:l.length,validVideos:s.length,hasTitle:t,hasMetadata:i,hasIngredients:n,hasInstructions:a,hasNativeCreator:r,isGuidedRecipe:n&&a})},p=({isEligible:e,hasTitle:t,hasMetadata:i,hasInstructions:n,hasSupplies:a,validPages:r,validVideos:l,validHowToSteps:s})=>{(0,o.My)("closeup_main_pin.leaf_snippet.is_story_how_to",{isEligible:e,validPages:r.length,validVideos:l.length,validHowToSteps:s.length,hasTitle:t,hasMetadata:i,hasSupplies:a,hasInstructions:n})},u=e=>7===e.block_type,_=(e,t)=>!(!u(e)||!(e.blocks||[]).find((e=>t.includes(e.block_type)))),g=e=>!(!u(e)||!e.heading),m=e=>e.reduce(((e,t)=>[...e,...(t.blocks||[]).filter((e=>3===e.block_type&&!!e.video)).map((e=>(0,r.Z)(e.video)))]),[]),v=e=>e.filter((e=>2!==e.layout)),h=(e,t)=>(e||[]).filter((e=>0!==e.layout&&(e.blocks||[]).length)).find((e=>(e.blocks||[]).find((e=>e&&t.includes(e.block_type)))));function f(e,t){var i,a,o,r,d;if(1!==(null===(i=t.metadata)||void 0===i?void 0:i.template_type))return!1;const p=!!(0,n.RC)({storyPinDataMetadataPinTitle:null===(a=t.metadata)||void 0===a?void 0:a.pin_title,pinTitle:e}),u=!!t.metadata,f=!(null===(o=t.metadata)||void 0===o||null===(r=o.basics)||void 0===r||null===(d=r.list_blocks)||void 0===d||!d.find((e=>_(e,s)||g(e)))),b=!!h(t.pages,l),y=v(t.pages||[]),k=m(y),P=p&&u&&(f||b);return c({isEligible:P,validPages:y,validVideos:k,hasTitle:p,hasMetadata:u,hasIngredients:f,hasInstructions:b,hasNativeCreator:"N/A"}),P}const b=e=>{var t;return(null!==(t=e.pages)&&void 0!==t?t:[]).filter((e=>{var t;const i=null!==(t=e.blocks)&&void 0!==t?t:[],n=[];for(const a of i)0===a.block_type&&n.push(a.text);return!!n.join(" ")}))},y=({origin:e,pathname:t},i,n,o,l)=>{const s=b(o);let d=!1;const c=s.map((o=>{var s;const c=null!==(s=o.blocks)&&void 0!==s?s:[],p=[];for(const e of c)0===e.block_type&&p.push(e.text);const u=p.join(" "),_={"@type":"HowToStep",text:u};for(const v of c){if(3===v.block_type&&v.video){const o=(0,r.Z)(v.video),s=o.mp4||o.hlsv3;if(s){_.video=(0,a.dH)({origin:e,pathname:t},i,n,s,u,l,!1),d=!0;break}}if(2===v.block_type&&v.image){var g,m;const e=null===(g=v.image)||void 0===g||null===(m=g.images)||void 0===m?void 0:m.originals;if(e){_.image=e.url;break}}}return _}));return c.length>=2?{howToSteps:c,containsNestedVideo:d}:{howToSteps:[],containsNestedVideo:d}};function k(e,t){var i,a,o,r,l;if(!e||!t)return!1;if(2!==(null===(i=t.metadata)||void 0===i?void 0:i.template_type))return!1;const s=!!(0,n.RC)({storyPinDataMetadataPinTitle:null===(a=t.metadata)||void 0===a?void 0:a.pin_title,pinTitle:e.title}),c=!!t.metadata,u=!(null===(o=t.metadata)||void 0===o||null===(r=o.basics)||void 0===r||null===(l=r.list_blocks)||void 0===l||!l.find((e=>_(e,d)))),g=!!h(t.pages,[0,1]),f=v(t.pages||[]),y=m(f),k=b(t),P=s&&c&&u&&g&&k.length>=2;return p({isEligible:P,validPages:f,validVideos:y,hasTitle:s,hasMetadata:c,hasInstructions:g,hasSupplies:u,validHowToSteps:k}),P}const P=e=>{var t,i;return(null==e||null===(t=e.images)||void 0===t||null===(i=t.originals)||void 0===i?void 0:i.url)||""},T=e=>{const t=(e=>(e.pages||[]).find((e=>0===e.layout)))(e),i=P(null==t?void 0:t.image_adjusted)||P(null==t?void 0:t.image);if(i)return i;const n=((null==t?void 0:t.blocks)||[]).find((e=>e.image));return P(null==n?void 0:n.image)},w=e=>{var t,i,n;return(null!==(t=null===(i=e.metadata)||void 0===i||null===(n=i.basics)||void 0===n?void 0:n.list_blocks)&&void 0!==t?t:[]).filter((e=>e&&[7].includes(e.block_type)))},S=e=>{var t,i;const n=((null===(t=e.metadata)||void 0===t||null===(i=t.basics)||void 0===i?void 0:i.key_value_blocks)||[]).reduce(((e,{category_type:t,value:i})=>{if(!i)return e;if(0===t)e.cookTime=i;else if(1===t){const t=i.match(/\d+/);t&&(e.recipeYield=t[0])}else 2===t&&(e.difficulty=i);return e}),{cookTime:"0",recipeYield:"1",difficulty:"1"}),a=parseInt(n.cookTime,10)>0?n.cookTime:"0";return{prepTime:"PT0M",cookTime:`PT${a}M`,totalTime:`PT${(parseInt("0",10)+parseInt(a,10)).toString()}M`,recipeYield:parseInt(n.recipeYield,10),difficulty:parseInt(n.difficulty,10)>=1?n.difficulty:"1"}},D=e=>{if(!e)return[];const t=v(e.pages||[]);return m(t)},x=e=>{const t=e.length>0?e[0].mp4||e[0].hlsv3:null;let i=(0,a.us)((null==t?void 0:t.duration)||0)>=6;if(i||e.length<=1)return t;return e.map((e=>e.mp4||e.hlsv3)).find((e=>{const t=(0,a.us)((null==e?void 0:e.duration)||0);return i=(0,a.jt)(t),i}))||t}},150676:(e,t,i)=>{i.d(t,{Ad:()=>o,Ee:()=>u,LU:()=>d,QQ:()=>_,dH:()=>p,jt:()=>s,us:()=>r,yc:()=>l});var n=i(355091),a=i(352579);const o=0,r=e=>{const t=Math.floor(e/1e3);return t>=o?t:o},l=e=>e>=30,s=e=>e>=5,d=e=>`PT${r(e||o)}S`,c=e=>e?new Date(Date.parse(e)).toISOString():(new Date).toISOString();function p({origin:e,pathname:t},i,a,r,l,s,p){const{full_canonical_url:u}=null!=i?i:{},_=u||`${e}${t}`,g=a.title||"",m=a.seo_title||"",v=a.description||"",{fallbackTitle:h,fallbackDescription:f}=(0,n.fP)("video",g,s),{title:b,description:y}=(0,n.dn)(i,g,v,h,f,m),k=d(r.duration||o),P=r.url||"",T=c(a.created_at);let w;return p&&(w={"@type":"SeekToAction",target:`${_}?t={seek_to_second_number}`,"startOffset-input":"required name=seek_to_second_number"}),{"@type":"VideoObject","@context":"http://schema.org/","@id":_,name:b,description:y,caption:l||y,thumbnailUrl:r.thumbnail||"",uploadDate:T,duration:k||void 0,contentUrl:P,potentialAction:w}}const u=({origin:e,pathname:t},i,o,s,d,u)=>{let _;if(s){const a=(e=>{var t,i;const n=e.videos&&(null===(t=e.videos.video_list)||void 0===t?void 0:t.V_720P),a=e.videos&&(null===(i=e.videos.video_list)||void 0===i?void 0:i.V_HLSV4);return n||a})(o);if(a){const n=r(a.duration||0);_=p({origin:e,pathname:t},i,o,a,"",u,l(n))}else _=function({origin:e,pathname:t},i,a,o){var r,l,s;const{full_canonical_url:d}=null!=i?i:{},p=d||`${e}${t}`,u=a.title||"",_=a.description||"",g=a.seo_title||"",{fallbackTitle:m,fallbackDescription:v}=(0,n.fP)("video",u,o),h=c(a.created_at),f=null===(r=a.embed)||void 0===r?void 0:r.src,b=(null===(l=a.images)||void 0===l||null===(s=l.orig)||void 0===s?void 0:s.url)||"",{title:y,description:k}=(0,n.dn)(i,u,_,m,v,g);return y&&k&&f&&b?{"@type":"VideoObject","@context":"http://schema.org/","@id":p,name:y,description:k,thumbnailUrl:b,uploadDate:h,embedUrl:f}:null}({origin:e,pathname:t},i,o,u)}else{const n=(0,a.ky)(d);n&&(_=p({origin:e,pathname:t},i,o,n,"",u,!1))}return{videoJsonData:_}},_=({origin:e,pathname:t},i,a,s,p,u,_,g,m)=>{const v=r(a.duration||0),h=l(v),{full_canonical_url:f}=null!=i?i:{},b=f||`${e}${t}`,{fallbackTitle:y,fallbackDescription:k}=(0,n.fP)("video",u,s),{title:P,description:T}=(0,n.dn)(i,u,g,y,k,_),w=d(a.duration||o),S=a.url||"",D=c(m);let x;h&&(x={"@type":"SeekToAction",target:`${b}?t={seek_to_second_number}`,"startOffset-input":"required name=seek_to_second_number"});return{videoJsonData:{"@type":"VideoObject","@context":"http://schema.org/","@id":b,name:P,description:T,caption:T,thumbnailUrl:a.thumbnail||"",uploadDate:D,duration:w||void 0,contentUrl:S,potentialAction:x}}}},355091:(e,t,i)=>{i.d(t,{QO:()=>d,V3:()=>r,cO:()=>_,dn:()=>p,fP:()=>u,j1:()=>g,v_:()=>s});var n=i(898252),a=i(711777),o=i(98736);const r=e=>{const{thumbnail:t,url:i,width:n,height:a,duration:o}=e||{};return t&&i&&n&&a&&{thumbnail:t,url:i,width:n,height:a,duration:o}||void 0},l=({isEligible:e,hasName:t,hasAggregateRating:i,hasOffers:n})=>{(0,o.My)("closeup_main_pin.leaf_snippet.is_product",{isEligible:e,hasName:t,hasAggregateRating:i,hasOffers:n})};function s(e,t){if(t&&t.products&&t.products[0]){const i=t.products[0],n=!(!i.name&&!e),a=!(!t.aggregate_rating||0===t.aggregate_rating.rating_count&&0===t.aggregate_rating.review_count||Number.isNaN(parseFloat(t.aggregate_rating.rating_value))),o=!(!i.offer_summary||!i.offer_summary.min_price&&!i.offer_summary.price),r=n&&(a||o);return l({isEligible:r,hasName:n,hasAggregateRating:a,hasOffers:o}),r}return!1}const d=(e,{userName:t,fullName:i})=>{const n=t||"";return{"@type":"Person",name:i||n,url:e+"/"+n}},c=e=>(0,a.o)(e||"").trim();function p(e,t,i,n,a,o){i=i.trim();const r=(t=t.trim())||o||i||n,l=()=>t||a;if(!e||!e.metatags)return{title:r,description:i||l()};const{description:s=""}=e.metatags;return{title:r,description:c(s)||l()}}const u=(e,t,i)=>{let n=t;return i?(n="recipe"===e?i.bt("Pinterest 食谱", "Pinterest Recipe", "pin.closeup.leafsnippet.recipe", undefined, true):"howto"===e?i.bt("Pinterest 操作说明", "Pinterest How To", "pin.closeup.leafsnippet.howto", undefined, true):"video"===e?i.bt("Pinterest 视频", "Pinterest Video", "pin.closeup.leafsnippet.video", undefined, true):"product"===e?i.bt("Pinterest 产品", "Pinterest Product", "pin.closeup.leafsnippet.product", undefined, true):i.bt("Pin 图页面", "Pin page", "pin.closeup.leafsnippet.pin", undefined, true),{fallbackTitle:n,fallbackDescription:n}):{fallbackTitle:n,fallbackDescription:n}},_=e=>{if(!e)return;const t=e.rating_count,i=e.review_count;if(!(!!t||!!i)||Number.isNaN(parseFloat(e.rating_value)))return;const n=t||i;return{"@type":"AggregateRating",ratingValue:e.rating_value,ratingCount:n,bestRating:5,worstRating:1}},g=(e,t=!0)=>{var i,a,o,r;const l=!!(0,n.iR)(e.videos),s=t&&!!(0,n.cL)({embedSrc:null===(i=e.embed)||void 0===i?void 0:i.src,embedSubtype:null===(a=e.embed)||void 0===a?void 0:a.subtype,embedType:null===(o=e.embed)||void 0===o?void 0:o.type}),d=!(null===(r=e.story_pin_data)||void 0===r||!r.total_video_duration);return l||s||d}},711777:(e,t,i)=>{i.d(t,{Z:()=>a,o:()=>n});function n(e,t){const i=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>|<!--[\s\S]*/gi,"").replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,((e,t)=>i.indexOf("<"+t.toLowerCase()+">")>-1?e:""))}const a=e=>e.replace(/(<([^>]+)>)/gi,"")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/packages-rich-snippet-LeafSnippet.zh_CN-7f93b3117fffe340.mjs.map