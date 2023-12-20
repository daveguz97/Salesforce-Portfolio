public with sharing class badgesController {
	@AuraEnabled(cacheable=true)
	public static trailheadapp__User_Badge__c[] getModules(){
		try {
		trailheadapp__User_Badge__c[] userBadges = [SELECT Id, trailheadapp__Badge_Icon__c, trailheadapp__Badge__r.Name, trailheadapp__Finished_Date__c FROM trailheadapp__User_Badge__c WHERE trailheadapp__User__r.userName = 'dguzman@portfolio.com' AND trailheadapp__Badge__r.trailheadapp__Type__c = 'Module' AND trailheadapp__Status__c = 'Completed' ORDER BY trailheadapp__Finished_Date__c DESC LIMIT 4 ];
		return userBadges;
		} catch (Exception e) {
			throw new AuraHandledException(e.getMessage());
		}
	}
}