document.forms[0].addEventListener("submit", function(e){

  // 1 
  e.preventDefault();
  const idEl = document.forms[0].username;
  const idValue = idEl.value.trim();
  const pwEl = document.forms[0].password;
  const pwValue = pwEl.value.trim();

  // 2
  if(idValue === ""){
    alert("아이디를 입력해 주세요.");
    idEl.focus();
    return;
  }

  // 3
  if(idValue.indexOf("@") === -1){
    alert("아이디는 이메일 형식으로 입력해 주세요.");
    idEl.focus();
    return;
  }

  // 4
  if(pwValue.trim() === ""){
    alert("비밀번호를 입력해 주세요.");
    pwEl.focus();
    return;
  }

  // 5
  if(pwValue.trim().length <= 4){
    alert("비밀번호는 5자리 이상 입력해 주세요.")
    pwEl.focus();
  }

  // 6
  this.submit();
});