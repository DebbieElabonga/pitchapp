(self.webpackChunk=self.webpackChunk||[]).push([[7717],{36089:(e,t,s)=>{s.r(t),s.d(t,{SnippetMatchLocation:()=>n.C2,SnippetsFeature:()=>n.EH,SnippetsRpcClient:()=>C,SnippetsUIController:()=>u,processChanges:()=>n.pi});var n=s(28773),i=s(27378),p=s(32952),r=s(2844),a=s(93508),o=s(28043),c=s(77176),l=s(25691),_=s(88434),h=s(71031),d=s(46777),m=s(38983);class u{constructor(e){this._gnar=e,this._hovered=new p.xQ,this._dismissed=new p.xQ,this.cardHovered=this._hovered.pipe((0,a.O)(!1),(0,o.x)()),this.cardDismissed=this._dismissed.pipe((0,o.x)()),this._activeCardModel=m.h.create(null),this.view=(0,r.aj)([this._activeCardModel]).pipe((0,c.U)((([e])=>{var t;let s;switch(null==e?void 0:e.mode){case"list":s=i.createElement(_.L,{matches:e.matches,applySnippet:e.applySnippet,selectSnippet:e.selectSnippet,activeSnippet:e.activeSnippet,triggerSequence:e.triggerSequence,onOpenLink:e=>this._onOpenLink(e)});break;case"shortcutPopup":s=i.createElement(_.O,{openEditor:()=>this._openEditor()});break;case"editor":s=i.createElement(h.M,{content:null!==(t=e.content)&&void 0!==t?t:"",addSnippet:e.addSnippet,dismiss:this._dismiss.bind(this),triggerSequence:e.triggerSequence});break;case null:default:return null}return e?i.createElement(d.q,null,i.createElement(l.W,{anchorRect:e.rect,anchorMargin:{top:0,left:-15,bottom:5,right:0},onHover:e=>this._hovered.next(e),onClickAway:e=>this._dismissed.next(e),partName:"snippets"},s)):null})))}_onOpenLink(e){this._gnar.snippetsLinkOpened(e)}_openEditor(){const e=this._activeCardModel.get();this._activeCardModel.set({...e,mode:"editor"})}_dismiss(){this._activeCardModel.set(null)}show(e){this._activeCardModel.set(e)}hide(){this._activeCardModel.set(null),this._hovered.next(!1)}isVisible(){return!!this._activeCardModel.get()}isShortcutPopupShown(){var e;return"shortcutPopup"===(null===(e=this._activeCardModel.get())||void 0===e?void 0:e.mode)}dispose(){this.hide()}}class C{constructor(e){this._rpc=e,this.load=this._rpc.loadSnippets,this.addSnippet=this._rpc.addSnippet,this.getTrigger=this._rpc.getSnippetsTrigger}}},28773:(e,t,s)=>{s.d(t,{C2:()=>v,EH:()=>M,pi:()=>N});var n=s(22764),i=s(95300),p=s(2844),r=s(24209),a=s(77176),o=s(38194),c=s(93508),l=s(85985),_=s(17343),h=s(41398),d=s(62337),m=s(13116),u=s(55073);function C(){return{items:[],children:new Map}}function g(e,t){return t&&0!==e.length?g(e.slice(1),t.children.get(e[0])||null):t}class E{constructor(e,t){this._root=C(),e.forEach((e=>{const s=e[t];if(!function(e){return"string"==typeof e}(s))throw new Error("Can't search for non-string attributes");s.toLowerCase().split("").reduce(((t,s)=>(t.items.push(e),t.children.has(s)||t.children.set(s,C()),t.children.get(s))),this._root).items.push(e)}))}search(e){const t=[];let s=null,n={node:this._root,depth:0};const i=[];for(;n;){s=g(e.toLowerCase(),n.node),s&&i.push({node:s,depth:n.depth});const p=n.node.children.values();let r=p.next();for(;!r.done;)t.push({node:r.value,depth:n.depth+1}),r=p.next();n=t.shift()||null}return Array.from(i.reduce(((t,s)=>(s.node.items.forEach((n=>{t.has(n)||t.set(n,{start:s.depth,end:s.depth+e.length})})),t)),new Map).entries()).map((([e,t])=>({item:e,range:t})))}}var v,S=s(90361),f=s(75420),x=s(74850),L=s(36991),w=s(84966);!function(e){e.name="name",e.content="content"}(v||(v={}));const b=new RegExp(`^(.*\\s)?${(0,S.hr)("\\")}(\\s.*)?$`),y=/\s+$/;function N(e,t,s="\\",n=b){if(!t){if(e.deltaChange.isEmpty)return null;{const t=e.deltaChange.delta.ops.slice(0);let i=t.pop();for(;t.length&&i&&!L.s.isInsertString(i);)i=t.pop();if(i&&L.s.isInsertString(i)&&!y.test(i.insert)){const t=e.deltaChange.delta.ops.reduce(((e,t)=>L.s.isInsertString(t)?e+t.insert.length:L.s.isRetain(t)?e+t.retain:e),0);return n.test((0,u.l)(e.deltaChange.delta,e.prevText).slice(Math.max(t-s.length-1,0),t+1))?{start:t-s.length,end:t}:null}return null}}{const{effectStartIndex:n,sizeDelta:i}=e.deltaChange.delta.ops.reduce(((e,t)=>(L.s.isRetain(t)?e.index+=t.retain:L.s.isDelete(t)?(e.effectStartIndex=Math.min(e.effectStartIndex,e.index),e.sizeDelta-=t.delete):L.s.isInsertString(t)?(e.effectStartIndex=Math.min(e.effectStartIndex,e.index),e.index+=t.insert.length,e.sizeDelta+=t.insert.length):L.s.isInsertEmbed(t)&&(e.effectStartIndex=Math.min(e.effectStartIndex,e.index),e.index+=1,e.sizeDelta+=1),e)),{index:0,effectStartIndex:1/0,sizeDelta:0});switch(!0){case n<t.start+s.length:case n>t.end:return null;default:return{...t,end:t.end+i}}}}class M{constructor(e,t,s,d,m,u,C,g,v,L,w,b,y,M,k,O=x.Y.create("Snippets")){var B,P;this._rpcClient=e,this._textObserver=t,this._replacementService=s,this._geometryProvider=d,this._geometryLayout=m,this._textFieldLayout=u,this._getCurrentTextMap=C,this._controller=g,this._keyDown=v,this._gnar=L,this._checkingService=w,this._selectionService=b,this._state=y,this._updateSnippetsShortcutPopupCounter=M,this._isCurrentFieldFocused=k,this._log=O,this._insertionRange=new i.X(null),this._activeSnippet=new i.X(null),this._subs=[],this.snippets=(0,p.aj)([this._insertionRange,this._activeSnippet,this._textFieldLayout.rect.behavior]).pipe((0,a.U)((([e,t,s])=>e?this._getModel("list",e,t):null)),(0,o.B)(),(0,c.O)(null)),this.selectionObservable=this._selectionService.getSelectionObservable(),this.snippetEditor=this.selectionObservable.pipe((0,a.U)((e=>this._getModel("shortcutPopup",e)))),this._snippetsDataByName=new E([],"name"),this._snippetsDataByContent=new E([],"content"),this._shortcutPopupSessionCounter=0,this._initialShortcutPopupCounter=0,this._initialShortcutPopupCounter=null!==(P=null===(B=this._state.get())||void 0===B?void 0:B.page.snippetsShortcutPopupCounter)&&void 0!==P?P:0,Promise.all([this._rpcClient.load(),this._rpcClient.getTrigger()]).then((([e,t])=>{this._triggerSequence=t||"\\",this._triggerRegexp=new RegExp(`^(.*\\s)?${(0,S.hr)(this._triggerSequence)}(\\s.*)?$`),this._gnar.snippetsListLoaded(e.length),this._snippetsDataByName=new E(e,"name"),this._snippetsDataByContent=new E(e,"content"),this._subs.push((0,r.T)(this.snippets,this.snippetEditor,this._isCurrentFieldFocused.pipe((0,l.h)((e=>!e)),(0,_.h)(null))).subscribe((e=>{e?this._controller.show(e):this._controller.hide()}))),this._subs.push(this._textObserver.contentChanges.async.pipe((0,h.M)(this._insertionRange.pipe((0,c.O)(null))),(0,a.U)((([e,t])=>{const s=N(e,t,this._triggerSequence,this._triggerRegexp);this._insertionRange.next(s),t&&null===s&&this._dismiss("edit"),null===t&&s&&this._gnar.snippetsListPresented(this._triggerSequence)}))).subscribe()),this._subs.push(this._keyDown.pipe((0,h.M)(this._insertionRange,this.snippets,this.selectionObservable,this._isCurrentFieldFocused)).subscribe((([e,t,s,i,p])=>{const r=(0,n.O)();if(p&&(e=>"KeyS"===e.code&&(r.config.systemInfo.os.isMac?e.ctrlKey:e.altKey))(e)&&(!this._controller.isVisible()||this._controller.isShortcutPopupShown()&&i)){this._gnar.snippetsShortcutUsed();const t=this._getModel("editor",i);t&&(this._updateSnippetsShortcutPopupCounter(-1),this._controller.show(t),e.preventDefault())}e.keyCode===f.VD.Escape&&this._dismiss("esc"),t&&(e.keyCode!==f.VD.Tab&&e.keyCode!==f.VD.RightArrow&&e.keyCode!==f.VD.Return||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey?e.keyCode!==f.VD.UpArrow&&e.keyCode!==f.VD.DownArrow||(e.preventDefault(),this._shiftActiveSnippet(e.keyCode===f.VD.UpArrow,s)):t&&s&&s.activeSnippet&&(e.preventDefault(),this._applySnippet(s.activeSnippet.snippet,t)))}))),this._subs.push(this._textFieldLayout.scroll.behavior.pipe((0,h.M)(this.snippets),(0,l.h)((([e,t])=>!!t))).subscribe((()=>{this._dismiss("scroll")})))})).catch((e=>{this._log.warn("Could not intialize",e)})),this._gnar.snippetsFeatureInit()}_applySnippet(e,t){this._dismiss("apply"),this._gnar.snippetsSnippetApplied(t.end-t.start-this._triggerSequence.length),this._replacementService.performReplacement(t,e.content,!1),this._checkingService&&this._checkingService.onSnippetFeedback({kind:w.JE.SNIPPET_ACCEPTED,snippetUuid:e.id})}_selectSnippet(e){this._activeSnippet.next(e)}_getSnippetsForText(e){return[...this._snippetsDataByName.search(e).map((e=>({snippet:e.item,range:e.range,location:v.name}))),...this._snippetsDataByContent.search(e).map((e=>({snippet:e.item,range:e.range,location:v.content})))].reduce(((e,t)=>(e.set.has(t.snippet.id)||e.result.push(t),e.set.add(t.snippet.id),e)),{set:new Set,result:new Array}).result.slice(0,30)}_shiftActiveSnippet(e,t){var s;if(t&&t.matches.length&&t.activeSnippet){const n=t.activeSnippet.index;n>-1?this._activeSnippet.next((null===(s=t.matches[Math.min(t.matches.length-1,Math.max(n+(e?-1:1),0))])||void 0===s?void 0:s.snippet)||null):this._activeSnippet.next(null)}else this._activeSnippet.next(null)}_dismiss(e){this._insertionRange.next(null),this._activeSnippet.next(null),"apply"!==e&&this._gnar.snippetsListDismissed(e)}_getModel(e,t,s){if(!t)return null;const n=this._getCurrentTextMap(),i=t&&this._geometryProvider.create(t,n),p=i?this._geometryProvider.getClientRects(i):null;if(!p||!p.length)return null;if("shortcutPopup"===e){if(this._initialShortcutPopupCounter<0||this._initialShortcutPopupCounter>=3)return null;if(0===this._shortcutPopupSessionCounter&&this._updateSnippetsShortcutPopupCounter(this._initialShortcutPopupCounter+1),this._shortcutPopupSessionCounter%3!=0||this._shortcutPopupSessionCounter>6)return this._shortcutPopupSessionCounter++,null;this._shortcutPopupSessionCounter++}const r="list"===e?p[0]:p[p.length-1],a=t?this._getSnippetsForText(n.getPlainText().substring(t.start+this._triggerSequence.length,t.end)):[],o=t?t.end-t.start-this._triggerSequence.length:0,c=s?a.findIndex((e=>e.snippet.id===s.id)):-1;return{rect:(0,m.Z)(d.UL.setPosition(this._geometryLayout.getApproximateConversionContext().clientToRelative(r),r),this._textFieldLayout.rect.getApproximate().client,this._textFieldLayout.scroll.getApproximate()),matches:a,mode:e,applySnippet:e=>{t&&this._applySnippet(e,t)},selectSnippet:e=>{this._selectSnippet(e)},addSnippet:async(e,t)=>{if(await this._rpcClient.addSnippet({name:e,content:t,hierarchy:"PERSONAL"})){this._gnar.snippetsInlineSnippetCreated();const e=await this._rpcClient.load();this._snippetsDataByName=new E(e,"name"),this._snippetsDataByContent=new E(e,"content")}this._controller.hide()},activeSnippet:a.length?s&&c>-1?{snippet:s,index:c}:{snippet:a[0].snippet,index:0}:null,matchLength:o,triggerSequence:this._triggerSequence,content:"list"!==e?n.getPlainText().substring(t.start,t.end):""}}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}},88434:(e,t,s)=>{s.d(t,{L:()=>d,O:()=>g});var n=s(22764),i=s(92783),p=s(27378),r=s(28773),a=s(20855),o=s(12187),c=s(80584);const l=e=>{const t=(50-(e.range.end-e.range.start))/2-3;return e.location===r.C2.content?{prefix:_(e.snippet.content,e.range.start,t),content:e.snippet.content.slice(e.range.start,e.range.end),suffix:e.snippet.content.slice(e.range.end)}:{content:e.snippet.content}},_=(e,t,s=1/0)=>e.slice(0,t).split(" ").reduceRight(((e,t,n)=>{let i=e.text,p=e.wordsLeft;return p?(i.length+t.length<s&&(i=i?`${t} ${i}`:t||" "),t?p--:i=`${i}`,!p&&n&&(i=`...${i}`),{text:i,wordsLeft:p}):e}),{text:"",wordsLeft:2}).text,h=()=>(0,n.O)().config.systemInfo.os.isMac?"CONTROL":"ALT";class d extends p.Component{constructor(){super(...arguments),this._selectionStopped=!1,this.state={menuOpen:!1}}_checkScroll(){const{activeSnippet:e}=this.props;if(e&&this.refs.scrollingList){const t=58,s=this.refs.scrollingList,n=s.scrollTop,i=e.index*t,p=Math.max(0,e.index*t-2*t),r=n+t/2<p?p:n-t/2>i?i:n;r!==n&&(this._selectionStopped=!0,s.scrollTop=r,setTimeout((()=>{this._selectionStopped=!1}),0))}}_processSnippetHover(e){this._selectionStopped||this.props.selectSnippet(e)}_toggleMenu(){this.setState({menuOpen:!this.state.menuOpen})}_onOpenLink(e){this.setState({menuOpen:!1}),this.props.onOpenLink(e)}componentDidUpdate(){this._checkScroll()}componentDidMount(){this._checkScroll()}render(){return p.createElement("div",{className:c.snippetsCard},this.props.matches.length?p.createElement("dl",{ref:"scrollingList",className:c.snippetsCard__snippets},this.props.matches.map((e=>{var t,s;return p.createElement("div",Object.assign({},(0,o.Sh)(c.snippetsCard__snippet,e.snippet.id===(null===(s=null===(t=this.props.activeSnippet)||void 0===t?void 0:t.snippet)||void 0===s?void 0:s.id)?c.snippetsCard__snippet_active:null),{key:e.snippet.id,onClick:()=>this.props.applySnippet(e.snippet),onMouseEnter:()=>this._processSnippetHover(e.snippet)}),p.createElement(m,{match:e,triggerSequence:this.props.triggerSequence}),p.createElement(u,{match:e,content:l(e)}))}))):p.createElement(C,null),p.createElement("div",{className:c.snippetsCard__footer},p.createElement("div",{className:c["snippetsCard__footer-logo"]},p.createElement("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M16,8C16,12.418 12.418,16 8,16C3.582,16 0,12.418 0,8C0,3.582 3.582,0 8,0C12.418,0 16,3.582 16,8Z",fill:"#9FA6BF"}),p.createElement("path",{d:"M9.045,9.727C9.093,9.989 9.339,10.169 9.605,10.169L10.443,10.169L10.929,10.1C10.152,11.241 8.802,11.766 7.326,11.534C6.125,11.346 5.093,10.533 4.657,9.397C3.669,6.82 5.551,4.36 8.003,4.36C9.282,4.36 10.403,5.128 11.046,6.031C11.217,6.277 11.554,6.348 11.801,6.177C12.034,6.015 12.102,5.707 11.962,5.465C11.073,4.077 9.475,3.189 7.679,3.309C5.34,3.466 3.447,5.38 3.312,7.721C3.156,10.444 5.316,12.668 8.003,12.668C9.415,12.668 10.678,12.054 11.539,11.059L11.437,11.63L11.437,12.145C11.437,12.411 11.617,12.657 11.878,12.705C12.222,12.767 12.522,12.504 12.522,12.171L12.522,9.084L9.578,9.084C9.246,9.084 8.983,9.384 9.045,9.727Z",fill:"white"}))),p.createElement("div",{className:c["snippetsCard__footer-hints"]},p.createElement("span",{className:c.buttonTip__group},"navigate"," ",p.createElement("span",{className:c.buttonTip},p.createElement("svg",{viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M9.354,4.603L5,0.249L0.646,4.603C0.451,4.798 0.451,5.115 0.646,5.31C0.842,5.505 1.158,5.505 1.354,5.31L5,1.663C5,1.663 8.646,5.31 8.646,5.31C8.842,5.505 9.158,5.505 9.354,5.31C9.549,5.115 9.549,4.798 9.354,4.603Z"})))," ",p.createElement("span",{className:c.buttonTip},p.createElement("svg",{viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M0.646,1.183L5,5.536L9.354,1.183C9.549,0.988 9.549,0.671 9.354,0.476C9.158,0.28 8.842,0.28 8.646,0.476L5,4.122C5,4.122 1.354,0.476 1.354,0.476C1.158,0.28 0.842,0.28 0.646,0.476C0.451,0.671 0.451,0.988 0.646,1.183Z"})))),p.createElement("span",{className:c.buttonTip__group},"select ",p.createElement("span",{className:c.buttonTip},"Enter")),p.createElement("span",{className:c.buttonTip__group},"cancel ",p.createElement("span",{className:c.buttonTip},"Esc"))),p.createElement("span",Object.assign({className:c["snippetsCard__footer-menuButton"]},(0,o.Sh)(c["snippetsCard__footer-menuButton"],this.state.menuOpen?c["snippetsCard__footer-menuButton_active"]:null),{onClick:()=>{this._toggleMenu()}}),p.createElement("svg",{viewBox:"0 0 4 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M2,12C0.895,12 0,12.895 0,14C0,15.105 0.895,16 2,16C3.105,16 4,15.105 4,14C4,12.895 3.105,12 2,12ZM2,13C2.552,13 3,13.448 3,14C3,14.552 2.552,15 2,15C1.448,15 1,14.552 1,14C1,13.448 1.448,13 2,13ZM2,6C0.895,6 0,6.895 0,8C0,9.105 0.895,10 2,10C3.105,10 4,9.105 4,8C4,6.895 3.105,6 2,6ZM2,7C2.552,7 3,7.448 3,8C3,8.552 2.552,9 2,9C1.448,9 1,8.552 1,8C1,7.448 1.448,7 2,7ZM2,0C0.895,0 0,0.895 0,2C0,3.105 0.895,4 2,4C3.105,4 4,3.105 4,2C4,0.895 3.105,0 2,0ZM2,1C2.552,1 3,1.448 3,2C3,2.552 2.552,3 2,3C1.448,3 1,2.552 1,2C1,1.448 1.448,1 2,1Z"}))),this.state.menuOpen&&p.createElement("ul",{className:c["snippetsCard__footer-menu"]},p.createElement("li",{className:c["snippetsCard__footer-menuItem"]},p.createElement("a",{target:"_blank",href:(0,i.Um)().snippetsNew,onClick:()=>{this._onOpenLink("new")}},p.createElement("span",{className:c["snippetsCard__footer-menuItem-icon"]},p.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M25.5,16C25.5,10.753 21.247,6.5 16,6.5C10.753,6.5 6.5,10.753 6.5,16C6.5,21.247 10.753,25.5 16,25.5C21.247,25.5 25.5,21.247 25.5,16ZM24.5,16C24.5,20.694 20.694,24.5 16,24.5C11.306,24.5 7.5,20.694 7.5,16C7.5,11.306 11.306,7.5 16,7.5C20.694,7.5 24.5,11.306 24.5,16ZM15.5,15.5L11.5,15.5C11.224,15.5 11,15.724 11,16C11,16.276 11.224,16.5 11.5,16.5L15.5,16.5L15.5,20.5C15.5,20.776 15.724,21 16,21C16.276,21 16.5,20.776 16.5,20.5L16.5,16.5L20.5,16.5C20.776,16.5 21,16.276 21,16C21,15.724 20.776,15.5 20.5,15.5L16.5,15.5L16.5,11.5C16.5,11.224 16.276,11 16,11C15.724,11 15.5,11.224 15.5,11.5L15.5,15.5Z"}))),p.createElement("span",{className:c["snippetsCard__footer-menuItem-textGroup"]},p.createElement("span",{className:c["snippetsCard__footer-menuItem-text"]},"Create snippet"),p.createElement("span",{className:c["snippetsCard__footer-shortcut"]},p.createElement("span",{className:c.buttonTip},h())," +"," ",p.createElement("span",{className:c.buttonTip},"S"))))),p.createElement("li",{className:c["snippetsCard__footer-menuItem"]},p.createElement("a",{target:"_blank",href:(0,i.Um)().snippetsAdmin,onClick:()=>{this._onOpenLink("library")}},p.createElement("span",{className:c["snippetsCard__footer-menuItem-icon"]},p.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M9,22.5C9,23.881 10.119,25 11.5,25L22.5,25C22.776,25 23,24.776 23,24.5C23,24.224 22.776,24 22.5,24L11.5,24C10.672,24 10,23.328 10,22.5C10,21.672 10.672,21 11.5,21L22.5,21C22.776,21 23,20.776 23,20.5L23,13.5C23,13.224 22.776,13 22.5,13C22.224,13 22,13.224 22,13.5L22,20C22,20 11.5,20 11.5,20C10.937,20 10.418,20.186 10,20.5L10,9.5C10,8.672 10.672,8 11.5,8C11.5,8 16.5,8 16.5,8C16.776,8 17,7.776 17,7.5C17,7.224 16.776,7 16.5,7L11.5,7C10.119,7 9,8.119 9,9.5L9,22.5ZM22.5,22L11.5,22C11.224,22 11,22.224 11,22.5C11,22.776 11.224,23 11.5,23L22.5,23C22.776,23 23,22.776 23,22.5C23,22.224 22.776,22 22.5,22ZM22,7L19.5,7C19.224,7 19,7.224 19,7.5C19,7.776 19.224,8 19.5,8L22,8L22,10.5C22,10.776 22.224,11 22.5,11C22.776,11 23,10.776 23,10.5L23,8L25.5,8C25.776,8 26,7.776 26,7.5C26,7.224 25.776,7 25.5,7L23,7L23,4.5C23,4.224 22.776,4 22.5,4C22.224,4 22,4.224 22,4.5L22,7Z"}))),p.createElement("span",{className:c["snippetsCard__footer-menuItem-textGroup"]},p.createElement("span",{className:c["snippetsCard__footer-menuItem-text"]},"Open library")))),p.createElement("li",{className:c["snippetsCard__footer-menuItem"]},p.createElement("a",{target:"_blank",href:(0,i.Um)().snippetsSettings,onClick:()=>{this._onOpenLink("customize")}},p.createElement("span",{className:c["snippetsCard__footer-menuItem-icon"]},p.createElement("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M24.5,23.5C24.776,23.5 25,23.724 25,24C25,24.276 24.776,24.5 24.5,24.5L7.5,24.5C7.224,24.5 7,24.276 7,24C7,23.724 7.224,23.5 7.5,23.5L24.5,23.5Z"}),p.createElement("path",{d:"M20.894,8.354L22.146,9.606C22.732,10.192 22.732,11.142 22.146,11.727L12.374,21.5L9,21.5L9,18.126L18.773,8.354C19.359,7.768 20.308,7.768 20.894,8.354ZM17.666,10.873L10,18.54L10,20.5L11.96,20.5L19.626,12.833L17.666,10.873ZM19.48,9.061L18.373,10.166L20.333,12.126L21.439,11.02C21.635,10.825 21.635,10.508 21.439,10.313L20.187,9.061C19.992,8.865 19.675,8.865 19.48,9.061Z"}))),p.createElement("span",{className:c["snippetsCard__footer-menuItem-textGroup"]},p.createElement("span",{className:c["snippetsCard__footer-menuItem-text"]},"Edit shortcut"),p.createElement("span",{className:c["snippetsCard__footer-shortcut"]},p.createElement("span",Object.assign({},(0,o.Sh)(c.buttonTip,c["snippetsCard__footer-editShortcut"])),this.props.triggerSequence))))))))}}const m=e=>p.createElement("dt",{className:c["snippetsCard__snippet-name"]},p.createElement("span",Object.assign({},(0,o.Sh)(c["snippetsCard__snippet-logo"],"PERSONAL"===e.match.snippet.hierarchy?c["snippetsCard__snippet-logo-personal"]:c["snippetsCard__snippet-logo-global"]))),p.createElement("span",{className:c["snippetsCard__snippet-name-match"]},e.triggerSequence),e.match.location===r.C2.name?p.createElement(p.Fragment,null,e.match.snippet.name.slice(0,e.match.range.start),p.createElement("span",{className:c["snippetsCard__snippet-name-match"]},e.match.snippet.name.slice(e.match.range.start,e.match.range.end)),e.match.snippet.name.slice(e.match.range.end)):p.createElement(p.Fragment,null,e.match.snippet.name)),u=e=>p.createElement("dd",{className:c["snippetsCard__snippet-content"]},e.match.location===r.C2.content?p.createElement(p.Fragment,null,e.content.prefix,p.createElement("span",{className:c["snippetsCard__snippet-content-match"]},e.content.content),e.content.suffix):p.createElement(p.Fragment,null,e.content.content)),C=()=>p.createElement("div",{className:c.snippetsCard__empty},p.createElement("div",{className:c["snippetsCard__empty-pic"]}),p.createElement("span",{className:c["snippetsCard__empty-title"]},"Your search did not match any snippets"),p.createElement("div",{className:c["snippetsCard__empty-shortcut"]},"To create one, press ",p.createElement("span",Object.assign({},(0,o.Sh)(c.buttonTip)),h()),"+",p.createElement("span",Object.assign({},(0,o.Sh)(c.buttonTip)),"S"))),g=e=>p.createElement("div",{className:c.snippetsCreateBtn},p.createElement("span",{className:c.snippetsCreateBtn__logo},p.createElement("svg",{viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},p.createElement("path",{d:"M10.97,0C4.912,0 0,4.91 0,10.968C0,17.026 4.912,21.938 10.97,21.938C17.03,21.938 21.94,17.026 21.94,10.968C21.94,4.91 17.03,0 10.97,0ZM17.133,16.713C17.133,17.169 16.748,17.529 16.276,17.443C15.916,17.379 15.696,17.041 15.696,16.677L15.696,15.97L15.821,15.188C14.601,16.595 12.827,17.401 10.965,17.394C7.281,17.394 4.315,14.344 4.528,10.612C4.713,7.402 7.308,4.746 10.514,4.532C12.978,4.366 15.166,5.609 16.384,7.454L16.38,7.454C16.572,7.864 16.484,8.24 16.163,8.464C16.038,8.552 15.889,8.599 15.736,8.599C15.494,8.599 15.267,8.48 15.128,8.282L15.128,8.274C14.246,7.044 12.708,6.007 10.956,6.007C7.593,6.007 5.012,9.377 6.368,12.912C6.965,14.468 8.38,15.582 10.028,15.84C12.051,16.158 13.902,15.462 14.968,13.898L14.302,14.015L13.152,14.015C12.788,14.015 12.45,13.795 12.385,13.435C12.3,12.965 12.66,12.58 13.115,12.58L17.133,12.58L17.133,16.713Z"}))),p.createElement("span",{className:c.snippetsCreateBtn__textGroup},p.createElement("span",{onClick:e.openEditor,className:c.snippetsCreateBtn__text},"Create a snippet"),p.createElement("span",{onClick:e.openEditor,className:c.snippetsCreateBtn__shortcut},p.createElement("span",{className:c.buttonTip},h())," +"," ",p.createElement("span",{className:c.buttonTip},"S"))),p.createElement(a.u,{offset:{vertical:-12},message:"Turn highlighted text into a snippet to use it later.",showDelay:300},p.createElement("span",{className:c.snippetsCreateBtn__tooltip},"?")))},71031:(e,t,s)=>{s.d(t,{M:()=>p});var n=s(27378),i=s(80584);const p=e=>{const[t,s]=n.useState(""),[p,r]=n.useState(e.content),[a,o]=n.useState(""),[c,l]=n.useState(""),_=(t,s)=>{let n="",i="";0===t.trim().length?n="Name cannot be empty":t.length>30&&(n="Snippet names cannot exceed 30 characters."),0===s.trim().length?i="Snippet cannot be empty":s.length>1e3&&(i="Snippets cannot exceed 1,000 characters."),n.length||i.length?(o(n),l(i)):e.addSnippet(t,s)};return n.createElement("div",{className:i.snippetsEditor,onKeyUp:e=>{"Enter"===e.key&&_(t,p)}},n.createElement("div",{className:i.snippetsEditor__topWrapper},n.createElement("input",{onMouseDown:e=>e.stopPropagation(),onChange:e=>{const t=e.target;s(t.value)},autoFocus:!0,className:i.snippetsEditor__topWrapper_name,placeholder:"New snippet"}),a.length?n.createElement("div",{className:i.snippetsEditor__topWrapper_nameError},a):null,n.createElement("textarea",{onMouseDown:e=>e.stopPropagation(),onChange:e=>{const t=e.target;r(t.value)},className:i.snippetsEditor__topWrapper_content,placeholder:"Write a snippet of text that can be used again and again.",value:p}),c.length?n.createElement("div",{className:i.snippetsEditor__topWrapper_contentError},c):null),n.createElement("div",{className:i.snippetsEditor__bottomWrapper},n.createElement("div",{className:i.snippetsEditor__bottomWrapper_logo},n.createElement("svg",{viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M10.97,0C4.912,0 0,4.91 0,10.968C0,17.026 4.912,21.938 10.97,21.938C17.03,21.938 21.94,17.026 21.94,10.968C21.94,4.91 17.03,0 10.97,0ZM17.133,16.713C17.133,17.169 16.748,17.529 16.276,17.443C15.916,17.379 15.696,17.041 15.696,16.677L15.696,15.97L15.821,15.188C14.601,16.595 12.827,17.401 10.965,17.394C7.281,17.394 4.315,14.344 4.528,10.612C4.713,7.402 7.308,4.746 10.514,4.532C12.978,4.366 15.166,5.609 16.384,7.454L16.38,7.454C16.572,7.864 16.484,8.24 16.163,8.464C16.038,8.552 15.889,8.599 15.736,8.599C15.494,8.599 15.267,8.48 15.128,8.282L15.128,8.274C14.246,7.044 12.708,6.007 10.956,6.007C7.593,6.007 5.012,9.377 6.368,12.912C6.965,14.468 8.38,15.582 10.028,15.84C12.051,16.158 13.902,15.462 14.968,13.898L14.302,14.015L13.152,14.015C12.788,14.015 12.45,13.795 12.385,13.435C12.3,12.965 12.66,12.58 13.115,12.58L17.133,12.58L17.133,16.713Z"}))),n.createElement("div",{className:i.snippetsEditor__bottomWrapper_text},"To use this snippet later, press"," ",n.createElement("span",{className:i.buttonTip},e.triggerSequence)),n.createElement("div",{className:i.snippetsEditor__bottomWrapper_buttons},n.createElement("div",{onClick:()=>e.dismiss(),className:i.snippetsEditor__bottomWrapper_cancelBtn},"Cancel"),n.createElement("div",{onClick:()=>_(t,p),className:i.snippetsEditor__bottomWrapper_saveBtn},"Save"))))}},46777:(e,t,s)=>{s.d(t,{q:()=>i});var n=s(27378);const i=e=>n.createElement("div",{onKeyDown:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation()},e.children)},80584:e=>{e.exports={snippetsEditor:"_1QGZn",snippetsEditor__topWrapper:"_1mxO5",snippetsEditor__topWrapper_name:"_21OqE",snippetsEditor__topWrapper_nameError:"_3WrA4",snippetsEditor__topWrapper_content:"_2Osmi",snippetsEditor__topWrapper_contentError:"_32mdE",snippetsEditor__bottomWrapper:"ans9X",snippetsEditor__bottomWrapper_logo:"c0O33",snippetsEditor__bottomWrapper_text:"_2uzuH",snippetsEditor__bottomWrapper_buttons:"_21hJF",snippetsEditor__bottomWrapper_cancelBtn:"hQBPX",snippetsEditor__bottomWrapper_saveBtn:"_3QPmq",snippetsCreateBtn:"_1P42Q",snippetsCreateBtn__logo:"_2XGoR",snippetsCreateBtn__textGroup:"_2QONg",snippetsCreateBtn__text:"_11-LY",snippetsCreateBtn__shortcut:"_26xGk",snippetsCreateBtn__tooltip:"_2cqo9",snippetsCard:"_3dxQw",snippetsCard__snippets:"pURh0",snippetsCard__snippet:"_1GpcE",snippetsCard__snippet_active:"_1qQiP","snippetsCard__snippet-logo":"_2T6IO","snippetsCard__snippet-logo-personal":"ix5X4","snippetsCard__snippet-logo-global":"qrnjA","snippetsCard__snippet-name":"Q8VGy","snippetsCard__snippet-name-match":"guBYZ","snippetsCard__snippet-content":"_2mZiD","snippetsCard__snippet-content-match":"IniHV",snippetsCard__footer:"_2dtaG","snippetsCard__footer-logo":"_3gH2M","snippetsCard__footer-shortcut":"_1w9po","snippetsCard__footer-hints":"_484sZ","snippetsCard__footer-menuButton":"_1R0o-","snippetsCard__footer-menuButton_active":"_1HAga","snippetsCard__footer-editShortcut":"_2rv26","snippetsCard__footer-menu":"_3mLM-","snippetsCard__footer-menuItem":"_39MWm","snippetsCard__footer-menuItem-text":"_2RRzt","snippetsCard__footer-menuItem-icon":"_31HNb","snippetsCard__footer-menuItem-textGroup":"_1zFr2",snippetsCard__empty:"_1AZ3A","snippetsCard__empty-pic":"_3w1r-","snippetsCard__empty-title":"_3o-c8","snippetsCard__empty-shortcut":"Js6HX",buttonTip:"ImChS",buttonTip__group:"_1-RD5"}}}]);