<template>
    <header class="header">
       <div class="container">
           <nav class="header__menu menu">
               <div class="menu__nav">
                   <router-link :to="{ name: 'home' }">
                        <tiny-logo class="menu__link" />
                    </router-link>
                    <router-link :to="{ name: 'home' }">
                        <span class="menu__link link">
                            Поиск
                        </span>
                    </router-link>
                    <router-link :to="{ name: 'favourites' }">
                        <span class="menu__link link">
                            Избранное
                        </span>
                    </router-link>
                </div>
                <div class="menu__actions">
                    <span
                        class="menu__btn link"
                        @click="logout"
                    >
                        Выйти
                    </span>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import TinyLogo from './TinyLogo.vue';

export default {
  name: 'the-header',
  components: {
    TinyLogo,
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style lang="scss">
.header {
    height: 80px;
    background-color: $white;
    .container {
        height: 100%;
    }
    .menu {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__nav {
            display: flex;
            align-items: center;
            height: 100%;
            a {
                color: $secondary-gray;
            }
        }
        &__link  {
            display: block;
            margin-right: 40px;
        }
        &__btn {
            margin-right: 20px;
            color: $primary-blue;
            cursor: pointer;
        }
        .link {
            font-size: 18px;
            line-height: 28px;
        }
        .router-link-exact-active {
            color: $primary-blue;
            span {
                position: relative;
            }
            span::after {
                content: '';
                display: block;
                position: absolute;
                bottom: -26px;
                left: 0;
                height: 2px;
                width: 100%;
                background-color: $primary-blue;
            }
        }
    }
}
@media screen and (max-width: 576px) {
    .header {
        .menu {
            &__link {
                margin-right: 20px;
            }
            &__btn {
                margin-right: 0px;
            }
            .link {
                font-size: 14px;
            }
        }
    }
}
</style>
