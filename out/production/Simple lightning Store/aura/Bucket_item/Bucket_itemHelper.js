({
	handleClick : function(component, item) {
		var removeFromOrder = component.getEvent("RemoveFromOrder");
        removeFromOrder.setParams({"orderItem": item});
        removeFromOrder.fire();
    }
})