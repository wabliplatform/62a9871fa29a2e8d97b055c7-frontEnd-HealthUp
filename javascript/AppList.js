let apiAppApi = new TempApi.AppApi();import TempApi from '../src/index';document.getElementById('il5w').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Homepage' ;}};document.getElementById('imobl').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Homepage' ;}};document.getElementById('i7jeal').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/AppList' ;}};document.getElementById('i2ktuc').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Page3' ;}};document.getElementById('if5nvx').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');let app = new TempApi.App();app['appTitle'] = document.querySelector("[annotationname = 'appTitle']").textContent;app['appDescription'] = document.querySelector("[annotationname = 'appDescription']").textContent;app['appImage'] = {
        data: document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'appImage']").src,
        name: document.querySelector("[annotationname = 'appImage']").getAttribute("name")
      }; let opts = {app};apiAppApi.updateapp( appId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = appTitle]').textContent = response.body.query.appTitle ;document.querySelector('[annotationname = appDescription]').textContent = response.body.query.appDescription ;
      if(response.body.query.appImage !== undefined){

        if(document.querySelector('[annotationname = appImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = appImage]').setAttribute('data-image-base64',response.body.query.appImage.data);
        }
        else{
          document.querySelector('[annotationname = appImage]').src = response.body.query.appImage.data;
        }
        document.querySelector('[annotationname = appImage]').name = response.body.query.appImage.name;
      }
      {  location.href= '/Page3/'+response.body.query._id+'' ;}}});};document.getElementById('iq96g8').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');let app = new TempApi.App();app['appTitle'] = document.querySelector("[annotationname = 'appTitle']").textContent;app['appDescription'] = document.querySelector("[annotationname = 'appDescription']").textContent;app['appImage'] = {
        data: document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'appImage']").src,
        name: document.querySelector("[annotationname = 'appImage']").getAttribute("name")
      }; let opts = {app};apiAppApi.updateapp( appId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = appTitle]').textContent = response.body.query.appTitle ;document.querySelector('[annotationname = appDescription]').textContent = response.body.query.appDescription ;
      if(response.body.query.appImage !== undefined){

        if(document.querySelector('[annotationname = appImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = appImage]').setAttribute('data-image-base64',response.body.query.appImage.data);
        }
        else{
          document.querySelector('[annotationname = appImage]').src = response.body.query.appImage.data;
        }
        document.querySelector('[annotationname = appImage]').name = response.body.query.appImage.name;
      }
      {  location.href= '/Page3/'+response.body.query._id+'' ;}}});};document.getElementById('i0z50x').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');let app = new TempApi.App();app['appTitle'] = document.querySelector("[annotationname = 'appTitle']").textContent;app['appDescription'] = document.querySelector("[annotationname = 'appDescription']").textContent;app['appImage'] = {
        data: document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'appImage']").src,
        name: document.querySelector("[annotationname = 'appImage']").getAttribute("name")
      }; let opts = {app};apiAppApi.updateapp( appId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = appTitle]').textContent = response.body.query.appTitle ;document.querySelector('[annotationname = appDescription]').textContent = response.body.query.appDescription ;
      if(response.body.query.appImage !== undefined){

        if(document.querySelector('[annotationname = appImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = appImage]').setAttribute('data-image-base64',response.body.query.appImage.data);
        }
        else{
          document.querySelector('[annotationname = appImage]').src = response.body.query.appImage.data;
        }
        document.querySelector('[annotationname = appImage]').name = response.body.query.appImage.name;
      }
      {  location.href= '/Page3/'+response.body.query._id+'' ;}}});};document.getElementById('iznsql').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');let app = new TempApi.App();app['appTitle'] = document.querySelector("[annotationname = 'appTitle']").textContent;app['appDescription'] = document.querySelector("[annotationname = 'appDescription']").textContent;app['appImage'] = {
        data: document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'appImage']").src,
        name: document.querySelector("[annotationname = 'appImage']").getAttribute("name")
      }; let opts = {app};apiAppApi.updateapp( appId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = appTitle]').textContent = response.body.query.appTitle ;document.querySelector('[annotationname = appDescription]').textContent = response.body.query.appDescription ;
      if(response.body.query.appImage !== undefined){

        if(document.querySelector('[annotationname = appImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = appImage]').setAttribute('data-image-base64',response.body.query.appImage.data);
        }
        else{
          document.querySelector('[annotationname = appImage]').src = response.body.query.appImage.data;
        }
        document.querySelector('[annotationname = appImage]').name = response.body.query.appImage.name;
      }
      {  location.href= '/Page3/'+response.body.query._id+'' ;}}});};document.getElementById('i8g55a').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');let app = new TempApi.App();app['appTitle'] = document.querySelector("[annotationname = 'appTitle']").textContent;app['appDescription'] = document.querySelector("[annotationname = 'appDescription']").textContent;app['appImage'] = {
        data: document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'appImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'appImage']").src,
        name: document.querySelector("[annotationname = 'appImage']").getAttribute("name")
      }; let opts = {app};apiAppApi.updateapp( appId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = appTitle]').textContent = response.body.query.appTitle ;document.querySelector('[annotationname = appDescription]').textContent = response.body.query.appDescription ;
      if(response.body.query.appImage !== undefined){

        if(document.querySelector('[annotationname = appImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = appImage]').setAttribute('data-image-base64',response.body.query.appImage.data);
        }
        else{
          document.querySelector('[annotationname = appImage]').src = response.body.query.appImage.data;
        }
        document.querySelector('[annotationname = appImage]').name = response.body.query.appImage.name;
      }
      {  location.href= '/Page3/'+response.body.query._id+'' ;}}});};window.onload = () => {};