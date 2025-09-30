// plugins/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid Icons for Contact Info
import { 
  faMobileScreen, 
  faEnvelope, 
  faLocationDot,
  faArrowUp,
  faBars, 
  faXmark,
  faThLarge,
  fas
} from '@fortawesome/free-solid-svg-icons'
// Import the specific Brand icons you need
import { 
  faFacebookF, 
  faXTwitter,
  faInstagram, 
  faLinkedinIn ,
  faYoutube,
  faSquareWhatsapp, 
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faMobileScreen, 
  faEnvelope, 
  faLocationDot, 
  faFacebookF, 
  faXTwitter, 
  faInstagram, 
  faYoutube,
  faLinkedinIn,
  faWhatsapp,
  faSquareWhatsapp, 
  faArrowUp,
  faBars, 
  faXmark,
  faThLarge,
  fas
)



// The plugin exposes the component globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})