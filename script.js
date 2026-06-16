const STORAGE_KEY = "javaVillageProgress";

const createActivity = (activity) => activity;

const chapters = [
  {
    id: 1,
    code: "CH01",
    title: "Java 簡介",
    minutes: 25,
    summary: "認識 Java 是什麼、能做什麼，以及它和 JavaScript 的差別。",
    intro: "本章先建立全局觀。你不需要先會寫程式，只要知道 Java 是一種被大量使用、重視穩定性與可維護性的程式語言。",
    sections: [
      {
        sectionId: "1.1",
        title: "Java 是什麼",
        body: [
          "Java 是一種程式設計語言，也是一套可以讓程式在不同電腦上執行的平台。它在 1990 年代出現，到現在仍然被很多公司、學校與開發團隊使用。",
          "如果把程式語言想成和電腦溝通的語言，Java 就是一種語法清楚、規則嚴謹、適合建立大型系統的語言。新手剛開始可能會覺得 Java 比較正式，但這份正式感會幫你養成穩定的程式思考方式。"
        ],
        code: {
          title: "最小 Java 程式概念",
          value: `public class App {
    public static void main(String[] args) {
        System.out.println("我正在學 Java");
    }
}`
        }
      },
      {
        sectionId: "1.2",
        title: "Java 可以做什麼",
        body: [
          "Java 常用在企業後端系統，例如訂單、會員、庫存、金流與內部管理系統。許多銀行、電商、物流平台都會使用 Java 建立穩定服務。",
          "Java 也可以製作 Android App、桌面程式、遊戲伺服器、資料處理工具與大型網站的後端。學會 Java 之後，你會比較容易理解伺服器、資料庫、API 與物件導向設計。"
        ],
        list: [
          "後端服務：處理登入、訂單、資料查詢與 API。",
          "Android 應用：Java 曾是 Android 開發的重要語言。",
          "企業系統：公司內部管理、報表、金流與大型資料流程。",
          "工具程式：檔案整理、資料轉換、自動化小工具。"
        ]
      },
      {
        sectionId: "1.3",
        title: "Java 的特色",
        body: [
          "跨平台是 Java 很重要的特色。Java 程式通常會先被編譯成 bytecode，再由 JVM 執行，因此同一份程式可以在不同作業系統上運作。",
          "Java 是物件導向語言，程式會用 class、object 等概念組織。它也重視穩定、可維護與清楚的型態規則，所以很適合長期維護的大型專案。"
        ],
        list: [
          "跨平台：常聽到的概念是 write once, run anywhere。",
          "物件導向：用類別與物件整理程式邏輯。",
          "穩定成熟：語言與生態系發展多年，文件與工具都很完整。",
          "企業與 Android 常見：求職市場與實務專案中都能看見。"
        ]
      },
      {
        sectionId: "1.4",
        title: "Java 和 JavaScript 的差別",
        body: [
          "Java 和 JavaScript 不是同一種語言。它們名字相似，但語法、用途、執行方式與主要應用場景都不同。",
          "Java 通常需要編譯，常用於後端、企業系統與 Android。JavaScript 主要在瀏覽器與 Node.js 中執行，常用於網頁互動、前端開發與全端開發。"
        ]
      },
      {
        sectionId: "1.5",
        title: "新手學 Java 前需要知道什麼",
        body: [
          "你不需要先懂高深數學，也不需要先會其他語言。最重要的是願意慢慢練習：看懂一小段、改一小段、執行一小段。",
          "學 Java 時會常遇到錯誤訊息。錯誤訊息不是失敗通知，而是電腦告訴你哪裡需要修正。新手真正要練的是讀錯、改錯、再執行。"
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch01-think-java-js",
        sectionId: "1.5",
        type: "thought",
        title: "思考題：Java 和 JavaScript 是同一種語言嗎？",
        question: "請用一句話回答，並寫出你目前知道的一個差異。",
        hint: "可以從用途、執行環境、是否需要編譯這幾個角度想。",
        solution: "不是。Java 和 JavaScript 是不同語言；Java 常用於後端、企業系統與 Android，而 JavaScript 常用於瀏覽器互動與前端開發。",
        explanation: "名字相似不代表語言相同。Java 的程式通常會經過編譯並由 JVM 執行；JavaScript 則常直接由瀏覽器或 Node.js 執行。學習時請把它們當成兩條不同路線。"
      }),
      createActivity({
        id: "ch01-exercise-products",
        sectionId: "1.2",
        type: "exercise",
        title: "實作練習：列出 Java 可以製作的東西",
        question: "列出 3 個你覺得 Java 可以製作的東西，並簡單說明用途。",
        hint: "想想每天用到的服務：購物網站、銀行 App、公司內部系統、遊戲帳號系統。",
        solution: "1. 電商後端：處理商品、購物車與訂單。\n2. Android App：製作手機上的工具或學習 App。\n3. 公司管理系統：管理員工、庫存、報表與資料查詢。",
        explanation: "這題沒有唯一答案。重點是把 Java 和實際軟體連起來，知道它不只是課本語法，而是能支撐真實產品與服務的工具。"
      }),
      createActivity({
        id: "ch01-homework-compare",
        sectionId: "1.5",
        type: "homework",
        title: "作業：寫一段 Java 學習前筆記",
        question: "用 5 到 8 句話整理：Java 是什麼、可以做什麼、和 JavaScript 有什麼不同、你想用 Java 做什麼。",
        hint: "可以用本章小標題當作段落順序，一句一句寫，不需要寫得很華麗。",
        solution: "Java 是一種常用於大型系統的程式語言。它可以用來製作企業後端、Android App、工具程式與遊戲伺服器。Java 的特色是跨平台、穩定、物件導向。Java 和 JavaScript 不是同一種語言，JavaScript 常用於網頁互動，而 Java 常見於後端與企業系統。我想用 Java 做一個可以儲存資料的學習紀錄系統。",
        explanation: "作業的目的不是背定義，而是確認你能用自己的話說出 Java 的定位。能說清楚用途，後面學語法時會比較知道每個概念為什麼重要。"
      })
    ],
    quiz: [
      {
        question: "Java 和 JavaScript 是同一種語言嗎？",
        options: ["不是，它們是不同語言", "是，只是版本不同", "是，JavaScript 是 Java 的縮寫", "只有在瀏覽器中才一樣"],
        answer: 0,
        explanation: "Java 和 JavaScript 名字相似，但它們是不同語言，用途與執行方式也不同。"
      },
      {
        question: "Java 常被用在哪一類系統？",
        options: ["企業後端系統", "只能做圖片編輯", "只能做網頁動畫", "只能寫作業系統"],
        answer: 0,
        explanation: "Java 在企業後端、金融、電商、Android 等場景都很常見。"
      },
      {
        question: "Java 跨平台通常和哪個元件有關？",
        options: ["JVM", "CSS", "瀏覽器書籤", "螢幕解析度"],
        answer: 0,
        explanation: "JVM 負責執行 Java bytecode，讓 Java 程式能在不同平台上運作。"
      }
    ]
  },
  {
    id: 2,
    code: "CH02",
    title: "初探 Java",
    minutes: 35,
    summary: "理解 JDK、編輯器、Hello World，以及 Java 程式的基本組成。",
    intro: "本章會讓你看見第一個完整 Java 程式。先不要急著背每個字，重點是知道每一段大概負責什麼。",
    sections: [
      {
        sectionId: "2.1",
        title: "JDK 是什麼",
        body: [
          "JDK 是 Java Development Kit，也就是 Java 開發工具包。它包含寫 Java 程式需要的工具，例如編譯器 javac，以及執行 Java 程式所需的環境。",
          "你可以把 JDK 想成 Java 開發的工具箱。只安裝一般使用者執行程式需要的環境還不夠，因為開發者還需要把程式碼編譯成電腦能執行的形式。"
        ]
      },
      {
        sectionId: "2.2",
        title: "安裝編輯器",
        body: [
          "VS Code 是輕量、擴充彈性高的編輯器，適合想用同一套工具寫多種語言的人。安裝 Java 相關擴充套件後，也可以寫 Java。",
          "IntelliJ IDEA 是很受 Java 開發者歡迎的 IDE。它對 Java 專案、錯誤提示、重構與自動完成支援完整，適合長期深入學習。"
        ]
      },
      {
        sectionId: "2.3",
        title: "第一個 Java 程式",
        body: [
          "許多語言的第一個範例都是 Hello World。它的目的不是做出複雜功能，而是確認你的環境、檔案、編譯與執行流程都能正常運作。",
          "請注意檔名和 class 名稱的關係：如果 class 叫做 HelloWorld，檔案通常也要命名為 HelloWorld.java。大小寫也要一致。"
        ],
        code: {
          title: "HelloWorld.java",
          value: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`
        }
      },
      {
        sectionId: "2.4",
        title: "Java 程式的組成要素",
        body: [
          "`public class HelloWorld` 定義了一個名為 HelloWorld 的類別。Java 程式通常會放在 class 裡面。",
          "`public static void main(String[] args)` 是程式開始執行的入口。當你執行這個程式時，Java 會從 main 方法開始跑。",
          "`System.out.println(\"Hello, Java!\");` 會把文字輸出到畫面上。println 的意思可以想成 print line，輸出後換行。",
          "大括號 `{}` 用來包住 class 或方法的內容；分號 `;` 則常用在一個指令結束的地方。少了分號是新手很常見的錯誤。"
        ]
      },
      {
        sectionId: "2.5",
        title: "編譯與執行",
        body: [
          "Java 程式通常會先寫在 `.java` 檔案中。接著用編譯器把它轉成 `.class` 檔案，最後交給 JVM 執行。",
          "你可以先記住流程：寫程式碼、編譯、執行、看結果、修正錯誤。這個循環會陪你很久，也會讓你越來越熟。",
          "如果看到找不到 class、找不到 main 方法、或分號錯誤，先不要慌。檢查檔名、class 名稱、main 方法拼字，以及每行指令是否有分號。",
          "初學階段請先把程式放在簡單路徑，避免資料夾名稱太複雜。每次只改一小段，再重新編譯執行，會比較容易找出問題。"
        ],
        code: {
          title: "終端機概念指令",
          value: `javac HelloWorld.java
java HelloWorld`
        }
      }
    ],
    activities: [
      createActivity({
        id: "ch02-exercise-name",
        sectionId: "2.3",
        type: "exercise",
        title: "實作練習：改成自己的名字",
        question: "把 `System.out.println(\"Hello, Java!\");` 裡面的文字改成自己的名字，並觀察輸出結果。",
        hint: "只需要改雙引號裡面的文字，不要刪掉雙引號、括號或分號。",
        solution: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("我是小明");
    }
}`,
        explanation: "System.out.println() 會輸出括號內的內容。文字資料要放在雙引號中，指令最後要保留分號。"
      }),
      createActivity({
        id: "ch02-thought-main",
        sectionId: "2.4",
        type: "thought",
        title: "思考題：為什麼 main 方法很重要？",
        question: "請用自己的話說明：如果 Java 程式沒有 main 方法，可能會發生什麼事？",
        hint: "想像你進入一棟大樓，但沒有入口。main 方法就是程式開始執行的入口。",
        solution: "main 方法是 Java 應用程式常見的執行入口。如果沒有 main 方法，JVM 可能不知道程式應該從哪裡開始執行。",
        explanation: "class 可以放很多方法，但程式啟動時需要一個明確起點。初學時先記住：要讓簡單 Java 程式能直接執行，通常需要 public static void main(String[] args)。"
      }),
      createActivity({
        id: "ch02-homework-intro",
        sectionId: "2.5",
        type: "homework",
        title: "作業：輸出三行自我介紹",
        question: "寫一個程式，輸出三行自我介紹。第一行是名字，第二行是目前想學 Java 的原因，第三行是你希望做出的作品。",
        hint: "可以使用三個 System.out.println()，每一行輸出一段文字。",
        solution: `public class AboutMe {
    public static void main(String[] args) {
        System.out.println("我是小明");
        System.out.println("我想學 Java，因為我想理解後端系統");
        System.out.println("我希望做出一個學習進度管理工具");
    }
}`,
        explanation: "每呼叫一次 System.out.println() 就會輸出一行並換行。這個作業讓你練習 class、main 方法、字串輸出與分號。"
      })
    ],
    quiz: [
      {
        question: "JDK 的主要用途是什麼？",
        options: ["提供 Java 開發所需工具", "調整螢幕亮度", "只用來寫 HTML", "管理瀏覽器分頁"],
        answer: 0,
        explanation: "JDK 是 Java Development Kit，包含編譯與開發 Java 程式需要的工具。"
      },
      {
        question: "Java 程式的執行入口通常是哪個方法？",
        options: ["main", "startPage", "printOnly", "javaScript"],
        answer: 0,
        explanation: "Java 應用程式通常從 main 方法開始執行。"
      },
      {
        question: "`System.out.println()` 的作用是什麼？",
        options: ["輸出文字並換行", "建立資料庫", "安裝 JDK", "刪除 class"],
        answer: 0,
        explanation: "println 會將內容輸出到畫面，並在輸出後換行。"
      },
      {
        question: "Java 指令結尾常見的符號是什麼？",
        options: ["分號 ;", "逗號 ,", "問號 ?", "井字號 #"],
        answer: 0,
        explanation: "許多 Java 敘述句結尾都需要分號，忘記分號會造成編譯錯誤。"
      },
      {
        question: "`javac HelloWorld.java` 的概念是什麼？",
        options: ["編譯 Java 程式", "開啟圖片", "啟動瀏覽器", "新增資料夾"],
        answer: 0,
        explanation: "javac 是 Java 編譯器，用來把 .java 程式碼編譯成 .class。"
      }
    ]
  },
  {
    id: 3,
    code: "CH03",
    title: "變數",
    minutes: 42,
    summary: "學會變數、資料型態、命名規則，以及常見錯誤。",
    intro: "變數是程式設計最重要的基礎之一。你可以把變數想成貼了標籤的盒子，用來存放資料。",
    sections: [
      {
        sectionId: "3.1",
        title: "變數是什麼",
        body: [
          "變數是用來儲存資料的名稱。程式執行時，我們常常需要記住某些值，例如名字、年齡、分數、是否登入、商品價格。",
          "在 Java 裡，變數通常需要先宣告型態。型態會告訴 Java 這個變數準備存放什麼種類的資料。"
        ],
        code: {
          title: "宣告變數",
          value: `String name = "小明";
int age = 18;`
        }
      },
      {
        sectionId: "3.2",
        title: "為什麼需要變數",
        body: [
          "如果程式裡的資料都直接寫死，修改起來會很麻煩，也很容易出錯。變數讓我們可以重複使用資料，並讓程式根據不同資料產生不同結果。",
          "例如同一段輸出句子，只要 name 的值不同，就可以顯示不同人的名字。"
        ],
        code: {
          title: "使用變數輸出",
          value: `String name = "小明";
System.out.println("你好，我是 " + name);`
        }
      },
      {
        sectionId: "3.3",
        title: "Java 常見資料型態",
        body: [
          "`int` 用來存放整數，例如年齡、數量、分數。`double` 用來存放有小數的數字，例如身高、體重、價格。",
          "`char` 用來存放單一字元，`boolean` 只能是 true 或 false，`String` 則用來存放文字。注意 String 的 S 是大寫，這對 Java 來說很重要。"
        ],
        code: {
          title: "常見資料型態",
          value: `int age = 18;
double height = 170.5;
char level = 'A';
boolean isStudent = true;
String name = "小明";`
        }
      },
      {
        sectionId: "3.4",
        title: "宣告變數與賦值",
        body: [
          "宣告變數就是告訴 Java：我要建立一個可以存資料的名稱。賦值就是把資料放進這個變數。",
          "你可以在宣告時直接賦值，也可以先宣告，之後再放入資料。不過在使用變數前，它必須已經有合理的值。"
        ],
        code: {
          title: "宣告後再賦值",
          value: `int score;
score = 95;
System.out.println(score);`
        }
      },
      {
        sectionId: "3.5",
        title: "變數命名規則",
        body: [
          "變數名稱可以包含英文字母、數字、底線與錢字符號，但不能用數字開頭。新手建議使用清楚的英文單字，讓自己之後看得懂。",
          "Java 常見的命名風格是 camelCase，例如 `studentName`、`totalPrice`、`isPassed`。名稱不能和 Java 保留字相同，例如不能把變數命名為 `class`。"
        ],
        list: [
          "好名稱：name、age、studentName、totalScore。",
          "避免：a、x、data1，除非情境非常簡單。",
          "不能：1name、class、my-name。"
        ]
      },
      {
        sectionId: "3.7",
        title: "常見錯誤",
        body: [
          "忘記分號是最常見的錯誤之一。Java 看到指令沒有正常結束，就會在編譯時提醒你。",
          "型態不合也很常見，例如把文字放進 int。另一種錯誤是變數名稱打錯，像是宣告 `studentName`，使用時卻寫成 `studentname`。Java 會把大小寫不同的名稱視為不同變數。"
        ],
        code: {
          title: "常見錯誤範例",
          value: `int age = "十八";      // 錯誤：int 不能存文字
String name = "小明"   // 錯誤：少了分號
System.out.println(Name); // 錯誤：name 和 Name 不同`
        }
      },
      {
        sectionId: "3.6",
        title: "使用變數輸出資料",
        body: [
          "變數最常見的用途之一，是把資料組合成有意義的輸出。Java 可以用加號 `+` 把文字和變數串接起來。",
          "當你看到很多加號時，先從左到右讀：固定文字、變數、固定文字、變數。這樣會比一次看完整行容易很多。"
        ],
        code: {
          title: "個人資料輸出",
          value: `String name = "小明";
int age = 18;
double height = 170.5;

System.out.println("姓名：" + name);
System.out.println("年齡：" + age);
System.out.println("身高：" + height + " 公分");`
        }
      }
    ],
    activities: [
      createActivity({
        id: "ch03-exercise-profile-vars",
        sectionId: "3.6",
        type: "exercise",
        title: "實作練習：建立 name、age、height 變數",
        question: "建立 `name`、`age`、`height` 三個變數，分別存放你的名字、年齡與身高，並用 `System.out.println()` 輸出。",
        hint: "name 適合用 String，age 適合用 int，height 適合用 double。",
        solution: `public class ProfilePractice {
    public static void main(String[] args) {
        String name = "小明";
        int age = 18;
        double height = 170.5;

        System.out.println("姓名：" + name);
        System.out.println("年齡：" + age);
        System.out.println("身高：" + height);
    }
}`,
        explanation: "這題練習三種常見資料型態：文字用 String，整數用 int，有小數的數字用 double。輸出時可以用 + 把文字和變數串接。"
      }),
      createActivity({
        id: "ch03-thought-int-double",
        sectionId: "3.3",
        type: "thought",
        title: "思考題：年齡和身高適合用什麼型態？",
        question: "為什麼年齡適合用 `int`，而身高可能適合用 `double`？",
        hint: "關鍵在於資料是否需要小數，以及小數是否會影響表達的精準度。",
        solution: "年齡通常用整數表示，例如 18 歲，所以適合 int。身高常需要小數，例如 170.5 公分，所以適合 double。",
        explanation: "選型態時要看資料特性。若資料本質上是完整數量，用 int 較自然；若資料可能有小數，用 double 才能保存小數部分。"
      }),
      createActivity({
        id: "ch03-homework-profile-card",
        sectionId: "3.6",
        type: "homework",
        title: "作業：簡單個人資料卡程式",
        question: "寫一個簡單個人資料卡程式，輸出姓名、年齡、身高、是否為學生，以及一句自我介紹。",
        hint: "你會需要 String、int、double、boolean。可以用多個 println 輸出。",
        solution: `public class ProfileCard {
    public static void main(String[] args) {
        String name = "小明";
        int age = 18;
        double height = 170.5;
        boolean isStudent = true;
        String intro = "我正在學 Java，希望做出自己的作品。";

        System.out.println("姓名：" + name);
        System.out.println("年齡：" + age);
        System.out.println("身高：" + height + " 公分");
        System.out.println("學生：" + isStudent);
        System.out.println("自我介紹：" + intro);
    }
}`,
        explanation: "這份作業把本章重點串起來：宣告變數、選擇資料型態、賦值、用變數輸出資料。若程式錯誤，優先檢查分號、大小寫與型態是否符合。"
      })
    ],
    quiz: [
      {
        question: "變數的主要用途是什麼？",
        options: ["儲存資料並讓程式使用", "只用來改變背景顏色", "刪除程式碼", "安裝編輯器"],
        answer: 0,
        explanation: "變數讓程式可以保存與重複使用資料。"
      },
      {
        question: "哪一個型態適合存放整數年齡？",
        options: ["int", "double", "boolean", "char"],
        answer: 0,
        explanation: "年齡通常是整數，因此適合用 int。"
      },
      {
        question: "哪一個型態適合存放 `true` 或 `false`？",
        options: ["boolean", "String", "double", "char"],
        answer: 0,
        explanation: "boolean 只能存 true 或 false。"
      },
      {
        question: "在 Java 中，哪個變數名稱比較合適？",
        options: ["studentName", "1student", "my-name", "class"],
        answer: 0,
        explanation: "studentName 符合 camelCase 且不是保留字。"
      },
      {
        question: "`String name = \"小明\";` 中的 String 用來表示什麼？",
        options: ["文字資料", "整數", "單一字元", "真假值"],
        answer: 0,
        explanation: "String 用來存放文字，而且 S 必須大寫。"
      }
    ]
  },
  {
    id: 4,
    code: "CH04",
    title: "運算式（Expression）",
    minutes: 75,
    summary: "學會運算式、常見算符、布林判斷、型態轉換與 Scanner 輸入。",
    intro: "運算式是程式做計算、比較、組合文字與判斷條件的基礎。本章會從最簡單的 `5 + 3` 開始，慢慢走到布林運算、位元運算、轉型與使用者輸入。",
    sections: [
      {
        sectionId: "4.1",
        title: "什麼是運算式",
        body: [
          "運算式是可以被 Java 算出一個結果的程式片段。它可能是數學計算，也可能是比較結果，甚至可以是文字串接。",
          "運算式通常由三個部分組成：運算元（Operand）、算符（Operator）與運算結果（Result）。以 `5 + 3` 來說，`5` 和 `3` 是運算元，`+` 是算符，結果是 `8`。",
          "`age >= 18` 也是運算式。它會得到 boolean 結果，也就是 true 或 false。`name + \"同學\"` 也是運算式，結果會是一段新的文字。"
        ],
        code: {
          title: "運算式範例",
          value: `5 + 3
age >= 18
name + "同學"`
        }
      },
      {
        sectionId: "4.2",
        title: "指定算符（Assignment Operator）",
        body: [
          "指定算符用來把右邊的值放進左邊的變數。最基本的是 `=`，例如 `int x = 10;`，意思是建立 x 並放入 10。",
          "`+=`、`-=`、`*=`、`/=`、`%=` 是複合指定算符。它們會先用原本的變數值做運算，再把結果存回同一個變數。",
          "例如 `x += 5;` 相當於 `x = x + 5;`。這種寫法在累加分數、扣除庫存、更新剩餘秒數時很常見。"
        ],
        code: {
          title: "指定算符",
          value: `int x = 10;
x += 5;   // x = x + 5
x -= 2;   // x = x - 2
x *= 3;   // x = x * 3
x /= 4;   // x = x / 4
x %= 2;   // x = x % 2`
        },
        codes: [
          {
            title: "= 基本指定",
            value: `int count = 10;
String name = "Jimmy";
boolean passed = true;`
          },
          {
            title: "+= 累加",
            value: `int score = 80;
score += 10;
System.out.println(score); // 90`
          },
          {
            title: "-= 扣除",
            value: `int coins = 50;
coins -= 15;
System.out.println(coins); // 35`
          },
          {
            title: "*= 與 /= 更新數值",
            value: `int price = 100;
price *= 2;
System.out.println(price); // 200

int people = 20;
people /= 4;
System.out.println(people); // 5`
          }
        ]
      },
      {
        sectionId: "4.3",
        title: "數值運算",
        body: [
          "Java 的基本數值運算包含加法 `+`、減法 `-`、乘法 `*`、除法 `/` 與取餘數 `%`。這些符號會回傳一個新的數值結果。",
          "整數除法是新手很容易踩到的地方。當兩邊都是 int 時，`10 / 3` 會得到 `3`，小數部分會被捨去，不會自動變成 3.333。",
          "`%` 叫做取餘數。例如 `10 % 3` 的結果是 `1`，因為 10 除以 3 可以分成 3 組，剩下 1。"
        ],
        code: {
          title: "數值運算",
          value: `int a = 10;
int b = 3;

System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3
System.out.println(a % b); // 1`
        },
        codes: [
          {
            title: "加法",
            value: `int total = 120 + 80;
System.out.println(total); // 200`
          },
          {
            title: "減法",
            value: `int remaining = 100 - 35;
System.out.println(remaining); // 65`
          },
          {
            title: "乘法",
            value: `int area = 6 * 4;
System.out.println(area); // 24`
          },
          {
            title: "除法",
            value: `int groups = 20 / 5;
System.out.println(groups); // 4`
          },
          {
            title: "餘數",
            value: `int leftover = 17 % 5;
System.out.println(leftover); // 2`
          },
          {
            title: "整數除法",
            value: `int result = 10 / 3;
System.out.println(result); // 3，不是 3.333`
          }
        ]
      },
      {
        sectionId: "4.4",
        title: "布林運算（Logical Operation）",
        body: [
          "布林運算會得到 true 或 false，常用於條件判斷。比較算符包含 `>`、`<`、`>=`、`<=`、`==`、`!=`。",
          "`&&` 表示而且，左右兩邊都要是 true，結果才是 true。`||` 表示或者，只要其中一邊是 true，結果就是 true。`!` 則會把 true 變 false，把 false 變 true。",
          "例如 `age >= 18 && age <= 65` 可以用來判斷年齡是否落在 18 到 65 之間。"
        ],
        code: {
          title: "布林運算",
          value: `int age = 25;
boolean canVote = age >= 18;
boolean workingAge = age >= 18 && age <= 65;

System.out.println(canVote);
System.out.println(workingAge);`
        },
        codes: [
          {
            title: "> 大於",
            value: `int score = 85;
System.out.println(score > 60); // true`
          },
          {
            title: "== 等於",
            value: `int level = 3;
System.out.println(level == 3); // true`
          },
          {
            title: "!= 不等於",
            value: `String role = "student";
System.out.println(role != "admin"); // true`
          },
          {
            title: "&& 而且",
            value: `int age = 25;
System.out.println(age >= 18 && age <= 65); // true`
          },
          {
            title: "|| 或者",
            value: `boolean hasTicket = false;
boolean isVip = true;
System.out.println(hasTicket || isVip); // true`
          },
          {
            title: "! 反轉",
            value: `boolean isLocked = false;
System.out.println(!isLocked); // true`
          }
        ]
      },
      {
        sectionId: "4.5",
        title: "位元運算（Bitwise Operation）",
        body: [
          "位元運算會直接針對整數的二進位位元做操作。新手不用先深入 CPU 或硬體，只要知道整數在底層可以看成一串 0 和 1。",
          "`&` 代表兩邊都是 1 才留下 1，`|` 代表其中一邊是 1 就留下 1，`^` 代表兩邊不同才是 1，`~` 會把 0 和 1 反轉。",
          "`<<` 和 `>>` 是位移。`8 >> 1` 可以想成把二進位往右移一格，效果類似把 8 除以 2 得到 4。"
        ],
        code: {
          title: "位元圖解",
          value: `5 的二進位：0101
3 的二進位：0011

5 & 3：0001  // 結果是 1
5 | 3：0111  // 結果是 7
8 >> 1：0100 // 結果是 4`
        }
      },
      {
        sectionId: "4.6",
        title: "運算式的運算順序",
        body: [
          "一個運算式如果有多個算符，Java 會依照優先順序計算。你可以先用 PEMDAS 當記憶方向：括號、乘除餘、加減。",
          "`3 + 4 * 5` 會先算乘法，所以是 `3 + 20`，結果是 23。`(3 + 4) * 5` 因為有括號，所以先算 3 + 4，結果是 35。",
          "實務上，不確定優先順序時，請加括號。括號不只改變計算順序，也能讓下一個閱讀程式的人更快看懂你的意圖。"
        ],
        code: {
          title: "運算順序",
          value: `System.out.println(3 + 4 * 5);     // 23
System.out.println((3 + 4) * 5);   // 35
System.out.println(10 - 6 / 2);    // 7`
        }
      },
      {
        sectionId: "4.7",
        title: "資料的轉型（Type Conversion）",
        body: [
          "資料轉型是把一種型態的值轉成另一種型態。Java 會在安全時自動轉型，例如把 int 放進 double，因為整數可以被表示成小數。",
          "強制轉型需要你明確寫出目標型態，例如 `(int)3.14`。這會把 3.14 轉成 3，但它不是四捨五入，而是直接捨去小數部分。",
          "轉型很常發生在除法與輸入資料處理中。當你想得到小數結果時，要確保至少有一邊是 double。"
        ],
        code: {
          title: "型態轉換",
          value: `double x = 5;        // int 自動轉成 double
int y = (int) 3.14;  // 強制轉成 int，結果是 3

double average = (double) 10 / 3;
System.out.println(average);`
        },
        codes: [
          {
            title: "int 自動轉 double",
            value: `int count = 5;
double number = count;
System.out.println(number); // 5.0`
          },
          {
            title: "double 強制轉 int",
            value: `double price = 99.9;
int dollars = (int) price;
System.out.println(dollars); // 99`
          },
          {
            title: "字串與數字相加",
            value: `String label = "年齡：";
int age = 25;
System.out.println(label + age); // 年齡：25`
          },
          {
            title: "整數除法改成小數結果",
            value: `double result = (double) 10 / 3;
System.out.println(result); // 3.3333333333333335`
          }
        ]
      },
      {
        sectionId: "4.8",
        title: "其他算符",
        body: [
          "`++` 可以讓變數加 1，常用於計數。`score++` 大致可以先理解成 `score = score + 1;`。",
          "三元運算子 `condition ? A : B` 可以根據條件選擇其中一個結果。如果 condition 是 true，就回傳 A；如果是 false，就回傳 B。",
          "三元運算子適合簡短判斷，例如根據分數顯示及格或不及格。複雜邏輯仍建議用之後會學到的 if/else。"
        ],
        code: {
          title: "遞增與三元運算子",
          value: `int score = 75;
score++;

String result = score >= 60 ? "及格" : "不及格";
System.out.println(result);`
        }
      },
      {
        sectionId: "4.9",
        title: "取得輸入",
        body: [
          "Scanner 可以讓 Java 程式讀取使用者在終端機輸入的資料。使用前需要先匯入 `java.util.Scanner`。",
          "建立 Scanner 時，`new Scanner(System.in)` 表示從標準輸入讀資料，也就是使用者在終端機輸入的內容。",
          "`nextLine()` 可以讀取一整行文字，`nextInt()` 可以讀取整數。讀取不同型態時要小心換行與輸入格式，初學時先照範例一步一步練。"
        ],
        code: {
          title: "Scanner 完整範例",
          value: `import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("請輸入姓名：");
        String name = sc.nextLine();

        System.out.print("請輸入年齡：");
        int age = sc.nextInt();

        System.out.println("你好 " + name + "，你今年 " + age + " 歲。");
    }
}`
        },
        codes: [
          {
            title: "輸入姓名",
            value: `import java.util.Scanner;

public class InputName {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("請輸入姓名：");
        String name = sc.nextLine();
        System.out.println("你好 " + name);
    }
}`
          },
          {
            title: "輸入年齡",
            value: `import java.util.Scanner;

public class InputAge {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("請輸入年齡：");
        int age = sc.nextInt();
        System.out.println("你今年 " + age + " 歲");
    }
}`
          },
          {
            title: "輸入姓名與年齡",
            value: `import java.util.Scanner;

public class InputNameAndAge {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("請輸入姓名：");
        String name = sc.nextLine();
        System.out.print("請輸入年齡：");
        int age = sc.nextInt();
        System.out.println("你好 " + name + "，你今年 " + age + " 歲。");
    }
}`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch04-activity-expression",
        sectionId: "4.1",
        type: "exercise",
        title: "4.1 練習題：判斷哪些屬於運算式",
        question: "判斷下列哪些屬於運算式：`5 + 3`、`age >= 18`、`name + \"同學\"`、`int age;`。",
        hint: "運算式的重點是能不能算出一個結果。宣告變數本身通常不是運算式。",
        solution: "`5 + 3`、`age >= 18`、`name + \"同學\"` 都是運算式；`int age;` 是宣告敘述，不是運算式。",
        explanation: "運算式會產生結果：數字、boolean 或文字都可以。`int age;` 只是告訴 Java 建立一個變數名稱，沒有產生可使用的運算結果。"
      }),
      createActivity({
        id: "ch04-activity-assignment",
        sectionId: "4.2",
        type: "exercise",
        title: "4.2 練習題：計算指定後的結果",
        question: "如果 `int x = 10;`，依序執行 `x += 5;`、`x *= 2;`、`x %= 6;`，最後 x 是多少？",
        hint: "一步一步算，不要一次跳到最後。每一步都會把結果存回 x。",
        solution: "x 最後是 0。先是 10 + 5 = 15，接著 15 * 2 = 30，最後 30 % 6 = 0。",
        explanation: "`+=`、`*=`、`%=` 都是把原本的 x 拿來運算後再存回 x。每一行都會改變 x 的值。"
      }),
      createActivity({
        id: "ch04-activity-calculator",
        sectionId: "4.3",
        type: "homework",
        title: "4.3 作業：設計簡易計算機",
        question: "建立兩個整數變數 a 和 b，輸出它們的加、減、乘、除、餘數結果。",
        hint: "先用固定數字，不需要輸入。注意除法如果兩邊都是 int，結果會是整數。",
        solution: `public class SimpleCalculator {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
    }
}`,
        explanation: "這個作業把五個數值算符集中練習。`/` 是除法，`%` 是餘數；當 a 和 b 都是 int 時，除法結果也會是 int。"
      }),
      createActivity({
        id: "ch04-activity-int-division",
        sectionId: "4.3",
        type: "thought",
        title: "4.3 思考題：為什麼 10 / 3 不是 3.333？",
        question: "請說明為什麼 Java 中 `10 / 3` 的結果不是 3.333。",
        hint: "觀察 10 和 3 的型態，它們都是整數。",
        solution: "因為 10 和 3 都是 int，Java 會使用整數除法，所以結果是 3，小數部分被捨去。",
        explanation: "如果想得到小數結果，可以讓其中一邊變成 double，例如 `10.0 / 3` 或 `(double) 10 / 3`。"
      }),
      createActivity({
        id: "ch04-activity-vote",
        sectionId: "4.4",
        type: "exercise",
        title: "4.4 實作練習：判斷是否符合投票資格",
        question: "建立 `age` 變數，判斷年齡是否大於等於 18，並輸出結果。",
        hint: "可以用 `boolean canVote = age >= 18;` 儲存判斷結果。",
        solution: `public class VoteCheck {
    public static void main(String[] args) {
        int age = 20;
        boolean canVote = age >= 18;
        System.out.println(canVote);
    }
}`,
        explanation: "`age >= 18` 是布林運算式，結果會是 true 或 false。把結果存進 boolean 變數後，就可以拿來輸出或做條件判斷。"
      }),
      createActivity({
        id: "ch04-activity-bitwise",
        sectionId: "4.5",
        type: "exercise",
        title: "4.5 練習題：看圖判斷位元運算結果",
        question: "根據二進位圖解，計算 `5 & 3`、`5 | 3`、`8 >> 1` 的結果。",
        hint: "5 是 0101，3 是 0011。`&` 看兩邊都為 1，`|` 看任一邊為 1。",
        solution: "`5 & 3` 是 1；`5 | 3` 是 7；`8 >> 1` 是 4。",
        explanation: "`0101 & 0011` 得到 `0001`。`0101 | 0011` 得到 `0111`。`1000` 往右移一格會變成 `0100`。"
      }),
      createActivity({
        id: "ch04-activity-precedence",
        sectionId: "4.6",
        type: "exercise",
        title: "4.6 實作練習：預測運算結果",
        question: "先不要執行程式，預測 `3 + 4 * 5` 和 `(3 + 4) * 5` 的結果。",
        hint: "乘法優先於加法；括號會最先計算。",
        solution: "`3 + 4 * 5` 是 23；`(3 + 4) * 5` 是 35。",
        explanation: "沒有括號時先算 `4 * 5`，再加 3。有括號時先算 `3 + 4`，再乘以 5。"
      }),
      createActivity({
        id: "ch04-activity-casting",
        sectionId: "4.7",
        type: "thought",
        title: "4.7 思考題：為什麼 (int)3.99 不是四捨五入？",
        question: "請說明 `(int)3.99` 的結果為什麼是 3，而不是 4。",
        hint: "強制轉成 int 時，Java 會直接移除小數部分。",
        solution: "`(int)3.99` 的結果是 3，因為強制轉型成 int 會捨去小數部分，不會四捨五入。",
        explanation: "轉型只負責把型態變成 int，不負責做數學上的四捨五入。若要四捨五入，之後可以學 `Math.round()`。"
      }),
      createActivity({
        id: "ch04-activity-ternary",
        sectionId: "4.8",
        type: "exercise",
        title: "4.8 實作練習：根據成績顯示結果",
        question: "建立 `score` 變數，使用三元運算子輸出 `及格` 或 `不及格`。",
        hint: "條件可以寫成 `score >= 60`。",
        solution: `public class ScoreResult {
    public static void main(String[] args) {
        int score = 75;
        String result = score >= 60 ? "及格" : "不及格";
        System.out.println(result);
    }
}`,
        explanation: "三元運算子會根據條件選擇其中一個值。這裡條件成立時得到 `及格`，否則得到 `不及格`。"
      }),
      createActivity({
        id: "ch04-activity-scanner",
        sectionId: "4.9",
        type: "exercise",
        title: "4.9 實作練習：讀取姓名與年齡",
        question: "使用 Scanner 詢問姓名與年齡，最後輸出：`你好 Jimmy，你今年 25 歲。` 這種格式的句子。",
        hint: "文字用 `nextLine()`，整數用 `nextInt()`。記得先 import Scanner。",
        solution: `import java.util.Scanner;

public class UserInputPractice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("請輸入姓名：");
        String name = sc.nextLine();

        System.out.print("請輸入年齡：");
        int age = sc.nextInt();

        System.out.println("你好 " + name + "，你今年 " + age + " 歲。");
    }
}`,
        explanation: "Scanner 會讀取使用者輸入。`nextLine()` 適合讀一整行文字，`nextInt()` 適合讀整數。最後用 `+` 把固定文字和變數串接成完整句子。"
      })
    ],
    quiz: [
      {
        question: "哪一個最符合運算式的定義？",
        options: ["可以被算出結果的程式片段", "只能宣告變數的語法", "只能寫在註解裡的文字", "Java 檔案名稱"],
        answer: 0,
        explanation: "運算式會產生一個結果，例如數字、boolean 或文字。"
      },
      {
        question: "`x += 5;` 等同於哪一個寫法？",
        options: ["x = x + 5;", "x = 5;", "x + 5;", "x == 5;"],
        answer: 0,
        explanation: "`+=` 會把原本 x 加上右邊的值，再存回 x。"
      },
      {
        question: "在 Java 中，`10 / 3` 兩邊都是 int 時結果是什麼？",
        options: ["3", "3.333", "4", "1"],
        answer: 0,
        explanation: "兩邊都是 int 時會做整數除法，小數部分會被捨去。"
      },
      {
        question: "`10 % 3` 的結果是什麼？",
        options: ["1", "3", "0", "10"],
        answer: 0,
        explanation: "`%` 取得餘數，10 除以 3 後剩下 1。"
      },
      {
        question: "`age >= 18 && age <= 65` 中的 `&&` 代表什麼？",
        options: ["兩邊都要成立", "任一邊成立即可", "把結果反轉", "指定數值"],
        answer: 0,
        explanation: "`&&` 是邏輯而且，左右兩邊都 true 時結果才是 true。"
      },
      {
        question: "`5 & 3` 主要是在做哪一類運算？",
        options: ["位元運算", "文字串接", "Scanner 輸入", "自動轉型"],
        answer: 0,
        explanation: "`&` 對整數的二進位位元做 AND 運算。"
      },
      {
        question: "`3 + 4 * 5` 的結果是什麼？",
        options: ["23", "35", "20", "17"],
        answer: 0,
        explanation: "乘法優先於加法，所以先算 4 * 5，再加 3。"
      },
      {
        question: "`int y = (int)3.14;` 中的 y 是多少？",
        options: ["3", "4", "3.14", "錯誤，不能轉型"],
        answer: 0,
        explanation: "強制轉成 int 會捨去小數部分。"
      },
      {
        question: "`score >= 60 ? \"及格\" : \"不及格\"` 是哪一種算符？",
        options: ["三元運算子", "指定算符", "位移算符", "取餘數算符"],
        answer: 0,
        explanation: "`condition ? A : B` 是三元運算子，會根據條件選擇結果。"
      },
      {
        question: "使用 Scanner 前通常需要哪一行 import？",
        options: ["import java.util.Scanner;", "import java.web.Scanner;", "include Scanner;", "using Scanner;"],
        answer: 0,
        explanation: "Scanner 位於 java.util 套件中，因此通常要先寫 `import java.util.Scanner;`。"
      }
    ]
  },
  {
    id: 5,
    code: "CH05",
    title: "流程控制（一）：條件分支",
    minutes: 75,
    summary: "學會 if、if-else、if-else if、巢狀 if 與 switch，開始讓程式根據條件做決定。",
    intro: "前面幾章的程式大多由上往下執行。從本章開始，你會學會讓程式根據條件選擇不同路線，這是寫出真正互動程式的重要一步。",
    sections: [
      {
        sectionId: "5.1",
        title: "什麼是流程控制",
        body: [
          "程式預設會由上往下依序執行，這稱為順序結構（Sequence）。如果程式只有順序結構，它每次都會做一樣的事情。",
          "但真實程式常常需要根據條件做決定。例如是否成年、是否及格、是否登入成功、是否符合優惠資格。這時就需要條件分支。",
          "`if` 可以讓程式在條件成立時才執行某段程式。條件通常是一個 boolean 運算式，結果只有 true 或 false。"
        ],
        code: {
          title: "順序結構",
          value: `System.out.println("第一行");
System.out.println("第二行");
System.out.println("第三行");`
        },
        codes: [
          {
            title: "範例 1：判斷是否成年",
            value: `int age = 20;

if (age >= 18) {
    System.out.println("成年人");
}`
          },
          {
            title: "範例 2：判斷是否及格",
            value: `int score = 90;

if (score >= 60) {
    System.out.println("及格");
}`
          }
        ]
      },
      {
        sectionId: "5.2",
        title: "if 條件分支",
        body: [
          "`if` 是最基本的條件分支。條件成立時執行大括號內的程式；條件不成立時，就跳過那段程式。",
          "`if-else` 可以處理兩種路線：條件成立做 A，不成立做 B。這很適合及格/不及格、登入成功/失敗這類二選一情境。",
          "`if-else if` 可以處理多個區間，例如成績等級 A、B、C、D。Java 會從上往下檢查，遇到第一個成立的條件就執行，後面就不再檢查。",
          "巢狀 if 是 if 裡面再放 if。它可以表達多層條件，但如果太深會不好讀。初學時可以先用它理解條件的層次。"
        ],
        code: {
          title: "if 基本語法",
          value: `if (條件) {
    // 條件成立時執行
}`
        },
        codes: [
          {
            title: "範例 1：if",
            value: `int score = 80;

if (score >= 60) {
    System.out.println("及格");
}`
          },
          {
            title: "範例 2：if-else",
            value: `int score = 50;

if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}`
          },
          {
            title: "範例 3：if-else if",
            value: `int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("D");
}`
          },
          {
            title: "範例 4：巢狀 if",
            value: `boolean member = true;
int amount = 1200;

if (member) {
    if (amount >= 1000) {
        System.out.println("享有折扣");
    }
}`
          },
          {
            title: "範例 5：輸入年齡判斷成年",
            value: `import java.util.Scanner;

public class AgeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();

        if (age >= 18) {
            System.out.println("成年人");
        } else {
            System.out.println("未成年");
        }
    }
}`
          },
          {
            title: "範例 6：登入成功或失敗",
            value: `String password = "java123";

if (password.equals("java123")) {
    System.out.println("登入成功");
} else {
    System.out.println("登入失敗");
}`
          },
          {
            title: "常見錯誤 1：省略大括號造成誤解",
            value: `if (score >= 60)
    System.out.println("及格");
    System.out.println("完成"); // 這行不屬於 if，永遠會執行`
          },
          {
            title: "常見錯誤 2：= 和 == 不同",
            value: `// 錯誤觀念：= 是指定，不是比較
// if (score = 60)

// 正確：== 才是比較是否相等
if (score == 60) {
    System.out.println("剛好 60 分");
}`
          }
        ]
      },
      {
        sectionId: "5.3",
        title: "switch 多條件分支",
        body: [
          "當條件很多，而且都是拿同一個變數去比對固定值時，`switch` 常常比大量 `if-else if` 更清楚。",
          "`case` 表示某個可能的值，`default` 表示以上 case 都不符合時要做的事。",
          "`break` 的作用是離開 switch。如果忘記 break，程式可能會繼續往下一個 case 執行，這稱為貫穿（Fall Through）。"
        ],
        code: {
          title: "switch 基本語法",
          value: `switch (變數) {
    case 值1:
        break;
    case 值2:
        break;
    default:
}`
        },
        codes: [
          {
            title: "範例 1：星期顯示",
            value: `int day = 3;

switch (day) {
    case 1:
        System.out.println("星期一");
        break;
    case 2:
        System.out.println("星期二");
        break;
    case 3:
        System.out.println("星期三");
        break;
    default:
        System.out.println("未知");
}`
          },
          {
            title: "範例 2：成績等級",
            value: `char grade = 'A';

switch (grade) {
    case 'A':
        System.out.println("優秀");
        break;
    case 'B':
        System.out.println("良好");
        break;
    default:
        System.out.println("繼續努力");
}`
          },
          {
            title: "範例 3：沒有 break 的貫穿",
            value: `int day = 1;

switch (day) {
    case 1:
        System.out.println("星期一");
    case 2:
        System.out.println("星期二");
    case 3:
        System.out.println("星期三");
}`
          },
          {
            title: "範例 4：月份顯示季節",
            value: `int month = 4;

switch (month) {
    case 3:
    case 4:
    case 5:
        System.out.println("春季");
        break;
    case 6:
    case 7:
    case 8:
        System.out.println("夏季");
        break;
    case 9:
    case 10:
    case 11:
        System.out.println("秋季");
        break;
    default:
        System.out.println("冬季");
}`
          },
          {
            title: "範例 5：餐點編號",
            value: `int menu = 2;

switch (menu) {
    case 1:
        System.out.println("漢堡");
        break;
    case 2:
        System.out.println("炸雞");
        break;
    case 3:
        System.out.println("咖哩飯");
        break;
    default:
        System.out.println("沒有這個餐點");
}`
          }
        ]
      },
      {
        sectionId: "5.4",
        title: "綜合演練",
        body: [
          "這一節把條件判斷放進完整小專案中。你會看到 if-else if 適合區間判斷，巢狀條件適合多條件資格判斷，switch 適合固定選項判斷。",
          "做小專案時，先把輸入、處理、輸出分清楚。輸入是使用者提供的資料，處理是條件判斷，輸出是最後印出的結果。"
        ],
        code: {
          title: "專案 1：成績判斷系統",
          value: `import java.util.Scanner;

public class GradeSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("請輸入分數：");
        int score = sc.nextInt();

        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 70) {
            System.out.println("C");
        } else {
            System.out.println("D");
        }
    }
}`
        },
        codes: [
          {
            title: "專案 2：會員折扣系統",
            value: `import java.util.Scanner;

public class DiscountSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("是否會員 true/false：");
        boolean member = sc.nextBoolean();

        System.out.print("消費金額：");
        int amount = sc.nextInt();

        if (member && amount >= 1000) {
            System.out.println("符合優惠資格");
        } else {
            System.out.println("不符合優惠資格");
        }
    }
}`
          },
          {
            title: "專案 3：餐廳點餐系統",
            value: `import java.util.Scanner;

public class RestaurantOrder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("請輸入餐點編號：");
        int item = sc.nextInt();

        switch (item) {
            case 1:
                System.out.println("漢堡");
                break;
            case 2:
                System.out.println("炸雞");
                break;
            case 3:
                System.out.println("咖哩飯");
                break;
            default:
                System.out.println("沒有這個餐點");
        }
    }
}`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch05-thought-age-15",
        sectionId: "5.1",
        type: "thought",
        title: "5.1 思考題：age = 15 會發生什麼事？",
        question: "如果 `int age = 15;`，執行 `if (age >= 18)` 的成年人輸出會發生什麼事？",
        hint: "先判斷 `15 >= 18` 是 true 還是 false。",
        solution: "不會印出 `成年人`，因為 `15 >= 18` 的結果是 false。",
        explanation: "if 只會在條件成立時執行大括號內的程式。條件不成立時，程式會跳過該區塊，繼續往下執行。"
      }),
      createActivity({
        id: "ch05-exercise-rain",
        sectionId: "5.1",
        type: "exercise",
        title: "5.1 練習題：判斷今天是否下雨",
        question: "建立 boolean 變數 `isRaining`，如果是 true 就輸出 `記得帶傘`。",
        hint: "boolean 變數本身就可以放在 if 的括號中。",
        solution: `public class RainCheck {
    public static void main(String[] args) {
        boolean isRaining = true;

        if (isRaining) {
            System.out.println("記得帶傘");
        }
    }
}`,
        explanation: "`if (isRaining)` 等同於判斷 isRaining 是否為 true。這是 boolean 變數很常見的用法。"
      }),
      createActivity({
        id: "ch05-exercise-age-input",
        sectionId: "5.2",
        type: "exercise",
        title: "5.2 練習 1：輸入年齡判斷是否成年",
        question: "使用 Scanner 輸入年齡，如果大於等於 18 顯示成年人，否則顯示未成年。",
        hint: "使用 `nextInt()` 讀取年齡，搭配 if-else。",
        solution: `import java.util.Scanner;

public class AgeInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();

        if (age >= 18) {
            System.out.println("成年人");
        } else {
            System.out.println("未成年");
        }
    }
}`,
        explanation: "這題練習輸入、比較運算與 if-else。條件成立走 if，不成立走 else。"
      }),
      createActivity({
        id: "ch05-exercise-pass-fail",
        sectionId: "5.2",
        type: "exercise",
        title: "5.2 練習 2：輸入成績顯示及格或不及格",
        question: "輸入成績，如果大於等於 60 顯示及格，否則顯示不及格。",
        hint: "條件可以寫成 `score >= 60`。",
        solution: `import java.util.Scanner;

public class PassFail {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int score = sc.nextInt();

        if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}`,
        explanation: "及格與不及格是二選一情境，很適合用 if-else。"
      }),
      createActivity({
        id: "ch05-exercise-grade-level",
        sectionId: "5.2",
        type: "exercise",
        title: "5.2 練習 3：輸入成績顯示 A、B、C、D",
        question: "輸入成績後，用 if-else if 顯示 A、B、C、D 等級。",
        hint: "分數區間要從高分往低分判斷。",
        solution: `import java.util.Scanner;

public class GradeLevel {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int score = sc.nextInt();

        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {
            System.out.println("B");
        } else if (score >= 70) {
            System.out.println("C");
        } else {
            System.out.println("D");
        }
    }
}`,
        explanation: "if-else if 會由上往下檢查，所以高分區間要放前面，避免 95 分先被 `score >= 70` 攔住。"
      }),
      createActivity({
        id: "ch05-homework-discount",
        sectionId: "5.2",
        type: "homework",
        title: "5.2 作業：會員折扣判斷系統",
        question: "設計會員折扣判斷系統：會員且消費滿 1000 元顯示符合優惠資格，否則顯示不符合優惠資格。",
        hint: "兩個條件要同時成立，可以用 `member && amount >= 1000`。",
        solution: `public class MemberDiscount {
    public static void main(String[] args) {
        boolean member = true;
        int amount = 1200;

        if (member && amount >= 1000) {
            System.out.println("符合優惠資格");
        } else {
            System.out.println("不符合優惠資格");
        }
    }
}`,
        explanation: "這題重點是 `&&`：必須是會員，而且金額也達標，才符合優惠資格。"
      }),
      createActivity({
        id: "ch05-exercise-season",
        sectionId: "5.3",
        type: "exercise",
        title: "5.3 實作練習：輸入月份顯示季節",
        question: "輸入月份 1 到 12，使用 switch 顯示春季、夏季、秋季、冬季。",
        hint: "多個 case 可以共用同一段輸出，例如 3、4、5 都是春季。",
        solution: `int month = 4;

switch (month) {
    case 3:
    case 4:
    case 5:
        System.out.println("春季");
        break;
    case 6:
    case 7:
    case 8:
        System.out.println("夏季");
        break;
    case 9:
    case 10:
    case 11:
        System.out.println("秋季");
        break;
    default:
        System.out.println("冬季");
}`,
        explanation: "switch 很適合固定值分類。多個 case 沒有 break 時會往下共用同一段程式，這裡是刻意用來合併月份。"
      }),
      createActivity({
        id: "ch05-homework-weekday",
        sectionId: "5.3",
        type: "homework",
        title: "5.3 作業：輸入數字顯示星期幾",
        question: "輸入數字 1 到 7，使用 switch 顯示星期一到星期日。",
        hint: "每個 case 記得加 break，default 可以顯示輸入錯誤。",
        solution: `int day = 7;

switch (day) {
    case 1:
        System.out.println("星期一");
        break;
    case 2:
        System.out.println("星期二");
        break;
    case 3:
        System.out.println("星期三");
        break;
    case 4:
        System.out.println("星期四");
        break;
    case 5:
        System.out.println("星期五");
        break;
    case 6:
        System.out.println("星期六");
        break;
    case 7:
        System.out.println("星期日");
        break;
    default:
        System.out.println("輸入錯誤");
}`,
        explanation: "每個 case 對應一個固定數值。break 可以避免執行完某個 case 後繼續往下跑。"
      }),
      createActivity({
        id: "ch05-project-grade",
        sectionId: "5.4",
        type: "exercise",
        title: "5.4 專案練習：成績判斷系統",
        question: "完成成績判斷系統：輸入學生分數，輸出 A、B、C、D。",
        hint: "使用 if-else if，並從最高分條件開始判斷。",
        solution: "可參考本節專案 1，重點是輸入分數後用多段條件判斷等級。",
        explanation: "這個專案整合 Scanner 與 if-else if。它是很多真實判斷系統的簡化版本。"
      }),
      createActivity({
        id: "ch05-project-member",
        sectionId: "5.4",
        type: "exercise",
        title: "5.4 專案練習：會員折扣系統",
        question: "完成會員折扣系統：輸入是否會員與消費金額，輸出是否享有優惠。",
        hint: "使用 boolean 與 int，條件是 `member && amount >= 1000`。",
        solution: "可參考本節專案 2，使用 Scanner 讀取會員狀態與消費金額，再用 if-else 輸出資格。",
        explanation: "這個專案練習多條件同時成立。`&&` 能讓你表達「兩個條件都要成立」。"
      }),
      createActivity({
        id: "ch05-project-restaurant",
        sectionId: "5.4",
        type: "exercise",
        title: "5.4 專案練習：餐廳點餐系統",
        question: "完成餐廳點餐系統：輸入 1、2、3，輸出漢堡、炸雞、咖哩飯。",
        hint: "固定編號對應固定餐點，很適合用 switch。",
        solution: "可參考本節專案 3，使用 switch 依餐點編號輸出餐點名稱。",
        explanation: "當選項是固定值時，switch 的可讀性通常很好。default 可以處理使用者輸入不存在的編號。"
      })
    ],
    quiz: [
      {
        question: "程式預設由上往下執行，稱為什麼結構？",
        options: ["順序結構", "位元結構", "資料庫結構", "隨機結構"],
        answer: 0,
        explanation: "程式預設由上到下依序執行，稱為順序結構。"
      },
      {
        question: "`if (age >= 18)` 中的條件結果必須是什麼型態？",
        options: ["boolean", "String", "double", "char"],
        answer: 0,
        explanation: "if 括號中的條件必須能得到 true 或 false。"
      },
      {
        question: "如果 `age = 15`，`if (age >= 18)` 內的程式會怎樣？",
        options: ["不會執行", "一定會執行", "變成 18", "出現星期三"],
        answer: 0,
        explanation: "`15 >= 18` 是 false，因此 if 區塊不會執行。"
      },
      {
        question: "二選一情境最適合使用哪一種結構？",
        options: ["if-else", "只有 if", "import", "class"],
        answer: 0,
        explanation: "if-else 可以處理條件成立與不成立兩種路線。"
      },
      {
        question: "多個分數區間 A、B、C、D 常用哪一種寫法？",
        options: ["if-else if", "只用一個 println", "Scanner", "註解"],
        answer: 0,
        explanation: "if-else if 適合處理多個條件區間。"
      },
      {
        question: "`if(score = 60)` 的問題是什麼？",
        options: ["= 是指定，不是比較", "= 代表大於", "= 只能用在 String", "= 是 switch"],
        answer: 0,
        explanation: "比較是否相等要用 `==`，`=` 是指定值。"
      },
      {
        question: "沒有大括號時，if 預設只控制幾行敘述？",
        options: ["一行", "兩行", "整個檔案", "所有 println"],
        answer: 0,
        explanation: "沒有大括號時，if 只控制緊接著的一行敘述，容易造成誤解。"
      },
      {
        question: "當同一個變數要比對很多固定值時，哪個語法常更清楚？",
        options: ["switch", "double", "package", "boolean"],
        answer: 0,
        explanation: "switch 適合固定值分支，例如星期、月份、餐點編號。"
      },
      {
        question: "switch 中 break 的作用是什麼？",
        options: ["離開 switch", "建立變數", "讀取輸入", "讓數字加一"],
        answer: 0,
        explanation: "break 會讓程式離開 switch，避免繼續往下執行其他 case。"
      },
      {
        question: "switch 忘記 break 可能產生什麼現象？",
        options: ["Fall Through 貫穿", "四捨五入", "自動 import", "變數消失"],
        answer: 0,
        explanation: "沒有 break 時，程式可能繼續執行後面的 case，稱為貫穿。"
      },
      {
        question: "會員且消費滿 1000 元，應該使用哪個邏輯算符連接兩個條件？",
        options: ["&&", "||", "!", "%"],
        answer: 0,
        explanation: "`&&` 表示兩個條件都要成立。"
      },
      {
        question: "餐點編號 1、2、3 對應固定餐點名稱，適合用什麼？",
        options: ["switch", "只用變數宣告", "強制轉型", "位元反轉"],
        answer: 0,
        explanation: "固定編號對應固定輸出，是 switch 很適合的情境。"
      }
    ]
  }
];

const app = document.querySelector("#app");
const mainNav = document.querySelector("[data-main-nav]");
const siteHeader = document.querySelector("[data-site-header]");
const navToggle = document.querySelector("[data-nav-toggle]");

function getDefaultState() {
  return {
    version: 3,
    completedChapters: [],
    completedSections: [],
    completedActivities: [],
    quizAnswers: {}
  };
}

function getState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (Array.isArray(saved)) {
      return normalizeState({
        ...getDefaultState(),
        completedChapters: saved
      });
    }

    return normalizeState({
      ...getDefaultState(),
      ...saved,
      completedChapters: Array.isArray(saved?.completedChapters) ? saved.completedChapters : [],
      completedSections: Array.isArray(saved?.completedSections) ? saved.completedSections : [],
      completedActivities: Array.isArray(saved?.completedActivities) ? saved.completedActivities : [],
      quizAnswers: saved?.quizAnswers && typeof saved.quizAnswers === "object" ? saved.quizAnswers : {}
    });
  } catch {
    return getDefaultState();
  }
}

function normalizeState(state) {
  const completedActivities = [...new Set(state.completedActivities)];
  const completedSections = [...new Set(state.completedSections)];
  const quizAnswers = state.quizAnswers;
  const completedChapters = state.completedChapters.filter((chapterId) => {
    const chapter = chapters.find((item) => item.id === chapterId);
    if (!chapter) return false;

    const allSectionsDone = getSortedSections(chapter).every((section) => completedSections.includes(getSectionKey(chapter.id, section.sectionId)));
    const answers = quizAnswers[getChapterKey(chapter.id)] || {};
    const allQuizDone = chapter.quiz.every((_, index) => Number.isInteger(answers[index]));

    return allSectionsDone && allQuizDone;
  });

  return {
    ...state,
    completedActivities,
    completedSections,
    completedChapters
  };
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeState({
    ...getDefaultState(),
    ...state,
    version: 3
  })));
}

function getAllActivities() {
  return chapters.flatMap((chapter) => chapter.activities.map((activity) => ({
    ...activity,
    chapterId: chapter.id
  })));
}

function getChapter(id) {
  return chapters.find((chapter) => chapter.id === id) || chapters[0];
}

function getSortedSections(chapter) {
  return [...chapter.sections].sort((a, b) => compareSectionIds(a.sectionId, b.sectionId));
}

function compareSectionIds(a, b) {
  const [aMajor, aMinor] = a.split(".").map(Number);
  const [bMajor, bMinor] = b.split(".").map(Number);

  if (aMajor !== bMajor) return aMajor - bMajor;
  return aMinor - bMinor;
}

function getChapterKey(chapterId) {
  return String(chapterId);
}

function getSectionKey(chapterId, sectionId) {
  return `${chapterId}:${sectionId}`;
}

function getAssessmentSection(chapter) {
  const sections = getSortedSections(chapter);
  return {
    sectionId: `${chapter.id}.${sections.length + 1}`,
    title: "本章練習與測驗"
  };
}

function getActivitiesForSection(chapter, sectionId) {
  return chapter.activities.filter((activity) => activity.sectionId === sectionId);
}

function getInitialSectionId(chapter, state = getState()) {
  const firstUnfinished = getSortedSections(chapter).find((section) => {
    return !state.completedSections.includes(getSectionKey(chapter.id, section.sectionId));
  });

  return firstUnfinished?.sectionId || getSortedSections(chapter)[0].sectionId;
}

function getChapterQuizAnswers(chapterId, state = getState()) {
  return state.quizAnswers[getChapterKey(chapterId)] || {};
}

function getChapterStats(chapter, state = getState()) {
  const completedActivities = chapter.activities.filter((activity) => state.completedActivities.includes(activity.id)).length;
  const sections = getSortedSections(chapter);
  const completedSections = sections.filter((section) => state.completedSections.includes(getSectionKey(chapter.id, section.sectionId))).length;
  const answers = getChapterQuizAnswers(chapter.id, state);
  const answeredCount = chapter.quiz.filter((_, index) => Number.isInteger(answers[index])).length;
  const correctCount = chapter.quiz.filter((question, index) => answers[index] === question.answer).length;
  const allActivitiesDone = completedActivities === chapter.activities.length;
  const allSectionsDone = completedSections === sections.length;
  const allQuizDone = answeredCount === chapter.quiz.length;

  return {
    completedActivities,
    totalActivities: chapter.activities.length,
    completedSections,
    totalSections: sections.length,
    answeredCount,
    correctCount,
    totalQuiz: chapter.quiz.length,
    allActivitiesDone,
    allSectionsDone,
    allQuizDone,
    canComplete: allSectionsDone && allActivitiesDone && allQuizDone
  };
}

function getProgressStats() {
  const state = getState();
  const totalActivities = getAllActivities().length;
  const completedActivities = state.completedActivities.length;
  const chapterPercent = Math.round((state.completedChapters.length / chapters.length) * 100);
  const activityPercent = totalActivities === 0 ? 0 : Math.round((completedActivities / totalActivities) * 100);

  return {
    state,
    completedChapters: state.completedChapters,
    chapterDone: state.completedChapters.length,
    chapterTotal: chapters.length,
    chapterPercent,
    completedActivities,
    totalActivities,
    activityPercent
  };
}

function renderMainNav() {
  if (!mainNav) return;
  const courseLinks = chapters.map((chapter) => `
    <a href="#chapter-${chapter.id}" data-nav-link>${chapter.code} ${chapter.title}</a>
  `).join("");

  mainNav.innerHTML = `
    <a href="#home" data-nav-link>首頁</a>
    <div class="nav-dropdown" data-course-dropdown>
      <button class="nav-dropdown-toggle" type="button" data-course-toggle aria-expanded="false" aria-controls="courseMenu">
        <span>課程地圖</span>
        <span class="dropdown-caret">▼</span>
      </button>
      <div class="nav-dropdown-menu" id="courseMenu" data-course-menu hidden>
        <a class="nav-map-link" href="#map" data-nav-link>查看完整章節地圖</a>
        <div class="nav-group-title">Java基礎</div>
        ${courseLinks}
      </div>
    </div>
    <a href="#toolbox" data-nav-link>Java工具箱</a>
    <a href="#cheatsheet" data-nav-link>Java Cheat Sheet</a>
    <a href="#progress" data-nav-link>學習進度</a>
  `;
}

function updateActiveNav() {
  const hash = location.hash || "#home";
  document.querySelectorAll(".top-nav a[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === hash || (href?.startsWith("#chapter-") && hash.startsWith(`${href}/`)));
  });

  const courseToggle = document.querySelector("[data-course-toggle]");
  if (courseToggle) {
    courseToggle.classList.toggle("active", hash === "#map" || hash.startsWith("#chapter-"));
  }
}

function renderProgressPanel() {
  const stats = getProgressStats();
  return `
    <div class="progress-panel" aria-label="學習進度">
      <div class="progress-row">
        <div>
          <strong>章節完成</strong>
          <span>已完成 ${stats.chapterDone} / ${stats.chapterTotal} 章</span>
        </div>
        <span>${stats.chapterPercent}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-bar" style="width: ${stats.chapterPercent}%"></div>
      </div>
      <div class="progress-row exercise-progress">
        <div>
          <strong>已完成練習</strong>
          <span>${stats.completedActivities} / ${stats.totalActivities}</span>
        </div>
        <span>${stats.activityPercent}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-bar activity" style="width: ${stats.activityPercent}%"></div>
      </div>
    </div>
  `;
}

function renderHome() {
  const stats = getProgressStats();
  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">Prototype 課程網站 · 前 ${stats.chapterTotal} 章</p>
        <h1>Java 新手村</h1>
        <p>從零開始學會 Java 程式設計。用章節地圖、範例程式、練習與測驗，把第一段學習路徑走穩。</p>
        <div class="hero-actions">
          <a class="button" href="#map">開始學習</a>
          <a class="button secondary" href="#chapter-${chapters[0].id}">直接進入 ${chapters[0].code}</a>
        </div>
      </div>

      <aside class="stats-panel" aria-label="網站狀態">
        <div class="stats-grid">
          <div class="stat-card">
            <strong>${stats.chapterTotal}</strong>
            <span>目前章節</span>
          </div>
          <div class="stat-card">
            <strong>18</strong>
            <span>未來規劃章節</span>
          </div>
          <div class="stat-card">
            <strong>${stats.completedActivities}</strong>
            <span>已完成練習</span>
          </div>
          <div class="stat-card">
            <strong>${stats.activityPercent}%</strong>
            <span>練習完成率</span>
          </div>
        </div>
        ${renderProgressPanel()}
      </aside>
    </section>
  `;
}

function renderMap() {
  const { state } = getProgressStats();
  app.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Chapter Map</p>
      <h1>章節地圖</h1>
      <p>依照章節順序建立 Java 基礎。每一章都可以單獨閱讀，也可以照順序完成小節、練習與測驗。</p>
      ${renderProgressPanel()}
    </section>

    <section class="chapter-grid" aria-label="章節列表">
      ${chapters.map((chapter) => {
        const chapterStats = getChapterStats(chapter, state);
        const isDone = state.completedChapters.includes(chapter.id);
        return `
          <a class="chapter-card" href="#chapter-${chapter.id}">
            <span class="chapter-kicker">${chapter.code}</span>
            <h2>${chapter.title}</h2>
            <p>${chapter.summary}</p>
            <div class="chapter-meta">
              <span class="pill">${chapter.minutes} 分鐘</span>
              <span class="pill ${isDone ? "done" : ""}">${isDone ? "已完成" : "尚未完成"}</span>
              <span class="pill">小節 ${chapterStats.completedSections}/${chapterStats.totalSections}</span>
              <span class="pill">練習 ${chapterStats.completedActivities}/${chapterStats.totalActivities}</span>
              <span class="pill">測驗 ${chapterStats.answeredCount}/${chapterStats.totalQuiz}</span>
            </div>
          </a>
        `;
      }).join("")}
    </section>
  `;
}

function renderToolbox() {
  app.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Java Toolbox</p>
      <h1>Java工具箱</h1>
      <p>這裡整理學 Java 時常用到的工具與觀念入口。之後可以逐步補上安裝教學、常用命令與環境檢查清單。</p>
    </section>

    <section class="content-section">
      <h2>常用工具</h2>
      <ul>
        <li><strong>JDK：</strong>撰寫、編譯與執行 Java 程式的開發工具包。</li>
        <li><strong>VS Code：</strong>輕量編輯器，適合新手快速開始與練習小程式。</li>
        <li><strong>IntelliJ IDEA：</strong>Java 專案常用 IDE，提示、除錯與專案管理功能完整。</li>
        <li><strong>終端機：</strong>練習 <code>javac</code>、<code>java</code> 等基本命令，理解程式如何被編譯與執行。</li>
      </ul>
      <div class="section-actions">
        <a class="button" href="#chapter-2/2.1">複習 JDK</a>
        <a class="button secondary" href="#chapter-2/2.5">複習編譯與執行</a>
      </div>
    </section>
  `;
}

function renderCheatSheet() {
  app.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Quick Reference</p>
      <h1>Java Cheat Sheet</h1>
      <p>把前面章節最常用的語法集中放在這裡，方便練習時快速回頭查。</p>
    </section>

    <section class="content-section">
      <h2>Hello World</h2>
      ${renderCodeBlock({
        title: "HelloWorld.java",
        value: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`
      })}
    </section>

    <section class="content-section">
      <h2>變數與條件判斷</h2>
      ${renderCodeBlock({
        title: "常用語法速查",
        value: `String name = "小明";
int age = 18;
double height = 170.5;
boolean canVote = age >= 18;

if (canVote) {
    System.out.println(name + " 可以投票");
} else {
    System.out.println(name + " 還不能投票");
}`
      })}
    </section>
  `;
}

function renderProgressPage() {
  const stats = getProgressStats();
  const state = stats.state;
  app.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Learning Progress</p>
      <h1>學習進度</h1>
      <p>進度會儲存在此瀏覽器的 localStorage。完成小節、練習與測驗後，章節完成按鈕才會解鎖。</p>
      ${renderProgressPanel()}
    </section>

    <section class="content-section">
      <h2>章節狀態</h2>
      <div class="progress-list">
        ${chapters.map((chapter) => {
          const chapterStats = getChapterStats(chapter, state);
          const isDone = state.completedChapters.includes(chapter.id);
          return `
            <a class="progress-list-item" href="#chapter-${chapter.id}">
              <span>${chapter.code} ${chapter.title}</span>
              <small>${isDone ? "已完成" : "尚未完成"} · 小節 ${chapterStats.completedSections}/${chapterStats.totalSections} · 練習 ${chapterStats.completedActivities}/${chapterStats.totalActivities} · 測驗 ${chapterStats.answeredCount}/${chapterStats.totalQuiz}</small>
            </a>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderCodeBlock(code) {
  if (!code) return "";
  return `
    <div class="code-block">
      <div class="code-title">
        <span>${code.title}</span>
        <span>Java</span>
      </div>
      <pre><code>${escapeHtml(code.value)}</code></pre>
    </div>
  `;
}

function renderSection(section, index) {
  return `
    <section id="section-${section.sectionId}" class="content-section">
      <h2>${section.sectionId} ${section.title}</h2>
      ${section.body.map((paragraph) => `<p>${formatInlineCode(paragraph)}</p>`).join("")}
      ${section.list ? `<ul>${section.list.map((item) => `<li>${formatInlineCode(item)}</li>`).join("")}</ul>` : ""}
      ${renderCodeBlock(section.code)}
      ${section.codes ? section.codes.map(renderCodeBlock).join("") : ""}
    </section>
  `;
}

function getActivityTypeLabel(type) {
  const labels = {
    exercise: "實作練習",
    thought: "思考題",
    homework: "作業"
  };

  return labels[type] || "練習";
}

function renderAnswerContent(value, className) {
  const formatted = formatInlineCode(value);
  const shouldUseCodeBlock = value.includes("\n") || value.includes(";") || value.includes("public class");

  if (shouldUseCodeBlock && className === "solution") {
    return `<pre><code>${escapeHtml(value)}</code></pre>`;
  }

  return formatted.split("\n").map((line) => `<p>${line}</p>`).join("");
}

function renderRevealPanel(activity, kind, title) {
  const panelId = `${activity.id}-${kind}`;
  return `
    <div class="answer-panel ${kind}" id="${panelId}" hidden>
      <strong>${title}</strong>
      ${renderAnswerContent(activity[kind], kind)}
    </div>
  `;
}

function renderActivity(activity, state) {
  const isChecked = state.completedActivities.includes(activity.id);
  return `
    <section class="callout activity-card ${activity.type}" id="${activity.id}">
      <div class="activity-head">
        <span class="activity-label">${getActivityTypeLabel(activity.type)}</span>
        <label class="activity-check">
          <input type="checkbox" data-activity-complete="${activity.id}" ${isChecked ? "checked" : ""}>
          <span>我已完成這個練習</span>
        </label>
      </div>
      <h2>${activity.title}</h2>
      <p>${formatInlineCode(activity.question)}</p>
      <div class="answer-actions">
        <button class="mini-button hint" type="button" data-toggle-panel="${activity.id}-hint" data-label="提示">查看提示</button>
        <button class="mini-button solution" type="button" data-toggle-panel="${activity.id}-solution" data-label="解答">查看解答</button>
        <button class="mini-button explanation" type="button" data-toggle-panel="${activity.id}-explanation" data-label="解析">查看解析</button>
      </div>
      ${renderRevealPanel(activity, "hint", "提示")}
      ${renderRevealPanel(activity, "solution", "標準解答")}
      ${renderRevealPanel(activity, "explanation", "解答解析")}
    </section>
  `;
}

function renderActivities(chapter, state, activities = chapter.activities) {
  return `
    <section class="activity-group" id="activities">
      <div class="group-heading">
        <p class="eyebrow">Practice</p>
        <h2>${activities.length === chapter.activities.length ? "本章練習總覽" : "本小節練習"}</h2>
        <p>每題都可以先看提示，再查看標準解答與解析。完成後勾選，進度會儲存在此瀏覽器。</p>
      </div>
      ${activities.length
        ? activities.map((activity) => renderActivity(activity, state)).join("")
        : `<p class="muted-text">本小節沒有額外練習題，請完成閱讀後標記本小節完成。</p>`}
    </section>
  `;
}

function renderQuiz(chapter, state) {
  const answers = getChapterQuizAnswers(chapter.id, state);
  const chapterStats = getChapterStats(chapter, state);
  const hasCompletedQuiz = chapterStats.allQuizDone;

  return `
    <section class="quiz" id="quiz">
      <div class="quiz-heading">
        <div>
          <h2>章末測驗</h2>
          <p>答題後會顯示正確或錯誤、正確答案與原因說明。所有題目完成後才會計入章節完成條件。</p>
        </div>
        <button class="button secondary compact" type="button" data-reset-quiz="${chapter.id}" ${chapterStats.answeredCount === 0 ? "disabled" : ""}>重新作答</button>
      </div>
      ${chapter.quiz.map((item, index) => {
        const selected = answers[index];
        const hasAnswer = Number.isInteger(selected);
        const isCorrect = selected === item.answer;
        return `
          <div class="quiz-question" data-question="${index}">
            <p>${index + 1}. ${formatInlineCode(item.question)}</p>
            <div class="quiz-options">
              ${item.options.map((option, optionIndex) => {
                const classes = [
                  "quiz-option",
                  hasAnswer && optionIndex === item.answer ? "correct" : "",
                  hasAnswer && optionIndex === selected && !isCorrect ? "wrong" : ""
                ].filter(Boolean).join(" ");

                return `
                  <button class="${classes}" type="button" data-chapter="${chapter.id}" data-question="${index}" data-option="${optionIndex}" ${hasAnswer ? "disabled" : ""}>
                    ${option}
                  </button>
                `;
              }).join("")}
            </div>
            <div class="quiz-feedback" aria-live="polite">
              ${hasAnswer ? renderQuizFeedback(item, selected) : ""}
            </div>
          </div>
        `;
      }).join("")}
      <div class="quiz-result ${hasCompletedQuiz ? "is-complete" : ""}">
        ${hasCompletedQuiz
          ? `本章測驗結果：${chapterStats.correctCount} / ${chapterStats.totalQuiz}`
          : `尚未完成測驗：${chapterStats.answeredCount} / ${chapterStats.totalQuiz}`}
      </div>
    </section>
  `;
}

function renderQuizFeedback(question, selected) {
  const isCorrect = selected === question.answer;
  const correctAnswer = question.options[question.answer];
  return `
    <strong>${isCorrect ? "✓ 正確" : "✗ 錯誤"}</strong>
    <span>正確答案：${correctAnswer}</span>
    <span>原因說明：${question.explanation}</span>
  `;
}

function renderCompletionCard(chapter, state) {
  const completed = state.completedChapters.includes(chapter.id);
  const stats = getChapterStats(chapter, state);
  const missing = [];

  if (!stats.allSectionsDone) missing.push(`完成所有小節 ${stats.completedSections}/${stats.totalSections}`);
  if (!stats.allActivitiesDone) missing.push(`完成所有練習 ${stats.completedActivities}/${stats.totalActivities}`);
  if (!stats.allQuizDone) missing.push(`完成所有測驗 ${stats.answeredCount}/${stats.totalQuiz}`);

  return `
    <section class="completion-card ${stats.canComplete ? "ready" : "locked"}">
      <h2>${completed ? "本章已完成" : stats.canComplete ? "可以完成本章了" : "完成條件尚未達成"}</h2>
      <p>${completed
        ? "進度已儲存在這個瀏覽器中。你可以回章節地圖看整體進度。"
        : stats.canComplete
          ? "你已完成本章所有小節、練習與測驗，現在可以標記章節完成。"
          : `完成本章前還需要：${missing.join("、")}。`}
      </p>
      <div class="section-actions">
        <button class="button" type="button" data-complete="${chapter.id}" ${completed || !stats.canComplete ? "disabled" : ""}>
          ${completed ? "已完成" : "完成本章"}
        </button>
        <a class="button secondary" href="#map">回章節地圖</a>
      </div>
    </section>
  `;
}

function getSectionStatus(chapter, section, activeSectionId, state) {
  if (state.completedSections.includes(getSectionKey(chapter.id, section.sectionId))) {
    return "completed";
  }

  if (section.sectionId === activeSectionId) {
    return "active";
  }

  return "not-started";
}

function getSectionStatusText(status) {
  const labels = {
    completed: "已完成",
    active: "學習中",
    "not-started": "尚未開始"
  };

  return labels[status];
}

function renderLessonNav(chapter, activeView, activeSectionId, state) {
  const sections = getSortedSections(chapter);
  const assessment = getAssessmentSection(chapter);
  const quizDone = getChapterStats(chapter, state).allQuizDone;

  return `
    <aside class="lesson-nav" aria-label="章節導覽">
      <a href="#map">返回地圖</a>
      ${sections.map((section) => {
        const status = getSectionStatus(chapter, section, activeSectionId, state);
        return `
          <button class="lesson-nav-item ${status}" type="button" data-section-target="${section.sectionId}">
            <span>${section.sectionId} ${section.title}</span>
            <small>${getSectionStatusText(status)}</small>
          </button>
        `;
      }).join("")}
      <button class="lesson-nav-item ${activeView === "assessment" ? "active" : quizDone ? "completed" : "not-started"}" type="button" data-assessment-target="${chapter.id}">
        <span>${assessment.sectionId} ${assessment.title}</span>
        <small>${activeView === "assessment" ? "學習中" : quizDone ? "已完成" : "尚未開始"}</small>
      </button>
    </aside>
  `;
}

function renderSectionPager(chapter, section, activeIndex, totalSections, state) {
  const completed = state.completedSections.includes(getSectionKey(chapter.id, section.sectionId));
  const progressText = `${section.sectionId} / ${chapter.id}.${totalSections}`;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === totalSections - 1;

  return `
    <section class="section-pager">
      <div class="section-progress">目前進度：${progressText}</div>
      <div class="section-actions">
        <button class="button secondary" type="button" data-prev-section="${chapter.id}" ${isFirst ? "disabled" : ""}>上一小節</button>
        <button class="button" type="button" data-complete-section="${section.sectionId}" ${completed ? "disabled" : ""}>
          ${completed ? "本小節已完成" : "完成本小節"}
        </button>
        <button class="button secondary" type="button" ${isLast ? `data-assessment-target="${chapter.id}"` : `data-next-section="${chapter.id}"`}>
          ${isLast ? "前往本章測驗" : "下一小節"}
        </button>
      </div>
    </section>
  `;
}

function renderAssessmentPage(chapter, state) {
  const assessment = getAssessmentSection(chapter);
  const stats = getChapterStats(chapter, state);
  const completed = state.completedChapters.includes(chapter.id);

  return `
    <section class="lesson-heading assessment-heading">
      <span class="chapter-kicker">${chapter.code}</span>
      <h1>${assessment.sectionId} ${assessment.title}</h1>
      <p>確認本章小節完成狀態，完成測驗後就能標記整章完成。</p>
      <div class="chapter-meta">
        <span class="pill ${completed ? "done" : ""}">${completed ? "已完成" : "尚未完成"}</span>
        <span class="pill">小節 ${stats.completedSections}/${stats.totalSections}</span>
        <span class="pill">練習 ${stats.completedActivities}/${stats.totalActivities}</span>
        <span class="pill">測驗 ${stats.answeredCount}/${stats.totalQuiz}</span>
      </div>
    </section>
    ${renderActivities(chapter, state)}
    ${renderQuiz(chapter, state)}
    ${renderCompletionCard(chapter, state)}
  `;
}

function renderChapter(id, requestedView = null) {
  const chapter = getChapter(id);
  const state = getState();
  const completed = state.completedChapters.includes(chapter.id);
  const stats = getChapterStats(chapter, state);
  const sections = getSortedSections(chapter);
  const requestedSection = sections.find((section) => section.sectionId === requestedView);
  const activeView = requestedView === "quiz" ? "assessment" : "section";
  const activeSection = requestedSection || sections.find((section) => section.sectionId === getInitialSectionId(chapter, state)) || sections[0];
  const activeIndex = sections.findIndex((section) => section.sectionId === activeSection.sectionId);
  const sectionActivities = getActivitiesForSection(chapter, activeSection.sectionId);

  app.innerHTML = `
    <div class="lesson-layout">
      ${renderLessonNav(chapter, activeView, activeSection.sectionId, state)}

      <article class="lesson-article">
        ${activeView === "assessment" ? renderAssessmentPage(chapter, state) : `
          <header class="lesson-heading">
            <span class="chapter-kicker">${chapter.code}</span>
            <h1>${chapter.title}</h1>
            <p>${chapter.intro}</p>
            <div class="chapter-meta">
              <span class="pill">${chapter.minutes} 分鐘</span>
              <span class="pill ${completed ? "done" : ""}">${completed ? "已完成" : "尚未完成"}</span>
              <span class="pill">小節 ${stats.completedSections}/${stats.totalSections}</span>
              <span class="pill">練習 ${stats.completedActivities}/${stats.totalActivities}</span>
              <span class="pill">測驗 ${stats.answeredCount}/${stats.totalQuiz}</span>
            </div>
          </header>
          ${renderSection(activeSection, activeIndex)}
          ${renderActivities(chapter, state, sectionActivities)}
          ${renderSectionPager(chapter, activeSection, activeIndex, sections.length, state)}
        `}
      </article>
    </div>
  `;
}

function formatInlineCode(text) {
  return text.replace(/`([^`]+)`/g, "<code>$1</code>");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toggleActivityComplete(activityId, checked) {
  const state = getState();
  const completed = new Set(state.completedActivities);

  if (checked) {
    completed.add(activityId);
  } else {
    completed.delete(activityId);
  }

  saveState({
    ...state,
    completedActivities: [...completed]
  });
  renderCurrentRoute();
}

function handlePanelToggle(button) {
  const panel = document.getElementById(button.dataset.togglePanel);
  if (!panel) return;

  const shouldShow = panel.hidden;
  panel.hidden = !shouldShow;
  button.textContent = `${shouldShow ? "隱藏" : "查看"}${button.dataset.label}`;
}

function handleQuizClick(button) {
  const chapterId = Number(button.dataset.chapter);
  const questionIndex = Number(button.dataset.question);
  const selected = Number(button.dataset.option);
  const state = getState();
  const chapterAnswers = {
    ...getChapterQuizAnswers(chapterId, state),
    [questionIndex]: selected
  };

  saveState({
    ...state,
    quizAnswers: {
      ...state.quizAnswers,
      [getChapterKey(chapterId)]: chapterAnswers
    }
  });

  renderCurrentRoute();
}

function resetQuiz(chapterId) {
  const state = getState();
  const quizAnswers = { ...state.quizAnswers };
  delete quizAnswers[getChapterKey(chapterId)];

  saveState({
    ...state,
    quizAnswers
  });

  renderCurrentRoute();
}

function completeChapter(id) {
  const state = getState();
  const chapter = getChapter(id);
  const stats = getChapterStats(chapter, state);

  if (!stats.canComplete) return;

  const completed = new Set(state.completedChapters);
  completed.add(id);

  saveState({
    ...state,
    completedChapters: [...completed]
  });
  renderCurrentRoute();
}

function parseChapterRoute() {
  const match = (location.hash || "#home").match(/^#chapter-(\d+)(?:\/(.+))?$/);

  if (!match) {
    return null;
  }

  return {
    chapterId: Number(match[1]),
    view: match[2] ? decodeURIComponent(match[2]) : null
  };
}

function navigateToSection(chapterId, sectionId) {
  location.hash = `#chapter-${chapterId}/${encodeURIComponent(sectionId)}`;
}

function navigateToAssessment(chapterId) {
  location.hash = `#chapter-${chapterId}/quiz`;
}

function navigateRelativeSection(chapterId, direction) {
  const chapter = getChapter(chapterId);
  const sections = getSortedSections(chapter);
  const route = parseChapterRoute();
  const currentSectionId = route?.view && route.view !== "quiz" ? route.view : getInitialSectionId(chapter);
  const currentIndex = sections.findIndex((section) => section.sectionId === currentSectionId);
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

  navigateToSection(chapterId, sections[nextIndex].sectionId);
}

function completeCurrentSection(sectionId) {
  const route = parseChapterRoute();
  if (!route) return;

  const state = getState();
  const completedSections = new Set(state.completedSections);
  completedSections.add(getSectionKey(route.chapterId, sectionId));

  saveState({
    ...state,
    completedSections: [...completedSections]
  });

  if (!route.view || route.view === "quiz") {
    navigateToSection(route.chapterId, sectionId);
    return;
  }

  renderCurrentRoute();
}

function closeCourseMenu() {
  const menu = document.querySelector("[data-course-menu]");
  const toggle = document.querySelector("[data-course-toggle]");
  if (!menu || !toggle) return;

  menu.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}

function closeMobileNav() {
  if (!siteHeader || !navToggle) return;

  siteHeader.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function bindMainNavEvents() {
  if (!mainNav) return;

  navToggle?.addEventListener("click", () => {
    const isOpen = siteHeader?.classList.toggle("nav-open") || false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.addEventListener("click", (event) => {
    const courseToggle = event.target.closest("[data-course-toggle]");
    if (courseToggle) {
      const menu = document.querySelector("[data-course-menu]");
      if (!menu) return;

      const shouldOpen = menu.hidden;
      menu.hidden = !shouldOpen;
      courseToggle.setAttribute("aria-expanded", String(shouldOpen));
      return;
    }

    const navLink = event.target.closest("[data-nav-link]");
    if (navLink) {
      closeCourseMenu();
      closeMobileNav();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-course-dropdown]")) {
      closeCourseMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCourseMenu();
      closeMobileNav();
    }
  });
}

function bindEvents() {
  app.addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-toggle-panel]");
    if (toggleButton) {
      handlePanelToggle(toggleButton);
      return;
    }

    const quizButton = event.target.closest(".quiz-option");
    if (quizButton) {
      handleQuizClick(quizButton);
      return;
    }

    const resetButton = event.target.closest("[data-reset-quiz]");
    if (resetButton) {
      resetQuiz(Number(resetButton.dataset.resetQuiz));
      return;
    }

    const completeSectionButton = event.target.closest("[data-complete-section]");
    if (completeSectionButton) {
      completeCurrentSection(completeSectionButton.dataset.completeSection);
      return;
    }

    const completeButton = event.target.closest("[data-complete]");
    if (completeButton) {
      completeChapter(Number(completeButton.dataset.complete));
      return;
    }

    const sectionButton = event.target.closest("[data-section-target]");
    if (sectionButton) {
      const route = parseChapterRoute();
      if (route) navigateToSection(route.chapterId, sectionButton.dataset.sectionTarget);
      return;
    }

    const prevButton = event.target.closest("[data-prev-section]");
    if (prevButton) {
      navigateRelativeSection(Number(prevButton.dataset.prevSection), -1);
      return;
    }

    const nextButton = event.target.closest("[data-next-section]");
    if (nextButton) {
      navigateRelativeSection(Number(nextButton.dataset.nextSection), 1);
      return;
    }

    const assessmentButton = event.target.closest("[data-assessment-target]");
    if (assessmentButton) {
      navigateToAssessment(Number(assessmentButton.dataset.assessmentTarget));
      return;
    }

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      document.getElementById(scrollButton.dataset.scrollTarget)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  app.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-activity-complete]");
    if (checkbox) {
      toggleActivityComplete(checkbox.dataset.activityComplete, checkbox.checked);
    }
  });
}

function renderCurrentRoute() {
  const hash = location.hash || "#home";
  const chapterRoute = parseChapterRoute();

  if (chapterRoute) {
    renderChapter(chapterRoute.chapterId, chapterRoute.view);
  } else if (hash === "#map") {
    renderMap();
  } else if (hash === "#toolbox") {
    renderToolbox();
  } else if (hash === "#cheatsheet") {
    renderCheatSheet();
  } else if (hash === "#progress") {
    renderProgressPage();
  } else {
    renderHome();
  }

  updateActiveNav();
  app.focus({ preventScroll: true });
}

renderMainNav();
window.addEventListener("hashchange", renderCurrentRoute);
bindMainNavEvents();
bindEvents();
renderCurrentRoute();
