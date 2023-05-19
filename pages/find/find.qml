<view class="path_background">
<!-- AI列表 -->
<view class="path_card" qq:for="{{data_ai}}">
<image class="image_aiHead" src="../../config/demoHead.jpg"> </image>
<view class="path_aiTitle">
<label class="label_aiName">{{item.input_aiName}}</label>
<view>
<label class="label_aiSex">{{item.radio_aiGender}}</label>
<label class="label_line">|</label>
<label class="label_aiTag" qq:for="{{item.checkbox_aiTagGroup}}">{{item}}</label>
</view>
</view>
<view>
<label class="label_aiIntroduce">{{item.textarea_aiIntroduce}}</label>
</view>
</view>
</view>
