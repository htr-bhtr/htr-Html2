function setPrice() {
	// body...
	var productTag = document.getElementById("productName");
	var priceTag = document.getElementById("price")
	var product = productTag.value
	if (product == "Monitor") {
		priceTag.vale = "324.12";
	}
	else if (product == "Mouse") {
		priceTag.vale = "75";
	}
	else if (product == "Keyboard") {
		priceTag.vale = "122.85";
	}
	else if (product == "Printer") {
		priceTag.vale = "194.64";
	}
	else{
		alert("Vui Lòng Chọn Sản Phẩm!!!")
		productTag.focus()
		return false
	}
}

function calAmount() {
	// body...
	var quantity = document.getElementById("Quantity").value
	var price = document.getElementById("Price").value
	var amountTag = document.getElementById("amount")
	amountTag.value = amount.toFixed(2)
}
function validate() {
	// body...
	var payment = document.getElementById("payment")
	if(payment.value == "--- Select ---")
	{
		alert("Vui Lòng chọn phương thức thanh toán")
		payment.focus();
		return false;
	}
	alert("Bạn đã order thành công.Chúng tôi sẽ chuyển hàng cho bạn trong thời gian sớm nhất.Cảm ơn!!!!")
	return true;
}
