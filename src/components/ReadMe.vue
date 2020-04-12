<template>
  <div>
    <div class="container-fluid d-flex min-vh-100 flex-column">
      <div class="row flex-fill fill d-flex justify-content-start">
        <div class="col-sm-12 col-md-3 d-flex flex-column" id="repoList">
          <div class="row">
            <div id="searchBar" class="col-sm-12">
              <h3 id="header-section" class="text-center mt-3">Git-Repo</h3>
              <div class="input-group mt-3 mb-3">
                <input
                  type="text"
                  v-model="githubUserName"
                  class="form-control"
                  placeholder="GitHub Username..."
                  id="searchBarInput"
                  ref="searchBarInput"
                  autofocus
                />

                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    v-on:click="searchButton"
                    id="searchButton"
                    :disabled="checkInput"
                  >
                    <i class="fas fa-search" id="searchIcon"></i>
                  </button>
                </div>

                <small class="mt-3" id="inputHelp">
                  Note: To activate the search button, user will need to provide
                  an input with length of at greater or equal to 1 with no space in between the characters.
                </small>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <h3>Github Repository List</h3>
          </div>

          <div>
            <div v-if="repoArr.length > 0">
              <div>
                <strong>Github Username: </strong>{{ repoArr[0].owner.login }}
              </div>

              <div>
                <strong>Repository Count:</strong>
                {{ repoArr.length }}
              </div>
            </div>

            <div id="userRepoList">
              <ol>
                <li v-for="readme in this.repoArr" :key="readme.name">
                  <router-link id="repoLink"
                    :to="{ name: 'readme', params: { username: readme.owner.login , id: readme.name } }"
                    v-on:click.native="getReadMe(readme.name)"
                  >{{readme.name}}</router-link>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-9" id="readMeContent">
          <div>
            <div class="mt-3 text-center">
              <h3>README Content</h3>
            </div>

            <div id="repoContent"></div>
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
export default {
  data() {
    return {
      repoArr: [],
      githubUserName: ""
    };
  },
  computed: {
    checkInput: function() {
      return this.githubUserName.length >= 1 &&
        this.githubUserName.includes(" ") != true
        ? false
        : true;
    }
  },
  methods: {
    searchButton: function() {
      var searchBarInput = this.$refs.searchBarInput.value;
      var url = `https://api.github.com/users/${searchBarInput}/repos`;
      fetch(url)
        .then(response => response.json())
        .then(response => {
          this.repoArr = response;
        })
        .catch(function(error) {
          console.log("Request failed", error);
        });
    },

    getReadMe: function(name) {
      fetch(
        `https://api.github.com/repos/${this.repoArr[0].owner.login}/${name}/readme`,
        {
          method: "GET",
          headers: {
            Accept: "application/vnd.github.v3.html"
          }
        }
      )
        .then(results => {
          return results.text();
        })
        .then(results => {
          if (results.includes("Not Found")) {
            document.querySelector("#repoContent").innerHTML =
              "<div class='text-center'><h3>Oops, README file for this repository cannot be found. Please try again!</h3></div>";
          } else {
            document.querySelector("#repoContent").innerHTML = results;
          }
        })
        .catch(function(error) {
          console.log("Request failed: ", error);
        });
    }
  }
};
</script>

<style scoped>
  #searchBar {
    background: #4285f4;
  }

  #repoList {
    background: #f08080;
  }

  #readMeContent {
    background: #e8e8e8;
  }

  #repoList,
  #readMeContent {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    height: 100vh;
  }

  #searchIcon, #inputHelp {
    color: #ffffff;
  }

  #inputHelp {
    font-size: 1em;
  }

  #repoLink {
    color: #000000;
  }

  #repoLink:hover {
    color: #7fffd4;
  }
</style>
