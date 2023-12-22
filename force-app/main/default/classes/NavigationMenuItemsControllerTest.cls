@isTest
public with sharing class NavigationMenuItemsControllerTest {
    
	@IsTest(SeeAllData=true)
    static void testGetNavigationMenuItems() {
        NavigationMenuItemsController cont = new NavigationMenuItemsController();
        Test.startTest();
        NavigationMenuItemsController.getNavigationMenuItems(
            'Portfolio',
            'Draft',
            true,
            false
        );
        Test.stopTest();
    }
}
