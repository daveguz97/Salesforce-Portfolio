@isTest
public with sharing class testDataHeper {
    public static trailheadapp__User_Badge__c createUserBadge(
        trailheadapp__Badge__c badge,
        User u,
        String status
    ) {
        trailheadapp__User_Badge__c userBadge = new trailheadapp__User_Badge__c(
            trailheadapp__Badge__c = badge.Id,
            trailheadapp__User__c = u.Id,
            trailheadapp__Status__c = status
        );
        insert userBadge;
        return userBadge;
    }

    public static trailheadapp__Badge__c createBadge() {
        trailheadapp__Badge__c badge = new trailheadapp__Badge__c(
            trailheadapp__API_Name__c = 'Testing: ' +
                String.valueOf(Math.random() * 10),
            trailheadapp__Description__c = 'Test Desc',
            trailheadapp__Icon__c = 'https://google.com',
            trailheadapp__Namespace__c = 'Test',
            trailheadapp__URL__c = 'https://google.com'
        );
        insert badge;
        return badge;
    }

	public static User createUser(String profName, String userName) {
		Profile p = [SELECT Id FROM Profile WHERE Name=: profName LIMIT 1];
        User u = new User(
            Alias = 'tuser',
            Email='testuser@testorg.com',
            EmailEncodingKey='UTF-8',
            LastName='TestUser',
            LanguageLocaleKey='en_US',
            LocaleSidKey='en_US',
            ProfileId = p.Id,
            TimeZoneSidKey='America/Los_Angeles',
            UserName= userName
        );
		insert u;
		return u;
	}
}
