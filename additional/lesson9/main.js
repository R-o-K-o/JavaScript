// - Є масив :

    let users = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031-56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість,
//      та властивості внутрішніх обєктів створити свої окремі блоки.

    let body = document.body;
    let userCards = document.createElement('div');
    userCards.classList.add('user-cards');

    for (let user of users) {
        let userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.style.border = '3px solid teal';
        userCard.style.padding = '20px';
        userCard.style.margin = '20px';

        let title = document.createElement('h1');
        title.innerText = `${user.id}. ${user.name}`;

        // Contact Data
        let contactsData = document.createElement('section');
        contactsData.classList.add('contacts-data');
        let contactTitle = document.createElement('h3');
        contactTitle.innerText = 'Contacts Data:';
        let nickname = document.createElement('div');
        nickname.innerText = `* nick - ${user.username}`;
        let phone = document.createElement('div');
        phone.innerText = `* phone: ${user.phone}`;
        let email = document.createElement('div');
        email.innerText = `* email - ${user.email}`;
        let website = document.createElement('div');
        website.innerText = `* website - ${user.website}`;

        contactsData.append(contactTitle, nickname, phone, email, website);

        // Address Data
        let addressData = document.createElement('section');
        addressData.classList.add('address-data');
        let addressTitle = document.createElement('h3');
        addressTitle.innerText = 'Address Data:';
        let city = document.createElement('div');
        city.innerText = `* city - ${user.address.city}`;
        let street = document.createElement('div');
        street.innerText = `* street - ${user.address.street}`;
        let suite = document.createElement('div');
        suite.innerText = `* suite - ${user.address.suite}`;
        let zipcode = document.createElement('div');
        zipcode.innerText = `* zipcode: ${user.address.zipcode}`;

        // Geo Data
        let geoData = document.createElement('section');
        geoData.classList.add('geo-data');
        let geoTitle = document.createElement('h4');
        geoTitle.innerText = 'Geo Data:';
        let latitude = document.createElement('div');
        latitude.innerHTML = `* latitude: ${user.address.geo.lat}`;
        let longitude = document.createElement(`div`);
        longitude.innerText = `* longitude: ${user.address.geo.lng}`;

        geoData.append(geoTitle, latitude, longitude);
        addressData.append(addressTitle, city, street, suite, zipcode, geoData);

        // Company Data
        let companyData = document.createElement('section');
        companyData.classList.add('company-data');
        let companyTitle = document.createElement('h3');
        companyTitle.innerText = 'Company Data:';
        let companyName = document.createElement('div');
        companyName.innerText = `* name - ${user.company.name}`;
        let companyCatchPhrase = document.createElement('div');
        companyCatchPhrase.innerText = `* catch phrase - ${user.company.catchPhrase}`;
        let companyBs = document.createElement('div');
        companyBs.innerText = `* bs - ${user.company.bs}`;

        companyData.append(companyTitle, companyName, companyCatchPhrase, companyBs);

        userCard.append(title, contactsData,addressData, companyData);
        userCards.appendChild(userCard);
        body.appendChild(userCards);
    }
