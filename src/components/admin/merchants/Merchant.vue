<template>
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
        <div class="secion-body">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Merchants</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                            <table class="table table-striped" id="table-1">
                                <thead>
                                <tr>
                                    <th class="text-center">
                                    #
                                    </th>
                                    <th>StoreName</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Contact Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <!-- <tr>
                                    <td>
                                    1
                                    </td>
                                    <td>Create a mobile app</td>
                                    <td class="align-middle">
                                    <div class="progress progress-xs">
                                        <div class="progress-bar bg-success width-per-40">
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <img alt="image" src="assets/img/users/user-5.png" width="35">
                                    </td>
                                    <td>2018-01-20</td>
                                    <td>
                                    <div class="badge badge-success badge-shadow">Completed</div>
                                    </td>
                                    <td><a href="#" class="btn btn-primary">Detail</a></td>
                                </tr>
                                <tr>
                                    <td>
                                    2
                                    </td>
                                    <td>Redesign homepage</td>
                                    <td class="align-middle">
                                    <div class="progress progress-xs">
                                        <div class="progress-bar width-per-60"></div>
                                    </div>
                                    </td>
                                    <td>
                                    <img alt="image" src="assets/img/users/user-1.png" width="35">
                                    <img alt="image" src="assets/img/users/user-3.png" width="35">
                                    <img alt="image" src="assets/img/users/user-4.png" width="35">
                                    </td>
                                    <td>2018-04-10</td>
                                    <td>
                                    <div class="badge badge-info badge-shadow">Todo</div>
                                    </td>
                                    <td><a href="#" class="btn btn-primary">Detail</a></td>
                                </tr> -->
                                <MerchantList v-for="(merchant, index) in merchants" :merchant="merchant" :key="merchant.id" :num="`${index}`"/>
                                <!-- {{merchants}} -->
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <AdminSetting />
    </div> 
</template>

<script>
import AdminSetting from "@/components/layouts/admin-layout/AdminSetting.vue"
import MerchantList from "@/components/admin/merchants/MerchantList.vue"

export default {
    name: "Merchant",
    components: {
        AdminSetting,
        MerchantList
    },
    props: {
        merchants: Array
    }
    // props: ['merchants'],
}
// console.log(this.props.merchants);
</script>

<style>

</style>
