var $ = require('jquery');
var dialog = require('artdialog');

$.fn.extend({
  /**
   * 图片弹窗预览
   * @param  {Object} options 参数
   * @return {Object}         返回弹窗实例
   */
  imgView: function(options) {
    var self = $(this);

    self.on('click', function(e) {
      e.preventDefault();
      var width = options.width || 800;
      var maxWidth = width - 20;
      // fixed: 每个浏览器高度不一致，不能定高
      var height = $(window).height() - 100;
      var maxHeight = height - 50;
      var el = $(e.target);
      var url = el.attr('src') || el.attr('data-src');
      var imgviewTag = options.imgviewTag || '@';
      if (url.indexOf(imgviewTag) >= 0) {
        url = url.substr(0, url.lastIndexOf(imgviewTag));
      }

      var opt = $.extend({
        title: 'view',
        fixed: true,
        content: '<div class="hbox"><div class="col v-middle text-center-i"><img style="max-width:' + maxWidth + 'px;max-height:' + maxHeight + 'px;" src="' + url + '" alt="" /></div></div>'
      }, options || {})
      var _dialog = dialog(opt)
      .width(width)
      .height(height)
      .showModal()
      return _dialog;
    })
  }
})