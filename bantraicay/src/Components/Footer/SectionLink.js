
import ProductLink from "./ProductLink";
import UseFulLink from "./UseFulLink";
import ContactLink from "./ContactLink";
import SqtvzLink from "./SqtvzLink";
export default function SectionLink() {
  return (
    <section className="#">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <SqtvzLink />
          <ProductLink />
          <UseFulLink />
          <ContactLink />
        </div>
      </div>
    </section>
  );
}
