const TextArea = ({ content }: { content: string }) => (
  <section className="py-8 lg:p-12 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className={`text-2xl mb-4`}>
        Professional Painter and Decorators in the Isle of Man
      </h2>
      <p className={`mb-3`}>
        Buchanan and Pitts are a well-established government registered painting
        and decorating company. The company has grown to become a business built
        on recommendations, and repeat customers are part of our success. As one
        of the Islands leading decorating companies, we have been renovating
        people&apos;s homes and offices for almost 4 decades.
      </p>

      <p className={`mb-3`}>
        The company are fully accredited and hold the necessary insurances to
        ensure that you meet all of your legal obligations when allowing us into
        your home or workplace. You can rest assured that we have the manpower
        and skill to meet the tightest of deadlines on the most challenging of
        projects.
      </p>

      <p className={`mb-3`}>
        We offer competitive rates on all aspects of commercial and domestic
        painting and decorating work.
      </p>

      <p className={`mb-3`}>
        If we can help in any way with advice or if you are looking for a
        painter and decorator in the Isle of Man please get in touch for a
        totally free, no obligation, quotation.
      </p>
      <p>{content}</p>
    </div>
  </section>
);

export default TextArea;
