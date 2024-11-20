<template>
    <nav class="main-navigation">
        <div class="left">
            <router-link to="/" id="logo-link">
                <img src="@/assets/icons/logo.png" alt="Dark NFTs logo" height="66" width="66">
            </router-link>
        </div>
        <div class="right">
            <div class="burger-menu-wrapper" @click="showMenuFn" :class="showNavMenu ? 'active' : ''">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="nav-links-wrapper" :class="showNavMenu ? 'show-menu' : ''">
                <router-link to="/explore">Explore</router-link>
                <router-link to="/creators">Creators</router-link>
                <router-link to="/community">Community</router-link>
                <ButtonComponent text="Connect Wallet" />
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import ButtonComponent from "@/components/common/Button.vue"

export default {
    components: {
        RouterLink,
        ButtonComponent
    },
    data() {
        return {
            showNavMenu: false,
        }
    },
    methods: {
        showMenuFn() {
            this.showNavMenu = !this.showNavMenu;
        }
    }
}
</script>

<style lang="scss" scoped>
nav.main-navigation {
    padding: 37px 80px;
    position: relative;
    @include flexbox(row, space-between, center);

    a {
        color: $white;
        text-decoration: none;
        padding: 10px 0;
        margin-right: 40px;

        &:hover:not(#logo-link),
        &.active:not(#logo-link) {
            border-bottom: 2px solid $yellow;
            color: $yellow;
        }
    }

    .burger-menu-wrapper {
        position: absolute;
        right: 50px;
        top: 40%;
        width: 35px;
        cursor: pointer;
        display: none;

        div {
            height: 3px;
            width: 100%;
            background-color: $yellow;
            margin-bottom: 6px;
        }
    }

    @media (max-width: $br-md) {
        .nav-links-wrapper {
            transition: 0.5s;
            transform: translateX(100%);
            position: fixed;
            top: 0;
            right: 0;
            background-color: rgb(255, 255, 255, 0.3);
            width: 50%;
            height: 100vh;
            padding: 150px 40px 0 0;
            backdrop-filter: blur(10px);
            z-index: 9999;
            @include flexbox(column, flex-start, flex-end, 50px);

            button {
                margin: 0;
            }
        }

        .nav-links-wrapper.show-menu {
            transform: translateX(0);
        }

        a {
            margin-right: 5px;
        }

        .burger-menu-wrapper {
            display: block;
            z-index: 10000;

            &.active {
                div {
                    transform-origin: 0 0;
                    position: relative
                }

                div:nth-child(2) {
                    opacity: 0;
                }

                div:first-child {
                    transform: rotate(45deg);
                    bottom: 3px;
                    left: 2px;
                }

                div:last-child {
                    transform: rotate(-45deg);
                    top: 3px;
                }
            }
        }

        ::selection {
            background-color: transparent;
        }
    }
}
</style>
