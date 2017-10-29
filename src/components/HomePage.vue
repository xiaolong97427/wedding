<template>
  <div class="slides">
    <ul> <!-- slides -->
      <li><img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-9.jpg" class="slides_img" alt>
            <div>Promo text #1</div>
        </li>
      <li ><img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-10.jpg" class="slides_img" alt>
            <div>Promo text #1</div>
        </li>
        <li ><img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-11.jpg" class="slides_img" alt>
            <div>Promo text #2</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .slides {
   /*margin:50px auto;



    position:relative;*/
    width: 100%;
    height: auto;
    overflow:hidden;  /* Cache ce qui depasse de la DIV */
    border: 1px solid black;
    flex-grow:1; /* tout l’espace disponible doit être occupé => pousse le footer en bas de page */
    min-height:100vh; /* 1 */
    display:flex; /* 2 */
    flex-direction:column; /* 3 */
  }
  .slides_img {
    width: 100%;
		height: auto;
	}
  .slides ul {
    list-style:none;
    position:relative;
    border: 1px solid blue;
  }

  .slides li {
    opacity:0;
    position:absolute; /*éléments en absolu se placent par rapport à leur plus proche parent positionné ( "positionné" signifie que la valeur de la propriété CSS "position" est différente de "static" (la valeur par défaut).) */
    border: 1px solid red;
    top:0;
    left:0;
    height:100vh;
    /* css3 animation */
    -webkit-animation-name: anim_slides;
    -webkit-animation-duration: 24.0s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;
    -webkit-animation-delay: 0;
    -webkit-animation-play-state: running;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-name: anim_slides;
    -moz-animation-duration: 24.0s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;
    -moz-animation-direction: normal;
    -moz-animation-delay: 0;
    -moz-animation-play-state: running;
    -moz-animation-fill-mode: forwards;

  }

  /* keyframes #anim_slides */
  @-webkit-keyframes anim_slides {
    0% {
        opacity:0;
    }
    6% {
        opacity:1;
    }
    24% {
        opacity:1;
    }
    30% {
        opacity:0;
    }
    100% {
        opacity:0;
    }
  }
  @-moz-keyframes anim_slides {
    0% {
        opacity:0;
    }
    6% {
        opacity:1;
    }
    24% {
        opacity:1;
    }
    30% {
        opacity:0;
    }
    100% {
        opacity:0;
    }
  }

  .slides ul  li:nth-child(2), .slides ul  li:nth-child(2) div {
      -webkit-animation-delay: 6.0s;
      -moz-animation-delay: 6.0s;
  }
  .slides ul  li:nth-child(3), .slides ul  li:nth-child(3) div {
      -webkit-animation-delay: 12.0s;
      -moz-animation-delay: 12.0s;
  }
  .slides ul  li:nth-child(4), .slides ul  li:nth-child(4) div {
      -webkit-animation-delay: 18.0s;
      -moz-animation-delay: 18.0s;
  }

</style>
