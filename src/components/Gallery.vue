<template>
  <div class="body">
    <section id="photos">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-1.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-2.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-3.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-4.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-5.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-6.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-7.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-8.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-9.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-10.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-1.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-2.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-3.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-4.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-5.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-6.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-7.jpg" alt="Cute cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-8.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-9.jpg" alt="Serious cat">
      <img src="http://gt3demo.com/wp/oyster/wp-content/uploads/2014/03/nature-10.jpg" alt="Serious cat">
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>

<style>
  .body {
    width: 100%;
    height: auto;
    border: 1px solid black;
    flex-grow:1; /* tout l’espace disponible doit être occupé => pousse le footer en bas de page */
    min-height:100vh; /* 1 */
    display:flex; /* 2 */
    flex-direction:column; /* 3 */
  }
/* https://css-tricks.com/seamless-responsive-photo-grid/ */
  #photos {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 5;
    -webkit-column-gap:   0px;
    -moz-column-count:    5;
    -moz-column-gap:      0px;
    column-count:         5;
    column-gap:           0px;
  }

  #photos img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
  }

  @media (max-width: 1200px) {
    #photos {
    -moz-column-count:    4;
    -webkit-column-count: 4;
    column-count:         4;
    }
  }
  @media (max-width: 1000px) {
    #photos {
    -moz-column-count:    3;
    -webkit-column-count: 3;
    column-count:         3;
    }
  }
  @media (max-width: 800px) {
    #photos {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
    }
  }
  @media (max-width: 400px) {
    #photos {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
    }
  }
</style>
