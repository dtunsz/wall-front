<template>
    <div class="admin-ui">
        <!-- <h1>Admin</h1> -->
        <div class="loader"></div>
        <div id="app">
            <div class="main-wrapper main-wrapper-1">
            <TopView />
            <!-- Main Content -->
            <div class="main-content">
                <section class="section">
                <ul class="breadcrumb breadcrumb-style ">
                    <li class="breadcrumb-item">
                    <h4 class="page-title m-b-0">Dashboard</h4>
                    </li>
                    <li class="breadcrumb-item">
                    <a href="index.html">
                        <i data-feather="home"></i></a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ul>
                <div class="row ">
                    <div class="col-xl-3 col-lg-6">
                    <div class="card l-bg-cherry">
                        <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"><i class="fas fa-shopping-cart"></i></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">New Orders</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                3,243
                            </h2>
                            </div>
                            <div class="col-4 text-right">
                            <span>12.5% <i class="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div class="progress mt-1 " data-height="8">
                            <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <div class="card l-bg-blue-dark">
                        <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Customers</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                15.07k
                            </h2>
                            </div>
                            <div class="col-4 text-right">
                            <span>9.23% <i class="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div class="progress mt-1 " data-height="8">
                            <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <div class="card l-bg-green-dark">
                        <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Ticket Resolved</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                578
                            </h2>
                            </div>
                            <div class="col-4 text-right">
                            <span>10% <i class="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div class="progress mt-1 " data-height="8">
                            <div class="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-6">
                    <div class="card l-bg-orange-dark">
                        <div class="card-statistic-3 p-4">
                        <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div>
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Revenue Today</h5>
                        </div>
                        <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                                $11.61k
                            </h2>
                            </div>
                            <div class="col-4 text-right">
                            <span>2.5% <i class="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div class="progress mt-1 " data-height="8">
                            <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                        <h4>Chart</h4>
                        </div>
                        <div class="card-body">
                        <div id="schart1"></div>
                        <div class="row">
                            <div class="col-4">
                            <p class="text-muted font-15 text-truncate">Target</p>
                            <h5>
                                <i class="fas fa-arrow-circle-up col-green m-r-5"></i>$15.3k
                            </h5>
                            </div>
                            <div class="col-4">
                            <p class="text-muted font-15 text-truncate">Last
                                week</p>
                            <h5>
                                <i class="fas fa-arrow-circle-down col-red m-r-5"></i>$2.8k
                            </h5>
                            </div>
                            <div class="col-4">
                            <p class="text-muted text-truncate">Last
                                Month</p>
                            <h5>
                                <i class="fas fa-arrow-circle-up col-green m-r-5"></i>$12.5k
                            </h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header">
                        <h4>Chart</h4>
                        </div>
                        <div class="card-body">
                        <div id="schart2"></div>
                        <div class="row">
                            <div class="col-4">
                            <p class="text-muted font-15 text-truncate">Target</p>
                            <h5>
                                <i class="fas fa-arrow-circle-up col-green m-r-5"></i>$15.3k
                            </h5>
                            </div>
                            <div class="col-4">
                            <p class="text-muted font-15 text-truncate">Last
                                week</p>
                            <h5>
                                <i class="fas fa-arrow-circle-down col-red m-r-5"></i>$2.8k
                            </h5>
                            </div>
                            <div class="col-4">
                            <p class="text-muted text-truncate">Last
                                Month</p>
                            <h5>
                                <i class="fas fa-arrow-circle-up col-green m-r-5"></i>$12.5k
                            </h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </section>
                <AdminSetting />
            </div>
            <AdminFooter />
            </div>
        </div>
    </div>
</template>

<script>
import TopView from "@/components/layouts/admin-layout/TopView.vue"
import AdminFooter from "@/components/layouts/admin-layout/AdminFooter.vue"
import AdminSetting from "@/components/layouts/admin-layout/AdminSetting.vue"

export default {
    // name: "AdminComplaints",
    // components: {
    //     TopView,
    //     AdminFooter,
    //     AdminSetting
    // }

}
</script>

<style scoped>
    /* @import url('../css/app.min.css');
    @import url('../css/style.css');
    @import url('../css/components.css'); */
    
</style>
