const publicKey =
  'BOkOLyX3c0vJQkwECRhXxbZ0VE6AJERW_Bg5_xvj27ZqaJ-WAYuN7mImzsdOHsRs1iDUufodv5ofqNn3EmjRIu8'

navigator.serviceWorker &&
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    console.log('Excellent, registered with scope: ', registration.scope)
  })

navigator.serviceWorker &&
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager
      .getSubscription()
      .then(function(subscription) {
        // subscription will be null or a PushSubscription
        if (subscription) {
          console.info('Got existing', subscription)
          window.subscription = subscription
          return // got one, yay
        }

        const applicationServerKey = urlB64ToUint8Array(publicKey)
        serviceWorkerRegistration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey
          })
          .then(function(subscription) {
            console.info('Newly subscribed to push!', subscription)
            window.subscription = subscription
          })
      })
  })
