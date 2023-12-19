public with sharing class getBadgesController {
   
	@AuraEnabled
	public static trailheadapp__User_Badge__c getUserBadge(){
		try {
			trailheadapp__User_Badge__c userBadge = [SELECT Id from trailheadapp__User_Badge__c];

			return userBadge;
			
		} catch (Exception e) {
			throw new AuraHandledException(e.getMessage());
		}
	}
}