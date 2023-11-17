import lamp from '../assets/image/rate/lamp.svg';
import darts from '../assets/image/rate/darts.svg';
import laptop from '../assets/image/rate/laptop.svg';

const RATEDATA = [
    {
        id: 0,
        header: 'Beginner',
        headerDescription: 'Для небольшого исследования',
        headerColor: '#FFB64F',
        headerTextColor: '#000000',
        headerImage: lamp,
        currentPrice: 799,
        oldPrice: 1200,
        descriptionPrice: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        description1: 'Безлимитная история запросов',
        description2: 'Безопасная сделка',
        description3: 'Поддержка 24/7',
    },
    {
        id: 1,
        header: 'Pro',
        headerDescription: 'Для HR и фрилансеров',
        headerColor: '#7CE3E1',
        headerTextColor: '#000000',
        headerImage: darts,
        currentPrice: 1299,
        oldPrice: 2600,
        descriptionPrice: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        description1: 'Все пункты тарифа Beginner',
        description2: 'Экспорт истории',
        description3: 'Рекомендации по приоритетам',
    },
    {
        id: 2,
        header: 'Business',
        headerDescription: 'Для корпоративных клиентов',
        headerColor: '#000000',
        headerTextColor: '#FFFFFF',
        headerImage: laptop,
        currentPrice: 2379,
        oldPrice: 3700,
        descriptionPrice: '',
        description1: 'Все пункты тарифа Pro',
        description2: 'Безлимитное количество запросов',
        description3: 'Приоритетная поддержка',
    },
];

export {RATEDATA}