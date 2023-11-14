window.onload = function () {
    let element = document.getElementById('grid');

    addCardAdd();
    addGamesToGrid(15);

    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".btn-add");
    const closeModalBtn = document.querySelector(".btn-close");
    
    const closeModal = function () {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    };
    
    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
    
    const openModal = function () {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };
    
    openModalBtn.addEventListener("click", openModal);


    // modal edit

    const modalEdit = document.querySelector(".edit-modal");
    const overlayEdit = document.querySelector(".edit-overlay");
    const openModalEdit = document.querySelector(".card-game");
    const closeModalEdit = document.querySelector(".edit-close");
    
    const closeEdit = function () {
        modalEdit.classList.add("hidden");
        overlayEdit.classList.add("hidden");
    };
    
    closeModalEdit.addEventListener("click", closeEdit);
    overlayEdit.addEventListener("click", closeEdit);
    
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modalEdit.classList.contains("hidden")) {
        closeEdit();
      }
    });
    
    const openEdit = function () {
        modalEdit.classList.remove("hidden");
        overlayEdit.classList.remove("hidden");
    };
    
    openModalEdit.addEventListener("click", openEdit);
    
    document.getElementById('selectStore').addEventListener('change', ()  => {
        clearGrid();
        addGamesToGrid(Math.random() * 10);
    });
};


function clearGrid(){
    document.querySelectorAll('.card-game').forEach(e => {
        e.remove();
    });
}

function addGamesToGrid(tmp) {
    let element = document.getElementById('grid');

    for (let i = 0; i < tmp; i++) {
        element.innerHTML += /*html*/`
            <div class='card card-game'>
                <div class='content'>
                    WOW
                </div>
            </div>
        `;

    }
}

function addCardAdd() {
    let element = document.getElementById('grid');
    if (element) {
        element.innerHTML += /*html*/`
                <div class='card card-add-game'>
                    <button type="button" class='btn-add'>
                        +
                    </button>
                </div>
            `;
    }

}