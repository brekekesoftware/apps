import React from 'react';

const PageDev = () => (
  <React.Fragment>
    <h1>Brekeke Phone dev</h1>
    <h3>iOS</h3>
    <div>
      <a href="itms-services://?action=download-manifest&url=https://apps.brekeke.com/0/brekeke_phone.plist">
        Install
      </a>
    </div>
    <div>
      <a href="brekekeapp://open?url=wss%3A%2F%2Fapps.brekeke.com%3A8443%2Fws%2F&tenant=nam&user=nam01">
        Deep link
      </a>
    </div>
    <h3>Android</h3>
    <div>
      <a href="https://apps.brekeke.com/0/brekeke_phone.apk">
        Download apk file
      </a>
    </div>
    <div>
      <a href="intent://open?url=wss%3A%2F%2Fapps.brekeke.com%3A8443%2Fws%2F&tenant=nam&user=nam01#Intent;scheme=brekekeapp;package=com.brekeke.phone;end">
        Deep link
      </a>
    </div>
  </React.Fragment>
);

export default PageDev;
