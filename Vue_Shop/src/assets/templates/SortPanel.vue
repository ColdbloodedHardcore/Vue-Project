<template>
  <section class="sort">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
            <div class="results">Showing <span>{{postsLength}}</span> results</div>
            <div class="sorting_container ml-md-auto">
              <div class="sorting">
                <ul class="item_sorting">
                  <li>
                    <span class="sorting_text">Sort by</span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    <ul>
                      <li class="product_sorting_btn" @click="sortByDefault()"><span>Default</span></li>
                      <li class="product_sorting_btn" @click="sortByPrice()"><span>Price</span></li>
                      <li class="product_sorting_btn" @click="sortByTitle()"><span>Name</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['items']),
      postsLength() {
        return this.items.length
      }
    },
    methods: {
      sortByDefault() {
        this.$store.commit('sortById');  
      },
      sortByTitle() {
        this.$store.commit('sortByTitle');  
      },
      sortByPrice() {
        this.$store.commit('sortByPrice');  
      }
    },
  }

</script>

<style scoped lang="scss">
  .sort {
    position: relative;
    z-index: 2;
    background: #fff;  
    padding: 80px 0 120px 0;

    .sorting_bar {
      width: 100%;     

      .results {
        font-size: 14px;
        font-weight: 400;
        color: #6c6a74;
      }

      .item_sorting {
        display: inline-block;

        &>li {
          display: inline-block;
          position: relative;
          width: 191px;
          height: 36px;
          line-height: 32px;
          cursor: pointer;
          border: solid 2px #ececec;
          padding-left: 26px;
          padding-right: 19px;
          margin-right: 8px;
          font-size: 14px;
          font-weight: 400;
          color: #6c6a74;
          margin-bottom: 10px;

          &:last-child {
            margin-right: 0;
          }

          &:hover ul {
            visibility: visible;
            opacity: 1;
            top: calc(100% + 1px);
          }

          i {
            float: right;
            line-height: 32px;
            font-size: 10px;
            color: #787878;
          }

          ul {
            display: block;
            position: absolute;
            right: 0;
            top: 120%;
            margin: 0;
            width: 100%;
            background: #FFFFFF;
            visibility: hidden;
            opacity: 0;
            z-index: 1;
            box-shadow: 0 15px 25px rgba(63, 78, 100, 0.15);
            -webkit-transition: opacity 0.6s ease;
            -moz-transition: opacity 0.6s ease;
            -ms-transition: opacity 0.6s ease;
            -o-transition: opacity 0.6s ease;
            transition: all 0.6s ease;

            li {
              display: block;
              text-align: left;
              padding-left: 15px;
              padding-right: 15px;

              &:last-child span {
                border-bottom: none;
              }

              span {
                display: block;
                height: 36px;
                line-height: 36px;
                border-bottom: solid 1px #dddddd;
                color: #6c6a74;
                text-align: right;
                padding-right: 5px;
                -webkit-transition: opacity 0.6s ease;
                -moz-transition: opacity 0.6s ease;
                -ms-transition: opacity 0.6s ease;
                -o-transition: opacity 0.6s ease;
                transition: all 0.6s ease;

                &:hover {
                  color: #e95a5a;
                }

                &:nth-child(2) {
                  margin-left: 63px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
