window.onload = () => {
    const images = [
     "https://vn.20minut.ua/img/cache/news_main/news/0031/22/3021954-smartfon-mriyi-chomu-varto-obrati-iphone-14-pro-novini-kompaniy.jpeg?hash=2023-04-20-12-08-51",
     "https://blog.mta.ua/assets/images/cache/assets/images/2023/listopad/top-android-smartfoniv/best-smartphones-540x360.jpg",
     "https://patifon.ua/storage/web/source//2/NicXwxpurqItfAHwWC7Ipjbs1taisWds.jpg",
     "https://www.vodafone.ua/shop/media/wysiwyg/novosti/csm_4_zu_3_teaser_Huawei_P30_Pro_74961842bd.jpg",
     "https://www.vodafone.ua/shop/media/wysiwyg/novosti/The-Best-Phones-of-2020.jpg"  
    ];
  
    const slider = document.querySelector('.slider');
    const imageElement = slider.querySelector('img');
  
    let currentIndex = 0;
    let intervalId = null;
  
    const slideShow = (interval) => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
      }, interval);
    };
  
    const startSlideshow = (interval = 3000) => {
      slideShow(interval);
    };
  
    const stopSlideshow = () => {
      clearInterval(intervalId);
    };
  
    startSlideshow();

}