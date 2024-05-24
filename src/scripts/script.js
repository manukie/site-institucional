function handleModal() {
    const button_1 = document.querySelector("#showMessage");
    const button_2 = document.querySelector("#openMessage");

    const modalContainer = document.querySelector("#modalController");
  
    button_1.addEventListener("click", () => {
      modalContainer.showModal();

      closeModal();
    });

    button_2.addEventListener("click", () => {
        modalContainer.showModal();

        closeModal();
      });
  }

  function closeModal() {
    const button_1 = document.querySelector("#closeModal");
    const button_2 = document.querySelector("#endModal");
    const modalContainer = document.querySelector("#modalController");
  
    button_1.addEventListener("click", () => {
      modalContainer.close();
    });

    button_2.addEventListener("click", () => {
        modalContainer.close();
      });
  }
  
  
  handleModal();


  