import JMGHeaderBlog from "../JMGHeaderBlog";
import Footer from "../../../../../Footer/Footer";

const contentsBloga = {
  img1: "http://fruitstt.vn/wp-content/uploads/2021/01/unnamed.png",
  img2: "http://fruitstt.vn/wp-content/uploads/2021/01/detox-2.jpg",
  img3: "http://fruitstt.vn/wp-content/uploads/2021/01/detox-chanh-dua-leo-la-bac-ha-1.jpg",
  img4: "http://fruitstt.vn/wp-content/uploads/2021/01/89eeb7f549b3a0edf9a2.jpg",
};
export default function ContentsBlogA() {
  return (
    <div>
      <JMGHeaderBlog />

      <div className="container contentsBlogA">
        <h2>
          Making your own detox drink with fresh fruit is extremely effective
        </h2>
        <p>
          Homemade detox with simple ingredients is a trend of many people.
          Drinking detox every day helps to purify the body, lose weight,
          detoxify, and beautify the skin. There are many many detox recipes
          with different uses. Let's take a look at these easy detox recipes
          with Fruits..
        </p>
        <img className="sizeIMGContentBlogA" src={contentsBloga.img1} alt="" />

        <h4>1. Lemon and pineapple detox</h4>
        <p>
          Pineapple and lemon 2 fruits rich in vitamin C, Support increase
          metabolism, tighten skin and reduce fat effectively. Due to
          measurement, Detox pineapple and fresh lemon bring the ability to lose
          weight extremely well.
        </p>
        <img className="sizeIMGContentBlogA" src={contentsBloga.img2} alt="" />
        <p>
          The ingredients to make this detox dish are quite simple with sliced
          ​​pineapple and thinly sliced ​​fresh lemon, Soak for about 1-2 hours
          in filtered water to have a divine weight loss drink.
        </p>

        <h4>2. Detox from cucumber</h4>
        <p>
          Detox from cucumber is a traditional recipe that is widely popular in
          centers beautify. Cucumber is an ingredient that can be used with
          countless variations at will.
        </p>
        <img className="sizeIMGContentBlogA" src={contentsBloga.img3} alt="" />
        <p>
          Cucumber is a vegetable rich in vitamins, anti-inflammatory compounds,
          flavonoids, substances that protect brain health. How to make cucumber
          detox is very simple. You just need to slice fresh cucumbers, Pour
          water and refrigerate for 1-2 hours. Combine a few mint leaves, for
          more flavor.
        </p>

        <h4>3. Detox lemon, grapefruit, mint and cucumber</h4>
        <p>
          The formula that brings the best weight loss effect must include
          grapefruit, lemon, cucumber and mint leaves. This is considered a
          delicious and delicious drink effective weight loss results.
        </p>
        <img className="sizeIMGContentBlogA" src={contentsBloga.img4} alt="" />
        <p>
          Grapefruit helps burn excess fat, burn fat quickly. In lemon and
          cucumber contains antioxidants that help to beautify the skin,
          beautiful, improve improve the digestive system. With only 1 lemon, ½
          peeled grapefruit, 1 fruit thinly sliced ​​cucumber. Pour the right
          amount of filtered water and add a few mint leaves to Increase the
          flavor and you're done with a delicious detox water.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
