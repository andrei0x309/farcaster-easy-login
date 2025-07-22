import './index.scss';
import Main from '@/pages/main.svelte';
import { mount } from "svelte";

const target = document.getElementById('app');

function render() {
  if (target) {
    mount(Main, { target });
  }
}

document.addEventListener('DOMContentLoaded', render);
