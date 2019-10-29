({
	handleAddToOrder : function(component, event, helper) {
		
		var item = event.getParam("orderItem");
        helper.handleAddToOrder(component, item);
	},
    handleRemoveFromOrder : function(component, event, helper){
        var item = event.getParam("orderItem");
        helper.handleRemoveFromOrder(component, item);
    },
    clearAll : function(component, event, helper){
        
        helper.clearAll(component);
    },
    saveOrder : function(component, event, helper){
        var order = component.get("v.orderItems");
        helper.saveOrder(component, order);
    },
    showBucket : function(component, event, helper){
        var pageTotalPrice = component.find('page total price');
        var bucket = component.find('Bucket');
        helper.showBucket(component, bucket, pageTotalPrice);
    }
})