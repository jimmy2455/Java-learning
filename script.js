const STORAGE_KEY = "javaVillageProgress";

const createActivity = (activity) => activity;

const COURSE_GROUPS = [
  { title: "Java 基礎", chapterIds: [1, 2, 3, 4, 5, 6, 7] },
  { title: "物件導向", chapterIds: [8, 9, 10, 11, 12] },
  { title: "進階應用", chapterIds: [13, 14, 15, 16, 17] },
  { title: "GUI 實作", chapterIds: [18] }
];

const COURSE_NAV_TITLES = {
  4: "運算式",
  6: "流程控制（二）：迴圈",
  7: "陣列",
  8: "物件導向程式設計",
  10: "字串",
  11: "繼承",
  12: "抽象類別、介面、內部類別",
  13: "套件",
  14: "例外處理",
  15: "多執行緒",
  16: "資料輸入與輸出",
  17: "Java 標準類別庫",
  18: "圖形使用者介面"
};

const COURSE_FILTER_LABELS = {
  "Java 基礎": "Java基礎",
  "GUI 實作": "GUI實作"
};

const CH02_ENVIRONMENT_SETUP = {
  jdkVersion: "OpenJDK 21（LTS）",
  jdkDownloadUrl: "https://jdk.java.net/21/",
  vscodeDownloadUrl: "https://code.visualstudio.com/",
  extensionName: "Java Extension Pack",
  windowsSteps: [
    "開啟 JDK 下載頁面，下載 Windows 版本的 OpenJDK 21。",
    "解壓縮或依安裝程式指示安裝到固定資料夾，例如 C:\\Program Files\\Java。",
    "確認系統環境變數 PATH 包含 JDK 的 bin 資料夾。",
    "重新開啟終端機後輸入 java -version 與 javac -version。"
  ],
  macSteps: [
    "開啟 JDK 下載頁面，下載 macOS 版本的 OpenJDK 21。",
    "依照下載來源提供的安裝方式安裝 JDK。",
    "開啟 Terminal，輸入 java -version 與 javac -version。",
    "若指令找不到，確認 JAVA_HOME 與 PATH 是否正確設定。"
  ]
};

const SYNTAX_REFERENCE = [
  {
    chapterId: 1,
    description: "Java 是一套穩定、跨平台、常用於企業系統與 Android 的程式語言。",
    cards: [
      { title: "單行註解", purpose: "在程式中留下不會被執行的說明。", keywords: ["comment", "註解"], code: `// 這是一行註解` },
      { title: "多行註解", purpose: "撰寫多行說明或暫時註解一段內容。", keywords: ["comment block"], code: `/*
  這是多行註解
  Java 編譯時會忽略它
*/` },
      { title: "基本輸出觀察", purpose: "用輸出確認 Java 程式正在執行。", keywords: ["println", "first program"], code: `System.out.println("我正在學 Java");` }
    ]
  },
  {
    chapterId: 2,
    description: "Java 程式從 class 與 main 方法開始，使用 println 輸出文字。",
    cards: [
      { title: "class 基本結構", purpose: "定義 Java 程式的基本外殼。", keywords: ["class", "Main"], code: `public class Main {
    public static void main(String[] args) {
    }
}` },
      { title: "main 方法", purpose: "Java 程式執行的入口。", keywords: ["main", "String[] args"], code: `public static void main(String[] args) {
    // 程式從這裡開始
}` },
      { title: "System.out.println()", purpose: "輸出文字並換行。", keywords: ["print", "println", "output"], code: `System.out.println("Hello Java");` }
    ]
  },
  {
    chapterId: 3,
    description: "變數用來儲存資料，每個變數都有型態、名稱與值。",
    cards: [
      { title: "int 整數", purpose: "儲存整數資料。", keywords: ["integer"], code: `int age = 18;` },
      { title: "double 小數", purpose: "儲存有小數點的數值。", keywords: ["float", "decimal"], code: `double height = 170.5;` },
      { title: "char 字元", purpose: "儲存單一字元。", keywords: ["character"], code: `char grade = 'A';` },
      { title: "boolean 布林值", purpose: "儲存 true 或 false。", keywords: ["true", "false"], code: `boolean passed = true;` },
      { title: "String 字串", purpose: "儲存一段文字。", keywords: ["text"], code: `String name = "Jimmy";` },
      { title: "宣告變數", purpose: "建立變數並給初始值。", keywords: ["declare"], code: `int score = 90;` },
      { title: "修改變數值", purpose: "把新的資料指定給既有變數。", keywords: ["assign"], code: `score = 100;` }
    ]
  },
  {
    chapterId: 4,
    description: "運算式會由運算元與算符組成，最後得到一個結果。",
    cards: [
      { title: "= 指定算符", purpose: "把右邊的值存到左邊變數。", keywords: ["assignment"], code: `int x = 10;` },
      { title: "+= 加後指定", purpose: "把變數加上某值後存回去。", keywords: ["plus assign"], code: `x += 5; // x = x + 5` },
      { title: "-= 減後指定", purpose: "把變數減去某值後存回去。", keywords: ["minus assign"], code: `x -= 2;` },
      { title: "*= 乘後指定", purpose: "把變數乘上某值後存回去。", keywords: ["multiply assign"], code: `x *= 3;` },
      { title: "/= 除後指定", purpose: "把變數除以某值後存回去。", keywords: ["divide assign"], code: `x /= 2;` },
      { title: "% 餘數", purpose: "取得除法後的餘數。", keywords: ["mod", "remainder"], code: `int r = 10 % 3; // 1` },
      { title: "&& 且", purpose: "兩個條件都成立才是 true。", keywords: ["and", "logical"], code: `age >= 18 && age <= 65` },
      { title: "|| 或", purpose: "任一條件成立就是 true。", keywords: ["or", "logical"], code: `score >= 60 || bonus > 0` },
      { title: "! 反相", purpose: "把 true 變 false，把 false 變 true。", keywords: ["not"], code: `if(!isLogin){
    System.out.println("請先登入");
}` },
      { title: "三元運算子", purpose: "用一行寫簡短條件判斷。", keywords: ["ternary", "condition"], code: `String result = score >= 60 ? "及格" : "不及格";` },
      { title: "型別轉換", purpose: "把資料轉成指定型態。", keywords: ["cast", "conversion"], code: `double avg = (double) total / count;` }
    ]
  },
  {
    chapterId: 5,
    description: "條件分支讓程式依照條件選擇不同執行路線。",
    cards: [
      { title: "if 條件判斷", purpose: "條件成立時執行程式碼。", keywords: ["condition"], code: `if(score >= 60){
    System.out.println("及格");
}` },
      { title: "if-else", purpose: "條件成立與不成立時各自處理。", keywords: ["else"], code: `if(score >= 60){
    System.out.println("及格");
}else{
    System.out.println("不及格");
}` },
      { title: "if-else if", purpose: "處理多段條件。", keywords: ["else if"], code: `if(score >= 90){
    System.out.println("A");
}else if(score >= 80){
    System.out.println("B");
}else{
    System.out.println("C");
}` },
      { title: "switch", purpose: "依照固定值選擇分支。", keywords: ["case", "default"], code: `switch(day){
    case 1:
        System.out.println("星期一");
        break;
    default:
        System.out.println("未知");
}` },
      { title: "break", purpose: "離開 switch 或迴圈。", keywords: ["switch break"], code: `case 1:
    System.out.println("星期一");
    break;` }
    ]
  },
  {
    chapterId: 6,
    description: "迴圈用來重複執行相同或相似的程式碼。",
    cards: [
      { title: "for 迴圈", purpose: "適合已知次數的重複。", keywords: ["loop"], code: `for(int i = 1; i <= 5; i++){
    System.out.println(i);
}` },
      { title: "while 迴圈", purpose: "條件成立時持續執行。", keywords: ["loop"], code: `while(count > 0){
    System.out.println(count);
    count--;
}` },
      { title: "do-while 迴圈", purpose: "至少執行一次再判斷條件。", keywords: ["loop"], code: `do{
    System.out.println(menu);
}while(choice != 0);` },
      { title: "巢狀迴圈", purpose: "迴圈中再放迴圈。", keywords: ["nested loop"], code: `for(int i = 1; i <= 3; i++){
    for(int j = 1; j <= 3; j++){
        System.out.println(i + "," + j);
    }
}` },
      { title: "break", purpose: "提前離開迴圈。", keywords: ["stop loop"], code: `if(i == 5){
    break;
}` },
      { title: "continue", purpose: "略過本次迴圈剩下程式碼。", keywords: ["skip loop"], code: `if(i % 2 == 0){
    continue;
}` }
    ]
  },
  {
    chapterId: 7,
    description: "陣列用來儲存多個相同型態的資料。",
    cards: [
      { title: "一維陣列", purpose: "建立固定長度的資料集合。", keywords: ["array"], code: `int[] scores = new int[5];` },
      { title: "new int[]", purpose: "建立匿名或明確陣列物件。", keywords: ["new array"], code: `int[] nums = new int[]{1, 2, 3};` },
      { title: "陣列初始化", purpose: "建立陣列時直接放入資料。", keywords: ["array literal"], code: `int[] scores = {80, 90, 70};` },
      { title: "length", purpose: "取得陣列元素數量。", keywords: ["array length"], code: `System.out.println(scores.length);` },
      { title: "二維陣列", purpose: "儲存表格狀資料。", keywords: ["2d array"], code: `int[][] table = {
    {1, 2, 3},
    {4, 5, 6}
};` },
      { title: "for 走訪陣列", purpose: "用索引讀取每個元素。", keywords: ["traverse"], code: `for(int i = 0; i < scores.length; i++){
    System.out.println(scores[i]);
}` },
      { title: "enhanced for", purpose: "快速讀取陣列每個值。", keywords: ["for each"], code: `for(int score : scores){
    System.out.println(score);
}` }
    ]
  },
  {
    chapterId: 8,
    description: "物件導向用 class、object、method 組織資料與行為。",
    cards: [
      { title: "class", purpose: "定義物件的藍圖。", keywords: ["oop"], code: `class Student {
    String name;
    int age;
}` },
      { title: "object", purpose: "用 class 建立實體物件。", keywords: ["new instance"], code: `Student s1 = new Student();` },
      { title: "method", purpose: "定義物件或類別會做的事。", keywords: ["function"], code: `void greet(){
    System.out.println("Hello");
}` },
      { title: "parameter", purpose: "把資料傳入方法。", keywords: ["argument"], code: `void sayHello(String name){
    System.out.println("Hello " + name);
}` },
      { title: "return", purpose: "從方法回傳結果。", keywords: ["return value"], code: `int add(int a, int b){
    return a + b;
}` },
      { title: "recursion", purpose: "方法呼叫自己。", keywords: ["recursive"], code: `int factorial(int n){
    if(n == 1) return 1;
    return n * factorial(n - 1);
}` },
      { title: "anonymous array", purpose: "建立後立即使用的陣列。", keywords: ["匿名陣列"], code: `printArray(new int[]{1, 2, 3});` },
      { title: "overloading", purpose: "同名方法使用不同參數列表。", keywords: ["method overloading"], code: `int add(int a, int b){ return a + b; }
int add(int a, int b, int c){ return a + b + c; }` }
    ]
  },
  {
    chapterId: 9,
    description: "建構方法、封裝與 static 讓類別更完整、更安全。",
    cards: [
      { title: "constructor", purpose: "建立物件時初始化資料。", keywords: ["建構方法"], code: `Student(String name, int age){
    this.name = name;
    this.age = age;
}` },
      { title: "this", purpose: "代表目前物件。", keywords: ["current object"], code: `this.name = name;` },
      { title: "private", purpose: "限制欄位只能在類別內直接使用。", keywords: ["encapsulation"], code: `private int balance;` },
      { title: "getter", purpose: "安全讀取 private 欄位。", keywords: ["get"], code: `public int getBalance(){
    return balance;
}` },
      { title: "setter", purpose: "安全修改 private 欄位。", keywords: ["set"], code: `public void setBalance(int balance){
    if(balance >= 0){
        this.balance = balance;
    }
}` },
      { title: "static field", purpose: "所有物件共享的欄位。", keywords: ["class variable"], code: `static int count = 0;` },
      { title: "static method", purpose: "不用建立物件即可呼叫的方法。", keywords: ["class method"], code: `static int max(int a, int b){
    return a > b ? a : b;
}` }
    ]
  },
  {
    chapterId: 10,
    description: "String 用來處理文字，常搭配方法進行查詢、切割與替換。",
    cards: [
      { title: "String", purpose: "建立字串。", keywords: ["文字"], code: `String name = "Jimmy";` },
      { title: "length()", purpose: "取得字串長度。", keywords: ["string length"], code: `int len = name.length();` },
      { title: "charAt()", purpose: "取得指定位置的字元。", keywords: ["character"], code: `char first = name.charAt(0);` },
      { title: "substring()", purpose: "擷取部分字串。", keywords: ["slice"], code: `String part = text.substring(1, 4);` },
      { title: "equals()", purpose: "比較字串內容是否相同。", keywords: ["compare"], code: `if(input.equals("yes")){
    System.out.println("OK");
}` },
      { title: "indexOf()", purpose: "找出文字出現位置。", keywords: ["find"], code: `int index = text.indexOf("Java");` },
      { title: "replace()", purpose: "替換字串內容。", keywords: ["replace string"], code: `String result = text.replace("cat", "dog");` },
      { title: "split()", purpose: "依規則切割字串。", keywords: ["csv"], code: `String[] parts = csv.split(",");` },
      { title: "StringBuilder", purpose: "頻繁組合字串時使用。", keywords: ["append"], code: `StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" Java");` },
      { title: "matches()", purpose: "用 Regex 檢查格式。", keywords: ["regex"], code: `boolean ok = phone.matches("\\\\d{10}");` }
    ]
  },
  {
    chapterId: 11,
    description: "繼承讓子類別重用父類別成員，也能搭配覆寫與多型。",
    cards: [
      { title: "extends", purpose: "讓子類別繼承父類別。", keywords: ["inheritance"], code: `class Dog extends Animal {
}` },
      { title: "override", purpose: "子類別重新定義父類別方法。", keywords: ["覆寫"], code: `@Override
void speak(){
    System.out.println("汪汪");
}` },
      { title: "super", purpose: "呼叫父類別成員或建構方法。", keywords: ["parent"], code: `super.speak();` },
      { title: "polymorphism", purpose: "父類別參考指向子類別物件。", keywords: ["多型"], code: `Animal animal = new Dog();
animal.speak();` },
      { title: "Object", purpose: "所有類別最上層父類別。", keywords: ["toString"], code: `@Override
public String toString(){
    return name;
}` },
      { title: "wrapper class", purpose: "基本型別的物件版本。", keywords: ["Integer", "Double"], code: `Integer x = 10;
int y = x;` },
      { title: "varargs", purpose: "接收不定數量參數。", keywords: ["int..."], code: `int sum(int... nums){
    int total = 0;
    for(int n : nums) total += n;
    return total;
}` },
      { title: "Object...", purpose: "接收任意型別的不定參數。", keywords: ["any type"], code: `void show(Object... values){
    for(Object v : values){
        System.out.println(v);
    }
}` }
    ]
  },
  {
    chapterId: 12,
    description: "抽象類別、介面與內部類別能建立更彈性的 OOP 結構。",
    cards: [
      { title: "abstract class", purpose: "定義不能直接建立物件的父類別。", keywords: ["抽象類別"], code: `abstract class Animal {
    abstract void speak();
}` },
      { title: "abstract method", purpose: "要求子類別必須實作的方法。", keywords: ["抽象方法"], code: `abstract void draw();` },
      { title: "interface", purpose: "定義能力或規格。", keywords: ["介面"], code: `interface Flyable {
    void fly();
}` },
      { title: "implements", purpose: "類別實作介面。", keywords: ["interface implementation"], code: `class Bird implements Flyable {
    public void fly() {
        System.out.println("飛行");
    }
}` },
      { title: "interface extends", purpose: "介面繼承介面。", keywords: ["介面繼承"], code: `interface Bird extends Flyable {
}` },
      { title: "inner class", purpose: "類別內部定義另一個類別。", keywords: ["內部類別"], code: `class Car {
    class Engine {
    }
}` },
      { title: "anonymous inner class", purpose: "一次性建立介面或類別實作。", keywords: ["匿名內部類別"], code: `Runnable task = new Runnable() {
    public void run() {
        System.out.println("Run");
    }
};` }
    ]
  },
  {
    chapterId: 13,
    description: "Package 用來組織類別，import 用來使用其他套件的類別。",
    cards: [
      { title: "package", purpose: "宣告類別所在套件。", keywords: ["套件"], code: `package school;` },
      { title: "import", purpose: "匯入其他套件的類別。", keywords: ["匯入"], code: `import java.util.Scanner;` },
      { title: "import *", purpose: "匯入同一套件下多個類別。", keywords: ["wildcard"], code: `import java.util.*;` },
      { title: "fully qualified name", purpose: "不 import 時使用完整類別名稱。", keywords: ["完整名稱"], code: `java.util.Scanner sc = new java.util.Scanner(System.in);` },
      { title: "public", purpose: "任何地方都可存取。", keywords: ["access"], code: `public class Student {
}` },
      { title: "protected", purpose: "同 package 或子類別可存取。", keywords: ["access"], code: `protected int age;` },
      { title: "default", purpose: "不寫修飾字，同 package 可存取。", keywords: ["package private"], code: `class Helper {
}` },
      { title: "private", purpose: "只有同一類別內可存取。", keywords: ["access"], code: `private String name;` }
    ]
  },
  {
    chapterId: 14,
    description: "例外處理讓程式遇到錯誤時可以有控制地處理。",
    cards: [
      { title: "try", purpose: "放可能發生例外的程式碼。", keywords: ["exception"], code: `try {
    int x = 10 / 0;
}` },
      { title: "catch", purpose: "捕捉並處理例外。", keywords: ["exception"], code: `catch(ArithmeticException e) {
    System.out.println("不能除以 0");
}` },
      { title: "finally", purpose: "不論是否發生例外都會執行。", keywords: ["cleanup"], code: `finally {
    System.out.println("結束");
}` },
      { title: "throw", purpose: "主動拋出例外。", keywords: ["拋出"], code: `throw new Exception("資料不合法");` },
      { title: "throws", purpose: "宣告方法可能拋出例外。", keywords: ["宣告例外"], code: `void read() throws IOException {
}` },
      { title: "custom exception", purpose: "建立自訂例外類別。", keywords: ["自訂例外"], code: `class AgeException extends Exception {
    AgeException(String msg) {
        super(msg);
    }
}` },
      { title: "e.getMessage()", purpose: "取得例外訊息。", keywords: ["error message"], code: `System.out.println(e.getMessage());` }
    ]
  },
  {
    chapterId: 15,
    description: "多執行緒讓多個任務可以看起來同時進行。",
    cards: [
      { title: "Thread", purpose: "建立執行緒類別。", keywords: ["thread"], code: `class MyThread extends Thread {
    public void run() {
        System.out.println("執行中");
    }
}` },
      { title: "Runnable", purpose: "定義可被執行緒執行的任務。", keywords: ["task"], code: `class MyTask implements Runnable {
    public void run() {
        System.out.println("Task");
    }
}` },
      { title: "start()", purpose: "啟動新執行緒。", keywords: ["thread start"], code: `new MyThread().start();` },
      { title: "run()", purpose: "執行緒實際執行的內容。", keywords: ["thread run"], code: `public void run() {
    System.out.println("Running");
}` },
      { title: "sleep()", purpose: "暫停目前執行緒一段時間。", keywords: ["pause"], code: `Thread.sleep(1000);` },
      { title: "synchronized", purpose: "保護共享資料。", keywords: ["lock"], code: `synchronized void withdraw(int money) {
    balance -= money;
}` },
      { title: "wait()", purpose: "讓執行緒等待條件成立。", keywords: ["thread wait"], code: `wait();` },
      { title: "notify()", purpose: "喚醒等待中的執行緒。", keywords: ["thread notify"], code: `notify();` },
      { title: "join()", purpose: "等待另一個執行緒完成。", keywords: ["thread join"], code: `thread.join();` }
    ]
  },
  {
    chapterId: 16,
    description: "IO 用來讀寫檔案、文字資料與物件資料。",
    cards: [
      { title: "File", purpose: "代表檔案或資料夾路徑。", keywords: ["file"], code: `File file = new File("data.txt");` },
      { title: "FileWriter", purpose: "寫入文字檔。", keywords: ["write file"], code: `FileWriter writer = new FileWriter("data.txt");
writer.write("Hello");
writer.close();` },
      { title: "FileReader", purpose: "讀取文字檔。", keywords: ["read file"], code: `FileReader reader = new FileReader("data.txt");` },
      { title: "BufferedWriter", purpose: "更有效率地寫文字。", keywords: ["buffer write"], code: `BufferedWriter bw = new BufferedWriter(new FileWriter("data.txt"));
bw.write("Hello");
bw.close();` },
      { title: "BufferedReader", purpose: "逐行讀取文字。", keywords: ["buffer read"], code: `BufferedReader br = new BufferedReader(new FileReader("data.txt"));
String line = br.readLine();` },
      { title: "try-with-resources", purpose: "自動關閉資源。", keywords: ["auto close"], code: `try(BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(br.readLine());
}` },
      { title: "Serializable", purpose: "允許物件被序列化保存。", keywords: ["serialize"], code: `class Student implements Serializable {
}` },
      { title: "ObjectOutputStream", purpose: "寫出物件。", keywords: ["write object"], code: `ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("obj.dat"));
out.writeObject(student);` },
      { title: "ObjectInputStream", purpose: "讀回物件。", keywords: ["read object"], code: `ObjectInputStream in = new ObjectInputStream(new FileInputStream("obj.dat"));
Student s = (Student) in.readObject();` }
    ]
  },
  {
    chapterId: 17,
    description: "標準類別庫提供常用工具，能快速完成轉型、數學與集合操作。",
    cards: [
      { title: "Integer.parseInt()", purpose: "把數字字串轉成 int。", keywords: ["parse"], code: `int n = Integer.parseInt("123");` },
      { title: "Math.pow()", purpose: "計算次方。", keywords: ["power"], code: `double x = Math.pow(2, 3);` },
      { title: "Math.sqrt()", purpose: "計算平方根。", keywords: ["square root"], code: `double x = Math.sqrt(25);` },
      { title: "Math.random()", purpose: "產生 0 到 1 之間的亂數。", keywords: ["random"], code: `double r = Math.random();` },
      { title: "ArrayList", purpose: "可變長度清單。", keywords: ["list", "collection"], code: `ArrayList<String> names = new ArrayList<>();
names.add("Jimmy");` },
      { title: "HashSet", purpose: "儲存不重複資料。", keywords: ["set", "unique"], code: `HashSet<Integer> numbers = new HashSet<>();
numbers.add(7);` },
      { title: "HashMap", purpose: "用 key 查詢 value。", keywords: ["map", "dictionary"], code: `HashMap<String, Integer> scores = new HashMap<>();
scores.put("Jimmy", 90);` },
      { title: "Collections.sort()", purpose: "排序 List。", keywords: ["sort"], code: `Collections.sort(names);` }
    ]
  },
  {
    chapterId: 18,
    description: "Swing 可建立桌面 GUI，包含視窗、元件、事件與繪圖。",
    cards: [
      { title: "JFrame", purpose: "建立視窗。", keywords: ["gui", "window"], code: `JFrame frame = new JFrame("My Window");` },
      { title: "JPanel", purpose: "放置其他元件的容器。", keywords: ["panel"], code: `JPanel panel = new JPanel();` },
      { title: "JButton", purpose: "建立按鈕。", keywords: ["button"], code: `JButton button = new JButton("送出");` },
      { title: "JLabel", purpose: "顯示文字標籤。", keywords: ["label"], code: `JLabel label = new JLabel("姓名：");` },
      { title: "JTextField", purpose: "單行文字輸入框。", keywords: ["input"], code: `JTextField field = new JTextField(10);` },
      { title: "JTextArea", purpose: "多行文字輸入區。", keywords: ["textarea"], code: `JTextArea area = new JTextArea(10, 30);` },
      { title: "ActionListener", purpose: "處理按鈕點擊事件。", keywords: ["event"], code: `button.addActionListener(e -> {
    label.setText("Clicked");
});` },
      { title: "LayoutManager", purpose: "控制元件排列方式。", keywords: ["layout"], code: `frame.setLayout(new BorderLayout());` },
      { title: "Graphics", purpose: "提供 2D 繪圖方法。", keywords: ["drawing"], code: `g.drawRect(20, 20, 100, 50);` },
      { title: "paintComponent()", purpose: "自訂 JPanel 繪圖。", keywords: ["paint"], code: `protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.drawString("Hello", 20, 20);
}` }
    ]
  }
];

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
    minutes: 55,
    summary: "建立 Java 開發環境，安裝 JDK 與 VS Code，完成第一個 Hello Java 程式。",
    intro: "本章會帶你從零建立 Java 開發環境。你不需要先懂終端機、編譯器或 IDE，本章會用新手能理解的方式說明每個工具負責什麼。",
    sections: [
      {
        sectionId: "2.1",
        title: "建立 Java 開發環境",
        body: [
          "學習 Java 需要先準備三樣工具：JDK、VS Code、Java Extension Pack。它們分別負責「編譯與執行 Java」、「編輯程式碼」、「讓 VS Code 看懂 Java」。",
          "JDK 是 Java Development Kit，也就是 Java 開發工具包。它包含 Java 編譯器 `javac` 與執行 Java 程式需要的工具。編譯器可以把你寫的 `.java` 程式碼轉成 Java 能執行的形式。",
          "VS Code 是程式編輯器。編輯器就像專門寫程式的記事本，可以幫你管理檔案、顯示顏色、打開終端機。終端機是輸入指令的地方，之後你會用它確認 Java 是否安裝成功。",
          "Java Extension Pack 是 VS Code 的 Java 擴充套件組。安裝後，VS Code 會有 Java 語法提示、執行按鈕、錯誤提示與專案支援。"
        ],
        visuals: [
          {
            type: "flow",
            title: "Java 開發環境圖解",
            value: `Java開發環境

JDK
 ↓
Java編譯器

VS Code
 ↓
編輯程式

Extension Pack
 ↓
Java支援`
          },
          {
            type: "callout",
            variant: "tip",
            text: "IDE 是 Integrated Development Environment，意思是整合式開發環境。你可以先把它理解成：把寫程式、執行程式、看錯誤提示放在一起的工具。"
          }
        ]
      },
      {
        sectionId: "2.2",
        title: "安裝 JDK",
        body: [
          `本課程推薦使用 ${CH02_ENVIRONMENT_SETUP.jdkVersion}。LTS 是 Long-Term Support，代表這個版本會被較長期維護，適合學習與正式專案使用。`,
          `官方下載網站：<a href="${CH02_ENVIRONMENT_SETUP.jdkDownloadUrl}" target="_blank" rel="noopener">${CH02_ENVIRONMENT_SETUP.jdkDownloadUrl}</a>。`,
          `Windows 安裝流程：${CH02_ENVIRONMENT_SETUP.windowsSteps.join(" → ")}。如果你不熟悉 PATH，可以先把它理解成：電腦用來尋找指令工具的位置清單。`,
          `macOS 安裝流程：${CH02_ENVIRONMENT_SETUP.macSteps.join(" → ")}。Terminal 是 macOS 的終端機，用來輸入像 java -version 這類指令。`,
          "安裝完成後，開啟終端機輸入 `java -version` 與 `javac -version`。`java` 用來執行 Java 程式，`javac` 是 Java 編譯器，用來把程式碼編譯成可執行的 class 檔案。"
        ],
        visuals: [
          {
            type: "callout",
            variant: "warning",
            text: "如果終端機顯示找不到 java 或 javac，通常代表 JDK 沒裝好，或 PATH 尚未設定。"
          }
        ],
        codes: [
          {
            title: "檢查 Java 執行工具",
            value: `java -version`
          },
          {
            title: "檢查 Java 編譯器",
            value: `javac -version`
          },
          {
            title: "預期結果範例",
            value: `java version "21"`
          }
        ]
      },
      {
        sectionId: "2.3",
        title: "安裝 VS Code",
        body: [
          `VS Code 官方網站：<a href="${CH02_ENVIRONMENT_SETUP.vscodeDownloadUrl}" target="_blank" rel="noopener">${CH02_ENVIRONMENT_SETUP.vscodeDownloadUrl}</a>。下載後依照作業系統安裝即可。`,
          `安裝 VS Code 後，請打開左側 Extensions 圖示，搜尋「${CH02_ENVIRONMENT_SETUP.extensionName}」，找到 Microsoft 提供的套件後按 Install。這個套件會一次安裝 Java 開發常用功能。`,
          "VS Code 介面可以先認識三個區域：Explorer 是左側檔案列表，用來管理專案檔案；Editor 是中間寫程式的地方；Terminal 是下方輸入指令、執行程式與查看結果的地方。",
          "你不一定要用 VS Code，也可以使用 IntelliJ IDEA、Eclipse 等工具。不過本課程為了讓畫面和操作一致，會統一使用 VS Code 示範。"
        ],
        visuals: [
          {
            type: "files",
            title: "VS Code 介面圖解",
            value: `VS Code

Explorer
 ↓
管理檔案與資料夾

Editor
 ↓
撰寫程式碼

Terminal
 ↓
輸入指令與查看輸出`
          },
          {
            type: "screenshot",
            title: "Java Extension Pack 安裝畫面佔位",
            value: `[安裝畫面截圖]

Extensions 搜尋 Java Extension Pack，按下 Install。`
          },
          {
            type: "callout",
            variant: "tip",
            text: "Q：一定要用 VS Code 嗎？A：不用，但本課程統一使用 VS Code 示範，這樣你跟著操作時比較不容易迷路。"
          }
        ]
      },
      {
        sectionId: "2.4",
        title: "建立第一個 Java 專案",
        body: [
          "專案可以先理解成：放同一個程式相關檔案的資料夾。第一個專案請建立一個名為 `HelloJava` 的資料夾，裡面放一個 `Main.java` 檔案。",
          "檔案名稱很重要。這次程式的類別名稱是 `Main`，所以檔案請命名為 `Main.java`。Java 對大小寫敏感，`Main.java` 和 `main.java` 不是同一個名稱。",
          "如果你不熟悉資料夾結構，可以把它想成書桌上的文件夾：`HelloJava` 是文件夾，`Main.java` 是放在裡面的第一張程式檔案。"
        ],
        visuals: [
          {
            type: "files",
            title: "HelloJava 專案結構",
            value: `HelloJava

 └─ Main.java`
          },
          {
            type: "callout",
            variant: "tip",
            text: "初學時請把專案放在簡單路徑，例如桌面或文件資料夾，避免路徑中有太多特殊符號。"
          }
        ],
        codes: [
          {
            title: "建立 Main.java",
            value: `// 檔案名稱：Main.java
public class Main {

}`
          }
        ]
      },
      {
        sectionId: "2.5",
        title: "撰寫第一個 Java 程式",
        body: [
          "接著在 `Main.java` 中輸入第一個 Java 程式。這個程式會在畫面上輸出 `Hello Java`。",
          "你現在不需要完全理解每一個字。先把它看成固定格式：外層是 class，中間有 main 方法，main 方法裡面放要執行的指令。",
          "在 VS Code 中，如果 Java Extension Pack 安裝成功，通常可以看到 Run 或執行按鈕。你也可以用終端機執行：先 `javac Main.java` 編譯，再 `java Main` 執行。"
        ],
        code: {
          title: "Main.java",
          value: `public class Main {

    public static void main(String[] args) {

        System.out.println("Hello Java");

    }

}`
        },
        visuals: [
          {
            type: "compare",
            title: "執行結果預覽",
            before: `執行前：
Main.java`,
            after: `Hello Java`
          }
        ],
        codes: [
          {
            title: "終端機編譯與執行",
            value: `javac Main.java
java Main`
          }
        ]
      },
      {
        sectionId: "2.6",
        title: "Java 程式的組成要素",
        body: [
          "`public class Main` 定義了一個名為 Main 的類別。類別可以先理解成 Java 程式的外殼，程式碼通常會放在 class 裡面。",
          "`public static void main(String[] args)` 是程式開始執行的入口。入口就像大樓的大門，Java 執行程式時會從這裡開始。",
          "`System.out.println(\"Hello Java\");` 會把文字輸出到畫面上。`println` 可以想成 print line，也就是輸出一行並換行。",
          "大括號 `{}` 用來包住 class 或方法的內容；分號 `;` 常用在一個指令結束的地方。忘記分號是新手很常見的錯誤。"
        ],
        visuals: [
          {
            type: "flow",
            title: "程式碼標註圖",
            value: `public class Main
        ↓
定義 Main 類別

public static void main(String[] args)
        ↓
程式執行入口

System.out.println("Hello Java");
        ↓
輸出文字到畫面`
          },
          {
            type: "callout",
            variant: "warning",
            text: "如果 class 名稱是 Main，檔案名稱也要是 Main.java。大小寫不一致可能導致執行失敗。"
          }
        ],
        codes: [
          {
            title: "逐行拆解",
            value: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch02-exercise-name",
        sectionId: "2.5",
        type: "exercise",
        title: "實作練習：改成自己的名字",
        question: "把 `System.out.println(\"Hello Java\");` 裡面的文字改成自己的名字，並觀察輸出結果。",
        hint: "只需要改雙引號裡面的文字，不要刪掉雙引號、括號或分號。",
        solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("我是小明");
    }
}`,
        explanation: "System.out.println() 會輸出括號內的內容。文字資料要放在雙引號中，指令最後要保留分號。"
      }),
      createActivity({
        id: "ch02-thought-main",
        sectionId: "2.6",
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
      }),
      createActivity({
        id: "ch02-exercise-env-check",
        sectionId: "2.2",
        type: "exercise",
        title: "實作練習：確認 JDK 安裝狀態",
        question: "在終端機輸入 `java -version` 與 `javac -version`，確認兩個指令都能顯示版本資訊。",
        hint: "如果終端機顯示找不到指令，請先關閉終端機再重新開啟；仍失敗時檢查 PATH 是否包含 JDK 的 bin 資料夾。",
        solution: `java -version
javac -version`,
        explanation: "`java` 負責執行 Java 程式，`javac` 負責編譯 Java 程式。兩個指令都能顯示版本，代表開發環境比較完整。"
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
        question: "本課程推薦安裝哪個 JDK 版本？",
        options: ["OpenJDK 21（LTS）", "JDK 1.0", "只安裝瀏覽器", "不需要 JDK"],
        answer: 0,
        explanation: "OpenJDK 21 是 LTS 版本，適合學習與長期使用。"
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
        question: "`javac Main.java` 的概念是什麼？",
        options: ["編譯 Java 程式", "開啟圖片", "啟動瀏覽器", "新增資料夾"],
        answer: 0,
        explanation: "javac 是 Java 編譯器，用來把 .java 程式碼編譯成 .class。"
      },
      {
        question: "Java Extension Pack 的用途是什麼？",
        options: ["讓 VS Code 支援 Java 開發", "取代 JDK", "製作網頁樣式", "刪除終端機"],
        answer: 0,
        explanation: "Java Extension Pack 會替 VS Code 加入 Java 語法提示、執行與專案支援。"
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

function applyRequestedContentUpdates() {
  updateSection(3, "3.1", {
    objectives: [
      "能說明變數是用來替資料命名與保存資料。",
      "能從生活情境中辨識哪些資料適合存成變數。",
      "能替資料取出具有意義的變數名稱。"
    ],
    code: {
      title: "把生活資料存成變數",
      value: `String studentName = "小美";
int finishedExercises = 3;

System.out.println(studentName);
System.out.println(finishedExercises);`
    }
  });

  updateSection(3, "3.2", {
    objectives: [
      "能理解變數可避免重複撰寫相同資料。",
      "能說明修改變數值如何影響多處輸出。",
      "能把重複出現的資料抽成變數。"
    ],
    code: {
      title: "同一份資料重複使用",
      value: `String courseName = "Java 新手村";

System.out.println("歡迎來到 " + courseName);
System.out.println(courseName + " 今天開始上課");
System.out.println("完成 " + courseName + " 的第一個練習");`
    }
  });

  updateSection(3, "3.3", {
    objectives: [
      "能區分 int、double、char、boolean、String 的用途。",
      "能依資料特性選擇適合的型態。",
      "能避免把所有資料都當成文字處理。"
    ],
    code: {
      title: "依資料特性選型態",
      value: `String eventName = "Java 入門班";
int seats = 30;
double fee = 499.5;
char area = 'A';
boolean open = true;`
    }
  });

  updateSection(3, "3.4", {
    objectives: [
      "能分辨宣告變數與賦值的差異。",
      "能先宣告變數，再於後續流程賦值。",
      "能理解變數使用前必須已有合理值。"
    ],
    code: {
      title: "先宣告，後賦值",
      value: `String orderId;
double amount;

orderId = "A001";
amount = 980.0;

System.out.println(orderId);
System.out.println(amount);`
    }
  });

  updateSection(3, "3.5", {
    objectives: [
      "能判斷變數名稱是否合法。",
      "能使用 camelCase 替變數命名。",
      "能避免使用保留字、數字開頭與不合法符號。"
    ],
    code: {
      title: "清楚且合法的命名",
      value: `String studentName = "小美";
int totalScore = 95;
boolean isPassed = true;`
    }
  });

  updateSection(3, "3.6", {
    objectives: [
      "能使用 + 將文字與變數組合成輸出。",
      "能設計具欄位名稱的清楚輸出格式。",
      "能避免輸出缺少上下文的裸數字。"
    ],
    code: {
      title: "收據式輸出",
      value: `String productName = "鍵盤";
double price = 1200.0;
int quantity = 1;

System.out.println("商品：" + productName);
System.out.println("單價：" + price);
System.out.println("數量：" + quantity);`
    }
  });

  updateSection(3, "3.7", {
    objectives: [
      "能辨識型態不合、少分號、大小寫不一致三種錯誤。",
      "能根據錯誤訊息回到程式碼檢查變數。",
      "能修正錯誤並保持變數名稱一致。"
    ],
    code: {
      title: "修正後的變數程式",
      value: `int age = 18;
String name = "小明";

System.out.println(name);
System.out.println(age);`
    }
  });

  const chapter03 = chapters.find((chapter) => chapter.id === 3);
  if (chapter03) {
    chapter03.quiz = [
      {
        question: "看到需求「同一個課程名稱會出現在 5 行輸出中」，最適合先做哪件事？",
        options: ["把課程名稱存成變數", "把每一行都手動打一遍", "刪除所有輸出", "把課程名稱改成數字"],
        answer: 0,
        explanation: "重複出現的資料適合抽成變數，之後只要改一處。"
      },
      {
        question: "活動報名人數應該優先選哪種型態？",
        options: ["int，因為人數通常是整數", "boolean，因為人數只有 true/false", "char，因為人數是單一字元", "String，因為所有資料都應該存成文字"],
        answer: 0,
        explanation: "人數是可計算的整數數量，因此 int 較合適。"
      },
      {
        question: "哪一個情境最能說明「宣告」和「賦值」的差異？",
        options: ["先建立一個空的訂單編號變數，之後收到資料再放入編號", "把所有程式刪除", "只輸出固定文字", "把變數名稱改成 class"],
        answer: 0,
        explanation: "宣告是建立變數名稱，賦值是把資料放進變數。"
      },
      {
        question: "哪個變數名稱最適合保存是否通過測驗？",
        options: ["isPassed", "1passed", "test-result", "class"],
        answer: 0,
        explanation: "isPassed 符合 camelCase，且語意清楚。其他選項有數字開頭、非法符號或保留字問題。"
      },
      {
        question: "程式 `String name = \"Amy\"; System.out.println(Name);` 最可能出現什麼問題？",
        options: ["大小寫不一致，Name 和 name 是不同名稱", "String 不能存文字", "println 不能輸出變數", "Amy 必須是數字"],
        answer: 0,
        explanation: "Java 區分大小寫，name 和 Name 代表不同識別名稱。"
      }
    ];
  }

  updateSection(4, "4.1", {
    objectives: [
      "能說明運算式由運算元、算符與結果組成。",
      "能判斷一段程式片段是否會產生結果值。",
      "能區分運算式與一般敘述。"
    ]
  });

  updateSection(4, "4.2", {
    objectives: [
      "能理解指定算符會把右側結果存回左側變數。",
      "能追蹤 +=、-=、*=、/=、%= 後變數值如何改變。",
      "能避免在尚未理解目前值時連續修改同一個變數。"
    ]
  });

  updateSection(4, "4.3", {
    objectives: [
      "能使用 +、-、*、/、% 完成數值運算。",
      "能說明整數除法與餘數的結果差異。",
      "能把生活公式拆成清楚的運算式。"
    ]
  });

  updateSection(4, "4.4", {
    objectives: [
      "能理解 boolean 結果來自比較或邏輯運算。",
      "能使用 && 表示多個條件同時成立。",
      "能使用 || 表示任一條件成立。",
      "能使用 ! 反轉 boolean 結果。"
    ],
    code: {
      title: "布林條件組合",
      value: `int age = 20;
boolean hasTicket = true;
boolean isBanned = false;

System.out.println(age >= 18);
System.out.println(hasTicket && !isBanned);
System.out.println(age < 12 || age >= 65);`
    },
    codes: [
      {
        title: "&&：兩個條件都成立",
        value: `int age = 30;
boolean hasLicense = true;

System.out.println(age >= 18 && hasLicense);`
      },
      {
        title: "||：任一條件成立",
        value: `boolean isMember = false;
boolean hasCoupon = true;

System.out.println(isMember || hasCoupon);`
      },
      {
        title: "!：反轉結果",
        value: `boolean isLocked = false;

System.out.println(!isLocked);`
      }
    ]
  });

  updateSection(4, "4.5", {
    objectives: [
      "能用二進位角度理解位元運算。",
      "能分辨 &、|、^ 的逐位比較規則。",
      "能說明 <<、>> 對數值位元位置的影響。"
    ]
  });

  updateSection(4, "4.6", {
    objectives: [
      "能依括號、乘除餘數、加減順序預測結果。",
      "能說明括號如何改變運算結果。",
      "能在運算式複雜時主動加括號提升可讀性。"
    ]
  });

  updateSection(4, "4.7", {
    objectives: [
      "能分辨自動轉型與強制轉型。",
      "能預測 double 轉 int 時小數被截去的結果。",
      "能避免整數除法造成小數結果遺失。"
    ]
  });

  updateSection(4, "4.8", {
    objectives: [
      "能使用 ++ 與 -- 表示加一或減一。",
      "能理解三元運算子會根據條件選出一個值。",
      "能判斷三元運算子適合簡短選擇，不適合複雜流程。"
    ]
  });

  updateSection(4, "4.9", {
    objectives: [
      "能建立 Scanner 讀取鍵盤輸入。",
      "能依資料需求選擇 nextLine 或 nextInt。",
      "能把輸入資料組合成清楚的輸出句子。"
    ]
  });

  const chapter04 = chapters.find((chapter) => chapter.id === 4);
  if (chapter04) {
    chapter04.quiz = [
      {
        question: "哪一個最符合「運算式」的定義？",
        options: ["會產生一個結果值的程式片段", "一定要有 if 的程式", "只能輸出文字的指令", "只能出現在 class 外面的文字"],
        answer: 0,
        explanation: "運算式的核心是會得到一個結果，例如數字、boolean 或字串。"
      },
      {
        question: "`int x = 10; x += 4;` 執行後 x 是多少？",
        options: ["14", "10", "4", "40"],
        answer: 0,
        explanation: "`x += 4` 等同於 `x = x + 4`，會把 14 存回 x。"
      },
      {
        question: "`10 / 3` 在兩邊都是 int 時結果是什麼？",
        options: ["3", "3.333", "4", "1"],
        answer: 0,
        explanation: "整數除法會得到整數商，小數部分會被捨去。"
      },
      {
        question: "`10 % 3` 代表什麼？",
        options: ["10 除以 3 的餘數", "10 除以 3 的小數", "10 乘以 3", "10 的 3 次方"],
        answer: 0,
        explanation: "`%` 是餘數運算，10 除以 3 餘 1。"
      },
      {
        question: "登入規則是「有帳號且密碼正確且沒有被鎖定」，哪個運算式最適合？",
        options: ["hasAccount && passwordCorrect && !isLocked", "hasAccount || passwordCorrect || isLocked", "!hasAccount && isLocked", "passwordCorrect = true"],
        answer: 0,
        explanation: "三個條件都要成立，所以使用 `&&`；沒有被鎖定需要用 `!isLocked`。"
      },
      {
        question: "位元運算 `&` 與邏輯運算 `&&` 的差異是什麼？",
        options: ["& 逐位比較數字，&& 組合 boolean 條件", "兩者完全相同", "&& 只能用在 int", "& 只能用在 String"],
        answer: 0,
        explanation: "`&` 常用於位元逐位運算，`&&` 用於 boolean 條件是否同時成立。"
      },
      {
        question: "`2 + 3 * 4` 的結果為什麼不是 20？",
        options: ["乘法優先於加法", "加法優先於乘法", "Java 不支援乘法", "3 * 4 會先變成字串"],
        answer: 0,
        explanation: "沒有括號時，乘除餘數優先於加減，所以先算 3 * 4。"
      },
      {
        question: "`(int) 3.99` 的結果是什麼？",
        options: ["3", "4", "3.99", "錯誤，不能轉型"],
        answer: 0,
        explanation: "double 強制轉 int 會截去小數部分，不會四捨五入。"
      },
      {
        question: "哪個情境最適合使用三元運算子？",
        options: ["依分數選出「及格」或「不及格」一個文字", "寫十幾行登入流程", "建立 Scanner", "宣告 class"],
        answer: 0,
        explanation: "三元運算子適合簡短地從兩個值中選一個，複雜流程應留給 if。"
      },
      {
        question: "使用 Scanner 讀取整數後又要讀一整行文字，常見要注意什麼？",
        options: ["nextInt 後可能需要先吃掉換行", "Scanner 不能讀整數", "nextLine 只能讀數字", "必須刪除 import"],
        answer: 0,
        explanation: "`nextInt()` 不會吃掉最後的換行，後面接 `nextLine()` 時常需要先處理換行。"
      }
    ];
  }

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
  chapters.push(createChapter09());
  chapters.push(createChapter10());
  chapters.push(createChapter11());
  chapters.push(createChapter12());
  chapters.push(createChapter13());
  chapters.push(createChapter14());
  chapters.push(createChapter15());
  chapters.push(createChapter16());
  chapters.push(createChapter17());
  chapters.push(createChapter18());
  applyRefinedCourseDesign();
  applyVisualTeachingUpgrade();
  upgradeChallengeSystem();
}

const CHALLENGE_BANK = {
  1: [
    ["生活應用盤點", "請觀察你每天使用的 3 個數位服務，推測哪些部分可能適合用 Java 製作，並說明原因。", "程式思考", 1, ["先從後端、資料保存、手機 App 方向想。", "Java 常出現在需要穩定處理資料與流程的系統。", "可用「服務名稱 → Java 可能負責的部分 → 原因」整理。"], "銀行 App → 帳戶資料與交易流程；購物網站 → 訂單與庫存；學校系統 → 成績與選課資料。", "這題不是背 Java 定義，而是把 Java 的特色連到真實場景。重點是判斷哪些功能需要穩定、可維護、能處理大量資料。常見錯誤是只寫產品名稱，沒有說明 Java 可能負責哪一層。"],
    ["語言角色判斷", "你要做一個會員登入網站，請判斷 Java 與 JavaScript 可能各自負責哪些工作。", "程式思考", 2, ["先把畫面互動和伺服器處理分開。", "JavaScript 常在瀏覽器端，Java 常在後端服務。", "用表格列出：輸入檢查、登入驗證、資料庫查詢、按鈕互動。"], "JavaScript：按鈕互動、表單即時提示。Java：登入驗證、查詢會員資料、建立登入狀態。", "這題訓練前後端分工。不是說某語言一定只能做某件事，而是用常見情境理解各自擅長位置。其他寫法可補充 Node.js 也能做後端，但本課程聚焦 Java。"]
  ],
  2: [
    ["安裝檢查清單", "設計一份 Java 學習環境檢查清單，讓完全新手能確認自己的電腦是否可以編譯與執行 Java。", "日常生活情境", 2, ["想想新手最容易漏掉哪些工具。", "至少需要 JDK、編輯器、終端機驗證。", "檢查項目可包含 java -version、javac -version、第一支程式能否執行。"], "1. 已安裝 JDK 21。\n2. 終端機可執行 java -version。\n3. 終端機可執行 javac -version。\n4. VS Code 已安裝 Java Extension Pack。\n5. Main.java 可輸出 Hello Java。", "這題要求把環境建置變成可驗證流程。常見錯誤是只寫下載連結，卻沒有驗證方式。真正的檢查清單應該能讓學生一步步判斷問題在哪裡。"],
    ["輸出格式設計", "請設計一個程式輸出課程報到資訊，至少包含課程名稱、學生姓名、今天目標，並讓輸出排版清楚。", "日常生活情境", 1, ["思考要輸出幾行。", "每一行可以用一次 println。", "可以加上分隔線讓資訊更清楚。"], `public class Main {
    public static void main(String[] args) {
        System.out.println("=== 課程報到 ===");
        System.out.println("課程：Java 新手村");
        System.out.println("姓名：Jimmy");
        System.out.println("目標：完成第一支 Java 程式");
    }
}`, "這題不是只改 Hello World，而是自行決定輸出資訊與格式。步驟是先規劃要顯示的欄位，再決定每行輸出的文字。常見錯誤是忘記雙引號或分號。"]
  ],
  3: [
    ["資料標籤判讀", "閱讀一段生活紀錄，指出哪些資料值得存成變數，並替每個變數取一個清楚名稱。情境：今天小美完成 3 題練習，花了 45 分鐘，心情是開心。", "程式思考", 1, ["先找會被程式記住或重複使用的資料。", "變數名稱要描述資料意義，不要只用 a、b、c。", "可以把人名、題數、分鐘、心情分別命名。"], `String studentName = "小美";
int finishedExercises = 3;
int spentMinutes = 45;
String mood = "開心";`, "本節目標是理解變數是資料的名稱。解題時先從句子中找出資料，再替資料命名。常見錯誤是把整句話直接輸出，沒有辨識哪些資料需要被保存。"],
    ["重複資料整理", "有三行訊息都會用到同一個學生姓名。請先把姓名存成一份資料，再設計三行輸出，避免同一個名字重複寫三次。", "程式思考", 1, ["找出重複出現的資料。", "把重複資料抽成變數。", "輸出句子時使用同一個變數。"], `String studentName = "小美";
System.out.println(studentName + " 開始練習 Java");
System.out.println(studentName + " 完成第一個小節");
System.out.println(studentName + " 準備進入下一章");`, "本節目標是理解為什麼需要變數：降低重複、方便修改。若未來名字改變，只要改變變數值即可。常見錯誤是三行都手寫名字，導致修改時容易漏掉。"],
    ["資料型態分類員", "請替一張活動報名表選擇適合的資料型態：報名人姓名、參加人數、報名費、是否完成付款、座位區代號。", "程式思考", 2, ["先判斷資料是文字、整數、小數、真假或單一字元。", "金額若可能有小數可用 double。", "是否完成付款只有 true / false。"], `String name = "小美";
int people = 2;
double fee = 599.5;
boolean paid = true;
char area = 'B';`, "本節目標是選擇資料型態。姓名是文字，參加人數是整數，費用可能有小數，付款狀態是真假，座位區若只有單一代號可用 char。常見錯誤是把所有資料都用 String，後續就不方便計算或判斷。"],
    ["分段建立訂單資料", "請模擬訂單資料建立流程：先宣告訂單編號與總金額，稍後再放入實際資料，最後輸出結果。", "日常生活情境", 2, ["本題重點是先宣告、後賦值。", "使用變數前必須已經有值。", "可以先宣告 orderId 和 total，再分別賦值。"], `String orderId;
double total;

orderId = "A2026";
total = 1280.0;

System.out.println("訂單：" + orderId);
System.out.println("總金額：" + total);`, "本節目標是理解宣告與賦值可以分開。宣告只是建立名稱，賦值才是放入資料。常見錯誤是在變數尚未賦值前就拿來輸出。"],
    ["命名規則審查員", "你收到一組變數名稱：2score、totalPrice、class、student-name、isPassed。請判斷哪些適合使用，並替不適合的名稱改成合法且清楚的名稱。", "程式思考", 2, ["先檢查是否以數字開頭。", "再檢查是否使用 Java 保留字或非法符號。", "合法名稱還要盡量看得懂。"], `// 不適合：2score -> score2 或 secondScore
// 適合：totalPrice
// 不適合：class -> className
// 不適合：student-name -> studentName
// 適合：isPassed`, "本節目標是辨識合法且清楚的變數名稱。Java 不能用數字開頭、不能用連字號、不能使用保留字。常見錯誤是只追求合法，卻取出看不懂的名字。"],
    ["收據輸出排版", "已有商品名稱、單價、數量三個變數。請設計清楚的收據輸出格式，讓使用者能看懂每個欄位代表什麼。", "日常生活情境", 2, ["本題重點是把變數放進可讀的輸出句。", "每個輸出前可以加欄位名稱。", "暫時不要計算總價，專心練輸出組合。"], `String productName = "滑鼠";
double price = 799.0;
int quantity = 2;

System.out.println("商品名稱：" + productName);
System.out.println("單價：" + price);
System.out.println("數量：" + quantity);`, "本節目標是使用變數輸出資料。這題刻意不要求計算總價，避免和 CH04 數值運算重複。常見錯誤是只輸出變數值，沒有欄位說明，導致閱讀者不知道每個數字代表什麼。"],
    ["錯誤偵探", "請閱讀一段有錯的變數程式，指出錯誤種類並修正：文字放進整數、少分號、變數大小寫不一致。", "程式思考", 2, ["一次只檢查一種錯誤。", "先看型態是否符合資料。", "再看分號與變數名稱大小寫。"], `int age = 18;
String name = "小明";
System.out.println(name);`, "本節目標是辨識常見錯誤。型態不合會造成編譯錯誤，少分號會讓指令無法結束，大小寫不同會被 Java 視為不同名稱。常見錯誤是只修一個地方，沒有重新檢查整段程式。"]
  ],
  4: [
    ["運算式分類任務", "閱讀下列片段，判斷哪些會產生一個結果值：`8 * 3`、`age >= 18`、`System.out.println(\"Hi\")`、`name + \"同學\"`、`int score = 90;`。請把它們分成「運算式」與「不是本節討論的運算式」。", "程式思考", 1, ["先問自己：這段程式會不會算出一個值？", "比較運算與字串串接也會產生結果。", "宣告敘述與輸出指令不是本節要分類的運算式。"], `運算式：
- 8 * 3
- age >= 18
- name + "同學"

不是本節討論的運算式：
- System.out.println("Hi")
- int score = 90;`, "運算式的重點是會得到結果，例如數字、boolean 或字串。`System.out.println` 是執行輸出動作，`int score = 90;` 是宣告與指定敘述，雖然裡面包含 `90`，但整段不是本節要判斷的運算式。常見錯誤是看到 Java 程式碼就全部歸類為運算式。"],
    ["遊戲能量更新紀錄", "角色一開始有 energy = 40、coins = 12、combo = 2。依序發生：喝藥水 energy 增加 15、受到攻擊 energy 減少 8、任務獎勵讓 coins 變成 3 倍、combo 除以 2、coins 除以 5 後只保留餘數。請寫出每一步指定後的最後結果。", "小型模擬", 2, ["每一行都會改變原本的變數。", "`+=`、`-=`、`*=`、`/=`、`%=` 都是把右邊結果再放回左邊。", "照事件順序一步一步更新，不要一次心算全部。"], `int energy = 40;
int coins = 12;
int combo = 2;

energy += 15;   // 55
energy -= 8;    // 47
coins *= 3;     // 36
combo /= 2;     // 1
coins %= 5;     // 1

System.out.println(energy);
System.out.println(coins);
System.out.println(combo);`, "這題只練指定算符，不需要條件判斷。複合指定算符的共同規則是「取出原值、完成運算、放回同一個變數」。常見錯誤是忘記後一步會使用前一步更新後的值。"],
    ["生活數值計算包", "健身房想做一張簡易計算表：已知體重 68 公斤、身高 1.72 公尺、商品單價 120 元、購買 4 件、折扣率 0.85。請計算 BMI、小計、折扣後金額，並輸出每個結果。", "數學運算", 2, ["每個結果都可以用一個運算式算出來。", "BMI 需要平方，折扣後金額需要先算小計。", "身高已經是公尺，不需要再除以 100。"], `double weight = 68;
double height = 1.72;
double price = 120;
int quantity = 4;
double discount = 0.85;

double bmi = weight / (height * height);
double subtotal = price * quantity;
double finalPrice = subtotal * discount;

System.out.println("BMI：" + bmi);
System.out.println("小計：" + subtotal);
System.out.println("折扣後：" + finalPrice);`, "本題把數值運算放在生活情境中，但不加入 if 或 Scanner。解題步驟是先找出每個需要的結果，再為每個結果寫出公式。常見錯誤是折扣率寫成 85，或 BMI 忘記使用括號讓身高先平方。"],
    ["登入資格布林條件", "會員系統已有三個資料：hasAccount、passwordCorrect、isLocked。請建立 canLogin，代表「有帳號、密碼正確、而且沒有被鎖定」；再建立 needsHelp，代表「沒有帳號，或帳號被鎖定」。最後輸出兩個 boolean 結果。", "程式思考", 2, ["這題只需要得到 true/false，不需要寫分支。", "同時成立使用 &&，任一成立使用 ||。", "「沒有被鎖定」可以從 isLocked 反過來思考。"], `boolean hasAccount = true;
boolean passwordCorrect = true;
boolean isLocked = false;

boolean canLogin = hasAccount && passwordCorrect && !isLocked;
boolean needsHelp = !hasAccount || isLocked;

System.out.println(canLogin);
System.out.println(needsHelp);`, "布林運算的目標是把規則組合成 true/false。`canLogin` 要三個條件同時成立，所以使用 `&&`；`needsHelp` 只要其中一種狀況發生就成立，所以使用 `||`。常見錯誤是把 `!isLocked` 寫成 `isLocked`，導致鎖定帳號反而可以登入。"],
    ["二進位通行證", "有兩個權限代碼：A = 12（二進位 1100）、B = 10（二進位 1010）。請算出 A & B、A | B、A ^ B，以及 A >> 1 的結果，並用二進位圖說明每一列怎麼得到答案。", "程式思考", 3, ["先把兩個數字對齊成二進位。", "& 是兩邊都是 1 才得到 1，| 是任一邊為 1 就得到 1，^ 是不同才得到 1。", "右移一格可以先看成整體往右移動一位。"], `int a = 12; // 1100
int b = 10; // 1010

System.out.println(a & b);  // 8  -> 1000
System.out.println(a | b);  // 14 -> 1110
System.out.println(a ^ b);  // 6  -> 0110
System.out.println(a >> 1); // 6  -> 0110`, "這題只練位元推理，不混入 if。AND、OR、XOR 都是逐位比較；位移則是移動整組位元。常見錯誤是把 `&` 和 `&&` 混在一起，前者處理位元，後者處理 boolean 條件。"],
    ["運算順序預測表", "請先不要執行程式，預測這些運算結果：`2 + 3 * 4`、`(2 + 3) * 4`、`20 - 6 / 2`、`(20 - 6) / 2`、`10 % 4 + 6`。再寫程式印出結果驗證。", "程式思考", 1, ["先做括號，再做乘除餘數，最後做加減。", "沒有括號時，`*`、`/`、`%` 比 `+`、`-` 早。", "驗證時可以每一題用一行 println。"], `System.out.println(2 + 3 * 4);       // 14
System.out.println((2 + 3) * 4);     // 20
System.out.println(20 - 6 / 2);      // 17
System.out.println((20 - 6) / 2);    // 7
System.out.println(10 % 4 + 6);      // 8`, "本題目標是看出括號如何改變運算順序，不是重新設計計算器。常見錯誤是從左到右一路算到底，忽略乘除餘數優先於加減。"],
    ["資料轉型觀察", "觀察四個需求：把 int 存進 double、把 3.99 轉成 int、把字元 'A' 轉成數字、讓 10 / 4 得到小數結果。請寫出程式並預測每個輸出。", "程式思考", 2, ["int 放到 double 會自動轉型。", "double 轉 int 需要明確轉型，而且小數會被截掉。", "整數除法想得到小數，至少其中一邊要是 double。"], `int count = 5;
double countAsDouble = count;

int price = (int) 3.99;
int code = (int) 'A';
double result = 10 / 4.0;

System.out.println(countAsDouble); // 5.0
System.out.println(price);         // 3
System.out.println(code);          // 65
System.out.println(result);        // 2.5`, "型別轉換不是四捨五入，而是依規則改變資料型態。`(int) 3.99` 會截去小數；`10 / 4.0` 因為其中一邊是 double，所以得到小數除法。常見錯誤是以為 `(int)` 會幫忙四捨五入。"],
    ["計數與簡短結果標籤", "活動報名系統需要記錄人數變化：先有 29 人，來 1 人，離開 1 人，再來 1 人。接著根據目前人數是否達到 30，產生文字「滿班」或「可報名」。", "日常生活情境", 2, ["人數每次加減 1 時，可以用更短的寫法。", "只需要在兩個文字中選一個。", "三元運算子適合產生簡短結果，不適合塞入複雜流程。"], `int students = 29;

students++;
students--;
students++;

String status = students >= 30 ? "滿班" : "可報名";

System.out.println(students);
System.out.println(status);`, "這題結合 `++`、`--` 與三元運算子，但仍維持在簡短運算。常見錯誤是把三元運算子拿來寫多步驟流程，導致程式難讀；複雜流程應留給後續條件分支章節。"],
    ["輸入資料收集器", "建立一個互動程式，依序詢問使用者姓名、年齡、目前學習章節，最後輸出一段完整句子：`你好 ___，你今年 ___ 歲，目前正在學 ___。`", "日常生活情境", 2, ["要先建立可以讀取鍵盤輸入的物件。", "文字適合讀成 String，年齡適合讀成 int。", "讀完資料後，再組合成一句輸出。"], `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("姓名：");
        String name = sc.nextLine();

        System.out.print("年齡：");
        int age = sc.nextInt();
        sc.nextLine();

        System.out.print("章節：");
        String chapter = sc.nextLine();

        System.out.println("你好 " + name + "，你今年 " + age + " 歲，目前正在學 " + chapter + "。");
    }
}`, "本題只練 Scanner 的基本輸入與輸出組合。`nextInt()` 後加一行 `nextLine()` 是為了吃掉換行，避免下一次讀文字時直接讀到空字串。常見錯誤是把所有輸入都用 `nextInt()`，或忘記匯入 `java.util.Scanner`。"]
  ],
  5: [
    ["電影票價計算", "根據年齡與是否為會員計算電影票價，兒童、成人、敬老票不同，會員再折扣。", "日常生活情境", 3, ["先決定基本票價。", "再處理會員折扣。", "年齡區間建議由特殊區間開始判斷。"], `int age = 70;
boolean member = true;
int price;

if (age < 12) {
    price = 180;
} else if (age >= 65) {
    price = 160;
} else {
    price = 300;
}

if (member) {
    price = price - 30;
}
System.out.println("票價：" + price);`, "這題要拆成兩階段：先算基本票價，再套用會員規則。常見錯誤是把所有條件混在一起，導致某些年齡沒有被涵蓋。也可改用方法封裝票價計算。"],
    ["閏年判斷", "判斷某一年是否為閏年，輸出「閏年」或「平年」。", "小演算法", 3, ["閏年規則不只是能被 4 整除。", "能被 100 整除通常不是閏年。", "能被 400 整除又是閏年。"], `int year = 2024;
boolean leap = (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
System.out.println(leap ? "閏年" : "平年");`, "這題訓練複合條件。先處理 400，再處理 4 與 100 的關係。常見錯誤是只判斷 year % 4 == 0。"],
    ["簡易 ATM 選單", "設計提款、存款、查詢餘額的判斷流程，根據使用者選擇輸出對應結果。", "小型模擬", 3, ["先定義選項代碼。", "固定選項可用多條件或 switch。", "提款時要檢查餘額是否足夠。"], `int choice = 2;
int balance = 1000;
int amount = 300;

switch (choice) {
    case 1:
        System.out.println("餘額：" + balance);
        break;
    case 2:
        System.out.println(amount <= balance ? "提款成功" : "餘額不足");
        break;
    case 3:
        System.out.println("存款成功");
        break;
    default:
        System.out.println("選項錯誤");
}`, "這題讓學生自己判斷分支結構。固定選單適合 switch，提款規則需要額外判斷。常見錯誤是忘記 break 造成貫穿。"]
  ],
  6: [
    ["星號金字塔", "輸入層數，輸出置中的星號金字塔。", "小演算法", 4, ["每一列有空白和星號。", "第 i 列星號數通常是 2*i-1。", "外層控制列，內層分別處理空白與星號。"], `int n = 5;
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}`, "這題不是單純跑迴圈，而是把圖形拆成列、空白、星號三部分。常見錯誤是只印星號沒有處理空白。"],
    ["質數檢查器", "判斷一個整數是否為質數，並輸出結果。", "小演算法", 3, ["質數只能被 1 和自己整除。", "從 2 檢查到 n - 1。", "找到任何整除數就可以提前停止。"], `int n = 17;
boolean prime = n > 1;
for (int i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}
System.out.println(prime ? "質數" : "不是質數");`, "這題訓練迴圈與旗標變數。常見錯誤是沒有處理 1，或找到因數後仍繼續跑。可優化為檢查到平方根。"],
    ["費氏數列產生器", "輸出前 n 個費氏數列數字。", "小演算法", 3, ["每一項來自前兩項相加。", "需要保存前兩個數。", "每次輸出後更新兩個變數。"], `int n = 8;
int a = 0, b = 1;
for (int i = 1; i <= n; i++) {
    System.out.print(a + " ");
    int next = a + b;
    a = b;
    b = next;
}`, "這題重點是狀態更新。不是每次從頭算，而是保存前兩項。常見錯誤是更新順序錯，導致資料被覆蓋。"]
  ],
  7: [
    ["成績分析器", "給一組成績，輸出最高分、最低分、平均分數。", "陣列分析", 3, ["先用第一筆資料初始化最大最小。", "跑過每一筆成績。", "同時累加總分並更新 max/min。"], `int[] scores = {82, 95, 61, 77, 88};
int max = scores[0], min = scores[0], total = 0;
for (int score : scores) {
    if (score > max) max = score;
    if (score < min) min = score;
    total += score;
}
System.out.println("最高：" + max);
System.out.println("最低：" + min);
System.out.println("平均：" + (double) total / scores.length);`, "這題把陣列當成資料集合分析。常見錯誤是 max 初始為 0，遇到負數資料會錯。"],
    ["排行榜排序", "給定玩家分數，將分數由高到低排序並輸出名次。", "陣列分析", 4, ["需要比較並交換資料。", "可以用氣泡排序概念。", "外層控制回合，內層比較相鄰元素。"], `int[] scores = {1200, 900, 1500, 700};
for (int i = 0; i < scores.length - 1; i++) {
    for (int j = 0; j < scores.length - 1 - i; j++) {
        if (scores[j] < scores[j + 1]) {
            int temp = scores[j];
            scores[j] = scores[j + 1];
            scores[j + 1] = temp;
        }
    }
}
for (int i = 0; i < scores.length; i++) {
    System.out.println((i + 1) + " 名：" + scores[i]);
}`, "這題需要思考排序流程，不只是讀取陣列。常見錯誤是交換時少了暫存變數。其他寫法可使用 Arrays.sort 後反向輸出。"],
    ["二維座位搜尋", "在教室座位表中搜尋某個學生座號，輸出所在列與欄。", "陣列分析", 3, ["座位表適合用二維陣列。", "外層找列，內層找欄。", "找到後記錄位置或直接輸出。"], `int[][] seats = {
    {101, 102, 103},
    {201, 202, 203}
};
int target = 202;
for (int r = 0; r < seats.length; r++) {
    for (int c = 0; c < seats[r].length; c++) {
        if (seats[r][c] == target) {
            System.out.println("第 " + r + " 列，第 " + c + " 欄");
        }
    }
}`, "這題練習二維陣列的座標概念。常見錯誤是把 rows 和 columns 的 length 混用。"]
  ],
  8: [
    ["學生類別模型", "設計 Student 類別，能保存姓名、分數，並輸出是否及格。", "日常生活情境", 3, ["類別放資料與行為。", "分數是屬性，判斷及格是方法。", "建立多個物件測試不同學生。"], `class Student {
    String name;
    int score;

    void showResult() {
        System.out.println(name + "：" + (score >= 60 ? "及格" : "不及格"));
    }
}`, "這題把資料和行為放在同一個類別中。常見錯誤是只建立變數，沒有把行為封裝成方法。"],
    ["銀行帳戶物件", "設計 BankAccount 類別，能存款、提款、顯示餘額。", "小型模擬", 3, ["帳戶需要 balance。", "存款和提款是方法。", "提款前要判斷餘額。"], `class BankAccount {
    int balance;

    void deposit(int amount) {
        balance += amount;
    }

    void withdraw(int amount) {
        if (amount <= balance) balance -= amount;
    }
}`, "這題訓練把操作封裝在物件裡。常見錯誤是讓外部直接改 balance，後續封裝章會改善。"],
    ["寵物系統", "設計 Pet 類別，包含名稱、種類，並能依種類發出不同叫聲。", "小型模擬", 2, ["屬性保存名稱與種類。", "方法中可根據種類輸出。", "先做 Dog / Cat 兩種即可。"], `class Pet {
    String name;
    String type;

    void speak() {
        if (type.equals("dog")) System.out.println(name + "：汪");
        else if (type.equals("cat")) System.out.println(name + "：喵");
        else System.out.println(name + "：...");
    }
}`, "這題連接字串比較與方法。常見錯誤是在 Java 用 == 比較 String 內容。"]
  ],
  9: [
    ["會員建立流程", "建立 Member 類別，建立物件時就必須給姓名、等級與點數。", "日常生活情境", 3, ["使用 Constructor 初始化資料。", "參數名稱可和屬性相同。", "用 this 區分屬性與參數。"], `class Member {
    private String name;
    private String level;
    private int points;

    Member(String name, String level, int points) {
        this.name = name;
        this.level = level;
        this.points = Math.max(points, 0);
    }
}`, "這題重點是物件一建立就處於合理狀態。常見錯誤是寫 void Member，這不是 Constructor。"],
    ["商品初始化檢查", "建立 Product 類別，建構時給名稱與價格，價格不可小於 0。", "日常生活情境", 3, ["建構方法可以呼叫 setter。", "setter 負責驗證資料。", "private 欄位避免外部亂改。"], `class Product {
    private String name;
    private double price;

    Product(String name, double price) {
        this.name = name;
        setPrice(price);
    }

    void setPrice(double price) {
        if (price >= 0) this.price = price;
    }
}`, "這題結合 Constructor 與封裝。常見錯誤是 Constructor 檢查一次，但 setter 不檢查，之後仍可塞入錯誤資料。"],
    ["帳戶編號統計", "每建立一個帳戶，自動累計帳戶數量，並提供查詢總數功能。", "小型模擬", 3, ["所有帳戶共享同一個計數。", "共享資料適合 static。", "Constructor 中增加計數。"], `class Account {
    static int count = 0;
    String owner;

    Account(String owner) {
        this.owner = owner;
        count++;
    }
}`, "這題區分物件成員和類別成員。owner 每個物件不同，count 所有物件共享。"]
  ],
  10: [
    ["密碼強度檢查", "檢查密碼是否至少 8 碼，且同時包含英文字母與數字。", "字串處理", 3, ["先檢查長度。", "逐字檢查是否有字母與數字。", "兩個條件都成立才通過。"], `String password = "java2026";
boolean hasLetter = false, hasDigit = false;
for (int i = 0; i < password.length(); i++) {
    char ch = password.charAt(i);
    if (Character.isLetter(ch)) hasLetter = true;
    if (Character.isDigit(ch)) hasDigit = true;
}
System.out.println(password.length() >= 8 && hasLetter && hasDigit);`, "這題訓練字串走訪。常見錯誤是只檢查長度，忽略內容規則。也可使用 Regex 完成。"],
    ["Email 格式檢查", "檢查一段文字是否看起來像 Email：包含 @，且 @ 後面有點號。", "字串處理", 2, ["找 @ 的位置。", "找最後一個點號的位置。", "點號必須在 @ 後面。"], `String email = "test@example.com";
int at = email.indexOf("@");
int dot = email.lastIndexOf(".");
boolean ok = at > 0 && dot > at + 1 && dot < email.length() - 1;
System.out.println(ok);`, "這題用 indexOf 轉成格式規則。常見錯誤是只判斷 contains('@')，會接受不完整格式。"],
    ["回文判斷", "判斷一段文字正著讀和反著讀是否相同。", "字串處理", 3, ["可以用 StringBuilder 反轉。", "也可以從頭尾逐字比較。", "比較內容用 equals。"], `String text = "level";
String reversed = new StringBuilder(text).reverse().toString();
System.out.println(text.equals(reversed));`, "這題讓學生思考字串轉換。常見錯誤是用 == 比較字串內容。"]
  ],
  11: [
    ["員工薪資繼承", "設計 Employee、Engineer、Sales，讓不同員工能輸出不同獎金說明。", "日常生活情境", 3, ["共同欄位放父類別。", "不同輸出可覆寫方法。", "用父類別參考測試不同子類別。"], `class Employee {
    String name;
    void bonus() { System.out.println("一般獎金"); }
}
class Engineer extends Employee {
    @Override void bonus() { System.out.println("專案獎金"); }
}`, "這題練習繼承和覆寫。常見錯誤是把每個類別重複寫共同欄位。"],
    ["動物聲音多型", "建立一組動物物件，逐一呼叫發出聲音的方法，讓不同動物有不同輸出。", "小型模擬", 3, ["共同型別可放在陣列。", "實際物件決定覆寫結果。", "父類別參考可指向子類別物件。"], `Animal[] animals = {new Dog(), new Cat()};
for (Animal animal : animals) {
    animal.speak();
}`, "這題重點是多型：同一行 animal.speak() 會因實際物件不同而有不同結果。"],
    ["不定參數加總", "設計一個方法，可接收任意數量整數並回傳總和。", "小演算法", 2, ["參數數量不固定。", "可使用 varargs。", "方法內把 nums 當陣列走訪。"], `static int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`, "這題把陣列走訪概念延伸到 varargs。常見錯誤是 varargs 參數後面再放其他一般參數。"]
  ],
  12: [
    ["形狀面積系統", "設計可擴充的 Shape 結構，讓 Circle 與 Rectangle 都能計算面積。", "小型模擬", 4, ["共同規格放在抽象類別或介面。", "不同形狀各自實作計算。", "用同一型別陣列保存不同形狀。"], `abstract class Shape {
    abstract double area();
}
class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}`, "這題訓練抽象化。常見錯誤是讓 Shape 寫死某一種形狀公式，導致無法擴充。"],
    ["付款能力介面", "設計 Payable 介面，讓 CreditCard 與 LinePay 都能執行付款。", "日常生活情境", 3, ["付款是一種能力。", "不同類別可以共享同一介面。", "呼叫端只需要知道 Payable。"], `interface Payable {
    void pay(int amount);
}
class CreditCard implements Payable {
    public void pay(int amount) {
        System.out.println("信用卡付款：" + amount);
    }
}`, "這題讓學生判斷何時用介面。付款能力可由不同類別實作，不一定有共同父類別。"],
    ["按鈕監聽器", "設計 Button 與 ClickListener，讓按鈕被 click 時通知外部程式。", "小型模擬", 4, ["Button 保存 listener。", "click 時呼叫 listener 的方法。", "可用匿名內部類別提供行為。"], `interface ClickListener {
    void onClick();
}
class Button {
    ClickListener listener;
    void setListener(ClickListener listener) { this.listener = listener; }
    void click() { if (listener != null) listener.onClick(); }
}`, "這題把介面當成物件溝通橋樑。常見錯誤是 Button 直接寫死點擊行為，導致不能重用。"]
  ],
  13: [
    ["校園套件規劃", "規劃 school、animal、utility 三個套件，決定哪些類別放在哪裡，並寫出 package 宣告。", "程式思考", 2, ["先依功能分類。", "package 名稱通常小寫。", "類別檔案位置要對應 package。"], `package school;
public class Student { }

package utility;
public class ScoreTool { }`, "這題訓練專案組織，不只是寫 package。常見錯誤是 package 名稱和資料夾不一致。"],
    ["重名類別處理", "專案中同時有 school.Student 與 company.Student，請設計一段程式避免混淆。", "程式思考", 3, ["Java 無法 import 兩個同名類別後都用短名。", "其中一個可使用完整名稱。", "完整名稱包含 package。"], `import school.Student;

Student s1 = new Student();
company.Student s2 = new company.Student();`, "這題訓練完整類別名稱。常見錯誤是同時 import 兩個 Student，導致名稱衝突。"],
    ["存取權限測試", "設計兩個不同 package 的類別，驗證 public、protected、default、private 哪些能被存取。", "程式思考", 3, ["先畫表格。", "default 只限同 package。", "private 只限同類別。"], "請建立 access.A 與 other.B，分別嘗試讀取四種欄位，觀察編譯錯誤。", "這題的重點是用實驗理解規則。完整解答不是背表格，而是能根據 package 與繼承關係判斷存取權限。"]
  ],
  14: [
    ["安全除法工具", "設計除法計算，使用者輸入除數為 0 時不能讓程式中斷。", "小型模擬", 2, ["危險程式放在 try。", "錯誤發生時 catch。", "給使用者看得懂的訊息。"], `try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("除數不可為 0");
}`, "這題訓練把可能出錯的程式隔離。常見錯誤是 catch Exception 但訊息太籠統。"],
    ["分數驗證器", "設計方法驗證分數必須介於 0 到 100，不合法時主動拋出例外。", "小型模擬", 3, ["驗證失敗時主動丟出錯誤。", "方法宣告可能需要 throws。", "呼叫端負責處理錯誤。"], `static void validateScore(int score) {
    if (score < 0 || score > 100) {
        throw new IllegalArgumentException("分數超出範圍");
    }
}`, "這題不是等錯誤發生，而是主動保護資料。常見錯誤是只印錯誤訊息但仍讓不合法資料繼續使用。"],
    ["ATM 餘額不足例外", "建立提款流程，提款金額超過餘額時拋出自訂例外。", "小型模擬", 4, ["先建立自訂 Exception。", "提款方法檢查餘額。", "呼叫端 catch 並顯示訊息。"], `class BalanceException extends Exception {
    BalanceException(String message) { super(message); }
}`, "這題是例外處理 Mini Project 的核心。自訂例外讓錯誤意義更明確。常見錯誤是用 RuntimeException 逃避處理，初學階段建議先練 checked exception。"]
  ],
  15: [
    ["雙任務倒數", "建立兩個同時倒數的任務，觀察輸出交錯情況。", "小型模擬", 3, ["每個任務放在不同 Thread。", "啟動用 start。", "sleep 可以讓結果更明顯。"], `Thread a = new Thread(() -> {
    for (int i = 5; i >= 1; i--) System.out.println("A:" + i);
});
Thread b = new Thread(() -> {
    for (int i = 5; i >= 1; i--) System.out.println("B:" + i);
});
a.start();
b.start();`, "這題用輸出交錯理解多執行緒。常見錯誤是呼叫 run 而不是 start。"],
    ["同步提款", "兩個人同時從同一帳戶提款，請避免餘額被扣錯。", "小型模擬", 4, ["共享資料是 balance。", "檢查餘額和扣款要一起保護。", "可以使用 synchronized。"], `synchronized void withdraw(int amount) {
    if (amount <= balance) {
        balance -= amount;
    }
}`, "這題訓練 race condition。常見錯誤是只同步扣款，不同步餘額檢查。"],
    ["計時器通知", "設計倒數計時器，時間到後通知外部 listener。", "小型模擬", 4, ["計時工作放在 Thread。", "Listener 定義 timeUp。", "倒數結束後呼叫 listener。"], `interface TimerListener {
    void timeUp();
}`, "這題結合介面與多執行緒。常見錯誤是讓 Timer 寫死通知內容，導致無法重用。"]
  ],
  16: [
    ["學生成績存檔", "把多位學生姓名與分數寫入文字檔，每行一筆資料。", "小型模擬", 3, ["文字資料適合 Writer。", "每行可用逗號分隔。", "try-with-resources 可自動關閉。"], `try (BufferedWriter bw = new BufferedWriter(new FileWriter("students.csv"))) {
    bw.write("Amy,90");
    bw.newLine();
    bw.write("Ben,75");
}`, "這題把資料轉成檔案格式。常見錯誤是忘記換行，導致資料黏在一起。"],
    ["讀檔計算平均", "讀取學生成績檔，計算總分、平均、最高與最低。", "資料分析", 4, ["逐行 readLine。", "split 取得姓名與分數。", "分數字串需轉成 int。"], `String line = "Amy,90";
String[] parts = line.split(",");
int score = Integer.parseInt(parts[1]);`, "這題結合檔案、字串與數字轉換。常見錯誤是沒有處理空檔或格式錯誤。"],
    ["物件序列化保存", "將 Student 物件寫入檔案，再讀回來確認資料。", "小型模擬", 4, ["類別需要 Serializable。", "寫入用 ObjectOutputStream。", "讀取後需要轉型。"], `class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
}`, "這題理解物件讀寫流程。常見錯誤是忘記 implements Serializable。"]
  ],
  17: [
    ["樂透號碼產生器", "產生 6 個不重複的 1 到 49 號碼並排序。", "小演算法", 3, ["不重複適合 Set。", "亂數可用 Random。", "排序可轉成 List 後 sort。"], `HashSet<Integer> numbers = new HashSet<>();
Random random = new Random();
while (numbers.size() < 6) {
    numbers.add(random.nextInt(49) + 1);
}`, "這題讓標準類別庫解決常見問題。常見錯誤是用陣列手動檢查重複，容易寫錯。"],
    ["英漢字典", "建立簡易字典，輸入英文單字後輸出中文意思。", "日常生活情境", 2, ["Key 對 Value 適合 Map。", "put 新增資料。", "get 查詢資料。"], `HashMap<String, String> dict = new HashMap<>();
dict.put("apple", "蘋果");
System.out.println(dict.get("apple"));`, "這題理解 HashMap 的查表能力。常見錯誤是用兩個陣列分別保存英文和中文，維護困難。"],
    ["距離計算工具", "給兩個座標點，計算兩點距離。", "數學運算", 2, ["使用平方、相加、開根號。", "Math.pow 可以算平方。", "Math.sqrt 可以開根號。"], `double dx = x2 - x1;
double dy = y2 - y1;
double distance = Math.sqrt(dx * dx + dy * dy);`, "這題訓練使用 Math 類別。常見錯誤是忘記先平方差值。"]
  ],
  18: [
    ["GUI 計算機草圖", "設計一個有輸入框、按鈕、結果標籤的簡易計算機視窗。", "小型模擬", 3, ["先列元件。", "再決定 Layout。", "最後處理按鈕事件。"], `JFrame frame = new JFrame("Calculator");
JTextField input = new JTextField(10);
JButton button = new JButton("計算");
JLabel result = new JLabel("結果");`, "這題重點是 GUI 拆解能力。常見錯誤是一開始就寫事件，卻還沒規劃元件。"],
    ["按鈕計數器", "建立一個視窗，每按一次按鈕，畫面上的數字加一。", "小型模擬", 3, ["需要保存 count。", "按鈕事件中更新 count。", "更新 JLabel 顯示。"], `button.addActionListener(e -> {
    count++;
    label.setText("次數：" + count);
});`, "這題是 GUI 事件處理基本功。常見錯誤是只改變變數，沒有更新畫面元件。"],
    ["小畫板圖形", "建立 JPanel，畫出房子、太陽或棋盤其中一種圖形。", "小型模擬", 4, ["繪圖放在 paintComponent。", "先呼叫 super.paintComponent。", "用 drawRect、fillOval、drawLine 組合圖形。"], `protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.drawRect(50, 80, 100, 80);
    g.drawLine(50, 80, 100, 30);
    g.drawLine(100, 30, 150, 80);
}`, "這題訓練把圖形拆成基本形狀。常見錯誤是直接在 main 裡畫圖，而不是覆寫 paintComponent。"]
  ]
};

const MINI_PROJECTS = {
  1: ["Java 應用提案", "設計一份 Java 可製作作品提案，包含目標使用者、功能、Java 負責的部分。"],
  2: ["環境建置檢查器", "整理自己的 Java 開發環境文件，包含安裝、驗證、常見錯誤排除。"],
  3: ["個人資料系統", "建立一個個人資料系統，先規劃每一筆資料的變數名稱與型態，再輸出一張可閱讀的個人資料卡。請至少包含姓名、年齡、身高、是否為學生、目前學習目標。"],
  4: ["BMI + 折扣計算器", "製作一個生活運算工具：輸入或設定身高、體重、商品單價、數量與折扣率，輸出 BMI、小計、折扣後金額，並在說明中標註哪些地方需要注意整數除法與型別轉換。"],
  5: ["簡易 ATM", "設計查詢、存款、提款與錯誤選項處理流程。"],
  6: ["猜數字遊戲", "製作可重複猜測、提示太大太小、猜中結束的遊戲。"],
  7: ["成績管理", "使用陣列完成輸入成績、最高最低、平均、搜尋與排序。"],
  8: ["圖書館管理", "設計 Book 與 Library 類別，能新增書籍並顯示館藏。"],
  9: ["會員與商品初始化", "設計 Member、Product、Account，使用 Constructor、this、private、static。"],
  10: ["文字分析工具", "分析一段文字的字數、關鍵字、是否回文、Email 或密碼格式。"],
  11: ["員工管理繼承系統", "設計 Employee 子類別並用多型輸出不同薪資或獎金策略。"],
  12: ["圖形繪製架構", "用抽象類別或介面設計 Shape 系統，支援多種圖形。"],
  13: ["套件化旗幟系統", "把多個 Flag 類別整理到 package，並在 Main 中 import 使用。"],
  14: ["ATM 錯誤處理", "提款、存款、查詢流程加入自訂例外與 try/catch。"],
  15: ["倒數計時器", "用 Thread / Runnable 製作倒數並在結束時通知 Listener。"],
  16: ["成績檔案系統", "將學生資料寫入檔案，再讀取並計算統計。"],
  17: ["標準類別庫工具箱", "用 Math、HashSet、HashMap 完成樂透、距離、字典工具。"],
  18: ["GUI 計算機", "用 Swing 製作可輸入數字並顯示計算結果的桌面程式。"]
};

function refinedChallenge(title, question, category, difficulty, hints, solution, explanation) {
  return [title, question, category, difficulty, hints, solution, explanation];
}

function refinedQuiz(question, options, answer, explanation) {
  return { question, options, answer, explanation };
}

const REFINED_CHALLENGE_BANK = {
  5: [
    refinedChallenge("流程情境分類", "閱讀三個需求：固定依序印出報到流程、依年齡顯示票種、依餐點代號顯示名稱。請判斷每個需求屬於順序流程還是條件分支，並說明原因。", "程式思考", 1, ["先看流程是否一定每一步都執行。", "只要需要根據條件選路，就不是單純順序。", "用「需求 -> 流程類型 -> 原因」整理。"], `報到流程：順序結構
票種判斷：條件分支
餐點代號：條件分支`, "本節重點是流程控制的目的，不是寫很多程式。條件分支解決的是「某些情況才做某件事」。"),
    refinedChallenge("成績等第判斷", "輸入一位學生分數，輸出 A、B、C、D、F 五種等第。請自行設計分數區間與判斷順序。", "日常生活情境", 3, ["先把分數區間列清楚。", "條件有先後順序，建議從最高分開始。", "最後要處理最低區間。"], `int score = 82;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else if (score >= 60) {
    System.out.println("D");
} else {
    System.out.println("F");
}`, "這題不是把及格範例換變數，而是把多個區間翻成互斥分支。常見錯誤是先判斷 `score >= 60`，導致高分也先落入 D。"),
    refinedChallenge("季節查詢表", "使用者輸入 1 到 12 的月份，程式輸出春、夏、秋、冬；若不是 1 到 12，輸出月份錯誤。", "日常生活情境", 2, ["固定代號選擇適合多路分支。", "多個 case 可以共用同一段輸出。", "記得處理不在範圍內的資料。"], `int month = 4;

switch (month) {
    case 3: case 4: case 5:
        System.out.println("春季");
        break;
    case 6: case 7: case 8:
        System.out.println("夏季");
        break;
    case 9: case 10: case 11:
        System.out.println("秋季");
        break;
    case 12: case 1: case 2:
        System.out.println("冬季");
        break;
    default:
        System.out.println("月份錯誤");
}`, "這題練固定值分類與 `break`。常見錯誤是忘記 `break` 造成貫穿。"),
    refinedChallenge("電影售票規則整合", "設計電影售票系統：依年齡給基本票價，再依會員狀態折抵。請輸出票種、是否折扣、最後金額。", "小型模擬", 4, ["先決定基本票價與票種。", "再處理會員折扣，不要把所有條件塞成一行。", "用不同測試資料檢查兒童、成人、敬老與會員。"], `int age = 68;
boolean member = true;
int price;
String type;

if (age < 12) {
    type = "兒童票";
    price = 180;
} else if (age >= 65) {
    type = "敬老票";
    price = 200;
} else {
    type = "成人票";
    price = 300;
}

if (member) {
    price -= 30;
}

System.out.println(type + "：" + price);`, "綜合題要拆流程：先票種，再折扣。其他寫法可把折扣規則放到最後，保持可讀性。")
  ],
  6: [
    refinedChallenge("重複輸出規劃", "活動海報需要印出 1 到 20 的座號，每個座號一行。請寫出能自動產生座號的程式。", "日常生活情境", 1, ["觀察起點、終點與每次增加量。", "座號每次加 1。", "先確認是否包含 20。"], `for (int seat = 1; seat <= 20; seat++) {
    System.out.println("座號 " + seat);
}`, "本節只練固定次數重複。常見錯誤是條件寫成 `< 20`，少印最後一個。"),
    refinedChallenge("密碼嘗試流程", "使用者可以一直輸入密碼，直到輸入正確密碼才顯示登入成功。請設計流程。", "小型模擬", 2, ["次數不一定，重點是條件何時停止。", "需要保存目前輸入。", "練習時可先用固定字串模擬輸入。"], `String input = "1234";
String password = "java";

while (!input.equals(password)) {
    System.out.println("密碼錯誤，請再試一次");
    input = "java";
}

System.out.println("登入成功");`, "這題練不知道次數的重複。常見錯誤是忘記在迴圈內改變條件，造成無限迴圈。"),
    refinedChallenge("至少顯示一次選單", "設計一個選單，無論使用者之後選什麼，畫面一開始至少要顯示一次選項。", "程式思考", 2, ["需求的關鍵是至少一次。", "先執行，再判斷是否繼續。", "選單常見於互動程式。"], `int choice;

do {
    System.out.println("1. 開始");
    System.out.println("2. 離開");
    choice = 2;
} while (choice != 2);`, "這題刻意不做大量功能，只分辨 do-while 與 while 的差異。"),
    refinedChallenge("星號階梯", "輸入層數 n，印出由 1 顆到 n 顆星號的階梯圖形。", "小演算法", 3, ["外層決定第幾列。", "內層決定該列印幾顆。", "每列結束要換行。"], `int n = 5;
for (int row = 1; row <= n; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("*");
    }
    System.out.println();
}`, "巢狀迴圈的關鍵是把圖形拆成列與欄。常見錯誤是忘記內層結束後換行。"),
    refinedChallenge("略過與停止規則", "印出 1 到 30 中的偶數；如果數字大於 20 就停止，不再往後印。", "小演算法", 2, ["奇數可以略過本次。", "超過 20 可以提前結束整個流程。", "先判斷停止，再判斷是否略過。"], `for (int i = 1; i <= 30; i++) {
    if (i > 20) {
        break;
    }
    if (i % 2 != 0) {
        continue;
    }
    System.out.println(i);
}`, "`continue` 是略過本次，`break` 是結束迴圈。兩者目的完全不同。"),
    refinedChallenge("質數檢查器", "輸入一個整數，判斷它是否只能被 1 和自己整除。請輸出判斷結果。", "小演算法", 3, ["先排除小於 2。", "檢查 2 到 n - 1 是否能整除。", "找到一個因數就可以停止。"], `int n = 17;
boolean prime = n >= 2;

for (int i = 2; i < n; i++) {
    if (n % i == 0) {
        prime = false;
        break;
    }
}

System.out.println(prime ? "質數" : "不是質數");`, "這題整合迴圈與停止條件。常見錯誤是沒有處理 1，或找到因數後仍繼續跑。")
  ],
  7: [
    refinedChallenge("成績盒子判讀", "有一排成績資料，請指出第一筆、最後一筆、資料總數，並說明為什麼最後索引不是 length。", "程式思考", 1, ["索引從 0 開始。", "元素數量是 length。", "最後索引是 length - 1。"], `int[] scores = {80, 75, 90, 60, 88};
System.out.println(scores[0]);
System.out.println(scores[scores.length - 1]);
System.out.println(scores.length);`, "本節只練陣列索引概念。常見錯誤是用 `scores[length]` 造成越界。"),
    refinedChallenge("五筆分數統計", "保存五位學生分數，計算總分、平均與最高分。", "陣列分析", 2, ["總分需要走訪所有元素。", "最高分可先假設第一筆。", "平均要注意小數結果。"], `int[] scores = {70, 88, 92, 65, 81};
int sum = 0;
int max = scores[0];

for (int score : scores) {
    sum += score;
    if (score > max) max = score;
}

System.out.println("平均：" + (sum / (double) scores.length));
System.out.println("最高：" + max);`, "這題練陣列配置後的走訪與統計，不是只印出元素。"),
    refinedChallenge("座位表搜尋", "二維座位表中保存學生姓名，請找出指定姓名位於第幾列第幾欄；找不到就輸出未找到。", "陣列分析", 3, ["二維陣列需要列與欄。", "外層走列，內層走欄。", "找到後可以記錄位置。"], `String[][] seats = {
    {"Amy", "Ben"},
    {"Cindy", "David"}
};
String target = "David";

for (int r = 0; r < seats.length; r++) {
    for (int c = 0; c < seats[r].length; c++) {
        if (seats[r][c].equals(target)) {
            System.out.println(r + "," + c);
        }
    }
}`, "二維陣列適合表格資料。常見錯誤是兩層迴圈都用同一個長度。"),
    refinedChallenge("共享陣列觀察", "讓 arr2 指向 arr1，修改 arr2 的第一個元素，觀察 arr1 是否也改變，並解釋原因。", "程式思考", 2, ["陣列是參照型別。", "指定給另一個變數不是複製整份資料。", "兩個變數可能指向同一個陣列。"], `int[] arr1 = {1, 2, 3};
int[] arr2 = arr1;

arr2[0] = 99;
System.out.println(arr1[0]);`, "這題練參照概念。常見錯誤是以為 `arr2 = arr1` 會產生新陣列。"),
    refinedChallenge("命令列參數報表", "程式啟動時可能收到多個參數，請印出參數數量與每一個參數。若沒有參數，輸出提示。", "程式思考", 2, ["args 是 String 陣列。", "先檢查 length。", "再走訪每個元素。"], `if (args.length == 0) {
    System.out.println("沒有參數");
} else {
    System.out.println("參數數量：" + args.length);
    for (String arg : args) {
        System.out.println(arg);
    }
}`, "這題練 `String[] args` 的陣列本質。常見錯誤是直接讀 `args[0]`，但沒有參數時會越界。"),
    refinedChallenge("排行榜分析", "給定一組分數，找出最高分、最低分、平均，並輸出高於平均的分數。", "陣列分析", 3, ["先完成總分、最高、最低。", "平均算出後，再走訪一次找高於平均。", "不要在還沒知道平均時判斷高於平均。"], `int[] scores = {92, 77, 84, 60, 95};
int sum = 0, max = scores[0], min = scores[0];
for (int s : scores) {
    sum += s;
    if (s > max) max = s;
    if (s < min) min = s;
}
double avg = sum / (double) scores.length;
for (int s : scores) {
    if (s > avg) System.out.println(s);
}`, "綜合題要分階段處理：先統計，再分析。常見錯誤是把所有事情塞在同一個迴圈而邏輯混亂。")
  ],
  8: [
    refinedChallenge("類別與物件辨識", "觀察「食譜、某盤咖哩、會員表單、Jimmy 的會員資料」四個項目，判斷哪些比較像類別，哪些比較像物件。", "程式思考", 1, ["類別像藍圖或分類。", "物件是實際存在的一個個體。", "用「藍圖 -> 實體」整理。"], `類別：食譜、會員表單
物件：某盤咖哩、Jimmy 的會員資料`, "本節先建立 OOP 語感，不急著寫大量程式。"),
    refinedChallenge("商品資料模型", "設計一個 Product 類別，能保存商品名稱、價格、庫存，並建立兩個商品物件輸出資料。", "日常生活情境", 2, ["先找屬性。", "每個商品物件有自己的資料。", "輸出時確認兩個物件不同。"], `class Product {
    String name;
    int price;
    int stock;
}

Product p1 = new Product();
p1.name = "鍵盤";
p1.price = 1200;
p1.stock = 5;`, "這題練類別、屬性與物件，不加入 constructor。常見錯誤是把所有資料都寫成同一個變數。"),
    refinedChallenge("健康計算方法", "建立一個方法，收到身高與體重後回傳 BMI；再建立一個方法輸出健康報告文字。", "數學運算", 3, ["一個方法可以負責計算，另一個負責顯示。", "有回傳值的方法要使用 return。", "方法可以呼叫另一個方法。"], `static double bmi(double weight, double height) {
    return weight / (height * height);
}

static void showReport(String name, double weight, double height) {
    System.out.println(name + " BMI=" + bmi(weight, height));
}`, "本節重點是方法分工、參數與回傳值。常見錯誤是方法算完卻沒有 return。"),
    refinedChallenge("列印工具多載", "建立同名 print 方法，能分別列印文字、整數與文字陣列。", "程式思考", 2, ["方法名稱可以相同。", "參數列表必須不同。", "只有回傳型態不同不算。"], `static void print(String text) {
    System.out.println(text);
}
static void print(int number) {
    System.out.println(number);
}
static void print(String[] items) {
    for (String item : items) System.out.println(item);
}`, "Overloading 的判斷依據是參數列表。常見錯誤是只改回傳型態。"),
    refinedChallenge("圖書館物件模型", "設計 Book 與 Library 的最小版本：Book 保存書名與作者，Library 能顯示一本書的資料。", "小型模擬", 3, ["先設計 Book 的屬性。", "Library 的方法可以接收 Book。", "先完成一筆資料，再擴充多本。"], `class Book {
    String title;
    String author;
}

class Library {
    void show(Book book) {
        System.out.println(book.title + " / " + book.author);
    }
}`, "綜合題練類別合作，不提前加入封裝或繼承。")
  ],
  9: [
    refinedChallenge("會員建立流程", "設計 Member 物件建立時就必須有姓名與等級，建立後直接能輸出會員資料。", "小型模擬", 2, ["建立物件時自動初始化。", "參數名稱與屬性相同時需要分清楚。", "不要建立後再一行一行補資料。"], `class Member {
    String name;
    String level;

    Member(String name, String level) {
        this.name = name;
        this.level = level;
    }
}`, "Constructor 讓物件一出生就有合理狀態。常見錯誤是寫成 `void Member()`。"),
    refinedChallenge("商品價格保護", "設計 Product，價格不能被外部任意改成負數，只能透過方法設定合理價格。", "日常生活情境", 3, ["資料先藏起來。", "外部透過公開方法存取。", "設定前檢查資料。"], `class Product {
    private int price;

    public void setPrice(int price) {
        if (price >= 0) this.price = price;
    }

    public int getPrice() {
        return price;
    }
}`, "封裝的目標是保護資料。常見錯誤是欄位 private 了，卻沒有提供合理的 getter/setter。"),
    refinedChallenge("建立次數統計", "設計 Ticket 類別，每建立一張票，就讓全班共用的票數統計加一。", "小型模擬", 2, ["每個物件各自有資料。", "總數應該屬於類別。", "建立時自動增加。"], `class Ticket {
    static int count = 0;

    Ticket() {
        count++;
    }
}`, "static 成員屬於類別共享，不屬於單一物件。常見錯誤是把 count 寫成一般欄位，導致每個物件都從 0 開始。"),
    refinedChallenge("安全帳戶模型", "建立 Account，建立時給帳號與初始餘額；餘額不能直接修改，提款不可讓餘額變負。", "小型模擬", 4, ["Constructor 負責初始化。", "private 保護餘額。", "提款方法中檢查金額。"], `class Account {
    private String id;
    private int balance;

    Account(String id, int balance) {
        this.id = id;
        this.balance = balance;
    }

    public void withdraw(int amount) {
        if (amount <= balance) balance -= amount;
    }
}`, "綜合題整合 constructor、this、private 與方法規則。")
  ],
  10: [
    refinedChallenge("字串不可變觀察", "建立字串後呼叫 concat，但不把結果存回變數；再觀察原字串是否改變。", "程式思考", 1, ["String 方法常回傳新字串。", "原本的字串不會被直接修改。", "要保存結果就要指定回變數。"], `String text = "Hello";
text.concat(" Java");
System.out.println(text);

text = text.concat(" Java");
System.out.println(text);`, "String immutable 的重點是方法產生新結果。常見錯誤是以為呼叫方法就會改原字串。"),
    refinedChallenge("生日字串擷取", "給定生日字串 `2001-07-15`，取出年份、月份、日期並輸出。", "字串處理", 2, ["觀察每段字元位置。", "substring 的結尾索引不包含。", "也可以思考 split。"], `String birthday = "2001-07-15";
System.out.println(birthday.substring(0, 4));
System.out.println(birthday.substring(5, 7));
System.out.println(birthday.substring(8, 10));`, "這題練索引與 substring，不混入 regex。常見錯誤是結尾索引多抓或少抓。"),
    refinedChallenge("個人資料組字串", "使用可修改的字串工具，把姓名、年齡、城市組合成一段個人資料，再反轉輸出看看效果。", "字串處理", 2, ["大量組合字串可用可變字串物件。", "append 可以連續接資料。", "reverse 會改變內容。"], `StringBuilder sb = new StringBuilder();
sb.append("Jimmy");
sb.append(" / ");
sb.append(25);
sb.append(" / Taipei");
System.out.println(sb.toString());
System.out.println(sb.reverse());`, "StringBuilder 適合需要多次修改的文字。常見錯誤是忘記最後需要 `toString()` 取得字串。"),
    refinedChallenge("密碼格式初檢", "檢查密碼是否至少 8 碼，且只包含英文字母與數字。", "字串處理", 3, ["先想長度，再想格式。", "格式可交給規則表示法。", "不用在本題檢查大小寫種類。"], `String password = "abc12345";
boolean ok = password.length() >= 8 && password.matches("[A-Za-z0-9]+");
System.out.println(ok);`, "Regex 適合格式驗證。常見錯誤是忘記 `+`，導致只檢查一個字元。"),
    refinedChallenge("文字分析工具", "輸入一段文字，輸出長度、是否包含 Java、移除前後空白後的內容，並判斷是否為簡單回文。", "字串處理", 3, ["先 trim。", "contains 可找關鍵字。", "回文可用反轉字串比較。"], `String text = " level ";
String clean = text.trim();
String reversed = new StringBuilder(clean).reverse().toString();

System.out.println(clean.length());
System.out.println(clean.contains("Java"));
System.out.println(clean.equals(reversed));`, "綜合題整合常用 String 與 StringBuilder，但不深入底層。")
  ],
  11: [
    refinedChallenge("共通資料抽取", "Dog、Cat、Bird 都有 name 與 age，請設計一個父類別保存共通資料，讓子類別只放自己的差異。", "程式思考", 2, ["找重複欄位。", "父類別放共通資料。", "子類別用 extends。"], `class Animal {
    String name;
    int age;
}

class Dog extends Animal {
}`, "繼承的目的之一是減少重複。常見錯誤是把所有差異也硬塞進父類別。"),
    refinedChallenge("不同動物叫聲", "讓不同動物面對同一個 speak 呼叫時，輸出不同聲音。", "小型模擬", 3, ["父類別先定義共通方法。", "子類別改寫自己的版本。", "用父類別型別保存子類別物件觀察結果。"], `class Animal { void speak() {} }
class Dog extends Animal {
    @Override void speak() { System.out.println("汪汪"); }
}
Animal a = new Dog();
a.speak();`, "Override 與多型讓同一呼叫有不同實作。常見錯誤是方法參數不同，變成多載而不是覆寫。"),
    refinedChallenge("繼承限制判斷", "閱讀幾個設計：一個類別同時繼承兩個父類別、覆寫 final 方法、存取父類別 private 欄位。請判斷哪些不合法並說明。", "程式思考", 2, ["Java 類別只能單一繼承。", "private 不能直接從子類別存取。", "final 方法不能覆寫。"], `不合法：
- class Dog extends Animal, Pet
- 覆寫 final 方法
- 子類別直接存取父類別 private 欄位`, "本節練限制與設計判斷，不需要寫大型系統。"),
    refinedChallenge("商品 toString", "設計 Product 並覆寫 toString，讓直接輸出物件時看到商品名稱與價格。", "日常生活情境", 2, ["所有類別都繼承 Object。", "println 物件時會用 toString。", "回傳文字要包含有用資訊。"], `class Product {
    String name;
    int price;

    @Override
    public String toString() {
        return name + "：" + price;
    }
}`, "覆寫 Object 方法可讓物件更容易閱讀。常見錯誤是只印出記憶體樣式而不覆寫。"),
    refinedChallenge("彈性加總工具", "設計一個方法可接收任意數量整數並回傳總和；再思考若要接收任意型別應如何顯示。", "小演算法", 3, ["任意數量可用特殊參數形式。", "方法內可當陣列走訪。", "任意型別可用 Object。"], `static int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}

static void show(Object... values) {
    for (Object value : values) System.out.println(value);
}`, "Varargs 適合呼叫端數量不固定的情境。常見錯誤是把 varargs 放在參數列表中間。")
  ],
  12: [
    refinedChallenge("形狀共通規格", "不同形狀都能計算面積，但公式不同。請設計一個不能直接建立的共通類別。", "程式思考", 3, ["共通概念可抽象化。", "面積方法可留給子類別完成。", "共通欄位或一般方法可放在抽象類別。"], `abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double r;
    double area() { return r * r * 3.14; }
}`, "抽象類別適合定義共同規格與部分實作。常見錯誤是嘗試 `new Shape()`。"),
    refinedChallenge("可列印能力", "Invoice、Report、Photo 都需要能列印，但它們不是同一種父類別。請設計共用能力。", "程式思考", 3, ["能力可用介面表示。", "不同類別可實作同一介面。", "方法名稱由介面統一。"], `interface Printable {
    void print();
}

class Report implements Printable {
    public void print() {
        System.out.println("列印報表");
    }
}`, "Interface 適合描述能力。常見錯誤是用繼承硬湊不相關類別。"),
    refinedChallenge("能力介面組合", "設計一個 FlyingRobot，同時具有可移動與可飛行能力，並用介面繼承整理能力規格。", "小型模擬", 3, ["介面可以繼承多個介面。", "實作類別要完成所有抽象方法。", "用能力角度命名介面。"], `interface Movable { void move(); }
interface Flyable { void fly(); }
interface FlyingDevice extends Movable, Flyable {}

class FlyingRobot implements FlyingDevice {
    public void move() {}
    public void fly() {}
}`, "介面繼承整理的是規格，不是物件資料。"),
    refinedChallenge("汽車引擎內部類別", "Car 有一個只屬於 Car 的 Engine，請把 Engine 設計在 Car 裡面並建立使用範例。", "日常生活情境", 2, ["內部類別適合表示附屬關係。", "先建立外部物件。", "再透過外部物件建立內部物件。"], `class Car {
    class Engine {
        void start() { System.out.println("engine start"); }
    }
}

Car car = new Car();
Car.Engine engine = car.new Engine();`, "內部類別強調結構歸屬。常見錯誤是用一般 `new Engine()` 建立成員內部類別。"),
    refinedChallenge("按鈕監聽器模型", "設計 Button 與 ClickListener，按鈕被點擊時通知外部提供的監聽器。", "小型模擬", 4, ["介面描述被通知的方法。", "Button 保存 listener。", "點擊時呼叫 listener。"], `interface ClickListener { void onClick(); }

class Button {
    ClickListener listener;
    void click() {
        if (listener != null) listener.onClick();
    }
}`, "這題整合介面與物件合作，是 GUI 事件概念的前置練習。")
  ],
  13: [
    refinedChallenge("專案資料夾整理", "把 Student、Teacher、Dog、Cat、Calculator 分到合適 package，並畫出資料夾結構。", "程式思考", 1, ["先依功能分類。", "package 名稱通常小寫。", "資料夾結構要對應 package。"], `src
 ├─ school
 │  ├─ Student.java
 │  └─ Teacher.java
 ├─ animal
 │  ├─ Dog.java
 │  └─ Cat.java
 └─ util
    └─ Calculator.java`, "Package 解決檔案越來越多的管理問題。"),
    refinedChallenge("跨套件使用類別", "Main 在 app package，要使用 animal.Dog 與 school.Student。請寫出需要的 import 與使用方式。", "程式思考", 2, ["不同 package 需要 import。", "也可以使用完整名稱。", "避免萬用 import 造成來源不清。"], `package app;

import animal.Dog;
import school.Student;

class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Student student = new Student();
    }
}`, "這題練 import，而不是 package 宣告本身。"),
    refinedChallenge("存取範圍判斷", "判斷 public、protected、default、private 在同 package、不同 package、子類別中哪些可存取。請整理成表格。", "程式思考", 3, ["public 最開放。", "private 只在同類別。", "default 與 package 有密切關係。"], `public：到處可見
protected：同 package 與不同 package 子類別可見
default：同 package 可見
private：同類別可見`, "本節練 package 與存取控制關係，不需要先做複雜專案。"),
    refinedChallenge("旗幟套件設計", "建立 flag package，放入 TaiwanFlag、JapanFlag、USAFlag，Main 匯入並顯示三個旗幟名稱。", "小型模擬", 3, ["每個類別都要宣告 package。", "Main 需要 import。", "先完成一個旗幟類別再複製結構。"], `package flag;
public class TaiwanFlag {
    public String name() {
        return "Taiwan";
    }
}`, "Mini 題練 package 組織與 public 類別使用。")
  ],
  14: [
    refinedChallenge("錯誤類型分類", "閱讀三段錯誤：少打一個方法名稱、除以零、公式寫錯但可執行。請分類為編譯錯誤、執行錯誤或邏輯錯誤。", "程式思考", 1, ["編譯錯誤會讓程式無法編譯。", "執行錯誤是跑起來才發生。", "邏輯錯誤通常不會報錯但結果錯。"], `prinln：Compile Error
10 / 0：Runtime Error
公式寫錯：Logical Error`, "先能辨識錯誤類型，才知道是否要用例外處理。"),
    refinedChallenge("安全除法計算", "建立除法流程，當分母為 0 時不要讓程式中斷，而是顯示友善訊息，最後一定印出計算結束。", "小型模擬", 2, ["危險程式放在保護區。", "錯誤時進入處理區。", "不管成功失敗都要做的事放最後。"], `try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("分母不能為 0");
} finally {
    System.out.println("計算結束");
}`, "try/catch/finally 的重點是讓錯誤可被處理。"),
    refinedChallenge("年齡驗證規則", "建立年齡檢查方法，年齡小於 0 或大於 130 時主動把問題交給呼叫端處理。", "日常生活情境", 3, ["方法內發現不合法就主動丟出。", "方法宣告要告知可能發生。", "呼叫端決定怎麼處理。"], `static void checkAge(int age) throws Exception {
    if (age < 0 || age > 130) {
        throw new Exception("年齡不合法");
    }
}`, "`throw` 是真的拋出例外，`throws` 是方法宣告。常見錯誤是只寫 throws 但沒有拋出。"),
    refinedChallenge("餘額不足例外", "設計 BalanceException，提款金額超過餘額時拋出並顯示錯誤訊息。", "小型模擬", 3, ["自訂例外可繼承 Exception。", "建構方法接收訊息。", "提款方法中判斷餘額。"], `class BalanceException extends Exception {
    BalanceException(String message) {
        super(message);
    }
}`, "自訂例外讓錯誤語意更清楚。"),
    refinedChallenge("ATM 錯誤處理", "設計提款流程：負數金額、超過餘額、正常提款都要有不同處理結果。", "小型模擬", 4, ["先列出錯誤規則。", "不同錯誤可以用不同例外或訊息。", "正常流程不要和錯誤流程混在一起。"], `if (amount <= 0) {
    throw new Exception("金額必須大於 0");
}
if (amount > balance) {
    throw new BalanceException("餘額不足");
}
balance -= amount;`, "綜合題把驗證與主要流程分開。常見錯誤是只印錯誤但仍繼續提款。")
  ],
  15: [
    refinedChallenge("任務同時執行觀察", "設計兩個任務，一個印 A 倒數，一個印 B 倒數，觀察使用 start 與直接呼叫 run 的差異。", "程式思考", 2, ["start 會啟動新執行緒。", "run 只是普通方法呼叫。", "用輸出順序觀察差異。"], `class Task extends Thread {
    public void run() {
        System.out.println("running");
    }
}

new Task().start();`, "初學者最容易把 `run()` 當成啟動執行緒；真正啟動要用 `start()`。"),
    refinedChallenge("同步提款", "兩個人同時從同一帳戶提款，請保護提款流程，避免餘額被錯誤扣款。", "小型模擬", 3, ["共享資料需要保護。", "檢查餘額與扣款要視為同一段流程。", "可以同步方法或同步區塊。"], `public synchronized void withdraw(int amount) {
    if (balance >= amount) {
        balance -= amount;
    }
}`, "synchronized 保護的是臨界區。常見錯誤是只同步扣款，沒有同步檢查餘額。"),
    refinedChallenge("生產消費協調", "倉庫一次只能放一個商品，沒有商品時消費者等待，有商品時通知消費者。", "小型模擬", 4, ["等待與通知要在同步區中。", "沒有資源時 wait。", "資源狀態改變後 notify。"], `synchronized void take() throws InterruptedException {
    while (!hasItem) wait();
    hasItem = false;
    notifyAll();
}`, "wait/notify 解決執行緒協調，不只是同時執行。"),
    refinedChallenge("倒數計時通知器", "建立 Timer，指定秒數倒數，時間到後呼叫 listener 的 timeUp。", "小型模擬", 4, ["Timer 負責倒數。", "Listener 負責接收通知。", "倒數可放在新執行緒。"], `interface TimerListener {
    void timeUp();
}`, "這題整合 Thread/Runnable 與介面回呼，適合做章末作品。")
  ],
  16: [
    refinedChallenge("串流方向判斷", "判斷讀檔、寫檔、鍵盤輸入、畫面輸出各自是輸入串流還是輸出串流。", "程式思考", 1, ["站在程式角度看方向。", "流進程式是 input。", "從程式流出去是 output。"], `讀檔：Input
寫檔：Output
鍵盤輸入：Input
畫面輸出：Output`, "Stream 的核心是資料流向。"),
    refinedChallenge("類別選擇任務", "文字檔逐行讀取、二進位圖片複製、文字檔加速寫入，請選擇適合的 IO 類別。", "程式思考", 2, ["文字資料考慮 Reader/Writer。", "二進位資料考慮 InputStream/OutputStream。", "大量讀寫可加 Buffered。"], `文字逐行：BufferedReader
圖片複製：FileInputStream / FileOutputStream
文字加速寫入：BufferedWriter`, "這題練 IO 類別架構，不需要寫完整檔案程式。"),
    refinedChallenge("待辦清單存檔", "把三行待辦事項寫入文字檔，再讀回來逐行印出。", "小型模擬", 3, ["寫入可用 BufferedWriter。", "讀取可用 BufferedReader。", "資源關閉交給 try-with-resources。"], `try (BufferedWriter bw = new BufferedWriter(new FileWriter("todo.txt"))) {
    bw.write("讀 Java");
    bw.newLine();
}

try (BufferedReader br = new BufferedReader(new FileReader("todo.txt"))) {
    System.out.println(br.readLine());
}`, "try-with-resources 讓檔案資源自動關閉。"),
    refinedChallenge("學生物件保存", "將 Student 物件寫入檔案，再讀回來確認姓名與分數。", "小型模擬", 4, ["類別需要 Serializable。", "寫入 ObjectOutputStream。", "讀取後轉回 Student。"], `class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int score;
}`, "物件序列化保存的是物件狀態。常見錯誤是忘記 Serializable。"),
    refinedChallenge("成績檔案統計", "讀取成績檔，每行一筆分數，計算總分、平均、最高與最低。", "陣列分析", 4, ["先讀每一行。", "把字串轉數字。", "一邊讀一邊統計。"], `int sum = 0, count = 0, max = 0, min = 100;
// 讀到 score 後：
sum += score;
count++;
if (score > max) max = score;
if (score < min) min = score;`, "綜合題整合檔案讀取、字串轉數字與統計。")
  ],
  17: [
    refinedChallenge("API 查詢任務", "你需要開根號、排序、取得目前日期。請找出可能使用的標準類別庫 package 與類別。", "程式思考", 1, ["先從功能找類別。", "Math 在 java.lang。", "集合與排序多在 java.util。"], `開根號：Math.sqrt
排序：Collections.sort
日期：java.time.LocalDate`, "標準類別庫的重點是先查得到，再用得對。"),
    refinedChallenge("字串轉數字報名表", "使用者輸入年齡文字，請轉成整數並判斷是否大於等於 18。", "日常生活情境", 2, ["輸入常是文字。", "Wrapper 提供轉型工具。", "轉型可能失敗，後續可搭配例外。"], `String input = "20";
int age = Integer.parseInt(input);
System.out.println(age >= 18);`, "Wrapper class 常用於基本型別與物件世界之間的轉換。"),
    refinedChallenge("圓形與距離計算", "給半徑與兩個座標點，計算圓面積與兩點距離。", "數學運算", 2, ["圓周率可用現成常數。", "平方可直接乘或用 pow。", "距離需要開根號。"], `double area = Math.PI * r * r;
double distance = Math.sqrt(dx * dx + dy * dy);`, "Math 類別提供常見數學工具，不需要自己實作開根號。"),
    refinedChallenge("報名名單集合", "管理報名名單：新增姓名、避免重複、查詢是否報名、依姓名排序顯示。", "日常生活情境", 3, ["可變清單用 List。", "不重複可用 Set。", "排序可用 Collections。"], `ArrayList<String> names = new ArrayList<>();
names.add("Jimmy");
Collections.sort(names);

HashSet<String> unique = new HashSet<>(names);`, "Collections 讓資料管理比陣列彈性。常見錯誤是把基本型別直接放進泛型集合。"),
    refinedChallenge("英漢字典工具", "建立三個英文單字與中文翻譯，使用者查詢英文時輸出中文，查不到就顯示未收錄。", "日常生活情境", 3, ["Key 對 Value 適合 Map。", "查詢前可用 containsKey。", "資料可先寫死測試。"], `HashMap<String, String> dict = new HashMap<>();
dict.put("apple", "蘋果");

String word = "apple";
System.out.println(dict.containsKey(word) ? dict.get(word) : "未收錄");`, "HashMap 適合查表。常見錯誤是用兩個陣列硬對索引，維護困難。")
  ],
  18: [
    refinedChallenge("Console 與 GUI 比較", "把姓名輸入程式分別想成 Console 與 GUI，列出輸入方式、觸發方式、輸出位置的差異。", "程式思考", 1, ["Console 常依序輸入。", "GUI 由使用者點擊觸發。", "GUI 輸出通常更新元件。"], `Console：Scanner 讀文字 -> println
GUI：JTextField -> JButton click -> JLabel 更新`, "本節建立 GUI 事件導向概念。"),
    refinedChallenge("登入視窗骨架", "建立視窗，包含帳號標籤、輸入框、登入按鈕與訊息標籤。", "小型模擬", 2, ["先建立 JFrame。", "元件放進 JPanel。", "最後 setVisible。"], `JFrame frame = new JFrame("Login");
JPanel panel = new JPanel();
JTextField account = new JTextField(12);
JButton login = new JButton("登入");
JLabel message = new JLabel("請輸入帳號");`, "先會建立元件階層，再處理事件。"),
    refinedChallenge("按鈕更新訊息", "使用者按下按鈕後，把輸入框文字顯示到訊息標籤。", "小型模擬", 3, ["事件來自按鈕。", "取得 JTextField 的文字。", "更新 JLabel。"], `button.addActionListener(e -> {
    String name = input.getText();
    label.setText("你好 " + name);
});`, "GUI 事件流程是使用者動作 -> listener -> 更新畫面。"),
    refinedChallenge("版面選擇題", "登入表單、計算機九宮格、上中下區域畫面，請分別選擇適合的 Layout 並說明理由。", "程式思考", 2, ["並排可考慮 FlowLayout。", "格子可考慮 GridLayout。", "五區域可考慮 BorderLayout。"], `登入表單：FlowLayout 或 GridLayout
計算機按鈕：GridLayout
上中下區域：BorderLayout`, "Layout Manager 幫助畫面適應尺寸，不建議一開始就全靠 setBounds。"),
    refinedChallenge("交通號誌繪圖", "在 JPanel 上畫出紅黃綠三個圓，形成簡易交通號誌預覽。", "小型模擬", 3, ["繪圖放在 paintComponent。", "先呼叫 super。", "用 setColor 與 fillOval。"], `protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.setColor(Color.RED);
    g.fillOval(40, 20, 50, 50);
}`, "2D 繪圖是把畫面拆成基本形狀。"),
    refinedChallenge("GUI 三角函數計算器", "設計一個視窗：輸入角度，按 sin、cos、tan 按鈕後顯示結果。", "小型模擬", 4, ["先把角度文字轉數字。", "Math 三角函數使用弧度。", "按鈕事件中更新結果標籤。"], `double degrees = Double.parseDouble(input.getText());
double radians = Math.toRadians(degrees);
result.setText(String.valueOf(Math.sin(radians)));`, "綜合題整合 Swing、事件、輸入轉型與 Math。常見錯誤是忘記角度轉弧度。")
  ]
};

const REFINED_MINI_PROJECTS = {
  5: ["電影售票系統", "整合年齡票種、會員折扣、特殊場次加價與輸出明細。"],
  6: ["猜數字遊戲", "使用迴圈讓玩家重複猜測，提示太大或太小，猜中後結束並輸出嘗試次數。"],
  7: ["成績管理系統", "用陣列保存成績，完成最高、最低、平均、搜尋、排行榜與高於平均名單。"],
  8: ["圖書館管理", "設計 Book 與 Library 類別，能新增書籍、顯示書籍資料與統計館藏數。"],
  9: ["會員帳戶系統", "使用 Constructor、this、private、Getter/Setter 與 static 完成會員與帳戶初始化管理。"],
  10: ["文字分析工具", "分析字數、關鍵字、Email 格式、密碼格式與回文。"],
  11: ["員工管理繼承系統", "設計 Employee、Engineer、Sales，使用覆寫與多型輸出不同薪資說明。"],
  12: ["圖形繪製架構", "用抽象類別與介面設計 Shape 系統，支援 Circle、Rectangle 與可繪製能力。"],
  13: ["套件化旗幟系統", "把多個 Flag 類別整理到 package，並在 Main 中 import 使用。"],
  14: ["ATM 錯誤處理", "提款、存款、查詢流程加入自訂例外與 try/catch，避免非法金額與餘額不足。"],
  15: ["倒數計時通知器", "用 Thread 或 Runnable 製作倒數計時，時間到後透過 Listener 通知主程式。"],
  16: ["成績檔案系統", "將學生分數寫入檔案，再讀取並計算平均、最高、最低。"],
  17: ["標準類別庫工具箱", "用 Math、HashSet、HashMap 與 Collections 完成次方根、樂透與英漢字典工具。"],
  18: ["GUI 計算機", "用 Swing 製作可輸入數字、點擊按鈕並顯示結果的桌面程式。"]
};

Object.assign(CHALLENGE_BANK, REFINED_CHALLENGE_BANK);
Object.assign(MINI_PROJECTS, REFINED_MINI_PROJECTS);

const REFINED_SECTION_OBJECTIVES = {
  5: {
    "5.1": ["能分辨順序結構與條件分支。", "能說明程式為何需要依條件選路。", "能從需求辨識是否需要判斷。"],
    "5.2": ["能設計 if、if-else、if-else if 的條件順序。", "能處理互斥區間。", "能避免大括號與指定/比較混淆。"],
    "5.3": ["能用固定代號設計 switch 分支。", "能理解 break 與 fall through。", "能使用 default 處理未知選項。"],
    "5.4": ["能把生活規則拆成多個判斷步驟。", "能選擇合適的分支結構。", "能用測試資料驗證每條路徑。"]
  },
  6: {
    "6.1": ["能用 for 表達固定次數重複。", "能辨識初始值、條件式與更新式。", "能避免邊界少跑或多跑。"],
    "6.2": ["能用 while 表達次數不固定的重複。", "能設計停止條件。", "能避免忘記更新造成無限迴圈。"],
    "6.3": ["能說明 do-while 至少執行一次。", "能設計需要先顯示再判斷的流程。", "能比較 while 與 do-while。"],
    "6.4": ["能用外層與內層迴圈描述列與欄。", "能產生簡單星號圖形。", "能追蹤巢狀迴圈執行次數。"],
    "6.5": ["能區分 break 與 continue。", "能設計提前停止條件。", "能略過不需要處理的資料。"],
    "6.6": ["能把迴圈與條件整合成小演算法。", "能分階段規劃輸入、重複與停止。", "能測試邊界資料。"]
  },
  7: {
    "7.1": ["能說明陣列用來保存同型態多筆資料。", "能使用索引讀寫元素。", "能避免越界錯誤。"],
    "7.2": ["能建立固定大小陣列。", "能用迴圈輸入或統計陣列。", "能理解預設值。"],
    "7.3": ["能把二維陣列視為表格。", "能使用列與欄存取資料。", "能用巢狀迴圈走訪表格。"],
    "7.4": ["能分辨基本型別與參照型別。", "能說明陣列變數保存參照。", "能觀察共享陣列的影響。"],
    "7.5": ["能理解 args 是 String 陣列。", "能檢查參數數量。", "能安全走訪命令列參數。"],
    "7.6": ["能把陣列用於搜尋與統計。", "能分階段完成資料分析。", "能設計測試資料驗證結果。"]
  },
  8: {
    "8.1": ["能用生活例子區分類別與物件。", "能辨識屬性與方法。", "能用藍圖與實體解釋 OOP。"],
    "8.2": ["能定義類別與屬性。", "能用 new 建立物件。", "能讓不同物件保存不同資料。"],
    "8.3": ["能設計有參數與回傳值的方法。", "能讓方法呼叫其他方法。", "能理解遞迴與停止條件的基礎。"],
    "8.4": ["能判斷合法方法多載。", "能依不同參數設計同名方法。", "能避免只改回傳型態的錯誤。"],
    "8.5": ["能把類別、物件與方法整合成小模型。", "能規劃類別之間的合作。", "能避免提前使用進階 OOP 概念。"]
  },
  9: {
    "9.1": ["能使用 Constructor 初始化物件。", "能用 this 區分屬性與參數。", "能避免把建構方法寫成 void 方法。"],
    "9.2": ["能用 private 保護資料。", "能設計 Getter/Setter。", "能在 Setter 中加入資料檢查。"],
    "9.3": ["能分辨一般成員與 static 成員。", "能使用 static 統計共享資料。", "能設計簡單工具方法。"],
    "9.4": ["能整合建構、封裝與 static。", "能設計較完整的類別規則。", "能用測試資料檢查物件狀態。"]
  },
  10: {
    "10.1": ["能建立 String 並理解不可變性。", "能使用長度與字元存取。", "能保存字串方法回傳的新結果。"],
    "10.2": ["能使用常見 String 方法擷取、搜尋與比較。", "能分辨 == 與 equals。", "能處理大小寫與空白。"],
    "10.3": ["能使用 StringBuilder 修改字串。", "能比較 String、StringBuilder、StringBuffer。", "能選擇適合的字串工具。"],
    "10.4": ["能用 Regex 驗證簡單格式。", "能理解常見符號用途。", "能避免把 Regex 寫得過度複雜。"],
    "10.5": ["能把字串方法與 Regex 整合成工具。", "能拆解格式驗證流程。", "能測試合法與不合法資料。"]
  },
  11: {
    "11.1": ["能說明繼承用來抽出共通成員。", "能使用 extends。", "能辨識適合與不適合繼承的關係。"],
    "11.2": ["能覆寫父類別方法。", "能用多型呼叫不同子類別行為。", "能使用 super 呼叫父類別內容。"],
    "11.3": ["能說明 Java 單一繼承限制。", "能辨識 private、final、constructor 的繼承限制。", "能避免錯誤繼承設計。"],
    "11.4": ["能使用 Object 常見方法。", "能覆寫 toString。", "能理解 Wrapper 與基本型別轉換。"],
    "11.5": ["能使用 Varargs 處理不定數量參數。", "能比較陣列與 Varargs。", "能用 Object 接收不同型別。"]
  },
  12: {
    "12.1": ["能使用抽象類別定義共同規格。", "能設計抽象方法。", "能說明抽象類別不能直接建立物件。"],
    "12.2": ["能用介面描述能力。", "能使用 implements。", "能比較抽象類別與介面。"],
    "12.3": ["能讓介面繼承介面。", "能理解多重介面繼承。", "能用多型操作介面型別。"],
    "12.4": ["能設計成員內部類別。", "能辨識區域與匿名內部類別用途。", "能用內部類別表達附屬關係。"],
    "12.5": ["能用抽象類別、介面與內部類別設計合作模型。", "能畫出簡單 UML 關係。", "能避免過度抽象。"]
  },
  13: {
    "13.1": ["能說明 package 用來組織類別。", "能讓 package 與資料夾結構對應。", "能依功能切割檔案。"],
    "13.2": ["能使用 import 跨 package 使用類別。", "能理解完整類別名稱。", "能處理重名類別情境。"],
    "13.3": ["能說明子套件不是父子類別關係。", "能理解存取修飾子與 package 的關係。", "能判斷成員可見範圍。"],
    "13.4": ["能組織小型 package 專案。", "能認識 Java 標準類別庫常見 package。", "能使用合理命名規則。"]
  },
  14: {
    "14.1": ["能區分編譯、執行與邏輯錯誤。", "能辨識常見例外。", "能說明例外發生會中斷流程。"],
    "14.2": ["能用 try/catch 處理例外。", "能使用 finally 放置必做清理。", "能設計多重 catch。"],
    "14.3": ["能區分 throw 與 throws。", "能主動拋出不合法資料。", "能理解呼叫鏈傳遞例外。"],
    "14.4": ["能建立自訂例外類別。", "能用自訂例外表達業務錯誤。", "能捕捉並顯示友善訊息。"],
    "14.5": ["能把錯誤處理整合進小系統。", "能分離正常流程與錯誤流程。", "能測試不同錯誤情境。"]
  },
  15: {
    "15.1": ["能說明執行緒與程序概念。", "能用 Thread 或 Runnable 建立任務。", "能分辨 start 與 run。"],
    "15.2": ["能辨識 race condition。", "能用 synchronized 保護共享資料。", "能理解物件鎖概念。"],
    "15.3": ["能使用 wait/notify 協調執行緒。", "能使用 join 等待任務完成。", "能描述生產者消費者流程。"],
    "15.4": ["能設計簡單多執行緒小工具。", "能用 Listener 通知結果。", "能避免把進階框架混入初學階段。"]
  },
  16: {
    "16.1": ["能說明 Stream 是資料流。", "能區分輸入與輸出串流。", "能區分 byte 與 character stream。"],
    "16.2": ["能理解 IO 類別階層。", "能選擇 Reader/Writer 或 Stream。", "能說明 Buffered 的用途。"],
    "16.3": ["能讀寫文字與二進位資料。", "能使用 try-with-resources。", "能比較執行前後檔案內容。"],
    "16.4": ["能使用 Serializable 保存物件。", "能讀寫物件串流。", "能理解 transient 的基本用途。"],
    "16.5": ["能把檔案讀寫與資料統計整合。", "能設計檔案格式。", "能處理空檔與格式錯誤。"]
  },
  17: {
    "17.1": ["能說明標準類別庫的用途。", "能查詢 API 文件。", "能依需求找到常見 package。"],
    "17.2": ["能使用 Wrapper Class 轉換資料。", "能理解 autoboxing/unboxing。", "能說明集合需要物件型別。"],
    "17.3": ["能使用 Math 常用方法。", "能選擇適合的數學工具。", "能避免重寫標準功能。"],
    "17.4": ["能使用 ArrayList、HashSet、HashMap。", "能選擇適合的集合。", "能使用 Collections.sort。"],
    "17.5": ["能用標準類別庫完成小工具。", "能組合 Math 與 Collections。", "能測試重複、查無資料等情境。"]
  },
  18: {
    "18.1": ["能比較 Console 與 GUI 程式。", "能說明事件導向流程。", "能辨識常見 GUI 元件。"],
    "18.2": ["能建立 Swing 視窗與元件。", "能組織 JFrame、JPanel 與控制項。", "能建立最小可執行 GUI。"],
    "18.3": ["能使用 ActionListener 處理事件。", "能從元件讀取資料並更新畫面。", "能理解匿名類別與 lambda 的用途。"],
    "18.4": ["能選擇 Layout Manager。", "能比較 Flow、Border、Grid、BoxLayout。", "能避免過度依賴絕對座標。"],
    "18.5": ["能在 paintComponent 中繪圖。", "能使用 Graphics 畫基本形狀。", "能把圖形拆成線、矩形、圓與文字。"],
    "18.6": ["能整合 Swing、事件、Layout 與檔案或 Math。", "能規劃視窗草圖。", "能測試 GUI 互動流程。"]
  }
};

const REFINED_CHAPTER_QUIZZES = {
  5: [
    refinedQuiz("什麼情境最需要條件分支？", ["依輸入決定執行哪段程式", "固定印三行文字", "宣告一個變數", "建立 class 檔案"], 0, "條件分支處理的是不同情況走不同路。"),
    refinedQuiz("成績等第判斷通常要注意什麼？", ["條件順序", "只能用 println", "不能用大括號", "必須用 Scanner"], 0, "區間判斷順序錯會讓高分落入低分條件。"),
    refinedQuiz("switch 中 break 的主要用途是什麼？", ["避免繼續執行下一個 case", "建立變數", "結束 class", "讀取輸入"], 0, "沒有 break 可能發生 fall through。"),
    refinedQuiz("電影票價系統適合先做哪件事？", ["拆出票種與折扣兩個規則", "把所有條件塞成一行", "先寫迴圈", "先寫陣列"], 0, "複合規則應拆步驟，程式才清楚。")
  ],
  6: [
    refinedQuiz("for 最適合哪種情境？", ["已知重複次數", "完全不需要重複", "只做一次輸出", "宣告類別"], 0, "for 常用於起點、終點、更新明確的重複。"),
    refinedQuiz("while 最容易出現哪種錯誤？", ["忘記更新條件造成無限迴圈", "不能放 if", "不能印文字", "只能跑一次"], 0, "while 需要讓條件有機會變 false。"),
    refinedQuiz("do-while 的特色是什麼？", ["至少執行一次", "永遠不執行", "只能搭配陣列", "不能有條件"], 0, "do 區塊會先跑，再檢查條件。"),
    refinedQuiz("continue 與 break 的差異是什麼？", ["continue 略過本次，break 結束迴圈", "兩者完全相同", "break 只能用在 if", "continue 會結束程式"], 0, "兩者控制範圍不同。")
  ],
  7: [
    refinedQuiz("陣列最後一個索引是什麼？", ["length - 1", "length", "0", "1"], 0, "索引從 0 開始，所以最後是 length - 1。"),
    refinedQuiz("二維陣列最像哪種資料？", ["表格", "單一數字", "方法名稱", "package"], 0, "二維陣列可用列與欄理解。"),
    refinedQuiz("arr2 = arr1 對陣列代表什麼？", ["兩個變數指向同一個陣列", "複製一份新陣列", "刪除 arr1", "讓 arr2 變成 int"], 0, "陣列是參照型別。"),
    refinedQuiz("讀取 args[0] 前最好先做什麼？", ["檢查 args.length", "刪除 main", "建立 GUI", "呼叫 super"], 0, "避免沒有參數時越界。")
  ],
  8: [
    refinedQuiz("類別和物件的關係最像什麼？", ["藍圖與實體", "錯誤與例外", "檔案與 package", "迴圈與條件"], 0, "類別定義結構，物件是實際實例。"),
    refinedQuiz("方法有回傳值時必須注意什麼？", ["使用 return 回傳符合型態的資料", "一定要叫 main", "不能有參數", "只能輸出文字"], 0, "回傳型態與 return 值要一致。"),
    refinedQuiz("遞迴最重要的安全條件是什麼？", ["停止條件", "一定要有陣列", "不能有參數", "必須用 static"], 0, "沒有停止條件會不斷呼叫自己。"),
    refinedQuiz("Overloading 的合法依據是什麼？", ["參數列表不同", "只改回傳型態", "只改變數名稱", "只改註解"], 0, "方法多載看方法名稱相同且參數列表不同。")
  ],
  9: [
    refinedQuiz("Constructor 的特性是什麼？", ["名稱與類別相同且沒有回傳型態", "一定要有 void", "只能是 static", "不能有參數"], 0, "寫成 void 就變成普通方法。"),
    refinedQuiz("this.name = name 的 this 代表什麼？", ["目前物件的欄位", "父類別", "package", "例外"], 0, "this 用來指目前物件。"),
    refinedQuiz("封裝的主要目的之一是什麼？", ["保護資料不被任意改壞", "讓所有欄位 public", "刪除方法", "避免建立物件"], 0, "private 搭配方法可控制資料變更。"),
    refinedQuiz("static count 適合保存什麼？", ["所有物件共享的建立數量", "每個物件不同姓名", "區域變數", "方法參數"], 0, "static 屬於類別共享。")
  ],
  10: [
    refinedQuiz("String immutable 代表什麼？", ["字串內容不會被原地修改", "字串不能輸出", "字串只能是數字", "String 沒有方法"], 0, "String 方法通常回傳新字串。"),
    refinedQuiz("比較兩個字串內容應優先用什麼？", ["equals", "==", "=", "!"], 0, "equals 比較內容，== 比較參照是否相同。"),
    refinedQuiz("StringBuilder 適合哪種情境？", ["頻繁組合或修改字串", "只宣告 int", "處理繼承", "建立 package"], 0, "StringBuilder 是可變字串工具。"),
    refinedQuiz("Regex 常用來做什麼？", ["格式驗證", "啟動執行緒", "繪製 GUI", "建立 Constructor"], 0, "Regex 可用於驗證、搜尋與替換文字。")
  ],
  11: [
    refinedQuiz("繼承最常見目的之一是什麼？", ["抽出共通程式碼", "讓所有類別都 private", "取代所有方法", "避免建立物件"], 0, "父類別保存共通資料與行為。"),
    refinedQuiz("@Override 表示什麼？", ["子類別重新定義父類別方法", "方法多載", "建立 package", "開啟檔案"], 0, "覆寫要求方法簽名相符。"),
    refinedQuiz("Java 類別繼承限制是什麼？", ["只能 extends 一個父類別", "不能有父類別", "可同時 extends 多個類別", "只能繼承 Object"], 0, "Java 類別是單一繼承。"),
    refinedQuiz("Varargs 的 `int... nums` 在方法內像什麼？", ["陣列", "單一 int", "HashMap", "JFrame"], 0, "方法內可用陣列方式走訪。")
  ],
  12: [
    refinedQuiz("抽象類別不能做什麼？", ["直接 new 抽象類別物件", "定義一般方法", "被子類別繼承", "宣告欄位"], 0, "抽象類別是不完整藍圖。"),
    refinedQuiz("Interface 最適合描述什麼？", ["能力或規格", "檔案路徑", "執行緒時間", "字串長度"], 0, "介面描述類別應提供哪些行為。"),
    refinedQuiz("介面可以做什麼？", ["繼承多個介面", "直接保存物件狀態為主", "只能被一個類別使用", "不能有方法"], 0, "介面支援多重介面繼承。"),
    refinedQuiz("內部類別適合什麼情境？", ["某類別只屬於另一個類別", "所有類別都不相關", "取代 package", "處理除以零"], 0, "內部類別表達結構上的附屬關係。")
  ],
  13: [
    refinedQuiz("Package 的主要用途是什麼？", ["組織類別並避免命名混亂", "讓程式自動變快", "取代 class", "處理例外"], 0, "package 類似分類資料夾。"),
    refinedQuiz("使用不同 package 的類別通常需要什麼？", ["import 或完整類別名稱", "break", "continue", "paintComponent"], 0, "import 讓程式可直接使用該類別短名。"),
    refinedQuiz("school 與 school.student 在 Java 中是什麼關係？", ["不同 package", "父子類別", "同一個類別", "同一個檔案"], 0, "子套件不是 package 的繼承關係。"),
    refinedQuiz("default 存取權限主要限制在哪裡？", ["同 package", "全世界", "只同類別", "只不同 package"], 0, "沒有修飾子時是 package-private。")
  ],
  14: [
    refinedQuiz("除以零通常屬於哪類問題？", ["Runtime Error", "Compile Error", "Logical Error", "Package Error"], 0, "程式可編譯，但執行時出錯。"),
    refinedQuiz("finally 適合放什麼？", ["一定要執行的清理工作", "只在錯誤時宣告 class", "只在成功時刪除資料", "建立 package"], 0, "finally 不管成功或 catch 後通常都會執行。"),
    refinedQuiz("throw 與 throws 的差異是什麼？", ["throw 拋出，throws 宣告可能拋出", "兩者完全相同", "throws 只能在變數上", "throw 只能用在 package"], 0, "一個是動作，一個是方法簽章告知。"),
    refinedQuiz("自訂例外適合何時使用？", ["標準例外不足以表達業務錯誤", "想取代所有 if", "想建立 GUI", "想排序集合"], 0, "例如餘額不足、年齡不合法。")
  ],
  15: [
    refinedQuiz("start 與 run 的差異是什麼？", ["start 啟動新執行緒，run 是普通方法呼叫", "兩者完全相同", "run 一定比較快", "start 不能執行"], 0, "真正啟動執行緒要呼叫 start。"),
    refinedQuiz("Race condition 常發生於什麼情況？", ["多執行緒共享同一資料且未保護", "只有一行程式", "沒有任何資料", "只使用 String"], 0, "共享狀態被同時修改容易出錯。"),
    refinedQuiz("synchronized 保護什麼？", ["臨界區與共享資料操作", "所有 package", "HTML 元件", "Regex"], 0, "同步讓同一時間只有一個執行緒進入保護區。"),
    refinedQuiz("join 的用途是什麼？", ["等待另一個執行緒完成", "建立陣列", "畫圖", "讀取 package"], 0, "join 可協調主執行緒等待子執行緒。")
  ],
  16: [
    refinedQuiz("從檔案讀進程式屬於什麼方向？", ["Input", "Output", "Static", "Override"], 0, "站在程式角度，流進來是 input。"),
    refinedQuiz("文字資料通常優先考慮哪類？", ["Reader/Writer", "Thread", "JFrame", "HashMap only"], 0, "Reader/Writer 面向字元資料。"),
    refinedQuiz("try-with-resources 的優點是什麼？", ["自動關閉資源", "自動排序", "自動畫 GUI", "自動繼承"], 0, "避免忘記 close。"),
    refinedQuiz("ObjectOutputStream 常搭配什麼？", ["Serializable 物件", "final class", "switch", "CSS"], 0, "物件要可序列化才能寫出。")
  ],
  17: [
    refinedQuiz("標準類別庫的學習重點是什麼？", ["知道何時查用現成工具", "所有功能都自己寫", "避免使用 API", "只背 package 名稱"], 0, "會查 API 與選工具很重要。"),
    refinedQuiz("Integer.parseInt 的用途是什麼？", ["字串轉 int", "int 轉 GUI", "啟動執行緒", "讀取檔案"], 0, "Wrapper 類別提供常見轉換工具。"),
    refinedQuiz("Math.sqrt 用來做什麼？", ["開平方根", "排序", "去重複", "建立視窗"], 0, "Math 提供數學函數。"),
    refinedQuiz("HashSet 的特色是什麼？", ["不保存重複元素", "依 key 查 value", "固定大小", "只能放 int 基本型別"], 0, "Set 適合去除重複。")
  ],
  18: [
    refinedQuiz("GUI 程式和 Console 最大差異之一是什麼？", ["GUI 常由事件觸發", "GUI 不能輸入", "Console 只能用 Swing", "GUI 沒有元件"], 0, "按鈕點擊等事件會觸發程式。"),
    refinedQuiz("JFrame 通常代表什麼？", ["視窗", "按鈕", "文字輸入框", "檔案"], 0, "JFrame 是 Swing 視窗容器。"),
    refinedQuiz("ActionListener 負責什麼？", ["處理使用者動作事件", "計算陣列長度", "拋出例外", "宣告 package"], 0, "按鈕點擊會觸發 ActionEvent。"),
    refinedQuiz("paintComponent 中第一件常做的事是什麼？", ["呼叫 super.paintComponent(g)", "建立 main", "呼叫 start", "throw Exception"], 0, "先讓父類別完成清除與基本繪製。")
  ]
};

function applyRefinedCourseDesign() {
  Object.entries(REFINED_SECTION_OBJECTIVES).forEach(([chapterId, sections]) => {
    Object.entries(sections).forEach(([sectionId, objectives]) => {
      updateSection(Number(chapterId), sectionId, { objectives });
    });
  });

  Object.entries(REFINED_CHAPTER_QUIZZES).forEach(([chapterId, quiz]) => {
    const chapter = chapters.find((item) => item.id === Number(chapterId));
    if (chapter) {
      const originalQuiz = chapter.quiz || [];
      const refinedQuestions = new Set(quiz.map((item) => item.question));
      chapter.quiz = [
        ...quiz,
        ...originalQuiz.filter((item) => !refinedQuestions.has(item.question))
      ];
    }
  });
}

function upgradeChallengeSystem() {
  chapters.forEach((chapter) => {
    const bank = CHALLENGE_BANK[chapter.id] || CHALLENGE_BANK[1];
    const activities = getSortedSections(chapter).map((section, index) => {
      const template = bank[index % bank.length];
      return createChallengeActivity(chapter, section, template, index + 1);
    });

    const [projectTitle, projectQuestion] = MINI_PROJECTS[chapter.id];
    activities.push(createMiniProjectActivity(chapter, projectTitle, projectQuestion));
    chapter.activities = activities;
  });
}

function createChallengeActivity(chapter, section, template, order) {
  const [title, question, category, difficulty, hints, solution, explanation] = template;
  return {
    id: `ch${String(chapter.id).padStart(2, "0")}-s${section.sectionId.replace(".", "-")}-challenge`,
    sectionId: section.sectionId,
    type: "challenge",
    title: `Challenge ${order}: ${title}`,
    question: `${question}\n\n限制：請先依需求自行判斷要使用哪些語法，不要直接照抄本小節範例。`,
    category,
    difficulty,
    hints,
    solution,
    explanation: `${explanation}\n\n解題步驟：先理解輸入與輸出，再拆成小規則，最後才寫程式。常見錯誤是看到範例就只替換變數名稱，沒有重新分析需求。其他寫法只要能保持規則清楚、結果正確，也可以接受。`
  };
}

function createMiniProjectActivity(chapter, title, question) {
  return {
    id: `ch${String(chapter.id).padStart(2, "0")}-mini-project`,
    sectionId: getAssessmentSection(chapter).sectionId,
    type: "homework",
    title: `Mini Project: ${title}`,
    question: `${question}\n\n請把本章至少三個核心觀念整合在同一個小作品中，並自行設計測試資料。`,
    category: "Mini Project",
    difficulty: 4,
    hints: [
      "先列出作品需要哪些資料與功能。",
      "把功能拆成輸入、處理、輸出三段。",
      "先完成最小可執行版本，再逐步加入檢查、格式與邊界情況。"
    ],
    solution: "Mini Project 沒有唯一答案。請先完成可執行版本，再確認：資料是否合理、流程是否清楚、錯誤情況是否有處理、輸出是否容易閱讀。",
    explanation: "Mini Project 的目標不是背標準答案，而是把本章觀念整合成一個可運作的小系統。建議先畫流程，再寫程式。常見錯誤是一開始就追求完整功能，導致無法執行；應先做最小版本。"
  };
}

applyRequestedContentUpdates();

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

function addVisuals(chapterId, sectionId, visuals) {
  const chapter = chapters.find((item) => item.id === chapterId);
  const section = chapter?.sections.find((item) => item.sectionId === sectionId);
  if (!section) return;

  section.visuals = [...(section.visuals || []), ...visuals];
}

function applyVisualTeachingUpgrade() {
  addVisuals(1, "1.3", [
    { type: "flow", title: "Java 跨平台流程", value: `Java 原始碼\n  ↓ javac 編譯\nBytecode\n  ↓ JVM\nWindows / macOS / Linux 執行` },
    { type: "callout", variant: "tip", text: "Java 的跨平台重點是 JVM，不是原始碼直接在所有系統上執行。" }
  ]);
  addVisuals(2, "2.4", [
    { type: "flow", title: "Hello World 執行流程", value: `class Main\n  ↓\nmain 方法\n  ↓\nSystem.out.println()\n  ↓\n螢幕輸出文字` }
  ]);
  addVisuals(3, "3.1", [
    { type: "memory", title: "變數記憶體概念", value: `age\n ↓\n25\n\nname\n ↓\n"Jimmy"` }
  ]);
  addVisuals(4, "4.6", [
    { type: "steps", title: "運算順序示範：3 + 4 * 5", headers: ["步驟", "運算", "結果"], rows: [["1", "4 * 5", "20"], ["2", "3 + 20", "23"]] }
  ]);
  addVisuals(5, "5.2", [
    { type: "flow", title: "if-else 判斷流程", value: `score >= 60 ?\n    ↓\n  是   否\n  ↓     ↓\n及格  不及格` }
  ]);
  addVisuals(6, "6.1", [
    { type: "flow", title: "for 迴圈流程", value: `初始值\n  ↓\n條件成立？\n  ├─ 是 → 執行程式 → 更新 → 回到條件\n  └─ 否 → 離開迴圈` },
    { type: "steps", title: "for(int i=1; i<=3; i++)", headers: ["次數", "i", "輸出"], rows: [["1", "1", "1"], ["2", "2", "2"], ["3", "3", "3"]] }
  ]);
  addVisuals(6, "6.2", [
    { type: "flow", title: "while 迴圈流程", value: `判斷條件\n  ├─ true  → 執行區塊 → 回到條件\n  └─ false → 離開迴圈` },
    { type: "callout", variant: "warning", text: "while 迴圈若忘記更新變數，很容易變成無限迴圈。" }
  ]);
  addVisuals(6, "6.4", [
    { type: "flow", title: "巢狀迴圈圖解", value: `外層 i=1\n  ├─ 內層 j=1\n  ├─ 內層 j=2\n  └─ 內層 j=3\n外層 i=2\n  ├─ 內層 j=1\n  ├─ 內層 j=2\n  └─ 內層 j=3` }
  ]);
  addVisuals(7, "7.1", [
    { type: "array", title: "一維陣列索引", value: `Index\n\n0     1     2     3     4\n+----+----+----+----+----+\n| 80 | 75 | 90 | 60 | 88 |\n+----+----+----+----+----+` },
    { type: "callout", variant: "warning", text: "長度是 5 的陣列，最後索引是 4，不是 5。" }
  ]);
  addVisuals(7, "7.3", [
    { type: "array", title: "二維陣列表格", value: `      0   1   2\n\n0    10  20  30\n1    40  50  60\n2    70  80  90` }
  ]);
  addVisuals(7, "7.4", [
    { type: "memory", title: "參照型別共享同一陣列", value: `arr1 ─┐\n      ├─> [1, 2, 3]\narr2 ─┘\n\n修改 arr2[0]\narr1 也會看到變化` }
  ]);
  addVisuals(8, "8.1", [
    { type: "uml", title: "Class 與 Object", value: `Student 類別\n- name\n- age\n+ showInfo()\n\nnew Student()\n  ↓\nJimmy 物件\nAmy 物件` }
  ]);
  addVisuals(8, "8.3", [
    { type: "flow", title: "方法呼叫流程", value: `main()\n  ↓\ngreet()\n  ↓\nhello()\n  ↓\nreturn 回 main()` },
    { type: "flow", title: "遞迴 factorial(5)", value: `factorial(5)\n ↓\n5 * factorial(4)\n ↓\n5 * 4 * factorial(3)\n ↓\n5 * 4 * 3 * 2 * 1` }
  ]);
  addVisuals(9, "9.1", [
    { type: "memory", title: "this 指向目前物件", value: `new Student("Jimmy", 25)\n  ↓\nthis\n  ↓\nname = "Jimmy"\nage = 25` }
  ]);
  addVisuals(10, "10.1", [
    { type: "memory", title: "String 不可變概念", value: `s ──> "Hello"\n\ns.concat(" World")\n  ↓ 產生新物件\n"Hello World"\n\n若沒有 s = ...\ns 仍指向 "Hello"` },
    { type: "compare", title: "concat 接住結果前後", before: `String s = "Hello";\ns.concat(" World");\n// s 是 Hello`, after: `s = s.concat(" World");\n// s 是 Hello World` }
  ]);
  addVisuals(11, "11.1", [
    { type: "uml", title: "繼承關係", value: `Animal\n  ↑\n Dog\n\nAnimal\n  ↑\n Cat` }
  ]);
  addVisuals(12, "12.2", [
    { type: "uml", title: "介面能力圖", value: `<<interface>> Flyable\n+ fly()\n   ↑ implements\n ┌─┴──────┐\nBird   Airplane` }
  ]);
  addVisuals(13, "13.1", [
    { type: "files", title: "Package 檔案結構", value: `src\n ├─ school\n │   ├─ Student.java\n │   └─ Teacher.java\n ├─ animal\n │   ├─ Dog.java\n │   └─ Cat.java\n └─ Main.java` }
  ]);
  addVisuals(14, "14.1", [
    { type: "flow", title: "例外發生流程", value: `程式執行\n  ↓\n發生例外\n  ↓\n有 catch？\n  ├─ 有 → 處理後繼續\n  └─ 無 → 程式中斷` }
  ]);
  addVisuals(14, "14.2", [
    { type: "flow", title: "try/catch/finally 流程", value: `try\n  ↓\n發生例外？\n  ├─ 是 → catch\n  └─ 否 → 跳過 catch\n  ↓\nfinally` },
    { type: "callout", variant: "tip", text: "finally 常用於關閉檔案、資料庫連線等收尾工作。" }
  ]);
  addVisuals(14, "14.3", [
    { type: "flow", title: "throw 與呼叫鏈", value: `main()\n  ↓\nmethodA()\n  ↓\nmethodB()\n  ↓ throw Exception\n  ↑ 往上尋找 catch` }
  ]);
  addVisuals(15, "15.1", [
    { type: "timeline", title: "多執行緒時間軸", value: `時間 →\n\nMain Thread\n|------|------|\n\nThread A\n   |----|----|\n\nThread B\n      |----|----|` },
    { type: "callout", variant: "warning", text: "呼叫 run() 不會建立新執行緒；啟動新執行緒請呼叫 start()。" }
  ]);
  addVisuals(15, "15.2", [
    { type: "timeline", title: "Race Condition 時間軸", value: `balance = 1000\n\nThread A: 讀取 1000 ---- 寫回 500\nThread B:    讀取 1000 ---- 寫回 500\n\n兩次提款後結果錯誤` }
  ]);
  addVisuals(15, "15.3", [
    { type: "flow", title: "Producer / Consumer 協調", value: `Consumer\n  ↓ 沒資料\nwait()\n\nProducer\n  ↓ 放資料\nnotify()\n\nConsumer 醒來取資料` }
  ]);
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

function createChapter09() {
  return {
    id: 9,
    code: "CH09",
    title: "物件的建構",
    minutes: 135,
    summary: "學會 Constructor、this、封裝、Getter/Setter 與 static，設計更完整的 Java 類別。",
    intro: "CH08 讓你會建立類別與物件；CH09 會讓物件建立得更乾淨、資料更安全，並理解哪些資料屬於物件、哪些資料屬於類別本身。",
    goals: [
      "了解建構方法 Constructor",
      "學會使用 this",
      "了解封裝與資訊隱藏",
      "學會 private 與 public",
      "了解 Getter / Setter",
      "學會 static 成員",
      "能夠設計較完整的類別"
    ],
    sections: [
      {
        sectionId: "9.1",
        title: "建構方法（Constructor）",
        body: [
          "在 CH08 中，我們建立 Student 物件後，常常要一行一行設定資料。物件少的時候還好，物件一多就容易漏設定，或讓程式變得很重複。",
          "建構方法（Constructor）就是在建立物件時自動執行的方法。它常用來準備物件的初始資料，讓 `new Student(\"Jimmy\", 25)` 建立物件時就把姓名與年齡放好。",
          "Constructor 有三個重要特性：名稱與類別相同、沒有回傳型態、建立物件時會自動執行。注意：沒有回傳型態不等於寫 `void`，寫了 `void Student()` 就變成一般方法，不是 Constructor。",
          "`this` 代表目前這個物件。當參數名稱和屬性名稱相同時，例如 `this.name = name;`，左邊的 `this.name` 是物件屬性，右邊的 `name` 是傳進來的參數。"
        ],
        code: {
          title: "問題起點：每次都手動設定很麻煩",
          value: `Student s1 = new Student();
s1.name = "Jimmy";
s1.age = 25;

Student s2 = new Student();
s2.name = "Amy";
s2.age = 22;`
        },
        codes: [
          {
            title: "範例 1：預設建構方法",
            value: `class Student {
    Student() {
        System.out.println("建立學生物件");
    }
}

Student s1 = new Student();

// 執行結果：
// 建立學生物件`
          },
          {
            title: "範例 2：建立物件時自動執行 Constructor",
            value: `class Book {
    Book() {
        System.out.println("一本書被建立了");
    }
}

Book b1 = new Book();
Book b2 = new Book();

// 執行結果：
// 一本書被建立了
// 一本書被建立了`
          },
          {
            title: "範例 3：帶參數建構方法",
            value: `class Student {
    String name;
    int age;

    Student(String n, int a) {
        name = n;
        age = a;
    }
}`
          },
          {
            title: "範例 4：使用帶參數 Constructor 建立物件",
            value: `Student s1 = new Student("Jimmy", 25);

System.out.println(s1.name);
System.out.println(s1.age);

// 執行結果：
// Jimmy
// 25`
          },
          {
            title: "範例 5：使用 this 初始化資料",
            value: `class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`
          },
          {
            title: "範例 6：this 圖解",
            value: `new Student("Jimmy", 25)
  ↓
建立一個 Student 物件
  ↓
this 指向這個新物件
  ↓
this.name = "Jimmy"
this.age = 25`
          },
          {
            title: "範例 7：Car 類別 Constructor",
            value: `class Car {
    String brand;
    int year;

    Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    void showInfo() {
        System.out.println(brand + " / " + year);
    }
}

Car car = new Car("Toyota", 2024);
car.showInfo();

// 執行結果：
// Toyota / 2024`
          },
          {
            title: "範例 8：常見錯誤 void Student()",
            value: `class Student {
    void Student() {
        System.out.println("這不是 Constructor");
    }
}

Student s1 = new Student();

// 說明：
// void Student() 是一般方法。
// 真正的 Constructor 不寫回傳型態，連 void 都不能寫。`
          }
        ]
      },
      {
        sectionId: "9.2",
        title: "封裝與資訊隱藏",
        body: [
          "封裝（Encapsulation）是把資料和操作資料的方法放在同一個類別中，並且控制外部程式可以怎麼使用它。",
          "資訊隱藏（Information Hiding）則是把不該被外部直接修改的資料藏起來。最常見的做法是把屬性設成 `private`，再提供 `public` 的 Getter / Setter。",
          "這樣做不是為了讓程式變麻煩，而是為了保護資料。例如銀行帳戶餘額不能讓外部任意改成負數，應該透過方法檢查後再修改。",
          "`private` 表示只有類別內部可以直接使用；`public` 表示外部程式可以呼叫。Getter 負責讀取資料，Setter 負責在合理檢查後修改資料。"
        ],
        code: {
          title: "錯誤設計：公開 balance",
          value: `class BankAccount {
    public int balance;
}

BankAccount account = new BankAccount();
account.balance = -1000000;

// 問題：
// 外部程式可以直接把餘額改成不合理的數字。`
        },
        codes: [
          {
            title: "範例 1：使用 private 隱藏資料",
            value: `class BankAccount {
    private int balance;
}

// 外部不能直接寫：
// account.balance = 1000;`
          },
          {
            title: "範例 2：Getter 讀取資料",
            value: `class BankAccount {
    private int balance = 1000;

    public int getBalance() {
        return balance;
    }
}

BankAccount account = new BankAccount();
System.out.println(account.getBalance());

// 執行結果：
// 1000`
          },
          {
            title: "範例 3：Setter 檢查後修改資料",
            value: `class BankAccount {
    private int balance;

    public void setBalance(int money) {
        if (money >= 0) {
            balance = money;
        }
    }

    public int getBalance() {
        return balance;
    }
}`
          },
          {
            title: "範例 4：Setter 擋下不合理資料",
            value: `BankAccount account = new BankAccount();
account.setBalance(-500);

System.out.println(account.getBalance());

// 執行結果：
// 0
// 因為 -500 沒有通過檢查。`
          },
          {
            title: "範例 5：完整 Student 封裝",
            value: `class Student {
    private String name;
    private int score;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setScore(int score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        }
    }

    public int getScore() {
        return score;
    }
}`
          },
          {
            title: "範例 6：外部透過 Setter / Getter 操作",
            value: `Student s = new Student();
s.setName("Amy");
s.setScore(95);

System.out.println(s.getName());
System.out.println(s.getScore());

// 執行結果：
// Amy
// 95`
          },
          {
            title: "範例 7：封裝圖解",
            value: `外部程式
  ↓ 呼叫 public setter
setScore(95)
  ↓ 檢查資料
private int score
  ↓ 呼叫 public getter
getScore() 回傳資料`
          },
          {
            title: "範例 8：Product 價格保護",
            value: `class Product {
    private String name;
    private int price;

    Product(String name, int price) {
        this.name = name;
        setPrice(price);
    }

    public void setPrice(int price) {
        if (price >= 0) {
            this.price = price;
        }
    }

    public int getPrice() {
        return price;
    }
}

Product p = new Product("Keyboard", -300);
System.out.println(p.getPrice());

// 執行結果：
// 0`
          }
        ]
      },
      {
        sectionId: "9.3",
        title: "static 共享成員變數",
        body: [
          "一般成員屬於物件，每個物件各自擁有一份。例如 `s1.name` 和 `s2.name` 可以不同，因為它們是不同物件的資料。",
          "`static` 成員屬於類別本身，不屬於某一個物件。所有物件會共享同一份 static 變數，所以它很適合拿來記錄「整個類別共同的資料」。",
          "例如想知道目前建立了幾位學生，可以使用 `static int count`。每次 Constructor 執行時讓 `count++`，最後透過 `Student.count` 讀取。",
          "static 方法也屬於類別，可以用 `ClassName.methodName()` 呼叫。像 `Math.PI`、`Math.max()` 就是常見的類別層級用法。"
        ],
        code: {
          title: "一般成員 vs static 成員圖解",
          value: `一般成員：
s1.name = "Jimmy"
s2.name = "Amy"
每個物件各自擁有

static 成員：
Student.count = 2
所有 Student 物件共享同一份`
        },
        codes: [
          {
            title: "範例 1：宣告 static 變數",
            value: `class Student {
    static int count = 0;
}`
          },
          {
            title: "範例 2：Constructor 中累加 count",
            value: `class Student {
    static int count = 0;

    Student() {
        count++;
    }
}`
          },
          {
            title: "範例 3：建立三個物件後輸出 Student.count",
            value: `Student s1 = new Student();
Student s2 = new Student();
Student s3 = new Student();

System.out.println(Student.count);

// 執行結果：
// 3`
          },
          {
            title: "範例 4：static 方法",
            value: `class Student {
    static int count = 0;

    Student() {
        count++;
    }

    static void showCount() {
        System.out.println("學生數量：" + count);
    }
}

new Student();
new Student();
Student.showCount();

// 執行結果：
// 學生數量：2`
          },
          {
            title: "範例 5：Math 類別概念",
            value: `System.out.println(Math.PI);
System.out.println(Math.max(10, 20));

// 執行結果：
// 3.141592653589793
// 20`
          },
          {
            title: "範例 6：工具類別 Utility",
            value: `class Utility {
    static int max(int a, int b) {
        return a > b ? a : b;
    }
}

System.out.println(Utility.max(8, 3));

// 執行結果：
// 8`
          },
          {
            title: "範例 7：一般成員與 static 成員表格",
            value: `項目             一般成員              static 成員
所屬對象         物件                  類別
呼叫方式         object.name           ClassName.name
資料份數         每個物件一份          類別共享一份
適合用途         姓名、年齡、分數      count、工具方法、常數`
          },
          {
            title: "範例 8：static 常數",
            value: `class CircleTool {
    static final double PI = 3.14159;

    static double area(double radius) {
        return PI * radius * radius;
    }
}

System.out.println(CircleTool.area(2));

// 執行結果：
// 12.56636`
          }
        ]
      },
      {
        sectionId: "9.4",
        title: "綜合演練",
        body: [
          "本節把 Constructor、this、封裝、Getter/Setter、static 與 Overloading 放進實際類別設計中。",
          "請照著「問題說明 -> 解題思路 -> 流程圖 -> Hint -> Solution -> Explanation -> 延伸挑戰」閱讀，不要只複製答案。真正重要的是你知道每個關鍵字出現的理由。"
        ],
        code: {
          title: "題目 1：提供輔助工具的類別",
          value: `問題說明：
建立 Utility 類別，提供求最大值、最小值、平均值的 static 方法。

解題思路：
工具方法不需要保存物件狀態，因此適合設計成 static。
呼叫時使用 Utility.max(...)，不需要 new Utility()。

流程圖：
資料 8, 3, 10
  ↓
Utility.max()
Utility.min()
Utility.average()
  ↓
輸出最大、最小、平均

Hint：
平均值建議回傳 double，避免整數除法造成小數消失。

Solution：
class Utility {
    static int max(int a, int b, int c) {
        int result = a;
        if (b > result) result = b;
        if (c > result) result = c;
        return result;
    }

    static int min(int a, int b, int c) {
        int result = a;
        if (b < result) result = b;
        if (c < result) result = c;
        return result;
    }

    static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }
}

System.out.println(Utility.max(8, 3, 10));
System.out.println(Utility.min(8, 3, 10));
System.out.println(Utility.average(8, 3, 10));

執行結果：
10
3
7.0

Explanation：
Utility 不需要建立物件，因為它只是提供計算功能。static 方法讓這種工具類別更直覺。

延伸挑戰：
改成接收 int[]，計算任意數量的最大值、最小值與平均值。`
        },
        codes: [
          {
            title: "題目 2：善用多重定義",
            value: `問題說明：
建立 Calculator 類別，提供三種 add 方法：
add(int, int)
add(int, int, int)
add(double, double)

解題思路：
三個方法做的事情都叫「加法」，但參數數量或型態不同。
這正是 Overloading 的適合場景。

流程圖：
add(1, 2)       -> 使用 int, int 版本
add(1, 2, 3)    -> 使用 int, int, int 版本
add(1.5, 2.5)   -> 使用 double, double 版本

Hint：
合法 Overloading 看的是參數列表，不是只看回傳型態。

Solution：
class Calculator {
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

Calculator calc = new Calculator();
System.out.println(calc.add(1, 2));
System.out.println(calc.add(1, 2, 3));
System.out.println(calc.add(1.5, 2.5));

執行結果：
3
6
4.0

Explanation：
使用者只要記得 add 這個名稱，Java 會依照參數自動選擇合適的方法版本。

延伸挑戰：
加入 add(int[] nums)，計算陣列所有數字總和。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch09-exercise-book-constructor",
        sectionId: "9.1",
        type: "exercise",
        title: "9.1 練習：建立 Book 類別與 Constructor",
        question: "建立 `Book` 類別，包含 `title`、`price`，並使用 Constructor 初始化資料。",
        hint: "Constructor 名稱必須和類別相同，而且不要寫 void。",
        solution: `class Book {
    String title;
    int price;

    Book(String title, int price) {
        this.title = title;
        this.price = price;
    }
}`,
        explanation: "`this.title` 是物件的屬性，右邊的 `title` 是 Constructor 參數。"
      }),
      createActivity({
        id: "ch09-exercise-car-this",
        sectionId: "9.1",
        type: "exercise",
        title: "9.1 練習：建立 Car 類別並使用 this",
        question: "建立 `Car` 類別，包含 `brand`、`year`，使用 `this` 完成初始化。",
        hint: "參數名稱可以和屬性名稱相同，使用 `this` 區分。",
        solution: `class Car {
    String brand;
    int year;

    Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
}`,
        explanation: "`this` 指向目前正在建立的 Car 物件，所以能明確設定該物件的資料。"
      }),
      createActivity({
        id: "ch09-thought-constructor-void",
        sectionId: "9.1",
        type: "thought",
        title: "9.1 思考題：為什麼 void Student() 不是 Constructor？",
        question: "請說明 `Student()` 和 `void Student()` 的差異。",
        hint: "觀察 Constructor 的三個特性：名稱相同、沒有回傳型態、自動執行。",
        solution: "`Student()` 是 Constructor；`void Student()` 因為有回傳型態 void，所以它只是一般方法。",
        explanation: "Constructor 的語法規則很嚴格。只要寫了回傳型態，即使是 void，也不再是 Constructor。"
      }),
      createActivity({
        id: "ch09-exercise-person-encapsulation",
        sectionId: "9.2",
        type: "exercise",
        title: "9.2 練習：建立 Person 類別",
        question: "建立 `Person` 類別，將 `name`、`age` 設為 private，並提供 Getter / Setter。",
        hint: "Setter 可以檢查 age 是否大於等於 0。",
        solution: `class Person {
    private String name;
    private int age;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }

    public int getAge() {
        return age;
    }
}`,
        explanation: "private 保護資料，public 方法提供受控的讀寫入口。"
      }),
      createActivity({
        id: "ch09-exercise-product-encapsulation",
        sectionId: "9.2",
        type: "exercise",
        title: "9.2 練習：建立 Product 類別",
        question: "建立 `Product` 類別，保護價格不可小於 0。",
        hint: "在 `setPrice` 中使用 if 判斷。",
        solution: `class Product {
    private int price;

    public void setPrice(int price) {
        if (price >= 0) {
            this.price = price;
        }
    }

    public int getPrice() {
        return price;
    }
}`,
        explanation: "Setter 的價值在於可以加入檢查，避免外部直接放入不合理資料。"
      }),
      createActivity({
        id: "ch09-homework-student-manager",
        sectionId: "9.2",
        type: "homework",
        title: "9.2 作業：學生資料管理類別",
        question: "設計 `Student` 類別，包含 private name、score，並確保 score 只能是 0 到 100。",
        hint: "Constructor 可以呼叫 Setter，讓初始化時也套用檢查規則。",
        solution: `class Student {
    private String name;
    private int score;

    Student(String name, int score) {
        this.name = name;
        setScore(score);
    }

    public void setScore(int score) {
        if (score >= 0 && score <= 100) {
            this.score = score;
        }
    }

    public int getScore() {
        return score;
    }
}`,
        explanation: "Constructor 負責建立時初始化，Setter 負責保護修改規則。兩者可以一起使用。"
      }),
      createActivity({
        id: "ch09-exercise-static-count",
        sectionId: "9.3",
        type: "exercise",
        title: "9.3 練習：計算建立物件數量",
        question: "在 `Student` 類別中使用 static count，統計建立了幾個物件。",
        hint: "在 Constructor 中寫 `count++;`。",
        solution: `class Student {
    static int count = 0;

    Student() {
        count++;
    }
}`,
        explanation: "count 是 static，因此所有 Student 物件共享同一份數字。"
      }),
      createActivity({
        id: "ch09-exercise-utility-static",
        sectionId: "9.3",
        type: "exercise",
        title: "9.3 練習：建立 Utility static 方法",
        question: "建立 `Utility.square(int n)`，回傳 n 的平方。",
        hint: "static 方法可以用 `Utility.square(5)` 呼叫。",
        solution: `class Utility {
    static int square(int n) {
        return n * n;
    }
}`,
        explanation: "square 不需要物件狀態，只依賴傳入參數，因此適合設計成 static。"
      }),
      createActivity({
        id: "ch09-thought-static-member",
        sectionId: "9.3",
        type: "thought",
        title: "9.3 思考題：什麼資料適合 static？",
        question: "姓名適合 static 嗎？建立物件數量適合 static 嗎？請說明理由。",
        hint: "思考資料是每個物件不同，還是整個類別共享。",
        solution: "姓名不適合 static，因為每個學生姓名不同。建立物件數量適合 static，因為它是整個 Student 類別共同統計的資料。",
        explanation: "判斷 static 的重點是資料歸屬。屬於單一物件就用一般成員；屬於整個類別就可以考慮 static。"
      }),
      createActivity({
        id: "ch09-project-utility",
        sectionId: "9.4",
        type: "exercise",
        title: "9.4 綜合練習：Utility 工具類別",
        question: "完成 Utility 類別，提供 max、min、average 三個 static 方法。",
        hint: "先固定接收三個 int，平均值回傳 double。",
        solution: `class Utility {
    static int max(int a, int b, int c) {
        int result = a;
        if (b > result) result = b;
        if (c > result) result = c;
        return result;
    }

    static int min(int a, int b, int c) {
        int result = a;
        if (b < result) result = b;
        if (c < result) result = c;
        return result;
    }

    static double average(int a, int b, int c) {
        return (a + b + c) / 3.0;
    }
}`,
        explanation: "這題練習 static 方法。工具類別常常不需要建立物件，直接用類別名稱呼叫即可。"
      }),
      createActivity({
        id: "ch09-project-calculator-overloading",
        sectionId: "9.4",
        type: "homework",
        title: "9.4 作業：Calculator 多重定義",
        question: "建立 Calculator 類別，完成三種 add 方法並測試呼叫結果。",
        hint: "三個 add 的參數列表必須不同。",
        solution: `class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}`,
        explanation: "Overloading 讓同一個概念可以使用同一個方法名稱，呼叫時依參數自動分派。"
      })
    ],
    quiz: [
      { question: "Constructor 的名稱必須和什麼相同？", options: ["類別名稱", "檔案副檔名", "main 方法", "package 名稱"], answer: 0, explanation: "Constructor 名稱必須與類別名稱完全相同。" },
      { question: "Constructor 是否有回傳型態？", options: ["沒有", "一定是 void", "一定是 int", "一定是 String"], answer: 0, explanation: "Constructor 不寫回傳型態，連 void 都不能寫。" },
      { question: "什麼時候 Constructor 會自動執行？", options: ["建立物件時", "按下存檔時", "寫註解時", "import 時"], answer: 0, explanation: "使用 new 建立物件時，Constructor 會被呼叫。" },
      { question: "`this.name = name;` 中的 this.name 代表什麼？", options: ["目前物件的屬性", "固定字串", "class 檔名", "迴圈變數"], answer: 0, explanation: "`this` 指向目前物件，因此 `this.name` 是物件屬性。" },
      { question: "`void Student(){}` 為什麼不是 Constructor？", options: ["因為寫了回傳型態 void", "因為名字太短", "因為不能有大括號", "因為沒有 static"], answer: 0, explanation: "Constructor 不可寫任何回傳型態。" },
      { question: "封裝主要想保護什麼？", options: ["物件資料的合理使用", "只能保護註解", "刪除所有方法", "禁止建立物件"], answer: 0, explanation: "封裝讓資料透過受控方法被讀取或修改。" },
      { question: "`private` 成員可以在哪裡直接存取？", options: ["同一個類別內部", "任何外部程式", "只能在 HTML", "只能在 switch"], answer: 0, explanation: "private 限制成員只能在類別內部直接使用。" },
      { question: "Getter 通常負責什麼？", options: ["讀取資料", "刪除 class", "建立 package", "一定修改資料"], answer: 0, explanation: "Getter 通常用來回傳私有屬性的值。" },
      { question: "Setter 的好處是什麼？", options: ["修改前可以檢查資料", "會讓程式不用編譯", "只能輸出文字", "一定讓資料變成 static"], answer: 0, explanation: "Setter 可以加入驗證規則，避免不合理資料進入物件。" },
      { question: "`public` 方法代表什麼？", options: ["外部程式可以呼叫", "只能類別內部呼叫", "不能被執行", "只用在陣列"], answer: 0, explanation: "public 是公開存取權限。" },
      { question: "static 成員屬於誰？", options: ["類別本身", "某一個特定物件", "某一行註解", "只能屬於 Scanner"], answer: 0, explanation: "static 成員屬於類別，不屬於單一物件。" },
      { question: "哪個情境適合 static 變數？", options: ["統計建立物件數量", "每個學生自己的姓名", "每個帳戶自己的餘額", "每本書自己的書名"], answer: 0, explanation: "建立物件數量是整個類別共享的資料，適合 static。" },
      { question: "呼叫 static 方法常見格式是什麼？", options: ["ClassName.methodName()", "object only without dot", "case.method", "return.method"], answer: 0, explanation: "static 方法常以類別名稱呼叫，例如 `Math.max()`。" },
      { question: "`Math.PI` 比較像什麼？", options: ["類別層級的常數", "某個 Math 物件的姓名", "Constructor", "Setter"], answer: 0, explanation: "`Math.PI` 是常見的 static 常數概念。" },
      { question: "本章尚未深入哪個主題？", options: ["繼承與多型", "Constructor", "this", "Getter / Setter"], answer: 0, explanation: "繼承與多型是後續章節內容，本章先專注物件建構與封裝基礎。" }
    ]
  };
}

function createChapter10() {
  return {
    id: 10,
    code: "CH10",
    title: "字串（String）",
    minutes: 135,
    summary: "學會 String 建立、常用方法、不可變性、StringBuilder/StringBuffer 與 Regex 格式驗證。",
    intro: "字串是程式最常處理的資料之一。姓名、帳號、Email、手機號碼、地址、CSV 資料，幾乎都會用 String 表示。本章會讓你從基本建立方式一路走到 Regex 驗證。",
    goals: [
      "了解 String 的本質",
      "學會建立字串",
      "學會使用 String 類別常用方法",
      "了解 String 不可變性 Immutable",
      "學會使用 StringBuilder 與 StringBuffer",
      "學會使用 Regular Expression Regex",
      "能夠進行格式驗證"
    ],
    sections: [
      {
        sectionId: "10.1",
        title: "字串的產生",
        body: [
          "Java 中的字串不是基本型別，而是 `String` 類別的物件。你平常寫的 `\"Jimmy\"`，其實就是一個字串物件。",
          "建立字串最常見的方式是直接使用雙引號，例如 `String name = \"Jimmy\";`。也可以使用 `new String(\"Jimmy\")` 建立，但初學階段多數情況使用雙引號即可。",
          "字串可以使用 `+` 串接，可以用 `length()` 取得長度，也可以用 `charAt(index)` 取得指定位置的字元。請記得索引從 0 開始。",
          "String 很重要的特性是 Immutable，也就是不可變。當你呼叫 `concat()`、`replace()` 這類方法時，原本的字串不會被改掉，而是產生新的字串結果。"
        ],
        code: {
          title: "圖解：String 是物件",
          value: `String name = "Jimmy";

變數 name
  ↓ 參考到
String 物件："Jimmy"`
        },
        codes: [
          {
            title: "範例 1：用雙引號建立字串",
            value: `String name = "Jimmy";
System.out.println(name);

// 執行結果：
// Jimmy

// 解說：
// 這是最常見、最簡潔的建立字串方式。`
          },
          {
            title: "範例 2：使用 new String 建立字串",
            value: `String name = new String("Jimmy");
System.out.println(name);

// 執行結果：
// Jimmy

// 解說：
// 這也能建立 String 物件，但通常不需要特別這樣寫。`
          },
          {
            title: "範例 3：兩種建立方式的概念差異",
            value: `String a = "Hello";
String b = new String("Hello");

System.out.println(a);
System.out.println(b);

// 執行結果：
// Hello
// Hello

// 解說：
// 兩者內容一樣，但建立物件的方式不同。
// 初學時先記得：比較文字內容請用 equals()。`
          },
          {
            title: "範例 4：字串連接",
            value: `String firstName = "Jimmy";
String lastName = "Lin";
String fullName = firstName + " " + lastName;

System.out.println(fullName);

// 執行結果：
// Jimmy Lin`
          },
          {
            title: "範例 5：字串與數字串接",
            value: `String name = "Jimmy";
int age = 25;

System.out.println(name + " 今年 " + age + " 歲");

// 執行結果：
// Jimmy 今年 25 歲`
          },
          {
            title: "範例 6：取得字串長度",
            value: `String name = "Jimmy";

System.out.println(name.length());

// 執行結果：
// 5

// 解說：
// length() 會回傳字串中有幾個字元。`
          },
          {
            title: "範例 7：取得第一個字元",
            value: `String name = "Jimmy";

System.out.println(name.charAt(0));

// 執行結果：
// J

// 解說：
// charAt(0) 取得索引 0 的字元，也就是第一個字元。`
          },
          {
            title: "範例 8：String 不可變 Immutable",
            value: `String s = "Hello";

s.concat(" World");

System.out.println(s);

// 執行結果：
// Hello

// 解說：
// concat() 產生了新字串，但你沒有接住結果。
// 原本的 s 仍然指向 "Hello"。`
          },
          {
            title: "範例 9：接住新字串結果",
            value: `String s = "Hello";

s = s.concat(" World");

System.out.println(s);

// 執行結果：
// Hello World

// 解說：
// String 不是被原地修改，而是讓 s 改成參考新的字串結果。`
          }
        ]
      },
      {
        sectionId: "10.2",
        title: "String 類別的方法",
        body: [
          "String 類別提供很多常用方法，可以取得長度、擷取片段、搜尋文字、替換文字、轉換大小寫、切割資料。",
          "方法名稱後面有小括號，例如 `length()`、`trim()`，代表你正在呼叫 String 物件提供的功能。",
          "比較字串內容時請使用 `equals()`。`==` 比較的是兩個參考是否指向同一個物件；`equals()` 比較的是文字內容是否相同。",
          "這一節的重點不是把所有方法一次背完，而是知道遇到文字處理時可以查 String 方法，並能看懂常見用法。"
        ],
        code: {
          title: "== 與 equals() 差異",
          value: `String a = "Hello";
String b = new String("Hello");

System.out.println(a == b);
System.out.println(a.equals(b));

// 執行結果：
// false
// true

// 解說：
// a == b 比較是否為同一個物件。
// a.equals(b) 比較文字內容是否相同。`
        },
        codes: [
          { title: "範例 1：length()", value: `String str = "Java";\nSystem.out.println(str.length());\n\n// 執行結果：\n// 4` },
          { title: "範例 2：charAt()", value: `String str = "Java";\nSystem.out.println(str.charAt(2));\n\n// 執行結果：\n// v` },
          { title: "範例 3：substring(begin, end)", value: `String str = "JavaScript";\nSystem.out.println(str.substring(1, 4));\n\n// 執行結果：\n// ava\n\n// 解說：\n// 從索引 1 取到索引 4 前一個位置。` },
          { title: "範例 4：equals()", value: `String str = "ABC";\nSystem.out.println(str.equals("ABC"));\n\n// 執行結果：\n// true` },
          { title: "範例 5：equalsIgnoreCase()", value: `String str = "Java";\nSystem.out.println(str.equalsIgnoreCase("java"));\n\n// 執行結果：\n// true` },
          { title: "範例 6：compareTo()", value: `String a = "Apple";\nString b = "Banana";\nSystem.out.println(a.compareTo(b));\n\n// 執行結果：\n// 負數\n\n// 解說：\n// a 在字典順序上排在 b 前面。` },
          { title: "範例 7：indexOf()", value: `String str = "banana";\nSystem.out.println(str.indexOf("na"));\n\n// 執行結果：\n// 2` },
          { title: "範例 8：lastIndexOf()", value: `String str = "banana";\nSystem.out.println(str.lastIndexOf("na"));\n\n// 執行結果：\n// 4` },
          { title: "範例 9：contains()", value: `String str = "I love Java";\nSystem.out.println(str.contains("Java"));\n\n// 執行結果：\n// true` },
          { title: "範例 10：startsWith()", value: `String file = "Report.pdf";\nSystem.out.println(file.startsWith("Report"));\n\n// 執行結果：\n// true` },
          { title: "範例 11：endsWith()", value: `String file = "Report.pdf";\nSystem.out.println(file.endsWith(".pdf"));\n\n// 執行結果：\n// true` },
          { title: "範例 12：replace()", value: `String str = "Java is hard";\nSystem.out.println(str.replace("hard", "fun"));\n\n// 執行結果：\n// Java is fun` },
          { title: "範例 13：toUpperCase()", value: `String str = "java";\nSystem.out.println(str.toUpperCase());\n\n// 執行結果：\n// JAVA` },
          { title: "範例 14：toLowerCase()", value: `String str = "JAVA";\nSystem.out.println(str.toLowerCase());\n\n// 執行結果：\n// java` },
          { title: "範例 15：trim()", value: `String str = "  Jimmy  ";\nSystem.out.println(str.trim());\n\n// 執行結果：\n// Jimmy` },
          { title: "範例 16：split()", value: `String csv = "Amy,90,Pass";\nString[] parts = csv.split(",");\n\nSystem.out.println(parts[0]);\nSystem.out.println(parts[1]);\nSystem.out.println(parts[2]);\n\n// 執行結果：\n// Amy\n// 90\n// Pass` },
          { title: "範例 17：生日字串擷取", value: `String birthday = "2001-08-15";\nString year = birthday.substring(0, 4);\nString month = birthday.substring(5, 7);\nString day = birthday.substring(8, 10);\n\nSystem.out.println(year);\nSystem.out.println(month);\nSystem.out.println(day);\n\n// 執行結果：\n// 2001\n// 08\n// 15` }
        ]
      },
      {
        sectionId: "10.3",
        title: "StringBuffer 與 StringBuilder 類別",
        body: [
          "String 不可變，所以每次串接或修改字串時，通常會產生新的字串。如果你在迴圈裡頻繁修改字串，效能可能變差。",
          "`StringBuilder` 和 `StringBuffer` 都是可修改的字串容器。它們可以使用 `append()`、`insert()`、`delete()`、`reverse()` 等方法改變內容。",
          "初學時可以先這樣記：單執行緒或一般日常練習多用 `StringBuilder`；需要執行緒安全時才考慮 `StringBuffer`。",
          "最後如果需要變回一般字串，可以呼叫 `toString()`。"
        ],
        code: {
          title: "比較表：String / StringBuffer / StringBuilder",
          value: `項目            String          StringBuffer       StringBuilder
是否可修改      不可變          可修改             可修改
執行效率        頻繁修改較差    較 String 好       通常最快
執行緒安全      本身不可變      安全               不保證安全
常見用途        少量文字        多執行緒修改       一般大量串接`
        },
        codes: [
          { title: "範例 1：建立 StringBuilder", value: `StringBuilder sb = new StringBuilder();\nSystem.out.println(sb.length());\n\n// 執行結果：\n// 0` },
          { title: "範例 2：append()", value: `StringBuilder sb = new StringBuilder();\nsb.append("Hello");\nsb.append(" Java");\n\nSystem.out.println(sb);\n\n// 執行結果：\n// Hello Java` },
          { title: "範例 3：insert()", value: `StringBuilder sb = new StringBuilder("Java");\nsb.insert(0, "Hello ");\n\nSystem.out.println(sb);\n\n// 執行結果：\n// Hello Java` },
          { title: "範例 4：delete()", value: `StringBuilder sb = new StringBuilder("Hello Java");\nsb.delete(0, 6);\n\nSystem.out.println(sb);\n\n// 執行結果：\n// Java` },
          { title: "範例 5：reverse()", value: `StringBuilder sb = new StringBuilder("abc");\nsb.reverse();\n\nSystem.out.println(sb);\n\n// 執行結果：\n// cba` },
          { title: "範例 6：toString()", value: `StringBuilder sb = new StringBuilder();\nsb.append("Jimmy");\n\nString name = sb.toString();\nSystem.out.println(name);\n\n// 執行結果：\n// Jimmy` },
          { title: "範例 7：字串累加 100 次", value: `StringBuilder sb = new StringBuilder();\n\nfor (int i = 1; i <= 100; i++) {\n    sb.append(i).append(" ");\n}\n\nSystem.out.println(sb.toString());\n\n// 執行結果：\n// 1 2 3 ... 100` },
          { title: "範例 8：StringBuffer 基本用法", value: `StringBuffer buffer = new StringBuffer();\nbuffer.append("Thread");\nbuffer.append(" Safe");\n\nSystem.out.println(buffer);\n\n// 執行結果：\n// Thread Safe` },
          { title: "範例 9：組合個人資料", value: `StringBuilder sb = new StringBuilder();\nsb.append("姓名：").append("Jimmy").append("\\n");\nsb.append("年齡：").append(25).append("\\n");\nsb.append("技能：").append("Java");\n\nSystem.out.println(sb.toString());\n\n// 執行結果：\n// 姓名：Jimmy\n// 年齡：25\n// 技能：Java` }
        ]
      },
      {
        sectionId: "10.4",
        title: "規則表示法（Regular Expression）",
        body: [
          "Regular Expression，常簡稱 Regex，是用一段規則描述文字格式。它常用來驗證格式、搜尋文字、替換文字。",
          "初學 Regex 不需要一次背完整語法。先認識幾個常用符號：`.` 代表任一字元，`\\d` 代表數字，`\\w` 代表英數底線，`\\s` 代表空白，`+` 代表一次以上，`*` 代表零次以上，`?` 代表零次或一次。",
          "`[]` 可以描述可接受的字元集合，`^` 代表開頭，`$` 代表結尾。做格式驗證時，通常會搭配 `^` 和 `$`，確保整段文字都符合規則。",
          "在 Java 字串中，反斜線本身也需要跳脫，所以 Regex 的 `\\d+` 在 Java 程式裡要寫成 `\"\\\\d+\"`。"
        ],
        code: {
          title: "Regex 圖解：手機格式",
          value: `^09\\d{8}$
│ │ │
│ │ └─ 後面 8 個數字
│ └─── 前面必須是 09
└───── 從字串開頭開始比對，直到結尾`
        },
        codes: [
          { title: "範例 1：檢查數字", value: `System.out.println("123".matches("\\\\d+"));\n\n// 執行結果：\n// true` },
          { title: "範例 2：檢查不是數字", value: `System.out.println("ABC".matches("\\\\D+"));\n\n// 執行結果：\n// true` },
          { title: "範例 3：檢查英文", value: `System.out.println("Java".matches("[A-Za-z]+"));\n\n// 執行結果：\n// true` },
          { title: "範例 4：檢查英數底線", value: `System.out.println("user_01".matches("\\\\w+"));\n\n// 執行結果：\n// true` },
          { title: "範例 5：檢查空白", value: `System.out.println("   ".matches("\\\\s+"));\n\n// 執行結果：\n// true` },
          { title: "範例 6：任一字元 .", value: `System.out.println("cat".matches("c.t"));\n\n// 執行結果：\n// true` },
          { title: "範例 7：+ 一次以上", value: `System.out.println("999".matches("9+"));\n\n// 執行結果：\n// true` },
          { title: "範例 8：* 零次以上", value: `System.out.println("abbb".matches("ab*"));\n\n// 執行結果：\n// true` },
          { title: "範例 9：? 零次或一次", value: `System.out.println("color".matches("colou?r"));\nSystem.out.println("colour".matches("colou?r"));\n\n// 執行結果：\n// true\n// true` },
          { title: "範例 10：[] 字元集合", value: `System.out.println("A".matches("[ABC]"));\n\n// 執行結果：\n// true` },
          { title: "範例 11：^ 與 $ 限制整段", value: `System.out.println("abc123".matches("^[a-z]+\\\\d+$"));\n\n// 執行結果：\n// true` },
          { title: "範例 12：檢查手機號碼", value: `String phone = "0912345678";\nSystem.out.println(phone.matches("^09\\\\d{8}$"));\n\n// 執行結果：\n// true` },
          { title: "範例 13：檢查 Email", value: `String email = "jimmy@example.com";\nSystem.out.println(email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$"));\n\n// 執行結果：\n// true` },
          { title: "範例 14：檢查學號", value: `String studentId = "S1234567";\nSystem.out.println(studentId.matches("^S\\\\d{7}$"));\n\n// 執行結果：\n// true` },
          { title: "範例 15：檢查身分證字號格式", value: `String id = "A123456789";\nSystem.out.println(id.matches("^[A-Z][12]\\\\d{8}$"));\n\n// 執行結果：\n// true` },
          { title: "範例 16：replaceAll() 替換多個空白", value: `String text = "Java    is   fun";\nSystem.out.println(text.replaceAll("\\\\s+", " "));\n\n// 執行結果：\n// Java is fun` }
        ]
      },
      {
        sectionId: "10.5",
        title: "綜合演練",
        body: [
          "本節把 String 方法與 Regex 放進真實格式驗證情境。第一題先檢查格式，第二題進一步檢核台灣身分證字號的檢查碼。",
          "請注意：格式正確不一定代表資料有效。格式驗證只確認長相；檢查碼驗證才會依照規則計算內容是否合理。"
        ],
        code: {
          title: "題目 1：檢查身份證字號格式",
          value: `問題說明：
使用 Regular Expression 檢查身份證字號格式：
- 第一碼英文
- 第二碼為 1 或 2
- 共 10 碼

解題思路：
使用 ^ 和 $ 限制整段字串。
第一碼用 [A-Z]。
第二碼用 [12]。
後 8 碼用 \\d{8}。

流程圖：
輸入 ID
  ↓
轉成大寫
  ↓
matches("^[A-Z][12]\\\\d{8}$")
  ↓
true：格式正確
false：格式錯誤

Hint：
Java 字串裡的 \\d 要寫成 "\\\\d"。

Solution：
String id = "A123456789";
id = id.toUpperCase();

boolean valid =
    id.matches("^[A-Z][12]\\\\d{8}$");

System.out.println(valid ? "格式正確" : "格式錯誤");

執行結果：
格式正確

Explanation：
Regex 只檢查字串長相。這題不會判斷檢查碼是否正確，只確認格式符合規則。`
        },
        codes: [
          {
            title: "題目 2：檢核身份證字號",
            value: `問題說明：
除了格式驗證外，還要驗證身分證字號檢查碼。

解題思路：
1. 先用 Regex 檢查格式。
2. 將第一個英文字母轉成對應數字。
3. 把英文代碼拆成十位數與個位數。
4. 依權重加總。
5. 加上最後一碼檢查碼後，總和若可被 10 整除，代表通過。

英文字母轉數字：
A=10, B=11, C=12, D=13, E=14, F=15, G=16, H=17, I=34, J=18,
K=19, L=20, M=21, N=22, O=35, P=23, Q=24, R=25, S=26, T=27,
U=28, V=29, W=32, X=30, Y=31, Z=33

計算步驟圖解：
A123456789
A -> 10
1 * 1 + 0 * 9
+ 1 * 8
+ 2 * 7
+ 3 * 6
+ 4 * 5
+ 5 * 4
+ 6 * 3
+ 7 * 2
+ 8 * 1
+ 9
  ↓
總和 % 10 == 0 才通過

流程圖：
輸入 ID
  ↓
格式驗證
  ↓
英文字母轉數字
  ↓
套用權重計算總和
  ↓
判斷 sum % 10 == 0

Hint：
可以先建立字母對應表字串，利用 indexOf 找出英文字母位置。

Solution：
static boolean isTaiwanId(String id) {
    id = id.toUpperCase();

    if (!id.matches("^[A-Z][12]\\\\d{8}$")) {
        return false;
    }

    String letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    int[] codes = {
        10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35
    };

    int index = letters.indexOf(id.charAt(0));
    int code = codes[index];

    int sum = (code / 10) + (code % 10) * 9;
    int weight = 8;

    for (int i = 1; i <= 8; i++) {
        int digit = id.charAt(i) - '0';
        sum += digit * weight;
        weight--;
    }

    int checkCode = id.charAt(9) - '0';
    sum += checkCode;

    return sum % 10 == 0;
}

System.out.println(isTaiwanId("A123456789"));

執行結果：
true

Explanation：
第一碼英文代表地區代碼，必須先轉成數字再加入計算。
中間 8 碼依序乘上 8 到 1 的權重。
最後一碼是檢查碼，整體加總後能被 10 整除才算通過。

延伸挑戰：
把錯誤原因分成：格式錯誤、英文字母錯誤、檢查碼錯誤。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch10-exercise-create-string",
        sectionId: "10.1",
        type: "exercise",
        title: "10.1 練習：建立與觀察字串",
        question: "建立自己的姓名字串，印出長度、第一個字元，並串接姓名與年齡。",
        hint: "使用 `length()`、`charAt(0)` 和 `+` 串接。",
        solution: `String name = "Jimmy";
int age = 25;

System.out.println(name.length());
System.out.println(name.charAt(0));
System.out.println(name + " 今年 " + age + " 歲");`,
        explanation: "這題練習 String 的基本建立、索引概念與字串串接。"
      }),
      createActivity({
        id: "ch10-thought-immutable",
        sectionId: "10.1",
        type: "thought",
        title: "10.1 思考題：為什麼 concat 後原字串沒變？",
        question: "`String s = \"Hello\"; s.concat(\" World\");` 之後，為什麼 s 仍然是 Hello？",
        hint: "想想 String 的 Immutable，以及方法回傳的新結果有沒有被變數接住。",
        solution: "因為 String 不可變，concat 會產生新的字串結果，但原本的 s 沒有重新指定，所以仍然指向 \"Hello\"。",
        explanation: "若要看到新結果，必須寫 `s = s.concat(\" World\");`。"
      }),
      createActivity({
        id: "ch10-exercise-string-methods",
        sectionId: "10.2",
        type: "exercise",
        title: "10.2 練習：使用 String 常用方法",
        question: "完成包含文字判斷、生日擷取、CSV 切割、忽略大小寫比較的練習。",
        hint: "會用到 `contains()`、`substring()`、`split()`、`equalsIgnoreCase()`。",
        solution: `String text = "I love Java";
System.out.println(text.contains("Java"));

String birthday = "2001-08-15";
System.out.println(birthday.substring(0, 4));

String csv = "Amy,90,Pass";
String[] parts = csv.split(",");
System.out.println(parts[0]);

System.out.println("java".equalsIgnoreCase("JAVA"));`,
        explanation: "這些方法是日常文字處理最常見的組合。"
      }),
      createActivity({
        id: "ch10-thought-equals",
        sectionId: "10.2",
        type: "thought",
        title: "10.2 思考題：== 和 equals() 差在哪？",
        question: "請說明 `a == b` 和 `a.equals(b)` 在字串比較上的差異。",
        hint: "`==` 看參考是否相同；`equals()` 看文字內容是否相同。",
        solution: "`==` 比較兩個變數是否指向同一個物件；`equals()` 比較字串內容是否相同。",
        explanation: "寫 Java 字串內容比較時，通常應該使用 `equals()`。"
      }),
      createActivity({
        id: "ch10-exercise-stringbuilder",
        sectionId: "10.3",
        type: "exercise",
        title: "10.3 練習：使用 StringBuilder",
        question: "建立姓名字串、反轉字串，並組合一段個人資料。",
        hint: "使用 `append()`、`reverse()`、`toString()`。",
        solution: `StringBuilder sb = new StringBuilder();
sb.append("Jimmy");

System.out.println(sb.reverse());

StringBuilder card = new StringBuilder();
card.append("姓名：").append("Jimmy").append("\\n");
card.append("年齡：").append(25);

System.out.println(card.toString());`,
        explanation: "StringBuilder 適合逐步組合文字，尤其是多次 append 的情況。"
      }),
      createActivity({
        id: "ch10-homework-profile-builder",
        sectionId: "10.3",
        type: "homework",
        title: "10.3 作業：個人資料產生器",
        question: "使用 StringBuilder 組合姓名、年齡、Email、手機，最後輸出完整資料卡。",
        hint: "每一行 append 一個欄位，可以加入 `\\n` 換行。",
        solution: `StringBuilder profile = new StringBuilder();
profile.append("姓名：").append("Jimmy").append("\\n");
profile.append("年齡：").append(25).append("\\n");
profile.append("Email：").append("jimmy@example.com").append("\\n");
profile.append("手機：").append("0912345678");

System.out.println(profile.toString());`,
        explanation: "這題把 StringBuilder 當成文字組裝工具，避免用很多 `+` 讓程式變亂。"
      }),
      createActivity({
        id: "ch10-exercise-regex-validation",
        sectionId: "10.4",
        type: "exercise",
        title: "10.4 練習：Regex 格式驗證",
        question: "驗證手機號碼、Email、學號、身份證字號格式。",
        hint: "手機可用 `^09\\\\d{8}$`，學號可假設為 S 加 7 個數字。",
        solution: `System.out.println("0912345678".matches("^09\\\\d{8}$"));
System.out.println("jimmy@example.com".matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$"));
System.out.println("S1234567".matches("^S\\\\d{7}$"));
System.out.println("A123456789".matches("^[A-Z][12]\\\\d{8}$"));`,
        explanation: "Regex 適合處理「文字長相是否符合規則」的問題。"
      }),
      createActivity({
        id: "ch10-thought-regex-anchor",
        sectionId: "10.4",
        type: "thought",
        title: "10.4 思考題：為什麼驗證格式常用 ^ 和 $？",
        question: "請說明 `^` 和 `$` 在格式驗證中的作用。",
        hint: "`^` 是開頭，`$` 是結尾。",
        solution: "`^` 限制從字串開頭開始，`$` 限制到字串結尾結束，兩者合用可確保整段文字都符合規則。",
        explanation: "如果沒有頭尾限制，可能只有一部分符合規則，也被誤判成通過。"
      }),
      createActivity({
        id: "ch10-project-id-format",
        sectionId: "10.5",
        type: "exercise",
        title: "10.5 綜合練習：檢查身份證字號格式",
        question: "使用 Regex 檢查身份證字號是否符合第一碼英文、第二碼 1 或 2、共 10 碼。",
        hint: "規則可寫為 `^[A-Z][12]\\\\d{8}$`。",
        solution: `String id = "A123456789";
boolean valid = id.toUpperCase().matches("^[A-Z][12]\\\\d{8}$");
System.out.println(valid);`,
        explanation: "這題只做格式檢查，不做檢查碼計算。"
      }),
      createActivity({
        id: "ch10-homework-id-checksum",
        sectionId: "10.5",
        type: "homework",
        title: "10.5 作業：身份證字號檢查碼",
        question: "完成 `isTaiwanId(String id)`，除了格式外，也檢查檢查碼。",
        hint: "先格式檢查，再把英文字母轉數字，最後依權重加總。",
        solution: `static boolean isTaiwanId(String id) {
    id = id.toUpperCase();
    if (!id.matches("^[A-Z][12]\\\\d{8}$")) return false;

    String letters = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    int[] codes = {10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35};
    int code = codes[letters.indexOf(id.charAt(0))];

    int sum = (code / 10) + (code % 10) * 9;
    int weight = 8;
    for (int i = 1; i <= 8; i++) {
        sum += (id.charAt(i) - '0') * weight;
        weight--;
    }
    sum += id.charAt(9) - '0';

    return sum % 10 == 0;
}`,
        explanation: "完整驗證包含格式與檢查碼。格式像是外觀，檢查碼則是內容規則。"
      })
    ],
    quiz: [
      { question: "Java 中的 String 是什麼？", options: ["String 類別的物件", "只能是 int", "只能是 char", "不能呼叫方法"], answer: 0, explanation: "String 是類別，字串是 String 物件。" },
      { question: "取得字串長度使用哪個方法？", options: ["length()", "size()", "count()", "long()"], answer: 0, explanation: "`length()` 會回傳字串長度。" },
      { question: "`charAt(0)` 取得什麼？", options: ["第一個字元", "最後一個字元", "字串長度", "整個字串"], answer: 0, explanation: "字串索引從 0 開始。" },
      { question: "String Immutable 代表什麼？", options: ["字串內容不可原地修改", "字串不能被印出", "字串只能是數字", "字串沒有方法"], answer: 0, explanation: "String 方法通常產生新字串，不會改動原本物件。" },
      { question: "比較字串內容通常使用？", options: ["equals()", "==", "=", "compareObject()"], answer: 0, explanation: "`equals()` 比較文字內容。" },
      { question: "`a == b` 對 String 通常比較什麼？", options: ["是否同一個物件參考", "文字長度", "是否都大寫", "是否包含空白"], answer: 0, explanation: "`==` 比較參考是否相同。" },
      { question: "擷取字串片段可用哪個方法？", options: ["substring()", "splitAll()", "cut()", "part()"], answer: 0, explanation: "`substring()` 可擷取部分字串。" },
      { question: "將 CSV 字串切割常用哪個方法？", options: ["split()", "divide()", "charAt()", "trimOnly()"], answer: 0, explanation: "`split()` 會依分隔規則切成陣列。" },
      { question: "頻繁串接字串通常較適合？", options: ["StringBuilder", "每次都用 new String", "只用 charAt", "switch"], answer: 0, explanation: "StringBuilder 是可修改的字串容器，適合大量串接。" },
      { question: "StringBuilder 最常用來加入內容的方法是？", options: ["append()", "pushText()", "addStringOnly()", "writeLine()"], answer: 0, explanation: "`append()` 會把內容加到尾端。" },
      { question: "StringBuffer 和 StringBuilder 的主要差異之一是？", options: ["StringBuffer 較重視執行緒安全", "StringBuffer 不能修改", "StringBuilder 不能 append", "兩者都不是類別"], answer: 0, explanation: "StringBuffer 的方法通常具備同步特性，較重視執行緒安全。" },
      { question: "Regex 常用來做什麼？", options: ["驗證格式", "建立物件建構子", "取代 class", "停止 JVM"], answer: 0, explanation: "Regex 常用於格式驗證、搜尋與替換。" },
      { question: "Regex 中 `\\d` 代表什麼？", options: ["數字", "英文字母", "空白", "任意單字"], answer: 0, explanation: "`\\d` 代表數字字元。" },
      { question: "Java 字串中的 Regex `\\d+` 要寫成？", options: ["\"\\\\d+\"", "\"\\d+\"", "\"/d+\"", "\"d+\""], answer: 0, explanation: "Java 字串裡反斜線也要跳脫，所以要寫 `\"\\\\d+\"`。" },
      { question: "身份證字號格式檢查和檢查碼檢核的差異是？", options: ["格式只看長相，檢查碼會依規則計算", "兩者完全一樣", "檢查碼只看第一碼", "格式驗證不能用 Regex"], answer: 0, explanation: "格式驗證確認文字外觀，檢查碼驗證內容規則是否通過。" }
    ]
  };
}

function createChapter11() {
  return {
    id: 11,
    code: "CH11",
    title: "繼承（Inheritance）",
    minutes: 150,
    summary: "學會 extends、方法覆寫、多型、Object 類別、Wrapper Class 與 Varargs。",
    intro: "繼承讓類別之間可以形成「一般到特殊」的關係。本章從 Animal、Vehicle、Employee 這些生活化例子開始，慢慢理解程式碼重用、Override 與 Polymorphism。",
    goals: [
      "了解什麼是繼承",
      "學會使用 extends",
      "學會方法覆寫 Override",
      "了解多型 Polymorphism",
      "了解 Object 類別",
      "認識 Varargs",
      "能夠設計具有繼承關係的類別"
    ],
    sections: [
      {
        sectionId: "11.1",
        title: "什麼是繼承？",
        body: [
          "繼承（Inheritance）可以想成把共同特徵放在父類別，讓子類別直接使用。Animal 可以放 name、age，Dog 和 Cat 就不用重複寫同樣欄位。",
          "生活中也常見類似分類：交通工具 Vehicle 下面可以有 Car、Motorcycle；員工 Employee 下面可以有 Engineer、Sales。",
          "繼承的主要目的不是炫技，而是避免重複程式碼，提高重用性，並讓類別關係更清楚。",
          "Java 使用 `extends` 表示繼承，例如 `class Dog extends Animal {}`。Dog 是子類別，Animal 是父類別。"
        ],
        code: {
          title: "圖解：父類別與子類別",
          value: `Animal
  ↓
Dog

Animal
  ↓
Cat

共同資料放 Animal：
String name;
int age;`
        },
        codes: [
          { title: "範例 1：沒有繼承時重複欄位", value: `class Dog {\n    String name;\n    int age;\n}\n\nclass Cat {\n    String name;\n    int age;\n}\n\n// 解說：\n// Dog 和 Cat 都重複寫 name、age。` },
          { title: "範例 2：建立 Animal 父類別", value: `class Animal {\n    String name;\n    int age;\n}\n\n// 解說：\n// 共同資料集中放在 Animal。` },
          { title: "範例 3：Dog 繼承 Animal", value: `class Dog extends Animal {\n}\n\n// 解說：\n// Dog 會擁有 Animal 的 name、age。` },
          { title: "範例 4：Cat 繼承 Animal", value: `class Cat extends Animal {\n}\n\n// 解說：\n// Cat 也會擁有 Animal 的 name、age。` },
          { title: "範例 5：建立 Dog 物件並存取繼承成員", value: `Dog dog = new Dog();\ndog.name = "Lucky";\ndog.age = 3;\n\nSystem.out.println(dog.name);\nSystem.out.println(dog.age);\n\n// 執行結果：\n// Lucky\n// 3` },
          { title: "範例 6：子類別可以加入自己的成員", value: `class Dog extends Animal {\n    String breed;\n}\n\nDog dog = new Dog();\ndog.name = "Lucky";\ndog.breed = "柴犬";\n\nSystem.out.println(dog.name + \" 是 \" + dog.breed);\n\n// 執行結果：\n// Lucky 是 柴犬` },
          { title: "範例 7：Vehicle 與 Car", value: `class Vehicle {\n    String brand;\n\n    void move() {\n        System.out.println(\"交通工具移動\");\n    }\n}\n\nclass Car extends Vehicle {\n}\n\nCar car = new Car();\ncar.brand = \"Toyota\";\ncar.move();\n\n// 執行結果：\n// 交通工具移動` },
          { title: "範例 8：Employee 與 Engineer", value: `class Employee {\n    String name;\n    int salary;\n}\n\nclass Engineer extends Employee {\n    String skill;\n}\n\nEngineer e = new Engineer();\ne.name = \"Amy\";\ne.skill = \"Java\";\n\nSystem.out.println(e.name + \" 會 \" + e.skill);\n\n// 執行結果：\n// Amy 會 Java` },
          { title: "範例 9：繼承關係不是擁有關係", value: `class Animal {}\nclass Dog extends Animal {}\n\n// Dog is an Animal：狗是一種動物。\n// 不要把「狗有一個動物」誤寫成繼承。` }
        ]
      },
      {
        sectionId: "11.2",
        title: "方法的繼承、重新定義、與多形",
        body: [
          "子類別不只會繼承父類別欄位，也會繼承父類別方法。Animal 有 `speak()`，Dog 若沒有另外寫，就可以直接使用。",
          "如果子類別需要不同版本的方法，可以使用 Override（方法覆寫）。覆寫時方法名稱、參數列表與回傳型態要相容，常搭配 `@Override` 讓編譯器幫你檢查。",
          "多型（Polymorphism）讓父類別型別的參考變數指向子類別物件，例如 `Animal animal = new Dog();`。同樣呼叫 `speak()`，實際執行結果會依物件真正型別決定。",
          "`super` 可以呼叫父類別方法；`super()` 可以在子類別 Constructor 中呼叫父類別 Constructor。"
        ],
        code: {
          title: "圖解：編譯型別與實際物件型別",
          value: `Animal animal = new Dog();

編譯型別：Animal
  ↓ 決定你能呼叫哪些方法
實際物件型別：Dog
  ↓ 決定覆寫方法的執行結果`
        },
        codes: [
          { title: "範例 1：父類別方法", value: `class Animal {\n    void speak() {\n        System.out.println(\"動物發出聲音\");\n    }\n}` },
          { title: "範例 2：Dog 繼承後直接使用", value: `class Dog extends Animal {\n}\n\nDog dog = new Dog();\ndog.speak();\n\n// 執行結果：\n// 動物發出聲音` },
          { title: "範例 3：Override 覆寫 speak()", value: `class Dog extends Animal {\n    @Override\n    void speak() {\n        System.out.println(\"汪汪\");\n    }\n}\n\nDog dog = new Dog();\ndog.speak();\n\n// 執行結果：\n// 汪汪` },
          { title: "範例 4：Cat 覆寫 speak()", value: `class Cat extends Animal {\n    @Override\n    void speak() {\n        System.out.println(\"喵喵\");\n    }\n}\n\nCat cat = new Cat();\ncat.speak();\n\n// 執行結果：\n// 喵喵` },
          { title: "範例 5：多型 Dog", value: `Animal animal = new Dog();\nanimal.speak();\n\n// 執行結果：\n// 汪汪` },
          { title: "範例 6：多型 Cat", value: `Animal animal = new Cat();\nanimal.speak();\n\n// 執行結果：\n// 喵喵` },
          { title: "範例 7：同一個方法，傳入不同子類別", value: `static void makeSound(Animal animal) {\n    animal.speak();\n}\n\nmakeSound(new Dog());\nmakeSound(new Cat());\n\n// 執行結果：\n// 汪汪\n// 喵喵` },
          { title: "範例 8：super 呼叫父類別方法", value: `class Dog extends Animal {\n    @Override\n    void speak() {\n        super.speak();\n        System.out.println(\"汪汪\");\n    }\n}\n\nnew Dog().speak();\n\n// 執行結果：\n// 動物發出聲音\n// 汪汪` },
          { title: "範例 9：super() 呼叫父類別 Constructor", value: `class Animal {\n    String name;\n\n    Animal(String name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n}\n\nDog dog = new Dog(\"Lucky\");\nSystem.out.println(dog.name);\n\n// 執行結果：\n// Lucky` },
          { title: "範例 10：Employee → Engineer 覆寫工作方法", value: `class Employee {\n    void work() {\n        System.out.println(\"員工工作\");\n    }\n}\n\nclass Engineer extends Employee {\n    @Override\n    void work() {\n        System.out.println(\"工程師寫程式\");\n    }\n}\n\nEmployee e = new Engineer();\ne.work();\n\n// 執行結果：\n// 工程師寫程式` },
          { title: "範例 11：Override 常見錯誤", value: `class Animal {\n    void speak() {}\n}\n\nclass Dog extends Animal {\n    @Override\n    void speak(String text) {}\n}\n\n// 問題：\n// 參數列表不同，這不是覆寫，而是新方法。\n// @Override 會讓編譯器提醒你錯誤。` }
        ]
      },
      {
        sectionId: "11.3",
        title: "繼承的注意事項",
        body: [
          "繼承很方便，但也有規則。Java 類別只能單一繼承，也就是一個類別只能直接 extends 一個父類別。",
          "`private` 成員不能被子類別直接存取；Constructor 不會被繼承，但子類別 Constructor 可以用 `super()` 呼叫父類別 Constructor。",
          "`final` 方法不能被覆寫；`final` 類別不能被繼承。這些限制通常代表設計者不希望某些行為被改變。",
          "學繼承時要特別注意：不是所有共用程式碼都該用繼承。只有在「子類別是一種父類別」時，繼承才比較合理。"
        ],
        code: {
          title: "可繼承與不可繼承整理",
          value: `可繼承：
- public / protected / package 可見的欄位與方法
- 父類別一般方法

不可直接繼承或不可直接使用：
- private 成員
- Constructor
- final 方法不可覆寫
- final 類別不可被繼承`
        },
        codes: [
          { title: "範例 1：合法單一繼承", value: `class Animal {}\nclass Dog extends Animal {}\n\n// Dog 直接繼承一個父類別，合法。` },
          { title: "範例 2：不合法多重繼承", value: `class Animal {}\nclass Pet {}\n\nclass Dog extends Animal, Pet {}\n\n// 錯誤：\n// Java 類別不能同時 extends 多個類別。` },
          { title: "範例 3：private 不能直接存取", value: `class Animal {\n    private String name;\n}\n\nclass Dog extends Animal {\n    void show() {\n        // System.out.println(name); // 錯誤\n    }\n}` },
          { title: "範例 4：透過 Getter 存取 private 資料", value: `class Animal {\n    private String name = \"Lucky\";\n\n    public String getName() {\n        return name;\n    }\n}\n\nclass Dog extends Animal {\n    void show() {\n        System.out.println(getName());\n    }\n}\n\nnew Dog().show();\n\n// 執行結果：\n// Lucky` },
          { title: "範例 5：Constructor 不會被繼承", value: `class Animal {\n    Animal(String name) {}\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n}\n\n// 解說：\n// Dog 不會自動擁有 Animal(String name)，\n// 必須自己寫 Constructor 並呼叫 super(name)。` },
          { title: "範例 6：final 方法不能覆寫", value: `class Animal {\n    final void breathe() {\n        System.out.println(\"呼吸\");\n    }\n}\n\nclass Dog extends Animal {\n    // void breathe() {} // 錯誤：final 方法不能覆寫\n}` },
          { title: "範例 7：final 類別不能被繼承", value: `final class MathTool {\n}\n\n// class MyTool extends MathTool {}\n// 錯誤：final class 不能被繼承。` },
          { title: "範例 8：不要亂用繼承", value: `class Car {}\nclass Engine {}\n\n// 不建議：class Engine extends Car\n// 因為 Engine 不是一種 Car。\n// 比較像是 Car 擁有 Engine。` },
          { title: "範例 9：繼承判斷口訣", value: `Dog is an Animal：適合繼承\nCar is a Vehicle：適合繼承\nCar has an Engine：不適合用繼承，適合用成員屬性` }
        ]
      },
      {
        sectionId: "11.4",
        title: "Object 類別與基本資料類別",
        body: [
          "Java 中所有類別最終都繼承自 `Object`。即使你沒有寫 `extends Object`，Java 也會讓你的類別間接或直接擁有 Object 的基本方法。",
          "常見 Object 方法包含 `toString()`、`equals()`、`getClass()`。其中 `toString()` 很常覆寫，讓物件印出更友善的文字。",
          "基本型別像 `int`、`double` 不是物件，但 Java 提供 Wrapper Class，例如 `Integer`、`Double`、`Character`、`Boolean`，讓基本資料也能用物件方式處理。",
          "Autoboxing 是基本型別自動包成 Wrapper；Unboxing 是 Wrapper 自動取回基本型別值。"
        ],
        code: {
          title: "圖解：Object 在最上層",
          value: `Object
  ↓
Animal
  ↓
Dog

所以 Dog 也擁有 Object 的基本方法。`
        },
        codes: [
          { title: "範例 1：所有類別都繼承 Object", value: `class Student {\n}\n\nStudent s = new Student();\nSystem.out.println(s.getClass());\n\n// 執行結果：\n// class Student` },
          { title: "範例 2：預設 toString()", value: `class Student {\n}\n\nStudent s = new Student();\nSystem.out.println(s);\n\n// 執行結果類似：\n// Student@1a2b3c` },
          { title: "範例 3：覆寫 toString()", value: `class Student {\n    String name = \"Jimmy\";\n\n    @Override\n    public String toString() {\n        return \"Student name=\" + name;\n    }\n}\n\nSystem.out.println(new Student());\n\n// 執行結果：\n// Student name=Jimmy` },
          { title: "範例 4：覆寫 equals() 的直覺目的", value: `class Student {\n    String id;\n\n    Student(String id) {\n        this.id = id;\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        Student other = (Student) obj;\n        return this.id.equals(other.id);\n    }\n}\n\nSystem.out.println(new Student(\"S01\").equals(new Student(\"S01\")));\n\n// 執行結果：\n// true` },
          { title: "範例 5：getClass()", value: `Dog dog = new Dog();\nSystem.out.println(dog.getClass());\n\n// 執行結果：\n// class Dog` },
          { title: "範例 6：Wrapper Class 對照表", value: `int     -> Integer\ndouble  -> Double\nchar    -> Character\nboolean -> Boolean` },
          { title: "範例 7：Autoboxing", value: `Integer x = 10;\nSystem.out.println(x);\n\n// 執行結果：\n// 10\n\n// 解說：\n// int 10 自動包成 Integer。` },
          { title: "範例 8：Unboxing", value: `Integer x = 10;\nint y = x;\n\nSystem.out.println(y + 5);\n\n// 執行結果：\n// 15` },
          { title: "範例 9：Wrapper 方法 parseInt()", value: `String text = \"123\";\nint number = Integer.parseInt(text);\n\nSystem.out.println(number + 1);\n\n// 執行結果：\n// 124` },
          { title: "範例 10：Double.parseDouble()", value: `String text = \"3.14\";\ndouble pi = Double.parseDouble(text);\n\nSystem.out.println(pi * 2);\n\n// 執行結果：\n// 6.28` },
          { title: "範例 11：Object 參考可以接任何物件", value: `Object obj = \"Hello\";\nSystem.out.println(obj.toString());\n\n// 執行結果：\n// Hello` }
        ]
      },
      {
        sectionId: "11.5",
        title: "綜合演練",
        body: [
          "本節補上 Varargs，讓你能寫出可接收不定數量參數的方法。這和陣列、Object 類別、多型都有關係。",
          "請注意：Varargs 本質上可以看成方法參數中的陣列語法糖。它讓呼叫更簡潔，但方法內部仍然可以像陣列一樣走訪。"
        ],
        code: {
          title: "題目 1：傳遞不定數量參數，使用陣列",
          value: `問題說明：
建立 sum 方法，接收 int[]，計算所有數字總和。

解題思路：
陣列可以保存任意數量的 int。
呼叫時可用匿名陣列 new int[]{...}。

流程圖：
new int[]{1,2,3,4,5}
  ↓
sum(int[] nums)
  ↓
for 迴圈累加
  ↓
15

Hint：
方法參數寫 int[] nums。

Solution：
static int sum(int[] nums) {
    int total = 0;

    for (int n : nums) {
        total += n;
    }

    return total;
}

System.out.println(sum(new int[]{1, 2, 3, 4, 5}));

執行結果：
15

優點：
資料結構清楚，可以先建立陣列再傳入。

缺點：
呼叫時要寫 new int[]{...}，比較長。

Explanation：
陣列方式很直覺，也和 CH07 連得上。缺點是呼叫語法稍微繁瑣。`
        },
        codes: [
          {
            title: "題目 2：傳遞不定數量參數，Varargs 機制",
            value: `問題說明：
使用 int... nums 改寫 sum 方法，讓呼叫更自然。

解題思路：
Varargs 寫在方法參數中，呼叫時可以直接傳入多個值。
方法內部仍然把 nums 當成陣列走訪。

Hint：
Varargs 語法是 型態... 名稱，例如 int... nums。

Solution：
static int sum(int... nums) {
    int total = 0;

    for (int n : nums) {
        total += n;
    }

    return total;
}

System.out.println(sum(1, 2, 3, 4, 5));

執行結果：
15

陣列 vs Varargs：
陣列：sum(new int[]{1,2,3})
Varargs：sum(1,2,3)

Explanation：
Varargs 讓呼叫端更簡潔，適合像加總、印出多個值這類參數數量不固定的方法。`
          },
          {
            title: "題目 3：傳遞任意型別的參數 Object...",
            value: `問題說明：
建立 show 方法，可以接收任意型別、任意數量的資料。

解題思路：
所有類別都繼承 Object。
基本型別會透過 Autoboxing 變成 Wrapper 物件。
所以 Object... 可以接收 String、Integer、Boolean 等資料。

Hint：
方法參數寫 Object... values。

Solution：
static void show(Object... values) {
    for (Object value : values) {
        System.out.println(value);
    }
}

show(
    "Jimmy",
    25,
    true
);

執行結果：
Jimmy
25
true

Explanation：
Object... 的彈性很高，但也要小心：彈性越高，型別檢查越少。初學時先用它理解 Object 與 Varargs 的關係即可。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch11-exercise-vehicle-inheritance",
        sectionId: "11.1",
        type: "exercise",
        title: "11.1 練習：Vehicle 繼承設計",
        question: "建立 `Vehicle` 類別，再建立 `Car` 與 `Motorcycle` 繼承它。",
        hint: "把共同欄位 `brand` 放在 Vehicle，Car 和 Motorcycle 使用 extends。",
        solution: `class Vehicle {
    String brand;
}

class Car extends Vehicle {
}

class Motorcycle extends Vehicle {
}`,
        explanation: "Car 和 Motorcycle 都是一種 Vehicle，因此適合用繼承表示。"
      }),
      createActivity({
        id: "ch11-thought-inheritance-purpose",
        sectionId: "11.1",
        type: "thought",
        title: "11.1 思考題：繼承解決什麼問題？",
        question: "請用 Dog / Cat / Animal 說明繼承如何減少重複程式碼。",
        hint: "思考 Dog 與 Cat 共同擁有哪些欄位或方法。",
        solution: "Dog 和 Cat 都有 name、age，也都可能有 eat()。把共同內容放在 Animal，Dog 和 Cat 繼承後就不用重複撰寫。",
        explanation: "繼承讓共同內容集中在父類別，子類別只補上自己的特殊內容。"
      }),
      createActivity({
        id: "ch11-exercise-override-animal",
        sectionId: "11.2",
        type: "exercise",
        title: "11.2 練習：Animal → Dog / Cat 覆寫 speak()",
        question: "建立 Animal、Dog、Cat，讓 Dog 輸出汪汪，Cat 輸出喵喵。",
        hint: "在子類別中使用 `@Override` 覆寫 `speak()`。",
        solution: `class Animal {
    void speak() {
        System.out.println("動物發出聲音");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("汪汪");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("喵喵");
    }
}`,
        explanation: "Override 讓子類別保留同一個方法名稱，但提供自己的行為。"
      }),
      createActivity({
        id: "ch11-exercise-employee-engineer",
        sectionId: "11.2",
        type: "exercise",
        title: "11.2 練習：Employee → Engineer",
        question: "建立 Employee 的 work()，再讓 Engineer 覆寫成工程師寫程式。",
        hint: "可以使用 `Employee e = new Engineer();` 觀察多型。",
        solution: `class Employee {
    void work() {
        System.out.println("員工工作");
    }
}

class Engineer extends Employee {
    @Override
    void work() {
        System.out.println("工程師寫程式");
    }
}`,
        explanation: "父類別參考可以指向子類別物件，呼叫覆寫方法時看實際物件型別。"
      }),
      createActivity({
        id: "ch11-thought-polymorphism",
        sectionId: "11.2",
        type: "thought",
        title: "11.2 思考題：多型看哪一個型別？",
        question: "`Animal animal = new Dog(); animal.speak();` 為什麼輸出 Dog 的版本？",
        hint: "編譯型別決定能呼叫什麼；實際物件型別決定覆寫方法結果。",
        solution: "因為實際物件是 Dog，所以呼叫被覆寫的 speak() 時會執行 Dog 的版本。",
        explanation: "這就是多型最重要的直覺：同一個父類別型別，執行時可以表現出不同子類別行為。"
      }),
      createActivity({
        id: "ch11-exercise-inheritance-rules",
        sectionId: "11.3",
        type: "exercise",
        title: "11.3 練習：判斷繼承是否合法",
        question: "判斷 `class Dog extends Animal, Pet`、`final class Tool` 被繼承、Override final 方法是否可行。",
        hint: "Java 類別單一繼承；final class 不能被繼承；final method 不能被覆寫。",
        solution: "三者都不可行。Dog 不能同時 extends 兩個類別；final class 不能被繼承；final 方法不能覆寫。",
        explanation: "這些規則是 Java 為了降低類別關係複雜度與保護設計意圖而設下的限制。"
      }),
      createActivity({
        id: "ch11-homework-private-getter",
        sectionId: "11.3",
        type: "homework",
        title: "11.3 作業：private 與 Getter",
        question: "建立 Animal 的 private name，讓 Dog 透過 getName() 顯示名稱。",
        hint: "private 不能在子類別直接用，請提供 public getter。",
        solution: `class Animal {
    private String name = "Lucky";

    public String getName() {
        return name;
    }
}

class Dog extends Animal {
    void showName() {
        System.out.println(getName());
    }
}`,
        explanation: "private 成員被封裝起來，子類別也要透過父類別提供的方法存取。"
      }),
      createActivity({
        id: "ch11-exercise-object-tostring",
        sectionId: "11.4",
        type: "exercise",
        title: "11.4 練習：覆寫 toString()",
        question: "建立 Student 類別並覆寫 toString()，讓 `System.out.println(student)` 印出姓名。",
        hint: "方法簽名是 `public String toString()`。",
        solution: `class Student {
    String name = "Jimmy";

    @Override
    public String toString() {
        return "Student: " + name;
    }
}`,
        explanation: "println 物件時會使用 toString() 的結果。覆寫它可以讓輸出更友善。"
      }),
      createActivity({
        id: "ch11-exercise-wrapper",
        sectionId: "11.4",
        type: "exercise",
        title: "11.4 練習：Wrapper 與轉型",
        question: "將字串 `\"123\"` 轉成 int，再加 10 輸出。",
        hint: "使用 `Integer.parseInt()`。",
        solution: `String text = "123";
int number = Integer.parseInt(text);
System.out.println(number + 10);`,
        explanation: "Wrapper Class 提供許多實用方法，例如把文字轉成數字。"
      }),
      createActivity({
        id: "ch11-project-varargs-array",
        sectionId: "11.5",
        type: "exercise",
        title: "11.5 綜合練習：陣列加總",
        question: "建立 `sum(int[] nums)`，用陣列接收不定數量資料並加總。",
        hint: "用 enhanced for 走訪陣列。",
        solution: `static int sum(int[] nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`,
        explanation: "陣列方式清楚，但呼叫時需要準備陣列或匿名陣列。"
      }),
      createActivity({
        id: "ch11-project-varargs",
        sectionId: "11.5",
        type: "exercise",
        title: "11.5 綜合練習：Varargs 加總",
        question: "使用 `int... nums` 改寫加總方法，讓呼叫方式變成 `sum(1,2,3)`。",
        hint: "方法內部仍然可以把 nums 當陣列走訪。",
        solution: `static int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`,
        explanation: "Varargs 讓呼叫端更簡潔，適合參數數量不固定的情境。"
      }),
      createActivity({
        id: "ch11-homework-object-varargs",
        sectionId: "11.5",
        type: "homework",
        title: "11.5 作業：Object... 顯示任意資料",
        question: "建立 `show(Object... values)`，印出所有傳入資料。",
        hint: "Object 可以接住各種物件；基本型別會 Autoboxing。",
        solution: `static void show(Object... values) {
    for (Object value : values) {
        System.out.println(value);
    }
}`,
        explanation: "Object... 彈性高，但實務上要謹慎使用，避免型別太鬆散造成維護困難。"
      })
    ],
    quiz: [
      { question: "Java 中表示繼承使用哪個關鍵字？", options: ["extends", "inherits", "superclass", "parent"], answer: 0, explanation: "Java 使用 `extends` 表示類別繼承。" },
      { question: "繼承的主要目的之一是？", options: ["避免重複程式碼", "刪除所有方法", "只能建立字串", "讓程式不能重用"], answer: 0, explanation: "共同內容放父類別，子類別重用。" },
      { question: "Dog extends Animal 表示？", options: ["Dog 是一種 Animal", "Animal 是一種 Dog", "Dog 擁有 Animal 檔案", "Dog 不能用 Animal 成員"], answer: 0, explanation: "繼承適合 is-a 關係。" },
      { question: "子類別是否可以加入自己的成員？", options: ["可以", "不可以", "只能加入註解", "只能加入 main"], answer: 0, explanation: "子類別可繼承父類別，也可加入自己的欄位與方法。" },
      { question: "Override 是什麼？", options: ["子類別重新定義父類別方法", "建立陣列", "刪除父類別", "改檔名"], answer: 0, explanation: "Override 讓子類別提供自己的方法行為。" },
      { question: "@Override 的好處是？", options: ["讓編譯器檢查是否真的覆寫", "讓程式不用編譯", "自動建立物件", "一定提高速度"], answer: 0, explanation: "@Override 可以避免方法簽名寫錯。" },
      { question: "多型的例子是？", options: ["Animal a = new Dog();", "int a = \"Dog\";", "class Dog extends Animal, Pet", "void Dog()"], answer: 0, explanation: "父類別參考可指向子類別物件。" },
      { question: "多型中覆寫方法的執行結果主要看？", options: ["實際物件型別", "變數名稱長度", "註解", "檔案大小"], answer: 0, explanation: "執行時依實際物件型別決定覆寫方法版本。" },
      { question: "super.speak() 代表？", options: ["呼叫父類別 speak()", "呼叫 main", "建立 String", "結束程式"], answer: 0, explanation: "`super` 可呼叫父類別成員。" },
      { question: "super() 常用來？", options: ["呼叫父類別 Constructor", "呼叫 Regex", "刪除物件", "建立陣列索引"], answer: 0, explanation: "子類別 Constructor 可用 super() 呼叫父類別 Constructor。" },
      { question: "Java 類別可直接 extends 幾個父類別？", options: ["一個", "兩個", "無限多個", "只能零個"], answer: 0, explanation: "Java 類別是單一繼承。" },
      { question: "private 成員在子類別中？", options: ["不能直接存取", "一定可直接存取", "會自動變 public", "只能用 final 覆寫"], answer: 0, explanation: "private 只限類別內部直接存取。" },
      { question: "final 方法可以被覆寫嗎？", options: ["不可以", "可以", "只要加 static 就可以", "只在 Dog 可以"], answer: 0, explanation: "final method 不能被 Override。" },
      { question: "final class 可以被繼承嗎？", options: ["不可以", "可以", "只能被 Object 繼承", "只能在 main 裡繼承"], answer: 0, explanation: "final class 不能作為父類別被繼承。" },
      { question: "所有 Java 類別最終都繼承自？", options: ["Object", "String", "Integer", "Scanner"], answer: 0, explanation: "Object 是類別階層的根。" },
      { question: "println 物件時常會用到哪個方法？", options: ["toString()", "parseOnly()", "extends()", "mainString()"], answer: 0, explanation: "物件轉文字表示時常使用 toString()。" },
      { question: "int 的 Wrapper Class 是？", options: ["Integer", "IntObject", "NumberInt", "Char"], answer: 0, explanation: "int 對應 Integer。" },
      { question: "Varargs 語法是哪一個？", options: ["int... nums", "int nums...", "...int nums", "var int nums"], answer: 0, explanation: "Varargs 使用三個點寫在型態後方。" },
      { question: "Object... 可以接收不同型別資料的原因是？", options: ["所有物件都可視為 Object，基本型別可 Autoboxing", "Object 只能接 int", "Object 不是類別", "因為 Regex"], answer: 0, explanation: "Object 是共同父類別，Wrapper 又能包住基本型別。" }
    ]
  };
}

function createChapter12() {
  return {
    id: 12,
    code: "CH12",
    title: "抽象類別（Abstract Class）、介面（Interface）、內部類別（Inner Class）",
    minutes: 165,
    summary: "學會 abstract、interface、implements、介面繼承與 Inner Class，建立更完整的 OOP 結構。",
    intro: "本章進入 OOP 較抽象但非常實用的設計工具。你會看到抽象類別如何規範子類別、介面如何描述能力、內部類別如何讓相關類別放在一起。",
    goals: [
      "了解抽象類別的用途",
      "學會使用 abstract",
      "了解介面的用途",
      "學會 implements",
      "了解介面繼承",
      "了解內部類別",
      "能夠設計較完整的 OOP 結構"
    ],
    sections: [
      {
        sectionId: "12.1",
        title: "抽象類別（Abstract Class）",
        body: [
          "假設有 Animal、Dog、Cat、Bird。所有動物都會 eat()，但 speak() 的聲音不同。這時父類別可以提供共同方法，也可以要求子類別一定要實作自己的 speak()。",
          "抽象類別使用 `abstract class` 宣告。它可以有一般方法，也可以有抽象方法。抽象方法只有規格，沒有方法內容，子類別必須覆寫。",
          "抽象類別不能直接建立物件，因為它代表尚未完成的概念。Animal 太抽象，你通常會建立 Dog、Cat、Bird 這類具體物件。",
          "把抽象類別想成半成品藍圖：共同邏輯已經寫好，但某些細節留給子類別完成。"
        ],
        code: {
          title: "UML 風格圖：Animal 抽象類別",
          value: `<<abstract>> Animal
+ eat()
+ abstract speak()
        ▲
        │
  ┌─────┼─────┐
  Dog   Cat   Bird`
        },
        codes: [
          { title: "範例 1：abstract class", value: `abstract class Animal {\n    void eat() {\n        System.out.println(\"進食\");\n    }\n}\n\n// 解說：\n// 抽象類別可以有一般方法。` },
          { title: "範例 2：抽象方法", value: `abstract class Animal {\n    abstract void speak();\n}\n\n// 解說：\n// 抽象方法沒有方法內容，子類別必須完成。` },
          { title: "範例 3：完整 Animal 抽象類別", value: `abstract class Animal {\n    void eat() {\n        System.out.println(\"進食\");\n    }\n\n    abstract void speak();\n}` },
          { title: "範例 4：Dog 實作 speak()", value: `class Dog extends Animal {\n    @Override\n    void speak() {\n        System.out.println(\"汪汪\");\n    }\n}\n\nDog dog = new Dog();\ndog.eat();\ndog.speak();\n\n// 執行結果：\n// 進食\n// 汪汪` },
          { title: "範例 5：Cat 實作 speak()", value: `class Cat extends Animal {\n    @Override\n    void speak() {\n        System.out.println(\"喵喵\");\n    }\n}\n\nAnimal cat = new Cat();\ncat.speak();\n\n// 執行結果：\n// 喵喵` },
          { title: "範例 6：抽象類別不能 new", value: `abstract class Animal {\n    abstract void speak();\n}\n\n// Animal a = new Animal();\n// 錯誤：Animal 是抽象類別，不能直接建立物件。\n\n// 解說：\n// 因為 speak() 尚未有具體實作。` },
          { title: "範例 7：Shape 抽象類別", value: `abstract class Shape {\n    abstract double area();\n\n    void printArea() {\n        System.out.println(area());\n    }\n}\n\nclass Circle extends Shape {\n    double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    double area() {\n        return 3.14 * radius * radius;\n    }\n}\n\nnew Circle(2).printArea();\n\n// 執行結果：\n// 12.56` },
          { title: "範例 8：Employee 抽象類別", value: `abstract class Employee {\n    String name;\n\n    Employee(String name) {\n        this.name = name;\n    }\n\n    abstract int getSalary();\n}\n\nclass Engineer extends Employee {\n    Engineer(String name) {\n        super(name);\n    }\n\n    @Override\n    int getSalary() {\n        return 60000;\n    }\n}` },
          { title: "範例 9：Vehicle 抽象類別", value: `abstract class Vehicle {\n    abstract void move();\n\n    void stop() {\n        System.out.println(\"停止\");\n    }\n}\n\nclass Car extends Vehicle {\n    @Override\n    void move() {\n        System.out.println(\"汽車行駛\");\n    }\n}` },
          { title: "範例 10：普通類別 vs 抽象類別", value: `項目             普通類別              抽象類別\n可否 new          可以                  不可以\n可有一般方法      可以                  可以\n可有抽象方法      不可以                可以\n適合用途          具體物件              半成品藍圖或共同規格` },
          { title: "範例 11：抽象父類別搭配多型", value: `Animal[] animals = {\n    new Dog(),\n    new Cat()\n};\n\nfor (Animal animal : animals) {\n    animal.speak();\n}\n\n// 執行結果：\n// 汪汪\n// 喵喵` }
        ]
      },
      {
        sectionId: "12.2",
        title: "介面（Interface）",
        body: [
          "Java 類別只能單一繼承。如果 Bird 已經繼承 Animal，但它還有 Fly 的能力，要怎麼表達？這時可以使用 Interface。",
          "介面描述一種能力或規格，例如 Flyable 代表會飛，Movable 代表可移動，Printable 代表可列印。",
          "類別使用 `implements` 實作介面。不同類別可以共享同一種能力，例如 Bird 和 Airplane 都可以 implements Flyable。",
          "介面可以讓不同繼承體系的類別用同一種方式被操作，這是 OOP 設計中非常重要的彈性來源。"
        ],
        code: {
          title: "UML 風格圖：不同類別共享能力",
          value: `<<interface>> Flyable
+ fly()
        ▲
        │ implements
  ┌─────┴─────┐
 Bird      Airplane`
        },
        codes: [
          { title: "範例 1：定義 Flyable 介面", value: `interface Flyable {\n    void fly();\n}\n\n// 解說：\n// 介面描述「會飛」這種能力。` },
          { title: "範例 2：Bird implements Flyable", value: `class Bird implements Flyable {\n    @Override\n    public void fly() {\n        System.out.println(\"鳥在飛\");\n    }\n}\n\nnew Bird().fly();\n\n// 執行結果：\n// 鳥在飛` },
          { title: "範例 3：Airplane implements Flyable", value: `class Airplane implements Flyable {\n    @Override\n    public void fly() {\n        System.out.println(\"飛機起飛\");\n    }\n}\n\nnew Airplane().fly();\n\n// 執行結果：\n// 飛機起飛` },
          { title: "範例 4：同一介面操作不同物件", value: `Flyable f1 = new Bird();\nFlyable f2 = new Airplane();\n\nf1.fly();\nf2.fly();\n\n// 執行結果：\n// 鳥在飛\n// 飛機起飛` },
          { title: "範例 5：多個介面", value: `interface Walkable {\n    void walk();\n}\n\nclass Robot implements Flyable, Walkable {\n    public void fly() {\n        System.out.println(\"機器人飛行\");\n    }\n\n    public void walk() {\n        System.out.println(\"機器人走路\");\n    }\n}` },
          { title: "範例 6：Movable 介面", value: `interface Movable {\n    void move();\n}\n\nclass Car implements Movable {\n    public void move() {\n        System.out.println(\"汽車移動\");\n    }\n}` },
          { title: "範例 7：Printable 介面", value: `interface Printable {\n    void print();\n}\n\nclass Report implements Printable {\n    public void print() {\n        System.out.println(\"列印報表\");\n    }\n}` },
          { title: "範例 8：default 方法", value: `interface Flyable {\n    void fly();\n\n    default void land() {\n        System.out.println(\"降落\");\n    }\n}\n\nclass Bird implements Flyable {\n    public void fly() {\n        System.out.println(\"鳥在飛\");\n    }\n}\n\nBird bird = new Bird();\nbird.land();\n\n// 執行結果：\n// 降落` },
          { title: "範例 9：static 方法", value: `interface MathHelper {\n    static int square(int n) {\n        return n * n;\n    }\n}\n\nSystem.out.println(MathHelper.square(5));\n\n// 執行結果：\n// 25` },
          { title: "範例 10：介面中的常數", value: `interface Config {\n    int MAX_USERS = 100;\n}\n\nSystem.out.println(Config.MAX_USERS);\n\n// 執行結果：\n// 100\n\n// 解說：\n// 介面欄位預設是 public static final。` },
          { title: "範例 11：Abstract Class vs Interface", value: `項目               Abstract Class          Interface\n可否建立物件        不可                    不可\n一般方法            可以                    default / static 可以\n成員變數            可以有物件欄位          通常是常數\n多重繼承            類別只能 extends 一個   可 implements 多個介面\n適合用途            共同父類別              能力或規格` },
          { title: "範例 12：介面作為方法參數", value: `static void startFlying(Flyable target) {\n    target.fly();\n}\n\nstartFlying(new Bird());\nstartFlying(new Airplane());\n\n// 執行結果：\n// 鳥在飛\n// 飛機起飛` },
          { title: "範例 13：Animal + Flyable", value: `abstract class Animal {\n    abstract void eat();\n}\n\nclass Bird extends Animal implements Flyable {\n    void eat() {\n        System.out.println(\"鳥吃東西\");\n    }\n\n    public void fly() {\n        System.out.println(\"鳥飛翔\");\n    }\n}` }
        ]
      },
      {
        sectionId: "12.3",
        title: "介面的繼承",
        body: [
          "介面也可以繼承介面，而且介面可以一次繼承多個介面。這和類別只能單一繼承不同。",
          "例如 Bird 介面可以同時 extends Animal、Flyable，代表實作 Bird 的類別必須符合這些介面的規格。",
          "介面繼承常用來組合多種能力，讓程式可以用更抽象的方式描述物件。",
          "類別繼承通常表示 is-a；介面繼承更像能力規格的組合。"
        ],
        code: {
          title: "圖解：多重介面繼承",
          value: `Animal      Flyable
   │          │
   └────┬─────┘
        ↓
      Bird
        ↓ implements
    Sparrow`
        },
        codes: [
          { title: "範例 1：Animal 介面", value: `interface Animal {\n    void eat();\n}` },
          { title: "範例 2：Flyable 介面", value: `interface Flyable {\n    void fly();\n}` },
          { title: "範例 3：Bird 介面繼承多個介面", value: `interface Bird extends Animal, Flyable {\n    void buildNest();\n}` },
          { title: "範例 4：實作 Bird 介面", value: `class Sparrow implements Bird {\n    public void eat() {\n        System.out.println(\"麻雀吃米\");\n    }\n\n    public void fly() {\n        System.out.println(\"麻雀飛行\");\n    }\n\n    public void buildNest() {\n        System.out.println(\"麻雀築巢\");\n    }\n}` },
          { title: "範例 5：使用介面多型", value: `Bird bird = new Sparrow();\nbird.eat();\nbird.fly();\nbird.buildNest();\n\n// 執行結果：\n// 麻雀吃米\n// 麻雀飛行\n// 麻雀築巢` },
          { title: "範例 6：Vehicle / Movable / CarInterface", value: `interface Vehicle {\n    void start();\n}\n\ninterface Movable {\n    void move();\n}\n\ninterface CarInterface extends Vehicle, Movable {\n    void openTrunk();\n}` },
          { title: "範例 7：實作 CarInterface", value: `class Sedan implements CarInterface {\n    public void start() {\n        System.out.println(\"啟動汽車\");\n    }\n\n    public void move() {\n        System.out.println(\"汽車前進\");\n    }\n\n    public void openTrunk() {\n        System.out.println(\"打開後車廂\");\n    }\n}` },
          { title: "範例 8：介面繼承 vs 類別繼承", value: `類別繼承：\nclass Dog extends Animal\n- 只能直接繼承一個類別\n- 常表示 Dog 是一種 Animal\n\n介面繼承：\ninterface Bird extends Animal, Flyable\n- 可繼承多個介面\n- 常表示多種能力或規格的組合` },
          { title: "範例 9：方法接收父介面", value: `static void moveSomething(Movable movable) {\n    movable.move();\n}\n\nmoveSomething(new Sedan());\n\n// 執行結果：\n// 汽車前進` }
        ]
      },
      {
        sectionId: "12.4",
        title: "內部類別（Inner Class）",
        body: [
          "有些類別只屬於另一個類別，例如 Computer 裡的 CPU、Car 裡的 Engine。這些類別若只在外部類別內有意義，就可以設計成內部類別。",
          "內部類別（Inner Class）定義在另一個類別裡面。它能讓關係密切的類別放在一起，提升程式組織性。",
          "常見內部類別包含成員內部類別、區域內部類別、匿名內部類別。匿名內部類別很常用在 Listener 或 Runnable 這類一次性實作。",
          "初學時不用背很多語法細節，先理解它的用途：把只為某個外部類別服務的小類別收在一起。"
        ],
        code: {
          title: "圖解：Outer Class 與 Inner Class",
          value: `Outer Class: Car
  ↓ contains
Inner Class: Engine

Car.Engine engine`
        },
        codes: [
          { title: "範例 1：Car + Engine", value: `class Car {\n    class Engine {\n        void start() {\n            System.out.println(\"引擎啟動\");\n        }\n    }\n}` },
          { title: "範例 2：建立成員內部類別物件", value: `Car car = new Car();\nCar.Engine engine = car.new Engine();\nengine.start();\n\n// 執行結果：\n// 引擎啟動` },
          { title: "範例 3：Computer + CPU", value: `class Computer {\n    class CPU {\n        void calculate() {\n            System.out.println(\"CPU 計算中\");\n        }\n    }\n}\n\nComputer computer = new Computer();\nComputer.CPU cpu = computer.new CPU();\ncpu.calculate();\n\n// 執行結果：\n// CPU 計算中` },
          { title: "範例 4：內部類別使用外部欄位", value: `class Car {\n    String model = \"Prius\";\n\n    class Engine {\n        void showCar() {\n            System.out.println(model + \" 的引擎\");\n        }\n    }\n}` },
          { title: "範例 5：School + Student", value: `class School {\n    String schoolName = \"Java School\";\n\n    class Student {\n        void show() {\n            System.out.println(\"學生屬於 \" + schoolName);\n        }\n    }\n}` },
          { title: "範例 6：區域內部類別", value: `class Printer {\n    void print() {\n        class Message {\n            void show() {\n                System.out.println(\"列印訊息\");\n            }\n        }\n\n        Message msg = new Message();\n        msg.show();\n    }\n}\n\nnew Printer().print();\n\n// 執行結果：\n// 列印訊息` },
          { title: "範例 7：匿名內部類別 Runnable", value: `Runnable task = new Runnable() {\n    @Override\n    public void run() {\n        System.out.println(\"任務執行\");\n    }\n};\n\ntask.run();\n\n// 執行結果：\n// 任務執行` },
          { title: "範例 8：匿名內部類別實作介面", value: `interface ClickListener {\n    void onClick();\n}\n\nClickListener listener = new ClickListener() {\n    public void onClick() {\n        System.out.println(\"按鈕被點擊\");\n    }\n};\n\nlistener.onClick();\n\n// 執行結果：\n// 按鈕被點擊` },
          { title: "範例 9：static nested class", value: `class Outer {\n    static class Helper {\n        void help() {\n            System.out.println(\"協助處理\");\n        }\n    }\n}\n\nOuter.Helper helper = new Outer.Helper();\nhelper.help();\n\n// 執行結果：\n// 協助處理` },
          { title: "範例 10：Inner Class 使用時機", value: `適合：\n- Engine 只服務 Car\n- CPU 只服務 Computer\n- Listener 只在某個事件中使用一次\n\n不適合：\n- 類別會被很多地方獨立使用\n- 內部類別變得太大太複雜` },
          { title: "範例 11：Car.Engine UML 風格關係", value: `Car\n- model\n+ start()\n  └─ Engine\n     + start()\n\n解說：\nEngine 被收在 Car 裡，表示它和 Car 的關係非常密切。` }
        ]
      },
      {
        sectionId: "12.5",
        title: "綜合演練",
        body: [
          "本節把抽象類別、介面、內部類別放進兩個常見設計情境：Shape 繪圖與 Button 監聽器。",
          "重點不是把語法背起來，而是看懂它們分別解決什麼設計問題：抽象類別建立共同骨架，介面擔任溝通契約，內部類別保存與外部類別緊密相關的實作。"
        ],
        code: {
          title: "題目 1：撰寫通用於多種類別的程式",
          value: `問題說明：
設計 Shape 抽象類別，讓 Circle、Rectangle、Triangle 都能提供 draw()。

UML 概念圖：
<<abstract>> Shape
+ abstract draw()
        ▲
        │
 ┌──────┼────────┐
 Circle Rectangle Triangle

解題思路：
Shape 定義共通操作 draw()。
每種圖形自己決定如何畫。
主程式使用 Shape[] 統一處理不同物件。

Hint：
把 draw() 設計成抽象方法，子類別使用 @Override。

Solution：
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("畫圓形");
    }
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("畫矩形");
    }
}

class Triangle extends Shape {
    void draw() {
        System.out.println("畫三角形");
    }
}

Shape[] shapes = {
    new Circle(),
    new Rectangle(),
    new Triangle()
};

for (Shape shape : shapes) {
    shape.draw();
}

執行結果：
畫圓形
畫矩形
畫三角形

Explanation：
主程式不需要知道每個圖形的細節，只要知道它們都是 Shape，而且都有 draw()。這就是抽象類別與多型的力量。`
        },
        codes: [
          {
            title: "題目 2：擔任物件之間的溝通橋樑",
            value: `問題說明：
使用 Interface 與匿名內部類別，讓 Button 按下後通知 ClickListener。

UML 概念圖：
Button
- ClickListener listener
+ setClickListener(listener)
+ click()

<<interface>> ClickListener
+ onClick()

Button ──通知──> ClickListener

解題思路：
ClickListener 是溝通契約。
Button 不知道按下後要做什麼，只負責通知 listener。
呼叫端用匿名內部類別提供按下後的行為。

Hint：
匿名內部類別語法是 new InterfaceName(){ ... }。

Solution：
interface ClickListener {
    void onClick();
}

class Button {
    private ClickListener listener;

    void setClickListener(ClickListener listener) {
        this.listener = listener;
    }

    void click() {
        if (listener != null) {
            listener.onClick();
        }
    }
}

Button button = new Button();

button.setClickListener(new ClickListener() {
    public void onClick() {
        System.out.println("按鈕被點擊，開始儲存資料");
    }
});

button.click();

執行結果：
按鈕被點擊，開始儲存資料

Explanation：
介面讓 Button 和外部行為解耦。Button 只認得 ClickListener，不需要知道真正執行的是儲存、登入還是送出表單。匿名內部類別適合這種一次性實作。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch12-exercise-shape-abstract",
        sectionId: "12.1",
        type: "exercise",
        title: "12.1 練習：Shape 抽象類別",
        question: "建立 `Shape` 抽象類別，宣告 `area()` 抽象方法，再建立 `Circle` 實作它。",
        hint: "Shape 使用 `abstract class`，area 使用 `abstract double area();`。",
        solution: `abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    double area() {
        return 3.14 * radius * radius;
    }
}`,
        explanation: "Shape 定義所有圖形都該有 area()，Circle 負責提供自己的計算方式。"
      }),
      createActivity({
        id: "ch12-exercise-employee-abstract",
        sectionId: "12.1",
        type: "exercise",
        title: "12.1 練習：Employee 抽象類別",
        question: "建立 `Employee` 抽象類別，宣告 `getSalary()`，再建立 `Engineer` 實作。",
        hint: "薪水計算可能因職位不同，所以適合做成抽象方法。",
        solution: `abstract class Employee {
    abstract int getSalary();
}

class Engineer extends Employee {
    int getSalary() {
        return 60000;
    }
}`,
        explanation: "抽象類別可以規範每種員工都要能回傳薪水，但各職位自行決定計算方式。"
      }),
      createActivity({
        id: "ch12-thought-abstract-new",
        sectionId: "12.1",
        type: "thought",
        title: "12.1 思考題：為什麼抽象類別不能 new？",
        question: "請用 Animal 的 speak() 說明為什麼抽象類別不能直接建立物件。",
        hint: "如果 speak() 沒有內容，直接 new Animal 後呼叫 speak() 會發生什麼問題？",
        solution: "抽象類別可能包含尚未實作的抽象方法，例如 Animal 的 speak() 沒有具體聲音，因此不能直接建立物件。",
        explanation: "抽象類別是半成品藍圖，必須由具體子類別完成缺少的行為。"
      }),
      createActivity({
        id: "ch12-exercise-flyable",
        sectionId: "12.2",
        type: "exercise",
        title: "12.2 練習：Flyable",
        question: "建立 `Flyable` 介面，讓 `Bird` 與 `Airplane` 都實作 `fly()`。",
        hint: "類別使用 `implements Flyable`。",
        solution: `interface Flyable {
    void fly();
}

class Bird implements Flyable {
    public void fly() {
        System.out.println("鳥在飛");
    }
}

class Airplane implements Flyable {
    public void fly() {
        System.out.println("飛機起飛");
    }
}`,
        explanation: "Bird 和 Airplane 不是同一種父類別，但都可以共享 Flyable 能力規格。"
      }),
      createActivity({
        id: "ch12-exercise-movable-printable",
        sectionId: "12.2",
        type: "exercise",
        title: "12.2 練習：Movable 與 Printable",
        question: "建立 `Movable`、`Printable` 介面，讓一個類別同時實作兩種能力。",
        hint: "多個介面用逗號分隔。",
        solution: `interface Movable {
    void move();
}

interface Printable {
    void print();
}

class ReportRobot implements Movable, Printable {
    public void move() {
        System.out.println("移動");
    }

    public void print() {
        System.out.println("列印報表");
    }
}`,
        explanation: "介面讓一個類別能組合多種能力，彌補類別單一繼承限制。"
      }),
      createActivity({
        id: "ch12-thought-abstract-interface",
        sectionId: "12.2",
        type: "thought",
        title: "12.2 思考題：抽象類別和介面怎麼選？",
        question: "Animal 和 Flyable 哪個比較適合抽象類別？哪個比較適合介面？",
        hint: "Animal 像共同父類別；Flyable 像一種能力。",
        solution: "Animal 較適合抽象類別，因為 Dog、Cat、Bird 都是一種 Animal。Flyable 較適合介面，因為不同類別都可能有會飛的能力。",
        explanation: "抽象類別偏向 is-a 的共同骨架；介面偏向 can-do 的能力規格。"
      }),
      createActivity({
        id: "ch12-exercise-interface-inheritance",
        sectionId: "12.3",
        type: "exercise",
        title: "12.3 練習：介面繼承",
        question: "建立 `Vehicle`、`Movable`、`CarInterface`，讓 `CarInterface` 同時繼承前兩者。",
        hint: "介面繼承介面使用 `extends`，多個介面用逗號分隔。",
        solution: `interface Vehicle {
    void start();
}

interface Movable {
    void move();
}

interface CarInterface extends Vehicle, Movable {
    void openTrunk();
}`,
        explanation: "介面可以多重繼承，用來組合多個規格。"
      }),
      createActivity({
        id: "ch12-homework-car-interface",
        sectionId: "12.3",
        type: "homework",
        title: "12.3 作業：實作 CarInterface",
        question: "建立 `Sedan` 類別實作 `CarInterface`，完成 start、move、openTrunk。",
        hint: "實作介面時要完成所有繼承來的方法。",
        solution: `class Sedan implements CarInterface {
    public void start() {
        System.out.println("啟動汽車");
    }

    public void move() {
        System.out.println("汽車前進");
    }

    public void openTrunk() {
        System.out.println("打開後車廂");
    }
}`,
        explanation: "CarInterface 繼承 Vehicle 和 Movable，所以 Sedan 必須完成三個方法。"
      }),
      createActivity({
        id: "ch12-exercise-inner-computer",
        sectionId: "12.4",
        type: "exercise",
        title: "12.4 練習：Computer + CPU",
        question: "建立 `Computer` 外部類別和 `CPU` 內部類別，讓 CPU 印出計算中。",
        hint: "建立物件時使用 `Computer.CPU cpu = computer.new CPU();`。",
        solution: `class Computer {
    class CPU {
        void calculate() {
            System.out.println("CPU 計算中");
        }
    }
}`,
        explanation: "CPU 在這個例子中只屬於 Computer，因此可以放成內部類別。"
      }),
      createActivity({
        id: "ch12-exercise-car-engine",
        sectionId: "12.4",
        type: "exercise",
        title: "12.4 練習：Car + Engine",
        question: "建立 `Car` 與內部類別 `Engine`，讓 Engine 可以啟動。",
        hint: "Engine 放在 Car 的大括號裡。",
        solution: `class Car {
    class Engine {
        void start() {
            System.out.println("引擎啟動");
        }
    }
}`,
        explanation: "Inner Class 適合描述和外部類別關係緊密的小型類別。"
      }),
      createActivity({
        id: "ch12-thought-anonymous-inner",
        sectionId: "12.4",
        type: "thought",
        title: "12.4 思考題：匿名內部類別適合什麼情境？",
        question: "為什麼 ClickListener 或 Runnable 常使用匿名內部類別？",
        hint: "思考它們是不是常常只用一次。",
        solution: "因為 Listener 或 Runnable 常是一次性行為，使用匿名內部類別可以直接在需要的地方提供實作，不必另外命名一個類別。",
        explanation: "匿名內部類別適合短小、一次性、和當下情境高度相關的實作。"
      }),
      createActivity({
        id: "ch12-project-shape",
        sectionId: "12.5",
        type: "exercise",
        title: "12.5 綜合練習：Shape 通用繪圖",
        question: "使用抽象類別 Shape，讓 Circle、Rectangle、Triangle 都能 draw()，並用陣列統一呼叫。",
        hint: "使用 `Shape[]` 保存不同子類別物件。",
        solution: `abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("畫圓形");
    }
}

class Rectangle extends Shape {
    void draw() {
        System.out.println("畫矩形");
    }
}`,
        explanation: "抽象類別定義共通操作，多型讓主程式統一處理不同圖形。"
      }),
      createActivity({
        id: "ch12-project-button-listener",
        sectionId: "12.5",
        type: "homework",
        title: "12.5 作業：Button + ClickListener",
        question: "建立 Button，透過 ClickListener 介面與匿名內部類別處理點擊行為。",
        hint: "Button 保存一個 ClickListener 欄位，click() 時呼叫 onClick()。",
        solution: `interface ClickListener {
    void onClick();
}

class Button {
    private ClickListener listener;

    void setClickListener(ClickListener listener) {
        this.listener = listener;
    }

    void click() {
        if (listener != null) {
            listener.onClick();
        }
    }
}`,
        explanation: "Interface 擔任溝通橋樑，匿名內部類別提供一次性的按鈕行為。"
      })
    ],
    quiz: [
      { question: "抽象類別使用哪個關鍵字宣告？", options: ["abstract", "interface", "implements", "inner"], answer: 0, explanation: "`abstract class` 用來宣告抽象類別。" },
      { question: "抽象方法的特色是？", options: ["沒有方法內容", "一定有完整大括號內容", "只能 static", "不能被子類別實作"], answer: 0, explanation: "抽象方法只有規格，沒有實作內容。" },
      { question: "抽象類別可以直接 new 嗎？", options: ["不可以", "可以", "只要加 final 就可以", "只在 main 可以"], answer: 0, explanation: "抽象類別可能有未完成方法，因此不能直接建立物件。" },
      { question: "抽象類別是否可以有一般方法？", options: ["可以", "不可以", "只能有欄位", "只能有註解"], answer: 0, explanation: "抽象類別可以有一般方法與抽象方法。" },
      { question: "Dog extends Animal 後必須實作 Animal 的抽象方法嗎？", options: ["是，除非 Dog 也宣告成 abstract", "不需要", "只能刪掉方法", "只能改成 interface"], answer: 0, explanation: "具體子類別必須完成抽象方法。" },
      { question: "介面通常用來描述什麼？", options: ["能力或規格", "只能描述建構子", "只能描述記憶體", "只能描述 CSS"], answer: 0, explanation: "介面常描述某種能力，例如 Flyable。" },
      { question: "類別實作介面使用哪個關鍵字？", options: ["implements", "extendsOnly", "abstracts", "inner"], answer: 0, explanation: "類別使用 implements 實作介面。" },
      { question: "Bird 和 Airplane 都會飛，適合共用哪種設計？", options: ["Flyable 介面", "同一個 Dog 父類別", "只用 private", "只用 String"], answer: 0, explanation: "不同類別可以共享同一能力介面。" },
      { question: "一個類別可以 implements 多個介面嗎？", options: ["可以", "不可以", "只能在抽象類別中", "只能在 Object 中"], answer: 0, explanation: "Java 類別可實作多個介面。" },
      { question: "介面中的 default 方法代表？", options: ["介面提供預設實作", "一定不能被呼叫", "只能是建構子", "只能回傳 int"], answer: 0, explanation: "default 方法讓介面能提供預設行為。" },
      { question: "介面可以繼承多個介面嗎？", options: ["可以", "不可以", "只能繼承 Object", "只能繼承 class"], answer: 0, explanation: "介面可以 extends 多個介面。" },
      { question: "介面繼承和類別繼承的差異之一是？", options: ["介面可多重繼承，類別只能單一繼承", "類別可以繼承多個 class", "介面不能有方法", "完全沒有差異"], answer: 0, explanation: "Java 類別單一繼承，但介面可多重繼承。" },
      { question: "CarInterface extends Vehicle, Movable 代表？", options: ["CarInterface 組合兩個介面規格", "CarInterface 是普通類別", "語法一定錯", "只能建立物件"], answer: 0, explanation: "介面可以組合多個父介面。" },
      { question: "Inner Class 是什麼？", options: ["定義在另一個類別內的類別", "只能在 HTML 裡的 class", "不能有方法", "JavaScript 函式"], answer: 0, explanation: "內部類別定義於外部類別之中。" },
      { question: "Car.Engine 常表示什麼關係？", options: ["Engine 與 Car 關係緊密", "Engine 一定是 Car 的父類別", "Car 不能建立 Engine", "Engine 是 interface"], answer: 0, explanation: "內部類別適合描述只屬於外部類別的概念。" },
      { question: "建立成員內部類別物件常見語法是？", options: ["outer.new Inner()", "new Outer.Inner.StaticOnly()", "implements Inner()", "abstract new"], answer: 0, explanation: "非 static 成員內部類別需要透過外部物件建立。" },
      { question: "匿名內部類別適合哪種情境？", options: ["一次性介面實作", "大型共用類別", "資料庫本體", "完全不能執行的程式"], answer: 0, explanation: "匿名內部類別常用於短小、一次性的行為。" },
      { question: "Button + ClickListener 中，ClickListener 的角色是？", options: ["溝通契約", "資料庫", "抽象欄位", "數學運算子"], answer: 0, explanation: "Button 透過 Listener 通知外部行為。" },
      { question: "Shape、Circle、Rectangle 的範例主要展示？", options: ["抽象類別與多型", "Regex", "Scanner", "檔案輸入"], answer: 0, explanation: "Shape 定義共通 draw()，子類別提供實作。" },
      { question: "本章較不建議一開始深入哪個方向？", options: ["過度抽象的框架設計", "Animal 案例", "Button Listener", "Shape 案例"], answer: 0, explanation: "初學階段先用生活化案例理解概念即可。" }
    ]
  };
}

function createChapter13() {
  return {
    id: 13,
    code: "CH13",
    title: "套件（Packages）",
    minutes: 105,
    summary: "學會 Package、import、Subpackage、存取控制與 Java 標準類別庫的基本使用。",
    intro: "當類別越來越多，專案就需要更好的分類方式。Package 就像資料夾與命名空間，幫你整理類別、避免命名衝突，並和存取控制一起影響類別如何被使用。",
    goals: [
      "了解 Package 的用途",
      "學會建立 Package",
      "學會使用 import",
      "學會跨 Package 使用類別",
      "了解子套件 Subpackage",
      "了解 Package 與存取控制的關係",
      "了解 Java 標準類別庫",
      "學會 Package 命名規則"
    ],
    sections: [
      {
        sectionId: "13.1",
        title: "程式的切割",
        body: [
          "專案一開始可能只有幾個類別，全部放在同一個資料夾還看得懂。但當 Student、Teacher、Dog、Cat、Vehicle、Car、Motorcycle、Calculator、Utility 都放在一起時，很快就會變亂。",
          "Package 可以把相關類別分組，就像電腦中的資料夾。學校相關類別放 `school`，動物相關類別放 `animal`，工具類別放 `utility`。",
          "Java 檔案最上方可以用 `package school;` 宣告自己屬於哪個套件。通常 package 名稱會對應資料夾路徑，例如 `package school;` 對應 `school/Student.java`。",
          "Package 的目的包含整理類別、避免命名衝突、控制存取範圍，並讓專案架構更清楚。"
        ],
        code: {
          title: "問題起點：全部檔案放一起",
          value: `Project

Student.java
Teacher.java
Dog.java
Cat.java
Vehicle.java
Car.java
Motorcycle.java
Calculator.java
Utility.java

問題：
檔案越來越多，越來越難管理。`
        },
        codes: [
          { title: "範例 1：Package 像資料夾", value: `Project\n├─ school\n│  ├─ Student.java\n│  └─ Teacher.java\n├─ animal\n│  ├─ Dog.java\n│  └─ Cat.java\n└─ utility\n   └─ Calculator.java` },
          { title: "範例 2：宣告 school 套件", value: `package school;\n\npublic class Student {\n    public String name;\n}\n\n// 解說：\n// 這個類別屬於 school package。` },
          { title: "範例 3：宣告 animal 套件", value: `package animal;\n\npublic class Dog {\n    public void bark() {\n        System.out.println(\"汪汪\");\n    }\n}` },
          { title: "範例 4：同一套件放多個相關類別", value: `animal\n├─ Dog.java\n└─ Cat.java\n\npackage animal;\n\npublic class Cat {\n    public void meow() {\n        System.out.println(\"喵喵\");\n    }\n}` },
          { title: "範例 5：utility 套件", value: `package utility;\n\npublic class Calculator {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n}` },
          { title: "範例 6：Package 與資料夾路徑", value: `package school;\n\npublic class Teacher {\n}\n\n對應資料夾：\nschool/Teacher.java\n\n重點：\npackage 宣告通常要和資料夾結構一致。` },
          { title: "範例 7：子資料夾形式的 package", value: `package com.example.school;\n\npublic class Student {\n}\n\n對應資料夾：\ncom/example/school/Student.java` },
          { title: "範例 8：類別名稱相同但套件不同", value: `school.Student\ncompany.Student\n\n// 解說：\n// package 讓兩個 Student 可以同時存在，\n// 因為完整名稱不同。` },
          { title: "範例 9：沒有 package 的預設套件", value: `public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Default package\");\n    }\n}\n\n// 解說：\n// 沒有 package 宣告時，類別在預設套件。\n// 初學可用，但大型專案不建議。` }
        ]
      },
      {
        sectionId: "13.2",
        title: "分享寫好的程式",
        body: [
          "把類別放進不同 Package 後，就會遇到一個問題：不同 Package 要如何使用彼此的類別？答案是 `import`。",
          "`import` 會告訴 Java：這個檔案會使用哪個 Package 裡的類別。例如 `import java.util.Scanner;` 代表你要使用標準類別庫中的 Scanner。",
          "如果不使用 import，也可以寫完整名稱（Fully Qualified Name），例如 `java.util.Scanner sc = new java.util.Scanner(System.in);`。",
          "`import animal.*;` 可以匯入 animal 套件中的多個類別，但過度使用星號可能讓來源不夠清楚。若有重名類別，例如 `school.Student` 和 `company.Student`，就需要用完整名稱避免衝突。"
        ],
        code: {
          title: "import 圖解",
          value: `Main.java
  ↓ import animal.Dog
animal/Dog.java
  ↓
Main 可以直接使用 Dog`
        },
        codes: [
          { title: "範例 1：import Scanner", value: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n    }\n}` },
          { title: "範例 2：import 自訂類別 Dog", value: `import animal.Dog;\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.bark();\n    }\n}\n\n// 執行結果：\n// 汪汪` },
          { title: "範例 3：import school.Student", value: `import school.Student;\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.name = \"Jimmy\";\n        System.out.println(s.name);\n    }\n}\n\n// 執行結果：\n// Jimmy` },
          { title: "範例 4：完整名稱 Fully Qualified Name", value: `java.util.Scanner sc =\n    new java.util.Scanner(System.in);\n\n// 解說：\n// 不 import 也能用，但程式比較長。` },
          { title: "範例 5：自訂類別完整名稱", value: `animal.Dog dog = new animal.Dog();\ndog.bark();\n\n// 執行結果：\n// 汪汪` },
          { title: "範例 6：import animal.*", value: `import animal.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        Cat cat = new Cat();\n    }\n}\n\n// 解說：\n// * 代表使用 animal 套件中的類別。` },
          { title: "範例 7：星號 import 的優缺點", value: `優點：\nimport animal.*;\n// 少寫多個 import。\n\n缺點：\n// 不容易一眼看出 Dog、Cat 來自哪裡。\n// 大型專案通常偏好明確 import。` },
          { title: "範例 8：重名類別衝突", value: `import school.Student;\nimport company.Student;\n\n// 問題：\n// 兩個 Student 名稱相同，Java 不知道你要用哪一個。` },
          { title: "範例 9：用完整名稱處理重名", value: `school.Student schoolStudent = new school.Student();\ncompany.Student companyStudent = new company.Student();\n\n// 解說：\n// 完整名稱能明確指定是哪個 Student。` },
          { title: "範例 10：java.lang 不用 import", value: `String text = \"Hello\";\nSystem.out.println(Math.max(3, 8));\n\n// 解說：\n// java.lang 裡的類別常自動可用，例如 String、Math。` },
          { title: "範例 11：import static", value: `import static java.lang.Math.PI;\nimport static java.lang.Math.max;\n\nSystem.out.println(PI);\nSystem.out.println(max(3, 8));\n\n// 執行結果：\n// 3.141592653589793\n// 8\n\n// 解說：\n// 初學先認識即可，不必大量使用。` }
        ]
      },
      {
        sectionId: "13.3",
        title: "子套件以及存取控制關係",
        body: [
          "Subpackage 是更細的套件分類，例如 `com.school.student`、`com.school.teacher`。它們看起來像資料夾父子關係，但在 Java 存取控制上是不同 Package。",
          "請特別記住：`school` 和 `school.student` 不是父子類別關係，也不是同一個 Package。它們是兩個不同的 Package。",
          "Package 會影響存取控制。`public` 幾乎到處可用；`private` 只在同一類別；沒有修飾字的 default 只限同 Package；`protected` 對同 Package 可用，也可讓不同 Package 的子類別透過繼承使用。",
          "學到這裡先建立直覺：Package 不只是資料夾，也會影響誰看得到你的類別與成員。"
        ],
        code: {
          title: "存取控制表",
          value: `修飾字       同類別   同Package   不同Package子類別   其他Package
public       可以     可以        可以              可以
protected    可以     可以        可以              不可以
default      可以     可以        不可以            不可以
private      可以     不可以      不可以            不可以`
        },
        codes: [
          { title: "範例 1：Subpackage 結構", value: `com\n├─ school\n├─ school.student\n└─ school.teacher\n\n// 注意：\n// school 和 school.student 是不同 package。` },
          { title: "範例 2：animal 與 animal.dog", value: `animal\n└─ Animal.java\n\nanimal/dog\n└─ Dog.java\n\npackage animal;\npublic class Animal {}\n\npackage animal.dog;\npublic class Dog {}\n\n// 解說：\n// animal 與 animal.dog 是不同 package。` },
          { title: "範例 3：public 成員", value: `package animal;\n\npublic class Animal {\n    public String name = \"Lucky\";\n}\n\n// 不同 package 也可透過物件存取 public name。` },
          { title: "範例 4：private 成員", value: `package animal;\n\npublic class Animal {\n    private int age = 3;\n}\n\n// 只有 Animal 類別內部可以直接使用 age。` },
          { title: "範例 5：default 成員", value: `package animal;\n\npublic class Animal {\n    String type = \"animal\";\n}\n\n// 沒有 public/protected/private 時是 default。\n// 只有同 package animal 可以直接存取。` },
          { title: "範例 6：同 Package 可存取 default", value: `package animal;\n\npublic class Dog {\n    void test() {\n        Animal a = new Animal();\n        System.out.println(a.type);\n    }\n}\n\n// Dog 和 Animal 都在 animal，能存取 default type。` },
          { title: "範例 7：subpackage 不能存取 default", value: `package animal.dog;\n\nimport animal.Animal;\n\npublic class Dog {\n    void test() {\n        Animal a = new Animal();\n        // System.out.println(a.type); // 錯誤\n    }\n}\n\n// animal.dog 不是 animal，所以不能存取 default 成員。` },
          { title: "範例 8：protected 與子類別", value: `package animal;\n\npublic class Animal {\n    protected String name = \"Lucky\";\n}\n\npackage animal.dog;\n\nimport animal.Animal;\n\npublic class Dog extends Animal {\n    void show() {\n        System.out.println(name);\n    }\n}\n\n// 不同 package 的子類別可以透過繼承使用 protected 成員。` },
          { title: "範例 9：protected 不是任意物件都能用", value: `package animal.dog;\n\nimport animal.Animal;\n\npublic class Dog extends Animal {\n    void test() {\n        Animal a = new Animal();\n        // System.out.println(a.name); // 通常不建議也可能受限制\n        System.out.println(this.name);\n    }\n}` },
          { title: "範例 10：package-private 類別", value: `package utility;\n\nclass InternalTool {\n}\n\npublic class PublicTool {\n}\n\n// 解說：\n// InternalTool 沒有 public，只能在 utility package 內使用。` },
          { title: "範例 11：存取控制圖解", value: `同 Package\n  ↓ default 可見\n不同 Package\n  ↓ default 不可見\n不同 Package 子類別\n  ↓ protected 可透過繼承使用\nprivate\n  ↓ 只在同一個類別內可見` }
        ]
      },
      {
        sectionId: "13.4",
        title: "綜合演練",
        body: [
          "本節把 Package 組織、自訂套件、Java 標準類別庫與命名規則整理成實務練習。",
          "請把 Package 想成專案地圖。好的套件命名和分類，能讓未來的你更快找到程式，也能降低類別名稱衝突。"
        ],
        code: {
          title: "題目 1：加入新的類別到 flag 套件中",
          value: `問題說明：
建立 flag 套件，新增 TaiwanFlag、JapanFlag、USAFlag。

解題思路：
旗幟相關類別都放在 flag package。
每個類別提供 show() 方法顯示名稱。

資料夾結構：
Project
└─ flag
   ├─ TaiwanFlag.java
   ├─ JapanFlag.java
   └─ USAFlag.java

Hint：
每個檔案最上方都要寫 package flag;

Solution：
package flag;

public class TaiwanFlag {
    public void show() {
        System.out.println("Taiwan Flag");
    }
}

package flag;

public class JapanFlag {
    public void show() {
        System.out.println("Japan Flag");
    }
}

package flag;

public class USAFlag {
    public void show() {
        System.out.println("USA Flag");
    }
}

Explanation：
同一主題的類別放在同一套件，專案結構會更清楚。Main 若在其他 package，可用 import flag.TaiwanFlag; 使用。`
        },
        codes: [
          {
            title: "題目 2：Java 標準類別庫查詢表",
            value: `問題說明：
認識常見 Java 標準 Package，知道遇到問題時該去哪裡找類別。

解題思路：
先記常見用途，不需要背完整 API。

查詢表：
Package      用途                         常見類別
java.lang    Java 核心類別，自動匯入       String, Math, System
java.util    工具集合與輸入                Scanner, ArrayList, Random
java.io      輸入輸出與檔案                File, InputStream, Reader
java.math    精準數字運算                  BigInteger, BigDecimal

Hint：
看到 Scanner 就想到 java.util。
看到 String、Math 通常不需要 import，因為在 java.lang。

Solution：
import java.util.Scanner;
import java.util.Random;
import java.math.BigDecimal;

Scanner sc = new Scanner(System.in);
Random random = new Random();
BigDecimal price = new BigDecimal("99.9");

Explanation：
標準類別庫是 Java 已經幫你準備好的工具箱。學會 package 名稱，可以更快理解 import 的來源。`
          },
          {
            title: "題目 3：套件的命名",
            value: `問題說明：
為專案設計清楚、不容易撞名的 package 名稱。

解題思路：
常見做法是反向網域命名法。
例如公司網域是 example.com，package 可用 com.example.project。

推薦命名：
com.company.project
tw.com.example.school
org.learning.java

不建議：
MyPackage
Test123

原因：
- 大寫開頭不符合常見 Java package 命名慣例
- Test123 太模糊，不知道用途
- 容易和其他專案撞名

Hint：
package 名稱通常使用小寫，並用點分層。

Solution：
package tw.com.example.school.student;

public class Student {
}

Explanation：
好的 package 名稱應該能看出組織、專案與功能分類。反向網域命名法能降低不同團隊之間的命名衝突。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch13-exercise-create-packages",
        sectionId: "13.1",
        type: "exercise",
        title: "13.1 練習：建立三個套件",
        question: "建立 `school`、`animal`、`utility` 三個套件，分別放入 Student、Dog、Calculator。",
        hint: "每個檔案最上方寫對應的 `package` 宣告。",
        solution: `package school;
public class Student {}

package animal;
public class Dog {}

package utility;
public class Calculator {}`,
        explanation: "Package 讓類別依主題分組，檔案越多時越重要。"
      }),
      createActivity({
        id: "ch13-thought-package-folder",
        sectionId: "13.1",
        type: "thought",
        title: "13.1 思考題：Package 和資料夾有什麼關係？",
        question: "請說明 `package school;` 通常會對應到哪個資料夾。",
        hint: "想想 `school/Student.java`。",
        solution: "`package school;` 通常對應到 `school` 資料夾，`Student.java` 會放在該資料夾中。",
        explanation: "Package 是 Java 的命名分類，資料夾是檔案系統分類；實務上兩者通常保持一致。"
      }),
      createActivity({
        id: "ch13-exercise-import-scanner",
        sectionId: "13.2",
        type: "exercise",
        title: "13.2 練習：import Scanner",
        question: "使用 `import java.util.Scanner;` 建立 Scanner 物件。",
        hint: "import 寫在 class 之前、package 之後。",
        solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
    }
}`,
        explanation: "Scanner 在 java.util package 中，因此需要 import。"
      }),
      createActivity({
        id: "ch13-exercise-import-custom",
        sectionId: "13.2",
        type: "exercise",
        title: "13.2 練習：import 自訂類別",
        question: "在 Main 中 import `animal.Dog` 並呼叫 `bark()`。",
        hint: "先確定 Dog 是 public，且 package 是 animal。",
        solution: `import animal.Dog;

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.bark();
    }
}`,
        explanation: "不同 package 使用類別時，通常用 import 讓程式更簡潔。"
      }),
      createActivity({
        id: "ch13-homework-fully-qualified",
        sectionId: "13.2",
        type: "homework",
        title: "13.2 作業：使用完整類別名稱",
        question: "不使用 import，直接用完整名稱建立 `java.util.Scanner` 和 `animal.Dog`。",
        hint: "完整名稱包含 package 和 class 名稱。",
        solution: `java.util.Scanner sc =
    new java.util.Scanner(System.in);

animal.Dog dog = new animal.Dog();`,
        explanation: "完整名稱能避免重名衝突，但程式會變長。"
      }),
      createActivity({
        id: "ch13-exercise-subpackage",
        sectionId: "13.3",
        type: "exercise",
        title: "13.3 練習：建立子套件",
        question: "建立 `animal` 和 `animal.dog`，觀察它們是否為同一個 Package。",
        hint: "`animal.dog` 看起來像子資料夾，但在 Java 中是不同 package。",
        solution: `package animal;
public class Animal {}

package animal.dog;
public class Dog {}`,
        explanation: "`animal` 與 `animal.dog` 在存取控制上是不同 Package。"
      }),
      createActivity({
        id: "ch13-exercise-access-modifiers",
        sectionId: "13.3",
        type: "exercise",
        title: "13.3 練習：測試 public / protected / default",
        question: "建立 Animal，分別宣告 public、protected、default 欄位，測試同 package 與不同 package 子類別可見性。",
        hint: "先用表格判斷，再寫程式驗證。",
        solution: `package animal;

public class Animal {
    public String publicName;
    protected String protectedName;
    String defaultName;
}`,
        explanation: "public 最開放，default 只限同 package，protected 對子類別有特殊規則。"
      }),
      createActivity({
        id: "ch13-project-flag-package",
        sectionId: "13.4",
        type: "exercise",
        title: "13.4 綜合練習：flag 套件",
        question: "建立 `flag` 套件，新增 TaiwanFlag、JapanFlag、USAFlag。",
        hint: "三個檔案都寫 `package flag;`。",
        solution: `package flag;

public class TaiwanFlag {
    public void show() {
        System.out.println("Taiwan Flag");
    }
}`,
        explanation: "同類主題放在同一個 package，未來新增旗幟類別會更好找。"
      }),
      createActivity({
        id: "ch13-homework-package-naming",
        sectionId: "13.4",
        type: "homework",
        title: "13.4 作業：設計套件命名",
        question: "替一個學校管理系統設計 3 個 package 名稱，使用反向網域命名法。",
        hint: "可以從 `tw.com.example.school` 開始往下分。",
        solution: `tw.com.example.school.student
tw.com.example.school.teacher
tw.com.example.school.course`,
        explanation: "小寫、分層、能看出用途，是良好 package 命名的重要原則。"
      })
    ],
    quiz: [
      { question: "Package 主要用途是什麼？", options: ["整理類別並避免命名衝突", "取代所有方法", "只能輸出文字", "讓程式不用編譯"], answer: 0, explanation: "Package 可分類類別、避免衝突，也影響存取控制。" },
      { question: "`package school;` 通常應放在檔案哪裡？", options: ["最上方", "main 方法裡", "class 結尾", "註解中"], answer: 0, explanation: "package 宣告通常是 Java 檔案第一行有效程式碼。" },
      { question: "`package school;` 通常對應哪個資料夾？", options: ["school", "src-only", "main", "java.util"], answer: 0, explanation: "Package 名稱通常對應資料夾路徑。" },
      { question: "若類別在 `com.example.school`，資料夾常見路徑是？", options: ["com/example/school", "com-example-school", "school.com.example", "exampleOnly"], answer: 0, explanation: "點號通常對應資料夾層級。" },
      { question: "使用 Scanner 通常需要哪個 import？", options: ["import java.util.Scanner;", "import java.lang.Scanner;", "import scanner.*;", "package Scanner;"], answer: 0, explanation: "Scanner 位於 java.util。" },
      { question: "Fully Qualified Name 是什麼？", options: ["包含 package 的完整類別名稱", "只包含方法名稱", "只包含變數名稱", "註解格式"], answer: 0, explanation: "例如 java.util.Scanner。" },
      { question: "`import animal.*;` 代表什麼？", options: ["匯入 animal 套件中的類別", "匯入所有子套件", "建立 animal 物件", "刪除 animal"], answer: 0, explanation: "星號匯入指定 package 的類別，不代表自動包含子套件。" },
      { question: "遇到 school.Student 和 company.Student 重名時，常見做法是？", options: ["使用完整類別名稱", "刪掉 package", "兩個都 import 並直接用 Student", "改用 private"], answer: 0, explanation: "完整名稱可明確指定來源。" },
      { question: "java.lang 中常見類別是否通常需要 import？", options: ["不需要", "一定需要", "只能用完整名稱", "不能使用"], answer: 0, explanation: "java.lang 會自動可用。" },
      { question: "subpackage 在 Java 存取控制上代表？", options: ["不同 Package", "同一 Package", "父子類別", "同一 class"], answer: 0, explanation: "school 和 school.student 是不同 Package。" },
      { question: "`animal` 和 `animal.dog` 是否是同一個 Package？", options: ["不是", "是", "只有 Dog 是", "只有 public 時是"], answer: 0, explanation: "它們是兩個不同 Package。" },
      { question: "default 存取權限可被誰直接存取？", options: ["同 Package", "所有 Package", "只有子套件", "只有 private class"], answer: 0, explanation: "default 又稱 package-private，只在同 package 可見。" },
      { question: "private 成員可被誰直接存取？", options: ["同一個類別內", "同 package 全部類別", "所有子類別", "所有 package"], answer: 0, explanation: "private 最嚴格，只限同類別。" },
      { question: "public 成員可見範圍通常是？", options: ["所有地方都可見", "只限同類別", "只限子套件", "只限 default package"], answer: 0, explanation: "public 是最開放的存取權限。" },
      { question: "protected 在不同 Package 子類別中？", options: ["可透過繼承使用", "完全不可用", "自動變 private", "只能用 import static"], answer: 0, explanation: "protected 對不同 package 的子類別有開放規則。" },
      { question: "哪個是 Java 標準類別庫 package？", options: ["java.util", "my-test", "Test123", "MainPackage"], answer: 0, explanation: "java.util 是標準類別庫中的常用 package。" },
      { question: "java.math 常見用途是？", options: ["精準數字運算", "讀取鍵盤", "宣告 package", "建立 classpath"], answer: 0, explanation: "java.math 包含 BigInteger、BigDecimal。" },
      { question: "反向網域命名法範例是？", options: ["com.company.project", "MyPackage", "Test123", "Package Main"], answer: 0, explanation: "反向網域命名法常用小寫並以點分層。" },
      { question: "為什麼不建議 package 叫 MyPackage？", options: ["不符合常見小寫命名慣例且語意模糊", "因為太短不能編譯", "因為必須有數字", "因為只能叫 java.lang"], answer: 0, explanation: "Package 通常使用小寫並具備清楚分層語意。" }
    ]
  };
}

function createChapter14() {
  return {
    id: 14,
    code: "CH14",
    title: "例外處理（Exception Handling）",
    minutes: 135,
    summary: "理解 Exception、Runtime Error、try/catch/finally、throw/throws 與自訂例外。",
    intro: "程式不只要在正常情況下能跑，也要能面對錯誤輸入、資料不存在、除以零、餘額不足等狀況。本章會教你讓程式遇到問題時，不是直接崩潰，而是能用清楚方式處理錯誤。",
    goals: [
      "了解什麼是例外 Exception",
      "了解 Runtime Error 與 Compile Error 的差異",
      "學會 try / catch / finally",
      "學會 throw 與 throws",
      "學會建立自訂例外類別",
      "能夠設計具有錯誤處理能力的程式"
    ],
    sections: [
      {
        sectionId: "14.1",
        title: "什麼是例外？",
        body: [
          "例外（Exception）是程式執行時發生的異常狀況。像 ATM 提款餘額不足、登入時帳號不存在、使用者輸入文字但程式期待數字，都是可以用例外思維處理的情境。",
          "錯誤大致可分成 Compile Error、Runtime Error、Logical Error。編譯錯誤會讓程式無法通過編譯；執行錯誤是在程式跑起來後才發生；邏輯錯誤則是程式能跑，但結果不符合需求。",
          "當例外沒有被處理時，程式通常會立即中斷，後面的程式碼不會繼續執行。例外處理的目的，就是讓程式能在出錯時給出合理反應。",
          "常見例外包含 ArithmeticException、ArrayIndexOutOfBoundsException、NullPointerException、NumberFormatException。"
        ],
        code: {
          title: "錯誤類型圖解",
          value: `Compile Error
  ↓ 編譯前就發現
System.out.prinln("Hello");

Runtime Error
  ↓ 執行時才發生
10 / 0

Logical Error
  ↓ 程式可執行但結果錯
折扣公式寫錯`
        },
        codes: [
          { title: "範例 1：生活案例 ATM 餘額不足", value: `提款 5000\n  ↓\n帳戶餘額只有 1000\n  ↓\n發生「餘額不足」例外狀況\n  ↓\n提示使用者：餘額不足，請重新輸入金額` },
          { title: "範例 2：Compile Error", value: `System.out.prinln("Hello");\n\n// 錯誤原因：\n// println 拼錯，編譯時就會發現。` },
          { title: "範例 3：Runtime Error 除以零", value: `int x = 10 / 0;\nSystem.out.println(x);\n\n// 執行時發生：\n// ArithmeticException: / by zero` },
          { title: "範例 4：Logical Error", value: `int price = 1000;\nint discount = 20;\nint finalPrice = price + discount;\n\n// 程式可執行，但公式錯了。\n// 折扣應該是減掉，不是加上。` },
          { title: "範例 5：ArithmeticException", value: `int a = 10;\nint b = 0;\nSystem.out.println(a / b);\n\n// 例外：\n// ArithmeticException` },
          { title: "範例 6：ArrayIndexOutOfBoundsException", value: `int[] nums = {1, 2, 3};\nSystem.out.println(nums[3]);\n\n// 例外：\n// ArrayIndexOutOfBoundsException\n// 索引只有 0, 1, 2。` },
          { title: "範例 7：NullPointerException", value: `String name = null;\nSystem.out.println(name.length());\n\n// 例外：\n// NullPointerException\n// null 沒有物件可呼叫 length()。` },
          { title: "範例 8：NumberFormatException", value: `String text = "abc";\nint number = Integer.parseInt(text);\n\n// 例外：\n// NumberFormatException\n// abc 不能轉成整數。` },
          { title: "範例 9：例外發生後程式中斷", value: `System.out.println("開始");\nint x = 10 / 0;\nSystem.out.println("結束");\n\n// 執行結果：\n// 開始\n// 接著發生例外，結束不會印出。` },
          { title: "範例 10：例外是物件", value: `ArithmeticException e =\n    new ArithmeticException("不能除以零");\n\nSystem.out.println(e.getMessage());\n\n// 執行結果：\n// 不能除以零` },
          { title: "範例 11：先檢查避免例外", value: `int a = 10;\nint b = 0;\n\nif (b != 0) {\n    System.out.println(a / b);\n} else {\n    System.out.println("除數不能是 0");\n}\n\n// 執行結果：\n// 除數不能是 0` }
        ]
      },
      {
        sectionId: "14.2",
        title: "try / catch / finally 敘述",
        body: [
          "`try` 區塊放可能發生例外的程式，`catch` 區塊負責捕捉並處理例外。這樣例外發生時，程式不會直接中斷，而是進入對應的 catch。",
          "你可以透過 `e.getMessage()` 取得例外訊息，或用 `e.printStackTrace()` 印出詳細追蹤資訊。初學時先知道它能幫你找錯即可。",
          "多重 catch 可以針對不同例外給不同處理方式。順序要從比較具體的例外寫到比較一般的 Exception。",
          "`finally` 無論是否發生例外，通常都會執行，常用於關閉檔案、關閉資料庫連線、釋放資源。"
        ],
        code: {
          title: "try / catch / finally 流程圖",
          value: `try
  ↓
發生例外？
  ├─ 是 → catch 處理
  └─ 否 → 繼續
  ↓
finally
  ↓
後續程式`
        },
        codes: [
          { title: "範例 1：基本 try / catch", value: `try {\n    int x = 10 / 0;\n} catch (Exception e) {\n    System.out.println("發生錯誤");\n}\n\n// 執行結果：\n// 發生錯誤` },
          { title: "範例 2：取得例外訊息", value: `try {\n    int x = 10 / 0;\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n}\n\n// 執行結果：\n// / by zero` },
          { title: "範例 3：印出例外資訊", value: `try {\n    int x = 10 / 0;\n} catch (Exception e) {\n    e.printStackTrace();\n}\n\n// 解說：\n// 會印出例外類型、訊息與呼叫位置。` },
          { title: "範例 4：捕捉 ArithmeticException", value: `try {\n    int x = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("數學運算錯誤");\n}\n\n// 執行結果：\n// 數學運算錯誤` },
          { title: "範例 5：捕捉陣列越界", value: `try {\n    int[] nums = {1, 2, 3};\n    System.out.println(nums[5]);\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("索引超出範圍");\n}\n\n// 執行結果：\n// 索引超出範圍` },
          { title: "範例 6：多重 catch", value: `try {\n    int[] nums = {1, 2, 3};\n    System.out.println(nums[3]);\n} catch (ArithmeticException e) {\n    System.out.println("除法錯誤");\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("陣列索引錯誤");\n}\n\n// 執行結果：\n// 陣列索引錯誤` },
          { title: "範例 7：最後用 Exception 接一般錯誤", value: `try {\n    String text = null;\n    System.out.println(text.length());\n} catch (NullPointerException e) {\n    System.out.println("資料是 null");\n} catch (Exception e) {\n    System.out.println("其他錯誤");\n}\n\n// 執行結果：\n// 資料是 null` },
          { title: "範例 8：finally 一定會執行", value: `try {\n    int x = 10 / 0;\n} catch (Exception e) {\n    System.out.println("發生錯誤");\n} finally {\n    System.out.println("一定會執行");\n}\n\n// 執行結果：\n// 發生錯誤\n// 一定會執行` },
          { title: "範例 9：沒有例外也會 finally", value: `try {\n    int x = 10 / 2;\n    System.out.println(x);\n} catch (Exception e) {\n    System.out.println("發生錯誤");\n} finally {\n    System.out.println("收尾");\n}\n\n// 執行結果：\n// 5\n// 收尾` },
          { title: "範例 10：除法計算器", value: `int a = 10;\nint b = 0;\n\ntry {\n    System.out.println(a / b);\n} catch (ArithmeticException e) {\n    System.out.println("除數不能是 0");\n}\n\n// 執行結果：\n// 除數不能是 0` },
          { title: "範例 11：陣列安全存取", value: `int[] nums = {10, 20, 30};\nint index = 5;\n\ntry {\n    System.out.println(nums[index]);\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("沒有這個位置");\n}\n\n// 執行結果：\n// 沒有這個位置` },
          { title: "範例 12：finally 用於關閉資源", value: `try {\n    System.out.println("開啟檔案");\n    System.out.println("讀取資料");\n} catch (Exception e) {\n    System.out.println("讀取失敗");\n} finally {\n    System.out.println("關閉檔案");\n}\n\n// 執行結果：\n// 開啟檔案\n// 讀取資料\n// 關閉檔案` },
          { title: "範例 13：NumberFormatException", value: `try {\n    int n = Integer.parseInt("abc");\n} catch (NumberFormatException e) {\n    System.out.println("請輸入數字");\n}\n\n// 執行結果：\n// 請輸入數字` }
        ]
      },
      {
        sectionId: "14.3",
        title: "拋出例外",
        body: [
          "`throw` 是主動拋出一個例外物件，通常用在你檢查到不合法資料時。例如年齡小於 0，就可以主動丟出例外。",
          "`throws` 寫在方法宣告上，表示這個方法可能會丟出某種例外，提醒呼叫者要處理。",
          "簡單記法：`throw` 是真的丟出去；`throws` 是方法先聲明可能會丟。",
          "例外會沿著呼叫鏈往上傳遞。methodB 發生例外，如果 methodB 不處理，可能傳給 methodA，再傳回 main。"
        ],
        code: {
          title: "Call Stack 圖解",
          value: `main()
  ↓ 呼叫
methodA()
  ↓ 呼叫
methodB()
  ↓
throw Exception
  ↑
往呼叫者回傳，直到被 catch`
        },
        codes: [
          { title: "範例 1：throw 主動拋出例外", value: `int age = -1;\n\nif (age < 0) {\n    throw new RuntimeException("年齡不能小於 0");\n}\n\n// 執行結果：\n// RuntimeException: 年齡不能小於 0` },
          { title: "範例 2：throw new Exception", value: `static void checkAge(int age) throws Exception {\n    if (age < 0) {\n        throw new Exception("年齡不能小於0");\n    }\n}` },
          { title: "範例 3：throws 宣告", value: `static void test() throws Exception {\n    throw new Exception("測試錯誤");\n}\n\n// 解說：\n// throws 告訴呼叫者：這個方法可能發生 Exception。` },
          { title: "範例 4：呼叫 throws 方法需要處理", value: `try {\n    test();\n} catch (Exception e) {\n    System.out.println(e.getMessage());\n}\n\n// 執行結果：\n// 測試錯誤` },
          { title: "範例 5：驗證年齡", value: `static void validateAge(int age) {\n    if (age < 0) {\n        throw new IllegalArgumentException("年齡不合法");\n    }\n}\n\nvalidateAge(-5);\n\n// 例外：\n// IllegalArgumentException` },
          { title: "範例 6：驗證分數", value: `static void validateScore(int score) {\n    if (score < 0 || score > 100) {\n        throw new IllegalArgumentException("分數必須是 0 到 100");\n    }\n}` },
          { title: "範例 7：驗證帳戶餘額", value: `static void withdraw(int balance, int amount) {\n    if (amount > balance) {\n        throw new IllegalArgumentException("餘額不足");\n    }\n}` },
          { title: "範例 8：throw 與 return 的差異", value: `static int divide(int a, int b) {\n    if (b == 0) {\n        throw new IllegalArgumentException("除數不能是 0");\n    }\n    return a / b;\n}\n\n// throw 會中斷正常流程；return 是正常回傳結果。` },
          { title: "範例 9：呼叫鏈傳遞", value: `static void methodB() throws Exception {\n    throw new Exception("B 發生錯誤");\n}\n\nstatic void methodA() throws Exception {\n    methodB();\n}\n\npublic static void main(String[] args) {\n    try {\n        methodA();\n    } catch (Exception e) {\n        System.out.println(e.getMessage());\n    }\n}\n\n// 執行結果：\n// B 發生錯誤` },
          { title: "範例 10：多個 throws", value: `static void readData() throws Exception {\n    throw new Exception("讀取失敗");\n}\n\n// 初學先知道：\n// throws 可以把處理責任交給呼叫者。` },
          { title: "範例 11：何時適合主動 throw", value: `適合：\n- 參數不合法\n- 狀態不允許操作\n- 資料缺失導致無法繼續\n\n不適合：\n- 可以用簡單 if 正常處理的流程，不一定要丟例外。` }
        ]
      },
      {
        sectionId: "14.4",
        title: "自訂例外類別",
        body: [
          "Java 提供很多標準例外，但有時候標準例外不夠清楚。例如餘額不足、年齡不合法、會員等級錯誤，這些都可以設計成自訂例外。",
          "自訂例外通常繼承 `Exception` 或 `RuntimeException`。初學階段先用 `extends Exception` 理解它是一種例外類別。",
          "自訂例外的好處是讓錯誤語意更清楚。看到 `BalanceException`，比看到一般 `Exception` 更容易知道是帳戶餘額問題。",
          "建立自訂例外常會加上 Constructor，接收錯誤訊息並呼叫 `super(msg)`。"
        ],
        code: {
          title: "自訂例外流程圖",
          value: `定義 AgeException
  ↓
validateAge()
  ↓ 年齡不合法
throw new AgeException(...)
  ↓
catch(AgeException e)
  ↓
顯示錯誤訊息`
        },
        codes: [
          { title: "範例 1：最簡單 AgeException", value: `class AgeException extends Exception {\n}\n\n// 解說：\n// AgeException 現在是一種 Exception。` },
          { title: "範例 2：加入訊息 Constructor", value: `class AgeException extends Exception {\n    AgeException(String msg) {\n        super(msg);\n    }\n}` },
          { title: "範例 3：拋出 AgeException", value: `static void checkAge(int age) throws AgeException {\n    if (age < 0) {\n        throw new AgeException("年齡不合法");\n    }\n}` },
          { title: "範例 4：捕捉 AgeException", value: `try {\n    checkAge(-1);\n} catch (AgeException e) {\n    System.out.println(e.getMessage());\n}\n\n// 執行結果：\n// 年齡不合法` },
          { title: "範例 5：ScoreException", value: `class ScoreException extends Exception {\n    ScoreException(String msg) {\n        super(msg);\n    }\n}\n\nstatic void checkScore(int score) throws ScoreException {\n    if (score < 0 || score > 100) {\n        throw new ScoreException("分數超出範圍");\n    }\n}` },
          { title: "範例 6：BalanceException", value: `class BalanceException extends Exception {\n    BalanceException(String msg) {\n        super(msg);\n    }\n}` },
          { title: "範例 7：提款時拋出 BalanceException", value: `static void withdraw(int balance, int amount)\n        throws BalanceException {\n    if (amount > balance) {\n        throw new BalanceException("餘額不足");\n    }\n}` },
          { title: "範例 8：會員等級錯誤", value: `class MemberLevelException extends Exception {\n    MemberLevelException(String msg) {\n        super(msg);\n    }\n}\n\nstatic void checkLevel(String level) throws MemberLevelException {\n    if (!level.equals("VIP") && !level.equals("NORMAL")) {\n        throw new MemberLevelException("會員等級錯誤");\n    }\n}` },
          { title: "範例 9：自訂例外命名", value: `建議命名：\nAgeException\nScoreException\nBalanceException\n\n不建議：\nError1\nBadThing\nMyProblem\n\n// 好名字能直接說明錯誤類型。` },
          { title: "範例 10：RuntimeException 版本", value: `class BalanceRuntimeException extends RuntimeException {\n    BalanceRuntimeException(String msg) {\n        super(msg);\n    }\n}\n\n// 初學先認識：\n// RuntimeException 通常不強制 throws。` },
          { title: "範例 11：自訂例外讓 catch 更精準", value: `try {\n    withdraw(1000, 2000);\n} catch (BalanceException e) {\n    System.out.println("提款失敗：" + e.getMessage());\n}\n\n// 執行結果：\n// 提款失敗：餘額不足` }
        ]
      },
      {
        sectionId: "14.5",
        title: "綜合演練",
        body: [
          "本節把前面學過的方法、字串、封裝、Constructor 與 Exception 串起來。",
          "例外處理的設計重點是：正常流程保持清楚，錯誤流程也要有明確訊息。不要讓程式默默失敗，也不要讓使用者只看到看不懂的錯誤。"
        ],
        code: {
          title: "題目 1：會拋出例外的計算階乘程式",
          value: `問題說明：
建立 factorial(int n)，負數不允許，遇到負數主動拋出例外。

解題思路：
階乘只接受 0 或正整數。
如果 n < 0，throw IllegalArgumentException。
否則用迴圈計算。

流程圖：
輸入 n
  ↓
n < 0 ?
  ├─ 是 → throw 例外
  └─ 否 → 計算階乘

Hint：
先檢查參數，再做計算。

Solution：
static int factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("負數不能計算階乘");
    }

    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

try {
    System.out.println(factorial(-3));
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}

執行結果：
負數不能計算階乘

Explanation：
錯誤輸入不應該進入正常計算流程。先檢查並拋出例外，可以讓方法規則更清楚。`
        },
        codes: [
          {
            title: "題目 2：字串大小寫轉換應用",
            value: `問題說明：
輸入字串後轉成全大寫與全小寫。
若輸入為 null，請處理例外。

解題思路：
String 的 toUpperCase()、toLowerCase() 需要物件存在。
如果 text 是 null，呼叫方法會發生 NullPointerException。
可以先主動檢查 null，並丟出 IllegalArgumentException。

Hint：
用 if (text == null) 檢查。

Solution：
static void convertText(String text) {
    if (text == null) {
        throw new IllegalArgumentException("文字不能是 null");
    }

    System.out.println(text.toUpperCase());
    System.out.println(text.toLowerCase());
}

try {
    convertText(null);
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}

執行結果：
文字不能是 null

Explanation：
與其讓 NullPointerException 在深處發生，不如在方法入口先檢查，給出更容易理解的訊息。`
          },
          {
            title: "題目 3：簡單的帳戶模擬程式",
            value: `問題說明：
建立 BankAccount，包含 deposit() 和 withdraw()。
若提款超過餘額，拋出 BalanceException。

UML 概念圖：
BankAccount
- balance
+ BankAccount(balance)
+ deposit(amount)
+ withdraw(amount)
+ getBalance()

BalanceException extends Exception

流程圖：
withdraw(amount)
  ↓
amount > balance ?
  ├─ 是 → throw BalanceException
  └─ 否 → balance -= amount

Hint：
balance 使用 private，透過方法控制存取。

Solution：
class BalanceException extends Exception {
    BalanceException(String msg) {
        super(msg);
    }
}

class BankAccount {
    private int balance;

    BankAccount(int balance) {
        this.balance = balance;
    }

    void deposit(int amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    void withdraw(int amount) throws BalanceException {
        if (amount > balance) {
            throw new BalanceException("餘額不足");
        }
        balance -= amount;
    }

    int getBalance() {
        return balance;
    }
}

BankAccount account = new BankAccount(1000);

try {
    account.withdraw(1500);
} catch (BalanceException e) {
    System.out.println(e.getMessage());
}

執行結果：
餘額不足

Explanation：
這題結合 Constructor、Encapsulation、Exception。BankAccount 保護 balance，提款規則集中在 withdraw()，錯誤情況用自訂例外清楚表達。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch14-exercise-runtime-errors",
        sectionId: "14.1",
        type: "exercise",
        title: "14.1 練習：觀察三種 Runtime Error",
        question: "分別寫出除以零、陣列越界、NullPointerException 的範例，觀察錯誤訊息。",
        hint: "可以用 `10 / 0`、`nums[3]`、`name.length()` 搭配 null。",
        solution: `int x = 10 / 0;

int[] nums = {1, 2, 3};
System.out.println(nums[3]);

String name = null;
System.out.println(name.length());`,
        explanation: "這題目的是認識常見 Runtime Error。實務上會用 try/catch 或事前檢查處理。"
      }),
      createActivity({
        id: "ch14-thought-error-types",
        sectionId: "14.1",
        type: "thought",
        title: "14.1 思考題：Compile / Runtime / Logical Error 差在哪？",
        question: "請各用一句話說明三種錯誤差異。",
        hint: "思考錯誤是在編譯前、執行中，還是結果不符合需求。",
        solution: "Compile Error 是編譯時發現的語法或名稱錯誤；Runtime Error 是執行中發生的錯誤；Logical Error 是程式能執行但邏輯結果錯。",
        explanation: "分清楚錯誤類型，才能選擇正確除錯方式。"
      }),
      createActivity({
        id: "ch14-exercise-try-catch",
        sectionId: "14.2",
        type: "exercise",
        title: "14.2 練習：除法計算器",
        question: "建立除法程式，當除數為 0 時，用 try/catch 顯示錯誤訊息。",
        hint: "捕捉 `ArithmeticException`。",
        solution: `try {
    int result = 10 / 0;
    System.out.println(result);
} catch (ArithmeticException e) {
    System.out.println("除數不能是 0");
}`,
        explanation: "try/catch 可以讓程式在錯誤發生時改走錯誤處理流程，而不是直接中斷。"
      }),
      createActivity({
        id: "ch14-exercise-multi-catch",
        sectionId: "14.2",
        type: "exercise",
        title: "14.2 練習：多重 catch",
        question: "設計程式同時可能發生除法錯誤與陣列錯誤，並用不同 catch 處理。",
        hint: "先寫 ArithmeticException，再寫 ArrayIndexOutOfBoundsException。",
        solution: `try {
    int[] nums = {1, 2, 3};
    System.out.println(nums[5]);
} catch (ArithmeticException e) {
    System.out.println("除法錯誤");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("陣列索引錯誤");
}`,
        explanation: "多重 catch 讓不同錯誤有不同提示，使用者比較容易理解。"
      }),
      createActivity({
        id: "ch14-exercise-throw-age",
        sectionId: "14.3",
        type: "exercise",
        title: "14.3 練習：驗證年齡",
        question: "建立 `validateAge(int age)`，年齡小於 0 時主動拋出例外。",
        hint: "使用 `throw new IllegalArgumentException(...)`。",
        solution: `static void validateAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("年齡不能小於 0");
    }
}`,
        explanation: "throw 適合在方法發現不合法資料時主動中斷正常流程。"
      }),
      createActivity({
        id: "ch14-homework-throw-score-balance",
        sectionId: "14.3",
        type: "homework",
        title: "14.3 作業：驗證分數與餘額",
        question: "建立 `validateScore` 與 `withdraw`，分數超出範圍或餘額不足時拋出例外。",
        hint: "分數規則是 0 到 100，提款規則是 amount <= balance。",
        solution: `static void validateScore(int score) {
    if (score < 0 || score > 100) {
        throw new IllegalArgumentException("分數超出範圍");
    }
}

static void withdraw(int balance, int amount) {
    if (amount > balance) {
        throw new IllegalArgumentException("餘額不足");
    }
}`,
        explanation: "例外可以把違反規則的情況明確表達出來。"
      }),
      createActivity({
        id: "ch14-exercise-custom-age",
        sectionId: "14.4",
        type: "exercise",
        title: "14.4 練習：AgeException",
        question: "建立 `AgeException extends Exception`，並在年齡小於 0 時拋出。",
        hint: "自訂例外 Constructor 內呼叫 `super(msg)`。",
        solution: `class AgeException extends Exception {
    AgeException(String msg) {
        super(msg);
    }
}`,
        explanation: "自訂例外讓錯誤語意更清楚，呼叫端也能精準 catch。"
      }),
      createActivity({
        id: "ch14-exercise-custom-score-balance",
        sectionId: "14.4",
        type: "exercise",
        title: "14.4 練習：ScoreException 與 BalanceException",
        question: "建立 `ScoreException` 與 `BalanceException`，分別表示分數超出範圍與餘額不足。",
        hint: "兩個類別都可以 extends Exception。",
        solution: `class ScoreException extends Exception {
    ScoreException(String msg) {
        super(msg);
    }
}

class BalanceException extends Exception {
    BalanceException(String msg) {
        super(msg);
    }
}`,
        explanation: "自訂例外命名最好能直接說明錯誤類型。"
      }),
      createActivity({
        id: "ch14-project-factorial",
        sectionId: "14.5",
        type: "exercise",
        title: "14.5 綜合練習：階乘例外",
        question: "完成 factorial，負數時拋出例外，並用 try/catch 顯示訊息。",
        hint: "先檢查 `n < 0`。",
        solution: `static int factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("負數不能計算階乘");
    }
    int result = 1;
    for (int i = 1; i <= n; i++) result *= i;
    return result;
}`,
        explanation: "方法入口處先驗證參數，是寫出穩定程式的重要習慣。"
      }),
      createActivity({
        id: "ch14-homework-bank-account",
        sectionId: "14.5",
        type: "homework",
        title: "14.5 作業：BankAccount 例外處理",
        question: "完成 BankAccount，使用 private balance、deposit、withdraw，餘額不足時拋出 BalanceException。",
        hint: "結合 Constructor、Encapsulation、自訂例外。",
        solution: `class BankAccount {
    private int balance;

    BankAccount(int balance) {
        this.balance = balance;
    }

    void withdraw(int amount) throws BalanceException {
        if (amount > balance) {
            throw new BalanceException("餘額不足");
        }
        balance -= amount;
    }
}`,
        explanation: "這題將前面 OOP 與 Exception 整合，是本章最接近實務的練習。"
      })
    ],
    quiz: [
      { question: "Exception 通常代表什麼？", options: ["程式執行時的異常狀況", "CSS 樣式", "HTML 標籤", "資料庫表格"], answer: 0, explanation: "Exception 是執行期間可能發生的錯誤狀況。" },
      { question: "Compile Error 是什麼？", options: ["編譯時發現的錯誤", "程式結果錯但可執行", "使用者登入成功", "finally 區塊"], answer: 0, explanation: "拼字錯、語法錯常屬於 Compile Error。" },
      { question: "`10 / 0` 常造成哪種錯誤？", options: ["Runtime Error", "Compile Error", "Logical Error", "HTML Error"], answer: 0, explanation: "除以零是在執行時發生 ArithmeticException。" },
      { question: "陣列索引超出範圍常見例外是？", options: ["ArrayIndexOutOfBoundsException", "NullPointerException", "AgeException", "PackageException"], answer: 0, explanation: "存取不存在的陣列位置會造成此例外。" },
      { question: "將 `abc` 轉成 int 可能發生？", options: ["NumberFormatException", "ArithmeticException", "InterfaceException", "NoPackageError"], answer: 0, explanation: "abc 無法解析成整數。" },
      { question: "try 區塊放什麼？", options: ["可能發生例外的程式", "只能放註解", "只能放 package", "只能放 class 名稱"], answer: 0, explanation: "try 用來包住可能出錯的程式碼。" },
      { question: "catch 區塊用途是？", options: ["捕捉並處理例外", "建立物件", "宣告套件", "結束編譯器"], answer: 0, explanation: "catch 負責錯誤處理。" },
      { question: "finally 通常何時執行？", options: ["無論是否發生例外通常都會執行", "只有編譯錯誤時", "只有沒有例外時", "永遠不執行"], answer: 0, explanation: "finally 常用於收尾與釋放資源。" },
      { question: "取得例外訊息可用？", options: ["e.getMessage()", "e.messageOnly()", "e.catch()", "e.finally()"], answer: 0, explanation: "getMessage() 回傳例外訊息。" },
      { question: "多重 catch 順序通常應該？", options: ["具體例外在前，一般 Exception 在後", "Exception 一定最前", "順序完全不重要", "finally 放最前"], answer: 0, explanation: "較一般的 catch 放前面會擋住後面具體 catch。" },
      { question: "throw 的用途是？", options: ["主動拋出例外", "宣告 package", "建立 class", "匯入類別"], answer: 0, explanation: "throw 會丟出一個例外物件。" },
      { question: "throws 的用途是？", options: ["宣告方法可能拋出例外", "真的建立例外物件", "捕捉例外", "關閉檔案"], answer: 0, explanation: "throws 寫在方法宣告上，提醒呼叫者處理。" },
      { question: "throw 與 throws 差異是？", options: ["throw 真的丟例外，throws 是方法宣告", "兩者完全相同", "throws 只能放變數", "throw 只能放 package"], answer: 0, explanation: "一個是動作，一個是方法簽名中的聲明。" },
      { question: "Call Stack 可用來理解什麼？", options: ["方法呼叫鏈與例外傳遞", "CSS 排版", "套件命名", "字串不可變"], answer: 0, explanation: "例外會沿呼叫鏈往上傳遞直到被處理。" },
      { question: "自訂例外通常繼承？", options: ["Exception 或 RuntimeException", "String", "Scanner", "System"], answer: 0, explanation: "自訂例外是例外類別的一種。" },
      { question: "自訂例外 Constructor 中常呼叫？", options: ["super(msg)", "this.package()", "catch(msg)", "final(msg)"], answer: 0, explanation: "super(msg) 把訊息傳給父類別 Exception。" },
      { question: "BalanceException 最適合表示？", options: ["餘額不足", "字串轉大寫", "套件匯入", "抽象類別不能 new"], answer: 0, explanation: "好的例外名稱能清楚表達錯誤語意。" },
      { question: "階乘程式遇到負數時，適合？", options: ["主動拋出例外", "默默回傳 999", "忽略輸入", "改 package 名稱"], answer: 0, explanation: "負數違反方法規則，適合用例外表達。" },
      { question: "BankAccount 提款超過餘額時，較好的設計是？", options: ["拋出 BalanceException 並讓呼叫端處理", "直接讓 balance 變負數", "刪除帳戶", "重新命名 class"], answer: 0, explanation: "錯誤狀態應清楚表達並交由呼叫端處理。" },
      { question: "本章不需要深入哪個主題？", options: ["JVM Exception Table", "try / catch", "throw", "Custom Exception"], answer: 0, explanation: "初學階段先會使用例外處理即可。" }
    ]
  };
}

function createChapter15() {
  return {
    id: 15,
    code: "CH15",
    title: "多執行緒（Multithreading）",
    minutes: 165,
    summary: "理解 Thread、Runnable、start/run、Synchronization、wait/notify 與簡易 Timer 設計。",
    intro: "多執行緒讓程式能同時處理多件事，例如下載檔案時仍能操作畫面，遊戲中角色、音樂與敵人 AI 同時運作。本章會用生活化流程圖帶你建立基本多執行緒直覺。",
    goals: [
      "了解什麼是執行緒 Thread",
      "了解單執行緒與多執行緒差異",
      "學會建立執行緒",
      "學會 Thread 類別",
      "學會 Runnable 介面",
      "了解同步 Synchronization",
      "了解 wait() / notify()",
      "能夠設計簡單的多執行緒程式"
    ],
    sections: [
      {
        sectionId: "15.1",
        title: "什麼是執行緒",
        body: [
          "執行緒（Thread）可以想成程式中的一條工作線。單執行緒程式一次照順序做一件事，多執行緒程式則可以讓多個工作看起來同時進行。",
          "例如下載檔案時仍能播放音樂；瀏覽器下載圖片時，使用者仍能捲動頁面；遊戲中角色移動、背景音樂、敵人 AI 可以一起運作。",
          "程序（Process）是正在執行的程式；執行緒（Thread）是程序裡的工作單位。一個程序可以有一個或多個執行緒。",
          "建立執行緒常見方式有繼承 Thread、實作 Runnable、匿名 Runnable。初學者最常犯的錯是直接呼叫 run()，但正確啟動新執行緒應該呼叫 start()。"
        ],
        code: {
          title: "單執行緒 vs 多執行緒圖解",
          value: `單執行緒：
main
 ↓
工作1
 ↓
工作2
 ↓
工作3

多執行緒：
main
 ├─ 工作1
 ├─ 工作2
 └─ 工作3`
        },
        codes: [
          { title: "範例 1：Process 與 Thread 概念", value: `Process：正在執行的程式\n  ├─ main thread\n  ├─ download thread\n  └─ music thread\n\n解說：\n一個程式可以有多條工作線。` },
          { title: "範例 2：繼承 Thread", value: `class MyThread extends Thread {\n    public void run() {\n        System.out.println(\"執行中\");\n    }\n}` },
          { title: "範例 3：啟動執行緒 start()", value: `MyThread t = new MyThread();\nt.start();\n\n// 執行結果：\n// 執行中\n\n// 解說：\n// start() 會開啟新的執行緒，並自動呼叫 run()。` },
          { title: "範例 4：run() 不是啟動新執行緒", value: `MyThread t = new MyThread();\nt.run();\n\n// 解說：\n// 這只是普通方法呼叫，仍在目前執行緒中執行。\n// 初學請記：要啟動新執行緒，用 start()。` },
          { title: "範例 5：start() 與 run() 差異圖", value: `t.start()\n  ↓\n建立新 Thread\n  ↓\n新 Thread 執行 run()\n\n t.run()\n  ↓\n普通方法呼叫\n  ↓\n目前 Thread 執行 run()` },
          { title: "範例 6：使用 Runnable", value: `class MyTask implements Runnable {\n    public void run() {\n        System.out.println(\"任務執行\");\n    }\n}\n\nThread t = new Thread(new MyTask());\nt.start();\n\n// 執行結果：\n// 任務執行` },
          { title: "範例 7：匿名 Runnable", value: `Thread t = new Thread(new Runnable() {\n    public void run() {\n        System.out.println(\"匿名任務\");\n    }\n});\n\nt.start();\n\n// 執行結果：\n// 匿名任務` },
          { title: "範例 8：Lambda Runnable", value: `Thread t = new Thread(() -> {\n    System.out.println(\"Lambda 任務\");\n});\n\nt.start();\n\n// 執行結果：\n// Lambda 任務\n\n// 解說：\n// Runnable 只有一個抽象方法，適合用 Lambda。` },
          { title: "範例 9：sleep()", value: `try {\n    Thread.sleep(1000);\n    System.out.println(\"1 秒後執行\");\n} catch (InterruptedException e) {\n    System.out.println(\"睡眠被中斷\");\n}\n\n// 執行結果：\n// 1 秒後執行` },
          { title: "範例 10：倒數計時", value: `Thread timer = new Thread(() -> {\n    for (int i = 3; i >= 1; i--) {\n        System.out.println(i);\n        try {\n            Thread.sleep(1000);\n        } catch (InterruptedException e) {\n            System.out.println(\"中斷\");\n        }\n    }\n    System.out.println(\"時間到\");\n});\n\ntimer.start();\n\n// 執行結果：\n// 3\n// 2\n// 1\n// 時間到` },
          { title: "範例 11：同時執行兩個任務", value: `Thread t1 = new Thread(() -> {\n    for (int i = 1; i <= 3; i++) {\n        System.out.println(\"A\" + i);\n    }\n});\n\nThread t2 = new Thread(() -> {\n    for (int i = 1; i <= 3; i++) {\n        System.out.println(\"B\" + i);\n    }\n});\n\nt1.start();\nt2.start();\n\n// 執行結果順序可能不同：\n// A1 B1 A2 B2 ...` },
          { title: "範例 12：執行緒生命週期簡圖", value: `New\n ↓ start()\nRunnable\n ↓ 被 CPU 執行\nRunning\n ↓ sleep()/wait()\nWaiting / Timed Waiting\n ↓ 結束 run()\nTerminated` },
          { title: "範例 13：目前執行緒名稱", value: `System.out.println(Thread.currentThread().getName());\n\nThread t = new Thread(() -> {\n    System.out.println(Thread.currentThread().getName());\n});\n\nt.start();\n\n// 執行結果可能是：\n// main\n// Thread-0` }
        ]
      },
      {
        sectionId: "15.2",
        title: "執行緒的同步（Synchronization）",
        body: [
          "多個執行緒同時操作同一份資料時，可能產生 Race Condition。像兩個人同時從同一帳戶提款，如果檢查餘額和扣款不是一個安全流程，就可能出現資料錯誤。",
          "`synchronized` 可以讓同一時間只有一個執行緒進入某段重要程式。它像是一把物件鎖（Object Lock），先拿到鎖的人先執行，其他人等待。",
          "同步可以用在方法上，也可以用同步區塊 `synchronized(this)`。範圍越小越精準，但初學先理解保護共享資料即可。",
          "同步不是為了讓程式變快，而是為了讓共享資料正確。"
        ],
        code: {
          title: "Race Condition 時間軸",
          value: `餘額 balance = 1000

Thread A 讀到 1000
Thread B 讀到 1000
Thread A 提款 500，寫回 500
Thread B 提款 500，寫回 500

問題：
兩次提款共 1000，但結果仍是 500。`
        },
        codes: [
          { title: "範例 1：未同步提款問題", value: `class BankAccount {\n    int balance = 1000;\n\n    void withdraw(int amount) {\n        if (balance >= amount) {\n            balance -= amount;\n        }\n    }\n}\n\n// 多執行緒同時呼叫時，可能發生資料競爭。` },
          { title: "範例 2：同步方法", value: `class BankAccount {\n    private int balance = 1000;\n\n    public synchronized void withdraw(int amount) {\n        if (balance >= amount) {\n            balance -= amount;\n        }\n    }\n}` },
          { title: "範例 3：同步區塊", value: `class BankAccount {\n    private int balance = 1000;\n\n    public void withdraw(int amount) {\n        synchronized (this) {\n            if (balance >= amount) {\n                balance -= amount;\n            }\n        }\n    }\n}` },
          { title: "範例 4：Object Lock 圖解", value: `Thread A\n  ↓ 取得 account 的鎖\nwithdraw()\n  ↓ 完成後釋放鎖\nThread B\n  ↓ 才能進入 withdraw()` },
          { title: "範例 5：同步 Counter", value: `class Counter {\n    private int count = 0;\n\n    public synchronized void add() {\n        count++;\n    }\n\n    public int getCount() {\n        return count;\n    }\n}` },
          { title: "範例 6：多執行緒累加", value: `Counter counter = new Counter();\n\nThread t1 = new Thread(() -> {\n    for (int i = 0; i < 1000; i++) counter.add();\n});\nThread t2 = new Thread(() -> {\n    for (int i = 0; i < 1000; i++) counter.add();\n});\n\nt1.start();\nt2.start();\n\n// 同步後，最後結果較能保持正確。` },
          { title: "範例 7：未同步 vs 同步比較", value: `未同步：\ncount++ 可能被多個執行緒交錯執行，結果小於預期。\n\n同步：\n一次只允許一個執行緒修改 count，結果較穩定。` },
          { title: "範例 8：同步不是保護區塊外的程式", value: `synchronized (this) {\n    balance -= amount;\n}\n\nSystem.out.println(\"這行不在鎖內\");\n\n// 解說：\n// synchronized 只保護大括號內的程式碼。` },
          { title: "範例 9：不同物件不同鎖", value: `BankAccount a = new BankAccount();\nBankAccount b = new BankAccount();\n\n// synchronized(this) 鎖的是各自物件。\n// a 和 b 的鎖不同。` },
          { title: "範例 10：同步提款完整流程", value: `class BankAccount {\n    private int balance;\n\n    BankAccount(int balance) {\n        this.balance = balance;\n    }\n\n    synchronized void withdraw(int amount) {\n        if (balance >= amount) {\n            balance -= amount;\n            System.out.println(\"提款成功，餘額：\" + balance);\n        } else {\n            System.out.println(\"餘額不足\");\n        }\n    }\n}` },
          { title: "範例 11：同步使用時機", value: `適合同步：\n- 多執行緒共享同一份資料\n- 修改餘額、庫存、計數器\n\n不一定需要同步：\n- 每個執行緒只使用自己的區域變數\n- 只讀取不可變資料` }
        ]
      },
      {
        sectionId: "15.3",
        title: "執行緒間的協調",
        body: [
          "多執行緒不只是同時執行。有些情況需要互相等待，例如生產者 Producer 放入資料後，消費者 Consumer 才能取出資料。",
          "`wait()` 讓目前執行緒釋放鎖並等待；`notify()` 喚醒一個等待中的執行緒；`notifyAll()` 喚醒所有等待中的執行緒。它們通常要在 synchronized 區塊或方法中使用。",
          "`join()` 讓一個執行緒等待另一個執行緒完成。`yield()` 則是提示排程器：我願意先讓其他執行緒執行，但不保證一定切換。",
          "初學時先掌握：wait/notify 用於協調共享資源，join 用於等待子執行緒結束。"
        ],
        code: {
          title: "Producer / Consumer 圖解",
          value: `Producer
  ↓ 放入資料
共享資源 Box
  ↓ 通知
Consumer
  ↓ 取出資料`
        },
        codes: [
          { title: "範例 1：wait() 概念", value: `synchronized (lock) {\n    lock.wait();\n}\n\n// 解說：\n// 目前執行緒進入等待，並釋放 lock。` },
          { title: "範例 2：notify() 概念", value: `synchronized (lock) {\n    lock.notify();\n}\n\n// 解說：\n// 喚醒一個等待 lock 的執行緒。` },
          { title: "範例 3：notifyAll() 概念", value: `synchronized (lock) {\n    lock.notifyAll();\n}\n\n// 解說：\n// 喚醒所有等待 lock 的執行緒。` },
          { title: "範例 4：簡易 Box", value: `class Box {\n    private int data;\n    private boolean hasData = false;\n\n    synchronized void put(int value) {\n        data = value;\n        hasData = true;\n        notify();\n    }\n}` },
          { title: "範例 5：Consumer 等待資料", value: `class Box {\n    private int data;\n    private boolean hasData = false;\n\n    synchronized int get() throws InterruptedException {\n        while (!hasData) {\n            wait();\n        }\n        hasData = false;\n        return data;\n    }\n}` },
          { title: "範例 6：Producer / Consumer 完整概念", value: `Box box = new Box();\n\nThread producer = new Thread(() -> {\n    box.put(100);\n});\n\nThread consumer = new Thread(() -> {\n    try {\n        System.out.println(box.get());\n    } catch (InterruptedException e) {\n        System.out.println(\"中斷\");\n    }\n});\n\nconsumer.start();\nproducer.start();\n\n// 執行結果：\n// 100` },
          { title: "範例 7：join() 等待子執行緒", value: `Thread t = new Thread(() -> {\n    System.out.println(\"子執行緒工作\");\n});\n\nt.start();\ntry {\n    t.join();\n} catch (InterruptedException e) {\n    System.out.println(\"等待被中斷\");\n}\nSystem.out.println(\"主執行緒繼續\");\n\n// 執行結果：\n// 子執行緒工作\n// 主執行緒繼續` },
          { title: "範例 8：沒有 join 的差異", value: `Thread t = new Thread(() -> {\n    System.out.println(\"子執行緒\");\n});\n\nt.start();\nSystem.out.println(\"主執行緒\");\n\n// 執行結果順序不一定：\n// 主執行緒\n// 子執行緒` },
          { title: "範例 9：yield()", value: `Thread.yield();\n\n// 解說：\n// 提示目前執行緒願意禮讓，\n// 但實際是否切換由排程器決定。` },
          { title: "範例 10：wait/notify 流程圖", value: `Consumer 進入 get()\n  ↓\n沒有資料 → wait()\n  ↓\nProducer put() 放資料\n  ↓\nnotify()\n  ↓\nConsumer 被喚醒，取得資料` },
          { title: "範例 11：wait 使用 while 檢查", value: `while (!hasData) {\n    wait();\n}\n\n// 解說：\n// 被喚醒後仍要重新檢查條件，\n// 這是寫 wait/notify 的好習慣。` }
        ]
      },
      {
        sectionId: "15.4",
        title: "綜合演練",
        body: [
          "本節設計一個簡易 Timer。Timer 負責倒數，時間到後通知 TimerListener。這會結合 Interface、Thread/Runnable、匿名內部類別。",
          "請把 Listener 想成通知管道：Timer 不知道時間到後要做什麼，只負責呼叫 listener.timeUp()。"
        ],
        code: {
          title: "題目 1：用來通知計時結束的介面",
          value: `問題說明：
建立 TimerListener 介面，提供 timeUp() 方法。

UML 概念圖：
<<interface>> TimerListener
+ timeUp()

Hint：
介面只定義規格，不決定時間到後做什麼。

Solution：
interface TimerListener {
    void timeUp();
}

Explanation：
TimerListener 是通知契約。任何類別只要實作 timeUp()，就能接收計時結束通知。`
        },
        codes: [
          {
            title: "題目 2：實作 Timer 類別",
            value: `問題說明：
建立 Timer，指定秒數，開始倒數，時間到通知 Listener。

UML 概念圖：
Timer
- seconds
- listener
+ start()

TimerListener
+ timeUp()

流程圖：
start()
  ↓
建立 Thread
  ↓
倒數 seconds 秒
  ↓
listener.timeUp()

Hint：
倒數工作可以放在 Runnable 裡。

Solution：
class Timer {
    private int seconds;
    private TimerListener listener;

    Timer(int seconds, TimerListener listener) {
        this.seconds = seconds;
        this.listener = listener;
    }

    void start() {
        Thread t = new Thread(() -> {
            for (int i = seconds; i >= 1; i--) {
                System.out.println(i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    System.out.println("計時中斷");
                    return;
                }
            }
            listener.timeUp();
        });

        t.start();
    }
}

Explanation：
Timer 把倒數工作放到新執行緒，主程式不需要卡住等待倒數完成。`
          },
          {
            title: "題目 3：測試 Timer 類別",
            value: `問題說明：
建立 Main，建立 Timer，開始倒數，時間到觸發 timeUp()。

一般實作類別：
class Alarm implements TimerListener {
    public void timeUp() {
        System.out.println("時間到！");
    }
}

Timer timer1 = new Timer(3, new Alarm());
timer1.start();

匿名內部類別：
Timer timer2 = new Timer(3, new TimerListener() {
    public void timeUp() {
        System.out.println("匿名通知：時間到！");
    }
});

timer2.start();

執行結果：
3
2
1
時間到！

Explanation：
一般類別適合重複使用；匿名內部類別適合一次性的通知行為。Timer 只依賴 TimerListener，因此彈性很高。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch15-exercise-create-thread",
        sectionId: "15.1",
        type: "exercise",
        title: "15.1 練習：建立執行緒",
        question: "建立一個繼承 Thread 的類別，覆寫 run()，並用 start() 啟動。",
        hint: "不要直接呼叫 run()，請呼叫 start()。",
        solution: `class MyThread extends Thread {
    public void run() {
        System.out.println("執行中");
    }
}

new MyThread().start();`,
        explanation: "start() 會建立新的執行緒並執行 run()；run() 只是普通方法呼叫。"
      }),
      createActivity({
        id: "ch15-exercise-countdown",
        sectionId: "15.1",
        type: "exercise",
        title: "15.1 練習：倒數計時",
        question: "使用 Thread.sleep() 做 3 秒倒數計時。",
        hint: "sleep 會丟出 InterruptedException，請用 try/catch。",
        solution: `Thread t = new Thread(() -> {
    for (int i = 3; i >= 1; i--) {
        System.out.println(i);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("中斷");
        }
    }
});

t.start();`,
        explanation: "sleep() 可暫停目前執行緒一段時間，常用來模擬等待。"
      }),
      createActivity({
        id: "ch15-thought-start-run",
        sectionId: "15.1",
        type: "thought",
        title: "15.1 思考題：start() 和 run() 差在哪？",
        question: "請說明為什麼啟動新執行緒應該使用 start()，不是 run()。",
        hint: "run() 是普通方法呼叫；start() 會建立新的執行緒。",
        solution: "start() 會讓 JVM 建立新執行緒，並在新執行緒中呼叫 run()；直接呼叫 run() 不會建立新執行緒，只是在目前執行緒執行方法。",
        explanation: "這是多執行緒初學最常犯的錯，務必記住要用 start()。"
      }),
      createActivity({
        id: "ch15-exercise-sync-counter",
        sectionId: "15.2",
        type: "exercise",
        title: "15.2 練習：同步計數器",
        question: "建立 Counter，使用 synchronized 讓 add() 安全累加。",
        hint: "在方法宣告加上 synchronized。",
        solution: `class Counter {
    private int count = 0;

    public synchronized void add() {
        count++;
    }

    public int getCount() {
        return count;
    }
}`,
        explanation: "synchronized 讓同一時間只有一個執行緒能進入 add() 修改 count。"
      }),
      createActivity({
        id: "ch15-homework-bank-sync",
        sectionId: "15.2",
        type: "homework",
        title: "15.2 作業：銀行提款系統",
        question: "建立 BankAccount，使用 synchronized 保護 withdraw()。",
        hint: "提款時檢查餘額與扣款要放在同一個同步流程中。",
        solution: `class BankAccount {
    private int balance = 1000;

    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }
}`,
        explanation: "共享資料 balance 必須被保護，避免多執行緒同時讀寫造成錯誤。"
      }),
      createActivity({
        id: "ch15-thought-race-condition",
        sectionId: "15.2",
        type: "thought",
        title: "15.2 思考題：Race Condition 是什麼？",
        question: "用兩個人同時提款的例子，說明 Race Condition。",
        hint: "想像兩個執行緒同時讀到同一個舊餘額。",
        solution: "Race Condition 是多個執行緒同時操作共享資料，導致結果取決於執行順序。兩個提款執行緒若同時讀到舊餘額，就可能扣款結果錯誤。",
        explanation: "同步的目的就是讓重要操作不被交錯打斷。"
      }),
      createActivity({
        id: "ch15-exercise-wait-notify",
        sectionId: "15.3",
        type: "exercise",
        title: "15.3 練習：wait / notify",
        question: "建立 Box，Consumer 沒資料時 wait，Producer 放資料後 notify。",
        hint: "wait 和 notify 要在 synchronized 方法或區塊內使用。",
        solution: `class Box {
    private int data;
    private boolean hasData = false;

    synchronized void put(int value) {
        data = value;
        hasData = true;
        notify();
    }

    synchronized int get() throws InterruptedException {
        while (!hasData) {
            wait();
        }
        return data;
    }
}`,
        explanation: "wait/notify 讓執行緒能依共享資源狀態互相協調。"
      }),
      createActivity({
        id: "ch15-exercise-join",
        sectionId: "15.3",
        type: "exercise",
        title: "15.3 練習：join",
        question: "建立子執行緒並讓 main 等待它完成後再輸出結束。",
        hint: "呼叫 `t.join()`。",
        solution: `Thread t = new Thread(() -> {
    System.out.println("子執行緒完成");
});

t.start();
t.join();
System.out.println("main 結束");`,
        explanation: "join() 可讓目前執行緒等待另一個執行緒完成。"
      }),
      createActivity({
        id: "ch15-project-timer-listener",
        sectionId: "15.4",
        type: "exercise",
        title: "15.4 綜合練習：TimerListener",
        question: "建立 `TimerListener` 介面，定義 `timeUp()`。",
        hint: "介面只需要方法規格。",
        solution: `interface TimerListener {
    void timeUp();
}`,
        explanation: "TimerListener 是 Timer 和外部通知行為之間的橋樑。"
      }),
      createActivity({
        id: "ch15-homework-timer",
        sectionId: "15.4",
        type: "homework",
        title: "15.4 作業：完成 Timer",
        question: "建立 Timer 類別，指定秒數、倒數計時、時間到呼叫 listener.timeUp()。",
        hint: "倒數工作放在 Thread 或 Runnable 裡。",
        solution: `class Timer {
    private int seconds;
    private TimerListener listener;

    Timer(int seconds, TimerListener listener) {
        this.seconds = seconds;
        this.listener = listener;
    }

    void start() {
        new Thread(() -> {
            for (int i = seconds; i >= 1; i--) {
                System.out.println(i);
            }
            listener.timeUp();
        }).start();
    }
}`,
        explanation: "Timer 不需要知道通知後要做什麼，只要依賴 TimerListener 介面即可。"
      })
    ],
    quiz: [
      { question: "Thread 是什麼？", options: ["程式中的一條工作線", "只能是字串", "資料庫表格", "package 名稱"], answer: 0, explanation: "Thread 是程序中的執行單位。" },
      { question: "Process 與 Thread 關係是？", options: ["一個 Process 可包含多個 Thread", "Thread 一定包含多個 Process", "兩者完全無關", "Process 只能是 int"], answer: 0, explanation: "程序中可有多條執行緒。" },
      { question: "啟動新執行緒應呼叫？", options: ["start()", "run()", "main()", "sleepOnly()"], answer: 0, explanation: "start() 會建立新執行緒並呼叫 run()。" },
      { question: "直接呼叫 run() 會怎樣？", options: ["只是普通方法呼叫", "一定建立新執行緒", "程式無法編譯", "會自動同步"], answer: 0, explanation: "run() 本身只是方法，不會啟動新執行緒。" },
      { question: "Runnable 的主要方法是？", options: ["run()", "start()", "notify()", "waitAll()"], answer: 0, explanation: "Runnable 定義 run()。" },
      { question: "Thread.sleep() 作用是？", options: ["暫停目前執行緒一段時間", "永久停止 JVM", "建立新 package", "同步所有物件"], answer: 0, explanation: "sleep 讓目前執行緒暫停指定毫秒數。" },
      { question: "Race Condition 是什麼？", options: ["多執行緒共享資料因執行順序造成錯誤", "跑步遊戲", "編譯成功", "字串不可變"], answer: 0, explanation: "競爭條件常發生在共享資料讀寫。" },
      { question: "synchronized 用途是？", options: ["保護共享資料的關鍵區段", "建立執行緒", "刪除類別", "宣告 package"], answer: 0, explanation: "synchronized 讓同一時間只有一個執行緒進入受保護區域。" },
      { question: "Object Lock 是什麼概念？", options: ["物件上的同步鎖", "物件的字串名稱", "例外類別", "Regex 規則"], answer: 0, explanation: "同步方法或區塊會使用鎖來控制進入。" },
      { question: "同步方法語法包含？", options: ["synchronized", "threaded", "safe", "lockAll"], answer: 0, explanation: "例如 public synchronized void withdraw()。" },
      { question: "wait() 通常會做什麼？", options: ["讓執行緒等待並釋放鎖", "啟動新執行緒", "直接結束程式", "編譯程式"], answer: 0, explanation: "wait 用於等待條件成立。" },
      { question: "notify() 作用是？", options: ["喚醒一個等待中的執行緒", "讓所有類別同步", "建立 Runnable", "永久停止執行緒"], answer: 0, explanation: "notify 喚醒等待同一鎖的其中一個執行緒。" },
      { question: "notifyAll() 作用是？", options: ["喚醒所有等待中的執行緒", "刪除所有執行緒", "等待子執行緒完成", "啟動 main"], answer: 0, explanation: "notifyAll 會喚醒所有等待者，讓它們重新競爭鎖。" },
      { question: "wait/notify 通常要在哪裡使用？", options: ["synchronized 區塊或方法內", "任何註解內", "package 宣告前", "HTML 中"], answer: 0, explanation: "它們需要搭配物件鎖使用。" },
      { question: "join() 用途是？", options: ["等待另一個執行緒完成", "喚醒所有執行緒", "建立匿名類別", "同步欄位"], answer: 0, explanation: "join 會等待指定執行緒結束。" },
      { question: "yield() 是什麼？", options: ["提示目前執行緒願意禮讓", "保證切換執行緒", "關閉檔案", "拋出例外"], answer: 0, explanation: "yield 只是提示，不保證排程結果。" },
      { question: "TimerListener 的 timeUp() 適合代表？", options: ["計時結束通知", "提款同步", "package 匯入", "例外訊息"], answer: 0, explanation: "Listener 負責接收事件通知。" },
      { question: "Timer 倒數不想卡住主程式，可使用？", options: ["Thread 或 Runnable", "只用 package", "只用 private", "只用 equals"], answer: 0, explanation: "倒數工作可放到新執行緒中。" },
      { question: "匿名內部類別在 Timer 測試中可用來？", options: ["一次性實作 TimerListener", "建立 Thread Pool", "使用 ForkJoin", "建立 Maven"], answer: 0, explanation: "匿名內部類別適合一次性 listener 行為。" },
      { question: "本章避免深入哪個主題？", options: ["Executor Framework", "Thread", "Runnable", "synchronized"], answer: 0, explanation: "初學階段先掌握基本 Thread 與同步即可。" }
    ]
  };
}

function createChapter16() {
  return {
    id: 16,
    code: "CH16",
    title: "資料輸入與輸出（Input / Output）",
    minutes: 150,
    summary: "理解 Stream、Reader/Writer、檔案讀寫、try-with-resources 與物件序列化。",
    intro: "資料輸入與輸出讓程式能把資訊存到檔案、從檔案讀回來，甚至保存物件狀態。本章會用水流類比理解 Stream，再逐步學會文字檔、位元檔與物件讀寫。",
    goals: [
      "了解 Stream 概念",
      "分辨 Input Stream 與 Output Stream",
      "分辨 Byte Stream 與 Character Stream",
      "學會 FileWriter / FileReader",
      "學會 BufferedWriter / BufferedReader",
      "了解 Serializable 與物件序列化",
      "能夠完成簡單檔案讀寫程式"
    ],
    sections: [
      {
        sectionId: "16.1",
        title: "什麼是串流",
        body: [
          "Stream 可以想成資料的水流。資料從來源流進程式，就是 Input Stream；資料從程式流到目的地，就是 Output Stream。",
          "來源和目的地可以是檔案、鍵盤、網路、記憶體。初學先聚焦檔案：從檔案讀進來是輸入，把資料寫出去是輸出。",
          "Byte Stream 以 byte 為單位，適合圖片、影片、二進位資料；Character Stream 以字元為單位，適合文字檔。",
          "學 IO 的重點是掌握方向、資料單位、以及用完後關閉資源。"
        ],
        visuals: [
          { type: "flow", title: "水流類比：Input / Output", value: `資料來源\n  ↓ Input Stream\nJava 程式\n  ↓ Output Stream\n目的地` },
          { type: "flow", title: "Byte Stream vs Character Stream", value: `Byte Stream\n  ↓\n圖片 / 音訊 / 二進位檔\n\nCharacter Stream\n  ↓\n文字 / CSV / 設定檔` },
          { type: "callout", variant: "tip", text: "先判斷資料是文字還是二進位，再選 Reader/Writer 或 InputStream/OutputStream。" }
        ],
        code: {
          title: "Stream 方向圖",
          value: `讀取檔案：
file.txt → Java 程式

寫入檔案：
Java 程式 → file.txt`
        },
        codes: [
          { title: "範例 1：Input Stream 概念", value: `檔案資料\n  ↓\nFileInputStream\n  ↓\nJava 程式` },
          { title: "範例 2：Output Stream 概念", value: `Java 程式\n  ↓\nFileOutputStream\n  ↓\n檔案資料` },
          { title: "範例 3：Byte Stream 適合二進位", value: `FileInputStream in =\n    new FileInputStream("photo.jpg");\n\n// 解說：\n// 圖片適合用 byte 方式處理。` },
          { title: "範例 4：Character Stream 適合文字", value: `FileReader reader =\n    new FileReader("note.txt");\n\n// 解說：\n// 文字檔適合用 Reader / Writer。` },
          { title: "範例 5：輸入與輸出方向", value: `Input：外部資料進入程式\nOutput：程式資料送到外部\n\nScanner 讀鍵盤：Input\nFileWriter 寫檔案：Output` },
          { title: "範例 6：讀取一個 byte", value: `FileInputStream in = new FileInputStream("data.bin");\nint value = in.read();\nin.close();\n\n// read() 回傳一個 byte 資料，或 -1 表示結束。` },
          { title: "範例 7：寫出一個 byte", value: `FileOutputStream out = new FileOutputStream("data.bin");\nout.write(65);\nout.close();\n\n// 65 對應文字 A 的編碼。` },
          { title: "範例 8：讀取一個字元", value: `FileReader reader = new FileReader("note.txt");\nint ch = reader.read();\nreader.close();\n\n// Character Stream 以字元為主。` },
          { title: "範例 9：寫出文字", value: `FileWriter writer = new FileWriter("note.txt");\nwriter.write("Hello Java");\nwriter.close();` },
          { title: "範例 10：關閉資源的重要性", value: `FileWriter writer = new FileWriter("note.txt");\nwriter.write("Hello");\nwriter.close();\n\n// 解說：\n// close() 可把資料確實送出並釋放檔案資源。` }
        ]
      },
      {
        sectionId: "16.2",
        title: "Java 串流類別架構",
        body: [
          "Java IO 類別很多，但可以先抓四大方向：InputStream、OutputStream、Reader、Writer。",
          "InputStream / OutputStream 是 Byte Stream；Reader / Writer 是 Character Stream。",
          "Buffered Stream 像是加了緩衝區，可以減少頻繁讀寫的成本。File 類別則代表檔案或資料夾路徑。",
          "初學不需要背完整繼承樹，只要會依需求選擇：讀文字用 FileReader/BufferedReader；寫文字用 FileWriter/BufferedWriter；處理二進位用 FileInputStream/FileOutputStream。"
        ],
        visuals: [
          { type: "uml", title: "IO 類別樹狀架構", value: `Byte Stream\n├─ InputStream\n│  └─ FileInputStream\n└─ OutputStream\n   └─ FileOutputStream\n\nCharacter Stream\n├─ Reader\n│  ├─ FileReader\n│  └─ BufferedReader\n└─ Writer\n   ├─ FileWriter\n   └─ BufferedWriter` },
          { type: "files", title: "File 類別代表路徑", value: `project\n ├─ data.txt\n ├─ score.csv\n └─ images\n     └─ logo.png` }
        ],
        code: {
          title: "選擇類別速查",
          value: `文字讀取：FileReader + BufferedReader
文字寫入：FileWriter + BufferedWriter
二進位讀取：FileInputStream
二進位寫入：FileOutputStream
檔案路徑：File`
        },
        codes: [
          { title: "範例 1：InputStream", value: `InputStream in = new FileInputStream("data.bin");\nin.close();` },
          { title: "範例 2：OutputStream", value: `OutputStream out = new FileOutputStream("data.bin");\nout.close();` },
          { title: "範例 3：Reader", value: `Reader reader = new FileReader("note.txt");\nreader.close();` },
          { title: "範例 4：Writer", value: `Writer writer = new FileWriter("note.txt");\nwriter.close();` },
          { title: "範例 5：BufferedReader", value: `BufferedReader br =\n    new BufferedReader(new FileReader("note.txt"));\nbr.close();` },
          { title: "範例 6：BufferedWriter", value: `BufferedWriter bw =\n    new BufferedWriter(new FileWriter("note.txt"));\nbw.close();` },
          { title: "範例 7：File 物件", value: `File file = new File("note.txt");\nSystem.out.println(file.exists());` },
          { title: "範例 8：檢查是否為檔案", value: `File file = new File("note.txt");\nSystem.out.println(file.isFile());` },
          { title: "範例 9：檢查是否為資料夾", value: `File dir = new File("data");\nSystem.out.println(dir.isDirectory());` },
          { title: "範例 10：取得檔名", value: `File file = new File("note.txt");\nSystem.out.println(file.getName());\n\n// 執行結果：\n// note.txt` },
          { title: "範例 11：建立資料夾", value: `File dir = new File("output");\ndir.mkdir();` },
          { title: "範例 12：類別關係概念", value: `FileReader 是 Reader 的一種。\nFileWriter 是 Writer 的一種。\nFileInputStream 是 InputStream 的一種。` }
        ]
      },
      {
        sectionId: "16.3",
        title: "輸出、輸入資料",
        body: [
          "寫文字檔可用 FileWriter；讀文字檔可用 FileReader。若要一行一行讀寫，常搭配 BufferedWriter / BufferedReader。",
          "二進位資料可用 FileInputStream / FileOutputStream。它們以 byte 為單位，適合複製圖片或非文字檔案。",
          "try-with-resources 是 Java 中管理 IO 資源的好習慣。把資源放在 try 小括號內，區塊結束後會自動 close。",
          "檔案讀寫最容易忘記處理例外與關閉資源。本節會用執行前/執行後比較讓你看到資料如何變化。"
        ],
        visuals: [
          { type: "compare", title: "寫入檔案前後", before: `score.txt\n\n（空檔案）`, after: `score.txt\n\nJimmy,90\nAmy,85` },
          { type: "flow", title: "try-with-resources 流程", value: `try(開啟資源)\n  ↓\n讀寫資料\n  ↓\n自動 close()\n  ↓\n離開區塊` }
        ],
        code: {
          title: "try-with-resources 基本格式",
          value: `try (FileWriter writer = new FileWriter("note.txt")) {
    writer.write("Hello");
}`
        },
        codes: [
          { title: "範例 1：FileWriter 寫文字", value: `try (FileWriter writer = new FileWriter("note.txt")) {\n    writer.write("Hello Java");\n}` },
          { title: "範例 2：FileReader 讀文字", value: `try (FileReader reader = new FileReader("note.txt")) {\n    int ch;\n    while ((ch = reader.read()) != -1) {\n        System.out.print((char) ch);\n    }\n}` },
          { title: "範例 3：BufferedWriter 寫一行", value: `try (BufferedWriter bw = new BufferedWriter(new FileWriter("score.txt"))) {\n    bw.write("Jimmy,90");\n    bw.newLine();\n}` },
          { title: "範例 4：BufferedReader 讀一行", value: `try (BufferedReader br = new BufferedReader(new FileReader("score.txt"))) {\n    String line = br.readLine();\n    System.out.println(line);\n}` },
          { title: "範例 5：讀取所有行", value: `try (BufferedReader br = new BufferedReader(new FileReader("score.txt"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        System.out.println(line);\n    }\n}` },
          { title: "範例 6：追加寫入", value: `try (FileWriter writer = new FileWriter("note.txt", true)) {\n    writer.write("\\n追加文字");\n}` },
          { title: "範例 7：FileOutputStream 寫 byte", value: `try (FileOutputStream out = new FileOutputStream("data.bin")) {\n    out.write(65);\n}` },
          { title: "範例 8：FileInputStream 讀 byte", value: `try (FileInputStream in = new FileInputStream("data.bin")) {\n    int value = in.read();\n    System.out.println(value);\n}` },
          { title: "範例 9：複製二進位檔", value: `try (FileInputStream in = new FileInputStream("source.bin");\n     FileOutputStream out = new FileOutputStream("copy.bin")) {\n    int data;\n    while ((data = in.read()) != -1) {\n        out.write(data);\n    }\n}` },
          { title: "範例 10：寫 CSV", value: `try (BufferedWriter bw = new BufferedWriter(new FileWriter("students.csv"))) {\n    bw.write("Jimmy,90");\n    bw.newLine();\n    bw.write("Amy,85");\n}` },
          { title: "範例 11：讀 CSV 並 split", value: `try (BufferedReader br = new BufferedReader(new FileReader("students.csv"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        String[] parts = line.split(",");\n        System.out.println(parts[0] + "：" + parts[1]);\n    }\n}` },
          { title: "範例 12：檢查檔案存在", value: `File file = new File("students.csv");\nif (file.exists()) {\n    System.out.println("檔案存在");\n}` },
          { title: "範例 13：處理 IOException", value: `try (FileReader reader = new FileReader("missing.txt")) {\n    System.out.println(reader.read());\n} catch (IOException e) {\n    System.out.println("讀取失敗");\n}` },
          { title: "範例 14：寫入多行自我介紹", value: `try (BufferedWriter bw = new BufferedWriter(new FileWriter("intro.txt"))) {\n    bw.write("我是 Jimmy");\n    bw.newLine();\n    bw.write("我正在學 Java IO");\n}` },
          { title: "範例 15：執行前/後概念", value: `執行前：\nintro.txt 不存在或空白\n\n執行後：\nintro.txt 內有兩行自我介紹。` }
        ]
      },
      {
        sectionId: "16.4",
        title: "物件的讀寫",
        body: [
          "一般文字檔保存的是文字；如果想保存整個物件，可以使用序列化（Serialization）。",
          "要讓物件能被寫出，類別需要 implements Serializable。ObjectOutputStream 可把物件寫入檔案，ObjectInputStream 可讀回物件。",
          "`serialVersionUID` 是序列化版本識別。初學可先固定宣告一個 `private static final long serialVersionUID = 1L;`。",
          "`transient` 表示某個欄位不要被序列化，例如密碼、暫存資料。"
        ],
        visuals: [
          { type: "flow", title: "物件序列化流程", value: `Student 物件\n  ↓ ObjectOutputStream\nstudent.dat\n  ↓ ObjectInputStream\nStudent 物件` },
          { type: "memory", title: "transient 欄位", value: `Student\n- name = "Jimmy"  → 會保存\n- score = 90       → 會保存\n- password         → transient，不保存` }
        ],
        code: {
          title: "Serializable 基本類別",
          value: `class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int score;
}`
        },
        codes: [
          { title: "範例 1：implements Serializable", value: `class Student implements Serializable {\n    String name;\n    int score;\n}` },
          { title: "範例 2：serialVersionUID", value: `class Student implements Serializable {\n    private static final long serialVersionUID = 1L;\n}` },
          { title: "範例 3：建立 Student 物件", value: `Student s = new Student();\ns.name = "Jimmy";\ns.score = 90;` },
          { title: "範例 4：ObjectOutputStream 寫物件", value: `try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("student.dat"))) {\n    out.writeObject(s);\n}` },
          { title: "範例 5：ObjectInputStream 讀物件", value: `try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("student.dat"))) {\n    Student s2 = (Student) in.readObject();\n    System.out.println(s2.name);\n}` },
          { title: "範例 6：transient", value: `class User implements Serializable {\n    String name;\n    transient String password;\n}\n\n// password 不會被序列化保存。` },
          { title: "範例 7：序列化多個物件", value: `out.writeObject(new Student("Jimmy", 90));\nout.writeObject(new Student("Amy", 85));` },
          { title: "範例 8：保存 ArrayList", value: `ArrayList<Student> list = new ArrayList<>();\nlist.add(new Student("Jimmy", 90));\nout.writeObject(list);` },
          { title: "範例 9：讀回 ArrayList", value: `ArrayList<Student> list =\n    (ArrayList<Student>) in.readObject();` },
          { title: "範例 10：ClassNotFoundException", value: `try {\n    Object obj = in.readObject();\n} catch (ClassNotFoundException e) {\n    System.out.println("找不到類別");\n}` },
          { title: "範例 11：NotSerializableException", value: `class Student {\n}\n\n// 若沒有 implements Serializable，\n// writeObject(student) 可能發生 NotSerializableException。` },
          { title: "範例 12：物件讀寫適合情境", value: `適合：\n- 儲存程式內部物件狀態\n- 暫存資料\n\n不適合：\n- 需要給人直接閱讀的資料\n- 跨語言交換資料` }
        ]
      },
      {
        sectionId: "16.5",
        title: "綜合演練",
        body: [
          "本節把 Student 類別、文字檔讀寫、陣列/迴圈統計整合成兩個實用小專案。",
          "第一題負責把學生成績存成檔案；第二題讀取檔案後計算總分、平均、最高分、最低分。"
        ],
        visuals: [
          { type: "uml", title: "Student UML", value: `Student\n- name: String\n- score: int\n+ toCsv(): String` },
          { type: "flow", title: "成績檔處理流程", value: `建立 Student 資料\n  ↓\n寫入 students.csv\n  ↓\n讀取 students.csv\n  ↓\n計算總分 / 平均 / 最大 / 最小` }
        ],
        code: {
          title: "題目 1：將學生成績資料存檔",
          value: `問題說明：
建立 Student 類別，包含姓名與分數，將資料存成 students.csv。

Hint：
每位學生一行，格式可用 name,score。

Solution：
class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    String toCsv() {
        return name + "," + score;
    }
}

Student[] students = {
    new Student("Jimmy", 90),
    new Student("Amy", 85),
    new Student("John", 78)
};

try (BufferedWriter bw = new BufferedWriter(new FileWriter("students.csv"))) {
    for (Student s : students) {
        bw.write(s.toCsv());
        bw.newLine();
    }
}

Explanation：
Student 負責保存資料，toCsv() 負責把物件轉成可寫入檔案的一行文字。`
        },
        codes: [
          {
            title: "題目 2：讀取學生成績檔並計算平均",
            value: `問題說明：
讀取 students.csv，計算總分、平均、最高分、最低分。

流程圖：
讀取一行
  ↓
split(",")
  ↓
取出 score
  ↓
更新 total / max / min
  ↓
讀完後計算 average

Hint：
score 是字串，需用 Integer.parseInt() 轉成 int。

Solution：
int total = 0;
int count = 0;
int max = Integer.MIN_VALUE;
int min = Integer.MAX_VALUE;

try (BufferedReader br = new BufferedReader(new FileReader("students.csv"))) {
    String line;
    while ((line = br.readLine()) != null) {
        String[] parts = line.split(",");
        int score = Integer.parseInt(parts[1]);

        total += score;
        count++;
        if (score > max) max = score;
        if (score < min) min = score;
    }
}

double average = total / (double) count;

System.out.println("總分：" + total);
System.out.println("平均：" + average);
System.out.println("最高：" + max);
System.out.println("最低：" + min);

Explanation：
這題整合 File IO、String split、型態轉換、迴圈與統計邏輯。`
          }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch16-exercise-stream-direction",
        sectionId: "16.1",
        type: "exercise",
        title: "16.1 練習：判斷 Stream 方向",
        question: "判斷讀檔、寫檔、鍵盤輸入、螢幕輸出分別屬於 Input 還是 Output。",
        hint: "資料進入程式是 Input，資料離開程式是 Output。",
        solution: "讀檔是 Input；寫檔是 Output；鍵盤輸入是 Input；螢幕輸出是 Output。",
        explanation: "IO 的第一步是判斷資料流向。"
      }),
      createActivity({
        id: "ch16-exercise-stream-class",
        sectionId: "16.2",
        type: "exercise",
        title: "16.2 練習：選擇 IO 類別",
        question: "文字檔讀取、文字檔寫入、圖片複製，各適合哪些類別？",
        hint: "文字用 Reader/Writer，二進位用 InputStream/OutputStream。",
        solution: "文字讀取可用 FileReader / BufferedReader；文字寫入可用 FileWriter / BufferedWriter；圖片複製可用 FileInputStream / FileOutputStream。",
        explanation: "先判斷文字或二進位，再選擇對應串流類別。"
      }),
      createActivity({
        id: "ch16-exercise-write-read-file",
        sectionId: "16.3",
        type: "exercise",
        title: "16.3 練習：寫入並讀取文字檔",
        question: "用 BufferedWriter 寫入兩行文字，再用 BufferedReader 讀出。",
        hint: "寫入後記得 newLine()，讀取時用 readLine()。",
        solution: `try (BufferedWriter bw = new BufferedWriter(new FileWriter("note.txt"))) {
    bw.write("Hello");
    bw.newLine();
    bw.write("Java");
}

try (BufferedReader br = new BufferedReader(new FileReader("note.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}`,
        explanation: "BufferedWriter / BufferedReader 適合處理一行一行的文字資料。"
      }),
      createActivity({
        id: "ch16-exercise-serializable",
        sectionId: "16.4",
        type: "exercise",
        title: "16.4 練習：建立可序列化 Student",
        question: "建立 Student implements Serializable，包含 name、score、serialVersionUID。",
        hint: "記得 import java.io.Serializable。",
        solution: `class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int score;
}`,
        explanation: "implements Serializable 表示這個物件允許被 ObjectOutputStream 寫出。"
      }),
      createActivity({
        id: "ch16-project-save-students",
        sectionId: "16.5",
        type: "exercise",
        title: "16.5 綜合練習：儲存學生成績",
        question: "建立 Student 陣列並存成 students.csv。",
        hint: "每行格式使用 name,score。",
        solution: `try (BufferedWriter bw = new BufferedWriter(new FileWriter("students.csv"))) {
    bw.write("Jimmy,90");
    bw.newLine();
    bw.write("Amy,85");
}`,
        explanation: "CSV 是初學者很好理解的文字資料格式。"
      }),
      createActivity({
        id: "ch16-homework-read-average",
        sectionId: "16.5",
        type: "homework",
        title: "16.5 作業：讀取成績並統計",
        question: "讀取 students.csv，計算總分、平均、最大值、最小值。",
        hint: "使用 split(',') 和 Integer.parseInt()。",
        solution: `int total = 0;
int count = 0;
int max = Integer.MIN_VALUE;
int min = Integer.MAX_VALUE;`,
        explanation: "本題整合檔案讀取、字串切割、數字轉換與統計運算。"
      })
    ],
    quiz: [
      { question: "Stream 可類比成什麼？", options: ["資料水流", "類別繼承", "例外物件", "CSS 樣式"], answer: 0, explanation: "Stream 表示資料流動。" },
      { question: "資料從檔案進入程式是？", options: ["Input Stream", "Output Stream", "UML", "Thread"], answer: 0, explanation: "資料進入程式是 Input。" },
      { question: "資料從程式寫到檔案是？", options: ["Output Stream", "Input Stream", "Exception", "Interface"], answer: 0, explanation: "資料離開程式是 Output。" },
      { question: "Byte Stream 適合處理？", options: ["圖片或二進位檔", "只處理 class 名稱", "只處理 package", "只處理 UML"], answer: 0, explanation: "Byte Stream 以 byte 為單位。" },
      { question: "Character Stream 適合處理？", options: ["文字檔", "圖片像素", "執行緒鎖", "例外堆疊"], answer: 0, explanation: "Reader/Writer 適合文字資料。" },
      { question: "InputStream 屬於？", options: ["Byte Stream", "Character Stream", "Interface Only", "Package"], answer: 0, explanation: "InputStream 以 byte 讀取資料。" },
      { question: "Reader 屬於？", options: ["Character Stream", "Byte Stream", "Thread", "Exception"], answer: 0, explanation: "Reader 以字元為主。" },
      { question: "BufferedReader 常用方法是？", options: ["readLine()", "writeObject()", "start()", "notifyAll()"], answer: 0, explanation: "BufferedReader 可一行一行讀取。" },
      { question: "File 類別代表？", options: ["檔案或資料夾路徑", "一定是文字內容", "執行緒", "介面"], answer: 0, explanation: "File 描述檔案系統路徑。" },
      { question: "寫文字檔常用？", options: ["FileWriter", "FileReader", "Thread", "ObjectInputStream"], answer: 0, explanation: "FileWriter 用於文字輸出。" },
      { question: "讀文字檔常用？", options: ["FileReader", "FileWriter", "FileOutputStream only", "Runnable"], answer: 0, explanation: "FileReader 用於文字輸入。" },
      { question: "try-with-resources 的好處是？", options: ["自動關閉資源", "自動建立 package", "自動建立 Thread", "避免所有邏輯錯誤"], answer: 0, explanation: "try 小括號內資源會自動 close。" },
      { question: "複製二進位檔適合？", options: ["FileInputStream / FileOutputStream", "FileReader / FileWriter", "Scanner only", "StringBuilder only"], answer: 0, explanation: "二進位資料用 byte stream。" },
      { question: "ObjectOutputStream 用途是？", options: ["寫出物件", "讀取一行文字", "啟動執行緒", "宣告 package"], answer: 0, explanation: "ObjectOutputStream 可序列化物件。" },
      { question: "ObjectInputStream 用途是？", options: ["讀回物件", "寫文字", "同步方法", "Regex 驗證"], answer: 0, explanation: "ObjectInputStream 可反序列化物件。" },
      { question: "要讓物件可序列化，類別通常要？", options: ["implements Serializable", "extends Thread", "implements Runnable only", "package Serializable"], answer: 0, explanation: "Serializable 是序列化標記介面。" },
      { question: "serialVersionUID 是什麼概念？", options: ["序列化版本識別", "執行緒名稱", "檔案副檔名", "package 名稱"], answer: 0, explanation: "它用於序列化版本控制。" },
      { question: "transient 欄位會？", options: ["不被序列化保存", "一定被加密", "變成 static", "自動寫入文字檔"], answer: 0, explanation: "transient 表示略過序列化。" },
      { question: "讀取 CSV 後常用哪個方法切欄位？", options: ["split()", "join()", "wait()", "start()"], answer: 0, explanation: "split(',') 可切開欄位。" },
      { question: "將 score 字串轉 int 可用？", options: ["Integer.parseInt()", "String.start()", "Thread.parse()", "File.toInt()"], answer: 0, explanation: "Integer.parseInt 可把數字字串轉整數。" }
    ]
  };
}

function createChapter17() {
  return {
    id: 17,
    code: "CH17",
    title: "Java標準類別庫（Java Standard Library）",
    minutes: 180,
    summary: "認識 Java 內建工具箱，學會 Wrapper Class、Math、Collections 與 API 文件查閱。",
    intro: "標準類別庫就像 Java 已經幫你準備好的工具箱。本章會讓你知道什麼時候該使用現成類別，而不是每次都從零開始寫功能。",
    goals: [
      "了解什麼是 Java 標準類別庫",
      "學會使用 Wrapper Class",
      "學會使用 Math 類別",
      "學會使用 Collections Framework",
      "學會查閱 Java API 文件",
      "能夠利用標準類別庫快速完成常見功能"
    ],
    sections: [
      {
        sectionId: "17.1",
        title: "什麼是 Java 標準類別庫",
        body: [
          "當你需要計算平方根時，不一定要自己寫演算法；當你需要排序資料時，也不一定要重新發明排序法。Java 標準類別庫已經提供大量常見工具，讓你可以專心解決問題本身。",
          "Java Standard Library 是 Java 內建的一組類別與套件。它包含字串、數學、輸入輸出、集合、時間、隨機數、掃描輸入等工具。學會查找與使用標準類別庫，是從新手走向實作能力的重要一步。",
          "常見套件包含 `java.lang`、`java.util`、`java.io`、`java.math`、`java.time`。其中 `java.lang` 會自動匯入，所以你可以直接使用 `String`、`Math`、`Integer` 等類別。",
          "查文件時，可以從 <a href=\"https://docs.oracle.com/en/java/javase/21/docs/api/?utm_source=chatgpt.com\" target=\"_blank\" rel=\"noopener\">Java API Documentation</a> 開始。先搜尋類別名稱，再看建構方法、常用方法、回傳型態與範例。"
        ],
        visuals: [
          {
            type: "files",
            title: "標準類別庫套件地圖",
            value: `Java Standard Library
├─ java.lang
│  ├─ String
│  ├─ Math
│  └─ Integer
├─ java.util
│  ├─ Scanner
│  ├─ ArrayList
│  └─ Random
├─ java.io
│  ├─ FileReader
│  └─ FileWriter
├─ java.math
│  ├─ BigInteger
│  └─ BigDecimal
└─ java.time
   ├─ LocalDate
   └─ LocalDateTime`
          },
          {
            type: "flow",
            title: "查 API 的基本流程",
            value: `遇到需求
  ↓
找可能的類別
  ↓
閱讀方法名稱與參數
  ↓
看回傳值
  ↓
寫小範例測試`
          }
        ],
        codes: [
          { title: "範例 1：使用 Math 計算平方根", value: `public class Main {
    public static void main(String[] args) {
        double result = Math.sqrt(25);
        System.out.println(result);
    }
}

// 執行結果：
// 5.0` },
          { title: "範例 2：使用 Arrays 排序", value: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nums = {5, 2, 9};
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
    }
}

// 執行結果：
// [2, 5, 9]` },
          { title: "範例 3：使用 ArrayList 儲存資料", value: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Jimmy");
        names.add("Amy");
        System.out.println(names);
    }
}

// 執行結果：
// [Jimmy, Amy]` },
          { title: "範例 4：使用 Scanner 讀取輸入", value: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        System.out.println("Hello " + name);
    }
}` },
          { title: "範例 5：使用 Random 產生亂數", value: `import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
        int dice = random.nextInt(6) + 1;
        System.out.println(dice);
    }
}` },
          { title: "範例 6：使用 LocalDate 取得日期", value: `import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println(today);
    }
}` },
          { title: "範例 7：使用 BigDecimal 處理精準小數", value: `import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        BigDecimal price = new BigDecimal("19.99");
        BigDecimal count = new BigDecimal("3");
        System.out.println(price.multiply(count));
    }
}

// 執行結果：
// 59.97` },
          { title: "範例 8：使用 Collections 反轉清單", value: `import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");
        Collections.reverse(list);
        System.out.println(list);
    }
}

// 執行結果：
// [C, B, A]` }
        ]
      },
      {
        sectionId: "17.2",
        title: "基本資料類別（Wrapper Class）",
        body: [
          "Java 有基本型別，例如 `int`、`double`、`char`、`boolean`。它們很輕量，適合存放單純資料；但有些工具需要物件，例如 `ArrayList`，這時就需要 Wrapper Class。",
          "Wrapper Class 是基本型別的物件版本。`int` 對應 `Integer`，`double` 對應 `Double`，`char` 對應 `Character`，`boolean` 對應 `Boolean`。",
          "Autoboxing 是 Java 自動把基本型別包成 Wrapper；Unboxing 是自動把 Wrapper 拆回基本型別。這讓我們在寫 Collections 時比較方便。",
          "Collections 只能放物件，不能直接放基本型別。因此 `ArrayList<int>` 是錯的，應該寫成 `ArrayList<Integer>`。"
        ],
        visuals: [
          {
            type: "steps",
            title: "基本型別與 Wrapper 對照",
            headers: ["基本型別", "Wrapper Class", "常見用途"],
            rows: [
              ["int", "Integer", "整數、parseInt、ArrayList<Integer>"],
              ["double", "Double", "小數、parseDouble、數值比較"],
              ["char", "Character", "字元判斷、大小寫處理"],
              ["boolean", "Boolean", "真假值、設定旗標"]
            ]
          },
          {
            type: "memory",
            title: "Autoboxing / Unboxing 概念",
            value: `int 10
  ↓ Autoboxing
Integer 10
  ↓ Unboxing
int 10`
          }
        ],
        codes: [
          { title: "範例 1：Autoboxing", value: `Integer x = 10;
System.out.println(x);

// 執行結果：
// 10` },
          { title: "範例 2：Unboxing", value: `Integer x = 10;
int y = x;
System.out.println(y + 5);

// 執行結果：
// 15` },
          { title: "範例 3：parseInt 字串轉整數", value: `String text = "123";
int number = Integer.parseInt(text);
System.out.println(number + 7);

// 執行結果：
// 130` },
          { title: "範例 4：parseDouble 字串轉小數", value: `String text = "3.14";
double pi = Double.parseDouble(text);
System.out.println(pi * 2);

// 執行結果：
// 6.28` },
          { title: "範例 5：valueOf 建立 Wrapper", value: `Integer number = Integer.valueOf("99");
System.out.println(number);

// 執行結果：
// 99` },
          { title: "範例 6：MAX_VALUE", value: `System.out.println(Integer.MAX_VALUE);

// 執行結果：
// 2147483647` },
          { title: "範例 7：MIN_VALUE", value: `System.out.println(Integer.MIN_VALUE);

// 執行結果：
// -2147483648` },
          { title: "範例 8：compareTo", value: `Integer a = 10;
Integer b = 20;
System.out.println(a.compareTo(b));

// 執行結果：
// -1` },
          { title: "範例 9：數字轉字串", value: `int score = 95;
String text = String.valueOf(score);
System.out.println("分數：" + text);

// 執行結果：
// 分數：95` },
          { title: "範例 10：Character 判斷字母", value: `char ch = 'A';
System.out.println(Character.isLetter(ch));

// 執行結果：
// true` },
          { title: "範例 11：Boolean 解析字串", value: `String text = "true";
boolean result = Boolean.parseBoolean(text);
System.out.println(result);

// 執行結果：
// true` },
          { title: "範例 12：Collections 使用 Wrapper", value: `import java.util.ArrayList;

ArrayList<Integer> scores = new ArrayList<>();
scores.add(80);
scores.add(95);
System.out.println(scores);

// 執行結果：
// [80, 95]` }
        ]
      },
      {
        sectionId: "17.3",
        title: "Math 類別",
        body: [
          "`Math` 是 Java 提供的數學工具類別。它的方法大多是 `static`，所以你不需要建立 `Math` 物件，可以直接寫 `Math.sqrt(25)`。",
          "常用方法包含 `abs()`、`max()`、`min()`、`pow()`、`sqrt()`、`cbrt()`、`round()`、`floor()`、`ceil()`、`random()`。常用常數包含 `Math.PI` 與 `Math.E`。",
          "`Math.pow(a, b)` 可以計算 a 的 b 次方，但如果只是平方，例如 `x * x`，直接乘法通常更直覺。`pow()` 適合次方數是變數或需要泛用計算時使用。"
        ],
        visuals: [
          {
            type: "flow",
            title: "平方根視覺化",
            value: `25 是哪個數的平方？
  ↓
5 × 5 = 25
  ↓
Math.sqrt(25) = 5.0`
          },
          {
            type: "compare",
            title: "pow 與直接乘法",
            before: `double area = Math.pow(radius, 2) * Math.PI;`,
            after: `double area = radius * radius * Math.PI;`
          }
        ],
        codes: [
          { title: "範例 1：abs 絕對值", value: `System.out.println(Math.abs(-10));
// 10` },
          { title: "範例 2：max 最大值", value: `System.out.println(Math.max(80, 95));
// 95` },
          { title: "範例 3：min 最小值", value: `System.out.println(Math.min(80, 95));
// 80` },
          { title: "範例 4：pow 次方", value: `System.out.println(Math.pow(2, 3));
// 8.0` },
          { title: "範例 5：sqrt 平方根", value: `System.out.println(Math.sqrt(25));
// 5.0` },
          { title: "範例 6：cbrt 立方根", value: `System.out.println(Math.cbrt(27));
// 3.0` },
          { title: "範例 7：round 四捨五入", value: `System.out.println(Math.round(3.6));
// 4` },
          { title: "範例 8：floor 無條件捨去", value: `System.out.println(Math.floor(3.9));
// 3.0` },
          { title: "範例 9：ceil 無條件進位", value: `System.out.println(Math.ceil(3.1));
// 4.0` },
          { title: "範例 10：random 產生 0 到 1", value: `System.out.println(Math.random());
// 可能輸出：0.734...` },
          { title: "範例 11：產生 1 到 10 亂數", value: `int n = (int)(Math.random() * 10) + 1;
System.out.println(n);` },
          { title: "範例 12：PI 圓周率", value: `double r = 5;
double area = r * r * Math.PI;
System.out.println(area);` },
          { title: "範例 13：E 自然常數", value: `System.out.println(Math.E);
// 2.718281828459045` },
          { title: "範例 14：BMI 計算", value: `double weight = 70;
double height = 1.75;
double bmi = weight / Math.pow(height, 2);
System.out.println(bmi);` },
          { title: "範例 15：兩點距離", value: `int x1 = 0, y1 = 0;
int x2 = 3, y2 = 4;
double distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
);
System.out.println(distance);

// 執行結果：
// 5.0` }
        ]
      },
      {
        sectionId: "17.4",
        title: "Java Collections",
        body: [
          "如果要儲存 100 位學生，用陣列可以做到，但陣列大小固定，新增與刪除比較不方便。Collections Framework 提供更有彈性的資料容器。",
          "`ArrayList` 適合儲存有順序、可重複的資料；`HashSet` 適合儲存不可重複資料；`HashMap` 適合用 Key 對應 Value，例如英文單字對中文翻譯。",
          "集合類別通常使用泛型語法，例如 `ArrayList<String>` 代表這個清單主要放字串。初學時先把泛型想成資料類型標籤，可以讓程式更安全、更清楚。"
        ],
        visuals: [
          {
            type: "uml",
            title: "Collections Framework 概念圖",
            value: `Collection
├─ List
│  ├─ ArrayList
│  └─ LinkedList
├─ Set
│  ├─ HashSet
│  └─ TreeSet
└─ Queue

Map
└─ HashMap
   Key → Value`
          },
          {
            type: "array",
            title: "HashMap 查表概念",
            value: `Key       Value
apple  →  蘋果
dog    →  狗
cat    →  貓`
          }
        ],
        codes: [
          { title: "範例 1：建立 ArrayList", value: `import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();` },
          { title: "範例 2：add 新增元素", value: `names.add("Jimmy");
names.add("Amy");
System.out.println(names);

// [Jimmy, Amy]` },
          { title: "範例 3：get 讀取元素", value: `System.out.println(names.get(0));
// Jimmy` },
          { title: "範例 4：set 修改元素", value: `names.set(1, "John");
System.out.println(names);

// [Jimmy, John]` },
          { title: "範例 5：remove 刪除元素", value: `names.remove("Jimmy");
System.out.println(names);

// [John]` },
          { title: "範例 6：size 取得數量", value: `System.out.println(names.size());` },
          { title: "範例 7：contains 判斷是否存在", value: `System.out.println(names.contains("Amy"));` },
          { title: "範例 8：for-each 走訪 ArrayList", value: `for(String name : names){
    System.out.println(name);
}` },
          { title: "範例 9：HashSet 去除重複", value: `import java.util.HashSet;

HashSet<Integer> numbers = new HashSet<>();
numbers.add(7);
numbers.add(7);
numbers.add(9);
System.out.println(numbers);

// 可能輸出：[7, 9]` },
          { title: "範例 10：HashSet contains", value: `System.out.println(numbers.contains(9));
// true` },
          { title: "範例 11：HashMap 建立字典", value: `import java.util.HashMap;

HashMap<String, String> dict = new HashMap<>();
dict.put("apple", "蘋果");
dict.put("dog", "狗");` },
          { title: "範例 12：HashMap get 查詢", value: `System.out.println(dict.get("apple"));
// 蘋果` },
          { title: "範例 13：HashMap 更新值", value: `dict.put("dog", "小狗");
System.out.println(dict.get("dog"));
// 小狗` },
          { title: "範例 14：HashMap containsKey", value: `System.out.println(dict.containsKey("cat"));
// false` },
          { title: "範例 15：走訪 HashMap", value: `for(String key : dict.keySet()){
    System.out.println(key + " = " + dict.get(key));
}` }
        ]
      },
      {
        sectionId: "17.5",
        title: "綜合演練",
        body: [
          "本節把標準類別庫用在較完整的小任務中。你會看到 `Math` 可以處理數學問題，`HashSet` 可以避免重複資料，`HashMap` 可以建立查詢表。",
          "寫綜合題時不要急著背答案。先確認輸入、輸出、資料要放在哪一種容器，再選擇合適的標準類別庫。"
        ],
        visuals: [
          {
            type: "flow",
            title: "題目 1：任意次方根流程",
            value: `輸入數字 number
  ↓
輸入根次 root
  ↓
計算 Math.pow(number, 1.0 / root)
  ↓
輸出結果`
          },
          {
            type: "uml",
            title: "題目 2：樂透號碼 UML 概念",
            value: `LottoGenerator
├─ HashSet<Integer> numbers
└─ generate()
   └─ 產生 6 個不重複號碼`
          },
          {
            type: "flow",
            title: "題目 3：英漢字典流程",
            value: `建立 HashMap
  ↓
放入 apple/dog/cat
  ↓
讀取英文單字
  ↓
containsKey？
  ├─ 是：輸出中文
  └─ 否：輸出查無資料`
          }
        ],
        codes: [
          { title: "題目 1 Solution：求任意次方根", value: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double number = sc.nextDouble();
        double root = sc.nextDouble();

        double answer = Math.pow(number, 1.0 / root);
        System.out.println(answer);
    }
}

// 輸入：
// 27
// 3
// 輸出：
// 3.0` },
          { title: "題目 2 Solution：產生樂透號碼", value: `import java.util.HashSet;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
        HashSet<Integer> lotto = new HashSet<>();

        while(lotto.size() < 6){
            int number = random.nextInt(49) + 1;
            lotto.add(number);
        }

        System.out.println(lotto);
    }
}` },
          { title: "題目 3 Solution：陽春型英漢字典", value: `import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        HashMap<String, String> dict = new HashMap<>();
        dict.put("apple", "蘋果");
        dict.put("dog", "狗");
        dict.put("cat", "貓");

        Scanner sc = new Scanner(System.in);
        String word = sc.nextLine();

        if(dict.containsKey(word)){
            System.out.println(dict.get(word));
        }else{
            System.out.println("查無資料");
        }
    }
}` }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch17-exercise-api-docs",
        sectionId: "17.1",
        type: "exercise",
        title: "實作練習：查閱 API 文件",
        question: "請分別找出 Math、ArrayList、Scanner 在 Java API Documentation 中的位置，並寫下各一個你看得懂的方法名稱。",
        hint: "先搜尋類別名稱，再看 Method Summary。你不需要一次讀完整份文件。",
        solution: "Math：sqrt()。ArrayList：add()。Scanner：nextLine()。",
        explanation: "查 API 的重點是確認類別在哪個 package、方法需要什麼參數、會回傳什麼結果。能查到方法名稱，就已經開始具備自學標準類別庫的能力。"
      }),
      createActivity({
        id: "ch17-exercise-wrapper",
        sectionId: "17.2",
        type: "exercise",
        title: "實作練習：Wrapper Class 轉換",
        question: "把字串 \"85\" 轉成整數後加上 15，再把結果轉成字串輸出。",
        hint: "使用 `Integer.parseInt()`，最後可用 `String.valueOf()`。",
        solution: `String text = "85";
int score = Integer.parseInt(text);
score += 15;
String result = String.valueOf(score);
System.out.println(result);`,
        explanation: "字串轉數字後才能做加法；如果直接寫 `\"85\" + 15`，結果會是字串串接而不是數值運算。"
      }),
      createActivity({
        id: "ch17-exercise-math",
        sectionId: "17.3",
        type: "exercise",
        title: "實作練習：用 Math 計算圓面積",
        question: "建立半徑 r，使用 Math.PI 計算圓面積，並輸出結果。",
        hint: "圓面積公式是 `半徑 * 半徑 * PI`。",
        solution: `double r = 5;
double area = r * r * Math.PI;
System.out.println(area);`,
        explanation: "`Math.PI` 是 Java 內建常數，比自己手打 3.14 更精準也更清楚。"
      }),
      createActivity({
        id: "ch17-exercise-collections",
        sectionId: "17.4",
        type: "exercise",
        title: "實作練習：使用集合管理資料",
        question: "用 ArrayList 儲存三位學生姓名；用 HashSet 儲存三個號碼並確認不重複；用 HashMap 儲存姓名與分數。",
        hint: "ArrayList 用 add，HashSet 也用 add，HashMap 用 put。",
        solution: `ArrayList<String> names = new ArrayList<>();
names.add("Jimmy");
names.add("Amy");
names.add("John");

HashSet<Integer> nums = new HashSet<>();
nums.add(1);
nums.add(1);
nums.add(2);

HashMap<String, Integer> scores = new HashMap<>();
scores.put("Jimmy", 90);`,
        explanation: "三種集合解決不同問題：ArrayList 保留順序，HashSet 排除重複，HashMap 建立 key-value 查詢關係。"
      }),
      createActivity({
        id: "ch17-homework-standard-library",
        sectionId: "17.5",
        type: "homework",
        title: "作業：完成標準類別庫小工具",
        question: "從任意次方根、樂透號碼、英漢字典三題中選一題完整實作，並加上 3 行註解說明你用了哪些標準類別庫。",
        hint: "先列出需求，再決定使用 Math、HashSet 或 HashMap。",
        solution: "可選擇 HashMap 英漢字典：建立 HashMap，put 三組單字，讀取輸入後用 containsKey 判斷是否存在，再用 get 取得中文翻譯。",
        explanation: "這份作業的核心不是程式長度，而是練習把需求對應到標準類別庫。能選對工具，程式就會更短、更穩、更容易讀。"
      }),
      createActivity({
        id: "ch17-thought-choose-library",
        sectionId: "17.5",
        type: "thought",
        title: "思考題：何時該用標準類別庫？",
        question: "如果 Java 已經提供排序、集合、數學計算工具，你覺得什麼情況仍然值得自己練習實作？",
        hint: "可以從學習目的、效能需求、特殊規則三個角度想。",
        solution: "學習演算法時值得自己實作，因為能理解原理；正式專案若只是常見功能，通常優先使用標準類別庫；若有特殊規則或效能瓶頸，才考慮自訂實作。",
        explanation: "標準類別庫不是讓你不用理解原理，而是讓正式開發更可靠。學習時可以自己做輪子，實務上要懂得使用已經成熟的輪子。"
      })
    ],
    quiz: [
      { question: "Java 標準類別庫最接近哪個概念？", options: ["Java 內建工具箱", "只能寫 HTML 的工具", "資料庫伺服器", "作業系統核心"], answer: 0, explanation: "標準類別庫提供許多現成類別與方法。" },
      { question: "哪個 package 常放集合與 Scanner？", options: ["java.util", "java.paint", "java.soundonly", "java.page"], answer: 0, explanation: "java.util 包含 ArrayList、HashMap、Scanner、Random 等工具。" },
      { question: "哪個 package 會自動匯入？", options: ["java.lang", "java.extra", "java.manual", "java.web"], answer: 0, explanation: "String、Math、Integer 等 java.lang 類別可直接使用。" },
      { question: "查 Java 類別與方法通常會看什麼？", options: ["Java API Documentation", "圖片編輯器", "CSS 色票", "瀏覽器書籤"], answer: 0, explanation: "API 文件能查類別、方法、參數與回傳型態。" },
      { question: "int 對應的 Wrapper Class 是？", options: ["Integer", "IntObject", "NumberInt", "WrapperInt"], answer: 0, explanation: "int 的包裝類別是 Integer。" },
      { question: "double 對應的 Wrapper Class 是？", options: ["Double", "Decimal", "FloatOnly", "Real"], answer: 0, explanation: "double 對應 Double。" },
      { question: "Autoboxing 是什麼？", options: ["基本型別自動包成 Wrapper", "刪除物件", "編譯 HTML", "開啟檔案"], answer: 0, explanation: "例如 Integer x = 10。" },
      { question: "Unboxing 是什麼？", options: ["Wrapper 自動拆回基本型別", "把字串切開", "建立 HashMap", "重新排序"], answer: 0, explanation: "例如 int y = x，其中 x 是 Integer。" },
      { question: "字串 \"123\" 轉整數可使用？", options: ["Integer.parseInt(\"123\")", "Math.sqrt(\"123\")", "String.sort(\"123\")", "ArrayList.parse(\"123\")"], answer: 0, explanation: "parseInt 可把合法整數字串轉成 int。" },
      { question: "Collections 為什麼使用 Integer 而不是 int？", options: ["集合儲存物件", "int 不能加法", "Integer 不能比較", "因為 int 是字串"], answer: 0, explanation: "泛型集合需要物件型別，因此使用 Wrapper。" },
      { question: "Math.sqrt(25) 結果是？", options: ["5.0", "25", "10", "錯誤"], answer: 0, explanation: "sqrt 計算平方根，回傳 double。" },
      { question: "Math.pow(2, 3) 結果是？", options: ["8.0", "6", "9", "5"], answer: 0, explanation: "2 的 3 次方是 8。" },
      { question: "Math.abs(-10) 結果是？", options: ["10", "-10", "0", "錯誤"], answer: 0, explanation: "abs 回傳絕對值。" },
      { question: "哪個常數代表圓周率？", options: ["Math.PI", "Math.CIRCLE", "Math.ROUND", "Math.RANDOM"], answer: 0, explanation: "Math.PI 是圓周率。" },
      { question: "ArrayList 的特性是？", options: ["可依序儲存資料且大小可變", "永遠不可修改", "只存 key-value", "只能存 6 個元素"], answer: 0, explanation: "ArrayList 比陣列更彈性，常用於清單資料。" },
      { question: "ArrayList 新增元素使用？", options: ["add()", "put()", "sqrt()", "notify()"], answer: 0, explanation: "List 類型常用 add 新增元素。" },
      { question: "HashSet 的主要特性是？", options: ["不允許重複元素", "一定排序", "只能放字串", "必須有 key"], answer: 0, explanation: "Set 用來表示不重複集合。" },
      { question: "HashMap 儲存的是？", options: ["Key 和 Value 對應", "只有一個數字", "只有順序索引", "只有 boolean"], answer: 0, explanation: "Map 用 key 找 value，很適合查表。" },
      { question: "產生 6 個不重複樂透號碼適合使用？", options: ["HashSet", "StringBuilder only", "Math.PI", "FileReader"], answer: 0, explanation: "HashSet 可避免重複號碼。" },
      { question: "陽春型英漢字典適合使用？", options: ["HashMap", "Thread", "Exception", "char"], answer: 0, explanation: "英文單字對中文翻譯是 key-value 查詢。" }
    ]
  };
}

function createChapter18() {
  return {
    id: 18,
    code: "CH18",
    title: "圖形使用者介面（GUI）",
    minutes: 240,
    summary: "使用 Swing 建立視窗、元件、事件、版面配置與簡單 2D 繪圖。",
    intro: "GUI 讓程式從文字命令進入可點擊、可輸入、可互動的桌面應用。本章使用 Swing 介紹 Java GUI 的基本架構，讓你完成小型視窗程式。",
    goals: [
      "了解什麼是 GUI",
      "學會 Java GUI 基本架構",
      "學會常見 Swing 元件",
      "學會事件處理(Event Handling)",
      "學會版面配置(Layout Manager)",
      "學會簡單 2D 繪圖",
      "能夠開發小型桌面應用程式"
    ],
    sections: [
      {
        sectionId: "18.1",
        title: "什麼是圖形使用者介面",
        body: [
          "Console 程式通常用文字互動，例如畫面顯示「請輸入姓名：」，使用者在終端機輸入資料。GUI 程式則用視窗、文字框、按鈕、選單等元件讓使用者操作。",
          "GUI 是 Graphical User Interface，也就是圖形使用者介面。你每天使用的 Windows、macOS、計算機、瀏覽器、記事本，大多都屬於 GUI 程式。",
          "GUI 程式的核心不是一行一行等使用者輸入，而是等待事件發生。使用者點按鈕、輸入文字、關閉視窗，都是事件；程式收到事件後執行對應處理，再更新畫面。"
        ],
        visuals: [
          {
            type: "compare",
            title: "Console 與 GUI 比較",
            before: `Console 程式

請輸入姓名：
Jimmy`,
            after: `GUI 程式

+-------------------+
| 姓名：[ Jimmy ]   |
|                   |
| [送出]            |
+-------------------+`
          },
          {
            type: "event",
            title: "GUI 事件流程圖",
            value: `使用者
  ↓
按鈕
  ↓
事件
  ↓
程式處理
  ↓
畫面更新`
          },
          {
            type: "steps",
            title: "GUI 與 Console 差異",
            headers: ["項目", "Console", "GUI"],
            rows: [
              ["互動方式", "文字輸入輸出", "視窗、按鈕、輸入框"],
              ["程式流程", "通常由上往下執行", "等待事件發生後處理"],
              ["使用者體驗", "適合練習邏輯", "適合一般使用者操作"],
              ["常見應用", "工具、練習題", "計算機、編輯器、桌面軟體"]
            ]
          }
        ],
        codes: [
          { title: "範例 1：Console 輸入提示", value: `System.out.println("請輸入姓名：");` },
          { title: "範例 2：GUI 視窗概念", value: `JFrame frame = new JFrame("我的視窗");` },
          { title: "範例 3：標籤概念", value: `JLabel label = new JLabel("姓名：");` },
          { title: "範例 4：文字框概念", value: `JTextField field = new JTextField(10);` },
          { title: "範例 5：按鈕概念", value: `JButton button = new JButton("送出");` },
          { title: "範例 6：事件概念", value: `button.addActionListener(e -> {
    System.out.println("按鈕被點擊");
});` },
          { title: "範例 7：更新畫面文字", value: `label.setText("你好 Jimmy");` },
          { title: "範例 8：常見 GUI 元件組合", value: `JPanel panel = new JPanel();
panel.add(new JLabel("姓名："));
panel.add(new JTextField(10));
panel.add(new JButton("送出"));` }
        ]
      },
      {
        sectionId: "18.2",
        title: "Java 的 GUI 基本架構",
        body: [
          "本章採用 Swing 教學。Swing 是 Java 內建的 GUI 工具組，可以建立視窗、按鈕、標籤、文字框、文字區域與選單等桌面元件。",
          "`JFrame` 是最外層視窗；`JPanel` 是用來放元件的容器；`JLabel` 顯示文字；`JButton` 是按鈕；`JTextField` 是單行輸入框。",
          "建立 Swing 程式時，通常會先建立 `JFrame`，設定大小、關閉行為，再建立面板與元件，最後呼叫 `setVisible(true)` 顯示視窗。"
        ],
        visuals: [
          {
            type: "component",
            title: "元件階層圖",
            value: `JFrame
 └─ JPanel
      ├─ JLabel
      ├─ JTextField
      └─ JButton`
          },
          {
            type: "window",
            title: "第一個視窗草圖",
            value: `+----------------------+
| My Window            |
|                      |
|  Hello Swing         |
|                      |
+----------------------+`
          },
          {
            type: "steps",
            title: "Swing 常用元件表",
            headers: ["元件", "用途"],
            rows: [
              ["JFrame", "視窗"],
              ["JPanel", "容器"],
              ["JButton", "按鈕"],
              ["JLabel", "標籤"],
              ["JTextField", "文字框"],
              ["JTextArea", "多行文字區域"]
            ]
          }
        ],
        codes: [
          { title: "範例 1：建立 JFrame", value: `import javax.swing.JFrame;

JFrame frame = new JFrame("My Window");` },
          { title: "範例 2：設定視窗大小", value: `frame.setSize(400, 300);` },
          { title: "範例 3：顯示視窗", value: `frame.setVisible(true);` },
          { title: "範例 4：關閉視窗時結束程式", value: `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);` },
          { title: "範例 5：完整第一個視窗", value: `import javax.swing.JFrame;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("My Window");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}` },
          { title: "範例 6：建立 JPanel", value: `JPanel panel = new JPanel();
frame.add(panel);` },
          { title: "範例 7：建立 JLabel", value: `JLabel label = new JLabel("Hello Swing");
panel.add(label);` },
          { title: "範例 8：建立 JButton", value: `JButton button = new JButton("Click");
panel.add(button);` },
          { title: "範例 9：建立 JTextField", value: `JTextField field = new JTextField(10);
panel.add(field);` },
          { title: "範例 10：建立簡易表單", value: `JPanel panel = new JPanel();
panel.add(new JLabel("姓名："));
panel.add(new JTextField(10));
panel.add(new JButton("送出"));
frame.add(panel);` },
          { title: "範例 11：設定視窗位置置中", value: `frame.setLocationRelativeTo(null);` },
          { title: "範例 12：使用 setTitle 修改標題", value: `frame.setTitle("Java 新手村 GUI");` },
          { title: "範例 13：JTextArea 多行文字", value: `JTextArea area = new JTextArea(5, 20);
panel.add(area);` },
          { title: "範例 14：加入 JScrollPane", value: `JTextArea area = new JTextArea(8, 30);
JScrollPane scroll = new JScrollPane(area);
panel.add(scroll);` },
          { title: "範例 15：完整姓名輸入視窗", value: `import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Name Form");
        JPanel panel = new JPanel();

        panel.add(new JLabel("姓名："));
        panel.add(new JTextField(10));
        panel.add(new JButton("送出"));

        frame.add(panel);
        frame.setSize(300, 120);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}` }
        ]
      },
      {
        sectionId: "18.3",
        title: "GUI 的事件處理",
        body: [
          "GUI 程式會等待使用者操作。當按鈕被點擊時，Java 會產生 `ActionEvent`，再交給 `ActionListener` 處理。",
          "`addActionListener()` 可以把事件處理器註冊到按鈕上。初學時可以先使用匿名內部類別；如果你熟悉 Lambda，也可以用更短的寫法。",
          "事件處理常見用途包含按鈕計數器、按鈕改變文字、讀取文字框內容、簡易登入判斷。"
        ],
        visuals: [
          {
            type: "event",
            title: "ActionEvent 流程",
            value: `使用者點按鈕
  ↓
ActionEvent
  ↓
ActionListener
  ↓
執行程式碼`
          },
          {
            type: "flow",
            title: "簡易登入事件流程",
            value: `點擊登入
  ↓
讀取帳號與密碼
  ↓
資料正確？
  ├─ 是：顯示登入成功
  └─ 否：顯示登入失敗`
          }
        ],
        codes: [
          { title: "範例 1：註冊 ActionListener", value: `button.addActionListener(...);` },
          { title: "範例 2：匿名內部類別", value: `button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Clicked");
    }
});` },
          { title: "範例 3：Lambda 寫法", value: `button.addActionListener(e -> {
    System.out.println("Clicked");
});` },
          { title: "範例 4：按鈕改變標籤文字", value: `JLabel label = new JLabel("尚未點擊");
JButton button = new JButton("按我");

button.addActionListener(e -> {
    label.setText("已點擊");
});` },
          { title: "範例 5：讀取文字框", value: `JTextField field = new JTextField(10);
button.addActionListener(e -> {
    String name = field.getText();
    System.out.println(name);
});` },
          { title: "範例 6：按鈕計數器", value: `int[] count = {0};
button.addActionListener(e -> {
    count[0]++;
    label.setText("次數：" + count[0]);
});` },
          { title: "範例 7：清除文字框", value: `clearButton.addActionListener(e -> {
    field.setText("");
});` },
          { title: "範例 8：簡易登入判斷", value: `loginButton.addActionListener(e -> {
    if(userField.getText().equals("admin")){
        message.setText("登入成功");
    }else{
        message.setText("登入失敗");
    }
});` },
          { title: "範例 9：顯示對話框", value: `JOptionPane.showMessageDialog(frame, "完成");` },
          { title: "範例 10：取得事件來源", value: `button.addActionListener(e -> {
    Object source = e.getSource();
    System.out.println(source);
});` },
          { title: "範例 11：多個按鈕共用事件", value: `ActionListener listener = e -> {
    JButton btn = (JButton)e.getSource();
    label.setText(btn.getText());
};

yesButton.addActionListener(listener);
noButton.addActionListener(listener);` },
          { title: "範例 12：加法計算", value: `calcButton.addActionListener(e -> {
    int a = Integer.parseInt(aField.getText());
    int b = Integer.parseInt(bField.getText());
    result.setText(String.valueOf(a + b));
});` },
          { title: "範例 13：按鈕啟用與停用", value: `button.addActionListener(e -> {
    button.setEnabled(false);
});` },
          { title: "範例 14：改變視窗標題", value: `button.addActionListener(e -> {
    frame.setTitle("已更新");
});` },
          { title: "範例 15：完整事件小程式", value: `import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Event Demo");
        JPanel panel = new JPanel();
        JTextField field = new JTextField(10);
        JButton button = new JButton("送出");
        JLabel label = new JLabel("等待輸入");

        button.addActionListener(e -> {
            label.setText("你好 " + field.getText());
        });

        panel.add(field);
        panel.add(button);
        panel.add(label);
        frame.add(panel);
        frame.setSize(300, 120);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}` }
        ]
      },
      {
        sectionId: "18.4",
        title: "版面配置管理員",
        body: [
          "你可能會想用 `setBounds()` 把每個元件放在固定座標，但視窗大小、字體、作業系統差異都可能讓版面跑掉。Layout Manager 可以幫你依規則排列元件。",
          "`FlowLayout` 會像文字一樣由左到右排列；`BorderLayout` 把畫面分成東西南北中；`GridLayout` 用表格方式平均分配；`BoxLayout` 適合垂直或水平堆疊。",
          "初學階段先掌握 FlowLayout、BorderLayout、GridLayout，就能做出很多簡單 GUI。"
        ],
        visuals: [
          { type: "layout", title: "FlowLayout 視覺化", value: `[A] [B] [C]` },
          { type: "layout", title: "BorderLayout 視覺化", value: `+----------------+
| NORTH          |
+----+------+----+
|WEST|CENTER|EAST|
+----+------+----+
| SOUTH          |
+----------------+` },
          { type: "layout", title: "GridLayout 視覺化", value: `+---+---+
| A | B |
+---+---+
| C | D |
+---+---+` },
          {
            type: "steps",
            title: "Layout Manager 比較表",
            headers: ["Layout", "優點", "缺點", "適用情境"],
            rows: [
              ["FlowLayout", "簡單自然", "複雜版面不夠精準", "按鈕列、小表單"],
              ["BorderLayout", "區域清楚", "只有五個主要區域", "主視窗架構"],
              ["GridLayout", "整齊平均", "每格大小相同", "計算機、棋盤"],
              ["BoxLayout", "可水平或垂直堆疊", "初學設定稍多", "工具列、表單欄位"]
            ]
          }
        ],
        codes: [
          { title: "範例 1：FlowLayout", value: `panel.setLayout(new FlowLayout());` },
          { title: "範例 2：FlowLayout 加入按鈕", value: `panel.add(new JButton("A"));
panel.add(new JButton("B"));
panel.add(new JButton("C"));` },
          { title: "範例 3：BorderLayout", value: `frame.setLayout(new BorderLayout());` },
          { title: "範例 4：BorderLayout 五區", value: `frame.add(new JButton("North"), BorderLayout.NORTH);
frame.add(new JButton("Center"), BorderLayout.CENTER);` },
          { title: "範例 5：GridLayout 2x2", value: `panel.setLayout(new GridLayout(2, 2));
panel.add(new JButton("A"));
panel.add(new JButton("B"));
panel.add(new JButton("C"));
panel.add(new JButton("D"));` },
          { title: "範例 6：計算機按鈕格", value: `panel.setLayout(new GridLayout(4, 3));
for(int i = 1; i <= 9; i++){
    panel.add(new JButton(String.valueOf(i)));
}` },
          { title: "範例 7：BoxLayout 垂直排列", value: `panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));` },
          { title: "範例 8：表單上下排列", value: `panel.add(new JLabel("帳號"));
panel.add(new JTextField(12));
panel.add(new JLabel("密碼"));
panel.add(new JTextField(12));` },
          { title: "範例 9：JPanel 組合版面", value: `JPanel top = new JPanel();
top.add(new JButton("開啟"));
top.add(new JButton("儲存"));
frame.add(top, BorderLayout.NORTH);` },
          { title: "範例 10：主內容放中央", value: `JTextArea area = new JTextArea();
frame.add(new JScrollPane(area), BorderLayout.CENTER);` },
          { title: "範例 11：避免絕對定位", value: `// 不建議初學依賴：
button.setBounds(10, 10, 80, 30);` },
          { title: "範例 12：完整 BorderLayout 範例", value: `import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Layout Demo");
        frame.setLayout(new BorderLayout());

        frame.add(new JButton("上方"), BorderLayout.NORTH);
        frame.add(new JTextArea(), BorderLayout.CENTER);
        frame.add(new JButton("下方"), BorderLayout.SOUTH);

        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}` }
        ]
      },
      {
        sectionId: "18.5",
        title: "2D 繪圖",
        body: [
          "Swing 不只可以放按鈕與文字框，也能畫圖。簡單 2D 繪圖通常會建立自己的 `JPanel`，覆寫 `paintComponent()`，再用 `Graphics` 畫線、矩形、圓形、文字與顏色。",
          "`paintComponent(Graphics g)` 是畫面需要重畫時被呼叫的方法。你不應該直接呼叫它，而是讓 Swing 自己管理，或在需要更新時呼叫 `repaint()`。",
          "畫圖時常見方法包含 `drawLine()`、`drawRect()`、`fillRect()`、`drawOval()`、`fillOval()`、`drawString()`、`setColor()`。"
        ],
        visuals: [
          { type: "drawing", title: "drawRect 繪圖結果預覽", value: `drawRect()
  ↓
+---------+
|         |
|         |
+---------+` },
          { type: "drawing", title: "drawOval 繪圖結果預覽", value: `drawOval()
  ↓
   ****
 *      *
 *      *
   ****` },
          { type: "flow", title: "Swing 繪圖流程", value: `建立自訂 JPanel
  ↓
覆寫 paintComponent
  ↓
呼叫 super.paintComponent(g)
  ↓
使用 Graphics 繪圖
  ↓
加入 JFrame 顯示`
          }
        ],
        codes: [
          { title: "範例 1：自訂 JPanel", value: `class DrawPanel extends JPanel {
}` },
          { title: "範例 2：覆寫 paintComponent", value: `protected void paintComponent(Graphics g) {
    super.paintComponent(g);
}` },
          { title: "範例 3：畫直線", value: `g.drawLine(20, 20, 180, 20);` },
          { title: "範例 4：畫矩形", value: `g.drawRect(30, 40, 100, 60);` },
          { title: "範例 5：填滿矩形", value: `g.fillRect(30, 40, 100, 60);` },
          { title: "範例 6：畫圓形", value: `g.drawOval(50, 50, 80, 80);` },
          { title: "範例 7：填滿圓形", value: `g.fillOval(50, 50, 80, 80);` },
          { title: "範例 8：畫文字", value: `g.drawString("Hello GUI", 40, 40);` },
          { title: "範例 9：改變顏色", value: `g.setColor(Color.RED);
g.fillOval(50, 50, 80, 80);` },
          { title: "範例 10：畫交通號誌", value: `g.setColor(Color.RED);
g.fillOval(40, 20, 50, 50);
g.setColor(Color.YELLOW);
g.fillOval(40, 80, 50, 50);
g.setColor(Color.GREEN);
g.fillOval(40, 140, 50, 50);` },
          { title: "範例 11：畫棋盤格", value: `for(int row = 0; row < 8; row++){
    for(int col = 0; col < 8; col++){
        if((row + col) % 2 == 0){
            g.setColor(Color.WHITE);
        }else{
            g.setColor(Color.BLACK);
        }
        g.fillRect(col * 30, row * 30, 30, 30);
    }
}` },
          { title: "範例 12：完整簡易畫板", value: `import javax.swing.*;
import java.awt.*;

class DrawPanel extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.drawRect(40, 40, 120, 80);
        g.drawString("My Drawing", 55, 80);
    }
}

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Drawing");
        frame.add(new DrawPanel());
        frame.setSize(240, 180);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}` }
        ]
      },
      {
        sectionId: "18.6",
        title: "綜合演練",
        body: [
          "本節把 Swing 元件、事件處理、版面配置、Math 與 CH16 的檔案讀寫整合成兩個小型桌面應用。先看視窗草圖，再規劃元件與事件流程，最後才寫程式。",
          "第一題是簡易三角函數計算器；第二題是簡易文字編輯器。兩題都不是為了做出完整商業軟體，而是練習把前面章節的概念串起來。"
        ],
        visuals: [
          {
            type: "window",
            title: "題目 1：三角函數計算器視窗草圖",
            value: `+----------------------+
| 角度: [_____]        |
|                      |
| [sin] [cos] [tan]    |
|                      |
| 結果:                |
+----------------------+`
          },
          {
            type: "uml",
            title: "題目 1 UML 概念",
            value: `TrigCalculator
├─ JFrame
├─ JTextField angleField
├─ JButton sin/cos/tan
└─ JLabel resultLabel`
          },
          {
            type: "flow",
            title: "題目 1 流程圖",
            value: `輸入角度
  ↓
點 sin/cos/tan
  ↓
角度轉弧度 Math.toRadians
  ↓
呼叫 Math.sin/cos/tan
  ↓
顯示結果`
          },
          {
            type: "window",
            title: "題目 2：文字編輯器視窗草圖",
            value: `+----------------------+
| [開啟] [儲存] [清除] |
+----------------------+
|                      |
|      JTextArea       |
|                      |
+----------------------+`
          },
          {
            type: "flow",
            title: "題目 2 檔案操作流程",
            value: `點開啟
  ↓
讀取檔案內容
  ↓
顯示到 JTextArea

點儲存
  ↓
取得 JTextArea 文字
  ↓
寫入檔案`
          }
        ],
        codes: [
          { title: "題目 1 Solution：簡易三角函數計算器", value: `import javax.swing.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("三角函數計算器");
        JPanel panel = new JPanel(new FlowLayout());

        JTextField angleField = new JTextField(8);
        JLabel result = new JLabel("結果：");

        JButton sin = new JButton("sin");
        JButton cos = new JButton("cos");
        JButton tan = new JButton("tan");

        sin.addActionListener(e -> calculate(angleField, result, "sin"));
        cos.addActionListener(e -> calculate(angleField, result, "cos"));
        tan.addActionListener(e -> calculate(angleField, result, "tan"));

        panel.add(new JLabel("角度："));
        panel.add(angleField);
        panel.add(sin);
        panel.add(cos);
        panel.add(tan);
        panel.add(result);

        frame.add(panel);
        frame.setSize(360, 140);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    static void calculate(JTextField field, JLabel result, String type) {
        double angle = Double.parseDouble(field.getText());
        double rad = Math.toRadians(angle);
        double value = 0;

        if(type.equals("sin")) value = Math.sin(rad);
        if(type.equals("cos")) value = Math.cos(rad);
        if(type.equals("tan")) value = Math.tan(rad);

        result.setText("結果：" + value);
    }
}` },
          { title: "題目 2 Solution：簡易文字編輯器", value: `import javax.swing.*;
import java.awt.*;
import java.io.*;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("簡易文字編輯器");
        JTextArea area = new JTextArea();
        JPanel toolbar = new JPanel();

        JButton open = new JButton("開啟");
        JButton save = new JButton("儲存");
        JButton clear = new JButton("清除");

        open.addActionListener(e -> {
            try(BufferedReader br = new BufferedReader(new FileReader("note.txt"))) {
                area.setText("");
                String line;
                while((line = br.readLine()) != null){
                    area.append(line + "\\n");
                }
            }catch(IOException ex){
                JOptionPane.showMessageDialog(frame, "讀取失敗");
            }
        });

        save.addActionListener(e -> {
            try(BufferedWriter bw = new BufferedWriter(new FileWriter("note.txt"))) {
                bw.write(area.getText());
            }catch(IOException ex){
                JOptionPane.showMessageDialog(frame, "儲存失敗");
            }
        });

        clear.addActionListener(e -> area.setText(""));

        toolbar.add(open);
        toolbar.add(save);
        toolbar.add(clear);

        frame.add(toolbar, BorderLayout.NORTH);
        frame.add(new JScrollPane(area), BorderLayout.CENTER);
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}` }
        ]
      }
    ],
    activities: [
      createActivity({
        id: "ch18-exercise-gui-observe",
        sectionId: "18.1",
        type: "exercise",
        title: "實作練習：觀察 GUI 程式",
        question: "選一個你常用的 GUI 程式，列出至少 5 個畫面元件，並說明它們的功能。",
        hint: "可以觀察計算機、瀏覽器、記事本。找按鈕、輸入框、選單、文字區域、視窗標題。",
        solution: "以記事本為例：視窗標題顯示檔名，選單列提供開啟與儲存，文字區域輸入內容，捲軸瀏覽長文字，關閉按鈕結束視窗。",
        explanation: "GUI 是由許多元件組成。先學會辨認元件，後面寫 Swing 時會更容易把需求拆成 JFrame、JPanel、JButton 等物件。"
      }),
      createActivity({
        id: "ch18-exercise-basic-window",
        sectionId: "18.2",
        type: "exercise",
        title: "實作練習：建立視窗與輸入框",
        question: "建立一個 JFrame，裡面放 JLabel、JTextField、JButton，視窗標題為 My First GUI。",
        hint: "使用 JFrame、JPanel、JLabel、JTextField、JButton，最後記得 setVisible(true)。",
        solution: `JFrame frame = new JFrame("My First GUI");
JPanel panel = new JPanel();
panel.add(new JLabel("姓名："));
panel.add(new JTextField(10));
panel.add(new JButton("送出"));
frame.add(panel);
frame.setSize(300, 120);
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.setVisible(true);`,
        explanation: "JFrame 是視窗，JPanel 是容器，其他元件放進 panel，再把 panel 放進 frame。這是 Swing 最基本的組合方式。"
      }),
      createActivity({
        id: "ch18-exercise-event",
        sectionId: "18.3",
        type: "exercise",
        title: "實作練習：按鈕事件",
        question: "建立一個按鈕與標籤，點擊按鈕後把標籤文字改成「已點擊」。",
        hint: "使用 `button.addActionListener(e -> { ... })`，在事件內呼叫 `label.setText()`。",
        solution: `JLabel label = new JLabel("尚未點擊");
JButton button = new JButton("按我");

button.addActionListener(e -> {
    label.setText("已點擊");
});`,
        explanation: "事件處理是 GUI 的核心。程式先註冊 listener，之後使用者點擊按鈕時，listener 裡面的程式碼才會執行。"
      }),
      createActivity({
        id: "ch18-exercise-layout",
        sectionId: "18.4",
        type: "exercise",
        title: "實作練習：比較三種 Layout",
        question: "分別用 FlowLayout、GridLayout、BorderLayout 排列三個按鈕，觀察畫面差異。",
        hint: "同樣三個 JButton，換不同 `setLayout()` 即可觀察差異。",
        solution: `panel.setLayout(new FlowLayout());
// 或：
panel.setLayout(new GridLayout(1, 3));
// 或：
frame.setLayout(new BorderLayout());`,
        explanation: "Layout Manager 會決定元件如何排列。選對 Layout，比用座標硬排更能適應不同視窗大小。"
      }),
      createActivity({
        id: "ch18-exercise-drawing",
        sectionId: "18.5",
        type: "exercise",
        title: "實作練習：畫房子",
        question: "使用 Graphics 畫出一間簡單房子，至少包含屋頂、牆壁、門與窗。",
        hint: "牆壁可用 drawRect，門可用 fillRect，窗戶可用 drawRect，屋頂可先用 drawLine 組成三角形。",
        solution: `protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.drawLine(80, 80, 140, 30);
    g.drawLine(140, 30, 200, 80);
    g.drawRect(90, 80, 100, 80);
    g.fillRect(125, 120, 30, 40);
    g.drawRect(105, 100, 20, 20);
    g.drawRect(160, 100, 20, 20);
}`,
        explanation: "2D 繪圖可以把圖形拆成基本形狀。房子不是一個單一方法，而是線條、矩形與填滿矩形的組合。"
      }),
      createActivity({
        id: "ch18-homework-mini-app",
        sectionId: "18.6",
        type: "homework",
        title: "作業：完成一個小型 GUI 應用",
        question: "從三角函數計算器或文字編輯器中選一題完成，並畫出視窗草圖與事件流程。",
        hint: "先畫草圖，再列出元件，最後寫事件處理。不要一開始就直接寫完整程式。",
        solution: "選三角函數計算器：JFrame 放入角度輸入框、sin/cos/tan 三個按鈕與結果標籤。按下按鈕時讀取角度，轉成弧度後呼叫 Math.sin/cos/tan，再更新結果標籤。",
        explanation: "GUI 專案最容易亂在元件與事件混在一起。用草圖與流程圖先整理想法，可以讓程式碼更清楚。"
      })
    ],
    quiz: [
      { question: "GUI 是什麼的縮寫？", options: ["Graphical User Interface", "General User Internet", "Graphic Utility Input", "Global Unit Info"], answer: 0, explanation: "GUI 是圖形使用者介面。" },
      { question: "Console 程式主要使用什麼互動？", options: ["文字輸入輸出", "滑鼠拖曳為主", "只能播放音樂", "只用圖片"], answer: 0, explanation: "Console 多以文字方式互動。" },
      { question: "GUI 程式常等待什麼發生？", options: ["事件", "編譯器消失", "package 自動生成", "CPU 停止"], answer: 0, explanation: "點按鈕、輸入文字都是事件。" },
      { question: "下列哪個是 GUI 程式案例？", options: ["計算機視窗", "只有 javac 指令", "純文字錯誤訊息", "package 宣告"], answer: 0, explanation: "計算機通常是 GUI 應用。" },
      { question: "Swing 中最外層視窗常用？", options: ["JFrame", "JString", "JNumber", "JPackage"], answer: 0, explanation: "JFrame 用來建立視窗。" },
      { question: "Swing 中常用作容器的是？", options: ["JPanel", "JInt", "JMath", "JClass"], answer: 0, explanation: "JPanel 可放置其他元件。" },
      { question: "顯示文字標籤常用？", options: ["JLabel", "JButton", "JFrame", "JFile"], answer: 0, explanation: "JLabel 用於顯示文字或圖示。" },
      { question: "按鈕元件是？", options: ["JButton", "JTextField", "JPanel", "JLabel"], answer: 0, explanation: "JButton 是按鈕。" },
      { question: "單行輸入框是？", options: ["JTextField", "JTextArea", "JPanel", "JFrame"], answer: 0, explanation: "JTextField 用於單行文字輸入。" },
      { question: "顯示視窗需要呼叫？", options: ["setVisible(true)", "showConsole()", "openPackage()", "runButton()"], answer: 0, explanation: "setVisible(true) 會讓視窗顯示。" },
      { question: "關閉視窗時結束程式常設定？", options: ["setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)", "setEnd()", "closeAll()", "System.close()"], answer: 0, explanation: "這是 JFrame 常見設定。" },
      { question: "按鈕點擊通常產生？", options: ["ActionEvent", "FileEventOnly", "PackageEvent", "MathEvent"], answer: 0, explanation: "按鈕動作會產生 ActionEvent。" },
      { question: "處理按鈕事件常用？", options: ["ActionListener", "LayoutManager", "FileReader", "HashSet"], answer: 0, explanation: "ActionListener 負責處理 action event。" },
      { question: "註冊事件監聽器使用？", options: ["addActionListener()", "setSize()", "addPackage()", "drawRect()"], answer: 0, explanation: "按鈕可透過 addActionListener 註冊事件處理。" },
      { question: "Lambda 事件寫法常見符號是？", options: ["->", ":::", "=>=>", "<-"], answer: 0, explanation: "Java Lambda 使用 ->。" },
      { question: "不建議全部依賴 setBounds 的原因是？", options: ["不同視窗大小與環境容易跑版", "setBounds 不能編譯", "GUI 不需要位置", "Swing 沒有座標"], answer: 0, explanation: "固定座標不易適應不同環境。" },
      { question: "FlowLayout 的排列方式接近？", options: ["由左到右排列", "只能中央一格", "固定五區", "樹狀結構"], answer: 0, explanation: "FlowLayout 會按順序流動排列。" },
      { question: "BorderLayout 分成幾個主要區域？", options: ["五個", "兩個", "八個", "十個"], answer: 0, explanation: "NORTH、SOUTH、EAST、WEST、CENTER。" },
      { question: "GridLayout 適合什麼？", options: ["整齊格狀版面", "只放一個文字", "只管理檔案", "處理例外"], answer: 0, explanation: "GridLayout 會把元件平均放入格子。" },
      { question: "Swing 2D 繪圖常覆寫？", options: ["paintComponent()", "mainOnly()", "drawMain()", "clickPaint()"], answer: 0, explanation: "自訂繪圖通常覆寫 paintComponent。" },
      { question: "paintComponent 的參數常見型別是？", options: ["Graphics", "Scanner", "HashMap", "Thread"], answer: 0, explanation: "Graphics 提供繪圖方法。" },
      { question: "畫矩形可用？", options: ["drawRect()", "drawString()", "setVisible()", "addActionListener()"], answer: 0, explanation: "drawRect 畫矩形外框。" },
      { question: "改變繪圖顏色可用？", options: ["setColor()", "setText()", "setSize()", "setLayoutOnly()"], answer: 0, explanation: "Graphics 的 setColor 設定後續繪圖顏色。" },
      { question: "三角函數計算器會用到哪個標準類別？", options: ["Math", "FileReader only", "Thread only", "HashSet only"], answer: 0, explanation: "sin、cos、tan 可使用 Math。" },
      { question: "簡易文字編輯器可結合哪章概念？", options: ["CH16 檔案讀寫", "只需要 CH01", "只需要 HTML", "只需要多執行緒"], answer: 0, explanation: "開啟與儲存檔案會用到 File IO。" }
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
    quizAnswers: {},
    wrongBook: []
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
      quizAnswers: saved?.quizAnswers && typeof saved.quizAnswers === "object" ? saved.quizAnswers : {},
      wrongBook: Array.isArray(saved?.wrongBook) ? saved.wrongBook : []
    });
  } catch {
    return getDefaultState();
  }
}

function normalizeState(state) {
  const completedActivities = [...new Set(state.completedActivities)];
  const completedSections = [...new Set(state.completedSections)];
  const quizAnswers = state.quizAnswers;
  const wrongBook = dedupeWrongBook(state.wrongBook || []);
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
    completedChapters,
    wrongBook
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

function getCourseGroups() {
  return COURSE_GROUPS.map((group) => ({
    ...group,
    chapters: group.chapterIds.map(getChapter).filter(Boolean)
  }));
}

function getChapterNavTitle(chapter) {
  return COURSE_NAV_TITLES[chapter.id] || chapter.title;
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

function getWrongQuestionId(chapterId, questionIndex, type = "quiz") {
  return `${chapterId}:${type}:${questionIndex}`;
}

function dedupeWrongBook(items) {
  const map = new Map();
  items.forEach((item) => {
    if (item?.questionId && !map.has(item.questionId)) {
      map.set(item.questionId, item);
    }
  });
  return [...map.values()];
}

function getWrongBookItem(chapter, questionIndex, userAnswerIndex) {
  const question = chapter.quiz[questionIndex];
  const assessment = getAssessmentSection(chapter);
  return {
    chapter: `${chapter.code} ${chapter.title}`,
    chapterId: chapter.id,
    section: `${assessment.sectionId} ${assessment.title}`,
    questionId: getWrongQuestionId(chapter.id, questionIndex),
    questionIndex,
    question: question.question,
    options: question.options,
    userAnswer: question.options[userAnswerIndex],
    userAnswerIndex,
    correctAnswer: question.options[question.answer],
    correctAnswerIndex: question.answer,
    explanation: question.explanation,
    timestamp: new Date().toISOString()
  };
}

function updateWrongBookForQuizAnswer(state, chapterId, questionIndex, selected) {
  const chapter = getChapter(chapterId);
  const question = chapter.quiz[questionIndex];
  const questionId = getWrongQuestionId(chapterId, questionIndex);
  const wrongBook = (state.wrongBook || []).filter((item) => item.questionId !== questionId);

  if (selected !== question.answer) {
    wrongBook.push(getWrongBookItem(chapter, questionIndex, selected));
  }

  return wrongBook;
}

function removeWrongBookItem(questionId) {
  const state = getState();
  saveState({
    ...state,
    wrongBook: state.wrongBook.filter((item) => item.questionId !== questionId)
  });
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

function getChapterProgressPercent(chapter, state = getState()) {
  const stats = getChapterStats(chapter, state);
  const totalUnits = stats.totalSections + stats.totalActivities + stats.totalQuiz;
  const completedUnits = stats.completedSections + stats.completedActivities + stats.answeredCount;

  return totalUnits === 0 ? 0 : Math.round((completedUnits / totalUnits) * 100);
}

function getChapterStatus(chapter, state = getState()) {
  if (state.completedChapters.includes(chapter.id)) return "已完成";
  return getChapterProgressPercent(chapter, state) > 0 ? "學習中" : "未開始";
}

function getProgressStats() {
  const state = getState();
  const totalActivities = getAllActivities().length;
  const completedActivities = state.completedActivities.length;
  const totalQuiz = chapters.reduce((sum, chapter) => sum + chapter.quiz.length, 0);
  const completedQuiz = chapters.reduce((sum, chapter) => sum + getChapterStats(chapter, state).answeredCount, 0);
  const chapterPercent = Math.round((state.completedChapters.length / chapters.length) * 100);
  const activityPercent = totalActivities === 0 ? 0 : Math.round((completedActivities / totalActivities) * 100);
  const quizPercent = totalQuiz === 0 ? 0 : Math.round((completedQuiz / totalQuiz) * 100);

  return {
    state,
    completedChapters: state.completedChapters,
    chapterDone: state.completedChapters.length,
    chapterTotal: chapters.length,
    chapterPercent,
    completedActivities,
    totalActivities,
    activityPercent,
    completedQuiz,
    totalQuiz,
    quizPercent,
    wrongCount: state.wrongBook.length,
    isCourseComplete: state.completedChapters.length === chapters.length
  };
}

function getContinueTarget(state = getState()) {
  const chapter = chapters.find((item) => !state.completedChapters.includes(item.id)) || chapters[chapters.length - 1];
  const chapterStats = getChapterStats(chapter, state);
  const section = getSortedSections(chapter).find((item) => !state.completedSections.includes(getSectionKey(chapter.id, item.sectionId)));

  if (section) return `#chapter-${chapter.id}/${encodeURIComponent(section.sectionId)}`;
  if (!chapterStats.allQuizDone) return `#chapter-${chapter.id}/quiz`;
  return `#chapter-${chapter.id}`;
}

function renderMainNav() {
  if (!mainNav) return;
  const courseGroups = getCourseGroups().map((group) => `
    <div class="nav-course-group">
      <div class="nav-group-title">${group.title}</div>
      ${group.chapters.map((chapter) => `
        <a href="#chapter-${chapter.id}" data-nav-link>${chapter.code} ${getChapterNavTitle(chapter)}</a>
      `).join("")}
    </div>
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
        ${courseGroups}
      </div>
    </div>
    <a href="#syntax" data-nav-link>Java 語法速查</a>
    <a href="#wrongbook" data-nav-link>錯題本</a>
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
  const continueTarget = getContinueTarget(stats.state);
  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">完整 ${stats.chapterTotal} 章課程</p>
        <h1>Java 新手村</h1>
        <p>從零開始學會 Java 程式設計。用章節地圖、範例程式、練習、作業與測驗，完整走過 Java 基礎、物件導向、進階應用與 GUI 實作。</p>
        ${stats.isCourseComplete ? `
          <div class="completion-banner">
            <strong>🎉 恭喜完成 Java 新手村！</strong>
            <span>已完成 ${stats.chapterDone} / ${stats.chapterTotal} 章 · 練習完成率 ${stats.activityPercent}% · 測驗完成率 ${stats.quizPercent}%</span>
          </div>
        ` : ""}
        <div class="hero-actions">
          <a class="button" href="${continueTarget}">繼續學習</a>
          <a class="button secondary" href="#map">前往課程地圖</a>
        </div>
      </div>

      <aside class="stats-panel" aria-label="網站狀態">
        <div class="stats-grid">
          <div class="stat-card">
            <strong>${stats.chapterTotal}</strong>
            <span>完整課程章節</span>
          </div>
          <div class="stat-card">
            <strong>${stats.chapterDone}</strong>
            <span>已完成章節</span>
          </div>
          <div class="stat-card">
            <strong>${stats.completedActivities}</strong>
            <span>已完成練習</span>
          </div>
          <div class="stat-card">
            <strong>${stats.chapterPercent}%</strong>
            <span>總學習進度</span>
          </div>
          <div class="stat-card">
            <strong>${stats.wrongCount}</strong>
            <span>錯題</span>
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
      <h1>課程地圖</h1>
      <p>完整 18 章課程依主題分組。每一章都可以單獨閱讀，也可以照順序完成小節、練習與測驗。</p>
      ${renderProgressPanel()}
    </section>

    <section class="course-map" aria-label="章節列表">
      ${getCourseGroups().map((group) => `
        <section class="course-group">
          <div class="course-group-heading">
            <h2>${group.title}</h2>
            <span>${group.chapters.length} 章</span>
          </div>
          <div class="chapter-grid">
            ${group.chapters.map((chapter) => {
              const chapterStats = getChapterStats(chapter, state);
              const progressPercent = getChapterProgressPercent(chapter, state);
              const status = getChapterStatus(chapter, state);
              return `
                <a class="chapter-card" href="#chapter-${chapter.id}">
                  <span class="chapter-kicker">${chapter.code}</span>
                  <h2>${chapter.title}</h2>
                  <p>${chapter.summary}</p>
                  <div class="chapter-progress">
                    <div class="progress-row">
                      <strong>${status}</strong>
                      <span>${progressPercent}%</span>
                    </div>
                    <div class="progress-track">
                      <div class="progress-bar" style="width: ${progressPercent}%"></div>
                    </div>
                  </div>
                  <div class="chapter-meta">
                    <span class="pill">${chapter.minutes} 分鐘</span>
                    <span class="pill ${status === "已完成" ? "done" : ""}">${status}</span>
                    <span class="pill">小節 ${chapterStats.completedSections}/${chapterStats.totalSections}</span>
                    <span class="pill">練習 ${chapterStats.completedActivities}/${chapterStats.totalActivities}</span>
                    <span class="pill">測驗 ${chapterStats.answeredCount}/${chapterStats.totalQuiz}</span>
                  </div>
                </a>
              `;
            }).join("")}
          </div>
        </section>
      `).join("")}
    </section>
  `;
}

function getSyntaxChapterEntries() {
  return SYNTAX_REFERENCE.map((entry) => ({
    ...entry,
    chapter: getChapter(entry.chapterId),
    group: getCourseGroups().find((group) => group.chapterIds.includes(entry.chapterId))?.title || "全部"
  }));
}

function getSyntaxSearchText(entry, card) {
  return [
    entry.chapter.code,
    entry.chapter.title,
    getChapterNavTitle(entry.chapter),
    entry.group,
    card.title,
    card.purpose,
    card.code,
    ...(card.keywords || [])
  ].join(" ").toLowerCase();
}

function getSyntaxCardKey(chapterId, cardIndex) {
  return `${chapterId}:${cardIndex}`;
}

function getSyntaxCardByKey(key) {
  const [chapterId, cardIndex] = key.split(":").map(Number);
  const entry = SYNTAX_REFERENCE.find((item) => item.chapterId === chapterId);
  return entry?.cards[cardIndex] || null;
}

function renderSyntaxCard(entry, card, cardIndex) {
  const searchText = escapeAttribute(getSyntaxSearchText(entry, card));
  const key = getSyntaxCardKey(entry.chapterId, cardIndex);
  return `
    <article class="syntax-card" data-syntax-card data-group="${escapeAttribute(entry.group)}" data-search="${searchText}">
      <div class="syntax-card-head">
        <div>
          <h3>${card.title}</h3>
          <p>${card.purpose}</p>
        </div>
        <button class="mini-button syntax-copy" type="button" data-copy-syntax="${key}">複製程式碼</button>
      </div>
      <pre><code>${escapeHtml(card.code)}</code></pre>
    </article>
  `;
}

function renderSyntaxReference() {
  const entries = getSyntaxChapterEntries();
  app.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Quick Reference</p>
      <h1>Java 語法速查</h1>
      <p>依照章節整理 Java 常用語法。忘記語法、寫練習題、考前複習或面試前整理時，可以在這裡快速查詢與複製。</p>
    </section>

    <section class="syntax-toolbar" aria-label="語法搜尋與篩選">
      <label>
        <span>搜尋語法</span>
        <input type="search" data-syntax-search placeholder="搜尋章節、語法、關鍵字或程式碼，例如 if、ArrayList、JFrame">
      </label>
      <div class="syntax-filters" aria-label="章節分類篩選">
        <button class="syntax-filter active" type="button" data-syntax-filter="全部">全部</button>
        ${COURSE_GROUPS.map((group) => `
          <button class="syntax-filter" type="button" data-syntax-filter="${group.title}">${COURSE_FILTER_LABELS[group.title] || group.title}</button>
        `).join("")}
      </div>
    </section>

    <section class="syntax-reference" aria-label="Java 語法卡片">
      ${entries.map((entry) => `
        <section class="syntax-chapter" data-syntax-section data-group="${escapeAttribute(entry.group)}">
          <div class="syntax-chapter-heading">
            <div>
              <span class="chapter-kicker">${entry.chapter.code}</span>
              <h2>${entry.chapter.title}</h2>
              <p>${entry.description}</p>
            </div>
            <a class="button secondary compact" href="#chapter-${entry.chapter.id}">前往章節</a>
          </div>
          <div class="syntax-card-grid">
            ${entry.cards.map((card, index) => renderSyntaxCard(entry, card, index)).join("")}
          </div>
        </section>
      `).join("")}
      <p class="syntax-empty" data-syntax-empty hidden>找不到相關語法</p>
    </section>

    <div class="copy-toast" data-copy-toast hidden>已複製程式碼</div>
  `;
}

function groupWrongBookByChapter(wrongBook) {
  return wrongBook.reduce((groups, item) => {
    const key = item.chapter || "未分類";
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
    return groups;
  }, {});
}

function renderWrongBookCard(item) {
  return `
    <article class="wrong-card" data-wrong-card="${item.questionId}">
      <div class="wrong-card-head">
        <div>
          <span class="chapter-kicker">${item.section}</span>
          <h3>${formatInlineCode(item.question)}</h3>
        </div>
        <small>${new Date(item.timestamp).toLocaleString("zh-TW")}</small>
      </div>
      <div class="wrong-detail-grid">
        <div class="wrong-detail user-answer">
          <strong>你的答案</strong>
          <p>${item.userAnswer}</p>
        </div>
        <div class="wrong-detail correct-answer">
          <strong>正確答案</strong>
          <p>${item.correctAnswer}</p>
        </div>
        <div class="wrong-detail explanation">
          <strong>解說</strong>
          <p>${item.explanation}</p>
        </div>
      </div>
      <div class="wrong-retry">
        <button class="button secondary compact" type="button" data-toggle-wrong-retry="${item.questionId}">重新作答</button>
        <div class="wrong-retry-options" id="retry-${item.questionId}" hidden>
          ${item.options.map((option, index) => `
            <button class="quiz-option" type="button" data-retry-wrong="${item.questionId}" data-option="${index}">
              ${option}
            </button>
          `).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderWrongBook() {
  const state = getState();
  const groups = groupWrongBookByChapter(state.wrongBook);
  const groupEntries = Object.entries(groups);

  app.innerHTML = `
    <section class="page-title wrong-book-title">
      <p class="eyebrow">Wrong Book</p>
      <h1>錯題本</h1>
      <p>測驗答錯時會自動加入錯題本。重新作答答對後，該題會自動移除。</p>
      <div class="wrong-book-summary">
        <div class="stat-card">
          <strong>${state.wrongBook.length}</strong>
          <span>總錯題數</span>
        </div>
        <button class="button secondary" type="button" data-clear-wrong-book ${state.wrongBook.length === 0 ? "disabled" : ""}>清空錯題本</button>
      </div>
    </section>

    <section class="wrong-book-list" aria-label="錯題列表">
      ${groupEntries.length ? groupEntries.map(([chapter, items]) => `
        <section class="wrong-book-group">
          <div class="course-group-heading">
            <h2>${chapter}</h2>
            <span>${items.length} 題</span>
          </div>
          <div class="wrong-card-list">
            ${items.map(renderWrongBookCard).join("")}
          </div>
        </section>
      `).join("") : `
        <section class="content-section empty-state">
          <h2>目前沒有錯題</h2>
          <p>完成章節測驗後，答錯的題目會出現在這裡。</p>
          <a class="button" href="#map">前往課程地圖</a>
        </section>
      `}
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

function renderVisualBlock(visual) {
  if (!visual) return "";

  if (visual.type === "steps") {
    const headers = visual.headers || [];
    const rows = visual.rows || [];
    return `
      <div class="visual-block visual-steps">
        <div class="visual-title">${visual.title}</div>
        <div class="visual-table-wrap">
          <table>
            <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
            <tbody>
              ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (visual.type === "compare") {
    return `
      <div class="visual-block visual-compare">
        <div class="visual-title">${visual.title}</div>
        <div class="compare-grid">
          <div>
            <strong>執行前</strong>
            <pre><code>${escapeHtml(visual.before)}</code></pre>
          </div>
          <div>
            <strong>執行後</strong>
            <pre><code>${escapeHtml(visual.after)}</code></pre>
          </div>
        </div>
      </div>
    `;
  }

  if (visual.type === "callout") {
    const label = {
      tip: "💡 重點",
      warning: "⚠️ 常見錯誤",
      challenge: "🚀 延伸挑戰"
    }[visual.variant || "tip"];

    return `
      <aside class="visual-callout ${visual.variant || "tip"}">
        <strong>${label}</strong>
        <p>${formatInlineCode(visual.text)}</p>
      </aside>
    `;
  }

  const typeLabel = {
    flow: "流程圖",
    array: "陣列視覺化",
    uml: "UML 類別圖",
    memory: "記憶體概念圖",
    files: "檔案結構圖",
    timeline: "執行緒時間軸圖",
    window: "視窗草圖預覽",
    component: "元件階層圖",
    event: "事件流程圖",
    layout: "Layout 視覺化圖",
    drawing: "繪圖結果預覽",
    screenshot: "圖片佔位區塊"
  }[visual.type] || "視覺化教學";

  return `
    <div class="visual-block visual-${visual.type}">
      <div class="visual-title">${visual.title || typeLabel}<span>${typeLabel}</span></div>
      <pre><code>${escapeHtml(visual.value)}</code></pre>
    </div>
  `;
}

function renderVisualBlocks(section) {
  return section.visuals ? section.visuals.map(renderVisualBlock).join("") : "";
}

function renderLearningObjectives(section) {
  if (!section.objectives?.length) return "";

  return `
    <aside class="learning-objectives">
      <strong>本節學習目標</strong>
      <p>學完本節後，學生應該能夠：</p>
      <ul>
        ${section.objectives.map((objective) => `<li>${formatInlineCode(objective)}</li>`).join("")}
      </ul>
    </aside>
  `;
}

function renderSection(section, index) {
  return `
    <section id="section-${section.sectionId}" class="content-section">
      <h2>${section.sectionId} ${section.title}</h2>
      ${renderLearningObjectives(section)}
      ${section.body.map((paragraph) => `<p>${formatInlineCode(paragraph)}</p>`).join("")}
      ${section.list ? `<ul>${section.list.map((item) => `<li>${formatInlineCode(item)}</li>`).join("")}</ul>` : ""}
      ${renderVisualBlocks(section)}
      ${renderCodeBlock(section.code)}
      ${section.codes ? section.codes.map(renderCodeBlock).join("") : ""}
    </section>
  `;
}

function getActivityTypeLabel(type) {
  const labels = {
    exercise: "實作練習",
    thought: "思考題",
    homework: "Mini Project",
    challenge: "Challenge"
  };

  return labels[type] || "練習";
}

function getDifficultyStars(level = 1) {
  return "⭐".repeat(Math.max(1, Math.min(Number(level) || 1, 4)));
}

function renderAnswerContent(value, className) {
  if (Array.isArray(value)) {
    return value.map((item) => `<p>${formatInlineCode(item)}</p>`).join("");
  }

  const formatted = formatInlineCode(value);
  const shouldUseCodeBlock = value.includes("\n") || value.includes(";") || value.includes("public class");

  if (shouldUseCodeBlock && className === "solution") {
    return `<pre><code>${escapeHtml(value)}</code></pre>`;
  }

  return formatted.split("\n").map((line) => `<p>${line}</p>`).join("");
}

function renderRevealPanel(activity, kind, title) {
  const panelId = `${activity.id}-${kind}`;
  const value = activity[kind];
  if (!value) return "";

  return `
    <div class="answer-panel ${kind}" id="${panelId}" hidden>
      <strong>${title}</strong>
      ${renderAnswerContent(value, kind)}
    </div>
  `;
}

function renderHintPanels(activity) {
  if (!Array.isArray(activity.hints)) {
    return renderRevealPanel(activity, "hint", "提示");
  }

  return activity.hints.map((hint, index) => {
    const kind = `hint${index + 1}`;
    return `
      <div class="answer-panel hint ${kind}" id="${activity.id}-${kind}" hidden>
        <strong>Hint ${index + 1}</strong>
        ${renderAnswerContent(hint, "hint")}
      </div>
    `;
  }).join("");
}

function renderActivity(activity, state) {
  const isChecked = state.completedActivities.includes(activity.id);
  const hasThreeHints = Array.isArray(activity.hints);
  return `
    <section class="callout activity-card ${activity.type}" id="${activity.id}">
      <div class="activity-head">
        <div class="activity-badges">
          <span class="activity-label">${getActivityTypeLabel(activity.type)}</span>
          ${activity.category ? `<span class="activity-category">${activity.category}</span>` : ""}
          ${activity.difficulty ? `<span class="activity-difficulty level-${activity.difficulty}" aria-label="難度 ${activity.difficulty}">${getDifficultyStars(activity.difficulty)}</span>` : ""}
        </div>
        <label class="activity-check">
          <input type="checkbox" data-activity-complete="${activity.id}" ${isChecked ? "checked" : ""}>
          <span>我已完成這個練習</span>
        </label>
      </div>
      <h2>${activity.title}</h2>
      <p>${formatInlineCode(activity.question)}</p>
      <div class="answer-actions">
        ${hasThreeHints
          ? activity.hints.map((_, index) => `<button class="mini-button hint" type="button" data-toggle-panel="${activity.id}-hint${index + 1}" data-label="Hint ${index + 1}">查看 Hint ${index + 1}</button>`).join("")
          : `<button class="mini-button hint" type="button" data-toggle-panel="${activity.id}-hint" data-label="提示">查看提示</button>`}
        <button class="mini-button solution" type="button" data-toggle-panel="${activity.id}-solution" data-label="完整解答">顯示完整解答</button>
        <button class="mini-button explanation" type="button" data-toggle-panel="${activity.id}-explanation" data-label="解題思路">查看解題思路</button>
      </div>
      ${renderHintPanels(activity)}
      ${renderRevealPanel(activity, "solution", "完整解答")}
      ${renderRevealPanel(activity, "explanation", "解題思路")}
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
            ${renderChapterGoals(chapter)}
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

function renderChapterGoals(chapter) {
  if (!chapter.goals?.length) return "";

  return `
    <section class="chapter-goals" aria-label="本章學習目標">
      <h2>本章學習目標</h2>
      <ul>
        ${chapter.goals.map((goal) => `<li>${goal}</li>`).join("")}
      </ul>
    </section>
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

function escapeAttribute(value) {
  return escapeHtml(String(value)).replace(/"/g, "&quot;");
}

function filterSyntaxCards() {
  const searchInput = document.querySelector("[data-syntax-search]");
  const activeFilter = document.querySelector("[data-syntax-filter].active")?.dataset.syntaxFilter || "全部";
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  document.querySelectorAll("[data-syntax-card]").forEach((card) => {
    const matchesGroup = activeFilter === "全部" || card.dataset.group === activeFilter;
    const matchesQuery = !query || (card.dataset.search || "").includes(query);
    const shouldShow = matchesGroup && matchesQuery;
    card.classList.toggle("is-hidden", !shouldShow);
    if (shouldShow) visibleCount++;
  });

  document.querySelectorAll("[data-syntax-section]").forEach((section) => {
    const hasVisibleCard = Boolean(section.querySelector("[data-syntax-card]:not(.is-hidden)"));
    section.classList.toggle("is-hidden", !hasVisibleCard);
  });

  const empty = document.querySelector("[data-syntax-empty]");
  if (empty) empty.hidden = visibleCount > 0;
}

function setSyntaxFilter(button) {
  document.querySelectorAll("[data-syntax-filter]").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  filterSyntaxCards();
}

async function copySyntaxCode(key) {
  const card = getSyntaxCardByKey(key);
  if (!card) return;

  try {
    await navigator.clipboard.writeText(card.code);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = card.code;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  const toast = document.querySelector("[data-copy-toast]");
  if (!toast) return;
  toast.hidden = false;
  clearTimeout(copySyntaxCode.toastTimer);
  copySyntaxCode.toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 1400);
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
  const label = button.dataset.label;
  const closedVerb = label === "完整解答" ? "顯示" : "查看";
  button.textContent = `${shouldShow ? "隱藏" : closedVerb} ${label}`;
}

function handleWrongRetryToggle(button) {
  const panel = document.getElementById(`retry-${button.dataset.toggleWrongRetry}`);
  if (!panel) return;

  const shouldShow = panel.hidden;
  panel.hidden = !shouldShow;
  button.textContent = shouldShow ? "隱藏重新作答" : "重新作答";
}

function handleWrongRetry(button) {
  const questionId = button.dataset.retryWrong;
  const selected = Number(button.dataset.option);
  const state = getState();
  const item = state.wrongBook.find((wrong) => wrong.questionId === questionId);
  if (!item) return;

  if (selected === item.correctAnswerIndex) {
    removeWrongBookItem(questionId);
    renderWrongBook();
    return;
  }

  saveState({
    ...state,
    wrongBook: state.wrongBook.map((wrong) => wrong.questionId === questionId
      ? {
        ...wrong,
        userAnswer: wrong.options[selected],
        userAnswerIndex: selected,
        timestamp: new Date().toISOString()
      }
      : wrong)
  });
  renderWrongBook();
}

function clearWrongBook() {
  if (!confirm("確定要清空錯題本嗎？這個動作無法復原。")) return;

  const state = getState();
  saveState({
    ...state,
    wrongBook: []
  });
  renderWrongBook();
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
  const wrongBook = updateWrongBookForQuizAnswer(state, chapterId, questionIndex, selected);

  saveState({
    ...state,
    wrongBook,
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
  const targetHash = `#chapter-${chapterId}/${encodeURIComponent(sectionId)}`;
  if (location.hash === targetHash) {
    renderCurrentRoute({ scrollToTop: true });
    return;
  }
  location.hash = targetHash;
}

function navigateToAssessment(chapterId) {
  const targetHash = `#chapter-${chapterId}/quiz`;
  if (location.hash === targetHash) {
    renderCurrentRoute({ scrollToTop: true });
    return;
  }
  location.hash = targetHash;
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

function scrollMainContentToTop() {
  const mainContent = document.querySelector(".lesson-article");
  const mainContentStyle = mainContent ? window.getComputedStyle(mainContent) : null;
  const hasMainContentScrollbar = mainContentStyle && /(auto|scroll)/.test(mainContentStyle.overflowY);
  const canScrollMainContent = hasMainContentScrollbar && mainContent.scrollHeight > mainContent.clientHeight;

  if (canScrollMainContent) {
    mainContent.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

    const syntaxFilterButton = event.target.closest("[data-syntax-filter]");
    if (syntaxFilterButton) {
      setSyntaxFilter(syntaxFilterButton);
      return;
    }

    const copySyntaxButton = event.target.closest("[data-copy-syntax]");
    if (copySyntaxButton) {
      copySyntaxCode(copySyntaxButton.dataset.copySyntax);
      return;
    }

    const wrongRetryToggle = event.target.closest("[data-toggle-wrong-retry]");
    if (wrongRetryToggle) {
      handleWrongRetryToggle(wrongRetryToggle);
      return;
    }

    const wrongRetryButton = event.target.closest("[data-retry-wrong]");
    if (wrongRetryButton) {
      handleWrongRetry(wrongRetryButton);
      return;
    }

    const clearWrongBookButton = event.target.closest("[data-clear-wrong-book]");
    if (clearWrongBookButton) {
      clearWrongBook();
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

  app.addEventListener("input", (event) => {
    if (event.target.closest("[data-syntax-search]")) {
      filterSyntaxCards();
    }
  });
}

function renderCurrentRoute(options = {}) {
  const hash = location.hash || "#home";
  const chapterRoute = parseChapterRoute();

  if (chapterRoute) {
    renderChapter(chapterRoute.chapterId, chapterRoute.view);
  } else if (hash === "#map") {
    renderMap();
  } else if (hash === "#syntax" || hash === "#toolbox" || hash === "#cheatsheet") {
    renderSyntaxReference();
  } else if (hash === "#wrongbook") {
    renderWrongBook();
  } else if (hash === "#progress") {
    renderProgressPage();
  } else {
    renderHome();
  }

  updateActiveNav();
  app.focus({ preventScroll: true });
  if (options.scrollToTop) {
    requestAnimationFrame(scrollMainContentToTop);
  }
}

renderMainNav();
window.addEventListener("hashchange", () => renderCurrentRoute({ scrollToTop: true }));
bindMainNavEvents();
bindEvents();
renderCurrentRoute();
