public with sharing class MarketController {

    @AuraEnabled
    public static List<Product__c> createOrder(List<OrderItem__c> orderitems){
        
        Order__c order = new Order__c();
        insert order;
        Map<Id, Product__c> products = new Map <Id, Product__c>([SELECT id, Amount__c, Name, Price__c, ContentImage__c, Image_URL__c FROM Product__c]);
        for (OrderItem__c item :orderitems){
            item.Market_Order__c = order.id;
            products.get(item.Product__c).Amount__c -= item.Amount__c;
        }
        insert orderitems;
        update products.values();
        return products.values();
    }
}