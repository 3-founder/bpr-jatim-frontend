import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    karir: [
      {
        cover: "karir-min.jpg",
        created_at: "2024-01-15 13:13:19",
        id: 1,
        judul: "Lowongan Staff Bank UMKM Jawa Timur",
        tgl: "15 Jan 2024 08:52",
        slug: "lowongan-staff",
        konten:
          "Karier BPR Jawa Timur Lowongan staff Kualifikasi dibutuhkan - warga negara indonesia",
        updated_at: "2024-03-14 13:13:19",
        isNotBerita: true,
      },
      {
        cover: "karir-min-2.jpg",
        created_at: "2024-03-29 10:54:19",
        id: 2,
        judul: "Lowongan Audit & Risk Management",
        tgl: "29 Mar 2024 10:54",
        slug: "lowongan-audit-dan-risk-management",
        konten:
          "Mohon untuk mengirimkan berkas CV, Portfolio, sertifikat serta berkas lamaran pendukung lainya ke e-email: recruitementbankumk@gmail.com",
        updated_at: "2024-03-29 10:54:19",
        isNotBerita: true,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
