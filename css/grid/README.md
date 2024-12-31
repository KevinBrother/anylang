# Grid 布局相关

## 怎么理解 css 中的 justify 开头相关属性和 align 开头相关的属性

- justify-content 和 align-items 是 flex 布局中的属性，justify-content 是主轴上的对齐方式，align-items 是交叉轴上的对齐方式。

- 主轴：当前 flex 容器的主要方向，flex-direction 为 row 时，主轴是水平方向，为 column 时，主轴是垂直方向。`justify-items: start`，横向为主轴时，开始就是左对齐

## xx-items、xx-content、xx-self 三者的区别

- items 作用于容器内子元素的整体对齐方式，content 作用于容器内子元素整体的分布方式，self 容器内单个元素的对齐方式。
- self 是单个元素的对齐方式，可以覆盖 items 和 content 的对齐方式。

## 参考文档

[CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
