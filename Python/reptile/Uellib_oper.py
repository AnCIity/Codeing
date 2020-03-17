# import urllib.parse
# import urllib.request
# import urllib.error
# import socket

# response = urllib.request.urlopen('http://nanzc.com/cs/index.html')  #GET请求
# response.read().decode('utf-8')  #网页源代码

# data = bytes(urllib.parse.urlencode({'page': '2'}), encoding='utf-8')  #POST提交数据
# response = urllib.request.urlopen('https://www.xd0.com/ajax/wz.ajax.asp?menu=fy&aienrnd=045087410346705825', data=data)  #data参数用于 POST请求
# response.read().decode('gbk')  #返回内容

# try:
#    response = urllib.request.urlopen('http://nanzc.com/cs/index.html', timeout=1)  timeout #设置超时时间，单位为秒 超时跳过本条
# except urllib.error.URLError as e:
#     if isinstance(e.reason, socket.timeout):
#         print('TIME OUT')

# response.status  #响应状态码
# response.getheaders()  #响应头信息
# response.getheader('参数'）  #响应参数的值


