({
	addToOrder : function(component, event, helper) {
		
        var product = JSON.parse(JSON.stringify(component.get("v.item")));
        
        helper.addToOrder(component, product);
	},
    
})