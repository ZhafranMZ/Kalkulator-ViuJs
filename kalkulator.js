var app = new Vue({
    el: '#app',
    data: {
        angka1: 0,
        angka2: 0,
        hasil: 0
    },
    methods: {
        tambah: function () {
            this.hasil = parseFloat(this.input1) + parseFloat(this.input2);
        },
        kurang: function () {
            this.hasil = this.input1 - this.input2;
        },
        kali: function () {
            this.hasil = this.input1 * this.input2;
        },
        bagi: function () {
            this.hasil = this.input1 / this.input2;
        }
    }
  })

