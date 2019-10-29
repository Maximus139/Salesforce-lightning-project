public with sharing class ProductsListController {

    @auraEnabled
    public static List<Product__c> getProducts(){
        return [SELECT id, Name, Price__c, Amount__c, ContentImage__c, Image_URL__c FROM Product__c];
    }
}