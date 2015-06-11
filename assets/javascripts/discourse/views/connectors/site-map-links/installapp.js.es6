export default Discourse.View.extend({
  actions: {
    installApp: function () {
      var request = window.navigator.mozApps.install(Discourse.SiteSettings.installapp_manifest_url)
      request.onerror = function () {
        console.error(this.error)
      }
    }
  }
})
