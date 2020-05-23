<template>
    <div>
        <div class="navbar-bg"></div>
        <nav class="navbar navbar-expand-lg main-navbar sticky">
            <div class="form-inline mr-auto">
            <ul class="navbar-nav mr-3">
                <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg
                                        collapse-btn"> <i data-feather="menu"></i></a></li>
                <li>
                <form class="form-inline mr-auto">
                    <div class="search-element">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200">
                    <button class="btn" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                </form>
                </li>
            </ul>
            </div>
            <ul class="navbar-nav navbar-right">
            <li><a href="#" class="nav-link nav-link-lg fullscreen-btn">
                <i data-feather="maximize"></i>
                </a></li>
            <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                class="nav-link nav-link-lg message-toggle"><i data-feather="mail" class="mailAnim"></i>
                <span class="badge headerBadge1">
                </span> </a>
                <div class="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div class="dropdown-header">
                    Messages
                    <div class="float-right">
                    <a href="#">Mark All As Read</a>
                    </div>
                </div>
                <div class="dropdown-list-content dropdown-list-message">
                    <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar
                                                text-white"> <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle">
                    </span> <span class="dropdown-item-desc"> <span class="message-user">John
                        Deo</span>
                        <span class="time messege-text">Please check your mail !!</span>
                        <span class="time">2 Min Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle">
                    </span> <span class="dropdown-item-desc"> <span class="message-user">Sarah
                        Smith</span> <span class="time messege-text">Request for leave
                        application</span>
                        <span class="time">5 Min Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-5.png" class="rounded-circle">
                    </span> <span class="dropdown-item-desc"> <span class="message-user">Jacob
                        Ryan</span> <span class="time messege-text">Your payment invoice is
                        generated.</span> <span class="time">12 Min Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-4.png" class="rounded-circle">
                    </span> <span class="dropdown-item-desc"> <span class="message-user">Lina
                        Smith</span> <span class="time messege-text">hii John, I have upload
                        doc
                        related to task.</span> <span class="time">30
                        Min Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-3.png" class="rounded-circle">
                    </span> <span class="dropdown-item-desc"> <span class="message-user">Jalpa
                        Joshi</span> <span class="time messege-text">Please do as specify.
                        Let me
                        know if you have any query.</span> <span class="time">1
                        Days Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-avatar text-white">
                        <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle">
                    </span> <span class="dropdown-item-desc"> <span class="message-user">Sarah
                        Smith</span> <span class="time messege-text">Client Requirements</span>
                        <span class="time">2 Days Ago</span>
                    </span>
                    </a>
                </div>
                <div class="dropdown-footer text-center">
                    <a href="#">View All <i class="fas fa-chevron-right"></i></a>
                </div>
                </div>
            </li>
            <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
                class="nav-link notification-toggle nav-link-lg"><i data-feather="bell"></i>
                </a>
                <div class="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div class="dropdown-header">
                    Notifications
                    <div class="float-right">
                    <a href="#">Mark All As Read</a>
                    </div>
                </div>
                <div class="dropdown-list-content dropdown-list-icons">
                    <a href="#" class="dropdown-item dropdown-item-unread"> <span
                        class="dropdown-item-icon l-bg-orange text-white"> <i class="far fa-envelope"></i>
                    </span> <span class="dropdown-item-desc"> You got new mail, please check. <span class="time">2 Min
                        Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon l-bg-purple text-white"> <i
                        class="fas fa-bell"></i>
                    </span> <span class="dropdown-item-desc"> Meeting with <b>John Deo</b> and <b>Sarah Smith </b> at
                        10:30 am <span class="time">10 Hours
                        Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon l-bg-green text-white"> <i
                        class="far fa-check-circle"></i>
                    </span> <span class="dropdown-item-desc"> Sidebar Bug is fixed by Kevin <span class="time">12
                        Hours
                        Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon bg-danger text-white"> <i
                        class="fas fa-exclamation-triangle"></i>
                    </span> <span class="dropdown-item-desc"> Low disk space error!!!. <span class="time">17 Hours
                        Ago</span>
                    </span>
                    </a> <a href="#" class="dropdown-item"> <span class="dropdown-item-icon bg-info text-white"> <i class="fas
                                                    fa-bell"></i>
                    </span> <span class="dropdown-item-desc"> Welcome to Jiva
                        template! <span class="time">Yesterday</span>
                    </span>
                    </a>
                </div>
                <div class="dropdown-footer text-center">
                    <a href="#">View All <i class="fas fa-chevron-right"></i></a>
                </div>
                </div>
            </li>
            <li class="dropdown"><a href="#" data-toggle="dropdown"
                class="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="assets/img/user.png"
                    class="user-img-radious-style"> <span class="d-sm-none d-lg-inline-block"></span></a>
                <div class="dropdown-menu dropdown-menu-right pullDown">
                <div class="dropdown-title">Hello Sarah Smith</div>
                <a href="profile.html" class="dropdown-item has-icon"> <i class="far
                                            fa-user"></i> Profile
                </a> <a href="timeline.html" class="dropdown-item has-icon"> <i class="fas fa-bolt"></i>
                    Activities
                </a> <a href="" class="dropdown-item has-icon"> <i class="fas fa-cog"></i>
                    Settings
                </a>
                <div class="dropdown-divider"></div>
                <a href="auth-login.html" class="dropdown-item has-icon text-danger"> <i class="fas fa-sign-out-alt"></i>
                    Logout
                </a>
                </div>
            </li>
            </ul>
        </nav>
        <div class="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <a href="index.html"> <img alt="image" src="assets/img/logo.png" class="header-logo" /> <span
                    class="logo-name">Jiva</span>
                </a>
            </div>
            <div class="sidebar-user">
                <div class="sidebar-user-picture">
                <img alt="image" src="assets/img/user.png">
                </div>
                <div class="sidebar-user-details">
                <div class="user-name">Kerry Mann</div>
                <div class="user-role">Administrator</div>
                </div>
            </div>
            <ul class="sidebar-menu">
                <!-- <li class="menu-header">Main</li> -->
                <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="airplay"></i>
                <span>Analytics</span></a>
                </li>

                <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="map-pin"></i>
                <span>Users</span></a>
                </li>

                <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="map-pin"></i>
                <span>Merchants</span></a>
                </li>

                
                <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="briefcase"></i>
                <span>Transactions</span></a>
                </li>


                <li class="dropdown active">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i
                    data-feather="airplay"></i><span>Group</span></a>
                <ul class="dropdown-menu">
                    <li class="active"><a class="nav-link" href="index.html">Groups</a></li>
                    <li><a class="nav-link" href="index2.html">Group Members</a></li>
                </ul>
                </li>

                <li class="dropdown active">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i
                    data-feather="airplay"></i><span>Project</span></a>
                <ul class="dropdown-menu">
                    <li class="active"><a class="nav-link" href="index.html">Projects</a></li>
                    <li><a class="nav-link" href="index2.html">Project Members</a></li>
                </ul>
                </li>
                
                <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="file"></i>
                <span>Complaints</span></a>
                </li>
                
                <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="mail"></i>
                <span>Feedbacks</span></a>
                </li>

                

                <!-- <li class="active"><a class="nav-link" href="vector-map.html"><i data-feather="map-pin"></i>
                <span>VectorMap</span></a>
                </li> -->
                
            </ul>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopView"
}
</script>

<style>

</style>
