from selenium import webdriver

browser = webdriver.Chrome()
browser.get('https://www.12580sky.com/')

print(browser.page_source)

browser.close()