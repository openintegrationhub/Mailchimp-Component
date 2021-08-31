# <p align="center" width="100%"> <img src="./logo.png" width="250" height="250"> </p> 
# <p align="center" width="100%"> Mailchimp Marketing API OIH Connector </p>

## Description
[![Generic badge](https://img.shields.io/badge/Status-NotTested!-lightgrey.svg)](https://shields.io/)
A generated OIH connector for the Mailchimp Marketing API API (version 3.0.43).

Generated from: https://api.mailchimp.com/schema/3.0/Swagger.json?expand<br/>
Generated at: 2021-05-27T11:22:32+02:00

## API Description

<br/>

## Authorization

Supported authorization schemes:
- Basic Authentication

## Actions

### Get authorized app info
> Get information about a specific authorized application.<br/>

*Tags:* `authorizedApps`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `app_id` - _required_ - The unique id for the connected authorized application.<br/>

### Add automation
> Create a new classic automation in your Mailchimp account.<br/>

*Tags:* `automations`

### Get automation info
> Get a summary of an individual classic automation workflow's settings and content. The `trigger_settings` object returns information for the first email in the workflow.<br/>

*Tags:* `automations`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>

### Pause automation emails
> Pause all emails in a specific classic automation workflow.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>

### Start automation emails
> Start all emails in a classic automation workflow.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>

### Archive automation
> Archiving will permanently end your automation and keep the report data. You'll be able to replicate your archived automation, but you can't restart it.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>

### Get workflow email info
> Get information about an individual classic automation workflow email.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>

### Delete workflow email
> Removes an individual classic automation workflow email. Emails from certain workflow types, including the Abandoned Cart Email (abandonedCart) and Product Retargeting Email (abandonedBrowse) Workflows, cannot be deleted.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>

### Update workflow email
> Update settings for a classic automation workflow email<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>

### Add subscriber to workflow email
> Manually add a subscriber to a workflow, bypassing the default trigger settings. You can also use this endpoint to trigger a series of automated emails in an API 3.0 workflow type.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>

### Get automated email subscriber
> Get information about a specific subscriber in a classic automation email queue.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Pause automated email
> Pause an automated email.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>

### Start automated email
> Start an automated email.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `workflow_email_id` - _required_ - The unique id for the Automation workflow email.<br/>

### Remove subscriber from workflow
> Remove a subscriber from a specific classic automation workflow. You can remove a subscriber at any point in an automation workflow, regardless of how many emails they've been sent from that workflow. Once they're removed, they can never be added back to the same workflow.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>

### Get subscriber removed from workflow
> Get information about a specific subscriber who was removed from a classic automation workflow.<br/>

*Tags:* `automations`

#### Input Parameters
* `workflow_id` - _required_ - The unique id for the Automation workflow.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Start batch operation
> Begin processing a batch operations request.<br/>

*Tags:* `batches`

### Get batch operation status
> Get the status of a batch request.<br/>

*Tags:* `batches`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `batch_id` - _required_ - The unique id for the batch operation.<br/>

### Delete batch request
> Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.<br/>

*Tags:* `batches`

#### Input Parameters
* `batch_id` - _required_ - The unique id for the batch operation.<br/>

### Add batch webhook
> Configure a webhook that will fire whenever any batch request completes processing.<br/>

*Tags:* `batchWebhooks`

### Get batch webhook info
> Get information about a specific batch webhook.<br/>

*Tags:* `batchWebhooks`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `batch_webhook_id` - _required_ - The unique id for the batch webhook.<br/>

### Update batch webhook
> Update a webhook that will fire whenever any batch request completes processing.<br/>

*Tags:* `batchWebhooks`

#### Input Parameters
* `batch_webhook_id` - _required_ - The unique id for the batch webhook.<br/>

### Delete batch webhook
> Remove a batch webhook. Webhooks will no longer be sent to the given URL.<br/>

*Tags:* `batchWebhooks`

#### Input Parameters
* `batch_webhook_id` - _required_ - The unique id for the batch webhook.<br/>

### Add template folder
> Create a new template folder.<br/>

*Tags:* `templateFolders`

### Get template folder
> Get information about a specific folder used to organize templates.<br/>

*Tags:* `templateFolders`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `folder_id` - _required_ - The unique id for the template folder.<br/>

### Update template folder
> Update a specific folder used to organize templates.<br/>

*Tags:* `templateFolders`

#### Input Parameters
* `folder_id` - _required_ - The unique id for the template folder.<br/>

### Delete template folder
> Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.<br/>

*Tags:* `templateFolders`

#### Input Parameters
* `folder_id` - _required_ - The unique id for the template folder.<br/>

### Add campaign folder
> Create a new campaign folder.<br/>

*Tags:* `campaignFolders`

### Get campaign folder
> Get information about a specific folder used to organize campaigns.<br/>

*Tags:* `campaignFolders`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `folder_id` - _required_ - The unique id for the campaign folder.<br/>

### Update campaign folder
> Update a specific folder used to organize campaigns.<br/>

*Tags:* `campaignFolders`

#### Input Parameters
* `folder_id` - _required_ - The unique id for the campaign folder.<br/>

### Delete campaign folder
> Delete a specific campaign folder, and mark all the campaigns in the folder as 'unfiled'.<br/>

*Tags:* `campaignFolders`

#### Input Parameters
* `folder_id` - _required_ - The unique id for the campaign folder.<br/>

### Add campaign
> Create a new Mailchimp campaign.<br/>

*Tags:* `campaigns`

### Get campaign info
> Get information about a specific campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Update campaign settings
> Update some or all of the settings for a specific campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Delete campaign
> Remove a campaign from your Mailchimp account.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Cancel campaign
> Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it. This feature is included with Mailchimp Pro.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Replicate campaign
> Replicate a campaign in saved or send status.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Send campaign
> Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Schedule campaign
> Schedule a campaign for delivery. If you're using Multivariate Campaigns to test send times or sending RSS Campaigns, use the send action instead.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Unschedule campaign
> Unschedule a scheduled campaign that hasn't started sending.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Send test email
> Send a test email.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Pause rss campaign
> Pause an RSS-Driven campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Resume rss campaign
> Resume an RSS-Driven campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Resend campaign
> Creates a Resend to Non-Openers version of this campaign. We will also check if this campaign meets the criteria for Resend to Non-Openers campaigns.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Set campaign content
> Set the content for a campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Add campaign feedback
> Add feedback on a specific campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Get campaign feedback message
> Get a specific feedback message from a campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `feedback_id` - _required_ - The unique id for the feedback message.<br/>

### Update campaign feedback message
> Update a specific feedback message for a campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `feedback_id` - _required_ - The unique id for the feedback message.<br/>

### Delete campaign feedback message
> Remove a specific feedback message for a campaign.<br/>

*Tags:* `campaigns`

#### Input Parameters
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `feedback_id` - _required_ - The unique id for the feedback message.<br/>

### Add connected site
> Create a new Mailchimp connected site.<br/>

*Tags:* `connectedSites`

### Get connected site
> Get information about a specific connected site.<br/>

*Tags:* `connectedSites`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `connected_site_id` - _required_ - The unique identifier for the site.<br/>

### Delete connected site
> Remove a connected site from your Mailchimp account.<br/>

*Tags:* `connectedSites`

#### Input Parameters
* `connected_site_id` - _required_ - The unique identifier for the site.<br/>

### Verify connected site script
> Verify that the connected sites script has been installed, either via the script URL or fragment.<br/>

*Tags:* `connectedSites`

#### Input Parameters
* `connected_site_id` - _required_ - The unique identifier for the site.<br/>

### Get conversation
> Get details about an individual conversation.<br/>

*Tags:* `conversations`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `conversation_id` - _required_ - The unique id for the conversation.<br/>

### Post message
> Post a new message to a conversation.<br/>

*Tags:* `conversations`

#### Input Parameters
* `conversation_id` - _required_ - The unique id for the conversation.<br/>

### Get message
> Get an individual message in a conversation.<br/>

*Tags:* `conversations`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `conversation_id` - _required_ - The unique id for the conversation.<br/>
* `message_id` - _required_ - The unique id for the conversation message.<br/>

### Customer Journeys API trigger for a contact
> A step trigger in a Customer Journey. To use it, create a starting point or step from the Customer Journey builder in the app using the Customer Journeys API condition. We'll provide a url during the process that includes the {journey_id} and {step_id}. You'll then be able to use this endpoint to trigger the condition for the posted contact.<br/>

*Tags:* `customerJourneys`

#### Input Parameters
* `journey_id` - _required_ - The id for the Journey.<br/>
* `step_id` - _required_ - The id for the Step.<br/>

### Add file
> Upload a new image or file to the File Manager.<br/>

*Tags:* `fileManager`

### Get file
> Get information about a specific file in the File Manager.<br/>

*Tags:* `fileManager`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `file_id` - _required_ - The unique id for the File Manager file.<br/>

### Update file
> Update a file in the File Manager.<br/>

*Tags:* `fileManager`

#### Input Parameters
* `file_id` - _required_ - The unique id for the File Manager file.<br/>

### Delete file
> Remove a specific file from the File Manager.<br/>

*Tags:* `fileManager`

#### Input Parameters
* `file_id` - _required_ - The unique id for the File Manager file.<br/>

### Add folder
> Create a new folder in the File Manager.<br/>

*Tags:* `fileManager`

### Get folder
> Get information about a specific folder in the File Manager.<br/>

*Tags:* `fileManager`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `folder_id` - _required_ - The unique id for the File Manager folder.<br/>

### Update folder
> Update a specific File Manager folder.<br/>

*Tags:* `fileManager`

#### Input Parameters
* `folder_id` - _required_ - The unique id for the File Manager folder.<br/>

### Delete folder
> Delete a specific folder in the File Manager.<br/>

*Tags:* `fileManager`

#### Input Parameters
* `folder_id` - _required_ - The unique id for the File Manager folder.<br/>

### Add list
> Create a new list in your Mailchimp account.<br/>

*Tags:* `lists`

### Get list info
> Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.<br/>

*Tags:* `lists`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `list_id` - _required_ - The unique ID for the list.<br/>
* `include_total_contacts` - _optional_ - Return the total_contacts field in the stats response, which contains an approximate contact count for the given list.<br/>

### Update lists
> Update the settings for a specific list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Delete list
> Delete a list from your Mailchimp account. If you delete a list, you'll lose the list history--including subscriber activity, unsubscribes, complaints, and bounces. You'll also lose subscribers' email addresses, unless you exported and backed up your list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Batch subscribe or unsubscribe
> Batch subscribe or unsubscribe list members.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `skip_merge_validation` - _optional_ - If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.<br/>
* `skip_duplicate_check` - _optional_ - If skip_duplicate_check is true, we will ignore duplicates sent in the request when using the batch sub/unsub on the lists endpoint. The status of the first appearance in the request will be saved. This defaults to false.<br/>

### Get abuse report
> Get details about a specific abuse report.<br/>

*Tags:* `lists`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `count` - _optional_ - The number of records to return. Default value is 10. Maximum value is 1000<br/>
* `offset` - _optional_ - Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0.<br/>
* `list_id` - _required_ - The unique ID for the list.<br/>
* `report_id` - _required_ - The id for the abuse report.<br/>

### Get growth history by month
> Get a summary of a specific list's growth activity for a specific month and year.<br/>

*Tags:* `lists`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `list_id` - _required_ - The unique ID for the list.<br/>
* `month` - _required_ - A specific month of list growth history.<br/>

### Add interest category
> Create a new interest category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Get interest category info
> Get information about a specific interest category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>

### Update interest category
> Update a specific interest category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>

### Delete interest category
> Delete a specific interest category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>

### Add interest in category
> Create a new interest or 'group name' for a specific category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>

### Get interest in category
> Get interests or 'group names' for a specific category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>
* `interest_id` - _required_ - The specific interest or 'group name'.<br/>
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>

### Update interest in category
> Update interests or 'group names' for a specific category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>
* `interest_id` - _required_ - The specific interest or 'group name'.<br/>

### Delete interest in category
> Delete interests or group names in a specific category.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `interest_category_id` - _required_ - The unique ID for the interest category.<br/>
* `interest_id` - _required_ - The specific interest or 'group name'.<br/>

### Add segment
> Create a new segment in a specific list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Get segment info
> Get information about a specific segment.<br/>

*Tags:* `lists`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `list_id` - _required_ - The unique ID for the list.<br/>
* `segment_id` - _required_ - The unique id for the segment.<br/>
* `include_cleaned` - _optional_ - Include cleaned members in response<br/>
* `include_transactional` - _optional_ - Include transactional members in response<br/>
* `include_unsubscribed` - _optional_ - Include unsubscribed members in response<br/>

### Delete segment
> Delete a specific segment in a list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `segment_id` - _required_ - The unique id for the segment.<br/>

### Update segment
> Update a specific segment in a list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `segment_id` - _required_ - The unique id for the segment.<br/>

### Batch add or remove members
> Batch add/remove list members to static segment<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `segment_id` - _required_ - The unique id for the segment.<br/>

### Add member to segment
> Add a member to a static segment.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `segment_id` - _required_ - The unique id for the segment.<br/>

### Remove list member from segment
> Remove a member from the specified static segment.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `segment_id` - _required_ - The unique id for the segment.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Add member to list
> Add a new member to the list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `skip_merge_validation` - _optional_ - If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.<br/>

### Get member info
> Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member.<br/>

*Tags:* `lists`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Add or update list member
> Add or update a list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>
* `skip_merge_validation` - _optional_ - If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.<br/>

### Update list member
> Update information for a specific list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>
* `skip_merge_validation` - _optional_ - If skip_merge_validation is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false.<br/>

### Archive list member
> Archive a list member. To permanently delete, use the delete-permanent action.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Add or remove member tags
> Add or remove tags from a list member. If a tag that does not exist is passed in and set as 'active', a new tag will be created.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Add event
> Add an event for a list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts email addresses.<br/>

### Add member note
> Add a new note for a specific subscriber.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Get member note
> Get a specific note for a specific list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>
* `note_id` - _required_ - The id for the note.<br/>
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>

### Update note
> Update a specific note for a specific list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>
* `note_id` - _required_ - The id for the note.<br/>

### Delete note
> Delete a specific note for a specific list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>
* `note_id` - _required_ - The id for the note.<br/>

### Delete list member
> Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Add merge field
> Add a new merge field for a specific list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Get merge field
> Get information about a specific merge field in a list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `merge_id` - _required_ - The id for the merge field.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>

### Update merge field
> Update a specific merge field in a list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `merge_id` - _required_ - The id for the merge field.<br/>

### Delete merge field
> Delete a specific merge field in a list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `merge_id` - _required_ - The id for the merge field.<br/>

### Add webhook
> Create a new webhook for a specific list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Get webhook info
> Get information about a specific webhook.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `webhook_id` - _required_ - The webhook's id.<br/>

### Delete webhook
> Delete a specific webhook in a list.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `webhook_id` - _required_ - The webhook's id.<br/>

### Update webhook
> Update the settings for an existing webhook.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>
* `webhook_id` - _required_ - The webhook's id.<br/>

### Customize signup form
> Customize a list's default signup form.<br/>

*Tags:* `lists`

#### Input Parameters
* `list_id` - _required_ - The unique ID for the list.<br/>

### Add landing page
> Create a new Mailchimp landing page.<br/>

*Tags:* `landingPages`

#### Input Parameters
* `use_default_list` - _optional_ - Will create the Landing Page using the account's Default List instead of requiring a list_id.<br/>

### Get landing page info
> Get information about a specific page.<br/>

*Tags:* `landingPages`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `page_id` - _required_ - The unique id for the page.<br/>

### Update landing page
> Update a landing page.<br/>

*Tags:* `landingPages`

#### Input Parameters
* `page_id` - _required_ - The unique id for the page.<br/>

### Delete landing page
> Delete a landing page.<br/>

*Tags:* `landingPages`

#### Input Parameters
* `page_id` - _required_ - The unique id for the page.<br/>

### Publish landing page
> Publish a landing page that is in draft, unpublished, or has been previously published and edited.<br/>

*Tags:* `landingPages`

#### Input Parameters
* `page_id` - _required_ - The unique id for the page.<br/>

### Unpublish landing page
> Unpublish a landing page that is in draft or has been published.<br/>

*Tags:* `landingPages`

#### Input Parameters
* `page_id` - _required_ - The unique id for the page.<br/>

### Get campaign report
> Get report details for a specific sent campaign.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>

### Get abuse report
> Get information about a specific abuse report for a campaign.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `report_id` - _required_ - The id for the abuse report.<br/>

### Get campaign link details
> Get click details for a specific link in a campaign.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `link_id` - _required_ - The id for the link.<br/>

### Get clicked link subscriber
> Get information about a specific subscriber who clicked a link in a specific campaign.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `link_id` - _required_ - The id for the link.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Get opened campaign subscriber
> Get information about a specific subscriber who opened a campaign.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Get subscriber email activity
> Get a specific list member's activity in a campaign including opens, clicks, and bounces.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>
* `since` - _optional_ - Restrict results to email activity events that occur after a specific time. Uses ISO 8601 time format: 2015-10-21T15:41:36+00:00.<br/>

### Get campaign recipient info
> Get information about a specific campaign recipient.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Get unsubscribed member
> Get information about a specific list member who unsubscribed from a campaign.<br/>

*Tags:* `reports`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `campaign_id` - _required_ - The unique id for the campaign.<br/>
* `subscriber_hash` - _required_ - The MD5 hash of the lowercase version of the list member's email address.<br/>

### Add template
> Create a new template for the account. Only Classic templates are supported.<br/>

*Tags:* `templates`

### Get template info
> Get information about a specific template.<br/>

*Tags:* `templates`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `template_id` - _required_ - The unique id for the template.<br/>

### Update template
> Update the name, HTML, or `folder_id` of an existing template.<br/>

*Tags:* `templates`

#### Input Parameters
* `template_id` - _required_ - The unique id for the template.<br/>

### Delete template
> Delete a specific template.<br/>

*Tags:* `templates`

#### Input Parameters
* `template_id` - _required_ - The unique id for the template.<br/>

### Add store
> Add a new store to your Mailchimp account.<br/>

*Tags:* `ecommerce`

### Get store info
> Get information about a specific store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>

### Update store
> Update a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Delete store
> Delete a store. Deleting a store will also delete any associated subresources, including Customers, Orders, Products, and Carts.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Add cart
> Add a new cart to a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Get cart info
> Get information about a specific cart.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>

### Update cart
> Update a specific cart.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>

### Delete cart
> Delete a cart.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>

### Add cart line item
> Add a new line item to an existing cart.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>

### Get cart line item
> Get information about a specific cart line item.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>
* `line_id` - _required_ - The id for the line item of a cart.<br/>

### Update cart line item
> Update a specific cart line item.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>
* `line_id` - _required_ - The id for the line item of a cart.<br/>

### Delete cart line item
> Delete a specific cart line item.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `cart_id` - _required_ - The id for the cart.<br/>
* `line_id` - _required_ - The id for the line item of a cart.<br/>

### Add customer
> Add a new customer to a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Get customer info
> Get information about a specific customer.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `customer_id` - _required_ - The id for the customer of a store.<br/>

### Add or update customer
> Add or update a customer.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `customer_id` - _required_ - The id for the customer of a store.<br/>

### Update customer
> Update a customer.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `customer_id` - _required_ - The id for the customer of a store.<br/>

### Delete customer
> Delete a customer from a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `customer_id` - _required_ - The id for the customer of a store.<br/>

### Add promo rule
> Add a new promo rule to a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Get promo rule
> Get information about a specific promo rule.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>

### Update promo rule
> Update a promo rule.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>

### Delete promo rule
> Delete a promo rule from a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>

### Add promo code
> Add a new promo code to a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>

### Get promo code
> Get information about a specific promo code.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>
* `promo_code_id` - _required_ - The id for the promo code of a store.<br/>

### Update promo code
> Update a promo code.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>
* `promo_code_id` - _required_ - The id for the promo code of a store.<br/>

### Delete promo code
> Delete a promo code from a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `promo_rule_id` - _required_ - The id for the promo rule of a store.<br/>
* `promo_code_id` - _required_ - The id for the promo code of a store.<br/>

### Add order
> Add a new order to a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Get order info
> Get information about a specific order.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>

### Update order
> Update a specific order.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>

### Delete order
> Delete an order.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>

### Add order line item
> Add a new line item to an existing order.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>

### Get order line item
> Get information about a specific order line item.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>
* `line_id` - _required_ - The id for the line item of an order.<br/>

### Update order line item
> Update a specific order line item.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>
* `line_id` - _required_ - The id for the line item of an order.<br/>

### Delete order line item
> Delete a specific order line item.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `order_id` - _required_ - The id for the order in a store.<br/>
* `line_id` - _required_ - The id for the line item of an order.<br/>

### Add product
> Add a new product to a store.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>

### Get product info
> Get information about a specific product.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>

### Update product
> Update a specific product.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>

### Delete product
> Delete a product.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>

### Add product variant
> Add a new variant to the product.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>

### Get product variant info
> Get information about a specific product variant.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `variant_id` - _required_ - The id for the product variant.<br/>

### Add or update product variant
> Add or update a product variant.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `variant_id` - _required_ - The id for the product variant.<br/>

### Update product variant
> Update a product variant.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `variant_id` - _required_ - The id for the product variant.<br/>

### Delete product variant
> Delete a product variant.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `variant_id` - _required_ - The id for the product variant.<br/>

### Add product image
> Add a new image to the product.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>

### Get product image info
> Get information about a specific product image.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `image_id` - _required_ - The id for the product image.<br/>

### Update product image
> Update a product image.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `image_id` - _required_ - The id for the product image.<br/>

### Delete product image
> Delete a product image.<br/>

*Tags:* `ecommerce`

#### Input Parameters
* `store_id` - _required_ - The store id.<br/>
* `product_id` - _required_ - The id for the product of a store.<br/>
* `image_id` - _required_ - The id for the product image.<br/>

### Get facebook ad info
> Get details of a Facebook ad.<br/>

*Tags:* `facebookAds`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `outreach_id` - _required_ - The outreach id.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>

### Get facebook ad report
> Get report of a Facebook ad.<br/>

*Tags:* `reporting`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `outreach_id` - _required_ - The outreach id.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>

### Get landing page report
> Get report of a landing page.<br/>

*Tags:* `reporting`

#### Input Parameters
* `fields` - _optional_ - A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.<br/>
* `outreach_id` - _required_ - The outreach id.<br/>
* `exclude_fields` - _optional_ - A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.<br/>

### Get domain info
> Get the details for a single domain on the account.<br/>

*Tags:* `verifiedDomains`

#### Input Parameters
* `domain_name` - _required_ - The domain name.<br/>

### Delete domain
> Delete a verified domain from the account.<br/>

*Tags:* `verifiedDomains`

#### Input Parameters
* `domain_name` - _required_ - The domain name.<br/>

### Verify domain
> Verify a domain for sending.<br/>

*Tags:* `verifiedDomains`

#### Input Parameters
* `domain_name` - _required_ - The domain name.<br/>

### Add domain to account
> Add a domain to the account.<br/>

*Tags:* `verifiedDomains`

## License

: Mailchimp-Component<br/>
                    <br/>

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
