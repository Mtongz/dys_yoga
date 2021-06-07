import service from 'network/request/request'

function banner() {
  return service.get('base/content/banner')
}

export default {
  banner
}