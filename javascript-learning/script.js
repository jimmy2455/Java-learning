const STORAGE = {
  favorites: "jsVillageFavorites",
  wrongBook: "jsVillageWrongBook",
  theme: "jsVillageTheme",
  lastDay: "jsVillageLastDay",
  visited: "jsVillageVisitedDays"
};

const dailyPlan = [
  {
    day: 1,
    title: "JavaScript 基礎、console.log、let 變數",
    syntaxTopic: "用 console.log 觀察資料，並用 let 宣告可修改的變數。",
    plain: "今天先把 JavaScript 當成可以操作網頁的指令本。console.log 是練習時的觀察窗，let 則是替資料貼標籤，之後可以重複使用或修改。",
    example: `let taskText = "買牛奶";
console.log(taskText);

taskText = "買牛奶和麵包";
console.log(taskText);`,
    syntaxExercises: [
      ["宣告一個變數 myName，並用 console.log 印出來。", `let myName = "Jimmy";
console.log(myName);`],
      ["宣告 taskCount 為 0，接著把它改成 1。", `let taskCount = 0;
taskCount = 1;
console.log(taskCount);`]
    ],
    todoFeature: "建立 Todo App 的第一個資料：一筆任務文字。今天還不做畫面，只先用變數保存任務，並用 console.log 確認資料存在。",
    files: ["script.js"],
    todoCode: `let firstTask = "完成 Day01 JavaScript 練習";
console.log("第一筆任務：", firstTask);`,
    connection: "這是 Todo App 的資料起點。明天會用 if / else 判斷任務文字是否為空。",
    errors: ["忘記字串要加引號。", "同一個作用範圍內重複用 let 宣告同名變數。"],
    homework: "建立三個任務變數 task1、task2、task3，並全部印到 Console。",
    todoExercises: [
      ["建立 todayTask 變數保存今天要做的事。", `let todayTask = "練習 console.log";
console.log(todayTask);`]
    ],
    keywords: "console.log let variable todo start"
  },
  {
    day: 2,
    title: "if / else 條件判斷",
    syntaxTopic: "用 if / else 根據條件決定程式要走哪一條路。",
    plain: "Todo App 不能接受空白任務。if 就像守門員：條件成立才讓程式繼續做某件事，否則走 else 的路。",
    example: `const text = "";

if (text === "") {
  console.log("請輸入任務");
} else {
  console.log("可以新增任務");
}`,
    syntaxExercises: [
      ["如果 score 大於等於 60，印出及格，否則印出不及格。", `const score = 72;
if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}`],
      ["如果 taskText 是空字串，印出「不能新增」。", `const taskText = "";
if (taskText === "") {
  console.log("不能新增");
}`]
    ],
    todoFeature: "替 Todo App 加入第一個規則：任務文字不能是空白。",
    files: ["script.js"],
    todoCode: `let taskText = "";

if (taskText === "") {
  console.log("任務不可為空");
} else {
  console.log("新增任務：" + taskText);
}`,
    connection: "昨天只有保存任務文字，今天開始檢查資料是否合理。",
    errors: ["把比較寫成 taskText = \"\"，這會變成賦值。", "條件後面多加分號，導致 if 區塊失效。"],
    homework: "建立 taskText，分別測試空字串與非空字串的輸出結果。",
    todoExercises: [
      ["寫一段判斷，taskText 長度為 0 時不要新增。", `if (taskText.length === 0) {
  console.log("請輸入任務");
}`]
    ],
    keywords: "if else condition empty todo validation"
  },
  {
    day: 3,
    title: "DOM 基礎、querySelector、按鈕 click 事件",
    syntaxTopic: "用 querySelector 找 HTML 元素，用 click 事件回應使用者。",
    plain: "DOM 是瀏覽器把 HTML 轉成可操作物件後的結果。Todo App 需要按鈕，所以今天學怎麼找到按鈕並監聽點擊。",
    example: `const button = document.querySelector("#addButton");

button.addEventListener("click", () => {
  console.log("按鈕被點了");
});`,
    syntaxExercises: [
      ["找到 id 為 title 的元素，將文字改成 Todo App。", `const title = document.querySelector("#title");
title.textContent = "Todo App";`],
      ["替 button 綁定 click，點擊時印出 clicked。", `const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("clicked");
});`]
    ],
    todoFeature: "建立 Todo App 的基本 HTML：輸入框、按鈕、清單。按下新增按鈕時，先在 Console 顯示訊息。",
    files: ["index.html", "script.js"],
    todoCode: `<input id="taskInput" placeholder="輸入任務">
<button id="addButton">新增</button>
<ul id="taskList"></ul>

<script>
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => {
  console.log("準備新增任務");
});
</script>`,
    connection: "Day02 的空白檢查會放進 click 事件裡，讓按鈕真的負責新增流程。",
    errors: ["script 太早執行，HTML 還沒出現，querySelector 得到 null。", "id 選擇器忘記加 #。"],
    homework: "做出一個按鈕，點擊後把頁面標題改成「我的 Todo」。",
    todoExercises: [
      ["點擊新增按鈕時，讀取 #taskInput 元素並印出它。", `const input = document.querySelector("#taskInput");
console.log(input);`]
    ],
    keywords: "DOM querySelector click addEventListener button"
  },
  {
    day: 4,
    title: "input.value、空白輸入、=== 與 == 差別",
    syntaxTopic: "用 input.value 讀取輸入框內容，並用 === 做嚴格比較。",
    plain: "使用者輸入的資料會放在 input.value。它一開始是字串，所以判斷空白、數字轉換、相等比較都要小心。",
    example: `const input = document.querySelector("#taskInput");
const text = input.value.trim();

if (text === "") {
  console.log("空白任務");
}`,
    syntaxExercises: [
      ["讀取 #nameInput 的 value，並去掉前後空白。", `const name = document.querySelector("#nameInput").value.trim();`],
      ["說明 5 == '5' 與 5 === '5' 的差別。", `console.log(5 == "5");  // true，會轉型
console.log(5 === "5"); // false，型別不同`]
    ],
    todoFeature: "讓新增按鈕讀取輸入框文字，並阻止空白任務進入清單。",
    files: ["script.js"],
    todoCode: `addButton.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    console.log("請輸入任務");
    return;
  }

  console.log("新增：" + text);
});`,
    connection: "Day03 的 click 事件現在接上 Day02 的空白檢查，按鈕開始有真正行為。",
    errors: ["拿 input 元素本身和字串比較，而不是比較 input.value。", "忘記 trim，輸入空格也會被當成有效任務。"],
    homework: "當輸入空白時顯示提示，輸入內容時顯示「準備新增：內容」。",
    todoExercises: [
      ["在新增成功後清空輸入框。", `taskInput.value = "";`]
    ],
    keywords: "input value trim strict equality return"
  },
  {
    day: 5,
    title: "計數器、function 基礎、updateCount()",
    syntaxTopic: "用 function 將重複步驟命名，並建立畫面更新函式。",
    plain: "Todo App 會不斷新增、刪除、完成任務。只要資料改變，就要更新畫面或統計，這些重複步驟適合包成 function。",
    example: `let count = 0;

function updateCount() {
  console.log("目前任務數：" + count);
}

count += 1;
updateCount();`,
    syntaxExercises: [
      ["寫 addOne() 讓 count 加 1。", `function addOne() {
  count += 1;
}`],
      ["寫 resetCount() 讓 count 歸零並呼叫 updateCount。", `function resetCount() {
  count = 0;
  updateCount();
}`]
    ],
    todoFeature: "新增任務數統計。每次成功新增任務，就讓 count 增加並更新顯示。",
    files: ["index.html", "script.js"],
    todoCode: `<p id="taskCount">目前 0 筆任務</p>

let taskCount = 0;
const countText = document.querySelector("#taskCount");

function updateCount() {
  countText.textContent = "目前 " + taskCount + " 筆任務";
}`,
    connection: "Day04 讀到有效文字後，現在可以同時更新任務數。",
    errors: ["改了 count 但忘記呼叫 updateCount。", "函式只宣告不會自動執行，必須呼叫。"],
    homework: "建立 decreaseCount()，之後刪除任務時可以讓任務數減 1。",
    todoExercises: [
      ["新增成功時讓 taskCount 加 1 並更新畫面。", `taskCount += 1;
updateCount();`]
    ],
    keywords: "function counter updateCount state"
  },
  {
    day: 6,
    title: "style 操作、改顏色、顯示隱藏、文字大小",
    syntaxTopic: "用 element.style 快速修改元素的視覺樣式。",
    plain: "JavaScript 可以直接改 CSS。今天先用 style 做簡單互動，之後會改用 classList 管理更乾淨的狀態。",
    example: `const message = document.querySelector("#message");
message.style.color = "tomato";
message.style.fontSize = "18px";
message.style.display = "block";`,
    syntaxExercises: [
      ["把 #message 文字改成綠色。", `document.querySelector("#message").style.color = "green";`],
      ["點擊按鈕後隱藏 .hint。", `document.querySelector(".hint").style.display = "none";`]
    ],
    todoFeature: "加入錯誤提示文字：空白任務時顯示紅色提示，輸入有效任務後隱藏提示。",
    files: ["index.html", "script.js"],
    todoCode: `<p id="errorText" style="display:none;">請輸入任務</p>

if (text === "") {
  errorText.style.display = "block";
  errorText.style.color = "tomato";
  return;
}

errorText.style.display = "none";`,
    connection: "Day04 的空白判斷不只印 Console，現在會回饋到畫面。",
    errors: ["CSS 的 font-size 在 JS 要寫成 fontSize。", "忘記加 px，導致尺寸無效。"],
    homework: "當任務新增成功時，顯示綠色的「新增成功」訊息。",
    todoExercises: [
      ["把提示文字字體改成 14px。", `errorText.style.fontSize = "14px";`]
    ],
    keywords: "style color display fontSize message"
  },
  {
    day: 7,
    title: "Todo App 新增項目、innerHTML",
    syntaxTopic: "用 template literal 和 innerHTML 將資料轉成清單項目。",
    plain: "今天 Todo App 第一次真的把任務放到頁面。innerHTML 很直覺，適合練習資料如何變成畫面。",
    example: `const text = "買牛奶";
taskList.innerHTML += \`<li>\${text}</li>\`;`,
    syntaxExercises: [
      ["用模板字串產生一個 li，內容是 taskText。", "const html = `<li>${taskText}</li>`;"],
      ["把 html 加到 list.innerHTML 後面。", `list.innerHTML += html;`]
    ],
    todoFeature: "按下新增後，任務會出現在 ul 清單中，並清空輸入框。",
    files: ["script.js"],
    todoCode: `function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  taskList.innerHTML += \`<li class="task-item">\${text}</li>\`;
  taskInput.value = "";
  taskCount += 1;
  updateCount();
}`,
    connection: "Day04 的讀取輸入、Day05 的統計、Day06 的提示，都接到 addTask 這個流程裡。",
    errors: ["直接插入使用者輸入可能造成 HTML 注入，正式專案會改用更安全的方式。", "忘記清空 input，使用者要手動刪字。"],
    homework: "新增任務後，讓輸入框自動 focus 回去。",
    todoExercises: [
      ["新增成功後讓 taskInput 重新取得焦點。", `taskInput.focus();`]
    ],
    keywords: "todo add innerHTML template literal li"
  },
  {
    day: 8,
    title: "Todo App 刪除與完成按鈕、querySelectorAll、forEach",
    syntaxTopic: "用 querySelectorAll 取得多個按鈕，並用 forEach 一個一個綁事件。",
    plain: "每筆任務都需要自己的完成與刪除按鈕。今天練習批次找到按鈕，點哪個就操作哪一筆。",
    example: `document.querySelectorAll(".delete").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("li").remove();
  });
});`,
    syntaxExercises: [
      ["找出所有 .task-item 並印出文字。", `document.querySelectorAll(".task-item").forEach((item) => {
  console.log(item.textContent);
});`],
      ["點擊完成按鈕時切換 finished class。", `button.closest("li").classList.toggle("finished");`]
    ],
    todoFeature: "每筆任務加入完成與刪除按鈕，可以切換完成狀態，也可以從畫面刪除。",
    files: ["script.js", "style.css"],
    todoCode: `taskList.innerHTML += \`
  <li class="task-item">
    <span>\${text}</span>
    <button class="finish">完成</button>
    <button class="delete">刪除</button>
  </li>
\`;

bindTaskButtons();`,
    connection: "Day07 只會新增文字，今天新增互動按鈕，讓清單開始像真正 App。",
    errors: ["新增新任務後忘記重新綁定按鈕事件。", "closest 選錯層級，刪到錯的元素。"],
    homework: "完成任務時加上刪除線樣式。",
    todoExercises: [
      ["寫 CSS 讓 .finished span 加上 line-through。", `.finished span {
  text-decoration: line-through;
  color: #888;
}`]
    ],
    keywords: "querySelectorAll forEach delete finish classList closest"
  },
  {
    day: 9,
    title: "Array、push、localStorage.setItem、JSON.stringify",
    syntaxTopic: "用 Array 保存多筆任務，並把資料轉成字串存入 localStorage。",
    plain: "只靠 innerHTML，資料其實沒有被好好管理。Array 可以保存任務清單，localStorage 則能先把資料存在瀏覽器。",
    example: `const tasks = [];
tasks.push("買牛奶");

localStorage.setItem("tasks", JSON.stringify(tasks));`,
    syntaxExercises: [
      ["建立 tasks 陣列並 push 一筆任務。", `const tasks = [];
tasks.push("寫 JS 練習");`],
      ["把 tasks 存進 localStorage。", `localStorage.setItem("tasks", JSON.stringify(tasks));`]
    ],
    todoFeature: "新增任務時不再只改畫面，而是先把文字 push 到 tasks 陣列，再儲存。",
    files: ["script.js"],
    todoCode: `let tasks = [];

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}`,
    connection: "Day07 的新增畫面會被保留，但資料來源開始改成 tasks 陣列。",
    errors: ["localStorage 只能存字串，直接存陣列會不好還原。", "push 後忘記 setItem，重新整理就消失。"],
    homework: "新增三筆任務，觀察 DevTools 裡 localStorage 的 tasks 內容。",
    todoExercises: [
      ["把一筆新任務加到陣列開頭。", `tasks.unshift(text);`]
    ],
    keywords: "array push localStorage setItem JSON.stringify"
  },
  {
    day: 10,
    title: "localStorage.getItem、JSON.parse、資料保留",
    syntaxTopic: "用 getItem 讀資料，並用 JSON.parse 還原成陣列。",
    plain: "昨天會存，今天要會讀。Todo App 重新整理後還能看見任務，關鍵就是開啟頁面時先讀 localStorage。",
    example: `const saved = localStorage.getItem("tasks");
const tasks = saved ? JSON.parse(saved) : [];`,
    syntaxExercises: [
      ["讀取 tasks，沒有資料時使用空陣列。", `const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");`],
      ["印出讀回來的第一筆任務。", `console.log(tasks[0]);`]
    ],
    todoFeature: "頁面載入時讀取已存任務，並把它們重新顯示到清單。",
    files: ["script.js"],
    todoCode: `let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}`,
    connection: "Day09 的 setItem 終於派上用場：今天 App 會從昨天存下來的資料恢復狀態。",
    errors: ["忘記提供預設 []，第一次開站可能沒有資料。", "JSON 格式被手動改壞時 parse 會失敗。"],
    homework: "重新整理頁面，確認新增的任務仍然存在。",
    todoExercises: [
      ["建立 loadTasks() 回傳 localStorage 中的任務陣列。", `function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}`]
    ],
    keywords: "localStorage getItem JSON.parse persistence"
  },
  {
    day: 11,
    title: "Refactor、saveTasks、renderTasks、deleteTask",
    syntaxTopic: "重構：把儲存、渲染、刪除拆成獨立函式。",
    plain: "功能開始變多時，全部塞在 click 事件會很難維護。今天把程式整理成幾個清楚的動作。",
    example: `function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
}`,
    syntaxExercises: [
      ["寫 saveTasks() 儲存 tasks。", `function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}`],
      ["寫 deleteTask(index) 移除指定位置。", `function deleteTask(index) {
  tasks.splice(index, 1);
}`]
    ],
    todoFeature: "Todo App 進入可維護版本：新增、刪除、儲存、渲染都拆成 function。",
    files: ["script.js"],
    todoCode: `function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function addTask() {
  tasks.push(taskInput.value.trim());
  saveTasks();
  renderTasks();
}`,
    connection: "Day10 已經有保存與讀取，今天用函式包裝，後面新增功能時不用到處複製程式碼。",
    errors: ["刪除資料後只 render，忘記 save。", "函式名稱不清楚，之後自己也看不懂。"],
    homework: "整理目前程式，讓 addTask 只負責新增流程。",
    todoExercises: [
      ["新增任務後應呼叫哪兩個函式？", `saveTasks();
renderTasks();`]
    ],
    keywords: "refactor saveTasks renderTasks deleteTask function"
  },
  {
    day: 12,
    title: "Object、task.text、task.finished、完成狀態保存",
    syntaxTopic: "用 Object 保存任務文字與完成狀態。",
    plain: "任務不再只是字串。它會有文字、完成狀態、日期、分類等資料，所以要用物件表示一筆完整任務。",
    example: `const task = {
  text: "讀 JavaScript",
  finished: false
};

task.finished = true;`,
    syntaxExercises: [
      ["建立一個 task 物件，包含 text 與 finished。", `const task = {
  text: "練習 Todo",
  finished: false
};`],
      ["切換 task.finished 的值。", `task.finished = !task.finished;`]
    ],
    todoFeature: "tasks 陣列改成儲存物件，完成狀態也能保存到 localStorage。",
    files: ["script.js"],
    todoCode: `tasks.push({
  text,
  finished: false
});

function toggleTask(index) {
  tasks[index].finished = !tasks[index].finished;
  saveTasks();
  renderTasks();
}`,
    connection: "Day08 的完成狀態只在畫面上，今天會真正寫回資料。",
    errors: ["舊資料是字串，新資料是物件，轉換期間要小心格式。", "屬性拼字 finished 寫錯會產生 undefined。"],
    homework: "讓完成狀態重新整理後仍保留。",
    todoExercises: [
      ["在 renderTasks 中依 task.finished 決定 class。", `const className = task.finished ? "task-item finished" : "task-item";`]
    ],
    keywords: "object property task.text task.finished state"
  }
];

const laterLessons = [
  [13, "map，把資料轉成新資料，把 tasks 轉成 HTML", "map", "把每筆 task 轉成 HTML 字串", "用 map + join 重寫 renderTasks。", "renderTasks 由手動累加改成資料轉畫面。", `taskList.innerHTML = tasks.map((task, index) => \`
  <li class="\${task.finished ? "finished" : ""}">
    \${task.text}
    <button onclick="toggleTask(\${index})">完成</button>
  </li>
\`).join("");`, "map render join html"],
  [14, "filter，篩選完成 / 未完成資料", "filter", "只保留符合條件的任務", "加入全部、完成、未完成篩選。", "renderTasks 可以顯示不同資料集合。", `const completed = tasks.filter((task) => task.finished);
const pending = tasks.filter((task) => !task.finished);`, "filter completed pending"],
  [15, "renderTasks(data)，讓 render 可以接收不同資料", "parameter", "函式參數讓 render 更彈性", "renderTasks(data) 接收要顯示的任務。", "Day14 篩選後的資料可以直接傳入 renderTasks。", `function renderTasks(data = tasks) {
  taskList.innerHTML = data.map(taskTemplate).join("");
}`, "renderTasks data parameter"],
  [16, "includes、搜尋功能、input 事件", "includes", "判斷文字是否包含關鍵字", "加入任務搜尋框，即時篩選清單。", "搜尋結果透過 renderTasks(result) 顯示。", `searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.trim().toLowerCase();
  const result = tasks.filter((task) =>
    task.text.toLowerCase().includes(keyword)
  );
  renderTasks(result);
});`, "includes search input"],
  [17, "sort、unshift、完成項目排最後", "sort", "排序資料顯示順序", "新增任務放最上方，完成任務排到最後。", "排序只改顯示或改資料都可以，但要保持一致。", `tasks.unshift(createTask(text));
const sorted = [...tasks].sort((a, b) => Number(a.finished) - Number(b.finished));`, "sort unshift completed last"],
  [18, "prompt 編輯任務", "prompt", "用瀏覽器輸入視窗取得新文字", "加入編輯按鈕，修改任務文字。", "編輯後要 saveTasks 和 renderTasks。", `function editTask(index) {
  const text = prompt("修改任務", tasks[index].text);
  if (text === null || text.trim() === "") return;
  tasks[index].text = text.trim();
  saveTasks();
  renderTasks();
}`, "prompt edit"],
  [19, "Date、任務建立日期", "Date", "記錄任務建立時間", "新增 createdAt，顯示建立日期。", "createTask 開始集中產生任務物件。", `function createTask(text) {
  return {
    text,
    finished: false,
    createdAt: new Date().toISOString()
  };
}`, "Date createdAt"],
  [20, "統計功能、filter + length、updateStats()", "filter + length", "用資料計算統計", "顯示總數、完成數、未完成數。", "所有資料變更後都要 updateStats。", `function updateStats() {
  const done = tasks.filter((task) => task.finished).length;
  stats.textContent = \`完成 \${done} / \${tasks.length}\`;
}`, "stats updateStats length"],
  [21, "清除已完成、用 filter 真正刪除資料", "filter delete", "保留未完成就是刪除已完成", "加入清除已完成按鈕。", "Day14 是篩選顯示，今天是真的刪除資料。", `function clearCompleted() {
  tasks = tasks.filter((task) => !task.finished);
  saveTasks();
  renderTasks();
}`, "clear completed filter"],
  [22, "classList、active 狀態按鈕", "classList", "用 class 管理樣式狀態", "篩選按鈕會顯示 active 狀態。", "樣式狀態不再用 style 分散修改。", `filterButtons.forEach((button) => {
  button.classList.toggle("active", button.dataset.filter === currentFilter);
});`, "classList active filter"],
  [23, "keydown、event.key、Enter 快速新增", "keydown", "監聽鍵盤輸入", "按 Enter 可以快速新增任務。", "新增流程仍呼叫 addTask，不重寫一份。", `taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});`, "keydown Enter"],
  [24, "空狀態畫面、data.length === 0、return", "early return", "沒有資料時先顯示空狀態", "搜尋或篩選無結果時顯示提示畫面。", "renderTasks 負責所有清單狀態。", `if (data.length === 0) {
  taskList.innerHTML = "<li class='empty'>目前沒有任務</li>";
  return;
}`, "empty state return"],
  [25, "priority 優先級、high / medium / low", "data class", "根據資料決定 CSS class", "任務加入優先級欄位與樣式。", "任務物件再次擴充，render 依資料決定外觀。", `const task = {
  text,
  finished: false,
  priority: prioritySelect.value
};`, "priority class"],
  [26, "id 系統、Date.now()、用 id 取代 index", "id", "用穩定 id 找資料", "任務操作改用 id，避免排序後 index 錯亂。", "Day17 排序後 index 可能變，id 讓操作更穩定。", `function createTask(text) {
  return { id: Date.now(), text, finished: false };
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}`, "Date.now id"],
  [27, "category 分類、資料模型擴充", "object model", "任務可以有更多欄位", "加入分類 select，例如 work、study、life。", "createTask 集中處理新欄位。", `function createTask(text) {
  return {
    id: Date.now(),
    text,
    category: categorySelect.value,
    finished: false
  };
}`, "category model"],
  [28, "分類篩選、多條件 filter、&& 與 ||", "&& ||", "組合多個篩選條件", "同時支援狀態篩選與分類篩選。", "Day14 的 filter 升級為多條件。", `const result = tasks.filter((task) => {
  const matchStatus = currentFilter === "all" || task.finished === (currentFilter === "done");
  const matchCategory = currentCategory === "all" || task.category === currentCategory;
  return matchStatus && matchCategory;
});`, "multi filter && ||"],
  [29, "CSS 卡片化、task-card、finished class", "CSS class", "用 class 做出任務卡片", "任務清單變成卡片式 UI。", "render 產生 class，CSS 負責美化。", `.task-card {
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.task-card.finished {
  opacity: .6;
}`, "css task-card"],
  [30, "GitHub Pages 部署觀念", "deploy", "靜態網站只需要三個檔案即可部署", "整理 index.html / style.css / script.js，準備上 GitHub Pages。", "目前 App 無後端，很適合靜態部署。", `// 專案結構
index.html
style.css
script.js`, "github pages deploy"],
  [31, "版面美化、max-width、margin auto、button 美化", "layout css", "用容器寬度讓畫面好讀", "優化 Todo App 外觀與按鈕狀態。", "Day29 卡片化後，今天整理整體版面。", `.app {
  max-width: 720px;
  margin: 40px auto;
  padding: 24px;
}`, "max-width margin button"],
  [32, "響應式設計、meta viewport、@media、手機版", "responsive", "讓手機和桌機都好用", "加入 mobile 版排版。", "版面美化後，要確認小螢幕也能使用。", `@media (max-width: 600px) {
  .task-form {
    grid-template-columns: 1fr;
  }
}`, "responsive media viewport"],
  [33, "Dark Mode、classList.toggle、contains、localStorage 保存", "dark mode", "切換 class 並保存偏好", "Todo App 加入深色模式。", "沿用 localStorage 的保存觀念。", `function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}`, "dark mode localStorage"],
  [34, "Modal 編輯視窗、hidden class、editingId", "modal state", "用自製視窗取代 prompt", "建立編輯 Modal，保存正在編輯的 id。", "Day18 的 prompt 編輯升級成正式 UI。", `let editingId = null;

function openEditModal(id) {
  editingId = id;
  modal.classList.remove("hidden");
}`, "modal editingId"],
  [35, "Toast 通知、setTimeout", "setTimeout", "短暫顯示操作結果", "新增、刪除、儲存後顯示 Toast。", "使用者操作後有即時回饋。", `function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}`, "toast setTimeout"],
  [36, "動畫效果、transition、刪除 / 完成視覺回饋", "transition", "讓狀態變化更自然", "任務完成、刪除加入視覺回饋。", "Day35 是文字回饋，今天補上動畫回饋。", `.task-card {
  transition: transform .2s, opacity .2s;
}
.task-card.finished {
  opacity: .55;
}`, "animation transition"],
  [37, "程式重構，整理 function 與流程", "architecture", "把程式分成資料、畫面、事件三層", "整理 Todo App 的 function 順序與命名。", "功能完整後，重構讓作品更像正式專案。", `function init() {
  loadTasks();
  bindEvents();
  renderTasks();
  updateStats();
}`, "refactor architecture init"],
  [38, "專案分檔，HTML / CSS / JS 分離", "separation", "讓結構、樣式、行為各自負責", "確認 Todo App 只用 index.html、style.css、script.js。", "這是 GitHub Pages 與作品集最清楚的格式。", `<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>`, "split files html css js"],
  [39, "Code Review，檢查 bug、命名、重複程式碼", "review", "用清單檢查作品品質", "檢查 Todo App 的錯誤情境與命名。", "正式展示前先當自己的 reviewer。", `// Review checklist
// 1. 空白任務是否被阻止？
// 2. localStorage 是否正常？
// 3. 重新整理後狀態是否保留？`, "code review checklist"],
  [40, "作品整理，README、功能說明、作品集展示", "portfolio", "把作品整理成能展示的樣子", "完成 Todo App README 與作品介紹。", "40 天的每日功能成長，最後收束成作品集。", `# Todo App

功能：
- 新增、刪除、完成任務
- 搜尋、分類、優先級
- localStorage 保存
- 深色模式`, "README portfolio"]
];

for (const [day, title, syntax, plain, feature, connection, code, keywords] of laterLessons) {
  dailyPlan.push({
    day,
    title,
    syntaxTopic: `今日語法：${syntax}。${plain}。`,
    plain: `${plain}。今天先用小範例理解語法，再把它接到 Todo App。`,
    example: code,
    syntaxExercises: [
      [`用 ${syntax} 寫一個最小練習。`, code],
      [`說明 ${syntax} 在 Todo App 中解決什麼問題。`, `${syntax} 讓 Todo App 可以做到：${feature}`]
    ],
    todoFeature: feature,
    files: day >= 29 ? ["index.html", "style.css", "script.js"] : ["script.js"],
    todoCode: code,
    connection,
    errors: [
      "只改畫面但忘記同步資料，重新整理後狀態會消失。",
      "把新功能寫成另一套流程，沒有接回既有 addTask、renderTasks、saveTasks。"
    ],
    homework: `把 Day${String(day).padStart(2, "0")} 的功能接到前一天版本，並測試新增、刪除、重新整理是否正常。`,
    todoExercises: [
      [`在 Todo App 中實作：${feature}`, code]
    ],
    keywords
  });
}

const lessons = dailyPlan
  .sort((a, b) => a.day - b.day)
  .map((item) => ({
    ...item,
    exercises: [
      ...item.syntaxExercises.map(([question, answer], index) => ({
        id: `${item.day}-syntax-${index + 1}`,
        type: "語法練習",
        question,
        answer
      })),
      ...item.todoExercises.map(([question, answer], index) => ({
        id: `${item.day}-todo-${index + 1}`,
        type: "Todo App 實作",
        question,
        answer
      }))
    ]
  }));

const elements = {
  lessonContent: document.querySelector("#lessonContent"),
  dayNav: document.querySelector("#dayNav"),
  mainContent: document.querySelector("#mainContent"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  favoriteCount: document.querySelector("#favoriteCount"),
  wrongCount: document.querySelector("#wrongCount"),
  searchDialog: document.querySelector("#searchDialog"),
  searchInput: document.querySelector("#searchInput"),
  searchResults: document.querySelector("#searchResults"),
  collectionDialog: document.querySelector("#collectionDialog"),
  collectionTitle: document.querySelector("#collectionTitle"),
  collectionLabel: document.querySelector("#collectionLabel"),
  collectionList: document.querySelector("#collectionList"),
  sidebar: document.querySelector("#sidebar"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  sidebarClose: document.querySelector("#sidebarClose"),
  backdrop: document.querySelector("#backdrop"),
  themeToggle: document.querySelector("#themeToggle"),
  toast: document.querySelector("#toast")
};

let favorites = JSON.parse(localStorage.getItem(STORAGE.favorites) || "[]");
let wrongBook = JSON.parse(localStorage.getItem(STORAGE.wrongBook) || "[]");
let visited = JSON.parse(localStorage.getItem(STORAGE.visited) || "[]");
let toastTimer;
let currentDay = clampDay(Number(location.hash.replace("#day-", "")) || Number(localStorage.getItem(STORAGE.lastDay)) || 1);

function clampDay(day) {
  return Math.min(Math.max(day || 1, 1), 40);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderNavigation() {
  const groups = [
    ["打底與畫面互動", 1, 8],
    ["資料保存與重構", 9, 18],
    ["功能完整化", 19, 28],
    ["作品化與發佈", 29, 40]
  ];

  elements.dayNav.innerHTML = groups.map(([label, start, end]) => `
    <div class="nav-phase">${label}</div>
    ${lessons.slice(start - 1, end).map((item) => `
      <button class="day-link ${item.day === currentDay ? "active" : ""}" type="button" data-day="${item.day}">
        <span class="day-number">DAY ${String(item.day).padStart(2, "0")}</span>
        <span class="day-title">${escapeHTML(item.title)}</span>
      </button>
    `).join("")}
  `).join("");
}

function codeBlock(code, label = "JavaScript") {
  return `<div class="code-shell">
    <div class="code-head"><span class="code-dots">● ● ●</span><span>${label}</span><button class="copy-button" type="button" data-copy>複製</button></div>
    <pre><code>${escapeHTML(code)}</code></pre>
  </div>`;
}

function list(items) {
  return `<ul class="clean-list">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function renderLesson() {
  const item = lessons[currentDay - 1];
  if (!visited.includes(currentDay)) {
    visited.push(currentDay);
    localStorage.setItem(STORAGE.visited, JSON.stringify(visited));
  }

  const favoriteActive = favorites.includes(currentDay);
  elements.lessonContent.innerHTML = `
    <header class="lesson-hero">
      <div class="lesson-kicker">DAY ${String(item.day).padStart(2, "0")}</div>
      <h1>${escapeHTML(item.title)}</h1>
      <p>今天不是背語法百科，而是先學一個必要語法，再把它接到每天成長的 Todo App。</p>
      <div class="lesson-meta">
        <span class="tag">今日語法練習</span>
        <span class="tag">Todo App 今日進度</span>
        <span class="tag">跟做作品路線</span>
      </div>
      <button class="button favorite-button ${favoriteActive ? "active" : ""}" type="button" data-favorite>
        ${favoriteActive ? "★ 已收藏" : "☆ 收藏本章"}
      </button>
    </header>

    <section class="lesson-section">
      <p class="section-label">PART 1</p>
      <h2>一、今天先學的語法</h2>
      <div class="two-line-card">
        <div>
          <h3>語法主題</h3>
          <p>${escapeHTML(item.syntaxTopic)}</p>
        </div>
        <div>
          <h3>白話解釋</h3>
          <p>${escapeHTML(item.plain)}</p>
        </div>
      </div>
      ${codeBlock(item.example)}
    </section>

    <section class="lesson-section">
      <p class="section-label">PART 2</p>
      <h2>二、語法小練習</h2>
      <div class="exercise-grid">
        ${item.exercises.filter((exercise) => exercise.type === "語法練習").map((exercise, index) => renderExercise(item, exercise, index)).join("")}
      </div>
    </section>

    <section class="lesson-section">
      <p class="section-label">PART 3</p>
      <h2>三、今天 Todo App 加上的功能</h2>
      <p>${escapeHTML(item.todoFeature)}</p>
      <div class="todo-bridge">
        <strong>今天要修改哪些檔案</strong>
        ${list(item.files)}
      </div>
      <div class="syntax-note"><strong>如何接到昨天的版本</strong>${escapeHTML(item.connection)}</div>
    </section>

    <section class="lesson-section">
      <p class="section-label">PART 4</p>
      <h2>四、Todo App 關鍵程式碼</h2>
      ${codeBlock(item.todoCode)}
    </section>

    <section class="lesson-section">
      <p class="section-label">PART 5</p>
      <h2>五、常見錯誤</h2>
      <div class="error-box"><strong>今天最容易卡住的地方</strong>${list(item.errors)}</div>
    </section>

    <section class="lesson-section">
      <p class="section-label">PART 6</p>
      <h2>六、今日作業</h2>
      <p>${escapeHTML(item.homework)}</p>
      <div class="exercise-grid todo-practice">
        ${item.exercises.filter((exercise) => exercise.type === "Todo App 實作").map((exercise, index) => renderExercise(item, exercise, index)).join("")}
      </div>
    </section>

    <section class="lesson-section">
      <p class="section-label">PART 7</p>
      <h2>七、答案與提示</h2>
      <p>每題旁邊都有「顯示答案」按鈕。建議先自己做一次，再展開參考答案；不熟的題目可以加入錯題本。</p>
    </section>

    <footer class="lesson-footer">
      <button class="button" type="button" data-go-day="${item.day - 1}" ${item.day === 1 ? "disabled" : ""}>← 上一天</button>
      <span class="day-position">Day ${item.day} / ${lessons.length}</span>
      <button class="button primary next" type="button" data-go-day="${item.day + 1}" ${item.day === lessons.length ? "disabled" : ""}>下一天 →</button>
    </footer>`;

  localStorage.setItem(STORAGE.lastDay, String(currentDay));
  updateStats();
}

function renderExercise(item, exercise, index) {
  const inWrongBook = wrongBook.some((entry) => entry.id === exercise.id);
  return `
    <article class="exercise-card">
      <div class="exercise-body">
        <div class="exercise-type">${escapeHTML(exercise.type)}</div>
        <div class="exercise-top">
          <span class="exercise-number">${index + 1}</span>
          <div class="exercise-question">${escapeHTML(exercise.question)}</div>
        </div>
        <div class="exercise-actions">
          <button class="answer-toggle" type="button" data-answer-toggle="${exercise.id}" aria-expanded="false">顯示答案</button>
          <button class="wrong-toggle ${inWrongBook ? "active" : ""}" type="button" data-wrong-toggle="${exercise.id}">${inWrongBook ? "✓ 已加入錯題本" : "+ 加入錯題本"}</button>
        </div>
      </div>
      <div class="answer" id="answer-${exercise.id}" hidden><strong>參考答案</strong><br>${formatAnswer(exercise.answer)}</div>
    </article>`;
}

function formatAnswer(answer) {
  if (answer.includes("\n") || answer.includes(";") || answer.includes("{") || answer.includes("<")) return codeBlock(answer);
  return escapeHTML(answer);
}

function goToDay(day, updateHash = true) {
  const nextDay = clampDay(Number(day));
  if (nextDay === currentDay && updateHash) {
    scrollMainContentToTop();
    closeOverlays();
    return;
  }
  currentDay = nextDay;
  renderNavigation();
  renderLesson();
  closeOverlays();
  scrollMainContentToTop();
  if (updateHash) history.replaceState(null, "", `#day-${currentDay}`);
}

function scrollMainContentToTop() {
  elements.mainContent.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleAnswer(button) {
  const answer = document.querySelector(`#answer-${button.dataset.answerToggle}`);
  const willOpen = answer.hidden;
  answer.hidden = !willOpen;
  button.textContent = willOpen ? "隱藏答案" : "顯示答案";
  button.setAttribute("aria-expanded", String(willOpen));
}

function toggleFavorite() {
  if (favorites.includes(currentDay)) {
    favorites = favorites.filter((day) => day !== currentDay);
    showToast("已移除收藏");
  } else {
    favorites.push(currentDay);
    showToast("已收藏本章");
  }
  localStorage.setItem(STORAGE.favorites, JSON.stringify(favorites));
  renderLesson();
}

function toggleWrong(exerciseId) {
  const item = lessons[currentDay - 1];
  const exercise = item.exercises.find((entry) => entry.id === exerciseId);
  const exists = wrongBook.some((entry) => entry.id === exerciseId);

  if (exists) {
    wrongBook = wrongBook.filter((entry) => entry.id !== exerciseId);
    showToast("已從錯題本移除");
  } else {
    wrongBook.push({ id: exercise.id, day: item.day, title: item.title, type: exercise.type, question: exercise.question, answer: exercise.answer });
    showToast("已加入錯題本");
  }

  localStorage.setItem(STORAGE.wrongBook, JSON.stringify(wrongBook));
  renderLesson();
}

function updateStats() {
  elements.favoriteCount.textContent = favorites.length;
  elements.wrongCount.textContent = wrongBook.length;
  elements.progressText.textContent = `${visited.length} / ${lessons.length}`;
  elements.progressBar.style.width = `${(visited.length / lessons.length) * 100}%`;
}

function openSearch() {
  closeOverlays();
  elements.searchDialog.hidden = false;
  elements.backdrop.hidden = false;
  elements.searchInput.value = "";
  renderSearchResults("");
  requestAnimationFrame(() => elements.searchInput.focus());
}

function renderSearchResults(query) {
  const keyword = query.trim().toLowerCase();
  const results = lessons.filter((item) => {
    const content = [
      item.title,
      item.syntaxTopic,
      item.plain,
      item.example,
      item.todoFeature,
      item.todoCode,
      item.connection,
      item.homework,
      item.keywords,
      ...item.errors,
      ...item.exercises.map((entry) => `${entry.type} ${entry.question} ${entry.answer}`)
    ].join(" ").toLowerCase();
    return content.includes(keyword);
  });

  elements.searchResults.innerHTML = results.length
    ? results.map(resultButton).join("")
    : '<div class="empty-state">找不到相關章節，試試其他關鍵字。</div>';
}

function resultButton(item) {
  return `<button class="result-item" type="button" data-go-day="${item.day}"><span class="result-day">DAY ${String(item.day).padStart(2, "0")}</span><span class="result-copy"><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.todoFeature.slice(0, 58))}</small></span></button>`;
}

function openCollection(type) {
  closeOverlays();
  const isFavorites = type === "favorites";
  elements.collectionTitle.textContent = isFavorites ? "我的收藏" : "錯題本";
  elements.collectionLabel.textContent = isFavorites ? "BOOKMARKS" : "REVIEW LIST";

  if (isFavorites) {
    const items = favorites.map((day) => lessons[day - 1]).filter(Boolean);
    elements.collectionList.innerHTML = items.length
      ? items.map(resultButton).join("")
      : '<div class="empty-state">還沒有收藏章節。看到想複習的內容時，按下「收藏本章」。</div>';
  } else {
    elements.collectionList.innerHTML = wrongBook.length
      ? wrongBook.map((entry) => `<button class="result-item" type="button" data-go-day="${entry.day}"><span class="result-day">DAY ${String(entry.day).padStart(2, "0")}</span><span class="result-copy"><strong>${escapeHTML(entry.question)}</strong><small>${escapeHTML(entry.title)} · ${escapeHTML(entry.type || "練習")} · 點擊返回</small></span></button>`).join("")
      : '<div class="empty-state">錯題本目前是空的。可在任一練習旁按「加入錯題本」。</div>';
  }

  elements.collectionDialog.hidden = false;
  elements.backdrop.hidden = false;
}

function closeOverlays() {
  elements.searchDialog.hidden = true;
  elements.collectionDialog.hidden = true;
  elements.backdrop.hidden = true;
  elements.sidebar.classList.remove("open");
  elements.sidebarToggle.setAttribute("aria-expanded", "false");
}

function toggleSidebar() {
  const isOpen = elements.sidebar.classList.toggle("open");
  elements.sidebarToggle.setAttribute("aria-expanded", String(isOpen));
  elements.backdrop.hidden = !isOpen;
}

async function copyCode(button) {
  const code = button.closest(".code-shell").querySelector("code").textContent;
  try {
    await navigator.clipboard.writeText(code);
    button.textContent = "已複製";
    showToast("程式碼已複製");
    setTimeout(() => { button.textContent = "複製"; }, 1400);
  } catch {
    showToast("無法自動複製，請手動選取程式碼");
  }
}

function toggleTheme() {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem(STORAGE.theme, dark ? "dark" : "light");
  elements.themeToggle.textContent = dark ? "☀" : "☾";
  elements.themeToggle.setAttribute("aria-label", dark ? "切換淺色模式" : "切換深色模式");
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 1800);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const dayButton = event.target.closest("[data-day], [data-go-day]");
    if (dayButton && !dayButton.disabled) goToDay(dayButton.dataset.day || dayButton.dataset.goDay);

    const answerButton = event.target.closest("[data-answer-toggle]");
    if (answerButton) toggleAnswer(answerButton);

    if (event.target.closest("[data-favorite]")) toggleFavorite();

    const wrongButton = event.target.closest("[data-wrong-toggle]");
    if (wrongButton) toggleWrong(wrongButton.dataset.wrongToggle);

    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) copyCode(copyButton);

    if (event.target.closest("[data-close-dialog]")) closeOverlays();
  });

  document.querySelector("#searchOpen").addEventListener("click", openSearch);
  document.querySelector("#favoritesOpen").addEventListener("click", () => openCollection("favorites"));
  document.querySelector("#wrongBookOpen").addEventListener("click", () => openCollection("wrong"));
  elements.searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));
  elements.sidebarToggle.addEventListener("click", toggleSidebar);
  elements.sidebarClose.addEventListener("click", closeOverlays);
  elements.backdrop.addEventListener("click", closeOverlays);
  elements.themeToggle.addEventListener("click", toggleTheme);

  window.addEventListener("hashchange", () => {
    const hashDay = Number(location.hash.replace("#day-", ""));
    if (hashDay) goToDay(hashDay, false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeOverlays();
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      openSearch();
    }
  });
}

function init() {
  const savedTheme = localStorage.getItem(STORAGE.theme);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = savedTheme ? savedTheme === "dark" : prefersDark;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  elements.themeToggle.textContent = dark ? "☀" : "☾";
  elements.themeToggle.setAttribute("aria-label", dark ? "切換淺色模式" : "切換深色模式");

  renderNavigation();
  renderLesson();
  bindEvents();
  history.replaceState(null, "", `#day-${currentDay}`);
}

init();
