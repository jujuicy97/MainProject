const ProductInfo = () => {
  return (
    <section className="product-info">
      <h2 className="title-info">Product Info</h2>

      <div className="info-grid">
        <div className="item">
          <h3>제품명</h3>
          <span>Re:note 진환경 재생지 노트</span>
        </div>

        <div className="item">
          <h3>사이즈</h3>
          <span>150mm x 210mm / A5</span>
        </div>
      </div>
      <hr />

      <div className="info-list">
        <h3>구성품 또는 소재</h3>
        <ul>
          <li>재생지 표지</li>
          <li>재생지 내지 100매</li>
          <li>천연 수성 잉크</li>
          <li>친환경 접착제 사용</li>
        </ul>
      </div>

      <hr />
    </section>
  );
};

export default ProductInfo;
