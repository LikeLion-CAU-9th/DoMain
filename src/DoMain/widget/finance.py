from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

URL='https://www.naver.com'

def crawl_finance(stockObj):
  options = webdriver.ChromeOptions()
  options.add_argument("headless")
  driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
  driver.implicitly_wait(0.5)
  
  priceList = []
  isFirstAccess = True
  keyList = stockObj.keys()
  for key in keyList:
    stock = stockObj[key]
    if isFirstAccess == True:
      driver.get(URL)
      search = driver.find_element_by_id('query')
      search.send_keys(stock)
      driver.find_elements_by_css_selector('#search_btn')[0].click()
    else:
      search = driver.find_element_by_id('nx_query')
      search.send_keys(stock)
      driver.find_element_by_css_selector('.bt_search')[0].click()
    
    attempt = 0
    while(attempt < 2):
      try:
        price = driver.find_element_by_css_selector('.spt_con strong').text
      except:
        if(attempt == 1):
          price = "NoN"
      attempt += 1
    priceList.append(price)
  return priceList