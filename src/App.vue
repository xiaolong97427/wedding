<template>
  <div id="app">
    <div class="header_wrapper">
      <div class="header_log_section">
        <img src="http://gt3demo.com/wp/oyster/wp-content/themes/gt3-wp-oyster/img/logo.png" alt="" width="80" height="25" class="logo_def">
        The wedding dd/MM/YYYY
      </div>
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

  .header_menu {
    display: table-cell;
    vertical-align:middle;
    float:right;
    border:1px solid orange
  }
  .header_menu ul li {
    list-style: none;
    display: inline-block;
    margin-left:30px;
    font-size: 13px;
    font-family: PT Sans;
  }
  .header_log_section {
    float: left;
    vertical-align: middle;
    border:1px solid blue
  }
  .header_wrapper {
    font-weight: 400px;
    font-family: PT Sans;
    border:1px solid black
  }

</style>
