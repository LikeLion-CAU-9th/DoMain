from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

URL='https://www.naver.com'

def crawl_finance(stockItem):
  options = webdriver.ChromeOptions()
  options.add_argument("headless")
  driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
  driver.maximize_window()
  driver.implicitly_wait(1)
  driver.get(URL)
  search = driver.find_element_by_id('query')
  search.send_keys(stockItem)
  driver.find_elements_by_css_selector('#search_btn')[0].click()
  
  price = "NoN"
  attempt = 0
  while(attempt < 2):
    try:
      price = driver.find_element_by_css_selector('.spt_con strong').text
    except:
      pass
    attempt += 1
  return price