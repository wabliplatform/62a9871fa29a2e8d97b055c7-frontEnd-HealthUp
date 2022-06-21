# TempApi.AppApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createapp**](AppApi.md#createapp) | **POST** /app | Creates the data
[**deleteapp**](AppApi.md#deleteapp) | **DELETE** /app/{appId} | Delete the element
[**getAllapp**](AppApi.md#getAllapp) | **GET** /app/getAll | Get all the data
[**getapp**](AppApi.md#getapp) | **GET** /app/{appId} | Get the element
[**updateapp**](AppApi.md#updateapp) | **PUT** /app/{appId} | Updates the element



## createapp

> App createapp(app)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AppApi();
let app = new TempApi.App(); // App | data to be created
apiInstance.createapp(app, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | [**App**](App.md)| data to be created | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteapp

> deleteapp(appId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AppApi();
let appId = "appId_example"; // String | the Id parameter
apiInstance.deleteapp(appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllapp

> [App] getAllapp()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AppApi();
apiInstance.getAllapp((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[App]**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getapp

> App getapp(appId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AppApi();
let appId = "appId_example"; // String | the Id parameter
apiInstance.getapp(appId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| the Id parameter | 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateapp

> App updateapp(appId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AppApi();
let appId = "appId_example"; // String | the Id parameter
let opts = {
  'app': new TempApi.App() // App | data to be updated
};
apiInstance.updateapp(appId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| the Id parameter | 
 **app** | [**App**](App.md)| data to be updated | [optional] 

### Return type

[**App**](App.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

