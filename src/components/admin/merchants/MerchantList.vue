<template>
    <tr>
        <td>{{parseInt(num) + 1}}</td>
        <td>{{merchant.title}}</td>
        <td class="align-middle">
            {{merchant.email}}
        </td>
        <td>
            <!-- <img alt="image" src="assets/img/users/user-5.png" width="35"> -->
            {{merchant.phone}}
        </td>
        <td>{{merchant.contact_fullname}}</td>
        <td>
            <div class="badge badge-success badge-shadow">Completed</div>
        </td>
        <td>
            <a href="#" class="btn btn-primary">Detail</a>
        </td>
    </tr>
</template>

<script>
export default {
    name: "MerchantList",
    props:{
        merchant: Object,
        num: String
    }
}
</script>

<style>

</style>
