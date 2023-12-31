import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from '@inertiajs/vue3'
import PublicPagesLayout from './Shared/PublicPagesLayout/PublicPagesLayout.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
    let page = pages[`./Pages/${name}.vue`];
    if (name.startsWith("Public/")) {
      page.default.layout = PublicPagesLayout;
    }
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({
      render: () => h(App, props), mounted() {
        AOS.init()
      },
    })
      .use(plugin)
      .component("Link", Link)
      .component("Head", Head)
      .mount(el)
  },
})