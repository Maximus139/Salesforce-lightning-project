({
	handleAddToOrder : function(component, orderItem) {
		

        var totalPrice = component.get("v.totalPrice") + orderItem.Price__c;
        var orderItems = component.get("v.orderItems");
   		var added = false;
        
        for (var i = 0; i < orderItems.length; i++){
            if (orderItems[i].Product__c == orderItem.Id){
                orderItems[i].Amount__c += 1;
                orderItems[i].Item_Total_Price__c += orderItem.Price__c;
                added = true;
            }
        }
        if (!added){
            var Item = {'Name': orderItem.Name, 'Product__c':orderItem.Id, 'Amount__c': 1, 'Item_Total_Price__c': orderItem.Price__c};
            orderItems.push(Item);
        }
        
        component.set("v.orderItems", orderItems);
		component.set("v.totalPrice", totalPrice);
	},
    
    handleRemoveFromOrder : function(component, orderItem){
        var orderItems = component.get("v.orderItems");
		var totalPrice = component.get("v.totalPrice");
        
        for (var i = 0; i < orderItems.length; i++){
            if (orderItems[i].Product__c == orderItem.Product__c){
                totalPrice -= orderItem.Item_Total_Price__c;
                orderItems.splice(i, 1);
            }
        }
        component.set("v.totalPrice", totalPrice);
        component.set("v.orderItems", orderItems);
    },
    clearAll : function(component, order){
        
        component.set("v.orderItems", []);
        component.set("v.totalPrice", 0);
    },
    
    saveOrder : function(component, order){
        var action = component.get("c.createOrder");
        action.setParams({"orderitems": order});
        
        action.setCallback(this, function(response){
           var state = response.getState();
            if (state === "SUCCESS"){
                component.set("v.orderItems", []);
                component.set("v.totalPrice", 0);
                var addToOrderEvent = $A.get("e.c:createOrder");
        		addToOrderEvent.setParams({"products": response.getReturnValue()});
        		addToOrderEvent.fire();
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    showBucket : function(component, bucket, pageTotalPrice){
    	
        if ($A.util.hasClass(bucket, "slds-hide")){
            $A.util.removeClass(bucket, "slds-hide");
            $A.util.addClass(bucket, "slds-show");
            $A.util.addClass(pageTotalPrice, "slds-hide");
        }
        else {
            $A.util.removeClass(bucket, "slds-show");
            $A.util.addClass(bucket, "slds-hide");
            $A.util.removeClass(pageTotalPrice, "slds-hide");
            $A.util.addClass(pageTotalPrice, "slds-show");
        }
    }
})