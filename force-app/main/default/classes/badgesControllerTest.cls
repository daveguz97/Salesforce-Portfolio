@isTest
private class badgesControllerTest {
	@TestSetup
	static void setup(){
		trailheadapp__Badge__c badge = testDataHeper.createBadge();
	}
    @IsTest
	static void testCompletedGetBadges(){
		trailheadapp__Badge__c badge = [SELECT Id FROM trailheadapp__Badge__c LIMIT 1];
		User u = [SELECT Id FROM User WHERE Username = 'dguzman@portfolio.com' LIMIT 1];
		Test.startTest();
		testDataHeper.createUserBadge(badge, u, 'Completed');
		Test.stopTest();
		Assert.isTrue(badgesController.getBadges(new Map<String, Object>{'type' => 'Module'}).size() > 0);
		
	}

	@IsTest
	static void testInProgressBadge(){
		trailheadapp__Badge__c badge = [SELECT Id FROM trailheadapp__Badge__c LIMIT 1];
		User u = [SELECT Id FROM User WHERE Username = 'dguzman@portfolio.com' LIMIT 1];
		Test.startTest();
		testDataHeper.createUserBadge(badge, u, 'Assigned');
		Test.stopTest();
		Assert.isFalse(badgesController.getBadges(new Map<String, Object>{'type' => 'Module'}).size() > 0);
	}
}