<template>
  <nav class="nav-container bg-gray-200">
    <!-- <div class="nav-web" v-if="isOpen"> -->
    <!--   <NavLinks /> -->
    <!-- </div> -->
    <div class="nav-top">
      <NavIcon @click="toggleNave" class="nav-icon md:hidden" />
      <SidebarIcon
        @click="navStore.changeNav"
        class="sidebar-icon text-3xl hidden md:block"
        :class="{ 'rotate-180': navStore.collapsed }"
      />
      <button
        type="button"
        class="rounded-full w-10 h-10"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_tmenu"
      >
        <img
          class="w-full h-full bg-cover rounded-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
        />
      </button>
      <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>

    <div class="nav-mobile" v-if="isOpen" @click="closeNav">
      <NavLinks :close-nav="closeNav" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavIcon from "../icons/navIcon.vue";
import SidebarIcon from "../icons/SidebarIcon.vue";
import NavLinks from "./NavLinks.vue";
import { useNavStore } from "../../stores/navbar.ts";
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";

const menu = ref();
const items = ref([
  {
    label: "File",
    icon: "pi pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-plus",
        items: [
          {
            label: "Document",
            icon: "pi pi-file",
          },
          {
            label: "Image",
            icon: "pi pi-image",
          },
          {
            label: "Video",
            icon: "pi pi-video",
          },
        ],
      },
      {
        label: "Open",
        icon: "pi pi-folder-open",
      },
      {
        label: "Print",
        icon: "pi pi-print",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-file-edit",
    items: [
      {
        label: "Copy",
        icon: "pi pi-copy",
      },
      {
        label: "Delete",
        icon: "pi pi-times",
      },
    ],
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
  {
    separator: true,
  },
  {
    label: "Share",
    icon: "pi pi-share-alt",
    items: [
      {
        label: "Slack",
        icon: "pi pi-slack",
      },
      {
        label: "Whatsapp",
        icon: "pi pi-whatsapp",
      },
    ],
  },
]);

const toggle = (event: Event) => {
  menu.value.toggle(event);
};

const navStore = useNavStore();

const isOpen = ref(false);
function toggleNave() {
  isOpen.value = !isOpen.value;
}
function closeNav() {
  isOpen.value = false;
}
</script>

<style lang="css">
.nav-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
}

.nav-top {
  padding: 1rem 2rem;
  border-bottom: 1px solid gray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999999;
}

.nav-mobile {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 91vh;
  background: rgba(3, 7, 18, 0.9);
  backdrop-filter: blur(3px);
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  animation: a-fade 500ms;
  z-index: 9999999;
}

.nav-icon {
  padding: 1px;
  border-radius: 0.6rem;
  font-size: 3rem;
}

.sidebar-icon {
  transition: transform 0.5s;
}

.nav-icon:hover,
.nav-icon:active {
  background: #e5e7eb;
}

.nav-web {
  display: none;
}

@keyframes a-fade {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 1024px) {
  .nav-mobile {
    display: none;
  }

  .nav-web {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
  }

  .nav-top {
    padding: 0.3rem 2rem;
    z-index: auto;
  }
}
</style>
