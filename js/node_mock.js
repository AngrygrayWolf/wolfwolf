let mock = require('mockjs');


// The property is number
let data_num = mock.mock({
    'list|1-10':[{
        'id|+1':1
    }]
});

let data_num_scope = mock.mock({
    'list|1-10':[{
        'id|1-100.1-2':1
    }]
});

// The property is Boolean
// The object property can't be same（The last key  will overwrite the others）
// bool|min-max: value , the value is `value` percentage  is min/(min+max)
let bool_num_scope = mock.mock({
    'list|1-3':[{
        'bool|0':true,
        'bool2|1': false
    }]
});

// The property is Array
let array_num_scope = mock.mock({
    'array|1-3': [{
        'one element|1': [1, 2, 3],
        'select element orderly|+1': [1, 2, 3],
        'repeate array|1-3': [1, 2, 3],
    }]
});

// The property is object
let object_num_scope = mock.mock({
    'object|1-3': [{
        'one element|1': {'one':1, 'two':2, 'three':3},
        'select element orderly|+1': {
            'one': 1,
            'two': 2,
            'three': 3
        },
        'repeate object|1-3': {
            'one': 1,
            'two': 2,
            'three': 3
        },
    }]
});


//Data Placeholder Definition
let placeholder = mock.mock({
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last '
    }
});

// Extend the placehodler
let Random = mock.Random;
Random.extend({
    constellation: function(){
        let constellation = ['白羊', '处女', '天蝎', '水瓶'];
        return this.pick(constellation);
    }
});
Random.constellation();






console.log(mock.mock({
    'placeholder|1-3':[{
        constellation: '@CONSTELLATION'
    }]
}));

console.log(placeholder);
console.log(object_num_scope['object']);
console.log(array_num_scope);
console.log(array_num_scope['array'][0]);

console.log(data_num);
console.log(data_num_scope);
console.log(bool_num_scope);