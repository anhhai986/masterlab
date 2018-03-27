define("ace/mode/coffee_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";function r(){var e="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",t="this|throw|then|try|typeof|super|switch|return|break|by|continue|catch|class|in|instanceof|is|isnt|if|else|extends|for|own|finally|function|while|when|new|no|not|delete|debugger|do|loop|of|off|or|on|unless|until|and|yes",n="true|false|null|undefined|NaN|Infinity",r="case|const|default|function|var|void|with|enum|export|implements|interface|let|package|private|protected|public|static|yield",o="Array|Boolean|Date|Function|Number|Object|RegExp|ReferenceError|String|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray",a="Math|JSON|isNaN|isFinite|parseInt|parseFloat|encodeURI|encodeURIComponent|decodeURI|decodeURIComponent|String|",i="window|arguments|prototype|document",s=this.createKeywordMapper({keyword:t,"constant.language":n,"invalid.illegal":r,"language.support.class":o,"language.support.function":a,"variable.language":i},"identifier"),g={token:["paren.lparen","variable.parameter","paren.rparen","text","storage.type"],regex:/(?:(\()((?:"[^")]*?"|'[^')]*?'|\/[^\/)]*?\/|[^()"'\/])*?)(\))(\s*))?([\-=]>)/.source},c=/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)/;this.$rules={start:[{token:"constant.numeric",regex:"(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)"},{stateName:"qdoc",token:"string",regex:"'''",next:[{token:"string",regex:"'''",next:"start"},{token:"constant.language.escape",regex:c},{defaultToken:"string"}]},{stateName:"qqdoc",token:"string",regex:'"""',next:[{token:"string",regex:'"""',next:"start"},{token:"paren.string",regex:"#{",push:"start"},{token:"constant.language.escape",regex:c},{defaultToken:"string"}]},{stateName:"qstring",token:"string",regex:"'",next:[{token:"string",regex:"'",next:"start"},{token:"constant.language.escape",regex:c},{defaultToken:"string"}]},{stateName:"qqstring",token:"string.start",regex:'"',next:[{token:"string.end",regex:'"',next:"start"},{token:"paren.string",regex:"#{",push:"start"},{token:"constant.language.escape",regex:c},{defaultToken:"string"}]},{stateName:"js",token:"string",regex:"`",next:[{token:"string",regex:"`",next:"start"},{token:"constant.language.escape",regex:c},{defaultToken:"string"}]},{regex:"[{}]",onMatch:function(e,t,n){return this.next="","{"==e&&n.length?(n.unshift("start",t),"paren"):"}"==e&&n.length&&(n.shift(),this.next=n.shift()||"",-1!=this.next.indexOf("string"))?"paren.string":"paren"}},{token:"string.regex",regex:"///",next:"heregex"},{token:"string.regex",regex:/(?:\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)(?:[imgy]{0,4})(?!\w)/},{token:"comment",regex:"###(?!#)",next:"comment"},{token:"comment",regex:"#.*"},{token:["punctuation.operator","text","identifier"],regex:"(\\.)(\\s*)("+r+")"},{token:"punctuation.operator",regex:"\\.{1,3}"},{token:["keyword","text","language.support.class","text","keyword","text","language.support.class"],regex:"(class)(\\s+)("+e+")(?:(\\s+)(extends)(\\s+)("+e+"))?"},{token:["entity.name.function","text","keyword.operator","text"].concat(g.token),regex:"("+e+")(\\s*)([=:])(\\s*)"+g.regex},g,{token:"variable",regex:"@(?:"+e+")?"},{token:s,regex:e},{token:"punctuation.operator",regex:"\\,|\\."},{token:"storage.type",regex:"[\\-=]>"},{token:"keyword.operator",regex:"(?:[-+*/%<>&|^!?=]=|>>>=?|\\-\\-|\\+\\+|::|&&=|\\|\\|=|<<=|>>=|\\?\\.|\\.{2,3}|[!*+-=><])"},{token:"paren.lparen",regex:"[({[]"},{token:"paren.rparen",regex:"[\\]})]"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?///[imgy]{0,4}",next:"start"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{token:"string.regex",regex:"\\S+"}],comment:[{token:"comment",regex:"###",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()}var o=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules;o.inherits(r,a),t.CoffeeHighlightRules=r}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),o=n.match(/^(\s*\})/);if(!o)return 0;var a=o[1].length,i=e.findMatchingBracket({row:t,column:a});if(!i||i.row==t)return 0;var s=this.$getIndent(e.getLine(i.row));e.replace(new r(t,0,t,a-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o}),define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t,n){"use strict";var r=e("../../lib/oop"),o=e("./fold_mode").FoldMode,a=e("../../range").Range,i=t.FoldMode=function(){};r.inherits(i,o),function(){this.getFoldWidgetRange=function(e,t,n){var r=this.indentationBlock(e,n);if(r)return r;var o=/\S/,i=e.getLine(n),s=i.search(o);if(-1!=s&&"#"==i[s]){for(var g=i.length,c=e.getLength(),u=n,f=n;++n<c;){i=e.getLine(n);var l=i.search(o);if(-1!=l){if("#"!=i[l])break;f=n}}if(f>u){var d=e.getLine(f).length;return new a(u,g,f,d)}}},this.getFoldWidget=function(e,t,n){var r=e.getLine(n),o=r.search(/\S/),a=e.getLine(n+1),i=e.getLine(n-1),s=i.search(/\S/),g=a.search(/\S/);if(-1==o)return e.foldWidgets[n-1]=-1!=s&&g>s?"start":"","";if(-1==s){if(o==g&&"#"==r[o]&&"#"==a[o])return e.foldWidgets[n-1]="",e.foldWidgets[n+1]="","start"}else if(s==o&&"#"==r[o]&&"#"==i[o]&&-1==e.getLine(n-2).search(/\S/))return e.foldWidgets[n-1]="start",e.foldWidgets[n+1]="","";return-1!=s&&o>s?e.foldWidgets[n-1]="start":e.foldWidgets[n-1]="",g>o?"start":""}}.call(i.prototype)}),define("ace/mode/coffee",["require","exports","module","ace/mode/coffee_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/coffee","ace/range","ace/mode/text","ace/worker/worker_client","ace/lib/oop"],function(e,t,n){"use strict";function r(){this.HighlightRules=o,this.$outdent=new a,this.foldingRules=new i}var o=e("./coffee_highlight_rules").CoffeeHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,i=e("./folding/coffee").FoldMode,s=(e("../range").Range,e("./text").Mode),g=e("../worker/worker_client").WorkerClient,c=e("../lib/oop");c.inherits(r,s),function(){var e=/(?:[({[=:]|[-=]>|\b(?:else|try|(?:swi|ca)tch(?:\s+[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)?|finally))\s*$|^\s*(else\b\s*)?(?:if|for|while|loop)\b(?!.*\bthen\b)/;this.lineCommentStart="#",this.blockComment={start:"###",end:"###"},this.getNextLineIndent=function(t,n,r){var o=this.$getIndent(n),a=this.getTokenizer().getLineTokens(n,t).tokens;return a.length&&"comment"===a[a.length-1].type||"start"!==t||!e.test(n)||(o+=r),o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new g(["ace"],"ace/mode/coffee_worker","Worker");return t.attachToDocument(e.getDocument()),t.on("annotate",function(t){e.setAnnotations(t.data)}),t.on("terminate",function(){e.clearAnnotations()}),t},this.$id="ace/mode/coffee"}.call(r.prototype),t.Mode=r});