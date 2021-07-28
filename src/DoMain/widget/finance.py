from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

URL='https://finance.naver.com/'

def crawl_finance(stockItem):
  options = webdriver.ChromeOptions()
  options.add_argument("headless")
  driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
  driver.maximize_window()
  driver.implicitly_wait(7)
  driver.get(URL)
  search = driver.find_element_by_id('stock_items')
  search.send_keys(stockItem)
  driver.find_elements_by_class_name('snb_search_btn')[0].click()
  # price = driver.find_element_by_css_selector('.tbl_search tbody tr td:nth-child(2)').text
  attempt = 0
  while(attempt < 3):
    try:
      price = driver.find_element_by_css_selector('.rate_info .today .no_today').text
    except:
      pass
    attempt += 1
  return price