export default {
    fcmToken: null,
    isLoading: false,
    bottomMenuActiveTab: '',
    pages: [
        { slug: 'home', title: 'Ana Sayfa', icon: 'fa-solid fa-house' },
        { slug: 'gazeteler', title: 'Gazeteler', icon: 'fa-solid fa-newspaper' },
        { slug: 'eczaneler', title: 'Eczaneler', icon: 'fa-regular fa-heart-pulse' },
        { slug: 'hava-durumu', title: 'Hava Durumu', icon: 'fa-solid fa-clouds' },
        { slug: 'canli-yayin', title: 'Canlı Yayın', icon: 'fa-solid fa-signal-stream' },
        { slug: 'bize-ulasin', title: 'Bize Ulaşın', icon: 'fa-solid fa-envelope' }
    ],
    accounts: [
        { slug: 'twitter', title: 'Twitter', link: 'https://twitter.com/newsturksocial', icon: 'fa-brands fa-twitter' },
        { slug: 'instagram', title: 'Instagram', link: 'https://instagram.com/newsturksocial', icon: 'fa-brands fa-instagram' },
        { slug: 'youtube', title: 'YouTube', link: 'https://youtube.com/@newsturksocial', icon: 'fa-brands fa-youtube' }
    ]
};