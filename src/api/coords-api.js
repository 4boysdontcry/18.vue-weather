export default () => {
  return new Promise((resolve, reject) => {   // 결과값을 주기로 약속(promise)
    navigator.geolocation.getCurrentPosition( r => {
      resolve({lat: r.coords.latitude, lon:r.coords.longitude})
    }, (err) => reject(err) )
  })
}