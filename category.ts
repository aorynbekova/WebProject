import { stripSummaryForJitNameSuffix } from '@angular/compiler/src/aot/util';

export interface Category{
    id: number;
    name: string;
    image: string;
}

export const CATEGORIES =[
    {
        id: 1,
        name: 'Balms',
        image:'https://cdn.nourishedlife.com.au/images/large/variant_3029644.jpg'
    },
    {
        id: 2,
        name: 'Vitamin Supplements',
        image:'https://glavcom.ua/img/article/5552/32_main.jpg'
    },
    {
        id: 3,
        name: 'Hematogen and Bars',
        image: 'https://previews.123rf.com/images/lestertair/lestertair1712/lestertair171200650/92407336-bars-of-medical-hematogen-on-a-white-background-close-up-shot.jpg'
    },
    {
        id: 4,
        name: 'Fish oil and omega 3',
        image:'https://s3.images-iherb.com/mli/mli00952/l/48.jpg'
    },
    {
        id: 5,
        name: 'Antibacterial drugs',
        image:'https://1tv.mk/wp-content/uploads/2018/11/Antibiotici-00.jpg'
    },
    {
        id: 6,
        name: 'Antiseptics and disinfectants',
        image:'https://images.fineartamerica.com/images-medium-large-5/3-domestic-antiseptic-products-science-photo-library.jpg'
    },
    {
        id: 7,
        name: 'Bad habits',
        image:'https://media.istockphoto.com/vectors/no-bad-habits-vector-id1022808668'
    },
    {
        id: 8,
        name: 'Homeopathic remedies',
        image:'https://myremedy.co.nz/wp-content/uploads/2019/01/Homeopathy.jpg'
    },
    {
        id: 9,
        name: 'Hormonal drugs',
        image:'https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321558/birth-control-pills-in-packets-in-a-pile-hormonal-contraceptives.jpg'
    },
    {
        id: 10,
        name: 'Dermatological preparations',
        image:'https://e-apteka.com.ua/image/cache/catalog/product/8/d/3238/hlorgeksidin_krr_rd_vneshprim005_vp_efl100ml-228x228.jpg'
    },
    {
        id: 11,
        name: 'Respiratory system',
        image:'https://www.jobilize.com/ocw/mirror/col11903/m57999/2301_Major_Respiratory_Organs.jpg'
    },
    {
        id: 12,
        name: 'Blood and blood circulation',
        image:'https://upload.wikimedia.org/wikipedia/commons/7/77/Blood_Circulation.gif'
    },{
        id: 13,
        name: 'Nervous system',
        image:'https://medqueen.com/uploads/posts/2016-11/1478533982_post.jpg'
    }
];