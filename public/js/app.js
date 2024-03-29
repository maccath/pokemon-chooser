var app = new Vue({
    el: '#app',
    data: {
        message: 'Gotta Catch \'Em All!',
        types: []
    },
    components: {
        'accordion': VueStrap.accordion,
        'panel': VueStrap.panel
    },
    methods: {
        getTypes: function () {
            this.$http.get('https://pokeapi.co/api/v2/type/').then(function (response) {
                this.types = response.data.results;
            }, function (response) {
                // Todo: handle an error
            });
        },
        loadType: function (type) {
            if ( ! type.loaded) {
                this.$http.get(type.url).then(function (response) {
                    var index = this.types.indexOf(type);
                    type = Object.assign({'loaded' : true}, this.types[index], response.data);
                    this.types.$set(index, type);
                });
            }
        }
    }
});

// On load
app.getTypes();