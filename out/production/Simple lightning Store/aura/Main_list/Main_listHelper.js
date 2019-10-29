({
	doInit : function(component) {
		var action = component.get("c.getProducts");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.products", response.getReturnValue());
            }
            else {
                cosole.log("Failed " + state);
            }
        });
        $A.enqueueAction(action);
	},
    handlecreateOrder : function(component, helper, products){
        component.set("v.products", products);
        helper.showToast(component);
    },
    
    showToast : function(component){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            mode: 'pester',
            "title": "Your order was successfully created!",
            type: 'success',
            "message": "Check your email"
        });
        toastEvent.fire();
    }
})