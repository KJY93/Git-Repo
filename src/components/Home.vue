<template>
  <div class="home">
    <div class="container-fluid d-flex min-vh-100 flex-column" id="home-content">
      <div class="row flex-fill fill d-flex justify-content-start">
        <div class="col-sm-12" id="jumbo-flex-container">
          <div class="jumbotron mt-3 mb-3" :class="[width > 576 ? 'w-75' : 'w-100']">
            <h1 class="display-4">Git Repo</h1>
            <p class="lead">Git Repo is a simple single page Vue application that was designed to retrieve and display a 
              user's repository and its associated README.md file from GitHub. GitHub API was used
              to extract the relevant information.
            </p>
            <hr class="my-4">

            <h3 class="my-4">3 easy steps to start using Git Repo:</h3>

            <div class="row row-cols-1 row-cols-md-3">
              <div class="col mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><strong>Step 1: Key In Username</strong></h5>
                    <p class="card-text"><strong>Description:</strong> Key in a username in the search box input field. Note that, 
                      the search button can only be clicked if the username provided has a length greater or equal to 1 and
                      does not contain space in between each characters.</p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><strong>Step 2: Data Retrieval with GitHub API</strong></h5>
                    <p class="card-text">Once user clicked on the search button, relevant github repositories
                      information related to the username provided will be retrieved using the GitHub API. 
                    </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title"><strong>Step 3: Data Population</strong></h5>
                    <p class="card-text">The repositories retrieved with respect with the username provided will
                      be displayed on the left hand side under the "GitHub Repository List" header. To learn more on
                      each repositories, simply click on any of the link and the corresponding README file will
                      be displayed on the right hand side under the "README Content" header.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>

    <footer class="footer-container">
        <small>Copyright <i class="far fa-copyright"></i> 2020 by JY</small>
    </footer>
  </div>
</template>

<script>
  // https://codepen.io/sethdavis512/pen/EvNKWw
  export default {
    data() {
      return {
        width: window.innerWidth
      };
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
          this.width = window.innerWidth;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home-content {
    background: #f08080;
  }

  #jumbo-flex-container {
    display: flex;
    justify-content: center;	  
  }

  a:hover {
    color: #7fffd4;
  }
</style>