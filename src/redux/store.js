let rerenderTree = () =>{
        console.log('empty function');
    };
export let subscribe = (observer) =>{
        rerenderTree=observer;
    };
export let state = {
        methods: [{type: 'none', text: '(не выбрано)'},{type: 'newton', text: 'Ньютона'},{type: 'Lagrangh', text: 'Лагранжа'}],
        method: '(не выбрано)',
        coordinates: {
            point: [],
            newX: '',
            newY: ''
        }
    };