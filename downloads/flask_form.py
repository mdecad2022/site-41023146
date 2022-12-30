from flask import Flask, request
# for NX2027
import NXOpen
import NXOpen.UF
import NXOpen.Gateway

app = Flask(__name__)


@app.route('/')
def index():
    return '''
    <form action="/action" method="post">
    a: <input type="text" name="a" size="10"><br />
    b: <input type="text" name="b" size="10"><br />
    <input type="submit" value="send">
    </form>
    '''
a=10
b=10
@app.route('/action', methods=['POST'])
def action():
    global a,b
    a = request.form['a']
    b = request.form['b']
   
    return "a: " + a +", " + "b: " + b

@app.route('/nxopen')
def nxopen():
    # 取得目前開啟的工作階段
    theSession = NXOpen.Session.GetSession()
    theUfSession = NXOpen.UF.UFSession.GetUFSession()
      
    # 建立 ListingWindow
    listWin= theSession.ListingWindow
    # 開啟零件檔案
    basePart1 = theSession.Parts.OpenBaseDisplay("block.prt")
    workPart = theSession.Parts.Work
    unit1 = workPart.UnitCollection.FindObject("MilliMeter")
    # height
    p7 = workPart.Expressions.FindObject("p7")
    # width
    p8 = workPart.Expressions.FindObject("p8")
    # length
    p9 = workPart.Expressions.FindObject("p9")
    workPart.Expressions.EditWithUnits(p7, unit1, "50")
    workPart.Expressions.EditWithUnits(p8, unit1, a)
    workPart.Expressions.EditWithUnits(p9, unit1, b)
    theSession.UpdateManager.DoUpdate(0)
    try:
        saveStatus1 = workPart.SaveAs("block_new.prt")
        saveStatus1.Dispose()
    except:
        pass
    # initialize list to hold bodies
    theBodyTags = []
   
    for x in workPart.Bodies:
        if x.IsSolidBody:
            theBodyTags.append(x.Tag)
      
    # 準備輸出 ASCII 格式 STL 零件檔案
    sTLCreator1 = theSession.DexManager.CreateStlCreator()
    sTLCreator1.AutoNormalGen = True
    sTLCreator1.ChordalTol = 0.08
    sTLCreator1.AdjacencyTol = 0.08
    sTLCreator1.OutputFile = "block_ascii.stl"
    # Binary STL: NXOpen.STLCreatorOutputTypeEnum.Binary
    sTLCreator1.OutputType = NXOpen.STLCreatorOutputTypeEnum.Text
    # 已知 body1 命名
    body1 = workPart.Bodies.FindObject("EXTRUDE(2)")
    added1 = sTLCreator1.ExportSelectionBlock.Add(body1)
    nXObject1 = sTLCreator1.Commit()
    sTLCreator1.Destroy()
  
    # 開啟所建立的 ListingWindow
    listWin.Open()
    listWin.WriteLine("number of solid bodies: " + str(len(theBodyTags)))
   
    (massProps, Stats) = theUfSession.Modeling.AskMassProps3d(theBodyTags, len(theBodyTags), 1, 4, .03, 1, [0.99,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0])
    listWin.WriteLine("units: kg, mm")
    listWin.WriteLine("surface area: " + str(massProps[0]))
    listWin.WriteLine("volume: " + str(massProps[1]*1E9))
    # 在 ListingWindow 中寫入字串
    listWin.WriteLine("Hello, NXOpen")
    listWin.Close()
    
    return "mass: " + str(massProps[0])
    
# app.run(host=ip, port=port, debug=True, ssl_context="adhoc")
app.run(port=8169)
