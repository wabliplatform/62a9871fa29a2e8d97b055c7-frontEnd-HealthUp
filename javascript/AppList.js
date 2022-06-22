let apiAppApi = new TempApi.AppApi();import TempApi from '../src/index';document.getElementById('il5w').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Homepage' ;}};document.getElementById('imobl').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Homepage' ;}};document.getElementById('i4wwr').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/AppList' ;}};document.getElementById('ig8m6').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/newApp' ;}};document.getElementById('im0wt').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');
      if(appId === '/AppList' || appId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("im0wt")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            appId = value._id;
            parentId = key;
          }
        });
      }
    apiAppApi.deleteapp( appId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/' ;}}});};document.getElementById('i0vc6t').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');
      if(appId === '/AppList' || appId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i0vc6t")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            appId = value._id;
            parentId = key;
          }
        });
      }
    apiAppApi.deleteapp( appId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/' ;}}});};document.getElementById('ixunr').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');
      if(appId === '/AppList' || appId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ixunr")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            appId = value._id;
            parentId = key;
          }
        });
      }
    apiAppApi.deleteapp( appId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/' ;}}});};document.getElementById('ih5q3').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');
      if(appId === '/AppList' || appId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ih5q3")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            appId = value._id;
            parentId = key;
          }
        });
      }
    apiAppApi.deleteapp( appId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/' ;}}});};document.getElementById('itd9i').onclick = (event) => {
    event.preventDefault();
    let appId = window.location.pathname.replace('/AppList/','');
      if(appId === '/AppList' || appId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("itd9i")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            appId = value._id;
            parentId = key;
          }
        });
      }
    apiAppApi.deleteapp( appId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/' ;}}});};window.onload = () => {};