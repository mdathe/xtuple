//--------- Objects for create, update and read contact scenarios --------
var data = require('./contactData.js');
exports.Obj = {
  crmlink_xpath : "//div[contains(text(),'CRM')]",
  contactslink_xpath : "//div[contains(text(),'Contacts')]",
  newbutton_xpath : ".//*[@id='app_postbooks_navigator_newButton_iconButton']",
  cnumber_xpath : ".//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget2_input']",
  active_xpath : "#app_postbooks_workspaceContainer_workspace_checkboxWidget_input",
  overview_xpath : "//div[contains(text(),'Overview')]",
  cfname_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget2_input']",
  cmname_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget3_input']",
  clname_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget4_input']",
  addrsearch_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_searchButton']",
  addrtext_xpath : "//div[contains(text(),'Ungargasse 60 ')]",
  jobtitle_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget6_input']",
  email_xpath : ".//*[@id='app_postbooks_workspaceContainer_workspace_comboboxWidget_input_input']",
  phone_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_inputWidget7_input']",
  charecnew_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_contactCharacteristicsWidget_newButton']",
  charecinput_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_contactCharacteristicsWidget_repeater_ownerProxy_characteristicItem_inputWidget_input']",
  cnotes_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_textArea_input']",
  caccount_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_accountWidget_input']",
  cowner_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_userAccountWidget_input']",
  commentnew_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_pickerButton']",
  commenttype_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_picker_menuItem14']",
  commentinput_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_textArea_input']",
  savebutton_xpath : "//*[@id='app_postbooks_workspaceContainer_saveButton']",
  heading_xpath : "//*[@id='app_postbooks_workspaceContainer_title']",
  addressEditButton_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_editButton']",
  addressLine1_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_line1']",
  addressLine2_xpath : ".//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_line2']",
  countryLine_xpath : ".//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_country_input']",
  addressDoneButton_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_addressWidget_button']",
  charecRead_xpath : "//input[contains(@value,'" + data.VARIABLES.contact_bday +"')]",
  documentsLink_xpath : "//div[contains(text(),'Documents')]",
  documentAttach_xpath: "//div[@id='app_postbooks_workspaceContainer_workspace_contactDocumentsBox_attachButton']",
  documentPurpose_xpath: "//button[contains(text(),'Related to')]",
  documentType_xpath: "//div[contains(text(),'Account')]",
  documentOk_xpath : "//*[@id='app_postbooks_workspaceContainer_workspace_contactDocumentsBox_button']",
  documentSearch_xpath : ".//*[@id='app_postbooks_searchContainer_list_listAttr'][contains(text(),'1001')]",
  documentAccount_xpath : ".//*[@id='app_postbooks_workspaceContainer_workspace_contactDocumentsBox_list_listAttr2'][contains(text(),'1001')]",
  documentAccount1_xpath : ".//*[@id='app_postbooks_workspaceContainer2_workspace_contactDocumentsBox_list_listAttr2'][contains(text(),'1001')]",
  refreshButton_xpath : ".//*[@id='app_postbooks_navigator_refreshButton']",
  newToolBar_xpath : ".//*[@id='app_postbooks_navigator_contentToolbar_iconButton']",
  saveToolBar_xpath : ".//*[@id='app_postbooks_workspaceContainer_contentToolbar_iconButton']", 
  searchField_xpath : ".//*[@id='app_postbooks_navigator_searchInput']",
  searchIcon_xpath : ".//*[@id='app_postbooks_navigator_searchJump']",
  readContact_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listAttr'][contains(text(),'" + data.VARIABLES.contact_fname + "')]",
  contactmname2_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget3_input']",
  backButton_xpath : ".//*[@id='app_postbooks_workspaceContainer2_backButton']",
  contactsHeading_xpath : ".//*[@id='app_postbooks_navigator_rightLabel'][contains(text(),'Contacts')]",
  readContact_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listAttr'][contains(text(),'" ,
  deleteContactItem_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listItem']",
  deleteContactGearIcon_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listItem_actionIconButton']",
  deleteContactButton_xpath : ".//*[@id='app_postbooks_navigator_listItemMenu_delete']",
  deleteOkButton_xpath: ".//*[@id='app_postbooks_notifyYes']"
} 
exports.readObj1 = {
  crmlink_xpath : "//div[contains(text(),'CRM')]",
  contactslink_xpath : "//div[contains(text(),'Contacts')]",
  overview_xpath : "//div[contains(text(),'Overview')]",
  newbutton_xpath : ".//*[@id='app_postbooks_navigator_newButton']",
  cnumber_xpath : ".//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget2_input']",
  active_xpath : "#app_postbooks_workspaceContainer2_workspace_checkboxWidget_input",
  cfname_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget2_input']",
  cmname_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget3_input']",
  clname_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget4_input']",
  addrsearch_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_addressWidget_searchButton']",
  addrtext_xpath : "//div[contains(text(),'Ungargasse 60 ')]",
  jobtitle_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget6_input']",
  email_xpath : ".//*[@id='app_postbooks_workspaceContainer2_workspace_comboboxWidget_input_input']",
  phone_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_inputWidget7_input']",
  charecnew_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_contactCharacteristicsWidget_newButton']",
  charecinput_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_contactCharacteristicsWidget_repeater_ownerProxy_characteristicItem_inputWidget_input']",
  cnotes_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_textArea_input']",
  caccount_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_accountWidget_input']",
  cowner_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_userAccountWidget_input']",
  commentnew_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_pickerButton']",
  commenttype_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_commentType_picker_menuItem14']",
  commentinput_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_contactCommentBox_repeater_ownerProxy_repeaterItem_textArea_input']",
  savebutton_xpath : "//*[@id='app_postbooks_workspaceContainer2_saveButton']",
  heading_xpath : "//*[@id='app_postbooks_workspaceContainer2_title']",
  addressEditButton_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_addressWidget_editButton']",
  addressLine1_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_addressWidget_line1']",
  addressDoneButton_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_addressWidget_button']",
  charecRead_xpath : "//input[contains(@value,'" + data.VARIABLES.contact_bday +"')]",
  documentsLink_xpath : "//div[contains(text(),'Documents')]",
  documentAttach_xpath: "//*[@id='app_postbooks_workspaceContainer2_workspace_contactDocumentsBox_attachButton']",
  documentPurpose_xpath: "//button[contains(text(),'Related to')]",
  documentType_xpath: "//div[contains(text(),'Account')]",
  documentOk_xpath : "//*[@id='app_postbooks_workspaceContainer2_workspace_contactDocumentsBox_button']",
  documentSearch_xpath : ".//*[@id='app_postbooks_searchContainer2_list_listAttr'][contains(text(),'1001')]",
  documentAccount_xpath : ".//*[@id='app_postbooks_workspaceContainer_workspace_contactDocumentsBox_list_listAttr2'][contains(text(),'1001')]",
  documentAccount1_xpath : ".//*[@id='app_postbooks_workspaceContainer2_workspace_contactDocumentsBox_list_listAttr2'][contains(text(),'1001')]",
  refreshButton_xpath : ".//*[@id='app_postbooks_navigator_refreshButton']",
  searchField_xpath : ".//*[@id='app_postbooks_navigator_searchInput']",
  searchIcon_xpath : ".//*[@id='app_postbooks_navigator_searchJump']",
  saveToolBar_xpath : ".//*[@id='app_postbooks_workspaceContainer2_contentToolbar_iconButton']",
  readContact_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listAttr'][contains(text(),'" ,
  contactmname2_xpath : "//*[@id='app_postbooks_workspaceContainer3_workspace_inputWidget3_input']",
  backButton_xpath : ".//*[@id='app_postbooks_workspaceContainer3_backButton']",
  contactsHeading_xpath : ".//*[@id='app_postbooks_navigator_rightLabel'][contains(text(),'Contacts')]",
  newToolBar_xpath : ".//*[@id='app_postbooks_navigator_contentToolbar_iconButton']",
  deleteContactItem_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listItem']",
  deleteContactGearIcon_xpath : ".//*[@id='app_postbooks_navigator_contentPanels_contactList_listItem_actionIconButton']",
  deleteContactButton_xpath : ".//*[@id='app_postbooks_navigator_listItemMenu_delete']",
  deleteOkButton_xpath: ".//*[@id='app_postbooks_notifyYes']"
} 
