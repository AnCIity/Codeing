from bs4 import BeautifulSoup
import requests
import re
html = requests.get('https://www.12580sky.com/xz/19089.html').text

soup = BeautifulSoup(html, 'lxml')
soup.prettify()
i = soup.find(class_= 'art-content')
print(i)

# print(soup.p.string) # 内容
# print(soup.p.name) # 名称
# print(soup.p.attrs) # id和class
# print(soup.p['id']) # 直接获取id或其他信息
# print(soup.a.attrs['href'])
# print(soup.div.p.string) # 嵌套选择
# print(soup.div.contents) # 返回子节点列表
# print(soup.div.p.parent) # 获取父节点 获取所有祖先父节点用parents
# print(soup.a.next_sibling) # 获取节点的下一个兄弟元素
# print(soup.a.previous_sibling) # 获取节点的上一个兄弟元素
# print(list(enumerate(soup.a.next_siblings))) #　获取所有的a节点以后的所有兄弟节点
# print(list(enumerate(soup.a.previous_siblings))) #　获取所有的a节点以前所有的兄弟节点


# find_all(name . attrs , recursive , text , **kwargs) find_all函数用于查询多个符合条件的元素
# name 节点名
# print(soup.find_all(name = 'div')) # name根据节点名查询元素
# attrs 属性
# i = soup.find_all(attrs={'id': 'p_id'}) # attrs通过传入属性进行查询 如id name class
# i = soup.find_all(id='p_id') # 也可不使用attrs直接传入 特例class_=''
# text 节点文本
# i = soup.find_all(text=re.compile('标题'))
# 可遍历出来
# for k in i:
#     print(k)

# find()函数用于匹配单个元素
# find_parents()和find_parent()：前者返回所有祖先节点，后者返回直接父节点
# find_next_siblings()和find_next_sibling()：前者返回后面所有的兄弟节点，后者返回后面第一个兄弟节点
# find_previous_siblings()和find_previous_sibling()：前者返回前面所有的兄弟节点，后者返回前面第一个兄弟节点
# find_all_next()和find_next()：前者返回节点后所有符合条件的节点，后者返回第一个符合条件的节点
# find_all_previous()和find_previous()：前者返回节点前所有符合条件的节点，后者返回第一个符合条件的节点

# CSS选择器 select方法
# i = soup.select('#p_id') # 传入css选择器方法即可 获取文本还可用get_text()


