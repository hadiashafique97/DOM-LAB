var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];


let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = ('<h1>SEI Rocks!</h1>');
mainEl.classList.add('flex-ctr');


// console.log(mainEl)

let topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around')
topMenuEl.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.tagName !== 'A') {
        console.log(event.target.innerHTML)
    }
    if (event.target.className == 'active') {
        event.target.classList.remove('active')
        showingSubMenu = false
        subMenuEl.style.top = '0'
    }

    for (let i = 0; i < topMenuLinks.length; i++) {
        topMenuLinks[i].classList.remove('active')
    }
    if (event.tagname = 'a') {
        event.target.classList.add('active')
    }
    //  console.log(menuLinks[2].subLinks)


    if (event.target.href === "http://" + document.links[0].host + "/about") {
        showingSubMenu = false
        console.log(showingSubMenu)
    } else {
        showingSubMenu = true
        console.log(showingSubMenu)
    }
})
// if (event.tagName = 'a' && event.target.href == menuLinks[i].href && menuLinks[i].subLinks)

for (let i = 0; i < menuLinks.length; i++) {
    let a = document.createElement('a')

    a.href = menuLinks[i].href
    a.text = menuLinks[i].text
    a.classList.add('active')
    topMenuEl.append(a)
}

let subMenuEl = document.getElementById('sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

let topMenuLinks = document.getElementById('top-menu').querySelectorAll('a')


var showingSubMenu = false




// strugling with making sure the file is linked the css double check 

// struggling with the differnce between query selector and get element by id
