from pyquery import PyQuery as pq
i = 0

# 初始化
# doc = pq(url='http://nanzc.com/cs/index.html') # url
# doc = pq(html) # 字符串
doc = pq(filename='index.html') # 文件

# CSS选择器
items = doc('.div_class.div_1class') # 使用CSS选择器规则

#　查找节点
# i = items.children() # children()　方法　返回　子节点
# i = items.find('p') # find('CSS选择器')　方法　返回 子孙节点
# i = items.parent() # parent()　方法　返回　父节点
# i = items.parents() # parents('可选　传入CSS选择器用于筛选')　方法　返回　祖先节点
# i = items.siblings() # siblings()　方法　返回　兄弟节点

# 遍历
# items = doc('.div_class').items() # items() 方法　返回　生成器
# for a in items:
#     print(a)  　＃遍历得到逐个节点

#　获取信息
# i = items.text() #　text()　方法　返回　所有内部纯文本
# i = items.html() #　html()　方法　返回　内部第一个节点html文本
# i= items.attr('href') # attr('属性名')　方法　返回　id class name ...属性值
# i = items.attr.属性名 #　attr 属性　返回　id class name ...属性值
# for item in items.items():
#     print(item.attr.href) # 获取多个属性的值使用　遍历

#　节点操作
# i = items.removeClass('a_class') # removeClass('属性值') 方法　　返回　移除class属性值后的节点
# i = items.addClass('addClass') # addClass('属性值')　方法　返回　添加class属性值后的节点
# i = items.attr('name', 'a_name') # attr('属性', '属性值')　方法　返回　修改属性值后的节点
# i = items.text('123') # text('文本')　方法　返回　修改内部纯文本
# i = items.html('<p>123</p>') # html('html文本')　方法　返回　修改内部html文本
# items.find('p').remove() # remove()　方法　返回　需删除的节点　删除后的节点在原变量
# i = items.text() # 提取删除节点后的文本

# 伪类选择器
# 可参考CSS伪类选择器开发文档


if i!=0:
    print(i)