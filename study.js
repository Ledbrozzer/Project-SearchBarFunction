//variavel p/ pegar value that u put(search)
const searchInput = document.getElementById('search');
// now u can get t input..
// console.log(searchInput)
//-> see it gets t input
//but not it's value

// use eventListenner to to interact w/ users input
searchInput.addEventListener('input', (event) => {
// dif frm t 'click'
//-> bcaus'll get the value(interact) befr the "Click"
    // console.log(event.target.value)
    // -> anythng u tecl it'll be getting
    // const value = event.target.value
    // it's t value from t input
    const value = formatString(event.target.value)
    // use the format function to
    // format t- user's input

    // console.log(value)
    // console.log(formatString(value))
    //pass t function t-format t-value

    //create a variable to get t items -> to get t-list
    const items = document.querySelectorAll('.items .item');
    //'All' -> is more than1
    // console.log(items)
    //mak a foreach to manipulatipe every item

    const noResults = document.getElementById('no-results');
//-> to interact in case there's no results found
//-> change the dsplay on the CSS
    //create a variable to see iftherewherenoresults
    // can´t putiton t-'if'->lookfor eachone
    //->so it'll aways apper
    let hasResults = false;
    //initially it'll be false
    //if falls inside t'if'..

    items.forEach(item => {
        //to only allows to seach buy the title
        //not the date..
        const itemTitle = item.querySelector('.item-title').textContent;
        //get t-item + 'html class' + txtcontnt

        //here u can manipulate the itens
        // u have already the value and the item
        //just need to compare them..
        //JS has a way t-do-tht

        // .indexOf('')
        //'ll return-t-index-of-whatever u tped -> 'address' /-> if it'esnt hav-it-> (-1)
        //-> if it'es exist
        //hav-it-> (0)

        // console.log(item.textContent)
        //item.'textContent' ll get the txt tht isinit

        // console.log(item.textContent.indexOf(value))
        //-> 'll use the .indexOf() to compare it
        // w/ what's on t input

        //before doing that -> gotta format the value
        //format the value from the input to compare

        // console.log(formatString(item.textContent))
        // console.log(formatString(item.textContent).indexOf(value))

        //make a if -> to interact with the input
        //if it has given any '-1' from the indexof
        // if(formatString(item.textContent).indexOf(value) !== -1)

        const itemDescription = item.querySelector('.item-description').textContent;
        //gonna search, considering t-description too

        //gonna pass the 'itemTitle' to the if
        //comparing= value and item(by Title)
        // if(formatString(itemTitle).indexOf(value) !== -1) {

        //gonna pass 'itemDescription' as well
        // w/ an 'or'( || ):
        if(formatString(itemTitle).indexOf(value) !== -1 || formatString(itemDescription).indexOf(value) !== -1) {
            
            // if is dif thn -1 
            //-> show a 'display flex/block'
            //-> if returns -1
            //-> 'll show 'display none'
            item.style.display = 'flex';

            hasResults = true;
            //becse there's results

        } else{
            item.style.display = 'none';
            
            // hasResults = false;
            //->but in this case->
            //don't need to put it anyway..

        }
    })
    //-> to show/hide the item

    if (hasResults) {
        //'ll hide it
        noResults.style.display = 'none';
    } else{
        //if not -> wll show it
        noResults.style.display =  'block';
        //'block'->becse'nt styl'd w/'diplay: flex;'
    }
});

//neet t-> format t value -> not count 'spaces' before/after
//-> just between t words
//not make a distinction
//between lowercase and uppercase..

function formatString(value) {
    //'ll recv-value
    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
//return t-value-formated
    //'.normalize()'->alters t-accent
    //".normalize('NFD')"-ll-chang-for-something
    //t-rejects->'ll turn anything t-'NFD' alter
    
    // /[\u0300-\u036f]/g -> take t-accent
    // , '' -> to none
}