<template>
  <div id="app">
    <div class="header_wrapper">
        <img src="http://gt3demo.com/wp/oyster/wp-content/themes/gt3-wp-oyster/img/logo.png" alt="" width="80" height="25" class="logo_def">
        <p class="header_slogan">
          The wedding dd/MM/YYYY
        </p>

      <div class="header_menu">
        <ul>
          <li><a href="#/">HOME</a></li>
          <li><a href="#/gallery">PRE WEDDING TH</a></li>
          <li>PRE WEDDING FR</li>
        </ul>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;*/
  }

  .header_slogan {
    font-family: PT Sans;
    font-weight: 400p;
    font-size: 12px;
    color: #434343;
    align-self: center;
  }
  .header_menu {
    align-self: flex-end;
    flex:1;
    float: right;
  }
  .header_menu ul {
    float: right;
  }
  .header_menu ul li {
    display: inline-block;
    margin-left:30px;
    font-size: 13px;
    /*font-family: PT Sans;*/
    font-family: Arial;
  }
  .header_menu a {
    text-decoration: none;
  }
  .header_menu  a:link, a:visited {
    color: black;
  }
  .header_log_section {
    float: left;
    vertical-align: middle;
  }
  .header_wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
</style>
