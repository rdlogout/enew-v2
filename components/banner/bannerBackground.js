const BannerBackground = () => {
  return (
    <div id="banner-background">
      <div>
        <img id="dot-1" src="./banner-dot-1.png" />
      </div>
      <img src="./banner-user-bg.png" id="user-bg" />
      <div className="d-flex " id="user-img-div">
        <img src="./banner-user.png" id="user-img" />
        <img id="dot-2" src="./banner-dot-1.png" />
      </div>
    </div>
  );
};

export default BannerBackground;
