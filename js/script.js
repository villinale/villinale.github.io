/*
 * @Author: yingxin wang
 * @Date: 2023-03-29 22:53:11
 * @LastEditors: yingxin wang
 * @LastEditTime: 2023-03-29 22:55:51
 * @Description: js脚本
 */
window.addEventListener('scroll', function () {
    var top = document.getElementById('top');
    var leftbar = document.getElementById('leftbar');
    var content = document.getElementById('content');

    if (window.pageYOffset >= top.style.height) { /* 当向下滚动超过100像素时 */
        leftbar.style.position = 'fixed';
        leftbar.style.top = '0';
        content.style.marginLeft = '200px'; /* 与侧边栏宽度相同 */
    } else {
        leftbar.style.position = 'static'; /* 恢复默认位置 */
        content.style.marginLeft = '0'; /* 恢复默认边距 */
    }
});
