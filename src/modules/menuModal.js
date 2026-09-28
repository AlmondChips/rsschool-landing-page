export let isModalOpen = false;

function createModal(item) {
  return `<div class="modal-bg"><div class="menu-modal">
    <img src="${item.image}" alt="product image">
    <div class="desc">
      <h3>${item.title}</h3>
      <p class="medium item-desc">${item.desc}</p>
      <section class="interactive">
        <p class="medium m-header">Size</p>
        <div class="size-options">
            <label for="s">
                <span class="item-bg">S</span>
                <span>${item.sizes.s.size}</span>
                <input type="radio" name="size" id="s" />
            </label>
            <label for="m">
                <span class="item-bg">M</span>
                <span>${item.sizes.m.size}</span>
                <input type="radio" name="size" id="m" />
            </label>
            <label for="l">
                <span class="item-bg">L</span>
                <span>${item.sizes.l.size}</span>
                <input type="radio" name="size" id="l" />
            </label>
        </div>
      </section>
      <section class="interactive">
        <p class="medium m-header">Additives</p>
        <div class="add-options">
            <label for="1">
                <span class="item-bg">1</span>
                <span>${item.additives[0].name}</span>
                <input type="radio" name="additive" id="1" />
            </label>
            <label for="2">
                <span class="item-bg">2</span>
                <span>${item.additives[1].name}</span>
                <input type="radio" name="additive" id="2" />
            </label>
            <label for="3">
                <span class="item-bg">3</span>
                <span>${item.additives[2].name}</span>
                <input type="radio" name="additive" id="3" />
            </label>
        </div>
      </section>
      <section class="total">
        <h3>Total:</h3>
        <h3 class=total-price>${item.price}</h3>
      </section>
      <section class="info">
      <div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_268_11673)">
            <path d="M8 7.66663V11" stroke="" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 5.00667L8.00667 4.99926" stroke="" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_268_11673">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
        <p class="caption">The total price depends on the selected size and additives. After adding the item, you can review it in My order.</p>
      </section>
      <button>Close</button>
    </div>
    </div>`;
}

export function openModal(item) {
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterend", createModal(item));
  const closeBtn = document.querySelector(".menu-modal button");
  const modalBg = document.querySelector(".modal-bg");
  isModalOpen = true;
  body.classList.add("no-scroll");

  modalBg.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") closeModal();
  });
  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  const sizeOptions = [...document.querySelector(".size-options").children];
  const additiveOptions = [...document.querySelector(".add-options").children];
  const totalPrice = document.querySelector(".total-price");

  sizeOptions[0].classList.add("selected");

  let sizeP = 0;
  let addP = 0;

  function calculateTotal() {
    const total = +item.price.split("$")[1] + +sizeP + +addP;
    totalPrice.textContent = `$${total.toFixed(2)}`;
  }

  sizeOptions.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();

      sizeOptions.forEach((option) => option.classList.remove("selected"));
      i.classList.add("selected");

      const size = i.querySelector(".item-bg").textContent.toLowerCase();
      sizeP = item.sizes[size]["add-price"];

      calculateTotal();
    });
  });

  additiveOptions.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();

      i.classList.toggle("selected");
      const additive = i.querySelector(".item-bg").textContent.toLowerCase();
      if (i.classList.contains("selected")) {
        addP += +item.additives[additive - 1]["add-price"];
      } else {
        addP -= +item.additives[additive - 1]["add-price"];
        if (addP < 0) addP = 0;
      }

      calculateTotal();
    });
  });
}

function closeModal(e) {
  const body = document.querySelector("body");
  const modalBg = document.querySelector(".modal-bg");

  if (!e || e.target === modalBg) {
    try {
      isModalOpen = false;
      body.classList.remove("no-scroll");
      modalBg.remove();
    } catch (error) {}
  }
}
