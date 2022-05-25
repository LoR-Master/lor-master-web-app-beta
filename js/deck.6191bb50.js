(function(){var e={34295:function(e,t,r){"use strict";var o=r(74639),a=r(29284),s=(r(69024),r(83744));const n=(0,s.Z)(a.Z,[["render",o.s],["__scopeId","data-v-605b8a64"]]);t["Z"]=n},8670:function(e,t,r){"use strict";var o=r(36032),a=r(8546),s=(r(80396),r(83744));const n=(0,s.Z)(a.Z,[["render",o.s],["__scopeId","data-v-96011ed4"]]);t["Z"]=n},76578:function(e,t,r){"use strict";r.d(t,{aA:function(){return u},dm:function(){return h}});var o=r(6050),a=r(27254),s=r(12195),n=r(51323),i=r(4083),c=r(86245),l=r(72218);const d={AM:0,EU:1,APAC:2},h=["AM","EU","APAC"],u=["americas","europe","apac"];const p="lmt-settings-leaderboard-region";var f={components:{LeaderboardPlayer:a.Z,LadderHighlight:l.Z},mounted(){let e=window.localStorage.getItem(p);e&&(this.activeRegionID=e),this.fetchLeaderboard(this.activeRegionID),setTimeout((()=>{this.$refs.leaderboardInput.focus()}),25)},data(){return{rawPlayers:[],activeRegionID:0,regions:d,request:null,searchText:"",signedIn:!1,dataStartTime:0,selectedIndex:0,REGION_SHORTS:h,dateFNSLocales:n.dateFNSLocales,inputFocused:!1}},emits:{search:({region:e,name:t,tag:r})=>!!(e&&t&&r)||(console.warn("Invalid submit event payload!"),!1)},computed:{...(0,c.rn)(i.P,{leaderboard:"leaderboard",isLoading:"leaderboardLoading",updateTime:"leaderboardUpdateTime"}),filteredPlayers(){if(!this.leaderboard||!this.leaderboard[this.activeRegionID])return null;if(this.searchText){for(var e=this.searchText,t=[],r=this.leaderboard[this.activeRegionID],o=0;o<r.length;o++)-1!==r[o].name.toLowerCase().indexOf(e.toLowerCase())&&t.push(r[o]);return t.push({name:e,rank:"",lp:0,deck:null,winRate:0,lastRankTime:""}),t}return this.leaderboard[this.activeRegionID]},searchPlaceHolder(){return this.leaderboard&&this.leaderboard[this.activeRegionID]?this.$t("search.leaderboard.numPlayer",{num:this.leaderboard[this.activeRegionID].length}):this.$t("search.leaderboard.base")}},methods:{...(0,c.nv)(i.P,["fetchLeaderboard"]),formatDistanceStrict:s.Z,selectTopItem(){const e=this.$refs.scroller,t=e.$el;let r=Math.ceil(t.scrollTop/64);this.selectedIndex=r},onInputFocus(){this.inputFocused=!0,this.selectTopItem()},onInputBlur(){this.inputFocused=!1},setLeaderBoardPlayerRefs(e){e&&console.log(e)},onKeyUp(e){const t=this.$refs.scroller,r=t.$el;if("ArrowDown"==e.key)if(this.selectedIndex+=1,this.selectedIndex>this.filteredPlayers.length-1)this.selectedIndex=0,t.scrollToItem(0);else{let e=64*this.selectedIndex-r.getBoundingClientRect().height+64;r.scrollTop<e&&this.$refs.scroller.scrollToPosition(e)}else if("ArrowUp"==e.key)if(this.selectedIndex-=1,this.selectedIndex<0)this.selectedIndex=this.filteredPlayers.length-1,this.$refs.scroller.scrollToItem(this.selectedIndex);else{let e=64*this.selectedIndex;r.scrollTop>e&&this.$refs.scroller.scrollToItem(this.selectedIndex)}else if("Enter"==e.key){let e=this.filteredPlayers[this.selectedIndex];this.searchPlayer(e)}else this.filteredPlayers.length>5?this.selectTopItem():this.selectedIndex=this.filteredPlayers.length-1},clearSearch(){this.searchText="",document.querySelector("#search-input").focus()},switchRegion(e){this.sendUserEvent({category:"Main Window Leaderboard",action:"Select Region",label:u[e],value:null}),this.activeRegionID!=e&&(this.fetchLeaderboard(e),this.activeRegionID=e,window.localStorage.setItem(p,e))},searchPlayer(e){e.tag?this.$router.push({name:"search",query:{name:e.name,tag:e.tag,region:h[this.activeRegionID]}}):this.$router.push({name:"search",query:{name:e.name}})}}},g=(r(23461),r(83744));o.s},64477:function(e,t,r){"use strict";r.d(t,{v:function(){return a.v}});var o=r(31228),a=r(45786),s=(r(80569),r(83744));a.Z,o.s},93519:function(e,t,r){"use strict";var o=r(19120),a=[],s={};o.forEach((e=>{e.forEach((e=>{if("Champion"==e.rarityRef&&e.collectible){var t=e.cardCode;a.push(t),s[t]=t}}))})),t["Z"]={champions:a,champObj:s}},58238:function(e){e.exports={isLocalApiEnable:!0,language:"en-US",lorRunning:!0,playerId:"FlyingFish#1111",port:"21337",server:"americas"}},45477:function(e){e.exports={deck_tracker:{cardsInDeck:{"01DE007":1,"01DE015":2,"01DE026":3,"02DE001":2,"03DE006":2,"03DE008":3,"03DE014":3,"03MT003":1,"03MT009":3,"03MT035":2,"03MT051":2,"03MT057":3,"03MT085":1,"03MT086":2,"03MT087":3,"03MT096":2,"03MT100":2,"05BC175":3},cardsInHandNum:0,currentDeckCode:"CQBQCBIKV4AQEAYABAHAEAYJHFLQIAICAAAQCAYAAYBACAAPDICAGCIJENQGIAQBAEAAOAYDBEBVKVQ",deckCode:"CQCACAIADIAQKCVPAEBAGAAIBYBQGCIJHFLQIAIBAAHQCAQAAEAQGAAGAUBQSIZTKZQGIAQBAEAAOAQDBEBVK",myGraveyard:{},myGraveyardCode:"CEAAAAA",myPlayedCards:{"01DE007":1,"01DE015":2,"01DE026":3,"02DE001":2,"03DE006":2,"03DE008":3,"03DE014":3,"03MT003":1,"03MT009":3,"03MT035":2,"03MT051":2,"03MT057":3,"03MT085":1,"03MT086":2,"03MT087":3,"03MT096":2,"03MT100":2,"05BC175":3},myPlayedCardsCode:"CQCACAIADIAQKCVPAEBAGAAIBYBQGCIJHFLQIAIBAAHQCAQAAEAQGAAGAUBQSIZTKZQGIAQBAEAAOAQDBEBVK",opGraveyard:{"01IO009":1,"01IO009T1":1,"03NX001":1},opGraveyardCode:"CEAAAAQBAEBASAIDAMAQ",openHand:{},opponentName:"decks_easythresh_name",opponentTag:null,replacedHand:{},timeline:[{CardCode:"face",CardID:40432923,Height:117,LocalPlayer:!1,TopLeftX:179,TopLeftY:716,Width:117,playTime:"2021-11-05T15:35:28.612171",showTime:"2021-11-05T15:35:28.612171"}]},positional_rectangles:{GameState:"InProgress",OpponentName:"Lumus11",PlayerName:"FlyingFish",Rectangles:[{CardCode:"face",CardID:2046151542,Height:117,LocalPlayer:!0,TopLeftX:179,TopLeftY:481,Width:117},{CardCode:"face",CardID:40432923,Height:117,LocalPlayer:!1,TopLeftX:179,TopLeftY:716,Width:117}],Screen:{ScreenHeight:1080,ScreenWidth:1920}}}},22335:function(e,t,r){const o=r(11540);e.exports=class{constructor(e,t){this.code=e,this.count=t}static from(e,t,r,o){return new this(e+t+r,o)}static fromCardString(e){const[t,r]=e.split(":");return new this(r,parseInt(t))}get set(){return parseInt(this.code.substring(0,2))}get faction(){return o.fromCode(this.code.substring(2,4))}get id(){return parseInt(this.code.substring(4,7))}get version(){return o.getVersion(this.code.substring(2,4))}}},99981:function(e,t,r){const o=r(81604),a=r(85632),s=r(22335),n=r(11540);class i{static decode(e){const t=[];let r=null;try{r=o.decode(e)}catch(h){throw new TypeError("Invalid deck code")}const c=r.shift(),l=c>>4,d=15&c;if(l!==i.FORMAT)throw new TypeError("The provided code does not match the required format.");if(d>i.MAX_KNOWN_VERSION)throw new TypeError("The provided code requires a higher version of this library; please update.");for(let o=3;o>0;o--){const e=a.pop(r);for(let i=0;i<e;i++){const e=a.pop(r),i=a.pop(r),c=a.pop(r);for(let l=0;l<e;l++){const e=a.pop(r),l=i.toString().padStart(2,"0"),d=n.fromID(c).shortCode,h=e.toString().padStart(3,"0");t.push(s.from(l,d,h,o))}}}while(r.length>0){const e=a.pop(r),o=a.pop(r),i=a.pop(r),c=a.pop(r),l=o.toString().padStart(2,"0"),d=n.fromID(i).shortCode,h=c.toString().padStart(3,"0");t.push(s.from(l,d,h,e))}return t}static encode(e){if(!this.isValidDeck(e))throw new TypeError("The deck provided contains invalid card codes");const t=this.groupByFactionAndSetSorted(e.filter((e=>3===e.count))),r=this.groupByFactionAndSetSorted(e.filter((e=>2===e.count))),a=this.groupByFactionAndSetSorted(e.filter((e=>1===e.count))),s=e.filter((e=>e.count>3));return o.encode([i.FORMAT<<4|15&e.reduce(((e,t)=>Math.max(e,t.version)),0),...this.encodeGroup(t),...this.encodeGroup(r),...this.encodeGroup(a),...this.encodeNofs(s)])}static encodeNofs(e){return e.sort(((e,t)=>e.code.localeCompare(t.code))).reduce(((e,t)=>(e.push(...a.get(t.count)),e.push(...a.get(t.set)),e.push(...a.get(t.faction.id)),e.push(...a.get(t.id)),e)),[])}static encodeGroup(e){return e.reduce(((e,t)=>{e.push(...a.get(t.length));const r=t[0];e.push(...a.get(r.set)),e.push(...a.get(r.faction.id));for(const o of t)e.push(...a.get(o.id));return e}),a.get(e.length))}static isValidDeck(e){return e.every((e=>7===e.code.length&&!isNaN(e.id)&&!isNaN(e.count)&&e.faction&&e.count>0))}static groupByFactionAndSetSorted(e){const t=[];while(e.length>0){const r=[],o=e.shift();r.push(o);for(let t=e.length-1;t>=0;t--){const a=e[t];o.set===a.set&&o.faction.id===a.faction.id&&(r.push(a),e.splice(t,1))}t.push(r)}return t.sort(((e,t)=>e.length-t.length)).map((e=>e.sort(((e,t)=>e.code.localeCompare(t.code)))))}}i.MAX_KNOWN_VERSION=5,i.FORMAT=1,i.INITIAL_VERSION=1,e.exports=i},34069:function(e,t,r){"use strict";var o=r(66252),a=r(3577);const s={class:"flex h-full max-w-[290px] flex-col pt-[35px] text-white 2xs:pt-[45px]"},n={class:"flex h-full flex-col"},i={key:0,class:"px-1 pt-2"},c={key:1,class:"flex w-full justify-around gap-1 px-1 text-gray-200"},l=(0,o._)("i",{class:"fas fa-telescope"},null,-1),d=[l],h=(0,o._)("i",{class:"fas fa-user-cowboy"},null,-1),u=[h],p=(0,o._)("i",{class:"fas fa-tombstone"},null,-1),f=[p],g={class:"mt-1 h-0 flex-1 overflow-y-auto",ref:"scrollContainer"},m={key:0,class:"px-1 pt-1"},y={key:0,class:"pt-1.5 pb-2 text-center"},b={key:1,class:""},v={key:1},w={key:2},k={class:"sticky top-0 z-10 bg-gray-900 py-1 px-2 text-left text-xs text-gray-200 2xs:text-sm"},x=(0,o._)("i",{class:"fas fa-axe-battle"},null,-1),C={key:3},T={class:"sticky top-0 z-10 bg-gray-900 py-1 px-2 text-left text-xs text-gray-200 2xs:text-sm"},I=(0,o._)("i",{class:"fas fa-sword"},null,-1),A={key:4},D=(0,o._)("div",{class:""},null,-1),_={key:2,class:"flex h-8 w-full flex-col justify-center text-base 2xs:h-10"},E={class:"flex w-full items-center gap-2"},S={class:"w-0 flex-1"},O=(0,o._)("i",{class:"fas fa-dice pr-1.5 text-gray-200"},null,-1),L={class:"w-5"},P={class:"flex w-0 flex-1 items-baseline justify-center text-gray-200"},N=(0,o._)("i",{class:"fas fa-scroll-old"},null,-1),R={class:"pl-2 text-white"},B=(0,o._)("span",{class:"pr-2 text-sm"},"/10",-1);function M(e,t,r,l,h,p){const M=(0,o.up)("base-window-controls"),H=(0,o.up)("match-oppo-info"),q=(0,o.up)("tracker-deck-lib"),G=(0,o.up)("deck-detail");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(M,{canClose:!1,canShrink:!0,playerName:h.oppoName,playerRank:p.oppoInfo.rank,playerLP:p.oppoInfo.lp,titleType:"match"},null,8,["playerName","playerRank","playerLP"]),(0,o._)("div",n,[p.isLoading?((0,o.wg)(),(0,o.iD)("div",i,(0,a.zw)(e.$t("loading.readyToRock")),1)):(0,o.kq)("",!0),p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",{class:(0,a.C_)(["flex-1 cursor-pointer rounded-lg bg-gray-700 py-0.5 text-center text-sm hover:bg-gray-500 hover:text-white 2xs:text-base",{"bg-gray-500 text-gray-100":this.currentTab==h.TABS.oppo}]),onClick:t[0]||(t[0]=e=>p.switchTab(h.TABS.oppo))},d,2),(0,o._)("div",{class:(0,a.C_)(["flex-1 cursor-pointer rounded-lg bg-gray-700 py-0.5 text-center text-sm hover:bg-gray-500 hover:text-white 2xs:text-base",{"bg-gray-500 text-gray-100":this.currentTab==h.TABS.my}]),onClick:t[1]||(t[1]=e=>p.switchTab(h.TABS.my))},u,2),(0,o._)("div",{class:(0,a.C_)(["flex-1 cursor-pointer rounded-lg bg-gray-700 py-0.5 text-center text-sm hover:bg-gray-500 hover:text-white 2xs:text-base",{"bg-gray-500 text-gray-100":this.currentTab==h.TABS.grave}]),onClick:t[2]||(t[2]=e=>p.switchTab(h.TABS.grave))},f,2)])),(0,o._)("div",g,[this.currentTab!=h.TABS.oppo||p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",m,[h.matchInfos.length<=0?((0,o.wg)(),(0,o.iD)("div",y,(0,a.zw)(p.loadingOppoText),1)):(0,o.kq)("",!0),h.matchInfos&&h.matchInfos.length>0?((0,o.wg)(),(0,o.iD)("div",b,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.matchInfos,((e,t)=>((0,o.wg)(),(0,o.j4)(H,{key:e.opponentName,opponentName:e.opponentName,rounds:e.rounds,time:e.time,startTime:e.startTime,matches:e.matches,winrate:e.winrate,badges:e.badge,opponentDeck:e.opponentDeck,deck:e.deckCode,total:p.matchTotalNum,history:e.history,expanded:e.expanded,onOpen:e=>p.onMatchOppoOpen(t)},null,8,["opponentName","rounds","time","startTime","matches","winrate","badges","opponentDeck","deck","total","history","expanded","onOpen"])))),128))])):(0,o.kq)("",!0)])),this.currentTab!=h.TABS.oppo||p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(q)])),this.currentTab!=h.TABS.grave||p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",k,[x,(0,o.Uk)(" "+(0,a.zw)(e.$t("tracker.tabs.oppoPlayed")),1)]),(0,o.Wm)(G,{deck:h.oppoGraveCode,baseDeck:h.oppoGraveCode,showCopy:!1,extra:h.oppoGraveExtraCards},null,8,["deck","baseDeck","extra"])])),this.currentTab!=h.TABS.grave||p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",T,[I,(0,o.Uk)(" "+(0,a.zw)(e.$t("tracker.tabs.myPlayed")),1)]),(0,o.Wm)(G,{baseDeck:h.myPlayedCode,showCopy:!1,extra:h.myPlayedExtraCards},null,8,["baseDeck","extra"])])),this.currentTab!=h.TABS.my||p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",A,[(0,o.Wm)(G,{deck:h.currentDeckCode,baseDeck:h.startingDeckCode,showCopy:!1,onCard:p.onCardHover},null,8,["deck","baseDeck","onCard"])]))],512),D,p.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",E,[(0,o._)("div",S,[(0,o._)("div",{class:(0,a.C_)(["flex items-center justify-center transition-opacity",{"opacity-100":h.showCardProb,"opacity-0":!h.showCardProb}])},[O,(0,o._)("div",L,(0,a.zw)(h.cardProb)+"%",1)],2)]),(0,o._)("div",P,[N,(0,o._)("span",R,(0,a.zw)(h.cardsInHandNum),1),B])])]))])])}var H=r(49963);const q={class:"mb-1.5 flex w-full flex-col rounded-md bg-gray-800 px-2 py-1 2xs:mb-2"},G=(0,o._)("div",{class:"text-gray-200"},[(0,o._)("i",{class:"fas fa-grip-horizontal"})],-1),$={class:"bg-gray-800"},W={class:"2cs:text-sm pt-1 pl-1 text-xs text-gray-200"},j=(0,o._)("i",{class:"fas fa-history pr-1"},null,-1),Q={class:"flex flex-wrap gap-x-1 gap-y-1.5 px-1 pb-2 pt-2"},Z={class:"flex flex-wrap gap-x-1 gap-y-1.5 px-1 pb-2 pt-2"},F={class:"flex items-baseline gap-x-1.5 whitespace-nowrap pb-1 text-xs text-gray-200 2xs:text-sm"},V={class:""},z={class:""},U={class:"w-full"};function Y(e,t,r,s,n,i){const c=(0,o.up)("tooltip"),l=(0,o.up)("deck-preview"),d=(0,o.up)("deck-detail");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",q,[(0,o._)("div",{class:"flex items-baseline gap-1.5 text-sm 2xs:gap-2 2xs:text-base",style:(0,a.j5)({color:i.winRateColor})},[(0,o._)("div",null,(0,a.zw)(e.$t("matches.winRate",{num:(100*i.winRate).toFixed(0)})),1),(0,o.Wm)(c,{placement:"bottom",allowedPlacements:["bottom"]},{float:(0,o.w5)((t=>[(0,o._)("div",{class:(0,a.C_)(["pointer-events-none z-10 w-full px-2 transition-opacity",{"opacity-0":!t.visible,"opacity-100":t.visible}])},[(0,o._)("div",$,[(0,o._)("div",W,[j,(0,o.Uk)((0,a.zw)(e.$t("str.history")),1)]),(0,o._)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.history.split(""),((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o._)("div",{class:(0,a.C_)(["h-2 w-2 rounded 2xs:h-3 2xs:w-3",{"bg-gray-500":"E"==e,"bg-red-500":"L"==e,"bg-sky-400":"W"==e}]),style:(0,a.j5)({opacity:1-.7*t/r.total})},null,6)])))),128))])])],2)])),default:(0,o.w5)((()=>[G])),_:1})],4),(0,o._)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.history.split("").slice(0,10),((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o._)("div",{class:(0,a.C_)(["h-2 w-2 rounded 2xs:h-3 2xs:w-3",{"bg-gray-500":"E"==e,"bg-red-500":"L"==e,"bg-sky-400":"W"==e}]),style:(0,a.j5)({opacity:1-.7*t/10})},null,6)])))),128))]),(0,o._)("div",F,[(0,o._)("div",V,(0,a.zw)(i.gamesString),1),(0,o._)("div",z,(0,a.zw)(i.timeString),1)]),(0,o._)("div",U,[(0,o.Wm)(l,{onClick:i.showDeck,clickToShow:!1,class:"w-full gap-0.5 py-1 text-xs hover:bg-white/10 2xs:gap-1 2xs:py-1.5 2xs:text-sm",deck:r.deck},null,8,["onClick","deck"])])]),(0,o.Wm)(H.uT,{name:"height"},{default:(0,o.w5)((()=>[r.expanded?((0,o.wg)(),(0,o.j4)(d,{key:0,baseDeck:r.deck,hideNum:!0},null,8,["baseDeck"])):(0,o.kq)("",!0)])),_:1})])}var K=r(66516),J=r(67161),X=r(86933),ee=r(2262),te=r(34878),re=r(45557);var oe={props:{placement:{type:String,default:"top"},allowedPlacements:{type:Array,default:()=>["top","bottom"]}},setup(e,{attrs:t,slots:r}){(0,ee.iH)(1);(0,o.h)("div",r.default());const a=(0,ee.iH)(null),s=(0,ee.iH)(null),n=(0,ee.iH)(!1),i=()=>{n.value=!0},c=()=>{n.value=!1},l=()=>{(0,te.oo)(a.value,s.value,{strategy:"fixed",placement:e.placement,middleware:[(0,re.X5)({allowedPlacements:e.allowedPlacements}),(0,re.uY)()]}).then((({x:e,y:t,placement:r})=>{Object.assign(s.value.style,{left:`${e}px`,top:`${t}px`})}))};return(0,o.bv)((()=>{l()})),(0,o.ic)((()=>{l()})),()=>[(0,o.h)(r.default()[0],{ref:e=>a.value=e,onMouseenter:i,onMouseleave:c}),(0,o.h)(r.float({visible:n.value})[0],{style:"position:fixed;",ref:e=>s.value=e})]}};const ae=oe;var se=ae,ne={components:{DeckDetail:K.Z,DeckPreview:J.Z,Tooltip:se},mounted(){this.subscribeData()},data(){return{visibleDeck:0}},props:{opponentName:String,rounds:Number,deck:String,opponentDeck:String,time:String,startTime:String,matches:Number,badges:Array,total:Number,history:String,expanded:Boolean},computed:{timeString(){var e,t=new Date(this.startTime),r=Date.now()-t,o=r/1e3,a=o/60,s=a/60,n=s/24;return e=o<60?this.$t("str.times.sec",{t:Math.floor(o)}):a<60?this.$t("str.times.min",{t:Math.floor(a)}):s<24?1==Math.floor(s)?this.$t("str.times.hour",{t:Math.floor(s)}):this.$t("str.times.hours",{t:Math.floor(s)}):n<7?1==Math.floor(n)?this.$t("str.times.day",{t:Math.floor(n)}):this.$t("str.times.days",{t:Math.floor(n)}):t.toLocaleDateString(),e},opponentLink(){return"/profile/"+this.opponentName},won(){return!0},useRate(){return Math.floor(this.matches/this.total*100)},winRateColor(){return(0,X.ik)(this.winRate)},winRate(){return this.wonNum/this.matches},wonNum(){return(this.history.match(/W/g)||[]).length},lostNum(){return(this.history.match(/L/g)||[]).length},gamesString(){return this.matches>1?this.$t("matches.games",{num:this.matches}):this.$t("matches.game",{num:this.matches})}},emits:["open"],methods:{showDeck(){this.$emit("open")},showOpponentDeck(){2==this.visibleDeck?this.visibleDeck=0:this.visibleDeck=2},subscribeData(){},isWonGame(e){var t=e-1;return!(t>=this.history.length)&&"W"==this.history[t]},isPlayedGame(e){var t=e-1;return!(t>=this.history.length)&&("W"==this.history[t]||"L"==this.history[t])}}},ie=r(83744);const ce=(0,ie.Z)(ne,[["render",Y]]);var le=ce,de=r(9669),he=r.n(de),ue=r(71763),pe=(r(8670),r(99981)),fe=r.n(pe),ge=(r(22335),r(86245));var me=r(32449),ye=r(7069),be=r(52843);const ve=3e5;J.Z,K.Z,be.t,me.Z,ye.Z;var we=r(4083),ke=r(63452),xe=r(60385);const Ce={class:"px-1 pb-1 text-xs text-gray-200 2xs:text-sm"},Te=(0,o._)("i",{class:"fas fa-star pr-1"},null,-1),Ie=["onClick"],Ae={class:"mx-1 mb-1.5 bg-gray-800 pb-1.5 2xs:mb-2"},De={class:"overflow-x-hidden text-ellipsis whitespace-nowrap px-2 pt-2 pb-1 text-sm text-gray-100"},_e={class:"px-2 pb-1 text-xs text-gray-200"},Ee={class:"px-2"};var Se={setup(e){const t=(0,ee.iH)([]);function r(e){const t=(0,xe.u)();t.decks[e].expanded=!t.decks[e].expanded}return(0,o.bv)((async()=>{const e=(0,xe.u)();await e.initStore(),t.value=e.decks})),(e,s)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",Ce,[Te,(0,o.Uk)((0,a.zw)(e.$t("decklib.title")),1)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:e.date,onClick:e=>r(t)},[(0,o._)("div",Ae,[(0,o._)("div",De,(0,a.zw)(e.title),1),(0,o._)("div",_e,(0,a.zw)((0,ee.SU)(me.Z)(new Date(e.date),"HH:mm | yyyy-MM-dd")),1),(0,o._)("div",Ee,[(0,o.Wm)(J.Z,{class:"w-full gap-0.5 py-1 text-xs hover:bg-white/10 2xs:gap-1 2xs:py-1.5 2xs:text-sm",deck:e.code},null,8,["deck"])])]),(0,o.Wm)(H.uT,{name:"height"},{default:(0,o.w5)((()=>[e.expanded?((0,o.wg)(),(0,o.j4)(K.Z,{key:0,baseDeck:e.code},null,8,["baseDeck"])):(0,o.kq)("",!0)])),_:2},1024)],8,Ie)))),128))]))}};const Oe=Se;var Le=Oe;const Pe=r(45477),Ne=r(58238),Re=100,Be=1e3,Me=["americas","europe","asia","sea"],He={oppo:0,my:1,grave:3,decklib:4},qe={base:0,decklib:1,deckdetail:2};ke.E.API_WEB;var Ge,$e,We={components:{BaseWindowControls:ue.Z,MatchOppoInfo:le,DeckDetail:K.Z,TrackerDeckLib:Le},data(){return{rawDataString:null,matchInfos:[],request:null,deckCode:null,titleType:null,currentTab:He.my,LAYERS:qe,TABS:He,tabScrollTops:[],cardsInHandNum:null,currentDeckCode:null,startingDeckCode:null,oppoGraveCode:null,myPlayedCode:null,oppoPinnedId:null,startingExtraCards:null,myGraveExtraCards:null,myPlayedExtraCards:null,oppoGraveExtraCards:null,oppoName:null,oppoRank:null,oppoLp:null,requestOpponentHistoryError:null,isLoadingOpponentHistory:!1,lorRunning:!1,currentLayer:0,showCardProb:!1,cardProb:null}},computed:{...(0,ge.rn)(we.P,["leaderboard","leaderboardLoading"]),oppoInfo(){return this.oppoLeaderboard?{rank:this.oppoLeaderboard.rank,lp:this.oppoLeaderboard.lp}:{rank:null,lp:null}},isLoading(){return!this.currentDeckCode&&!this.startingDeckCode&&(!(this.matchInfos.length>0)&&(null==this.oppoName||""==this.oppoName||0==this.matchInfos.length))},oppoLeaderboard(){if(!this.oppoName)return null;var e=Me.indexOf(this.server);if(e>=0){console.log("Leaderboard access from deck tracker");var t=this.leaderboard;if(t&&t[e])return t[e].find((e=>e.name==this.oppoName))}return null},loadingOppoText(){return this.requestOpponentHistoryError?this.$t("loading.nohistory"):this.isLoadingOpponentHistory?this.$t("loading.history"):this.$t("loading.nohistory")},matchTotalNum(){return this.matchInfos.reduce(((e,t)=>e+t.matches),0)}},mounted(){console.log("Page Deck Mounted"),this.IS_ELECTRON&&(this.initPortNum(),this.initUILocale(),window.ipcRenderer.on("request-test-history",(e=>{this.requestTestOppoHistory()}))),this.requestStatusInfo(),this.requestTrackInfo()},methods:{...(0,ge.nv)(ke.E,["changeLocale","initPortNum"]),...(0,ge.nv)(we.P,["fetchLeaderboard"]),onMatchOppoOpen(e){this.matchInfos[e].expanded=!this.matchInfos[e].expanded},initUILocale(){window.ipcRenderer.send("request-store","ui-locale"),window.ipcRenderer.on("reply-store-ui-locale",((e,t)=>{t&&this.$i18n&&this.$i18n.locale&&(this.$i18n.locale=t,console.log("Change locale to",t))})),window.ipcRenderer.on("to-change-locale",((e,t)=>{this.$i18n.locale=t,console.log("Changing locale to",t)}))},hideWindow(){window.hideWindow&&window.hideWindow()},makeWindowVisible(){window.makeVisible&&window.makeVisible()},switchTab(e){this.currentTab!=e&&(this.IS_ELECTRON&&this.sendUserEvent({category:"Tracker Event",action:"Switch Tab",label:"From: "+this.currentTab+" | To: "+e,value:null}),this.tabScrollTops[this.currentTab]=this.$refs.scrollContainer.scrollTop,this.currentTab=e,setTimeout((()=>{this.$refs.scrollContainer.scrollTo({top:this.tabScrollTops[this.currentTab],left:0,behavior:"smooth"})}),10))},requestOpponentHistory(){this.isLoadingOpponentHistory=!0,this.requestOpponentHistoryError=null;var e=`${this.API_WEB}/history/${this.server}/${this.oppoName}`;console.log("Request Opponent History, api:",e),he().get(e).then((e=>{console.log("Opponent Data",e.data),this.isLoadingOpponentHistory=!1,this.processOpponentHistory(e.data)})).catch((e=>{he().isCancel(e)?console.log("Request cancelled"):(console.log("error",e),this.requestOpponentHistoryError=e)}))},requestTestOppoHistory(){const e=`${this.API_WEB}/history/americas/storm`;he().get(e).then((e=>{console.log("Opponent Data",e.data),this.processOpponentHistory(e.data)})).catch((e=>{he().isCancel(e)?console.log("Request cancelled"):console.log("error",e)}))},requestStatusInfo(){if(this.IS_ELECTRON)$e=Date.now(),he().get(`${this.apiBase}/status`).then((e=>{var t=Date.now()-$e;if(e&&e.data){var r=e.data;if(r.server&&this.server!=r.server){this.server=r.server;var o=Me.indexOf(this.server);this.fetchLeaderboard(o)}if(r.language){var a=r.language.replace("-","_").toLowerCase();this.locale!=a&&(console.log("Switch Locale",this.locale,a),this.changeLocale(a))}}else console.log("/status parse data error");Be>t?setTimeout(this.requestStatusInfo,Be-t):setTimeout(this.requestStatusInfo,100)})).catch((e=>{he().isCancel(e)?console.log("Request cancelled"):(console.log("error",e),setTimeout(this.requestStatusInfo,100))}));else{var e=Ne;this.server=e.server;var t=Me.indexOf(this.server);if(t>=0&&this.fetchLeaderboard(t),e.language){var r=e.language.replace("-","_").toLowerCase();this.locale!=r&&(console.log("Switch Locale",this.locale,r),this.changeLocale(r))}}},requestOppoInfo(){this.requestOpponentHistory()},requestTrackInfo(){this.IS_ELECTRON?(Ge=Date.now(),he().get(`${this.apiBase}/track`).then((e=>{e&&e.data?this.processTrackInfo(e.data):console.log("/track parse data error");var t=Date.now()-Ge;Re>t?setTimeout(this.requestTrackInfo,Re-t):setTimeout(this.requestTrackInfo,100)})).catch((e=>{console.log("error",e);var t=Date.now()-Ge;Re>t?setTimeout(this.requestTrackInfo,Re-t):setTimeout(this.requestTrackInfo,100)}))):setTimeout(this.processTrackInfo(Pe),1500)},processTrackInfo(e){if(e.positional_rectangles&&e.positional_rectangles.OpponentName){var t=e.positional_rectangles.OpponentName;t.includes("_")?(this.oppoName="AI",this.makeWindowVisible()):this.oppoName&&this.oppoName.toLowerCase()==t.toLowerCase()||(console.log("Track Info:",t),this.oppoName=t,this.requestOppoInfo(),this.makeWindowVisible())}else this.oppoName=null,this.oppoRank=null,this.oppoLp=null,this.matchInfos=[];if(e.deck_tracker){let t,o,a,s;e.deck_tracker.deckCode&&(this.makeWindowVisible(),null==this.startingDeckCode&&this.handleGameStart());try{t=fe().encodeCardsObj(e.deck_tracker.cardsInDeck),o=fe().encodeCardsObj(e.deck_tracker.myGraveyard),a=fe().encodeCardsObj(e.deck_tracker.myPlayedCards),s=fe().encodeCardsObj(e.deck_tracker.oppoGraveCards),this.startingExtraCards=t.extra,this.myGraveExtraCards=o.extra,this.myPlayedExtraCards=a.extra,this.oppoGraveExtraCards=s.extra,this.startingDeckCode=e.deck_tracker.deckCode||t.code,this.currentDeckCode=e.deck_tracker.currentDeckCode||t.code,this.oppoGraveCode=e.deck_tracker.opGraveyardCode||s.code,this.myPlayedCode=e.deck_tracker.myPlayedCardsCode||a.code,this.cardsInHandNum=e.deck_tracker.cardsInHandNum}catch(r){console.log(r)}}else null!=this.startingDeckCode&&(console.log("Handle Game End"),this.handleGameEnd()),this.startingDeckCode=null,this.currentDeckCode=null,this.myPlayedCode=null,this.oppoGraveCode=null,this.cardsInHandNum=null,this.startingExtraCards=null,this.myGraveExtraCards=null,this.myPlayedExtraCards=null,this.oppoGraveExtraCards=null,this.hideWindow()},processOpponentHistory(e){console.log("Process Json Data"),JSON.stringify(this.matchInfos)!=JSON.stringify(e)&&(console.log("New Match Info"),window.showWindow&&window.showWindow(),this.switchTab(He.oppo)),this.matchInfos=e},handleGameEnd(){this.IS_ELECTRON&&window.ipcRenderer.send("game-end-trigger")},handleGameStart(){this.IS_ELECTRON&&window.ipcRenderer.send("game-start-trigger")},onCardHover(e){e?(this.showCardProb=!0,this.cardProb=(e.count/e.all*100).toFixed(1)):this.showCardProb=!1},onOpenDecklib(){this.currentLayer=qe.decklib},setLayer(e){this.currentLayer=e},onLayerBack(){this.currentLayer-=1}}};const je=(0,ie.Z)(We,[["render",M]]);var Qe=je,Ze=r(78220);const Fe=(0,Ze.ZP)(Qe);Fe.mount("#app")}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,function(){var e=[];r.O=function(t,o,a,s){if(!o){var n=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var s=Object.create(null);r.r(s);var n={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&o;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){n[e]=function(){return o[e]}}));return n["default"]=function(){return o},r.d(s,n),s}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{68:"67c578ce",278:"c6d1baba",420:"68351bed",531:"893e3714",702:"94a6c0a1",733:"b2936e11",840:"53297e78",978:"b0d3a499",1043:"fd628ee5",1156:"ce8113a7",1244:"6a937bb1",1288:"c2bc5265",1359:"bc3a3e33",1715:"66b765a9",1730:"144dde25",1778:"a25e99fd",1796:"b3a4f8ca",1823:"a0225522",1842:"8f042041",1982:"edd0e745",2138:"998e1b1c",2166:"59a375ea",2258:"08da6c16",2357:"10249c8a",2435:"2a7466fe",2445:"7fb0e3e6",2477:"31170e41",2682:"0c7cc09f",2768:"2750a6ea",2931:"d0bf8a76",3037:"f63ca8b2",3185:"2016224d",3247:"056a4e30",3376:"1a788d54",3382:"4519f4fe",3417:"de764759",3432:"5bd39030",3594:"2d4858aa",3648:"f8ab9672",4113:"2845187d",4159:"d032e9da",4169:"d9cbb449",4541:"5e5724c6",4565:"acf70cea",4568:"b2512313",4587:"45774007",4788:"d8854f23",4813:"84cdd382",4885:"afad4d15",5065:"4a80fc15",5159:"93c09a7c",5168:"58b080b4",5306:"a71d98cf",5322:"7addaab0",5417:"a05056b2",5426:"ddf3c4b0",5478:"0ccf7f55",5561:"b43290eb",5595:"622e3302",5774:"a819879f",5834:"2d3c920f",5862:"bd6581ff",5877:"ab1c5b2b",6049:"369a7cb9",6078:"ee71a4ce",6139:"b3b5d8ff",6212:"3d6f331d",6240:"bbad8651",6309:"cea906c3",6360:"ccae670e",6751:"380a1570",6899:"c3c24626",6932:"6514df2e",7119:"65793738",7133:"668d4283",7793:"1a125ce6",7817:"ed1b80ea",7886:"acb22d71",7908:"bc2a1312",8087:"15be279f",8107:"d66d074a",8133:"4d207ee1",8248:"6638aa07",8586:"c14c56b2",8698:"9a0a04e9",8831:"60752ddd",8917:"cffc2f5e",9026:"d9371db2",9040:"157fb588",9165:"50aee004",9267:"488cabfc",9287:"c23ea044",9321:"796c0259",9444:"694381cf",9545:"4ca29bde",9556:"7c19ce9f",9637:"964b404e",9727:"816832e8"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="lor-master-tracker:";r.l=function(o,a,s,n){if(e[o])e[o].push(a);else{var i,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var h=l[d];if(h.getAttribute("src")==o||h.getAttribute("data-webpack")==t+s){i=h;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[a];var u=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.j=2303}(),function(){r.p=""}(),function(){var e={2303:0};r.f.j=function(t,o){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var s=new Promise((function(r,o){a=e[t]=[r,o]}));o.push(a[2]=s);var n=r.p+r.u(t),i=new Error,c=function(o){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,a[1](i)}};r.l(n,c,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,n=o[0],i=o[1],c=o[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var d=c(r)}for(t&&t(o);l<n.length;l++)s=n[l],r.o(e,s)&&e[s]&&e[s][0](),e[n[l]]=0;return r.O(d)},o=self["webpackChunklor_master_tracker"]=self["webpackChunklor_master_tracker"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[4998,3064],(function(){return r(34069)}));o=r.O(o)})();
//# sourceMappingURL=deck.6191bb50.js.map