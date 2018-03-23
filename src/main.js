import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding) {
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);

    // using arg to info after : inside app.vue
  }
});

// creating the directive name which can be used with v-highlight
// object to configure the directive
// hooks
// directive has 5 hooks - methods
// 1. bind(el, binding, vnode) - once directive is attached bind
// 2. inserted(el, binding, vnode) - inserted in parent node inserted
// 3. update(el, binding, vnode, oldVnode) - once component is updated updated (without children)
// 4. componentUpdated(el, binding, vnode, oldVnode) - once component is Updated (with children)
// 5. unBind(el, binding, vnode) - once directive is removed

// Use binding so the value can be changed from the outside

new Vue({
  el: "#app",
  render: h => h(App)
});
