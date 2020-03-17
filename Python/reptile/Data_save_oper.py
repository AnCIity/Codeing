i = 0
# TXT　文本储存
# import requests
# from pyquery import PyQuery as pq
#
# url = 'https://www.zhihu.com/explore'
# headers = {
#         "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
#     }
# html = requests.get(url, headers=headers).text
#
# doc = pq(html)
# items = doc('.explore-tab .feed-item').items()
# print('\n'.join(['a','b']))
# for item in items:
#     question = item.find('h2').text()
#     author = item.find('.author-link-line').text()
#     answer = pq(item.find('.content').html()).text()
    # file = open('explore.txt', 'w', encoding='utf-8') # w覆盖方式写入　ａ追加方式写入　如文件为创建则创建
    # file.write('\n'.join([question, author, answer]))
    # file.write('\n' + '=' * 50 + '\n')
    # file.close()

# JSON 文件储存
import json

# JSON使用双引号来包围
str = '''
[{
    "name": "Bob",
    "gender": "male",
    "birthday": "1992-10-18"
},{
    "name": "Selina",
    "gender": "female",
    "birthday": "1995-10-18"
}]
'''
# data = json.loads(str) # 将字符串转化为JSON对象

#　读取JSON
# i = data[0]['name']
# i = data[0].get('name')
# i = data[0].get('age', '25')　＃　可设置默认值
# for a in data:
#     print(a['name'])　＃　遍历

#　读取JSON文件
# with open('data.json', 'r') as file:
#     str = file.read()
#     data = json.loads(str)
#     print(data)

#　输出JSON文件
# with open('data.json', 'w', encoding='utf-8') as file:
#     file.write(json.dumps(data, indent=2, ensure_ascii=False))
# dumps()　方法　将JSON对象转为字符串 indent　参数　代表缩进个数 ensure_ascii为False并规定编码　以输出中文




if i!=0:
    print(i)