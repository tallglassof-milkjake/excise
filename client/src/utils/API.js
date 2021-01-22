import axios from 'axios';

export default {
    getExcise: function() {
        return axios.get('/api/excise');
    },

    getExciseById: function(id) {
        return axios.get('/api/excise/' + id);
    },

    deleteExcise: function(id) {
        return axios.delete('/api/excise/' + id);
    },

    addExcise: function(exciseData) {
        return axios.post('/api/excise', exciseData);
    }
};