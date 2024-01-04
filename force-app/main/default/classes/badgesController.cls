public with sharing class badgesController {
    @AuraEnabled(cacheable=true)
    public static trailheadapp__User_Badge__c[] getBadges(
        Map<String, Object> bindParams
    ) {
            String queryString =
                'SELECT Id, ' +
                'trailheadapp__Badge_Icon__c, ' +
                'trailheadapp__Badge__r.Name, ' +
                'trailheadapp__Finished_Date__c, ' +
                'trailheadapp__Badge__r.trailheadapp__Type__c ' +
                'FROM trailheadapp__User_Badge__c ' +
                'WHERE trailheadapp__User__r.userName = ' +
                ' \'dguzman@portfolio.com\' AND ' +
                'trailheadapp__Badge__r.trailheadapp__Type__c =: type ' +
                'AND trailheadapp__Status__c = \'Completed\' ' +
                'ORDER BY trailheadapp__Finished_Date__c ' +
                'DESC LIMIT 4';

            trailheadapp__User_Badge__c[] userBadges = Database.queryWithBinds(
                queryString,
                bindParams,
                AccessLevel.SYSTEM_MODE
            );
            return userBadges;
    }
}
