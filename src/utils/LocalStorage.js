// localStorage 저장{
export const saveUserInfo = (obj)=>{
    const saved = JSON.stringify(obj);
    localStorage.setItem("park_user",saved);
}

//localStorage 정보 가져오기
export const getUserInfo = ()=>{
    const saved = JSON.parse(localStorage.getItem("park_user"));
    return saved;
}

//로그아웃시 localStorage에서 삭제
export const deleteUserInfo = ()=>{
    localStorage.removeItem("park_user");
}
