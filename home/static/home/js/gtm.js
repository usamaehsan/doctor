
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"48",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",c=\"addToCart\"===a?\"AddToCart\":\"checkOut\"===a?\"InitiateCheckout\":\"purchase\"===a?\"Purchase\":\"customEvent\",b=\"customEvent\"===c?\"trackCustom\":\"track\";return function(){fbq\u0026\u0026(\"trackCustom\"===b\u0026\u0026fbq(b,a),fbq(b,c))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname.split(\"\/\")[window.location.pathname.split(\"\/\").length-3].replace(\/-\/g,\" \").toUpperCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname.split(\"\/\")[window.location.pathname.split(\"\/\").length-1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByTagName(\"h1\")[0].innerText.trim().toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"breadcrumb\")[0].getElementsByTagName(\"li\");return\"undefined\"!==typeof a[2]?a[2].innerText:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"breadcrumb\")[0].getElementsByTagName(\"li\");return\"undefined\"!==typeof a[3]\u0026\u0026\/\\b(IN)\\b\/g.test(a[3].innerText)?a[3].innerText.split(\"IN\")[0].trim().slice(0,-1):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.contains(document.getElementById(\"fbp_specialty_id\"))?document.getElementById(\"fbp_specialty_id\").value:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return isNaN(parseInt(window.location.href.toString().split(\"\/\")[5]))?\"\":parseInt(window.location.href.toString().split(\"\/\")[5])})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return isNaN(parseInt(window.location.href.toString().split(\"\/\")[7]))?\"\":parseInt(window.location.href.toString().split(\"\/\")[7])})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.contains(document.getElementById(\"fbp_sepcialty_id\"))?document.getElementById(\"fbp_sepcialty_id\").value:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.contains(document.getElementById(\"fbp_doctor_id\"))?document.getElementById(\"fbp_doctor_id\").value:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.contains(document.getElementById(\"fbp_doctor_name\"))?document.getElementById(\"fbp_doctor_name\").value:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.contains(document.getElementById(\"fbp_doctor_fee\"))?document.getElementById(\"fbp_doctor_fee\").value:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.contains(document.getElementById(\"fbp_top_doctors\"))?document.getElementById(\"fbp_top_doctors\").value.split(\",\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null!==document.querySelector(\".doctor-fee\")?parseInt(document.getElementsByClassName(\"doctor-fee\")[0].innerText.replace(\/[^0-9]\/g,\"\")):0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-111529966-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"doctor-name",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"specializations",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"\/order_request"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":20,
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2094734740812975\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2094734740812975\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":20,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-ad-client=\"ca-pub-5096215480307034\" async data-gtmsrc=\"https:\/\/pagead2.googlesyndication.com\/pagead\/js\/adsbygoogle.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"trigger\",\"select-time\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ehj(\"trigger\",\"enter-details\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Click to Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Doctor phone number clicked",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Click to Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Hospital phone number clicked",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":8
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Searched doctor by name and specialization",
      "vtp_eventLabel":["template",["macro",22]," | ",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Searched doctor by name",
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Searched doctor by specialization",
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Searched doctor",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"820673",
      "tag_id":14
    },{
      "function":"__ua",
      "unlimited":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Searched hospital",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0.2",
      "vtp_eventCategory":"Click to Call",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Phone number clicked",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"cegg",
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",18],"#",["macro",16]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Tapped multi-faceted search suggestion",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Reached bottom of doctor listing",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Clicked pagination button on doctor listing",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"gaawc",
      "tag_id":40
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter \u0026 Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Filter applied through listing",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter \u0026 Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Filter applied through popup",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter \u0026 Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Filter popup opened",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter \u0026 Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Specialty listing page viewed",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Filter \u0026 Sort",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Filter applied",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Viewed intrusive web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Dismissed intrusive web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"App open on intrusive web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"App open from header",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Viewed floating web-to-app button",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Dismissed floating web-to-app button",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"App open from floating web-to-app button",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Viewed post-appointment intrusive web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Dismissed post-appointment web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"App open from post-appointment web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Closed intrusive web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Closed post-appointment web-to-app bottom sheet",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"Viewed listing card web-to-app button",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"App open from listing card web-to-app button",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"User behavior",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",19],
      "vtp_eventAction":"App open from web-to-app button",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__hl",
      "tag_id":62
    },{
      "function":"__hl",
      "tag_id":63
    },{
      "function":"__hl",
      "tag_id":64
    },{
      "function":"__cl",
      "tag_id":65
    },{
      "function":"__cl",
      "tag_id":66
    },{
      "function":"__cl",
      "tag_id":67
    },{
      "function":"__hl",
      "tag_id":68
    },{
      "function":"__hl",
      "tag_id":69
    },{
      "function":"__cl",
      "tag_id":70
    },{
      "function":"__hl",
      "tag_id":71
    },{
      "function":"__hl",
      "tag_id":72
    },{
      "function":"__hl",
      "tag_id":73
    },{
      "function":"__hl",
      "tag_id":74
    },{
      "function":"__cl",
      "tag_id":75
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"2500",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"8133654_60",
      "tag_id":76
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","8133654_64_60","8133654_64_42"],
      "vtp_uniqueTriggerId":"8133654_64",
      "tag_id":77
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_64_60",
      "tag_id":78
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_64_42",
      "tag_id":80
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","8133654_65_60","8133654_65_39"],
      "vtp_uniqueTriggerId":"8133654_65",
      "tag_id":81
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_65_60",
      "tag_id":82
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_65_39",
      "tag_id":84
    },{
      "function":"__cl",
      "tag_id":85
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"nav[aria-label=\"Card list pagination\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8133654_76",
      "tag_id":86
    },{
      "function":"__cl",
      "tag_id":87
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","8133654_80_55","8133654_80_39"],
      "vtp_uniqueTriggerId":"8133654_80",
      "tag_id":88
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_80_55",
      "tag_id":89
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_80_39",
      "tag_id":91
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","8133654_81_55","8133654_81_42"],
      "vtp_uniqueTriggerId":"8133654_81",
      "tag_id":92
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_81_55",
      "tag_id":93
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"8133654_81_42",
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__cl",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__evl",
      "vtp_elementId":"useapp-modal",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8133654_91",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__cl",
      "tag_id":102
    },{
      "function":"__evl",
      "vtp_elementId":"open_oladoc_app",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8133654_95",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__evl",
      "vtp_elementId":"useapp-modal-downloadapp",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"10",
      "vtp_uniqueTriggerId":"8133654_98",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__cl",
      "tag_id":109
    },{
      "function":"__cl",
      "tag_id":110
    },{
      "function":"__evl",
      "vtp_elementId":"listing_banner_open_app_btn",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"8133654_105",
      "tag_id":111
    },{
      "function":"__cl",
      "tag_id":112
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_name:\"",["escape",["macro",4],7],"\",content_type:\"product\",content_category:\"",["escape",["macro",7],7],"\",content_ids:[\"",["escape",["macro",3],7],"\"]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{content_name:\"",["escape",["macro",5],7],"\",content_category:\"",["escape",["macro",7],7],"\",content_type:\"product\",content_ids:",["escape",["macro",14],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"track\",\"Purchase\",{content_type:\"product\",content_category:\"",["escape",["macro",10],7],"\",content_ids:[\"",["escape",["macro",11],7],"\"],content_name:\"",["escape",["macro",12],7],"\",currency:\"PKR\",value:\"",["escape",["macro",13],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":29
    },{
      "function":"__html",
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"track\",\"AddToCart\",{content_type:\"product\",content_category:\"",["escape",["macro",10],7],"\",content_ids:[\"",["escape",["macro",11],7],"\"],content_name:\"",["escape",["macro",12],7],"\",currency:\"PKR\",value:\"",["escape",["macro",13],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":30
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_type:\"product\",content_category:\"",["escape",["macro",7],7],"\",content_ids:[\"",["escape",["macro",3],7],"\"],content_name:\"",["escape",["macro",4],7],"\",value:",["escape",["macro",15],8,16],",currency:\"PKR\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{content_type:\"product\",content_category:\"",["escape",["macro",7],7],"\",content_name:\"",["escape",["macro",4],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Schedule\",{content_type:\"product\",content_category:\"",["escape",["macro",10],7],"\",content_ids:[\"",["escape",["macro",8],7],"\"],content_name:\"",["escape",["macro",4],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"FindLocation\",{content_type:\"product\",content_category:\"",["escape",["macro",4],7],"\",content_name:\"hospital\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{content_type:\"product\",content_category:\"",["escape",["macro",7],7],"\",content_name:\"",["escape",["macro",5],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_type:\"product\",content_category:\"",["escape",["macro",7],7],"\",content_ids:",["escape",["macro",14],8,16],",content_name:\"",["escape",["macro",7],7],"\",currency:\"PKR\",value:0});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"enter-details"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"select-time"
    },{
      "function":"_css",
      "arg0":["macro",20],
      "arg1":".doc-phone-number"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",20],
      "arg1":".hos-phone-number"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"request"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"complete"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/appointment\/"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"undefined|^$"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"search_doctor|advance_search_filter"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"undefined|^$"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"booking-success"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"select-date-time"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"search-hospital"
    },{
      "function":"_css",
      "arg0":["macro",20],
      "arg1":".call-number"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"enter-number"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"enter-otp"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"enter-password"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"filters-search-inputautocomplete-list"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_76($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",20],
      "arg1":"nav[aria-label=\"Card list pagination\"] .btn"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"maledoc1|femaledoc1|today1|nextthreedays1|available_three_day"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"filter-apply-btn"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"filters_sort_btn"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/pakistan\/"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/dr\/"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/h\/"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/hospital"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/condition"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/treatment"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":".*treatment|condition.*"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_91($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"bottom_sheet_blocker_dismiss"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"bottom_sheet_blocker_open"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"header_button_use_app"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_95($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"open_oladoc_app_dismiss"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"open_oladoc_use_app"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_98($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"booking_success_screen_no_thanks"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"booking_success_screen_use_oladoc_app"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"useapp-modal"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"useapp-modal-downloadapp"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_105($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"listing_banner_open_app_btn"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"MTT45TS"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_60($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"call-number"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_65($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_64($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_80($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"(^$|((^|,)8133654_81($|,)))"
    }],
  "rules":[
    [["if",0,1],["add",4,3]],
    [["if",1,2],["add",5,2]],
    [["if",3,4],["add",6]],
    [["if",4,5],["add",7]],
    [["if",1,6],["add",8]],
    [["if",1,7],["add",8]],
    [["if",8],["add",9,20,25,46,47,48,49,50,51,52,53,54,55,56,57,58,59,61,64,67,68,69,70,73,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92]],
    [["if",8,11],["unless",10,12],["add",10]],
    [["if",8,11,12],["unless",10],["add",11]],
    [["if",8,10,11],["unless",12],["add",12]],
    [["if",8,11],["add",13]],
    [["if",8,13],["add",14,95,96]],
    [["if",1,14],["add",14,21,99]],
    [["if",8,15],["add",15]],
    [["if",4,16],["add",16]],
    [["if",1,17],["add",17]],
    [["if",1,18],["add",18]],
    [["if",1,19],["add",19]],
    [["if",4,20],["add",22]],
    [["if",21,22],["add",23]],
    [["if",4,23],["add",24]],
    [["if",4,24],["add",26,30]],
    [["if",4,25],["add",27,30]],
    [["if",4,26],["add",28]],
    [["if",8,27],["unless",28,29,30,31,32],["add",29,63,75]],
    [["if",21,34],["add",31]],
    [["if",4,35],["add",32]],
    [["if",4,36],["add",33,45]],
    [["if",4,37],["add",34,45]],
    [["if",21,38],["add",35]],
    [["if",4,39],["add",36]],
    [["if",4,40],["add",37,45]],
    [["if",21,41],["add",38]],
    [["if",4,42],["add",39]],
    [["if",4,43],["add",40,45]],
    [["if",4,44],["add",41]],
    [["if",4,45],["add",42]],
    [["if",21,46],["add",43]],
    [["if",4,47],["add",44,45]],
    [["if",8,48],["add",60]],
    [["if",49,50],["add",62,65,0,1]],
    [["if",8,27,28],["add",66,72]],
    [["if",4,51],["add",71,74]],
    [["if",52,53],["add",93]],
    [["if",52,54],["add",94]],
    [["if",52,55],["add",97,98]],
    [["if",8,29],["add",100]],
    [["if",52,56],["add",101,102]],
    [["if",8,9],["block",9]],
    [["if",8,33],["block",29]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},f=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},pa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ra=function(a,b){for(var c=new qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},qa=function(){this.prefix="gtm.";this.values={}};qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};qa.prototype.get=function(a){return this.values[this.prefix+a]};qa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Da=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ea=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Fa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ga=function(a){if(null==a)return String(a);var b=Fa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ha=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ia=function(a){if(!a||"object"!=Ga(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ha(a,"constructor")&&!Ha(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ha(a,b)},u=function(a,b){var c=b||("array"==Ga(a)?[]:{}),d;for(d in a)if(Ha(a,d)){var e=a[d];"array"==Ga(e)?("array"!=Ga(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Ia(e)?(Ia(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Ja=[],Ka={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},La=function(a){return Ka[a]},Ma=/[\x00\x22\x26\x27\x3c\x3e]/g;var Qa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ra={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Va=function(a){return Ra[a]};Ja[7]=function(a){return String(a).replace(Qa,Va)};
Ja[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Qa,Va)+"'"}};var cb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,db={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},eb=function(a){return db[a]};Ja[16]=function(a){return a};var hb;
var ib=[],jb=[],kb=[],lb=[],mb=[],nb={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!nb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?nb[c](e):hb(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},wb=
function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=nb[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Ac(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Ff(d,k))}catch(w){b.Yd&&b.Yd(w,Number(g)),d=!1}c[g]=!1;return d;case "map":d=
{};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ub(a[n],b,c);qb&&(m=m||p===qb.vb);d.push(p)}return qb&&m?qb.If(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.jg(a))return qb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ja[a[t]]&&(d=Ja[a[t]](d));return d;case "tag":var q=a[1];if(!lb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Kd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),bh:a("debug_mode_metadata"),ia:a("function"),Se:a("instance_name"),Te:a("live_only"),Ue:a("malware_disabled"),Ve:a("metadata"),eh:a("original_vendor_template_id"),We:a("once_per_event"),yd:a("once_per_load"),zd:a("setup_tags"),Ad:a("tag_id"),Bd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Db,Eb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.qf&&(l["fix_"+m]=!0),l.Ld=l.Ld||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,H:q.H,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,A){var z=y||x||A||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=z;r[w]=B.textContent||B.innerText||z});return{tagName:q[1],H:r,jb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Ld&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Xd=function(){return this[this.length-1]};v.Ec=function(B){var E=this.Xd();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.Ef=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.jb=q.test(B.tagName)||B.jb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Ec("TABLE")?(k="<TBODY>"+k,z()):l.oh&&r.test(E)&&v.Ef(E)?v.Ec(E)?x():(k="</"+B.tagName+">"+k,z()):B.jb||v.push(B)},endTag:function(B){v.Xd()?l.Sf&&!v.Ec(B.tagName)?x():v.pop():l.Sf&&(y(),z())}},z=function(){var B=k,E=w(y());k=B;if(E&&
A[E.type])A[E.type](E)};t=function(){z();return w(y())}}();return{append:function(q){k+=q},Eg:t,th:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},uh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.zh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.vh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ah=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.H){var t=m.H[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.jb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.nh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.vf=a.vf||!b[h]&&h;Db=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={cf:a,df:a,ef:a,ff:a,rf:a,sf:function(p){return p},done:a,error:function(p){throw p;},Ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,lb:v.defaultView||v.parentWindow,Aa:v,Ob:Db("",{qf:!0}),mc:[q],Oc:"",Pc:v.createElement(q.nodeName),hb:[],na:[]});p(this.Pc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.na,arguments);for(var q;!this.Gb&&this.na.length;)q=this.na.shift(),"function"===typeof q?this.zf(q):this.Zc(q)};t.prototype.zf=function(q){var r={type:"function",value:q.name||q.toString()};this.Lc(r);q.call(this.lb,this.Aa);this.$d(r)};
t.prototype.Zc=function(q){this.Ob.append(q);for(var r,v=[],w,y;(r=this.Ob.Eg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.$g(v);w&&this.Yf(r);y&&this.Zf(r)};t.prototype.$g=function(q){var r=this.wf(q);r.Dd&&(r.yc=this.Oc+r.Dd,this.Oc+=r.Ag,this.Pc.innerHTML=r.yc,this.Yg())};t.prototype.wf=function(q){var r=this.mc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.H){if(!/^noscript$/i.test(x.tagName)){var A=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.H.id&&"ps-style"!==x.H.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.jb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Bh:q,raw:v.join(""),Dd:w.join(""),Ag:y.join("")}};t.prototype.Yg=function(){for(var q,r=[this.Pc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.mc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.mc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Yf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.src=q.H.src||q.H.fh;q.src&&this.hb.length?this.Gb=q:this.Lc(q);var v=this;this.Zg(q,function(){v.$d(q)})};t.prototype.Zf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.type=q.H.type||q.H.gh||"text/css";this.ah(q);r&&this.write()};t.prototype.ah=function(q){var r=this.yf(q);this.hg(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Aa.createTextNode(q.content)))};t.prototype.yf=function(q){var r=this.Aa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.H,function(v,w){r.setAttribute(v,w)});return r};t.prototype.hg=function(q){this.Zc('<span id="ps-style"/>');var r=this.Aa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Lc=function(q){q.qg=this.na;this.na=[];this.hb.unshift(q)};t.prototype.$d=function(q){q!==this.hb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.hb.shift(),this.write.apply(this,q.qg),!this.hb.length&&this.Gb&&(this.Lc(this.Gb),this.Gb=null))};t.prototype.Zg=function(q,r){var v=this.xf(q),w=this.Ng(v),y=this.options.cf;q.src&&(v.src=q.src,this.Lg(v,w?y:function(){r();y()}));try{this.gg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.xf=function(q){var r=this.Aa.createElement(q.tagName);d(q.H,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.gg=function(q){this.Zc('<span id="ps-script"/>');
var r=this.Aa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Lg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.Ng=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.df(),w.stream=t.apply(null,w),y.ef())}function t(w,y,x){function A(F){F=x.sf(F);v.write(F);x.ff(F)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var z=w.ownerDocument,B={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=v.lb.onerror||a;v.lb.onerror=function(F,M,N){x.error({qh:F+
" - "+M+":"+N});E.apply(v.lb,arguments)};v.write(y,function(){e(z,B);v.lb.onerror=E;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ph?w[0]:w;var A=[w,y,x];w.ug={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.rf(A);r.push(A);v||p();return w.ug},{streams:{},sh:r,hh:n})}();Eb=l.postscribe}})();for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var C=window,D=document,Hb=navigator,Ib=D.currentScript&&D.currentScript.src,Jb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){C.setTimeout(a,0)},Rb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tb=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ub=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Vb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Yb:"event_callback",La:"event_timeout",V:"gtag.config",O:"allow_ad_personalization_signals",R:"cookie_expires",Ka:"cookie_update",va:"session_duration"};var jc=/[A-Z]+/,kc=/\s/,lc=function(a){if(ka(a)&&(a=wa(a),!kc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(jc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},nc=function(a){for(var b={},c=0;c<a.length;++c){var d=lc(a[c]);d&&(b[d.id]=d)}mc(b);var e=[];sa(b,function(g,h){e.push(h)});return e};
function mc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var oc={},pc=null,qc=Math.random();oc.m="GTM-MTT45TS";oc.zb="9p0";var rc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+oc.m+"&cv=48",yc={},zc={},Ac=function(){var a=pc.sequence||0;pc.sequence=a+1;return a};var Bc={},Dc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Ec=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Fc=function(){return"&tc="+lb.filter(function(a){return a}).length},Pc=function(){Gc&&(C.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.lg()||0>=Mc--?(Dc("GTM",1),Kc[Hc]=!0):(Lc.Gg(),Ob(Nc()),Ic[Hc]=!0,Oc=Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";var b=Ec("GTM"),c=Ec("TAGGING");return[Qc,Ic[a]?"":"&es=1",Rc[a],b?"&u="+b:"",c?"&ut="+c:"",Fc(),Jc,Oc,"&z=0"].join("")},Sc=function(){return[xc,"&v=3&t=t","&pid="+pa(),"&rv="+oc.zb].join("")},Tc="0.005000">
Math.random(),Qc=Sc(),Uc=function(){Qc=Sc()},Ic={},Jc="",Oc="",Hc=void 0,Rc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},Gg:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Mc=1E3,Vc=function(a,b){if(Tc&&!Kc[a]&&Hc!==a){Pc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Rc[a]="&e="+c+"&eid="+a;Gc||(Gc=C.setTimeout(Pc,500))}},Wc=function(a,b,c){if(Tc&&!Kc[a]&&b){a!==Hc&&(Pc(),Hc=a);var d=String(b[yb.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Jc=Jc?Jc+"."+e:"&tr="+e;Gc||(Gc=C.setTimeout(Pc,500));2022<=Nc().length&&Pc()}};var Xc={},Yc=new qa,Zc={},$c={},dd={name:"dataLayer",set:function(a,b){u(ad(a,b),Zc);bd()},get:function(a){return cd(a,2)},reset:function(){Yc=new qa;Zc={};bd()}},cd=function(a,b){if(2!=b){var c=Yc.get(a);if(Tc){var d=ed(a);c!==d&&Dc("GTM",5)}return c}return ed(a)},ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:gd(d)},gd=function(a){for(var b=Zc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var jd=function(a,b){$c.hasOwnProperty(a)||(Yc.set(a,b),u(ad(a,b),Zc),bd())},ad=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},bd=function(a){sa($c,function(b,c){Yc.set(b,c);u(ad(b,void 0),Zc);u(ad(b,c),Zc);a&&delete $c[b]})},kd=function(a,b,c){Xc[a]=Xc[a]||{};var d=1!==c?ed(b):Yc.get(b);"array"===Ga(d)||"object"===Ga(d)?Xc[a][b]=u(d):Xc[a][b]=d},ld=function(a,b){if(Xc[a])return Xc[a][b]};var md=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===nd()||d||"http:"!=C.location.protocol?a:b)+c},nd=function(){var a=Mb(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Dd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ed={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Fd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Hd=function(a){var b=cd("gtm.whitelist");b&&Dc("GTM",9);var c=b&&Ea(va(b),Dd),d=cd("gtm.blacklist");d||(d=cd("tagTypeBlacklist"))&&Dc("GTM",3);
d?Dc("GTM",8):d=[];Gd()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=f(va(d),"google")&&Dc("GTM",2);var e=d&&Ea(va(d),Ed),g={};return function(h){var k=h&&h[yb.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>f(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
f(c,l[p])){Dc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=f(e,k);if(q)t=q;else{var r=ra(e,l||[]);r&&Dc("GTM",10);t=r}}var v=!m||t;v||!(0<=f(l,"sandboxedScripts"))||c&&-1!==f(c,"sandboxedScripts")||(v=ra(e,Fd));return g[k]=v}},Gd=function(){return Cd.test(C.location&&C.location.hostname)};var Id={Ff:function(a,b){b[yb.cd]&&"string"===typeof a&&(a=1==b[yb.cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.ed)&&null===a&&(a=b[yb.ed]);b.hasOwnProperty(yb.gd)&&void 0===a&&(a=b[yb.gd]);b.hasOwnProperty(yb.fd)&&!0===a&&(a=b[yb.fd]);b.hasOwnProperty(yb.dd)&&!1===a&&(a=b[yb.dd]);return a}};var Jd={active:!0,isWhitelisted:function(){return!0}},Kd=function(a){var b=pc.zones;!b&&a&&(b=pc.zones=a());return b};var Ld=!1,Md=0,Nd=[];function Od(a){if(!Ld){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ld=!0;for(var e=0;e<Nd.length;e++)G(Nd[e])}Nd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Pd(){if(!Ld&&140>Md){Md++;try{D.documentElement.doScroll("left"),Od()}catch(a){C.setTimeout(Pd,50)}}}var Qd=function(a){Ld?a():Nd.push(a)};var Rd={},Sd={},Td=function(a,b,c,d){if(!Sd[a]||rc[b]||"__zone"===b)return-1;var e={};Ia(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Sd[a].tags.push(e)-1},Ud=function(a,b,c,d){if(Sd[a]){var e=Sd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Vd(a){for(var b=Rd[a]||[],c=0;c<b.length;c++)b[c]();Rd[a]={push:function(d){d(oc.m,Sd[a])}}}
var Yd=function(a,b,c){Sd[a]={tags:[]};ja(b)&&Wd(a,b);c&&C.setTimeout(function(){return Vd(a)},Number(c));return Xd(a)},Wd=function(a,b){Rd[a]=Rd[a]||[];Rd[a].push(za(function(){return G(function(){b(oc.m,Sd[a])})}))};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Vd(a)})},nf:function(){d=!0;b>=c&&Vd(a)}}};var Zd=function(){function a(d){return!la(d)||0>d?0:d}if(!pc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=la(dd.get("gtm.start"))?dd.get("gtm.start"):0;pc._li={cst:a(c-b),cbt:a(vc-b)}}};var ce=!1,de=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},ee=!1;
var fe=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Dc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}Zd();return C[b]},ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=de();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ie=function(){},he=function(){return C.GoogleAnalyticsObject||"ga"};var ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var le=/:[0-9]+$/,me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ne(a.protocol)||ne(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(le,"").toLowerCase());var g=b,h,k=ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Dc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=f(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ne=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
qe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Dc("TAGGING",1),c="/"+c);var d=b.hostname.replace(le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var we=function(a){};function ve(a,b){a.containerId=oc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function xe(a,b,c,d){var e=lb[a],g=ye(a,b,c,d);if(!g)return null;var h=ub(e[yb.zd],c,[]);if(h&&h.length){var k=h[0];g=xe(k.index,{J:g,T:1===k.Kd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ye(a,b,c,d){function e(){if(g[yb.Ue])k();else{var w=vb(g,c,[]),y=Td(c.id,String(g[yb.ia]),Number(g[yb.Ad]),w[yb.Ve]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-z;Wc(c.id,lb[a],"5");Ud(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-z;Wc(c.id,lb[a],"6");Ud(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Wc(c.id,g,"1");var A=function(B){var E=xa()-z;we(B);Wc(c.id,g,"7");Ud(c.id,y,"exception",E);x||(x=!0,k())};var z=xa();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.T,l=b.terminate;if(c.Ac(g))return null;var m=ub(g[yb.Bd],c,[]);if(m&&m.length){var n=m[0],p=xe(n.index,{J:h,T:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Kd?l:p}if(g[yb.yd]||g[yb.We]){var t=g[yb.yd]?mb:c.Pg,q=h,r=k;if(!t[a]){e=za(e);var v=ze(a,t,e);h=v.J;k=v.T}return function(){t[a](q,r)}}return e}
function ze(a,b,c){var d=[],e=[];b[a]=Ae(d,e,c);return{J:function(){b[a]=Be;for(var g=0;g<d.length;g++)d[g]()},T:function(){b[a]=Ce;for(var g=0;g<e.length;g++)e[g]()}}}function Ae(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Be(a){a()}function Ce(a,b){b()};var Fe=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.cb[d]){var e=lb[d];var g=b.add();try{var h=xe(d,{J:g,T:g,terminate:g},a,d);h?c.push({oe:d,de:wb(e),Qf:h}):(De(d,a),g())}catch(l){g()}}b.nf();c.sort(Ee);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Ee(a,b){var c,d=b.de,e=a.de;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.oe,k=b.oe;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!Tc)return;var c=function(d){var e=b.Ac(lb[d])?"3":"4",g=ub(lb[d][yb.zd],b,[]);g&&g.length&&c(g[0].index);Wc(b.id,lb[d],e);var h=ub(lb[d][yb.Bd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ge=!1,He=function(a,b,c,d,e){if("gtm.js"==b){if(Ge)return!1;Ge=!0}Vc(a,b);var g=Yd(a,d,e);kd(a,"event",1);kd(a,"ecommerce",1);kd(a,"gtm");var h={id:a,name:b,Ac:Hd(c),cb:[],Pg:[],Yd:function(n){Dc("GTM",6);we(n)}};h.cb=Cb(h);var k=Fe(h,g);
if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=lb[l];if(m&&!rc[String(m[yb.ia])])return!0}return!1};var Je=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.fb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.fb[h])return g.fb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Ke={},Le=["G"];Ke.pe="";var Me=Ke.pe.split(",");function Ne(){var a=pc;return a.gcq=a.gcq||new Oe}
var Pe=function(a,b){Ne().register(a,b,void 0)},Qe=function(a,b,c,d){Ne().push("event",[b,a],c,d)},Re=function(a,b){Ne().push("config",[a],b)},Se={},Te=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.fb={};this.ee=null;this.Ud=!1},Ue=function(a,b,c,d,e){this.type=a;this.Ug=b;this.N=c||"";this.Cb=d;this.defer=e},Oe=function(){this.Gd={};this.Pd={};this.Xa=[]},Ve=function(a,b){var c=lc(b);return a.Gd[c.containerId]=a.Gd[c.containerId]||new Te},We=function(a,b,c,d){if(d.N){var e=
Ve(a,d.N),g=e.ee;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.fb),n=u(a.Pd),p=new Je(h,k,l,m,n);try{g(b,d.Ug,p)}catch(t){}}}};Oe.prototype.register=function(a,b,c){if(3!==Ve(this,a).status){Ve(this,a).ee=b;Ve(this,a).status=3;c&&(Ve(this,a).fb=c);var d=lc(a),e=Se[d.containerId];if(void 0!==e){var g=cd("gtm.uniqueEventId"),h=d.prefix,k=xa()-e;if(Tc&&!Kc[g]){g!==Hc&&(Pc(),Hc=g);var l=""+h+Math.floor(k);Oc=Oc?Oc+"."+l:"&cl="+l}delete Se[d.containerId]}this.flush()}};
Oe.prototype.push=function(a,b,c,d){var e=Math.floor(xa()/1E3);if(c){var g=lc(c),h;if(h=g){var k;if(k=1===Ve(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ve(this,c).status=2,this.push("require",[],g.containerId),Se[g.containerId]=xa(),!md())){var m=encodeURIComponent(g.containerId);Lb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.Xa.push(new Ue(a,e,c,b,d));d||this.flush()};
Oe.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ve(this,c.N).status&&!a)return;break;case "set":sa(c.Cb[0],function(l,m){b.Pd[l]=m});break;case "config":var d=c.Cb[0],e=!!d[H.tb];delete d[H.tb];var g=Ve(this,c.N),h=lc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.Ud&&e||We(this,H.V,d,c);g.Ud=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;case "event":We(this,
c.Cb[1],c.Cb[0],c)}this.Xa.shift()}};var Xe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},af=function(a,b,c,d){var e=Ye(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ze(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Ze(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function bf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Xe(b,e).indexOf(c)}
var ef=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=cf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!df(y,t)&&bf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!df(p,t)&&bf(m,a,l)}return k};function Ze(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Ye(a,b){for(var c=[],d=Xe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var ff=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i,df=function(a,b){return gf.test(document.location.hostname)||"/"===b&&ff.test(a)},cf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;gf.test(e)||ff.test(e)||a.push("none");return a};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.Yb]&&(c.eventCallback=b[H.Yb]),b[H.La]&&(c.eventTimeout=b[H.La]));return c};
var tf={config:function(a){},event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ia(a[2])&&void 0!=a[2])return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).ih(a[1],a[2])},set:function(a){var b;2==a.length&&Ia(a[1])?b=u(a[1]):3==a.length&&ka(a[1])&&(b={},Ia(a[2])||ma(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},uf={policy:!0};var wf=function(a){return vf?D.querySelectorAll(a):null},xf=function(a,b){if(!vf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yf=!1;if(D.querySelectorAll)try{var zf=D.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==D.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=function(a){if(Ff(a))return a;this.Xg=a};Gf.prototype.Xf=function(){return this.Xg};var Ff=function(a){return!a||"object"!==Ga(a)||Ia(a)?!1:"getUntrustedUpdateValue"in a};Gf.prototype.getUntrustedUpdateValue=Gf.prototype.Xf;var Hf=!1,If=[];function Jf(){if(!Hf){Hf=!0;for(var a=0;a<If.length;a++)G(If[a])}}var Kf=function(a){Hf?G(a):If.push(a)};var Lf=[],Mf=!1,Nf=function(a){return C["dataLayer"].push(a)},Of=function(a){var b=pc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Qf=function(a){var b=a._clear;sa(a,function(g,h){"_clear"!==g&&(b&&jd(g,void 0),jd(g,h))});uc||(uc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,jd("gtm.uniqueEventId",d));wc=c;var e=Pf(a);
wc=null;switch(c){case "gtm.init":Dc("GTM",19),e&&Dc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=pc.zones;d=e?e.checkState(oc.m,c):Jd;return d.active?He(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Zc.eventModel;bd();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=cd(h,1);if(ma(k)||Ia(k))k=u(k);$c[h]=k}}try{if(ja(b))try{b.call(dd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=cd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&bd(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=oc.m,c=C["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<pc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Dc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.vb=new String("undefined");
var qg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pg.vb?b:a[d]);return c.join("")}};qg.prototype.toString=function(){return this.resolve("undefined")};qg.prototype.valueOf=qg.prototype.toString;pg.Ye=qg;pg.jc={};pg.If=function(a){return new qg(a)};var rg={};pg.Hg=function(a,b){var c=Ac();rg[c]=[a,b];return c};pg.Hd=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pg.vg=function(a){if(a===pg.vb)return a;var b=Ac();pg.jc[b]=a;return'google_tag_manager["'+oc.m+'"].macro('+b+")"};pg.ng=function(a,b,c){a instanceof pg.Ye&&(a=a.resolve(pg.Hg(b,c)),b=ia);return{yc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=function(a){pc.hasOwnProperty("autoEventsSettings")||(pc.autoEventsSettings={});var b=pc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ug=function(a,b,c){tg(a)[b]=c},vg=function(a,b,c,d){var e=tg(a),g=ya(e,b,d);e[b]=c(g)},wg=function(a,b,c){var d=tg(a);return ya(d,b,c)};var xg=function(){for(var a=Hb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return af(a,e,zg(c),d)},Bg=function(a,b,c,d){var e=""+yg(c),g=zg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},yg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},zg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);ef(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}function Eg(a){return(a||"_gcl")+"_au"};var Ig=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Uf:k[2]}))}return g};function Jg(){for(var a=Kg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kg=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=function(){var a=Rg,b=Sg,c=Tg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Pb(D,"mousedown",d);Pb(D,"keyup",d);Pb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Tg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ng(String(d))))}var e=b.join("*");return["1",$g(e),e].join("*")},$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=qe(C.location.href),c=b.search.replace("?",""),d=me(c,"_gl",!0)||"";a.query=bh(d)||{};var e=pe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ca(c,d.query),Ca(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Da(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);ke.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Da(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);ke.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=pe(qe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=function(){var a=D.location.hostname,b=Wg.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xg,""),l=e.replace(Xg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},jh=function(a,b){return!1===a?!1:a||b||ih()};var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ph(a){return a&&"string"==typeof a&&a.match(lh)?a:"_gcl"}var rh=function(){var a=qe(C.location.href),b=pe(a,"query",!1,void 0,"gclid"),c=pe(a,"query",!1,void 0,"gclsrc"),d=pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||me(e,"gclid",void 0);c=c||me(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&ef(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Hc?7776E3:b.Hc;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),xa()),t;b:{for(var q=p,r=Xe(m,D.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||ef(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=function(a,b){var c=oh[a];if(void 0!==c)return b+c},vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=Xe(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=function(a){return a.filter(function(b){return nh.test(b)})},Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);sa(d,function(g,h){var k=Xe(c+h,D.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=qe(C.location.href),c=pe(b,"host",!1);if(c&&c.match(Bh)){var d=pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(D.cookie){var l=Xe(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===f(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];sa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=pc.joined_au=pc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===oc.zb.length)Gh="g";else{var Hh="G";Gh=Hh}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=oc.m.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===oc.zb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+oc.zb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!na(Ph,function(c){return c===b})||"input"===b&&na(Qh,function(c){return c===a.type.toLowerCase()})?!1:!0},Sh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):Ub(a,["form"],100)},Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!C.MutationObserver,Xh=void 0,Yh=function(a){if(!Xh){var b=function(){var c=D.body;if(c)if(Wh)(new MutationObserver(function(){for(var e=0;e<Xh.length;e++)G(Xh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pb(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Xh.length;e++)G(Xh[e])}))})}};Xh=[];D.body?b():G(b)}Xh.push(a)};
var pi=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Dc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},qi=function(a){var b=pi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},ri=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var si=[],ti=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),ui=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<si.length;g++)if(!si[g])return si[g]=d,g;return si.push(d)-1},vi=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:xa()};G(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=qi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},wi=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ti){var e=!1;G(function(){e||vi(a,b,c)()});return ui(function(g){e=!0;for(var h={Ga:0};h.Ga<g.length;h={Ga:h.Ga},h.Ga++)G(function(k){return function(){return a(g[k.Ga])}}(h))},b,c)}return C.setInterval(vi(a,b,c),1E3)},xi=function(a){ti?0<=a&&a<si.length&&si[a]&&(si[a].disconnect(),si[a]=void 0):C.clearInterval(a)};var zi=C.clearTimeout,Ai=C.setTimeout,K=function(a,b,c){if(md()){b&&G(b)}else return Lb(a,b,c)},Bi=function(){return C.location.href},Ci=function(a){return pe(qe(a),"fragment")},Di=function(a){return oe(qe(a))},Ei=null;
var Fi=function(a,b){return cd(a,b||2)},Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Ii=function(a,b,c){return Xe(a,b,void 0===c?!0:!!c)},Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Hc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=function(a,b,c,d,e){
yh(a,b,c,d,e);},Mi=function(a,b){if(md()){b&&G(b)}else Nb(a,b)},Ni=function(a){return!!wg(a,"init",!1)},Oi=function(a){ug(a,"init",!0)},Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&sa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Qi=function(a,b){var c=a[b];
return c};
var Si=pg.ng;var Ti=new qa,Ui=function(a,b){function c(h){var k=qe(h),l=pe(k,"protocol"),m=pe(k,"host",!0),n=pe(k,"port"),p=pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=f(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var $i={},aj=encodeURI,X=encodeURIComponent,bj=Ob;var cj=function(a,b){if(!a)return!1;var c=pe(qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var dj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};$i.kg=function(){var a=!1;return a};var Ej=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||pa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Xe("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var uk=function(a,b,c){Qe(b,c,a)},vk=function(a,b,c){Qe(b,c,a,!0)},xk=function(a,b){},wk=function(a,b){},
yk=function(a){return"_"===a.charAt(0)},zk=function(a){sa(a,function(c){yk(c)&&delete a[c]});var b=a[H.ub]||{};sa(b,function(c){yk(c)&&delete b[c]})};var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ld(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Fi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?pe(qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Di(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sg(c,"gtm.click");Gi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ni("cl")){var c=W("document");Pb(c,"click",a,!0);Oi("cl")}G(b.vtp_gtmOnSuccess)})}();

Z.a.tg=["google"],function(){function a(k){h.push(k);1<h.length||G(function(){var l=h.join(",");h=[];Gi({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){G(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var p=e[n];p?b(n,p):g.push(n)}else{d[l]=m;for(var t=0,q;q=m[t];t++)e[q]=l;for(var r=0;r<g.length;r++)b(g[r],l)}}var d={},e={},g=[],h=[];Z.__tg=c;Z.__tg.b="tg";Z.__tg.g=!0;Z.__tg.priorityOverride=0}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Fi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Fc&&b.Ic>=b.Fc)b.zc&&W("self").clearInterval(b.zc);else{b.Ic++;var c=(new Date).getTime();Gi({event:b.W,"gtm.timerId":b.zc,"gtm.timerEventNumber":b.Ic,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Fc,"gtm.timerStartTime":b.ne,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ne,"gtm.triggers":b.Vg})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{W:b.vtp_eventName,Ic:0,interval:Number(b.vtp_interval),Fc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Vg:String(b.vtp_uniqueTriggerId||"0"),ne:(new Date).getTime()};c.zc=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;u(dj(n.vtp_fieldsToSet,"fieldName","value"),g);u(dj(n.vtp_contentGroup,"index","group"),h);u(dj(n.vtp_dimension,"index","dimension"),k);u(dj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=u(n);d=u(d,p)}u(dj(d.vtp_fieldsToSet,"fieldName","value"),g);u(dj(d.vtp_contentGroup,
"index","group"),h);u(dj(d.vtp_dimension,"index","dimension"),k);u(dj(d.vtp_metric,"index","metric"),l);var t=fe(d.vtp_functionName);if(ja(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ac(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(S){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(S,O){return void 0===O?O:S(O)},A=function(S,O){if(O)for(var oa in O)O.hasOwnProperty(oa)&&y("set",S+oa,O[oa])},z=function(){},B=function(S,O,oa){var Sa=0;if(S)for(var Aa in S)if(S.hasOwnProperty(Aa)&&(oa&&v[Aa]||!oa&&void 0===v[Aa])){var Ta=w[Aa]?ua(S[Aa]):S[Aa];"anonymizeIp"!=Aa||Ta||(Ta=void 0);O[Aa]=Ta;Sa++}return Sa},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Kh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(S,O){void 0!==d[O]&&y("set",S,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var S=g&&g.hitCallback;ja(S)&&S();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ta,d.vtp_eventValue||
e.value)};B(M,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var da="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:da})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ea=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ea="internal/"+ea);a=!0;var Ba=J("https:","http:","//www.google-analytics.com/"+ea,g&&g.forceSSL);K(Ba,function(){var S=de();S&&S.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return oc.m})}();
Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Hi("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Hi("_hjSettings",{hjid:b,hjsv:5});K("//static.hotjar.com/c/hotjar-"+X(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[yb.ia]=null;c[yb.Se]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Bi()}function b(g,h){Pb(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Di(l),D:Ci(l)})})}function c(g,h){Pb(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Di(l),D:Ci(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ja(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Di(Bi()),
D:Ci(Bi())})}}catch(n){}}function e(){var g={source:null,state:W("history").state||null,url:Di(Bi()),D:Ci(Bi())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Gi(m)}}}(function(g){Z.__hl=g;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Ni("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Oi("hl")}G(g.vtp_gtmOnSuccess)})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var b=function(d,e,g){Qd(function(){var h,k=pc;k.postscribe||(k.postscribe=Eb);h=k.postscribe;var l={done:e},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.yc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,Tb(h),k,e)()}else Ai(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();







Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Fi("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!ri(g.target)){h.has(e.yb)||h.set(e.yb,""+b());h.has(e.ic)||h.set(e.ic,""+b());var p=0;h.has(e.Ab)&&(p=Number(h.get(e.Ab)));p+=100;h.set(e.Ab,""+p);if(p>=k){var t=sg(g.target,"gtm.elementVisibility",[h.uid]),q=qi(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.ic));
t["gtm.visibleLastTime"]=Number(h.get(e.yb));Gi(t);l()}}}if(!h.has(e.Ua)&&(0==k&&m(),!h.has(e.wa))){var n=W("self").setInterval(m,100);h.set(e.Ua,n)}}function d(g){g.has(e.Ua)&&(W("self").clearInterval(Number(g.get(e.Ua))),g.remove(e.Ua))}var e={Ua:"polling-id-",ic:"first-on-screen-",yb:"recent-on-screen-",Ab:"total-visible-time-",wa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=wf(m)}catch(F){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=D.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var B=
new a(v[z],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&xi(w);0<v.length&&(w=wi(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.wa)||c(y,x,p,"ONCE"===r?function(){for(var A=0;A<v.length;A++){var z=new a(v[A],q);z.set(e.wa,"1");d(z)}xi(w);if(n&&Xh)for(var B=0;B<Xh.length;B++)Xh[B]===h&&Xh.splice(B,1)}:function(){x.set(e.wa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.wa)&&(x.remove(e.wa),x.remove(e.Ab)),x.remove(e.yb))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&Yh(h);G(g.vtp_gtmOnSuccess)})}();

var Ik={};Ik.macro=function(a){if(pg.jc.hasOwnProperty(a))return pg.jc[a]},Ik.onHtmlSuccess=pg.Hd(!0),Ik.onHtmlFailure=pg.Hd(!1);Ik.dataLayer=dd;Ik.callback=function(a){yc.hasOwnProperty(a)&&ja(yc[a])&&yc[a]();delete yc[a]};Ik.tf=function(){pc[oc.m]=Ik;Ca(zc,Z.a);qb=qb||pg;rb=Id};
Ik.fg=function(){kh.gtm_3pds=!0;pc=C.google_tag_manager=C.google_tag_manager||{};if(pc[oc.m]){var a=pc.zones;a&&a.unregisterChild(oc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(p)}nb=Z;pb=Vi;Ik.tf();Tf();Ld=!1;Md=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Od();else{Pb(D,"DOMContentLoaded",Od);Pb(D,"readystatechange",Od);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Pd()}Pb(C,"load",Od)}Hf=!1;"complete"===D.readyState?Jf():
Pb(C,"load",Jf);a:{if(!Tc)break a;C.setInterval(Uc,864E5);}
vc=(new Date).getTime();}};(0,Ik.fg)();

})()
