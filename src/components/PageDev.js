import React from 'react'

import LastModified from '../shared/LastModified'

const PageDev = () => (
  <React.Fragment>
    <h3>Brekeke Phone Dev</h3>
    <a href="itms-services://?action=download-manifest&url=https://apps.brekeke.com/0/brekeke_phonedev.plist">
      <span>
        Install on iOS <LastModified url="/0/brekeke_phonedev.ipa" />
      </span>
    </a>
    <br />
    <a href="/0/brekeke_phonedev.apk">
      <span>
        Download for Android <LastModified url="/0/brekeke_phonedev.apk" />
      </span>
    </a>
    <br />
    <h3>Brekeke Phone</h3>
    <a href="itms-services://?action=download-manifest&url=https://apps.brekeke.com/0/brekeke_phone.plist">
      <span>
        Install on iOS <LastModified url="/0/brekeke_phone.ipa" />
      </span>
    </a>
    <br />
    <a href="/0/brekeke_phone.apk">
      <span>
        Download for Android <LastModified url="/0/brekeke_phone.apk" />
      </span>
    </a>
    <br />
    <a href="/0/brekeke_phone.zip">
      <span>
        Web zip <LastModified url="/0/brekeke_phone.zip" />
      </span>
    </a>
  </React.Fragment>
)

export default PageDev
