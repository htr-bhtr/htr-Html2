let unitPrice = 0;

function setPrice() {
    if(document.getElementById('prod_name').value == 'monitor'){
        unitPrice = 324.12
        document.getElementById('unit_price').value = unitPrice
    }
    else if (document.getElementById('prod_name').value == 'mouse') {
        unitPrice = 75.00
        document.getElementById('unit_price').value = unitPrice
    }
    else if (document.getElementById('prod_name').value == 'keyboard') {
        unitPrice = 122.85
        document.getElementById('unit_price').value = unitPrice
    }
    else {
        unitPrice = 194.64
        document.getElementById('unit_price').value = unitPrice
    }
}

let total = 0;
let quantity = 0;
let amount = 0

function save() {
    quantity = document.getElementById('quantity').value 
    amount = quantity*unitPrice
    document.getElementById('amount').value = total
}

function send()
{
    document.write("Bạn đã order thành công chúng tôi sẽ chuyển hàng cho bạn trong thời gian sớm nhất.Cảm ơn!!!!")
}