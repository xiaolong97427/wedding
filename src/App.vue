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
          <li><a href="#/gallery/preweddingth">PRE WED TH</a></li>
          <li><a href="#/gallery/preweddingfr">PRE WED FR</a></li>
          <li><a href="#/gallery/engagement">ENGAGEMENT</a></li>
          <li><a href="#/gallery/wedding">WEDDING</a></li>
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

  /* cyrillic-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: local('PT Sans'), local('PTSans-Regular'), url(http://fonts.gstatic.com/s/ptsans/v9/JX7MlXqjSJNjQvI4heMMGvY6323mHUZFJMgTvxaG2iE.woff2) format('woff2');
  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;
}
/* cyrillic */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: local('PT Sans'), local('PTSans-Regular'), url(http://fonts.gstatic.com/s/ptsans/v9/vtwNVMP8y9C17vLvIBNZI_Y6323mHUZFJMgTvxaG2iE.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: local('PT Sans'), local('PTSans-Regular'), url(http://fonts.gstatic.com/s/ptsans/v9/9kaD4V2pNPMMeUVBHayd7vY6323mHUZFJMgTvxaG2iE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: local('PT Sans'), local('PTSans-Regular'), url(http://fonts.gstatic.com/s/ptsans/v9/ATKpv8nLYAKUYexo8iqqrg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

  .header_slogan {
    font-family: 'PT Sans';
    font-weight: 400;
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
;
  }

  .header_menu  a:link, a:visited {
    text-decoration: none;
    color: #343434;
    font-size: 13px;
    font-family: PT Sans;
    font-weight: 400;
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
