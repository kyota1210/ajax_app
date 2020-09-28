function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e)=> {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true );
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      // レスポンスとして返却されたメモのレコードを取得して代入
      const item = XHR.response.post;
      // HTMLを描画する場所を指定する際に使用する親要素の取得
      const list = document.getElementById("list");
      // メモの入力フォームをリセットするため、contentを取得
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時:${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      // このコードにより「メモの入力フォームに入力されたままの文字」はリセットされる
      formText.value = "";
    }
    e.preventDefault();
  });
}
window.addEventListener("load", memo);