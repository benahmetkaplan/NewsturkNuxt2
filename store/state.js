export default {
    isLoading: false,
    gundemPosts: [],
    dunyaPosts: [],
    sporPosts: [],
    teknolojiPosts: [],
    ekonomiPosts: [],
    categoryPosts: [],
    categories: [],
    activePost: null,
    fixedStatu: true,
    bottomMenuActiveTab: '',
    pages: [
        { slug: 'home', title: 'Ana Sayfa', icon: 'home' },
        { slug: 'gazeteler', title: 'Gazeteler', icon: 'paper' },
        { slug: 'skor', title: 'Canlı Skor', icon: 'football' },
        { slug: 'hisseler', title: 'Canlı Borsa', icon: 'cash' },
        { slug: 'bize-ulasin', title: 'Bize Ulaşın', icon: 'mail' }
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
        { slug: 'twitter', title: 'Twitter', link: 'https://twitter.com/newsturksocial' },
        { slug: 'instagram', title: 'Instagram', link: 'https://instagram.com/newsturksocial' },
        { slug: 'youtube', title: 'YouTube', link: 'https://youtube.com/@newsturksocial' }
    ]
};