
<!-- 按钮 -->
<template name="aiButton">
 <view class="button_ai">
  <button id="{{button_id}}" form-type ="{{button_form_type}}" type="{{button_type}}"size="{{button_size}}">{{button_name}}</button>
 </view>
</template>
<view class="path_background">
<!-- 标题 -->
<view class="path_card" id="path_card_title">
<view class="path_tittle">
 <text class="text_AItittle">信息提交分享</text>
 <view class="tittle_box"></view>
 <button id="button_mine" form-type ="{{button_ai.button_mine.button_form_type}}" type="{{button_ai.button_mine.button_type}}"size="mini">{{button_ai.button_mine.button_name}}</button>
</view>
</view>
<!-- 表单 -->
<form bindsubmit="checkSubmit">
<view class="path_card" id="path_card_inputName">
<!-- input -->
<view class="inputAI">
<label class="path_card_title_1">AI名称</label> 
<label class="must_text">* </label>
<input name="{{input_ai.input_aiName.input_class}}"class= "{{input_ai.input_aiName.input_class}}" type="{{input_ai.input_aiName.input_type}}" required="required" placeholder="{{input_ai.input_aiName.input_name}}" maxlength="10" />
</view>
<!-- 单选 -->
<radio-group class="radio_aiGender" name="radio_aiGender" >
<label class="radio_aiGender_text">性别:</label>
  <label class="radio_aiGender_text" qq:for="{{radio_aiGender}}">
    <radio class="radio_aiGender_demo" color="#F4A460" value="{{item.value}}" checked="{{item.checked}}" />{{item.value}}
  </label>
</radio-group>
</view>
<!-- 文字域 -->
<view class="path_card" id="path_card_inputIntroduce">
<view class="textareaAI">
<label class="path_card_title">AI介绍</label> 
<label class="must_text">* </label>
  <textarea placeholder="最多不超过150字" name="textarea_aiIntroduce" class="textarea_aiIntroduce" maxlength="150" required="required"/>
 </view>
<!-- 标签 -->
<view class="aiTag">
  <checkbox-group  name="checkbox_aiTagGroup" class="checkbox_aiTagGroup" bindchange="checkboxChange">
  <label class="checkbox_aiTag_text"  qq:for="{{checkbox_aiTag}}" bindtap="labelClick"id="{{item.check_id}}" style="{{item.color}}"data-click="{{item.click}}">
    <checkbox class="checkbox_aiTag" value="{{item.value}}"></checkbox>
    {{item.value}}
  </label></checkbox-group></view></view>

<!-- 作者信息 -->
<template is="aiButton" data="{{...button_ai.button_input}}" />
</form>
<!-- 表单结束 -->
</view>