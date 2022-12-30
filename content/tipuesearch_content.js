var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 四設計二甲 41023146 洪偉陞 \n \n 倉儲: https://github.com/mdecad2022/site-41023146 \n 網頁: https://mdecad2022.github.io/site-41023146/content/index.html \n \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Replit', 'text': '\n 1.先按Create創建一個repl,然後按Import from Github導入site開頭的倉儲 \n 2.導入倉儲,首先第一件要做的事是在Shell下執行git submodule update --init --recursive, \n 目的在於取下cmsite倉儲中子模組的檔案。 \n 3.然後在Shell下執行pip install flask flask_cors bs4 lxml pelican markdown gevent, \n 來安裝cmsimde需要的模組。 \n 4.切換到主函式main.py並按Run執行。 \n 5.若要推送到遠端Github,要用Version Control,打上標題然後按Commit All &Push。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Stud', 'text': '如何連線stud.cycu.org並執行動態網站? \n 1.首先要開啟cmd(小黑窗)中執行ssh cad(學號)@stud.cycu.org \n \xa0*若要用可攜中start.bat中的cmd要先將start.bat用編譯器打開並將第三行蓋掉,然後重新啟動。 \n 2.執行完會要你打密碼,密碼在學校Mail2000,10/04的一封 stud.cycu.org 帳號通知信 裡。 \n 3.連線完會進到OpenSSH SSH client的黑窗,再來是要生成ssh的key,在黑框中執行ssh-keygen。 \n 4.接下來就是要用 FileZilla 連線stud.cycu.org將.ssh目錄下的id_rsa.pub拉到本地的目錄中, \n 再用編譯器打開,並將內容送入到Github->Settings->SSH and GPG keys。 \n 5.然後下載config並用 FileZilla 送進.ssh目錄下 \n 6.然後在OpenSSH SSH client中執行以下三個指令: \n \xa0 \xa0 1.git config --global user.name "Github帳號名" \n \xa0 \xa0 2.git config --global user.email "Github信箱" \n \xa0 \xa0 3.git config --global http.proxy http://p42.cycu.org:3128 \n 7.將遠端Github的倉儲克隆下來,有以下兩種方法: \n \xa0 \xa0 1.http協定:git clone --recurse-submodules\xa0https://github.com/mdecad2022/site-xxxxxxxx.git \n \xa0\xa0\xa0 2.ssh協定:git clone --recurse-submodules git@github.com:mdecad2022/site-xxxxxxxx.git \n *由於克隆的方式不一樣倉儲中.git中的config設定也不同,因為最後是要用ssh推送到Github, \n 用https克隆的要將config設定改成ssh的樣子,也就是將https://github.com/mdecad2022/site-xxxxxxxx.git \n 改成git@github.com:mdecad2022/site-xxxxxxxx.git \n 8.再來要下載server.py的檔案用編輯器將自己9開頭的埠號輸入並將檔案用FileZilla送到倉儲目錄下 \n 9.然後在小黑窗執行cd site-xxxxxxxx移動到倉儲目錄下執行python3 server.py(沒出現東西就算成功) \n 10.在firefox或waterfox中執行https:stud.cycu.org:8xxx \n *若有設定proxy要關掉 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Stud.html'}, {'title': 'FileZilla', 'text': '\n 如何用filezilla連線stud.cycu.org? \n 1.將FileZillaPortable_3.61.0.paf.exe解壓縮並打開FileZillaPortable.exe。 \n \n 2.打開檔案中的站台管理員。 \n 3.然後新增站台協定設定為SFTP,主機為stud.cycu.org,登入類型選詢問密碼,使用者為cad(學號)。 \n \n 4.輸入密碼(和小黑窗連線伺服器的密碼一致) \n \n', 'tags': '', 'url': 'FileZilla.html'}, {'title': 'SSH Push', 'text': '如何在stud.cycu.org伺服器中用ssh協定推送? \n \n 1.先用 FileZilla 將acp移動到倉儲目錄下。 \n \n 2.執行ssh-keygen生成sshkey並將key(id_rsa.pub)送到Github。 \n \n 3..確認倉儲中.git中的config和.ssh目錄下的config的Host兩者對應。 \n \n 4.倉儲中.git中的config的remote "origin"是否為ssh協定。 \n *就是ssh克隆的樣子*若用https協定克隆則要修改#灰色部分就是要和上面Host對應的部分 \n \n 5.動態網頁更新完轉靜態然後變更目錄(cd)到倉儲目錄執行source acp "標題"。 \n \n', 'tags': '', 'url': 'SSH Push.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w6', 'text': '\n 1.零件一練習wink影片。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 2.零件二練習wink影片。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 3.零件3練習wink影片。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 4.零件4練習wink影片。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 5.零件1和零件2組合件練習wink影片。 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w8', 'text': '1.各程式(onshape、solvespace、NX2027)及檔案(drill_press)開啟截圖。 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w10', 'text': '\n HW2.已知 block.prt 中 p8=59, p9=44, 請利用網際表單, 將 p8, p9 都改為 50 之後, 在瀏覽中提供新的 block_new.prt 檔案下載, 並直接在網頁上展示該零件的 STL 格式檔案. \n 1. block_new.prt 檔案下載 \n 2. block_ascii.stl.txt 檔案下載 \n 3. flask_form.py 檔案下載 \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w12', 'text': '\n 考試題目: 2ag1.leo  , 2ag1.xml \n 出題人: \n w5:41023146 \n w6:41023146 \n w8_w9:41023104 \n NX:41023147 \n SolidWords:41023143 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '\n 1.Solvespace 編譯繪圖與應用. \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'Solvespace', 'text': '1.以 Solvespace 3.1 完成與影片相同連桿與旋轉軸尺寸之 two link robot 零組件繪製: 檔案下載 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'NX', 'text': '1.使用 NX2027 繪製 one link robot 零組件後, , 壓縮為 .7z 檔案: 檔案下載 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'NX.html'}, {'title': 'Onshape', 'text': 'base_url: https://cad.onshape.com/documents/69a958eefe13cb824d22f086/w/678d42b2946844ad9e23d3c8/e/46c8745421dda0dcea3a4922?renderMode=0&uiState=63932248a178d12c31dc5d59 \n shaft_url: https://cad.onshape.com/documents/559f5960eea12f7c90218383/w/27bf7d9dcecf0adf425ceacb/e/cbf5eb59824261fb8910f74d \n link_url: https://cad.onshape.com/documents/6aa14ee5eb03758f638aba78/w/9a9fb90fe51918d5a0afd94c/e/5327c29e5dd853fa681c7496?renderMode=0&uiState=63932283a178d12c31dc5f5b \n base_shaft_link_url: https://cad.onshape.com/documents/c9236dce7db7755cb6afb6e9/w/c4f05710558bb401b1703597/e/7d45a10270a69afc5d68e0db?renderMode=0&uiState=63932296a178d12c31dc5f75 \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'w15', 'text': 'two_link壓縮檔 \n 1.two_link solvespace wink影片 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 2.two_link CoppeliaSim wink影片 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n 3.two_link CoppeliaSim 加入python程式控制 wink影片 \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '以 Coppeliasim 4.3.0 rev 12 完成一個彈珠台遊戲系統, 使用者可透過鍵盤操作送球與挑球動作進行遊戲, 期間並可透過感測器依據碰撞與彈射位置計算得分. \n 1.彈珠檯繪製wink影片, 彈珠檯.stl 圖檔下載 \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w16.html'}, {'title': 'Schedule', 'text': '\n week 1 \n 1.中秋節放假。 \n week2 \n 1.簡要說明電腦輔助設計實習的規劃與安排。 \n week3 \n 1.用github classroom來建立mdecad2022帳號下,並由我們管理的倉儲。 \n 2.建replit帳號並將倉儲導入到Repls。 \n 3.用replit開啟動態和推送到github。 \n week4 \n 1.建立考試網站帳號 \n 2.下載可攜,建立近端可攜系統。 \n week5 \n 1.連線至stud.cycu.org,並用伺服器開啟動態網站 \n 2.使用filezilla移動檔案。 \n week6 \n 1.利用stud.cycu.org將倉儲推送到遠端。 \n 2.嘗試在校外連線stud.cycu.org \n week7 \n 1.git pull倉儲中的cmsimde模組(新增acp按鈕) \n week8 \n 1.期中考 \n week9 \n 1.期中考 \n week10 \n 1.開始出考試題目 \n 2.利用網際表單,更改零件參數 \n week11 \n 1.運動會 \n week12 \n 1.嘗試自行從原始碼編譯後, 取得可以執行的 solvespace.exe \n 2.上傳考試題目 \n week13 \n 1.單軸旋轉零組件繪製與應用 \n week14 \n 1.Solvespace、NX2027、Onshape 零組件繪圖考試。 \n week15 \n 1.Solvespace繪製two_link零件及加入兩個轉軸 \n week16 \n 1.繪製彈珠檯 \n 2.用python程式操控彈珠台(進行中) \n \n \n', 'tags': '', 'url': 'Schedule.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};