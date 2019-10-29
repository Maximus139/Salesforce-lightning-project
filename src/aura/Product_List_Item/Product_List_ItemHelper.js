({
	addToOrder : function(component, product) {
        
        var addToOrderEvent = $A.get("e.c:addToOrder");
        addToOrderEvent.setParams({"orderItem": product});
        addToOrderEvent.fire();
        
	}
})