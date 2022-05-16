import JMGHeaderBlog from "./JMGHeaderBlog";
import Input from "./BlogB/Imput";
import CardList from "../CardList";
import CardList2 from "../CardList2";
import Toggle from "./BlogB/ToggleBlog";
import { Container } from "react-bootstrap"
import './Blog.css'
import CardBlog from "./CardBlog";
import Footer from "../../../../Footer/Footer";


const ListContentBlogA = [
    {
        "id": 1,
        "date": "Date: 20/06/2001",
        "titles": "Making your own detox drink with fresh fruit is extremely effective",
        "img": "http://fruitstt.vn/wp-content/uploads/2021/01/cong_thuc_detox_giam_can_chanh_mam_xoi.jpg",
        "contents": "Homemade detox with simple ingredients is a trend of many people. Drinking detox every day helps to purify the body, lose weight, detox, beautify the skin....",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "id": 2,
        "date": "Date: 21/06/2001",
        "titles": "Mango – Contains many antioxidants to rejuvenate the skin",
        "img": "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2021/09/05d48f3a-trai-cay-giau-vitamin-e-5.jpg",
        "contents": "Mango is a delicious and nutritious fruit that is loved by many people. Besides, the rich content of Vitamin E...",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "id": 3,
        "date": "22/06/2001",
        "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
        "titles": "Even the all-powerful Pointing has no control about the blind texts",
        "contents": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "id": 4,
        "date": "23/06/2001",
        "img": "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2021/09/71d6bae5-trai-cay-giau-vitamin-e.jpg",
        "titles": "Kiwi – Improves skin radiance",
        "contents": "Each kiwi provides about 1.1mg of Vitamin E for the body. Besides, kiwi is also known to be rich in Vitamin C, potassium, fiber and many different types of calories...",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },

    {
        "date": "Date: 24/06/2001",
        "id": 5,
        "img": "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2021/09/140f3093-trai-cay-giau-vitamin-e-4.jpg",
        "titles": "Avocado - the secret to slim weight loss of women",
        "contents": "Avocados have long been classified as foods that provide a rich and healthy source of Vitamin E...",
        "class": "card mb-3 Card",
        "spaceCard": "spaceCard",
    },


]


const ListContentBlogB = [
    {
        "id": 1,
        "date": "Date: 20/06/2001",
        "titles": "Even the...",
        "img": "https://tse3.mm.bing.net/th?id=OIP.s5zIckc53My5uXD5EH-TAQHaFj&pid=Api&P=0&w=235&h=176",
        "contents": "Far far away,...",
        "class": "card mb-3 Card2",

    },

    {
        "id": 2,
        "date": "Date: 21/06/2001",
        "titles": "Even the...",
        "img": "https://tse4.mm.bing.net/th?id=OIP.nQVVzePVbc6SMNjI8hsuRAHaE6&pid=Api&P=0&w=278&h=185",
        "contents": "Far far away,... ",
        "class": "card mb-3 Card2",
    },

    {
        "id": 3,
        "date": "22/06/2001",
        "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
        "titles": "Even the...",
        "contents": "Far far away ",
        "class": "card mb-3 Card2",
    },

];

export default function Blog() {

    return (
        <Container fluid>

            <JMGHeaderBlog />

            <div className="Blog">
                <div className="row">
                    <div className="col-md-8">
                        <div className="col">
                            {ListContentBlogA.map(ListContentBlogA => (
                                <CardBlog
                                    key={ListContentBlogA.id}
                                    class={ListContentBlogA.class}
                                    titles={ListContentBlogA.titles}
                                    date={ListContentBlogA.date}
                                    img={ListContentBlogA.img}
                                    contents={ListContentBlogA.contents}
                                    spaceCard={ListContentBlogA.spaceCard}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="container ">
                            <h4>Lời nói đầu:</h4>
                            <Toggle />
                            <Input />

                            <h4>Categories</h4>
                            <CardList />

                            <div className="CardBlogB">
                                <h4 className="TitleBoxB">Recent Blog</h4>
                                {ListContentBlogB.map(ListContentBlogB => (
                                    <CardBlog
                                        key={ListContentBlogB.id}
                                        class={ListContentBlogB.class}
                                        titles={ListContentBlogB.titles}
                                        date={ListContentBlogB.date}
                                        img={ListContentBlogB.img}
                                        contents={ListContentBlogB.contents}
                                    />
                                ))}
                            </div>

                            <h4 className="TitleBoxB">Tag Cloud</h4>
                            <CardList2 />
                            <h4 className="TitleBoxB">Paragraph</h4>
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut,
                                sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>

                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Footer/>
            </div>
        </Container>
    );
}