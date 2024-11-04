function filterItems() {
    const searchInput = document.querySelector('.search').value.toLowerCase();
    const selectedCategory = document.querySelector('.sBtn_Text').innerText;
    const tableRows = document.querySelectorAll('.items tbody tr');

    let found = false;

    tableRows.forEach(row => {
        const itemName = row.cells[0].textContent.toLowerCase();
        const itemCategory = row.cells[1].textContent; 
        if (itemName.includes(searchInput) && (selectedCategory === "All" || itemCategory === selectedCategory)) {
            row.style.display = '';
            found = true;
        } else {
            row.style.display = 'none';
        }
    });

    const notFoundMessage = document.querySelector('.not_found_message');
    if (found) {
        notFoundMessage.style.display = 'none';
    } else {
        notFoundMessage.style.display = 'block';
    }
}

document.querySelector('.search').addEventListener('input', filterItems);



// Sorting function
const optionMenu = document.querySelector(".sort_Category"),
    selectBtn = optionMenu.querySelector(".select_btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn_Text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option_text").innerHTML;
        sBtn_text.innerHTML = selectedOption;
        optionMenu.classList.remove("active");

        filterItems(); 
    });
});
