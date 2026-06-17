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
  },
  {
    id: 6,
    code: "CH06",
    title: "流程控制（二）：迴圈",
    minutes: 105,
    summary: "學會 for、while、do-while、巢狀迴圈、break 與 continue，讓程式能重複執行工作。",
    intro: "迴圈是程式變得有力量的關鍵。當一件事需要重複做十次、一百次，甚至直到使用者輸入正確為止，就該交給迴圈處理。",
    sections: [
      {
        sectionId: "6.1",
        title: "for 迴圈",
        body: [
          "如果沒有迴圈，想印出五次 Hello 就要寫五行一樣的程式。這不只麻煩，也很難維護。迴圈可以把重複規則濃縮成一段程式。",
          "`for` 適合用在你大致知道要重複幾次的情境，例如印出 1 到 10、計算 1 到 100 總和、跑九九乘法表。",
          "`for(初始值; 條件式; 更新式)` 有三個重點：初始值通常設定計數器，條件式決定迴圈是否繼續，更新式在每次執行後改變計數器。",
          "執行流程可以想成：開始 -> 判斷條件 -> 執行程式 -> 更新變數 -> 回到條件判斷。只要條件仍成立，就會繼續下一圈。"
        ],
        code: {
          title: "沒有迴圈：重複寫五行",
          value: `System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");
System.out.println("Hello");`
        },
        codes: [
          {
            title: "有迴圈：印出五次 Hello",
            value: `for (int i = 1; i <= 5; i++) {
    System.out.println("Hello");
}

// 執行結果：
// Hello
// Hello
// Hello
// Hello
// Hello`
          },
          {
            title: "for 的三個部分",
            value: `for (初始值; 條件式; 更新式) {
    // 條件成立時重複執行
}`
          },
          {
            title: "範例 1：印出 1 到 5",
            value: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// 執行結果：
// 1
// 2
// 3
// 4
// 5`
          },
          {
            title: "範例 2：倒數 5 到 1",
            value: `for (int i = 5; i >= 1; i--) {
    System.out.println(i);
}

// 執行結果：
// 5
// 4
// 3
// 2
// 1`
          },
          {
            title: "範例 3：每次加 2 印出偶數",
            value: `for (int i = 0; i <= 10; i += 2) {
    System.out.println(i);
}

// 執行結果：
// 0
// 2
// 4
// 6
// 8
// 10`
          },
          {
            title: "範例 4：計算 1 到 100 總和",
            value: `int sum = 0;

for (int i = 1; i <= 100; i++) {
    sum += i;
}

System.out.println(sum);

// 執行結果：
// 5050`
          },
          {
            title: "範例 5：九九乘法表單行",
            value: `for (int i = 1; i <= 9; i++) {
    System.out.println("2 x " + i + " = " + (2 * i));
}

// 執行結果：
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 2 x 9 = 18`
          },
          {
            title: "範例 6：印出陣列中的分數",
            value: `int[] scores = {80, 95, 72};

for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}

// 執行結果：
// 80
// 95
// 72`
          },
          {
            title: "範例 7：累計及格人數",
            value: `int[] scores = {80, 45, 90, 55, 70};
int passed = 0;

for (int i = 0; i < scores.length; i++) {
    if (scores[i] >= 60) {
        passed++;
    }
}

System.out.println("及格人數：" + passed);

// 執行結果：
// 及格人數：3`
          },
          {
            title: "範例 8：建立重複文字",
            value: `String line = "";

for (int i = 1; i <= 5; i++) {
    line += "*";
}

System.out.println(line);

// 執行結果：
// *****`
          }
        ]
      },
      {
        sectionId: "6.2",
        title: "while 迴圈",
        body: [
          "`while` 會在每次執行前先檢查條件。條件成立就執行，不成立就離開迴圈。",
          "`while` 很適合用在不知道會執行幾次的情況。例如使用者一直輸入到正確為止、遊戲持續到結束、資料讀到沒有下一筆為止。",
          "寫 while 時一定要注意：迴圈裡要有機會讓條件變成 false。否則程式可能進入無限迴圈，一直跑不停。"
        ],
        code: {
          title: "while 基本語法",
          value: `while (條件) {
    // 條件成立時重複執行
}`
        },
        codes: [
          {
            title: "範例 1：印出 1 到 5",
            value: `int i = 1;

while (i <= 5) {
    System.out.println(i);
    i++;
}

// 執行結果：
// 1
// 2
// 3
// 4
// 5`
          },
          {
            title: "範例 2：倒數計時",
            value: `int count = 10;

while (count >= 1) {
    System.out.println(count);
    count--;
}

// 執行結果：
// 10
// 9
// ...
// 1`
          },
          {
            title: "範例 3：累加計算",
            value: `int sum = 0;
int i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

System.out.println(sum);

// 執行結果：
// 5050`
          },
          {
            title: "範例 4：無限迴圈概念",
            value: `while (true) {
    System.out.println("這會一直執行");
    break; // 先用 break 避免真的無限執行
}

// 執行結果：
// 這會一直執行`
          },
          {
            title: "範例 5：常見錯誤，忘記更新變數",
            value: `int i = 1;

while (i <= 5) {
    System.out.println(i);
    // 忘記 i++，i 永遠是 1，迴圈不會結束
}`
          },
          {
            title: "範例 6：密碼輸入最多三次",
            value: `String password = "1234";
String input = "0000";
int tries = 1;

while (!input.equals(password) && tries < 3) {
    tries++;
    input = "1234";
}

System.out.println("嘗試次數：" + tries);

// 執行結果：
// 嘗試次數：2`
          }
        ]
      },
      {
        sectionId: "6.3",
        title: "do-while 迴圈",
        body: [
          "`do-while` 和 `while` 最大的差別是：do-while 會先執行一次，再判斷條件。因此它至少會執行一次。",
          "這很適合選單、輸入提示、確認訊息等情境。即使條件一開始不成立，使用者也應該先看見一次選單或提示。"
        ],
        code: {
          title: "do-while 基本語法",
          value: `do {
    // 至少執行一次
} while (條件);`
        },
        codes: [
          {
            title: "範例 1：印出 1 到 5",
            value: `int i = 1;

do {
    System.out.println(i);
    i++;
} while (i <= 5);

// 執行結果：
// 1
// 2
// 3
// 4
// 5`
          },
          {
            title: "範例 2：條件一開始就不成立",
            value: `int i = 10;

do {
    System.out.println(i);
} while (i < 5);

// 執行結果：
// 10`
          },
          {
            title: "比較：while 一開始不成立",
            value: `int i = 10;

while (i < 5) {
    System.out.println(i);
}

// 執行結果：
// 不會輸出任何內容`
          },
          {
            title: "範例 3：簡單選單至少顯示一次",
            value: `int choice = 2;

do {
    System.out.println("1. 開始遊戲");
    System.out.println("2. 離開");
} while (choice != 2);

// 執行結果：
// 1. 開始遊戲
// 2. 離開`
          }
        ]
      },
      {
        sectionId: "6.4",
        title: "巢狀迴圈",
        body: [
          "巢狀迴圈就是迴圈裡面再放迴圈。可以想成外層迴圈控制第幾列，內層迴圈控制每一列要做幾次。",
          "外層跑一次，內層通常會完整跑一輪。這個概念很常用在表格、座標、星號圖形與九九乘法表。",
          "圖解：外層迴圈 -> 進入內層迴圈 -> 內層跑完 -> 回到外層下一圈。"
        ],
        code: {
          title: "巢狀迴圈基本概念",
          value: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println(i + "," + j);
    }
}`
        },
        codes: [
          {
            title: "範例 1：座標組合",
            value: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.println(i + "," + j);
    }
}

// 執行結果：
// 1,1
// 1,2
// 1,3
// 2,1
// ...
// 3,3`
          },
          {
            title: "範例 2：矩形星號",
            value: `for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print("*");
    }
    System.out.println();
}

// 執行結果：
// *****
// *****
// *****
// *****
// *****`
          },
          {
            title: "範例 3：三角形",
            value: `for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}

// 執行結果：
// *
// **
// ***
// ****
// *****`
          },
          {
            title: "範例 4：完整九九乘法表",
            value: `for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        System.out.printf("%d x %d = %d%n", i, j, i * j);
    }
}

// 執行結果：
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 9 x 9 = 81`
          },
          {
            title: "範例 5：每列不同數字",
            value: `for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= 4; j++) {
        System.out.print(i);
    }
    System.out.println();
}

// 執行結果：
// 1111
// 2222
// 3333
// 4444`
          },
          {
            title: "範例 6：倒三角形",
            value: `for (int i = 5; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}

// 執行結果：
// *****
// ****
// ***
// **
// *`
          }
        ]
      },
      {
        sectionId: "6.5",
        title: "break 與 continue",
        body: [
          "`break` 會提前離開迴圈。當你已經找到答案、達到停止條件、或使用者選擇離開時，可以使用 break。",
          "`continue` 會略過本次迴圈剩下的程式，直接進入下一圈。它常用在跳過不需要處理的資料。",
          "簡單比較：break 是停止整個迴圈；continue 是只跳過這一次。"
        ],
        code: {
          title: "break：遇到 5 就停止",
          value: `for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }

    System.out.println(i);
}

// 執行結果：
// 1
// 2
// 3
// 4`
        },
        codes: [
          {
            title: "continue：略過 5",
            value: `for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }

    System.out.println(i);
}

// 執行結果：
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10`
          },
          {
            title: "範例 2：找到第一個大於 50 的 7 的倍數",
            value: `for (int i = 1; i <= 100; i++) {
    if (i > 50 && i % 7 == 0) {
        System.out.println(i);
        break;
    }
}

// 執行結果：
// 56`
          },
          {
            title: "範例 3：略過所有奇數",
            value: `for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }

    System.out.println(i);
}

// 執行結果：
// 2
// 4
// 6
// 8
// 10`
          }
        ]
      },
      {
        sectionId: "6.6",
        title: "綜合演練",
        body: [
          "這一節把 for、while、巢狀迴圈、break 與條件判斷組合起來。你不需要一次背完所有寫法，先看懂每個專案的流程。",
          "寫小專案時，先用中文描述步驟，再翻成 Java。範例中的每個程式都故意保持簡短，讓你能看見迴圈在專案中扮演的角色。"
        ],
        code: {
          title: "專案 1：1 到 100 加總計算器",
          value: `int sum = 0;

for (int i = 1; i <= 100; i++) {
    sum += i;
}

System.out.println("1 到 100 總和是 " + sum);

// 執行結果：
// 1 到 100 總和是 5050`
        },
        codes: [
          {
            title: "專案 2：猜數字遊戲",
            value: `int answer = 7;
int guess = 3;

while (guess != answer) {
    System.out.println("猜錯了，再猜一次");
    guess = 7;
}

System.out.println("猜對了");

// 執行結果：
// 猜錯了，再猜一次
// 猜對了`
          },
          {
            title: "專案 3：星號金字塔",
            value: `for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}

// 執行結果：
// *
// **
// ***
// ****
// *****`
          },
          {
            title: "專案 4：簡易登入系統",
            value: `String correctPassword = "java123";
String input = "wrong";
int attempts = 1;

while (!input.equals(correctPassword) && attempts < 3) {
    System.out.println("密碼錯誤");
    attempts++;
    input = attempts == 3 ? "wrong" : "java123";
}

if (input.equals(correctPassword)) {
    System.out.println("登入成功");
} else {
    System.out.println("帳號鎖定");
}

// 執行結果：
// 密碼錯誤
// 登入成功`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch06-exercise-for-basic",
        sectionId: "6.1",
        type: "exercise",
        title: "實作練習：for 迴圈基本練習",
        question: "請用 for 迴圈完成：印出 1~10、印出 10~1、印出 1~20 的所有偶數、計算 1~50 總和。",
        hint: "先決定起始值與結束條件。倒數時更新式會用 i--，偶數可以用 i += 2 或 i % 2 == 0。",
        solution: `int sum = 0;

for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}

for (int i = 10; i >= 1; i--) {
    System.out.println(i);
}

for (int i = 2; i <= 20; i += 2) {
    System.out.println(i);
}

for (int i = 1; i <= 50; i++) {
    sum += i;
}

System.out.println("總和：" + sum);`,
        explanation: "for 迴圈最重要的是三個部分是否互相配合。起始值決定從哪裡開始，條件式決定何時停下，更新式決定每圈如何接近結束。"
      }),
      createActivity({
        id: "ch06-thought-for-flow",
        sectionId: "6.1",
        type: "thought",
        title: "思考題：for 的執行順序",
        question: "請用自己的話描述 for 迴圈中初始值、條件式、程式內容、更新式的執行順序。",
        hint: "初始值只會在一開始執行一次；條件式會在每一圈前檢查。",
        solution: "先執行初始值，接著檢查條件式。條件成立就執行大括號內的程式，執行完後跑更新式，再回到條件式重新判斷。",
        explanation: "理解執行順序後，比較容易判斷迴圈會跑幾次，也比較能找出少跑一次或多跑一次的錯誤。"
      }),
      createActivity({
        id: "ch06-exercise-while-basic",
        sectionId: "6.2",
        type: "exercise",
        title: "實作練習：while 迴圈",
        question: "使用 while 完成：印出 1~20、印出 20~1、計算 1~100 總和。",
        hint: "while 需要在迴圈外先宣告變數，並在迴圈內記得更新變數。",
        solution: `int i = 1;

while (i <= 20) {
    System.out.println(i);
    i++;
}

i = 20;

while (i >= 1) {
    System.out.println(i);
    i--;
}

int sum = 0;
i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

System.out.println(sum);`,
        explanation: "while 的條件會在每圈前判斷。若忘記 i++ 或 i--，條件可能永遠成立，造成無限迴圈。"
      }),
      createActivity({
        id: "ch06-thought-infinite-loop",
        sectionId: "6.2",
        type: "thought",
        title: "思考題：為什麼會有無限迴圈？",
        question: "為什麼 `while (i <= 5)` 裡面如果沒有 `i++`，程式可能停不下來？",
        hint: "想想 i 的值是否有機會變大，條件是否有機會變成 false。",
        solution: "因為 i 一直沒有改變，如果一開始 i 是 1，`i <= 5` 會一直是 true，所以 while 會一直重複執行。",
        explanation: "迴圈必須設計出離開條件。每一圈都要讓變數逐漸接近停止條件，否則程式會不斷重複。"
      }),
      createActivity({
        id: "ch06-exercise-do-while-menu",
        sectionId: "6.3",
        type: "exercise",
        title: "實作練習：建立簡單選單",
        question: "用 do-while 建立簡單選單，至少顯示一次：1. 開始遊戲 2. 離開。",
        hint: "先把 choice 設成某個值，do 區塊負責顯示選單，while 判斷是否繼續。",
        solution: `int choice = 2;

do {
    System.out.println("1. 開始遊戲");
    System.out.println("2. 離開");
} while (choice != 2);`,
        explanation: "do-while 會先執行 do 區塊，再檢查條件，所以很適合選單這類至少要顯示一次的畫面。"
      }),
      createActivity({
        id: "ch06-exercise-nested-loops",
        sectionId: "6.4",
        type: "exercise",
        title: "實作練習：巢狀迴圈圖形",
        question: "請用巢狀迴圈印出方形、三角形，以及完整九九乘法表。",
        hint: "外層控制第幾列，內層控制每列要印幾次。三角形的內層次數可以跟 i 有關。",
        solution: `for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        System.out.print("*");
    }
    System.out.println();
}

for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}

for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        System.out.printf("%d x %d = %d%n", i, j, i * j);
    }
}`,
        explanation: "巢狀迴圈的重點是看懂外層與內層的分工。外層每跑一次，內層就會從頭跑到結束。"
      }),
      createActivity({
        id: "ch06-exercise-break-continue",
        sectionId: "6.5",
        type: "exercise",
        title: "實作練習：break 與 continue",
        question: "寫兩段程式：找到第一個大於 50 的 7 的倍數後停止；印出 1~20 但略過所有奇數。",
        hint: "停止整個迴圈用 break；略過本次迴圈用 continue。判斷倍數可以用 `%`。",
        solution: `for (int i = 1; i <= 100; i++) {
    if (i > 50 && i % 7 == 0) {
        System.out.println(i);
        break;
    }
}

for (int i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue;
    }

    System.out.println(i);
}`,
        explanation: "第一段找到 56 後 break，整個迴圈結束。第二段遇到奇數時 continue，會跳過 println，直接進入下一圈。"
      }),
      createActivity({
        id: "ch06-homework-loop-projects",
        sectionId: "6.6",
        type: "homework",
        title: "作業：完成四個迴圈小專案",
        question: "請完成：1~100 加總計算器、猜數字遊戲、星號金字塔、最多三次的簡易登入系統。",
        hint: "先分別決定每個專案適合的迴圈：加總用 for，猜數字和登入可用 while，星號金字塔用巢狀迴圈。",
        solution: `// 1. 加總
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println(sum);

// 2. 猜數字概念
int answer = 8;
int guess = 0;
while (guess != answer) {
    guess = answer;
}
System.out.println("猜對了");

// 3. 星號金字塔
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}

// 4. 登入系統概念
String password = "java123";
String input = "wrong";
int tries = 1;
while (!input.equals(password) && tries < 3) {
    tries++;
    input = "java123";
}
System.out.println(input.equals(password) ? "登入成功" : "帳號鎖定");`,
        explanation: "這份作業的目的，是把迴圈和條件分支一起使用。真實程式會用 Scanner 讀輸入，這裡先用固定值保留流程重點。"
      })
    ],
    quiz: [
      {
        question: "什麼情況最適合使用迴圈？",
        options: ["需要重複執行相似工作", "只宣告一個 class", "只寫一行註解", "只修改檔名"],
        answer: 0,
        explanation: "迴圈用來處理重複執行的工作，例如印出多次、累加、重複讀取輸入。"
      },
      {
        question: "`for (int i = 1; i <= 5; i++)` 會執行幾次？",
        options: ["5 次", "4 次", "6 次", "永遠不執行"],
        answer: 0,
        explanation: "i 會是 1、2、3、4、5，共五次。"
      },
      {
        question: "for 迴圈的更新式通常負責什麼？",
        options: ["改變計數器", "建立 class", "輸入檔案名稱", "停止瀏覽器"],
        answer: 0,
        explanation: "更新式通常讓計數器增加或減少，使迴圈逐漸接近結束條件。"
      },
      {
        question: "哪個 for 寫法可以倒數 5 到 1？",
        options: ["for (int i = 5; i >= 1; i--)", "for (int i = 1; i <= 5; i++)", "for (int i = 0; i < 5; i++)", "for (int i = 5; i <= 1; i++)"],
        answer: 0,
        explanation: "倒數時起點是 5，條件是 i >= 1，更新式是 i--。"
      },
      {
        question: "while 迴圈何時檢查條件？",
        options: ["每次執行前", "只在程式結束後", "永遠不檢查", "只在編譯時"],
        answer: 0,
        explanation: "while 會先判斷條件，條件成立才執行迴圈內容。"
      },
      {
        question: "while 迴圈忘記更新變數，可能造成什麼？",
        options: ["無限迴圈", "自動轉型", "switch 貫穿", "變數名稱變大寫"],
        answer: 0,
        explanation: "如果條件永遠不會變成 false，迴圈就可能不停執行。"
      },
      {
        question: "`while (true)` 通常代表什麼？",
        options: ["無限迴圈", "永遠不執行", "只執行一次", "只能用在 String"],
        answer: 0,
        explanation: "true 永遠成立，因此除非裡面有 break 或程式被停止，否則會一直執行。"
      },
      {
        question: "do-while 的主要特色是什麼？",
        options: ["至少執行一次", "一定不會執行", "不能有條件", "只能印文字"],
        answer: 0,
        explanation: "do-while 先執行 do 區塊，再檢查條件，所以至少會執行一次。"
      },
      {
        question: "哪個情境很適合 do-while？",
        options: ["選單至少顯示一次", "只比較兩個固定字串", "宣告 class 名稱", "只寫註解"],
        answer: 0,
        explanation: "選單通常需要先顯示一次，再依使用者選擇判斷是否繼續。"
      },
      {
        question: "巢狀迴圈是什麼？",
        options: ["迴圈裡面再放迴圈", "只能使用一個 if", "不能輸出資料", "只用於 import"],
        answer: 0,
        explanation: "巢狀迴圈就是一個迴圈內部還有另一個迴圈。"
      },
      {
        question: "在星號矩形中，外層迴圈常負責什麼？",
        options: ["控制列數", "控制 Java 版本", "建立 Scanner 套件", "刪除分號"],
        answer: 0,
        explanation: "外層常控制第幾列，內層控制每列印出幾個星號。"
      },
      {
        question: "九九乘法表通常適合使用什麼？",
        options: ["巢狀迴圈", "只用一個變數", "沒有條件式", "只用 break"],
        answer: 0,
        explanation: "九九乘法表有兩個變化的數字，因此很適合用外層與內層迴圈處理。"
      },
      {
        question: "break 在迴圈中的作用是什麼？",
        options: ["提前離開迴圈", "略過本次後繼續下一圈", "讓數字加一", "宣告字串"],
        answer: 0,
        explanation: "break 會直接結束所在的迴圈。"
      },
      {
        question: "continue 在迴圈中的作用是什麼？",
        options: ["略過本次迴圈剩下的程式", "結束整個程式", "建立 main 方法", "把 int 轉 String"],
        answer: 0,
        explanation: "continue 會跳過本次剩餘內容，直接進入下一輪迴圈判斷。"
      },
      {
        question: "簡易登入系統最多輸入三次密碼，適合搭配哪個概念？",
        options: ["while 與計數器", "只用 System.out.println", "只用 char", "只用位元運算"],
        answer: 0,
        explanation: "登入重試通常不知道何時成功，可以用 while 搭配 attempts 計數器限制次數。"
      }
    ]
  },
  {
    id: 7,
    code: "CH07",
    title: "陣列（Array）",
    minutes: 120,
    summary: "學會用陣列保存同型態資料，讀取與修改元素，理解多維陣列、參照型別與命令列參數。",
    intro: "陣列讓你可以把一群相同型態的資料放在同一個名字底下管理。從這章開始，程式不再只處理單一變數，而是能處理一整批資料。",
    sections: [
      {
        sectionId: "7.1",
        title: "什麼是陣列",
        body: [
          "先想一個問題：如果要儲存五位學生成績，可以宣告五個變數。但如果有一百位學生呢？變數名稱會變得很難管理，程式也會非常重複。",
          "陣列（Array）可以儲存大量相同型態的資料。例如一整組 int 分數、一整組 String 姓名，或一整組 boolean 狀態。",
          "陣列最重要的三個觀念是：索引（Index）從 0 開始、`length` 代表元素數量、最後一個元素的位置是 `length - 1`。",
          "圖解：索引 0 1 2 3 4 對應資料 80 75 90 60 88。也就是 `scores[0]` 是 80，`scores[4]` 是 88。"
        ],
        code: {
          title: "不用陣列：五位學生成績",
          value: `int score1 = 80;
int score2 = 75;
int score3 = 90;
int score4 = 60;
int score5 = 88;`
        },
        codes: [
          {
            title: "圖解：索引與資料位置",
            value: `Index

0    1    2    3    4
+----+----+----+----+----+
| 80 | 75 | 90 | 60 | 88 |
+----+----+----+----+----+`
          },
          {
            title: "範例 1：宣告並初始化陣列",
            value: `int[] scores = {80, 75, 90, 60, 88};

// 圖解：
// scores[0] -> 80
// scores[1] -> 75
// scores[2] -> 90
// scores[3] -> 60
// scores[4] -> 88`
          },
          {
            title: "範例 2：讀取第一個元素",
            value: `int[] scores = {80, 75, 90, 60, 88};

System.out.println(scores[0]);

// 執行結果：
// 80`
          },
          {
            title: "範例 3：讀取最後一個元素",
            value: `int[] scores = {80, 75, 90, 60, 88};

System.out.println(scores[4]);

// 執行結果：
// 88`
          },
          {
            title: "範例 4：修改元素",
            value: `int[] scores = {80, 75, 90, 60, 88};

scores[1] = 100;

System.out.println(scores[1]);

// 執行結果：
// 100`
          },
          {
            title: "範例 5：使用 length",
            value: `int[] scores = {80, 75, 90, 60, 88};

System.out.println(scores.length);

// 執行結果：
// 5`
          },
          {
            title: "範例 6：最後一個索引是 length - 1",
            value: `int[] scores = {80, 75, 90, 60, 88};

int lastIndex = scores.length - 1;
System.out.println(scores[lastIndex]);

// 執行結果：
// 88`
          },
          {
            title: "範例 7：用迴圈印出所有元素",
            value: `int[] scores = {80, 75, 90, 60, 88};

for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}

// 執行結果：
// 80
// 75
// 90
// 60
// 88`
          },
          {
            title: "範例 8：常見錯誤，索引超出範圍",
            value: `int[] scores = {80, 75, 90, 60, 88};

System.out.println(scores[5]);

// 執行結果：
// ArrayIndexOutOfBoundsException
//
// 原因：
// 陣列長度是 5，合法索引只有 0 到 4。`
          }
        ]
      },
      {
        sectionId: "7.2",
        title: "陣列的配置與初值設定",
        body: [
          "建立陣列常見方式有兩種：宣告時直接放入資料，或先指定大小，再把資料一格一格放進去。",
          "使用 `new int[5]` 代表建立一個可以放 5 個 int 的陣列。這 5 格一開始會有預設值。int 預設是 0，double 預設是 0.0，boolean 預設是 false，String 預設是 null。",
          "指定大小的陣列很適合搭配 Scanner 和迴圈：先建立空陣列，再讓使用者輸入資料，最後計算總和、平均或最大值。"
        ],
        code: {
          title: "方式 1：宣告同時初始化",
          value: `int[] nums = {1, 2, 3, 4, 5};

// 圖解：
// Index: 0 1 2 3 4
// Value: 1 2 3 4 5`
        },
        codes: [
          {
            title: "方式 2：指定大小",
            value: `int[] nums = new int[5];

// 圖解：
// Index: 0 1 2 3 4
// Value: 0 0 0 0 0`
          },
          {
            title: "範例 1：int 陣列預設值",
            value: `int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// 執行結果：
// 0
// 0
// 0
// 0
// 0`
          },
          {
            title: "範例 2：double 陣列預設值",
            value: `double[] prices = new double[3];

for (int i = 0; i < prices.length; i++) {
    System.out.println(prices[i]);
}

// 執行結果：
// 0.0
// 0.0
// 0.0`
          },
          {
            title: "範例 3：boolean 陣列預設值",
            value: `boolean[] passed = new boolean[3];

for (int i = 0; i < passed.length; i++) {
    System.out.println(passed[i]);
}

// 執行結果：
// false
// false
// false`
          },
          {
            title: "範例 4：String 陣列預設值",
            value: `String[] names = new String[3];

for (int i = 0; i < names.length; i++) {
    System.out.println(names[i]);
}

// 執行結果：
// null
// null
// null`
          },
          {
            title: "範例 5：指定元素值",
            value: `int[] numbers = new int[5];

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

System.out.println(numbers[2]);

// 執行結果：
// 30`
          },
          {
            title: "範例 6：利用迴圈輸出",
            value: `int[] numbers = {10, 20, 30, 40, 50};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// 執行結果：
// 10
// 20
// 30
// 40
// 50`
          },
          {
            title: "範例 7：利用 Scanner 輸入資料",
            value: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[5];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = sc.nextInt();
        }
    }
}

// 輸入範例：
// 80 75 90 60 88`
          },
          {
            title: "範例 8：計算總和",
            value: `int[] scores = {80, 75, 90, 60, 88};
int sum = 0;

for (int i = 0; i < scores.length; i++) {
    sum += scores[i];
}

System.out.println(sum);

// 執行結果：
// 393`
          },
          {
            title: "範例 9：計算平均分數",
            value: `int[] scores = {80, 75, 90, 60, 88};
int sum = 0;

for (int i = 0; i < scores.length; i++) {
    sum += scores[i];
}

double average = (double) sum / scores.length;
System.out.println(average);

// 執行結果：
// 78.6`
          },
          {
            title: "範例 10：找最大值",
            value: `int[] scores = {80, 75, 90, 60, 88};
int max = scores[0];

for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}

System.out.println(max);

// 執行結果：
// 90`
          }
        ]
      },
      {
        sectionId: "7.3",
        title: "多維陣列（Multi-Dimensional Array）",
        body: [
          "二維陣列可以把資料想成表格。第一個索引通常代表列（row），第二個索引代表欄（column）。",
          "例如 `table[1][2]` 代表第 1 列、第 2 欄。因為索引從 0 開始，所以它是第二列第三欄。",
          "二維陣列很適合表示學生成績表、座位表、棋盤、乘法表等資料。搭配巢狀迴圈可以逐列逐欄處理。"
        ],
        code: {
          title: "圖解：3 x 3 表格",
          value: `      0   1   2

0    10  20  30
1    40  50  60
2    70  80  90`
        },
        codes: [
          {
            title: "宣告二維陣列",
            value: `int[][] table = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

// 圖解：
// table[0] -> {10, 20, 30}
// table[1] -> {40, 50, 60}
// table[2] -> {70, 80, 90}`
          },
          {
            title: "範例 1：讀取元素",
            value: `int[][] table = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

System.out.println(table[1][2]);

// 執行結果：
// 60`
          },
          {
            title: "範例 2：修改元素",
            value: `int[][] table = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

table[0][1] = 99;
System.out.println(table[0][1]);

// 執行結果：
// 99`
          },
          {
            title: "範例 3：使用巢狀迴圈輸出",
            value: `int[][] table = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};

for (int row = 0; row < table.length; row++) {
    for (int col = 0; col < table[row].length; col++) {
        System.out.print(table[row][col] + " ");
    }
    System.out.println();
}

// 執行結果：
// 10 20 30
// 40 50 60
// 70 80 90`
          },
          {
            title: "範例 4：建立 3 x 3 乘法表",
            value: `int[][] multiply = new int[3][3];

for (int i = 0; i < multiply.length; i++) {
    for (int j = 0; j < multiply[i].length; j++) {
        multiply[i][j] = (i + 1) * (j + 1);
    }
}

// 圖解：
// 1 2 3
// 2 4 6
// 3 6 9`
          },
          {
            title: "範例 5：學生成績表",
            value: `int[][] scores = {
    {80, 90, 75},
    {60, 88, 92}
};

System.out.println("第 1 位學生國文：" + scores[0][0]);
System.out.println("第 2 位學生英文：" + scores[1][1]);

// 執行結果：
// 第 1 位學生國文：80
// 第 2 位學生英文：88`
          },
          {
            title: "範例 6：計算二維陣列總和",
            value: `int[][] table = {
    {10, 20, 30},
    {40, 50, 60}
};
int sum = 0;

for (int i = 0; i < table.length; i++) {
    for (int j = 0; j < table[i].length; j++) {
        sum += table[i][j];
    }
}

System.out.println(sum);

// 執行結果：
// 210`
          },
          {
            title: "範例 7：每位學生平均",
            value: `int[][] scores = {
    {80, 90, 70},
    {60, 75, 85}
};

for (int i = 0; i < scores.length; i++) {
    int sum = 0;

    for (int j = 0; j < scores[i].length; j++) {
        sum += scores[i][j];
    }

    System.out.println((double) sum / scores[i].length);
}

// 執行結果：
// 80.0
// 73.33333333333333`
          },
          {
            title: "範例 8：不規則二維陣列",
            value: `int[][] data = {
    {1, 2},
    {3, 4, 5},
    {6}
};

for (int i = 0; i < data.length; i++) {
    System.out.println("第 " + i + " 列長度：" + data[i].length);
}

// 執行結果：
// 第 0 列長度：2
// 第 1 列長度：3
// 第 2 列長度：1`
          }
        ]
      },
      {
        sectionId: "7.4",
        title: "參照型別（Reference Data Type）",
        body: [
          "Java 的資料型態可以先粗略分成基本型別與參照型別。基本型別包含 int、double、boolean、char；參照型別包含 String、Array、Scanner 等。",
          "新手可以先這樣理解：基本型別變數比較像直接存資料，參照型別變數比較像存放一個指向資料位置的參考。",
          "陣列是參照型別。當你把一個陣列指定給另一個變數時，通常不是複製整份陣列，而是讓兩個變數指向同一個陣列。"
        ],
        code: {
          title: "圖解：基本型別",
          value: `int x = 10

變數 x 直接保存 10 這個值`
        },
        codes: [
          {
            title: "圖解：參照型別",
            value: `String name = "Jimmy"
int[] scores = {80, 90, 100}

變數 name 與 scores 保存的是參考位置
真正資料放在另一個地方`
          },
          {
            title: "範例 1：基本型別複製值",
            value: `int a = 10;
int b = a;

b = 99;

System.out.println(a);
System.out.println(b);

// 執行結果：
// 10
// 99`
          },
          {
            title: "範例 2：陣列參照同一份資料",
            value: `int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;

arr2[0] = 99;

System.out.println(arr1[0]);
System.out.println(arr2[0]);

// 執行結果：
// 99
// 99`
          },
          {
            title: "範例 3：建立真正的新陣列",
            value: `int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};

arr2[0] = 99;

System.out.println(arr1[0]);
System.out.println(arr2[0]);

// 執行結果：
// 1
// 99`
          }
        ]
      },
      {
        sectionId: "7.5",
        title: "命令列參數：argv 陣列",
        body: [
          "你在 `main` 方法中看到的 `String[] args`，其實就是一個 String 陣列。它用來接收執行程式時從命令列傳進來的參數。",
          "例如執行 `java Main Jimmy`，程式中的 `args[0]` 就會是 `Jimmy`。如果執行 `java Main Jimmy 25`，`args[0]` 是 Jimmy，`args[1]` 是 25。",
          "使用 args 時要特別小心：如果沒有傳入任何參數，卻讀取 `args[0]`，就會發生索引超出範圍錯誤。"
        ],
        code: {
          title: "main 方法中的 args",
          value: `public static void main(String[] args) {
    // args 是 String 陣列
}`
        },
        codes: [
          {
            title: "範例 1：印出第一個參數",
            value: `public class Main {
    public static void main(String[] args) {
        System.out.println(args[0]);
    }
}

// 執行：
// java Main Jimmy
//
// 輸出：
// Jimmy`
          },
          {
            title: "範例 2：輸入姓名與年齡",
            value: `public class Main {
    public static void main(String[] args) {
        System.out.println("姓名：" + args[0]);
        System.out.println("年齡：" + args[1]);
    }
}

// 執行：
// java Main Jimmy 25
//
// 輸出：
// 姓名：Jimmy
// 年齡：25`
          },
          {
            title: "範例 3：利用迴圈印出所有參數",
            value: `public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }
    }
}

// 執行：
// java Main Java Array Loop
//
// 輸出：
// Java
// Array
// Loop`
          },
          {
            title: "範例 4：計算參數數量",
            value: `public class Main {
    public static void main(String[] args) {
        System.out.println(args.length);
    }
}

// 執行：
// java Main Jimmy 25
//
// 輸出：
// 2`
          },
          {
            title: "範例 5：先檢查長度再讀取",
            value: `public class Main {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("你好 " + args[0]);
        } else {
            System.out.println("請輸入姓名");
        }
    }
}

// 沒有參數時不會讀取 args[0]，避免錯誤。`
          }
        ]
      },
      {
        sectionId: "7.6",
        title: "綜合演練",
        body: [
          "這一節把陣列、迴圈、二維陣列與命令列參數放進小專案。重點不是一次寫出很大的系統，而是看懂陣列如何保存一批資料。",
          "如果題目看起來複雜，先拆成三步：建立陣列、用迴圈處理資料、輸出結果。這個思考方式會一直用到後面的課程。"
        ],
        code: {
          title: "專案 1：學生成績管理系統",
          value: `int[] scores = {80, 75, 90, 60, 88};
int sum = 0;

for (int i = 0; i < scores.length; i++) {
    System.out.println("第 " + (i + 1) + " 位：" + scores[i]);
    sum += scores[i];
}

double average = (double) sum / scores.length;

System.out.println("總分：" + sum);
System.out.println("平均：" + average);

// 執行結果：
// 第 1 位：80
// ...
// 總分：393
// 平均：78.6`
        },
        codes: [
          {
            title: "專案 2：最高分搜尋器",
            value: `int[] scores = {80, 75, 90, 60, 88};
int max = scores[0];

for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}

System.out.println("最高分：" + max);

// 執行結果：
// 最高分：90`
          },
          {
            title: "專案 3：班級成績表",
            value: `int[][] classScores = {
    {80, 90, 75},
    {60, 88, 92},
    {95, 70, 85}
};

for (int student = 0; student < classScores.length; student++) {
    System.out.print("學生 " + (student + 1) + "：");

    for (int subject = 0; subject < classScores[student].length; subject++) {
        System.out.print(classScores[student][subject] + " ");
    }

    System.out.println();
}

// 執行結果：
// 學生 1：80 90 75
// 學生 2：60 88 92
// 學生 3：95 70 85`
          },
          {
            title: "專案 4：命令列問候程式",
            value: `public class Main {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("你好 " + args[0]);
        } else {
            System.out.println("請輸入姓名");
        }
    }
}

// 執行：
// java Main Jimmy
//
// 輸出：
// 你好 Jimmy`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch07-exercise-array-basic",
        sectionId: "7.1",
        type: "exercise",
        title: "實作練習：建立並操作一維陣列",
        question: "建立 5 個整數的陣列，印出第一個元素，修改第三個元素，再用迴圈印出所有元素。",
        hint: "第三個元素的索引是 2，不是 3。印出所有元素時，條件可以寫 `i < 陣列.length`。",
        solution: `int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers[0]);

numbers[2] = 99;

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`,
        explanation: "陣列索引從 0 開始，因此第一個元素是 numbers[0]，第三個元素是 numbers[2]。使用 length 可以避免把陣列長度寫死。"
      }),
      createActivity({
        id: "ch07-thought-index",
        sectionId: "7.1",
        type: "thought",
        title: "思考題：為什麼 scores[5] 會錯？",
        question: "如果 `scores` 裡有 5 個元素，為什麼 `scores[5]` 會發生 ArrayIndexOutOfBoundsException？",
        hint: "列出合法索引：0、1、2、3、4。最後一個位置不是 5。",
        solution: "因為長度是 5 的陣列，合法索引只有 0 到 4。`scores[5]` 想讀取第 6 個位置，但這個位置不存在。",
        explanation: "length 是元素數量，不是最後索引。最後索引永遠是 length - 1。這是陣列最常見的新手錯誤之一。"
      }),
      createActivity({
        id: "ch07-exercise-array-input",
        sectionId: "7.2",
        type: "exercise",
        title: "實作練習：輸入 5 個分數並統計",
        question: "建立長度為 5 的分數陣列，輸入 5 個分數，計算總和、平均與最大值。",
        hint: "可以用三段邏輯：輸入資料、跑迴圈累加、用 if 更新最大值。",
        solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] scores = new int[5];
        int sum = 0;
        int max;

        for (int i = 0; i < scores.length; i++) {
            scores[i] = sc.nextInt();
        }

        max = scores[0];

        for (int i = 0; i < scores.length; i++) {
            sum += scores[i];

            if (scores[i] > max) {
                max = scores[i];
            }
        }

        System.out.println("總和：" + sum);
        System.out.println("平均：" + ((double) sum / scores.length));
        System.out.println("最高分：" + max);
    }
}`,
        explanation: "陣列讓你可以先收集一批分數，再用迴圈統一處理。找最大值時常把第一個元素當作初始最大值，再逐一比較。"
      }),
      createActivity({
        id: "ch07-exercise-2d-array",
        sectionId: "7.3",
        type: "exercise",
        title: "實作練習：2 x 3 二維陣列",
        question: "建立 2 x 3 的整數陣列，印出全部資料，並計算總和。",
        hint: "外層迴圈跑列，內層迴圈跑欄。二維陣列的總和要在內層累加每個元素。",
        solution: `int[][] data = {
    {10, 20, 30},
    {40, 50, 60}
};
int sum = 0;

for (int i = 0; i < data.length; i++) {
    for (int j = 0; j < data[i].length; j++) {
        System.out.print(data[i][j] + " ");
        sum += data[i][j];
    }
    System.out.println();
}

System.out.println("總和：" + sum);`,
        explanation: "二維陣列可以看成表格。`data.length` 是列數，`data[i].length` 是第 i 列的欄數。"
      }),
      createActivity({
        id: "ch07-exercise-reference",
        sectionId: "7.4",
        type: "exercise",
        title: "實作練習：觀察參照型別",
        question: "建立 `arr1` 與 `arr2`，讓 `arr2 = arr1`，修改 `arr2[0]` 後觀察 `arr1[0]` 的變化。",
        hint: "arr2 = arr1 不是複製整份陣列，而是讓兩個變數指向同一個陣列。",
        solution: `int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;

arr2[0] = 99;

System.out.println(arr1[0]);
System.out.println(arr2[0]);`,
        explanation: "因為 arr1 和 arr2 參照同一個陣列，所以透過 arr2 修改第 0 格，arr1 看到的也是修改後的結果。"
      }),
      createActivity({
        id: "ch07-exercise-args",
        sectionId: "7.5",
        type: "exercise",
        title: "實作練習：使用 args 陣列",
        question: "寫一個程式：印出第一個參數、印出全部參數、計算參數個數。請先檢查長度，避免沒有參數時出錯。",
        hint: "可以先判斷 `args.length > 0`，再讀取 `args[0]`。印出全部參數可用 for 迴圈。",
        solution: `public class Main {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("第一個參數：" + args[0]);
        } else {
            System.out.println("沒有參數");
        }

        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }

        System.out.println("參數個數：" + args.length);
    }
}`,
        explanation: "args 是 String 陣列，所以可以用 length 和索引讀取。讀取前先檢查長度，是避免索引超出範圍的好習慣。"
      }),
      createActivity({
        id: "ch07-homework-array-projects",
        sectionId: "7.6",
        type: "homework",
        title: "作業：完成四個陣列小專案",
        question: "完成學生成績管理系統、最高分搜尋器、班級成績表、命令列問候程式。",
        hint: "一維成績用 int[]，班級成績表用 int[][]，命令列問候用 String[] args。",
        solution: `// 1. 學生成績管理與 2. 最高分搜尋
int[] scores = {80, 75, 90, 60, 88};
int sum = 0;
int max = scores[0];

for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
    sum += scores[i];

    if (scores[i] > max) {
        max = scores[i];
    }
}

System.out.println("總分：" + sum);
System.out.println("平均：" + ((double) sum / scores.length));
System.out.println("最高分：" + max);

// 3. 班級成績表
int[][] classScores = {
    {80, 90, 75},
    {60, 88, 92}
};

for (int i = 0; i < classScores.length; i++) {
    for (int j = 0; j < classScores[i].length; j++) {
        System.out.print(classScores[i][j] + " ");
    }
    System.out.println();
}

// 4. 命令列問候寫在 main 的 args 中使用`,
        explanation: "這份作業整合本章核心：用一維陣列管理同類資料，用二維陣列表示表格，用 args 接收命令列資料。"
      })
    ],
    quiz: [
      {
        question: "陣列最適合用來儲存什麼？",
        options: ["大量相同型態資料", "只能儲存一個整數", "只能儲存 class 名稱", "只能儲存 if 條件"],
        answer: 0,
        explanation: "陣列可以把多個相同型態的資料放在同一個變數名稱底下管理。"
      },
      {
        question: "Java 陣列索引從幾開始？",
        options: ["0", "1", "-1", "陣列長度"],
        answer: 0,
        explanation: "Java 陣列索引從 0 開始。"
      },
      {
        question: "長度為 5 的陣列，最後一個合法索引是什麼？",
        options: ["4", "5", "6", "length"],
        answer: 0,
        explanation: "最後索引是 length - 1，所以長度 5 的最後索引是 4。"
      },
      {
        question: "`scores[5]` 對長度 5 的陣列會造成什麼？",
        options: ["ArrayIndexOutOfBoundsException", "自動讀取最後一格", "回傳 null", "把長度變成 6"],
        answer: 0,
        explanation: "長度 5 的合法索引是 0 到 4，索引 5 超出範圍。"
      },
      {
        question: "`int[] nums = new int[5];` 中 int 的預設值是什麼？",
        options: ["0", "0.0", "false", "null"],
        answer: 0,
        explanation: "int 陣列建立後，每個元素預設是 0。"
      },
      {
        question: "String 陣列元素的預設值是什麼？",
        options: ["null", "0", "false", "空白字元"],
        answer: 0,
        explanation: "String 是參照型別，陣列中的 String 預設值是 null。"
      },
      {
        question: "計算陣列平均時，為什麼常把 sum 轉成 double？",
        options: ["避免整數除法捨去小數", "讓陣列變長", "避免使用迴圈", "把索引改成 1 開始"],
        answer: 0,
        explanation: "如果 sum 和 length 都是 int，除法會是整數除法，可能失去小數部分。"
      },
      {
        question: "二維陣列常可以想成什麼？",
        options: ["表格", "單一字元", "一個 boolean", "一個 import"],
        answer: 0,
        explanation: "二維陣列有列和欄，很適合用表格理解。"
      },
      {
        question: "`table[1][2]` 通常代表什麼？",
        options: ["第 1 列第 2 欄的元素", "陣列長度", "整個 table", "main 方法"],
        answer: 0,
        explanation: "二維陣列使用兩個索引，第一個常代表列，第二個常代表欄。"
      },
      {
        question: "輸出二維陣列全部資料通常會使用什麼？",
        options: ["巢狀迴圈", "只用一個 println", "只用 break", "只用 char"],
        answer: 0,
        explanation: "外層跑列，內層跑欄，因此常使用巢狀迴圈。"
      },
      {
        question: "下列哪個是基本型別？",
        options: ["int", "String", "Array", "Scanner"],
        answer: 0,
        explanation: "int 是基本型別；String、Array、Scanner 可先視為參照型別。"
      },
      {
        question: "`int[] arr2 = arr1;` 後修改 arr2[0]，arr1 可能會怎樣？",
        options: ["arr1[0] 也看到變化", "arr1 一定不變", "arr1 會消失", "程式一定不能編譯"],
        answer: 0,
        explanation: "arr1 和 arr2 參照同一個陣列，所以透過其中一個變數修改，另一個也會看到結果。"
      },
      {
        question: "`String[] args` 是什麼？",
        options: ["命令列參數陣列", "固定的整數陣列", "二維陣列", "Scanner 物件"],
        answer: 0,
        explanation: "main 方法中的 args 是 String 陣列，用來接收命令列參數。"
      },
      {
        question: "執行 `java Main Jimmy 25` 時，`args.length` 是多少？",
        options: ["2", "0", "1", "25"],
        answer: 0,
        explanation: "Jimmy 和 25 是兩個命令列參數，所以長度是 2。"
      },
      {
        question: "成績管理系統中，找最高分常用哪個策略？",
        options: ["先把第一個元素當最大值，再逐一比較", "直接讀 scores[999]", "把所有分數變成 String", "只印出 length"],
        answer: 0,
        explanation: "常見做法是用第一個元素初始化 max，再用迴圈比較每個元素。"
      }
    ]
  }
];

applyRequestedContentUpdates();

function applyRequestedContentUpdates() {
  updateSection(5, "5.4", {
    title: "綜合演練",
    body: [
      "本節改用統一的解題流程：問題說明 -> 解題思路 -> 流程圖 -> Hint -> Solution -> Explanation -> 延伸挑戰。",
      "條件分支最重要的能力，是把現實規則翻成清楚的 if、else if、else 或 switch。請先讀懂條件，再開始寫程式。"
    ],
    code: {
      title: "題目 1：判斷是否可為三角形的三邊長",
      value: `問題說明：
輸入三個邊長 a、b、c，判斷是否能組成三角形。

解題思路：
三角形任兩邊相加都必須大於第三邊。

流程圖：
輸入 a b c
  ↓
a + b > c 且 a + c > b 且 b + c > a？
  ↓
是：可以成為三角形
否：不可以成為三角形

Hint：
三個條件要同時成立，適合使用 &&。

Solution：
int a = 3;
int b = 4;
int c = 5;

if (a + b > c && a + c > b && b + c > a) {
    System.out.println("可以成為三角形");
} else {
    System.out.println("不可以成為三角形");
}

執行結果：
可以成為三角形

Explanation：
只檢查一組邊長不夠，因為任一邊太長都會讓三角形無法閉合。

延伸挑戰：
再判斷是否為等邊三角形或等腰三角形。`
    },
    codes: [
      {
        title: "題目 2：電影票票價計算",
        value: `問題說明：
依照年齡計算電影票價格：未滿 12 歲 180 元，65 歲以上 200 元，其餘 300 元。

解題思路：
這是年齡區間判斷，適合使用 if-else if。

流程圖：
輸入 age
  ↓
age < 12？
  ↓ 否
age >= 65？
  ↓
輸出票價

Hint：
先處理特殊票價，再處理一般票價。

Solution：
int age = 10;
int price;

if (age < 12) {
    price = 180;
} else if (age >= 65) {
    price = 200;
} else {
    price = 300;
}

System.out.println("票價：" + price);

執行結果：
票價：180

Explanation：
if-else if 會從上往下檢查，找到第一個成立條件後就不再往下判斷。

延伸挑戰：
加入是否為會員，會員再折 30 元。`
      },
      {
        title: "題目 3：利用手機序號判斷製造年份",
        value: `問題說明：
假設手機序號開頭代表製造年份：A=2021、B=2022、C=2023、D=2024。

解題思路：
固定字元對應固定年份，適合用 switch。

流程圖：
取得序號第一個字元
  ↓
switch 判斷 A/B/C/D
  ↓
輸出製造年份

Hint：
可以使用 char code = serial.charAt(0);

Solution：
String serial = "C98765";
char code = serial.charAt(0);

switch (code) {
    case 'A':
        System.out.println("製造年份：2021");
        break;
    case 'B':
        System.out.println("製造年份：2022");
        break;
    case 'C':
        System.out.println("製造年份：2023");
        break;
    case 'D':
        System.out.println("製造年份：2024");
        break;
    default:
        System.out.println("未知年份");
}

執行結果：
製造年份：2023

Explanation：
switch 適合處理固定代碼表。default 可以處理未知或錯誤的序號。

延伸挑戰：
加入第二個字元代表製造月份。`
      }
    ]
  });

  replaceSectionActivities(5, "5.4", [
    createActivity({
      id: "ch05-project-triangle",
      sectionId: "5.4",
      type: "exercise",
      title: "5.4 練習：三角形三邊長判斷",
      question: "輸入三個整數邊長，判斷是否可以組成三角形。",
      hint: "任兩邊相加都要大於第三邊，三個條件要用 && 串起來。",
      solution: `int a = 3;
int b = 4;
int c = 5;

if (a + b > c && a + c > b && b + c > a) {
    System.out.println("可以成為三角形");
} else {
    System.out.println("不可以成為三角形");
}`,
      explanation: "這題訓練多條件判斷。只要其中一個條件不成立，就不能形成三角形。"
    }),
    createActivity({
      id: "ch05-project-movie-ticket",
      sectionId: "5.4",
      type: "exercise",
      title: "5.4 練習：電影票票價計算",
      question: "根據年齡輸出電影票票價，並嘗試加入會員折扣。",
      hint: "先用 if-else if 算出基本票價，再用另一個 if 處理折扣。",
      solution: `int age = 30;
boolean member = true;
int price;

if (age < 12) {
    price = 180;
} else if (age >= 65) {
    price = 200;
} else {
    price = 300;
}

if (member) {
    price -= 30;
}

System.out.println(price);`,
      explanation: "先解決主要分類，再處理額外條件，程式會比把所有條件塞在一起更清楚。"
    }),
    createActivity({
      id: "ch05-project-phone-serial",
      sectionId: "5.4",
      type: "exercise",
      title: "5.4 練習：手機序號年份判斷",
      question: "使用序號第一個字元判斷製造年份。",
      hint: "固定代碼很適合 switch，記得每個 case 加 break。",
      solution: `String serial = "B12345";
char code = serial.charAt(0);

switch (code) {
    case 'A':
        System.out.println(2021);
        break;
    case 'B':
        System.out.println(2022);
        break;
    case 'C':
        System.out.println(2023);
        break;
    default:
        System.out.println("未知");
}`,
      explanation: "這題把字元當作分類代碼。switch 讓每個代碼對應的結果更容易閱讀。"
    })
  ]);

  updateSection(6, "6.6", {
    title: "綜合演練",
    body: [
      "本節統一使用：問題說明 -> 解題思路 -> 流程圖 -> Hint -> Solution -> Explanation -> 延伸挑戰。",
      "迴圈常和 if 搭配使用：迴圈負責重複檢查，if 負責決定某一次是否符合條件。"
    ],
    code: {
      title: "題目 1：迴圈與 if 混合應用，判斷質數",
      value: `問題說明：
判斷一個整數 n 是否為質數。

解題思路：
質數只能被 1 和自己整除。檢查 2 到 n - 1 是否有任何數可以整除 n。

流程圖：
設定 isPrime = true
  ↓
i 從 2 跑到 n - 1
  ↓
n % i == 0？
  ↓ 是：不是質數，停止
  ↓ 否：繼續檢查

Hint：
找到第一個可以整除的數，就可以 break。

Solution：
int n = 17;
boolean isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for (int i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
}

System.out.println(isPrime ? "質數" : "不是質數");

執行結果：
質數

Explanation：
for 負責逐一嘗試除數，if 負責檢查是否整除。break 可以避免多餘檢查。

延伸挑戰：
只檢查到平方根以內，提升效率。`
    },
    codes: [
      {
        title: "題目 2：Scanner 類別的輸入檢查",
        value: `問題說明：
讓使用者輸入 1 到 100 的分數，如果不合法就要求重新輸入。

解題思路：
不知道使用者會輸錯幾次，適合用 while。

流程圖：
讀取 score
  ↓
score < 0 或 score > 100？
  ↓ 是：重新輸入
  ↓ 否：輸出合法分數

Hint：
條件可以寫成 score < 0 || score > 100。

Solution：
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
int score = sc.nextInt();

while (score < 0 || score > 100) {
    System.out.println("請輸入 0 到 100");
    score = sc.nextInt();
}

System.out.println("分數：" + score);

執行結果：
分數：80

Explanation：
while 適合做輸入檢查，因為錯誤次數不固定。

延伸挑戰：
限制最多只能輸入三次。`
      },
      {
        title: "題目 3：各種迴圈混合應用，計算階乘",
        value: `問題說明：
計算 n!，例如 5! = 5 x 4 x 3 x 2 x 1。

解題思路：
使用 for 從 1 乘到 n，或使用 while 倒數乘回 1。

流程圖：
result = 1
  ↓
i 從 1 到 n
  ↓
result = result * i
  ↓
輸出 result

Hint：
階乘是連乘，不是連加。

Solution：
int n = 5;
int result = 1;

for (int i = 1; i <= n; i++) {
    result *= i;
}

System.out.println(result);

執行結果：
120

Explanation：
每一圈把目前的 i 乘進 result，最後就會得到 1 到 n 的連乘結果。

延伸挑戰：
改用 while 或 do-while 完成同一題。`
      }
    ]
  });

  replaceSectionActivities(6, "6.6", [
    createActivity({
      id: "ch06-project-prime",
      sectionId: "6.6",
      type: "exercise",
      title: "6.6 練習：判斷質數",
      question: "使用 for 與 if 判斷一個數是否為質數。",
      hint: "從 2 檢查到 n - 1，只要找到可以整除的數，就不是質數。",
      solution: `int n = 17;
boolean isPrime = true;

for (int i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

System.out.println(isPrime);`,
      explanation: "迴圈負責嘗試不同除數，if 負責判斷是否整除。"
    }),
    createActivity({
      id: "ch06-project-input-check",
      sectionId: "6.6",
      type: "exercise",
      title: "6.6 練習：Scanner 輸入檢查",
      question: "讓使用者輸入合法分數，若小於 0 或大於 100 就重新輸入。",
      hint: "while 條件可以是不合法的狀態。",
      solution: `while (score < 0 || score > 100) {
    System.out.println("請重新輸入");
    score = sc.nextInt();
}`,
      explanation: "用 while 包住錯誤狀態，可以讓程式持續要求修正直到合法。"
    }),
    createActivity({
      id: "ch06-project-factorial",
      sectionId: "6.6",
      type: "homework",
      title: "6.6 作業：計算階乘",
      question: "使用 for、while 各寫一次階乘計算。",
      hint: "階乘從 1 乘到 n，初始值應該是 1。",
      solution: `int n = 5;
int result = 1;

for (int i = 1; i <= n; i++) {
    result *= i;
}

System.out.println(result);`,
      explanation: "階乘是連乘。若 result 初始為 0，最後永遠會是 0。"
    })
  ]);

  updateSection(7, "7.6", {
    title: "綜合演練",
    body: [
      "本節統一使用：問題說明 -> 解題思路 -> 流程圖 -> Hint -> Solution -> Explanation -> 延伸挑戰。",
      "陣列的核心價值，是把一批資料集中管理，再用迴圈、搜尋、排序或查表方式處理。"
    ],
    code: {
      title: "題目 1：將陣列運用在查表上",
      value: `問題說明：
使用月份編號 1 到 12 查詢季節。

解題思路：
把每個月份對應的季節存在陣列，使用 month - 1 當索引。

流程圖：
輸入 month
  ↓
index = month - 1
  ↓
seasons[index]

Hint：
月份從 1 開始，但陣列索引從 0 開始。

Solution：
String[] seasons = {
    "冬季", "冬季", "春季", "春季", "春季", "夏季",
    "夏季", "夏季", "秋季", "秋季", "秋季", "冬季"
};

int month = 4;
System.out.println(seasons[month - 1]);

執行結果：
春季

Explanation：
查表可以減少大量 if 或 switch。只要對應關係固定，就可以考慮用陣列保存答案。

延伸挑戰：
加入月份合法性檢查。`
    },
    codes: [
      {
        title: "題目 2：找出最大值與最小值",
        value: `問題說明：
從分數陣列中找出最高分與最低分。

解題思路：
先把第一個元素當作 max 和 min，再逐一比較。

流程圖：
max = scores[0], min = scores[0]
  ↓
逐一讀取元素
  ↓
比 max 大就更新 max
比 min 小就更新 min

Hint：
不要把 max 初始為 0，資料可能都是負數。

Solution：
int[] scores = {80, 75, 90, 60, 88};
int max = scores[0];
int min = scores[0];

for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
    if (scores[i] < min) {
        min = scores[i];
    }
}

System.out.println("最高：" + max);
System.out.println("最低：" + min);

執行結果：
最高：90
最低：60

Explanation：
用第一個元素當初始值，可以避免不合理的預設值影響結果。

延伸挑戰：
同時記錄最高分與最低分的位置。`
      },
      {
        title: "題目 3：搜尋二維陣列",
        value: `問題說明：
在二維陣列中搜尋某個數字是否存在。

解題思路：
外層跑列，內層跑欄，找到目標後記錄位置。

流程圖：
逐列
  ↓
逐欄
  ↓
data[i][j] == target？

Hint：
找到後可以用 boolean found 記錄狀態。

Solution：
int[][] data = {
    {10, 20, 30},
    {40, 50, 60}
};
int target = 50;
boolean found = false;

for (int i = 0; i < data.length; i++) {
    for (int j = 0; j < data[i].length; j++) {
        if (data[i][j] == target) {
            System.out.println("找到：" + i + "," + j);
            found = true;
        }
    }
}

執行結果：
找到：1,1

Explanation：
二維陣列需要兩層索引。i 代表第幾列，j 代表該列第幾欄。

延伸挑戰：
找到後立即結束搜尋。`
      },
      {
        title: "題目 4：排序（Sorting）",
        value: `問題說明：
將整數陣列由小到大排序。

解題思路：
初學可先用簡單交換排序：如果前面的數比後面大，就交換。

流程圖：
外層控制第幾輪
  ↓
內層比較相鄰兩數
  ↓
需要時交換

Hint：
交換兩個變數需要暫存變數 temp。

Solution：
int[] nums = {5, 2, 9, 1};

for (int i = 0; i < nums.length - 1; i++) {
    for (int j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
            int temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}

for (int n : nums) {
    System.out.println(n);
}

執行結果：
1
2
5
9

Explanation：
排序的核心是比較與交換。這裡不追求最快，而是先看懂資料如何逐步排好。

延伸挑戰：
改成由大到小排序。`
      },
      {
        title: "題目 5：利用陣列儲存計算結果",
        value: `問題說明：
把 1 到 5 的平方結果存入陣列。

解題思路：
建立長度 5 的陣列，用迴圈計算每個數的平方並存入。

流程圖：
建立 results
  ↓
i 從 0 到 4
  ↓
number = i + 1
  ↓
results[i] = number * number

Hint：
索引從 0 開始，但要計算的數字從 1 開始。

Solution：
int[] results = new int[5];

for (int i = 0; i < results.length; i++) {
    int number = i + 1;
    results[i] = number * number;
}

for (int value : results) {
    System.out.println(value);
}

執行結果：
1
4
9
16
25

Explanation：
陣列不只可以保存輸入資料，也可以保存計算後的結果，方便後續查詢或輸出。

延伸挑戰：
改成儲存 1 到 10 的階乘結果。`
      }
    ]
  });

  replaceSectionActivities(7, "7.6", [
    createActivity({
      id: "ch07-project-lookup",
      sectionId: "7.6",
      type: "exercise",
      title: "7.6 練習：陣列查表",
      question: "使用陣列建立月份到季節的查表程式。",
      hint: "month 需要轉成 month - 1 才能當索引。",
      solution: `String[] seasons = {"冬", "冬", "春", "春", "春", "夏", "夏", "夏", "秋", "秋", "秋", "冬"};
int month = 9;
System.out.println(seasons[month - 1]);`,
      explanation: "固定對應關係很適合用陣列查表，可以讓程式更簡潔。"
    }),
    createActivity({
      id: "ch07-project-max-min",
      sectionId: "7.6",
      type: "exercise",
      title: "7.6 練習：最大值與最小值",
      question: "找出陣列中的最大值與最小值。",
      hint: "先用第一個元素初始化 max 和 min。",
      solution: `int max = nums[0];
int min = nums[0];`,
      explanation: "用陣列中的真實資料當初始值，會比隨便指定 0 更安全。"
    }),
    createActivity({
      id: "ch07-project-search-2d",
      sectionId: "7.6",
      type: "exercise",
      title: "7.6 練習：搜尋二維陣列",
      question: "在二維陣列中搜尋 target，找到後印出列與欄。",
      hint: "使用巢狀迴圈，外層列、內層欄。",
      solution: `if (data[i][j] == target) {
    System.out.println(i + "," + j);
}`,
      explanation: "二維陣列搜尋的重點是正確使用兩個索引。"
    }),
    createActivity({
      id: "ch07-project-sorting",
      sectionId: "7.6",
      type: "homework",
      title: "7.6 作業：排序陣列",
      question: "使用比較與交換，把整數陣列由小到大排序。",
      hint: "如果 nums[j] > nums[j + 1]，就交換兩個元素。",
      solution: `int temp = nums[j];
nums[j] = nums[j + 1];
nums[j + 1] = temp;`,
      explanation: "排序的基本動作是比較與交換。先學會概念，再追求效率。"
    }),
    createActivity({
      id: "ch07-project-store-results",
      sectionId: "7.6",
      type: "exercise",
      title: "7.6 練習：儲存計算結果",
      question: "用陣列儲存 1 到 5 的平方結果。",
      hint: "計算的數字是 i + 1，儲存位置是 i。",
      solution: `results[i] = (i + 1) * (i + 1);`,
      explanation: "陣列可以保存計算後的資料，讓結果能被重複使用。"
    })
  ]);

  chapters.push(createChapter08());
  enhanceChapter08MethodPath();
}

function updateSection(chapterId, sectionId, data) {
  const chapter = chapters.find((item) => item.id === chapterId);
  const section = chapter?.sections.find((item) => item.sectionId === sectionId);
  if (section) Object.assign(section, data);
}

function replaceSectionActivities(chapterId, sectionId, activities) {
  const chapter = chapters.find((item) => item.id === chapterId);
  if (!chapter) return;
  chapter.activities = [
    ...chapter.activities.filter((activity) => activity.sectionId !== sectionId),
    ...activities
  ];
}

function enhanceChapter08MethodPath() {
  updateSection(8, "8.3", {
    title: "方法的進階應用",
    body: [
      "本節是 8.5 綜合演練的前置準備。學完這一節，你會把方法、方法呼叫、遞迴、匿名陣列串成一條完整路徑。",
      "先從一般方法開始：方法可以沒有參數、沒有回傳值；也可以接收參數，或把計算結果回傳給呼叫它的地方。",
      "接著你會看到方法可以呼叫其他方法，甚至可以呼叫自己。方法呼叫自己就稱為遞迴（Recursion）。",
      "最後補上匿名陣列（Anonymous Array），讓你能在呼叫方法時直接傳入一組臨時資料。"
    ],
    code: {
      title: "學習路徑圖：Method 到 Recursion",
      value: `方法 Method
  ↓
方法呼叫 Method Call
  ↓
方法呼叫其他方法
  ↓
方法呼叫自己 Recursion
  ↓
遞迴演算法：factorial、Fibonacci、Quick Sort、Hanoi`
    },
    codes: [
      {
        title: "基礎 1：無參數無回傳值",
        value: `static void greet() {
    System.out.println("Hello Java");
}

greet();

// 執行結果：
// Hello Java`
      },
      {
        title: "基礎 2：有參數",
        value: `static void greet(String name) {
    System.out.println("Hello " + name);
}

greet("Jimmy");

// 執行結果：
// Hello Jimmy`
      },
      {
        title: "基礎 3：有回傳值",
        value: `static int add(int a, int b) {
    return a + b;
}

System.out.println(add(2, 3));

// 執行結果：
// 5`
      },
      {
        title: "基礎 4：有參數有回傳值 calcBMI()",
        value: `static double calcBMI(double height, double weight) {
    return weight / (height * height);
}

System.out.println(calcBMI(1.7, 65));

// 執行結果：
// 22.49134948096886`
      },
      {
        title: "基礎 5：showInfo() 使用物件屬性",
        value: `class Student {
    String name;
    int score;

    void showInfo() {
        System.out.println(name + "：" + score);
    }
}

Student s = new Student();
s.name = "Amy";
s.score = 95;
s.showInfo();

// 執行結果：
// Amy：95`
      },
      {
        title: "基礎 6：getArea() 回傳計算結果",
        value: `static int getArea(int width, int height) {
    return width * height;
}

int area = getArea(4, 6);
System.out.println(area);

// 執行結果：
// 24`
      },
      {
        title: "8.3.1 方法呼叫方法：基本範例",
        value: `static void hello() {
    System.out.println("Hello");
}

static void greet() {
    hello();
}

greet();

// 執行結果：
// Hello`
      },
      {
        title: "8.3.1 圖解：方法呼叫流程",
        value: `main()
  ↓ 呼叫
greet()
  ↓ 呼叫
hello()
  ↓ 輸出
Hello
  ↓ 返回
greet()
  ↓ 返回
main()`
      },
      {
        title: "8.3.1 方法分工：先計算再輸出",
        value: `static int add(int a, int b) {
    return a + b;
}

static void printSum(int a, int b) {
    int result = add(a, b);
    System.out.println("總和：" + result);
}

printSum(3, 5);

// 執行結果：
// 總和：8`
      },
      {
        title: "8.3.2 遞迴概念：像俄羅斯娃娃",
        value: `遞迴可以想成俄羅斯娃娃：

打開第 5 層娃娃
  ↓
看到第 4 層娃娃
  ↓
看到第 3 層娃娃
  ↓
...
  ↓
看到最小娃娃後停止

程式中的遞迴也是：
方法呼叫自己，但每次問題要變小，直到停止條件。`
      },
      {
        title: "8.3.2 遞迴兩大重點",
        value: `Base Case（停止條件）
  遇到這個條件時，不再繼續呼叫自己。

Recursive Call（遞迴呼叫）
  方法呼叫自己，並把問題縮小。

圖解：
method(3)
  ↓ recursive call
method(2)
  ↓ recursive call
method(1)
  ↓ base case 停止`
      },
      {
        title: "8.3.2 範例 1：倒數計時",
        value: `static void countDown(int n) {
    if (n == 0) {
        return;
    }

    System.out.println(n);
    countDown(n - 1);
}

countDown(3);

// 執行結果：
// 3
// 2
// 1`
      },
      {
        title: "8.3.2 倒數呼叫流程圖",
        value: `countDown(3)
  ↓ 印出 3
countDown(2)
  ↓ 印出 2
countDown(1)
  ↓ 印出 1
countDown(0)
  ↓ n == 0，return 停止`
      },
      {
        title: "8.3.2 範例 2：遞迴加總",
        value: `static int sum(int n) {
    if (n == 1) {
        return 1;
    }

    return n + sum(n - 1);
}

System.out.println(sum(5));

// 執行結果：
// 15`
      },
      {
        title: "8.3.2 範例 3：遞迴階乘",
        value: `static int factorial(int n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

System.out.println(factorial(5));

// 執行結果：
// 120`
      },
      {
        title: "factorial(5) 完整呼叫流程圖",
        value: `factorial(5)
  ↓
5 * factorial(4)
  ↓
5 * 4 * factorial(3)
  ↓
5 * 4 * 3 * factorial(2)
  ↓
5 * 4 * 3 * 2 * factorial(1)
  ↓
5 * 4 * 3 * 2 * 1
  ↓
120`
      },
      {
        title: "常見錯誤：沒有停止條件",
        value: `static void test() {
    test();
}

test();

// 問題：
// test() 一直呼叫 test()
// 呼叫層數越堆越多，最後可能 Stack Overflow。`
      },
      {
        title: "Stack Overflow 概念圖",
        value: `test()
  ↓
test()
  ↓
test()
  ↓
test()
  ↓
一直堆疊，沒有停止
  ↓
Stack Overflow

簡單理解：
方法呼叫太多層，程式沒有空間繼續記住每一層呼叫。`
      },
      {
        title: "8.3.3 一般陣列",
        value: `int[] nums = {1, 2, 3};

System.out.println(nums[0]);

// 執行結果：
// 1`
      },
      {
        title: "8.3.3 匿名陣列：建立後立即使用",
        value: `System.out.println(
    new int[]{10, 20, 30}[0]
);

// 執行結果：
// 10`
      },
      {
        title: "8.3.3 匿名陣列作為方法參數",
        value: `static void printArray(int[] nums) {
    for (int n : nums) {
        System.out.println(n);
    }
}

printArray(
    new int[]{1, 2, 3, 4, 5}
);

// 執行結果：
// 1
// 2
// 3
// 4
// 5`
      },
      {
        title: "8.3.3 一般陣列 vs 匿名陣列",
        value: `一般陣列：
int[] nums = {1, 2, 3};
printArray(nums);

適合：
資料之後還會重複使用。

匿名陣列：
printArray(new int[]{1, 2, 3});

適合：
資料只在這次方法呼叫中臨時使用。`
      }
    ]
  });

  replaceSectionActivities(8, "8.3", [
    createActivity({
      id: "ch08-exercise-recursive-countdown",
      sectionId: "8.3",
      type: "exercise",
      title: "8.3 練習 1：建立遞迴倒數程式",
      question: "建立 `countDown(int n)`，從 n 印到 1，當 n == 0 時停止。",
      hint: "先寫停止條件 `if (n == 0) return;`，再印出 n，最後呼叫 `countDown(n - 1)`。",
      solution: `static void countDown(int n) {
    if (n == 0) {
        return;
    }

    System.out.println(n);
    countDown(n - 1);
}`,
      explanation: "每一次呼叫都讓 n 減 1，問題會越來越小。當 n 變成 0，就觸發 Base Case 停止。"
    }),
    createActivity({
      id: "ch08-exercise-recursive-factorial",
      sectionId: "8.3",
      type: "exercise",
      title: "8.3 練習 2：建立遞迴階乘程式",
      question: "建立 `factorial(int n)`，使用遞迴回傳 n!。",
      hint: "停止條件可以是 `n == 1`，遞迴呼叫是 `n * factorial(n - 1)`。",
      solution: `static int factorial(int n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`,
      explanation: "階乘的遞迴結構是 n! = n * (n - 1)!。這題練習回傳值與遞迴呼叫。"
    }),
    createActivity({
      id: "ch08-exercise-anonymous-array",
      sectionId: "8.3",
      type: "exercise",
      title: "8.3 練習 3：使用匿名陣列呼叫方法",
      question: "建立接收 `int[]` 的 `printArray` 方法，並使用 `new int[]{...}` 匿名陣列呼叫。",
      hint: "方法參數型態寫 `int[] nums`，呼叫時直接傳入 `new int[]{1, 2, 3}`。",
      solution: `static void printArray(int[] nums) {
    for (int n : nums) {
        System.out.println(n);
    }
}

printArray(new int[]{1, 2, 3});`,
      explanation: "匿名陣列適合只使用一次的資料。它沒有變數名稱，但仍然是一個真正的陣列物件。"
    })
  ]);

  updateSection(8, "8.5", {
    title: "綜合演練",
    body: [
      "本節延續 8.3 的學習路徑：方法 -> 方法呼叫 -> 遞迴 -> 遞迴演算法。",
      "每題都會先列出【前置知識】，讓你知道會用到哪些概念。不要急著複製程式碼，先看問題如何被拆小。"
    ],
    code: {
      title: "題目 1：用遞迴求階乘",
      value: `【前置知識】
- 方法呼叫
- 參數 n
- 回傳值 int
- 遞迴 Base Case
- Recursive Call

問題說明：
計算 n!，例如 5! = 5 x 4 x 3 x 2 x 1。

解題思路：
factorial(n) 可以拆成 n * factorial(n - 1)。
當 n == 1 時，不需要再拆，直接回傳 1。

流程圖：
factorial(5)
  ↓
5 * factorial(4)
  ↓
5 * 4 * factorial(3)
  ↓
5 * 4 * 3 * factorial(2)
  ↓
5 * 4 * 3 * 2 * factorial(1)
  ↓
5 * 4 * 3 * 2 * 1
  ↓
120

Hint：
先寫停止條件，再寫遞迴呼叫。

Solution：
static int factorial(int n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

System.out.println(factorial(5));

執行結果：
120

Explanation：
每次呼叫都把 n 變小，直到 n == 1 停止。回傳時再一層一層乘回來。

延伸挑戰：
加入 n == 0 時回傳 1 的處理。`
    },
    codes: [
      {
        title: "題目 2：Fibonacci 數列",
        value: `【前置知識】
- 方法呼叫方法
- 遞迴呼叫兩次
- 參數 n
- 回傳值 int
- 迴圈版本比較

問題說明：
Fibonacci 規則是 F(0)=0、F(1)=1、F(n)=F(n-1)+F(n-2)。

解題思路：
遞迴版本接近定義，但會重複計算。
迴圈版本用變數保存前兩項，通常效率較好。

遞迴流程圖：
fib(5)
  ↓
fib(4) + fib(3)
  ↓
fib(3)+fib(2) + fib(2)+fib(1)

Hint：
遞迴停止條件是 n <= 1。

Solution：
static int fibRecursive(int n) {
    if (n <= 1) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

static int fibLoop(int n) {
    int a = 0;
    int b = 1;

    for (int i = 2; i <= n; i++) {
        int next = a + b;
        a = b;
        b = next;
    }

    return n == 0 ? a : b;
}

System.out.println(fibRecursive(6));
System.out.println(fibLoop(6));

執行結果：
8
8

比較：
- 程式碼複雜度：遞迴版較接近定義，較容易看出規則；迴圈版需要理解 a、b、next 的更新。
- 執行效率：遞迴版會重複計算同一批值；迴圈版通常比較快，也比較穩定。

Explanation：
Fibonacci 適合展示遞迴的直覺，也適合提醒學生：遞迴好懂，不代表一定最有效率。

延伸挑戰：
印出前 10 個 Fibonacci 數字。`
      },
      {
        title: "題目 3：快速排序法（Quick Sort）",
        value: `【前置知識】
- 方法呼叫方法
- 遞迴處理左右區間
- 參數：陣列、left、right
- 匿名陣列可用來快速測試排序

問題說明：
使用 Quick Sort 將陣列由小到大排序。

Pivot 概念圖解：
資料：[5, 2, 9, 1, 6]
選 pivot = 9
  ↓
左邊放比較小的資料
右邊放比較大的資料
  ↓
再分別排序左右兩邊

視覺化流程：
[5, 2, 9, 1, 6]
       ↑ pivot
  ↓ 分割
[5, 2, 1, 6] [9]
  ↓ 遞迴排序左邊
[1, 2, 5, 6] [9]

Hint：
先理解「分割」，再理解「遞迴排序左右」。

Solution：
static void quickSort(int[] arr, int left, int right) {
    if (left >= right) {
        return;
    }

    int pivot = arr[(left + right) / 2];
    int i = left;
    int j = right;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    quickSort(arr, left, j);
    quickSort(arr, i, right);
}

int[] data = new int[]{5, 2, 9, 1, 6};
quickSort(data, 0, data.length - 1);

for (int n : data) {
    System.out.println(n);
}

執行結果：
1
2
5
6
9

Explanation：
Quick Sort 的核心是 Pivot 和遞迴。Pivot 幫我們把問題切成左右兩邊，遞迴則負責繼續排序更小的區間。

延伸挑戰：
在每次交換時印出陣列，觀察排序過程。`
      },
      {
        title: "題目 4：河內之塔（Hanoi Tower）",
        value: `【前置知識】
- 方法呼叫自己
- 參數：盤子數量、來源柱、輔助柱、目標柱
- Base Case：只剩一個盤子
- Recursive Call：移動 n - 1 個盤子

問題說明：
把 n 個盤子從 A 柱移到 C 柱，一次只能移一個盤子，大盤不能放在小盤上。

步驟拆解圖解：
目標：把 3 個盤子 A -> C

Step 1：
先把上面 2 個盤子 A -> B

Step 2：
把最大盤 A -> C

Step 3：
再把 2 個盤子 B -> C

遞迴流程：
move(3, A, B, C)
  ↓
move(2, A, C, B)
  ↓
A -> C
  ↓
move(2, B, A, C)

Hint：
把 n 個盤子想成「上面 n - 1 個」和「最大的一個」。

Solution：
static void hanoi(int n, char from, char helper, char to) {
    if (n == 1) {
        System.out.println(from + " -> " + to);
        return;
    }

    hanoi(n - 1, from, to, helper);
    System.out.println(from + " -> " + to);
    hanoi(n - 1, helper, from, to);
}

hanoi(3, 'A', 'B', 'C');

執行結果：
A -> C
A -> B
C -> B
A -> C
B -> A
B -> C
A -> C

Explanation：
河內之塔的關鍵是拆解。你不用一次想完全部步驟，只要相信方法能移動 n - 1 個盤子，問題就會變小。

延伸挑戰：
計算 n 個盤子總共需要移動幾次。`
      }
    ]
  });
}

function createChapter08() {
  return {
    id: 8,
    code: "CH08",
    title: "物件導向程式設計（Object-Oriented Programming）",
    minutes: 135,
    summary: "認識類別與物件，建立自己的類別與物件，使用方法、參數、回傳值與方法多重定義。",
    intro: "本章是 OOP 的入口。先把類別、物件、屬性與方法學穩，後續學封裝、繼承、多型時才會有清楚的基礎。",
    sections: [
      {
        sectionId: "8.1",
        title: "認識類別與物件",
        body: [
          "類別是藍圖，物件是實體。汽車設計圖是 Class，依照設計圖做出來的實際汽車是 Object。",
          "學生類別可以建立 Jimmy、Amy、John 等物件。每個學生物件可以有自己的姓名、年齡與成績。",
          "屬性（Attribute）描述物件擁有的資料；方法（Method）描述物件可以做的事情。"
        ],
        code: {
          title: "圖解：Class 與 Object",
          value: `Class: Car 設計圖
  ↓ new
Object: 小明的汽車
Object: 小華的汽車

Class: Student
  ↓ new
Object: Jimmy
Object: Amy
Object: John`
        },
        codes: [
          { title: "範例 1：汽車", value: `類別：汽車
屬性：品牌、顏色、速度
方法：drive()、brake()
物件：小明的汽車、小華的汽車` },
          { title: "範例 2：學生", value: `類別：學生
屬性：姓名、年齡、成績
方法：showInfo()、study()
物件：Jimmy、Amy、John` },
          { title: "範例 3：書本", value: `類別：Book
屬性：title、price
方法：showInfo()
物件：Java 入門、演算法筆記` },
          { title: "範例 4：帳戶", value: `類別：BankAccount
屬性：accountNumber、balance
方法：deposit()、withdraw()
物件：Jimmy 的帳戶、Amy 的帳戶` },
          { title: "範例 5：寵物", value: `類別：Pet
屬性：name、type
方法：speak()
物件：Momo、Lucky` }
        ]
      },
      {
        sectionId: "8.2",
        title: "定義類別與建立物件",
        body: [
          "`class` 用來定義類別。類別裡可以放屬性，建立物件時使用 `new`。",
          "存取物件成員時使用點符號，例如 `s1.name` 或 `s1.showInfo()`。不同物件可以擁有不同資料。"
        ],
        code: { title: "範例 1：最簡單的 Student 類別", value: `class Student {
}

// 解說：Student 是一張設計圖，目前尚未放入屬性。
// 執行結果：此類別本身不會輸出內容。` },
        codes: [
          { title: "範例 2：加入屬性", value: `class Student {
    String name;
    int age;
}

// 解說：name 和 age 是 Student 物件的資料欄位。` },
          { title: "範例 3：建立物件", value: `Student s1 = new Student();

// 圖解：
// Student 類別 -> new -> s1 物件` },
          { title: "範例 4：設定物件資料", value: `Student s1 = new Student();
s1.name = "Jimmy";
s1.age = 25;

System.out.println(s1.name);

// 執行結果：
// Jimmy` },
          { title: "範例 5：建立 Car 類別", value: `class Car {
    String brand;
    String color;
}

Car car = new Car();
car.brand = "Toyota";
car.color = "White";

System.out.println(car.brand + " " + car.color);

// 執行結果：
// Toyota White` },
          { title: "範例 6：建立 Book 類別", value: `class Book {
    String title;
    int price;
}

Book book = new Book();
book.title = "Java 入門";
book.price = 500;

System.out.println(book.title + " " + book.price);

// 執行結果：
// Java 入門 500` },
          { title: "範例 7：建立多個物件", value: `Student s1 = new Student();
Student s2 = new Student();

s1.name = "Jimmy";
s2.name = "Amy";

System.out.println(s1.name);
System.out.println(s2.name);

// 執行結果：
// Jimmy
// Amy` },
          { title: "範例 8：不同物件不同資料", value: `Car car1 = new Car();
Car car2 = new Car();

car1.brand = "Toyota";
car2.brand = "Honda";

System.out.println(car1.brand);
System.out.println(car2.brand);

// 執行結果：
// Toyota
// Honda` },
          { title: "範例 9：完整學生資料", value: `class Student {
    String name;
    int age;
    int score;
}

Student s = new Student();
s.name = "John";
s.age = 18;
s.score = 92;

System.out.println(s.name + " " + s.age + " " + s.score);

// 執行結果：
// John 18 92` }
        ]
      },
      {
        sectionId: "8.3",
        title: "方法的進階應用",
        body: [
          "方法代表物件或類別會做的事情。方法呼叫（Method Call）就是請方法執行。",
          "參數（Parameter）是傳入方法的資料；回傳值（Return Value）是方法交回來的結果。"
        ],
        code: { title: "圖解：Method Call、Parameter、Return Value", value: `呼叫 calc.add(3, 5)
  ↓ 傳入參數 3 和 5
方法執行 a + b
  ↓
回傳 8` },
        codes: [
          { title: "範例 1：greet() 無參數無回傳值", value: `class Greeter {
    void greet() {
        System.out.println("Hello Java");
    }
}

Greeter g = new Greeter();
g.greet();

// 執行結果：
// Hello Java` },
          { title: "範例 2：有參數", value: `void greet(String name) {
    System.out.println("Hello " + name);
}

// 呼叫：greet("Jimmy")
// 執行結果：Hello Jimmy` },
          { title: "範例 3：add() 有回傳值", value: `int add(int a, int b) {
    return a + b;
}

System.out.println(add(2, 3));

// 執行結果：
// 5` },
          { title: "範例 4：calcBMI()", value: `double calcBMI(double height, double weight) {
    return weight / (height * height);
}

System.out.println(calcBMI(1.7, 65));

// 執行結果：
// 22.49134948096886` },
          { title: "範例 5：showInfo()", value: `class Student {
    String name;
    int score;

    void showInfo() {
        System.out.println(name + "：" + score);
    }
}` },
          { title: "範例 6：getArea() 正方形", value: `int getArea(int side) {
    return side * side;
}

// getArea(5) 回傳 25` },
          { title: "範例 7：getArea() 長方形", value: `int getArea(int width, int height) {
    return width * height;
}

// getArea(4, 6) 回傳 24` },
          { title: "範例 8：方法修改屬性", value: `class Player {
    int hp;

    void heal(int amount) {
        hp += amount;
    }
}

Player p = new Player();
p.hp = 50;
p.heal(20);
System.out.println(p.hp);

// 執行結果：
// 70` },
          { title: "範例 9：boolean 回傳值", value: `boolean isPassed(int score) {
    return score >= 60;
}

System.out.println(isPassed(80));

// 執行結果：
// true` },
          { title: "範例 10：組合多個方法", value: `class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    void printResult(int value) {
        System.out.println("結果：" + value);
    }
}

Calculator c = new Calculator();
c.printResult(c.add(3, 4));

// 執行結果：
// 結果：7` }
        ]
      },
      {
        sectionId: "8.4",
        title: "方法的多重定義（Overloading）",
        body: [
          "Overloading 是同名方法搭配不同參數列表。參數數量不同或參數型態不同，都可以形成合法多載。",
          "只有回傳型態不同不合法，因為 Java 無法只靠回傳型態判斷你要呼叫哪一個方法。"
        ],
        code: { title: "圖解：呼叫對應版本", value: `add(1, 2)     -> int add(int, int)
add(1, 2, 3)  -> int add(int, int, int)
add(1.5, 2.5) -> double add(double, double)` },
        codes: [
          { title: "範例 1：兩個 int", value: `int add(int a, int b) {
    return a + b;
}` },
          { title: "範例 2：三個 int", value: `int add(int a, int b, int c) {
    return a + b + c;
}` },
          { title: "範例 3：兩個 double", value: `double add(double a, double b) {
    return a + b;
}` },
          { title: "範例 4：合法 Overloading 完整版", value: `class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}

Calculator c = new Calculator();
System.out.println(c.add(1, 2));
System.out.println(c.add(1, 2, 3));
System.out.println(c.add(1.5, 2.5));

// 執行結果：
// 3
// 6
// 4.0` },
          { title: "範例 5：不合法 Overloading", value: `int add(int a, int b) {
    return a + b;
}

double add(int a, int b) {
    return a + b;
}

// 錯誤原因：
// 參數列表完全相同，只有回傳型態不同。` },
          { title: "範例 6：print 多載", value: `void print(String text) {
    System.out.println(text);
}

void print(int number) {
    System.out.println(number);
}

void print(String text, int times) {
    for (int i = 1; i <= times; i++) {
        System.out.println(text);
    }
}` },
          { title: "範例 7：area 多載", value: `int area(int side) {
    return side * side;
}

int area(int width, int height) {
    return width * height;
}` }
        ]
      },
      {
        sectionId: "8.5",
        title: "綜合演練",
        body: [
          "本節依照統一格式：問題說明 -> 解題思路 -> 流程圖 -> Hint -> Solution -> Explanation -> 延伸挑戰。",
          "這些題目會帶你看到方法如何拆解問題，也為後續更完整的 OOP 設計鋪路。"
        ],
        code: {
          title: "題目 1：用遞迴求階乘",
          value: `問題說明：
計算 n!，例如 5! = 5 x 4 x 3 x 2 x 1。

解題思路：
factorial(n) = n * factorial(n - 1)，直到 n == 1 停止。

流程圖：
factorial(5)
  -> 5 * factorial(4)
  -> 5 * 4 * factorial(3)
  -> ...
  -> 1

Hint：
遞迴一定要有停止條件。

Solution：
static int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

System.out.println(factorial(5));

執行結果：
120

Explanation：
每次呼叫都把問題縮小，直到 n <= 1 才開始一層一層回傳答案。

延伸挑戰：
改成使用迴圈版本，並比較可讀性。`
        },
        codes: [
          {
            title: "題目 2：Fibonacci 數列",
            value: `問題說明：
Fibonacci 規則是 F(0)=0、F(1)=1、F(n)=F(n-1)+F(n-2)。

解題思路：
遞迴版本接近定義；迴圈版本通常比較有效率。

流程圖：
fib(5)
  -> fib(4) + fib(3)
  -> 繼續拆小

Hint：
遞迴停止條件是 n <= 1。

Solution：
static int fibRecursive(int n) {
    if (n <= 1) {
        return n;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

static int fibLoop(int n) {
    int a = 0;
    int b = 1;
    for (int i = 2; i <= n; i++) {
        int next = a + b;
        a = b;
        b = next;
    }
    return n == 0 ? a : b;
}

System.out.println(fibRecursive(6));
System.out.println(fibLoop(6));

執行結果：
8
8

Explanation：
遞迴版本容易對照數學定義，但會重複計算；迴圈版本用變數保存前兩項，通常更適合實務。

延伸挑戰：
印出前 10 個 Fibonacci 數字。`
          },
          {
            title: "題目 3：快速排序法（Quick Sort）",
            value: `問題說明：
使用 Quick Sort 將陣列由小到大排序。

解題思路：
選一個 Pivot，把比 Pivot 小的放左邊，大的放右邊，再對左右兩邊做同樣的事。

流程圖：
[5, 2, 9, 1]
選 pivot
  ↓
分成小於 pivot / 大於 pivot
  ↓
遞迴排序左右兩邊

Hint：
先理解 partition，再理解遞迴排序左右區間。

Solution：
static void quickSort(int[] arr, int left, int right) {
    if (left >= right) return;

    int pivot = arr[(left + right) / 2];
    int i = left;
    int j = right;

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    quickSort(arr, left, j);
    quickSort(arr, i, right);
}

int[] data = {5, 2, 9, 1};
quickSort(data, 0, data.length - 1);

執行結果：
1 2 5 9

Explanation：
Pivot 是分界參考值。每次把資料分成較小問題，再用遞迴處理。

延伸挑戰：
在每次交換後印出陣列，觀察排序過程。`
          },
          {
            title: "題目 4：河內之塔（Hanoi Tower）",
            value: `問題說明：
把 n 個盤子從 A 柱移到 C 柱，一次只能移一個盤子，大盤不能放在小盤上。

解題思路：
先把 n-1 個盤子移到輔助柱，再把最大盤移到目標柱，最後把 n-1 個盤子移到目標柱。

流程圖：
move(n, A, B, C)
  ↓
move(n-1, A, C, B)
  ↓
A -> C
  ↓
move(n-1, B, A, C)

Hint：
n == 1 時，只需要直接移動。

Solution：
static void hanoi(int n, char from, char helper, char to) {
    if (n == 1) {
        System.out.println(from + " -> " + to);
        return;
    }

    hanoi(n - 1, from, to, helper);
    System.out.println(from + " -> " + to);
    hanoi(n - 1, helper, from, to);
}

hanoi(3, 'A', 'B', 'C');

執行結果：
A -> C
A -> B
C -> B
A -> C
B -> A
B -> C
A -> C

Explanation：
河內之塔的核心是把大問題拆成兩個 n-1 的小問題，中間移動最大盤。

延伸挑戰：
計算 n 個盤子總共需要移動幾次。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch08-thought-class-object-v2",
        sectionId: "8.1",
        type: "thought",
        title: "8.1 練習：判斷類別與物件",
        question: "請判斷：汽車、我的汽車、學生、Jimmy、Book、Java 入門，哪些是類別？哪些是物件？",
        hint: "類別像分類或藍圖，物件是具體的一個實體。",
        solution: "汽車、學生、Book 比較像類別；我的汽車、Jimmy、Java 入門比較像物件。",
        explanation: "類別描述共同特徵；物件是依照類別建立出的具體個體。"
      }),
      createActivity({
        id: "ch08-exercise-class-object-v2",
        sectionId: "8.2",
        type: "exercise",
        title: "8.2 練習：建立 Student、Car、Book",
        question: "建立 Student、Car、Book 類別，各建立至少一個物件並輸出屬性。",
        hint: "先寫 class 與屬性，再用 new 建立物件。",
        solution: `class Student {
    String name;
}

Student s = new Student();
s.name = "Jimmy";
System.out.println(s.name);`,
        explanation: "建立物件後，使用點符號設定和讀取屬性。"
      }),
      createActivity({
        id: "ch08-exercise-methods-v2",
        sectionId: "8.3",
        type: "exercise",
        title: "8.3 練習：方法、參數與回傳值",
        question: "建立 greet()、add()、calcBMI()、showInfo()、getArea() 方法。",
        hint: "需要結果給外部使用的方法，要設定回傳型態並 return。",
        solution: `int add(int a, int b) {
    return a + b;
}

double calcBMI(double height, double weight) {
    return weight / (height * height);
}`,
        explanation: "參數是輸入，return 是輸出。方法讓程式可以被重複呼叫。"
      }),
      createActivity({
        id: "ch08-exercise-overloading-v2",
        sectionId: "8.4",
        type: "exercise",
        title: "8.4 練習：Overloading",
        question: "建立 add() 三種版本，並說明只有回傳型態不同為什麼不合法。",
        hint: "合法多載要看參數列表，不是看回傳型態。",
        solution: `int add(int a, int b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

double add(double a, double b) {
    return a + b;
}`,
        explanation: "Java 會用參數數量與型態選擇版本。若參數相同，只改回傳型態，呼叫時無法分辨。"
      }),
      createActivity({
        id: "ch08-project-factorial",
        sectionId: "8.5",
        type: "exercise",
        title: "8.5 題目 1：遞迴階乘",
        question: "使用遞迴寫出 factorial(n)。",
        hint: "停止條件是 n <= 1。",
        solution: `static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}`,
        explanation: "每次呼叫都讓 n 減 1，直到停止條件成立。"
      }),
      createActivity({
        id: "ch08-project-fibonacci",
        sectionId: "8.5",
        type: "exercise",
        title: "8.5 題目 2：Fibonacci 數列",
        question: "完成 Fibonacci 的遞迴版本與迴圈版本。",
        hint: "遞迴：F(n)=F(n-1)+F(n-2)。迴圈：保存前兩項。",
        solution: `static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}`,
        explanation: "遞迴版本接近定義；迴圈版本通常較有效率。"
      }),
      createActivity({
        id: "ch08-project-quicksort",
        sectionId: "8.5",
        type: "homework",
        title: "8.5 題目 3：Quick Sort",
        question: "用 Pivot 概念完成 Quick Sort，並用自己的話說明分割流程。",
        hint: "先讓左邊小於 pivot、右邊大於 pivot，再遞迴處理左右。",
        solution: "可參考本節 Quick Sort 完整程式，重點是 partition 與遞迴左右區間。",
        explanation: "Quick Sort 把大問題拆成左右兩個小問題，這正是遞迴的典型用法。"
      }),
      createActivity({
        id: "ch08-project-hanoi",
        sectionId: "8.5",
        type: "homework",
        title: "8.5 題目 4：河內之塔",
        question: "完成 hanoi(n, from, helper, to)，印出移動步驟。",
        hint: "把 n-1 個盤子先移到輔助柱，再移最大盤。",
        solution: `static void hanoi(int n, char from, char helper, char to) {
    if (n == 1) {
        System.out.println(from + " -> " + to);
        return;
    }
    hanoi(n - 1, from, to, helper);
    System.out.println(from + " -> " + to);
    hanoi(n - 1, helper, from, to);
}`,
        explanation: "河內之塔看似複雜，但每次都只處理：移走上方 n-1 個、移最大盤、再移回 n-1 個。"
      })
    ],
    quiz: [
      { question: "類別（Class）最像什麼？", options: ["藍圖或設計圖", "已建立的單一物件", "錯誤訊息", "分號"], answer: 0, explanation: "類別描述物件的共同結構，像藍圖。" },
      { question: "物件（Object）是什麼？", options: ["由類別建立出的實體", "只能是 int", "不能有屬性", "只能存在註解中"], answer: 0, explanation: "物件是依照類別建立出的具體實體。" },
      { question: "屬性（Attribute）通常代表什麼？", options: ["物件的資料", "只能是方法名稱", "只能是 package", "排序結果"], answer: 0, explanation: "屬性保存物件的資料。" },
      { question: "方法（Method）通常代表什麼？", options: ["物件或類別會做的事情", "只能保存文字", "陣列索引", "JVM 記憶體"], answer: 0, explanation: "方法封裝一段可執行的動作或計算。" },
      { question: "建立物件通常使用哪個關鍵字？", options: ["new", "return", "case", "break"], answer: 0, explanation: "`new` 會建立新的物件。" },
      { question: "存取物件成員通常使用什麼符號？", options: [".", ":", "#", "$$"], answer: 0, explanation: "Java 使用點符號存取屬性與方法。" },
      { question: "`void greet()` 表示什麼？", options: ["沒有回傳值的方法", "一定回傳 int", "建立物件", "多維陣列"], answer: 0, explanation: "void 表示方法不回傳結果。" },
      { question: "Parameter 是什麼？", options: ["傳入方法的資料", "方法的檔案名稱", "class 的結束符號", "排序規則"], answer: 0, explanation: "參數讓方法接收外部資料。" },
      { question: "Return Value 是什麼？", options: ["方法回傳給呼叫者的結果", "class 名稱", "物件地址的詳細 JVM 說明", "註解"], answer: 0, explanation: "return 會把結果交回呼叫方法的地方。" },
      { question: "Method Call 是什麼？", options: ["呼叫方法執行", "刪除方法", "改變檔名", "建立 Scanner"], answer: 0, explanation: "例如 `dog.bark()` 就是一次方法呼叫。" },
      { question: "Overloading 是什麼？", options: ["同名方法搭配不同參數列表", "只有回傳型態不同", "不能有參數", "把類別變成物件"], answer: 0, explanation: "合法多載必須有不同參數列表。" },
      { question: "哪個是合法 Overloading？", options: ["add(int,int) 與 add(int,int,int)", "add(int,int) 與 double add(int,int)", "兩個完全相同 add", "只改變變數名稱"], answer: 0, explanation: "參數數量不同，因此可分辨版本。" },
      { question: "遞迴一定需要什麼？", options: ["停止條件", "Reflection", "Generic", "JVM 調校"], answer: 0, explanation: "沒有停止條件可能無限呼叫。" },
      { question: "Fibonacci 的基本規則是什麼？", options: ["前兩項相加得到下一項", "每次乘以 2", "只使用 switch", "永遠等於 1"], answer: 0, explanation: "F(n)=F(n-1)+F(n-2)。" },
      { question: "Quick Sort 中 Pivot 的用途是什麼？", options: ["作為分割資料的參考值", "建立類別", "輸入 Scanner", "代表回傳型態"], answer: 0, explanation: "Pivot 用來把資料分成較小與較大的兩邊。" }
    ]
  };
}

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
