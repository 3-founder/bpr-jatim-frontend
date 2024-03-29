<template>
  <div>
    <Header class-nav="transparent-black" />

    <section id="karier-section" class="d-flex align-items-end py-5 ">
      <div class="container custom">
        <div class="row">
          <div class="col">
            <h1 class="font-weight-bold">
              {{ $t("nav.karier") }} <span class="color-blue">Bank UMKM</span>
            </h1>
            <p>{{ $t("nav.textKarier") }}</p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-8">
            <div class="search-hero p-0">
              <!-- <form v-on:submit.prevent="searchHandler()">
                <input
                  type="text"
                  class="pl-3 search-hero"
                  :placeholder="
                    $t('cari') +
                      ' ' +
                      $t('nav.karier') +
                      ' ' +
                      $t('disini') +
                      '...'
                  "
                  autofocus="true"
                  id="key"
                  ref="key"
                />
                <span class="fa fa-search"></span>
              </form> -->
            </div>
            <!-- <div class="mt-3">
              <router-link
                :to="'?kategori=' + data.id"
                class="btn-sm btn btn-circle-secondary mr-2 px-3"
                :class="checkActiveKategori(data.id)"
                v-for="data in kategori"
                :key="data.id"
                >{{ data.kategori }}</router-link
              >
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <section id="karir" class="pt-3 pb-5">
      <div class="container custom">
        <div class="row mt-3" v-if="karirBox && karirBox.length">
          <div class="col-md-3 mb-3" v-for="data in karirBox" :key="data.id">
            <router-link :to="'/karier/' + data.slug">
              <BeritaStyle2 :data="data" />
            </router-link>
          </div>
        </div>

        <div class="row justify-content-center" v-else>
          <div class="col-md-5">
            <div class="p-5 mt-5 mb-5">
              <h5 class="text-center mt-3">
                Maaf, kami tidak dapat menemukan informasi
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import Footer from "@/components/common/Footer";
  // import carousel from "vue-owl-carousel";
  import BeritaStyle2 from "@/components/berita/BeritaStyle2";
  // import BeritaStyle1 from "@/components/berita/BeritaStyle1";

  export default {
    name: "Berita",
    components: { Header, Footer, BeritaStyle2 },
    data() {
      return {
        kategori: [],
        filter: false,
        search:
          typeof this.$route.query.key !== "undefined" &&
          this.$route.query.key != ""
            ? true
            : false,
      };
    },
    computed: {
      karirBox() {
        return this.$store.state.karir;
      },
    },
    watch: {
      $route() {},
    },
    mounted() {
      this.appendMetaTags([
        // meta tags
        this.createMetaTags("robots", "noindex"),
        this.createMetaTags("robots", "nofollow"),
        this.createMetaTags("tilte", "Karier - Bank UMKM Jawa Timur"),
        this.createMetaTags(
          "description",
          "Karier BPR Jawa Timur Lowongan staff Kualifikasi dibutuhkan - warga negara indonesia"
        ),
        // property tags
        this.createMetaProperty("og:type", "website"),
        this.createMetaProperty("og:url", this.$url_origin),
        this.createMetaProperty("og:title", "Karier - Bank UMKM Jawa Timur"),
        this.createMetaProperty(
          "og:description",
          "Karier BPR Jawa Timur Lowongan staff Kualifikasi dibutuhkan - warga negara indonesia"
        ),
        this.createMetaProperty(
          "twitter:image",
          this.$imgKarir("karir-min.jpg")
        ),
        this.createMetaProperty("twitter:type", "website"),
        this.createMetaProperty("twitter:url", this.$url_origin),
        this.createMetaProperty(
          "twitter:title",
          "Karier - Bank UMKM Jawa Timur"
        ),
        this.createMetaProperty(
          "twitter:description",
          "Karier BPR Jawa Timur Lowongan staff Kualifikasi dibutuhkan - warga negara indonesia"
        ),
        this.createMetaProperty(
          "twitter:image",
          this.$imgKarir("karir-min.jpg")
        ),
      ]);
      const keyword =
        typeof this.$route.query.key !== "undefined"
          ? this.$route.query.key
          : "";
      document.getElementById("key").value = keyword;
    },
    methods: {
      searchHandler() {
        this.$router.push("/karier?key=" + this.$refs.key.value);
      },
      createMetaTags(name, content) {
        var metaTag = document.createElement("meta");
        metaTag.setAttribute("name", name);
        metaTag.setAttribute("content", content);
        return metaTag;
      },
      createMetaProperty(property, content) {
        var metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        metaTag.setAttribute("content", content);
        return metaTag;
      },
      appendMetaTags(metaTags) {
        var head = document.head || document.getElementsByTagName("head")[0];
        metaTags.forEach(function(metaTag) {
          head.appendChild(metaTag);
        });
      },
    },
  };
</script>
<style scoped>
  .btn-circle-secondary.active {
    background: var(--blue);
    color: white;
  }
  .btn-circle-secondary {
    background: #d6dde9;
  }
</style>
<style scoped>
  @media (max-width: 768px) {
    /* #beritaNotSlide {
    display: none;
    } */
    p {
      height: auto;
    }

    .col-8 >>> p p {
      height: auto;
    }
  }
</style>
