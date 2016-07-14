var app = new Vue({
    el: '#app',
    data: {
        message: 'Gotta Catch \'Em All!',
        types: []
    },
    methods: {
        getTypes: function () {
            this.$http.get('http://pokeapi.co/api/v2/type/').then(function (response) {
                this.types = response.data.results;
            }, function (response) {
                // Todo: handle an error
            });
        }
    }
});

// On load
app.getTypes();