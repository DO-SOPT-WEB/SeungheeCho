// 로그인 에러 모달 on/off 함수
async function modalToggle(setModalOpen) {
  await setModalOpen(true);
  setTimeout(() => {
    setModalOpen(false);
  }, 1000);
}

export default modalToggle;
