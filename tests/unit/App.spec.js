import { mount, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

const factory = (fn) => {
  return (component) => {
    const wrapper = fn(component);

    // content of p
    expect(wrapper.html()).toContain("Lorem ipsum");
    // content of h1
    expect(wrapper.html()).toContain("Hello world");
  };
};

test("uses mounts", async () => {
  factory(mount)(App);
});

test("uses shallow", async () => {
  factory(shallowMount)(App);
});
