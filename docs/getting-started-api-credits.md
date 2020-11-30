---
id: api-calls
title: API Credits
---

Every SkyCiv user has a maximum number of API credits available, based on their account level. Users can check their usage at any time by visiting their [account activity page](https://platform.skyciv.com/account/api).

Different functions use a different number of API credits, based on their functionality. Typically, API calls only cost if something substantial is being performed (i.e. solving, member design checks, wind load calculations). Below is a list of the functions and how many API credits they cost to run.
<br/>

----
## List of Functions and their Costs

| Function  |     API Credits    |
| :------------- |:-----------: |
| S3D.session.start |  0 |
| S3D.session.takeScreenshot |  0 |
| S3D.model.set |  0 |
| S3D.model.solve |  1 |
| S3D.model.repair |  0 |
| S3D.member_design.getInput |  0 |
| S3D.member_design.check |  1 |
| S3D.member_design.passFailCheck |  1 |
| S3D.rc_design.getInput |  0 |
| S3D.rc_design.check |  1 |
| S3D.SB.getLibraryTree |  0 |
| S3D.SB.buildCustomShape |  1 |
| wind.getWindSpeed |  1 |
| wind.getPressures |  1 |


<br/><br/>

----
## Pricing

Each account level comes with a set number of API credits which can be viewed on the [pricing page](https://skyciv.com/checkout/). If you feel the pricing structure doesn't align with your needs, feel free to <a href="mailto:support@skyciv.com">email us</a>.

<br/>

----
## Tracking your Usage

With every API call, users will also receive a summary of their usage. for that API call. and how much of your monthly quota has been used:

```js
	"monthly_api_credits": {
		"quota": 6000,
		"total_used": 35,
		"used_this_call": 2
	}
```

<br/>
Users can review their API usage at any time from [account activity page](https://platform.skyciv.com/account/api). This will include a view of your usage limit, and a log of all your API calls:

<br/>
<img src="/api-v3-docs/img/images/api-usage-skyciv-platform.png" style={{width: '70%'}}/>

