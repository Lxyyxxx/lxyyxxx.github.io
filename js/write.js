// tocbot
tocbot.init({
    // 构建目录的容器
    tocSelector: '.write-toc',
    // 文章容器
    contentSelector: '.write-content',
    // 需要解析的标题
    headingSelector: 'h1, h2, h3, h4, h5, h6',
    orderedList: false,
    scrollSmooth: false,
    hasInnerContainers: false
});

// 去除tocbot中前面的锚点`# `
$('.write-toc').find('a').each(function () {
    var txt = $(this).text();
    $(this).text(txt.substr(2))
})

// 避免mermaid和highlightjs渲染产生冲突
// 参考：https://github.com/SJamieson/hugo-academic/commit/f352efa11b19e388645ee004064ea573378b8803
window.onload = function () {
    mermaid.initialize({ startOnLoad: true });
};
let mermaids = [];
[].push.apply(mermaids, document.getElementsByClassName('language-mermaid'));
for (let i = 0; i < mermaids.length; i++) {
    $(mermaids[i]).unwrap('pre');  // Remove <pre> wrapper.
    $(mermaids[i]).replaceWith(function () {
        // Convert <code> block to <div> and add `mermaid` class so that Mermaid will parse it.
        return $("<div />").append($(this).contents()).addClass('mermaid');
    });
}
// 初始化highlightjs
hljs.initHighlighting();

// let isfetched = false;
// const input = $('.search-input');
// const resultContent = $('#search-result');
// $('.popup-trigger').click(function () {
//     $('body').css('overflow','hidden');
//     $('.search-pop-overlay').addClass('search-active');
//     input[0].focus();

// });
// $('.popup-btn-close').click(function () {
//     $('body').css('overflow','');
//     $('.search-pop-overlay').removeClass('search-active');
// });