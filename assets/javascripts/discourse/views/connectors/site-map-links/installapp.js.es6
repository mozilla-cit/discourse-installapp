export default Discourse.View.extend({
  tagName: 'li',
  isVisible: false,
  willInsertElement: function () {
    var self = this
    var enabled = Discourse.SiteSettings.installapp_enabled
    var manifest_url = Discourse.SiteSettings.installapp_manifest_url

    if (enabled && window.navigator.mozApps) {
      var apps = window.navigator.mozApps
      var request = apps.checkInstalled(manifest_url)

      request.onerror = function () {
        console.error(this.error)
      }

      request.onsuccess = function () {
        if (!request.result) {
          self.set('isVisible', true)
        }
      }
    }
  },
  actions: {
    installApp: function () {
      var self = this
      var manifest_url = Discourse.SiteSettings.installapp_manifest_url

      var request = window.navigator.mozApps.install(manifest_url)

      request.onerror = function () {
        console.error(this.error)
      }

      request.onsuccess = function () {
        self.set('isVisible', false)
      }
    }
  }
})
