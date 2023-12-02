
function takeOrder(orders, deliveryOrders){
  if (!deliveryOrders.includes(orders) && deliveryOrders.length < 3){
    deliveryOrders.push(orders);
  }

}

function refundOrder(orderNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber){
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(orderArray){
  var itemString = ""
  for (var i = 0; i < orderArray.length; i++){
    if (itemString === ""){
      itemString = orderArray[i].item
    } else {
      itemString = `${itemString}, ${orderArray[i].item}`
    } 
  }
  return itemString
}

function searchOrder(orderList, order) {
  var isOrder = orderList.find(orderVal => orderVal.item === order);
  if (isOrder) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}