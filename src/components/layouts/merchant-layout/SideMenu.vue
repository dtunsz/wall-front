<template>
    <nav class="side-nav">
        <a href="" class="intro-x flex items-center pl-5 pt-4">
            <!-- <img alt="Midone Tailwind HTML Admin Template" class="w-6" src="dist/images/logo.svg"> -->
            <span class="hidden xl:block text-white text-lg ml-3"> Wall<span class="font-medium">X</span> </span>
        </a>
        <div class="side-nav__devider my-6"></div>
        <ul>
            <li>
                <router-link to="/merchant/analytics" class="side-menu side-menu--active">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Analytics </div>
                </router-link>
            </li>

            <li>
                <router-link to="/merchant/profile" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Profile </div>
                </router-link>
            </li>
            <li>
                <router-link to="/merchant/bank" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Bank </div>
                </router-link>

            </li>
            <li>
                <router-link to="/merchant/supervisor" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Supervisor </div>
                </router-link>
            </li>
            <li>
                <router-link to="/merchant/withdrawal" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Withdrawal </div>
                </router-link>
            </li>

            <li>
                <router-link to="/admin/analytics" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="home"></i> </div>
                    <div class="side-menu__title"> Admin </div>
                </router-link>
            </li>

            
            <!-- <li class="side-nav__devider my-6"></li>
            <li>
                <a href="javascript:;" class="side-menu">
                    <div class="side-menu__icon"> <i data-feather="edit"></i> </div>
                    <div class="side-menu__title"> Crud <i data-feather="chevron-down" class="side-menu__sub-icon"></i> </div>
                </a>
                <ul class="">
                    <li>
                        <a href="side-menu-crud-data-list.html" class="side-menu">
                            <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                            <div class="side-menu__title"> Data List </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-crud-form.html" class="side-menu">
                            <div class="side-menu__icon"> <i data-feather="activity"></i> </div>
                            <div class="side-menu__title"> Form </div>
                        </a>
                    </li>
                </ul>
            </li> -->
        </ul>
    </nav>
</template>

<script>
export default {
    name: "SideMenu"
}
</script>

<style>

</style>
