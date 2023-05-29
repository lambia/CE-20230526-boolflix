import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'

//Importo la libreria "core" di font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
//Importo il componente per Vue.js di font-awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Importo i vari stili di icone
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

//Aggiunto le icone importate alla libreria di fa
library.add(fasStar, farStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
