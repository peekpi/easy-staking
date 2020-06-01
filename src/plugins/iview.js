import Vue from 'vue'

import { 
    Button, Table, Scroll, Spin ,Card,Switch,Option,
    RadioGroup,Radio,List,Message,CellGroup,Cell,
    Slider,Modal,Layout,Content,Header,Input,AutoComplete
} from 'view-design';


Vue.component('Option', Option);
Vue.component('i-switch', Switch);
Vue.component('CellGroup', CellGroup);
Vue.component('Cell', Cell);
Vue.component('AutoComplete', AutoComplete);
Vue.component('Card', Card);
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Scroll', Scroll);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);
Vue.component('List', List);
Vue.component('ListItem', List.Item);
Vue.component('ListItemMeta', List.Item.Meta);
Vue.component('Slider', Slider);
Vue.component('Modal', Modal);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Content', Content);
Vue.component('Spin', Spin);
Vue.component('Input', Input);

Vue.prototype.$Message = Message

/*
import ViewUI from 'view-design'
Vue.use(ViewUI)
*/

//import 'view-design/dist/styles/iview.css'
