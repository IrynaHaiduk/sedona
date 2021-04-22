var button = document.querySelector(".search-button");
var popup = document.querySelector(".form-wrap");
var date = popup.querySelector("[name=arrival-date]");
var search = popup.querySelector(".search-form");
var date2 = popup.querySelector("[name=depature-date]");
var amount1 = popup.querySelector("[name=adults]");
var amount2 = popup.querySelector("[name=children]");

var minus_adults = popup.querySelector("#minus-adults");
var plus_adults = popup.querySelector("#plus-adults");
var amount_adults = popup.querySelector("#adults-amount");

var minus_children = popup.querySelector("#minus-children");
var plus_children = popup.querySelector("#plus-children");
var amount_children = popup.querySelector("#children-amount");

minus_adults.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (amount_adults.value==0) return;
	amount_adults.value=parseInt(amount_adults.value)-1;
	}
);

plus_adults.addEventListener("click", function (evt) {
	evt.preventDefault();
	amount_adults.value=parseInt(amount_adults.value)+1;
	}
);

plus_children.addEventListener("click", function (evt) {
	evt.preventDefault();
	amount_children.value=parseInt(amount_children.value)+1;
	}
);

minus_children.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (amount_children.value==0) return;
	amount_children.value=parseInt(amount_children.value)-1;
	}
);


popup.classList.add("modal-close");


button.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (popup.classList.contains("modal-show")) {	
		popup.classList.remove("modal-show");
	} else {
		popup.classList.add("modal-show");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});

search.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!date.value || !date2.value || !amount1.value || !amount2.value) {
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		search.submit();
	}
});