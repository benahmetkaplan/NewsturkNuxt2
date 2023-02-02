export default {
    fcmToken: null,
    isLoading: false,
    fixedStatu: true,
    bottomMenuActiveTab: '',
    pages: [
        { slug: 'home', title: 'Ana Sayfa', icon: 'fa-solid fa-house' },
        { slug: 'gazeteler', title: 'Gazeteler', icon: 'fa-solid fa-newspaper' },
        { slug: 'skor', title: 'Canlı Skor', icon: 'fa-solid fa-futbol' },
        { slug: 'hisseler', title: 'Canlı Borsa', icon: 'fa-solid fa-money-bills' },
        { slug: 'bize-ulasin', title: 'Bize Ulaşın', icon: 'fa-solid fa-envelope' }
    ],
    papers: [
        { slug: 'turkiye', title: 'Türkiye' },
        { slug: 'aksam', title: 'Akşam' },
        { slug: 'milat', title: 'Milat' },
        { slug: 'sabah', title: 'Sabah' },
        { slug: 'milliyet', title: 'Milliyet' },
        { slug: 'hurriyet', title: 'Hürriyet' },
        { slug: 'turkgun', title: 'Türkgün' },
        { slug: 'yeni-birlik', title: 'Yeni Birlik' },
        { slug: 'milli-gazete', title: 'Milli Gazete' },
        { slug: 'yenicag', title: 'Yeniçağ' },
        { slug: 'yenisoz', title: 'Yeni Söz' },
        { slug: 'fotomac', title: 'Fotomaç' }
    ],
    accounts: [
        { slug: 'twitter', title: 'Twitter', link: 'https://twitter.com/newsturksocial', icon: 'fa-brands fa-twitter' },
        { slug: 'instagram', title: 'Instagram', link: 'https://instagram.com/newsturksocial', icon: 'fa-brands fa-instagram' },
        { slug: 'youtube', title: 'YouTube', link: 'https://youtube.com/@newsturksocial', icon: 'fa-brands fa-youtube' }
    ]
};