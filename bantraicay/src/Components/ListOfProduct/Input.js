function Search() {
    let MenuSearch = document.querySelector("#menu-search");
    let MenuItems = Array.from(document.querySelectorAll(".menu_item"));

    MenuSearch.value = MenuSearch.value.toUpperCase();

    MenuItems.forEach(function (value) {
        let content = value.innerText;
        if (content.indexOf(MenuSearch.value) > -1) {
            value.style.display = "";
        } else {
            value.style.display = "none";
        }
    })
}

export default function Input() {
    return (
        <div className="boxSearch">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" id="menu-search" onKeyUp={Search} placeholder="Search..."/>
        </div>
    );
}