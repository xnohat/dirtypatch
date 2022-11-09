router.post('/api/license', ctx => {

  var full_license = {"features":["userGroups","appBackups"],"quotas":{"usage":{"monthly":{"queries":{"name":"Queries","value":-1,"triggers":[]},"automations":{"name":"Automations","value":-1,"triggers":[80,90,100]},"dayPasses":{"name":"Day Passes","value":-1,"triggers":[80,90,100]}},"static":{"apps":{"name":"Apps","value":-1,"triggers":[100]},"rows":{"name":"Rows","value":-1,"triggers":[90,100]},"userGroups":{"name":"User Groups","value":-1,"triggers":[80,100]},"plugins":{"name":"Plugins","value":-1,"triggers":[90,100]}}},"constant":{"automationLogRetentionDays":{"name":"Automation Logs","value":-1,"triggers":[]},"appBackupRetentionDays":{"name":"App Backups","value":-1,"triggers":[]}}},"plan":{"type":"enterprise"},"refreshedAt":"2022-11-09T12:52:00.030Z","version":"c6dcd6eff20b496e8a1c8c03aae0e9aa"}

  ctx.body = JSON.stringify(full_license)

});

router.post('/api/license/activate', ctx => {

  var full_license = {"features":["userGroups","appBackups"],"quotas":{"usage":{"monthly":{"queries":{"name":"Queries","value":-1,"triggers":[]},"automations":{"name":"Automations","value":-1,"triggers":[80,90,100]},"dayPasses":{"name":"Day Passes","value":-1,"triggers":[80,90,100]}},"static":{"apps":{"name":"Apps","value":-1,"triggers":[100]},"rows":{"name":"Rows","value":-1,"triggers":[90,100]},"userGroups":{"name":"User Groups","value":-1,"triggers":[80,100]},"plugins":{"name":"Plugins","value":-1,"triggers":[90,100]}}},"constant":{"automationLogRetentionDays":{"name":"Automation Logs","value":-1,"triggers":[]},"appBackupRetentionDays":{"name":"App Backups","value":-1,"triggers":[]}}},"plan":{"type":"enterprise"},"refreshedAt":"2022-11-09T12:52:00.030Z","version":"c6dcd6eff20b496e8a1c8c03aae0e9aa"}

  ctx.body = JSON.stringify(full_license)

});
