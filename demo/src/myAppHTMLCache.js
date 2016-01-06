angular.module('rongWebimWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div id=rongcloud-conversation class=\"kefuChatBox both am-fade-and-slide-top\" ng-class=\"{'fullScreen':resoures.fullScreen}\" ng-show=resoures.display><div class=kefuChat><div id=header class=\"header blueBg online\"><div class=\"infoBar pull-left\"><div class=infoBarTit><span class=\"Presence Presence--stacked\"></span> <span class=kefuName ng-bind=currentConversation.title></span></div></div><div class=\"toolBar headBtn pull-right\"><a href=javascript:; class=\"kefuChatBoxMin sprite\" ng-show=resoures.fullScreen ng-click=\"resoures.fullScreen=false;\" title=最小化></a> <a href=javascript:; class=\"kefuChatBoxMax sprite\" ng-show=!resoures.fullScreen ng-click=\"resoures.fullScreen=true;\" title=最大化></a> <a href=javascript:; class=\"kefuChatBoxClose sprite\" ng-click=\"resoures.display=false\" title=结束对话></a></div></div><div class=\"outlineBox hide\"><div class=sprite></div><span>网络连接断开</span></div><div id=Messages><div class=emptyBox>暂时没有新消息</div><div class=MessagesInner><div ng-repeat=\"item in messageList\" ng-switch=item.panelType><div class=Messages-date ng-switch-when=104><b>2015 年 8 月 6日</b></div><div class=sys-tips ng-switch-when=2><span>会话已结束</span></div><div class=Message ng-switch-when=1><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" ng-src=\"{{item.content.userInfo.portraitUri||'./src/images/webBg.png'}}\" alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">{{item.content.userInfo.name}}</a></div></div></div><div class=Message-body ng-switch=item.messageType><textmessage ng-switch-when=TextMessage msg=item.content></textmessage><imagemessage ng-switch-when=ImageMessage msg=item.content></imagemessage><voicemessage ng-switch-when=VoiceMessage msg=item.content></voicemessage><locationmessage ng-switch-when=LocationMessage msg=item.content></locationmessage><richcontentmessage ng-switch-when=RichContentMessage msg=item.content></richcontentmessage></div></div></div></div></div><div id=footer class=footer style=\"display: block\"><div class=footer-con><div class=text-layout><div id=funcPanel class=\"funcPanel robotMode\"><div class=mode1><div class=MessageForm-tool id=expressionWrap><i class=\"sprite iconfont-smile\"></i><div class=expressionWrap style=\"display: none\"><i class=arrow></i></div></div><div class=MessageForm-tool><i class=\"sprite iconfont-upload\" id=upload-file style=\"position: relative; z-index: 1\"></i><div class=\"moxie-shim moxie-shim-html5\" style=\"position: absolute; top: 5px; left: 0px; width: 20px; height: 15px; overflow: hidden; z-index: 0\"><input type=file style=\"font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%\" multiple accept=\"\"></div></div></div><div class=mode2><a href=javascript:; id=chatSwitch class=chatSwitch>转人工服务</a></div></div><textarea cols=50 rows=5 id=inputMsg class=\"text grey\">请输入...</textarea></div><div class=powBox><button type=button class=\"btn send-btn\" id=sendBtn>发送</button></div></div></div></div></div>"
  );

}]);
