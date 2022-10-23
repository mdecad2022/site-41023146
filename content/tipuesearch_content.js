var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 四設計二甲 41023146 洪偉陞 \n \n 倉儲: https://github.com/mdecad2022/site-41023146 \n 網頁: https://mdecad2022.github.io/site-41023146/content/index.html \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Replit', 'text': '\n 1.先按Create創建一個repl,然後按Import from Github導入site開頭的倉儲 \n 2.導入倉儲,首先第一件要做的事是在Shell下執行git submodule update --init --recursive, \n 目的在於取下cmsite倉儲中子模組的檔案。 \n 3.然後在Shell下執行pip install flask flask_cors bs4 lxml pelican markdown gevent, \n 來安裝cmsimde需要的模組。 \n 4.切換到主函式main.py並按Run執行。 \n 5.若要推送到遠端Github,要用Version Control,打上標題然後按Commit All &Push。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Stud', 'text': '如何連線stud.cycu.org並執行動態網站? \n 1.首先要開啟cmd(小黑窗)中執行ssh cad(學號)@stud.cycu.org \n \xa0*若要用可攜中start.bat中的cmd要先將start.bat用編譯器打開並將第三行蓋掉,然後重新啟動。 \n 2.執行完會要你打密碼,密碼在學校Mail2000,10/04的一封 stud.cycu.org 帳號通知信 裡。 \n 3.連線完會進到OpenSSH SSH client的黑窗,再來是要生成ssh的key,在黑框中執行ssh-keygen。 \n 4.接下來就是要用FileZilla連線stud.cycu.org將.ssh目錄下的id_rsa.pub拉到本地的目錄中, \n 再用編譯器打開,並將內容送入到Github->Settings->SSH and GPG keys。 \n 5.然後下載config並用FileZilla送進.ssh目錄下 \n 6.然後在OpenSSH SSH client中執行以下三個指令: \n \xa0 \xa0 1.git config --global user.name "Github帳號名" \n \xa0 \xa0 2.git config --global user.email "Github信箱" \n \xa0 \xa0 3.git config --global http.proxy http://p42.cycu.org:3128 \n 7.將遠端Github的倉儲克隆下來,有以下兩種方法: \n \xa0 \xa0 1.http協定:git clone --recurse-submodules\xa0https://github.com/mdecad2022/site-xxxxxxxx.git \n \xa0\xa0\xa0 2.ssh協定:git clone --recurse-submodules git@github.com:mdecad2022/site-xxxxxxxx.git \n *由於克隆的方式不一樣倉儲中.git中的config設定也不同,因為最後是要用ssh推送到Github, \n 用https克隆的要將config設定改成ssh的樣子,也就是將https://github.com/mdecad2022/site-xxxxxxxx.git \n 改成git@github.com:mdecad2022/site-xxxxxxxx.git \n 8.再來要下載server.py的檔案用編輯器將自己9開頭的埠號輸入並將檔案用FileZilla送到倉儲目錄下 \n 9.然後在小黑窗執行cd site-xxxxxxxx移動到倉儲目錄下執行python3 server.py(沒出現東西就算成功) \n 10.在firefox或waterfox中執行https:stud.cycu.org:8xxx \n *若有設定proxy要關掉 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Stud.html'}, {'title': 'Schedule', 'text': '\n week 1 \n 1.中秋節放假。 \n week2 \n 1.簡要說明電腦輔助設計實習的規劃與安排。 \n week3 \n 1.用github classroom來建立mdecad2022帳號下,並由我們管理的倉儲。 \n 2.建replit帳號並將倉儲導入到Repls。 \n 3.用replit開啟動態和推送到github。 \n week4 \n 1.建立考試網站帳號 \n 2.下載可攜,建立近端可攜系統。 \n week5 \n 1.連線至stud.cycu.org,並用伺服器開啟動態網站 \n 2.使用filezilla移動檔案。 \n week6 \n 1.利用stud.cycu.org將倉儲推送到遠端。 \n 2.嘗試在校外連線stud.cycu.org \n week7 \n 1.git pull倉儲中的cmsimde模組(新增acp按鈕)', 'tags': '', 'url': 'Schedule.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};