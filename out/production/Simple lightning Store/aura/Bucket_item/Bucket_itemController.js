({
	handleClick : function(component, event, helper) {
		var item = component.get("v.bucketItem");
        helper.handleClick(component, item);
	}
})