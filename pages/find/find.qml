<view class="path_background">
<!-- AI列表 -->
<view class="path_card" qq:for="{{data_ai}}">
<!-- AI头像 -->
<image class="image_aiHead" src="https://exmple.com/exmple.png"> </image>

<view class="path_aiTitle">
<view>
<label class="label_aiName">{{item.name}}</label>
</view>
<label class="label_aiSex">--性别</label>
<label class="label_aiTag" qq:for="{{item.checkbox_aiTagGroup}}">--标签</label>
</view>

<view>
<label>AI介绍</label>
</view>

</view>
</view>
